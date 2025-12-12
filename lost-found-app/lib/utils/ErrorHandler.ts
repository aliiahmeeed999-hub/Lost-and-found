/**
 * MONOLITHIC APPLICATION LAYER: /utils
 * 
 * Error Handler
 * Centralized error handling utility
 */

import { NextResponse } from 'next/server';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ErrorHandler {
  /**
   * Handle authentication errors
   */
  static unauthorized(message: string = 'Unauthorized') {
    return new AppError(401, message);
  }

  /**
   * Handle forbidden errors
   */
  static forbidden(message: string = 'Forbidden') {
    return new AppError(403, message);
  }

  /**
   * Handle not found errors
   */
  static notFound(message: string = 'Not found') {
    return new AppError(404, message);
  }

  /**
   * Handle validation errors
   */
  static validation(message: string = 'Validation error') {
    return new AppError(400, message);
  }

  /**
   * Handle server errors
   */
  static server(message: string = 'Internal server error') {
    return new AppError(500, message);
  }

  /**
   * Format error response
   */
  static formatResponse(error: any): NextResponse {
    if (error instanceof AppError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: error.statusCode }
      );
    }

    console.error('Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export default ErrorHandler;
