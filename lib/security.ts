/**
 * Security utility functions for input validation and sanitization
 */

// Regular expressions for validation
const URL_PATTERN = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_PATTERN = /^\+?[\d\s-()]{10,}$/

/**
 * Sanitizes HTML content to prevent XSS attacks
 */
export function sanitizeHTML(input: string): string {
  const div = document.createElement('div')
  div.textContent = input
  return div.innerHTML
}

/**
 * Validates and sanitizes URLs
 */
export function validateURL(url: string): string | null {
  try {
    const sanitized = sanitizeHTML(url)
    if (!URL_PATTERN.test(sanitized)) {
      return null
    }
    return sanitized
  } catch {
    return null
  }
}

/**
 * Validates and sanitizes email addresses
 */
export function validateEmail(email: string): string | null {
  const sanitized = sanitizeHTML(email)
  if (!EMAIL_PATTERN.test(sanitized)) {
    return null
  }
  return sanitized
}

/**
 * Validates and sanitizes phone numbers
 */
export function validatePhone(phone: string): string | null {
  const sanitized = sanitizeHTML(phone)
  if (!PHONE_PATTERN.test(sanitized)) {
    return null
  }
  return sanitized
}

/**
 * Sanitizes user input for database queries
 */
export function sanitizeSQL(input: string): string {
  return input
    .replace(/['";]/g, '') // Remove SQL special characters
    .replace(/--/g, '') // Remove SQL comments
    .replace(/;.*$/g, '') // Remove everything after semicolon
    .trim()
}

/**
 * Validates and sanitizes file names
 */
export function validateFileName(fileName: string): string | null {
  const sanitized = sanitizeHTML(fileName)
  if (!/^[a-zA-Z0-9._-]+$/.test(sanitized)) {
    return null
  }
  return sanitized
}

/**
 * Validates and sanitizes numeric input
 */
export function validateNumber(input: string): number | null {
  const sanitized = sanitizeHTML(input)
  const number = Number(sanitized)
  if (isNaN(number)) {
    return null
  }
  return number
}

/**
 * Validates and sanitizes date input
 */
export function validateDate(input: string): Date | null {
  const sanitized = sanitizeHTML(input)
  const date = new Date(sanitized)
  if (isNaN(date.getTime())) {
    return null
  }
  return date
}

/**
 * Validates and sanitizes password strength
 */
export function validatePassword(password: string): boolean {
  const sanitized = sanitizeHTML(password)
  return (
    sanitized.length >= 8 &&
    /[A-Z]/.test(sanitized) &&
    /[a-z]/.test(sanitized) &&
    /[0-9]/.test(sanitized) &&
    /[^A-Za-z0-9]/.test(sanitized)
  )
}

/**
 * Validates and sanitizes JSON input
 */
export function validateJSON<T>(input: string): T | null {
  try {
    const sanitized = sanitizeHTML(input)
    return JSON.parse(sanitized) as T
  } catch {
    return null
  }
}

/**
 * Validates and sanitizes file size
 */
export function validateFileSize(size: number, maxSize: number): boolean {
  return size > 0 && size <= maxSize
}

/**
 * Validates and sanitizes file type
 */
export function validateFileType(fileName: string, allowedTypes: string[]): boolean {
  const sanitized = sanitizeHTML(fileName)
  const extension = sanitized.split('.').pop()?.toLowerCase()
  return extension ? allowedTypes.includes(extension) : false
} 