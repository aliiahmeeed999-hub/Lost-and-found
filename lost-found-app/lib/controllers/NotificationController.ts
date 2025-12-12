/**
 * MONOLITHIC APPLICATION LAYER: /controllers
 * 
 * Notification Controller
 * Handles incoming HTTP requests for notifications
 * Validates input, delegates to services, formats responses
 */

import { NextResponse } from 'next/server';
import { NotificationService } from '@/lib/services/NotificationService';
import { getUserFromCookies } from '@/lib/auth';

export class NotificationController {
  /**
   * GET /api/notifications/list
   * Get all notifications for authenticated user
   */
  static async getAll(request: Request) {
    try {
      const user = await getUserFromCookies();
      if (!user) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }

      const { searchParams } = new URL(request.url);
      const page = parseInt(searchParams.get('page') || '1');
      const limit = parseInt(searchParams.get('limit') || '10');

      const result = await NotificationService.getUserNotifications(
        user.userId,
        page,
        limit
      );

      return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
      console.error('Get notifications error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to fetch notifications' },
        { status: 500 }
      );
    }
  }

  /**
   * GET /api/notifications/unread
   * Get unread notifications for authenticated user
   */
  static async getUnread(request: Request) {
    try {
      const user = await getUserFromCookies();
      if (!user) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }

      const result = await NotificationService.getUnreadNotifications(user.userId);

      return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
      console.error('Get unread notifications error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to fetch notifications' },
        { status: 500 }
      );
    }
  }

  /**
   * POST /api/notifications/create
   * Create a new notification
   */
  static async create(request: Request) {
    try {
      const user = await getUserFromCookies();
      if (!user) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }

      const body = await request.json();

      // Validate input
      if (!body.type || !body.title || !body.message) {
        return NextResponse.json(
          { error: 'Type, title, and message are required' },
          { status: 400 }
        );
      }

      const notification = await NotificationService.createNotification({
        userId: user.userId,
        type: body.type,
        title: body.title,
        message: body.message,
        link: body.link,
      });

      return NextResponse.json(
        {
          success: true,
          message: 'Notification created',
          notification,
        },
        { status: 201 }
      );
    } catch (error: any) {
      console.error('Create notification error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to create notification' },
        { status: 400 }
      );
    }
  }

  /**
   * PUT /api/notifications/:notificationId/mark-read
   * Mark notification as read
   */
  static async markAsRead(request: Request, notificationId: number) {
    try {
      const user = await getUserFromCookies();
      if (!user) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }

      const notification = await NotificationService.markAsRead(
        notificationId,
        user.userId
      );

      return NextResponse.json(
        {
          success: true,
          message: 'Notification marked as read',
          notification,
        },
        { status: 200 }
      );
    } catch (error: any) {
      console.error('Mark as read error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to mark as read' },
        { status: error.message.includes('permission') ? 403 : 400 }
      );
    }
  }

  /**
   * DELETE /api/notifications/:notificationId
   * Delete notification
   */
  static async delete(request: Request, notificationId: number) {
    try {
      const user = await getUserFromCookies();
      if (!user) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }

      await NotificationService.deleteNotification(notificationId, user.userId);

      return NextResponse.json(
        {
          success: true,
          message: 'Notification deleted',
        },
        { status: 200 }
      );
    } catch (error: any) {
      console.error('Delete notification error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to delete notification' },
        { status: error.message.includes('permission') ? 403 : 400 }
      );
    }
  }
}

export default NotificationController;
