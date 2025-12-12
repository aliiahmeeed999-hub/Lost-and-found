/**
 * MONOLITHIC APPLICATION LAYER: /config
 * 
 * Application Constants
 * Global configuration values, constants, and settings used throughout the application
 */

// ============================================
// CATEGORY CONSTANTS
// ============================================
export const ITEM_CATEGORIES = {
  ELECTRONICS: 'electronics',
  DOCUMENTS: 'documents',
  KEYS: 'keys',
  BAGS: 'bags',
  CLOTHING: 'clothing',
  ACCESSORIES: 'accessories',
  BOOKS: 'books',
  OTHER: 'other',
} as const;

export const CATEGORY_LABELS: Record<string, string> = {
  electronics: 'Electronics',
  documents: 'Documents',
  keys: 'Keys',
  bags: 'Bags & Luggage',
  clothing: 'Clothing',
  accessories: 'Accessories',
  books: 'Books',
  other: 'Other Items',
};

// ============================================
// STATUS CONSTANTS
// ============================================
export const ITEM_STATUS = {
  LOST: 'lost',
  FOUND: 'found',
} as const;

export const ITEM_CONDITION = {
  ACTIVE: 'active',
  REUNITED: 'reunited',
  CLOSED: 'closed',
} as const;

export const MATCH_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  REJECTED: 'rejected',
} as const;

// ============================================
// NOTIFICATION TYPES
// ============================================
export const NOTIFICATION_TYPES = {
  MATCH: 'match',
  MESSAGE: 'message',
  UPDATE: 'update',
  SYSTEM: 'system',
} as const;

// ============================================
// PAGINATION & LIMITS
// ============================================
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 50,
  MIN_LIMIT: 1,
} as const;

// ============================================
// VALIDATION RULES
// ============================================
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 6,
  PASSWORD_MAX_LENGTH: 128,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 100,
  PHONE_PATTERN: /^[\d\s\-\+\(\)]+$/,
  STUDENT_ID_PATTERN: /^[A-Za-z0-9\-]+$/,
  EMAIL_MAX_LENGTH: 255,
} as const;

// ============================================
// IMAGE UPLOAD CONFIG
// ============================================
export const IMAGE_CONFIG = {
  MAX_FILE_SIZE_MB: 5,
  MAX_FILES_PER_ITEM: 5,
  SUPPORTED_FORMATS: ['image/jpeg', 'image/png', 'image/webp'],
  CLOUDINARY_FOLDER_ITEMS: 'items',
  CLOUDINARY_FOLDER_PROFILES: 'profiles',
  TRANSFORM_WIDTH: 1000,
  TRANSFORM_HEIGHT: 1000,
} as const;

// ============================================
// TOKEN & AUTH CONFIG
// ============================================
export const AUTH_CONFIG = {
  TOKEN_EXPIRY: '7d',
  TOKEN_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  SESSION_MAX_AGE: 7 * 24 * 60 * 60, // 7 days in seconds
  COOKIE_NAME: 'auth_token',
} as const;

// ============================================
// MATCHING ALGORITHM CONFIG
// ============================================
export const MATCHING_CONFIG = {
  CATEGORY_WEIGHT: 0.3,
  COLOR_WEIGHT: 0.2,
  BRAND_WEIGHT: 0.15,
  FEATURES_WEIGHT: 0.25,
  LOCATION_WEIGHT: 0.1,
  MIN_MATCH_SCORE: 0.6, // 60% minimum to be considered a match
} as const;

// ============================================
// API RESPONSE MESSAGES
// ============================================
export const MESSAGES = {
  // Auth
  AUTH_INVALID_EMAIL_PASSWORD: 'Invalid email or password',
  AUTH_EMAIL_ALREADY_EXISTS: 'Email already in use',
  AUTH_INVALID_EMAIL_FORMAT: 'Invalid email format',
  AUTH_PASSWORD_REQUIRED: 'Password is required',
  AUTH_USER_NOT_FOUND: 'User not found',
  AUTH_UNAUTHORIZED: 'Unauthorized access',

  // Items
  ITEM_CREATED: 'Item created successfully',
  ITEM_UPDATED: 'Item updated successfully',
  ITEM_DELETED: 'Item deleted successfully',
  ITEM_NOT_FOUND: 'Item not found',
  ITEM_UPLOAD_FAILED: 'Image upload failed',

  // Matches
  MATCH_FOUND: 'Match found',
  MATCH_NOT_FOUND: 'No matches found',
  MATCH_CONFIRMED: 'Match confirmed successfully',

  // Notifications
  NOTIFICATION_CREATED: 'Notification created',
  NOTIFICATION_MARKED_READ: 'Notification marked as read',

  // User
  USER_PROFILE_UPDATED: 'Profile updated successfully',
  USER_NOT_FOUND: 'User not found',

  // Server
  SERVER_ERROR: 'Internal server error',
  BAD_REQUEST: 'Bad request',
} as const;
