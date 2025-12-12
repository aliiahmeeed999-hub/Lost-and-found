/**
 * MONOLITHIC APPLICATION LAYER: /utils
 * 
 * Response Formatter
 * Standardized API response formatting utility
 */

import { NextResponse } from 'next/server';

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export class ResponseFormatter {
  /**
   * Format success response
   */
  static success<T>(
    data: T,
    message: string = 'Success',
    status: number = 200
  ): NextResponse<ApiResponse<T>> {
    return NextResponse.json(
      {
        success: true,
        message,
        data,
      },
      { status }
    );
  }

  /**
   * Format error response
   */
  static error(
    error: string,
    status: number = 400
  ): NextResponse<ApiResponse> {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status }
    );
  }

  /**
   * Format list response with pagination
   */
  static list<T>(
    items: T[],
    total: number,
    page: number,
    limit: number
  ): NextResponse<any> {
    return NextResponse.json(
      {
        success: true,
        data: items,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      }
    );
  }
}

export default ResponseFormatter;
