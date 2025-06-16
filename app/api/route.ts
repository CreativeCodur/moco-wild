import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { validateJSON, sanitizeSQL } from '@/lib/security'
import { cache } from '@/lib/cache'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Initialize rate limiter
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, '10 s'), // 20 requests per 10 seconds
  analytics: true,
})

// Security headers
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
  'X-DNS-Prefetch-Control': 'on',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = headers().get('x-forwarded-for') ?? '127.0.0.1'
    const { success, limit, reset, remaining } = await ratelimit.limit(ip)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
            ...securityHeaders,
          }
        }
      )
    }

    // Parse and validate request body
    const body = await request.text()
    const validatedData = validateJSON(body)
    
    if (!validatedData) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { 
          status: 400,
          headers: securityHeaders
        }
      )
    }

    // Sanitize any SQL inputs
    const sanitizedData = Object.entries(validatedData).reduce((acc, [key, value]) => {
      acc[key] = typeof value === 'string' ? sanitizeSQL(value) : value
      return acc
    }, {} as Record<string, any>)

    // Process the request (add your business logic here)
    const result = await processRequest(sanitizedData)

    // Cache the result if appropriate
    if (shouldCache(sanitizedData)) {
      cache.set(`api:${JSON.stringify(sanitizedData)}`, result)
    }

    return NextResponse.json(
      result,
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
          ...securityHeaders,
        }
      }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { 
        status: 500,
        headers: securityHeaders
      }
    )
  }
}

// Helper function to determine if response should be cached
function shouldCache(data: any): boolean {
  // Add your caching logic here
  return true
}

// Helper function to process the request
async function processRequest(data: any) {
  // Add your business logic here
  return { success: true, data }
} 