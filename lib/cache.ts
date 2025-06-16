type CacheOptions = {
  maxAge?: number // in milliseconds
  staleWhileRevalidate?: boolean
}

class Cache {
  private static instance: Cache
  private cache: Map<string, { value: any; timestamp: number }>
  private options: CacheOptions

  private constructor(options: CacheOptions = {}) {
    this.cache = new Map()
    this.options = {
      maxAge: 5 * 60 * 1000, // 5 minutes default
      staleWhileRevalidate: true,
      ...options,
    }
  }

  static getInstance(options?: CacheOptions): Cache {
    if (!Cache.instance) {
      Cache.instance = new Cache(options)
    }
    return Cache.instance
  }

  set(key: string, value: any): void {
    this.cache.set(key, {
      value,
      timestamp: Date.now(),
    })
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key)
    if (!item) return null

    const age = Date.now() - item.timestamp
    if (age > this.options.maxAge!) {
      if (this.options.staleWhileRevalidate) {
        // Return stale data while fetching fresh data
        return item.value
      }
      this.cache.delete(key)
      return null
    }

    return item.value
  }

  delete(key: string): void {
    this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }
}

export const cache = Cache.getInstance() 