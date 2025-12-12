/**
 * MONOLITHIC APPLICATION LAYER: /services
 * 
 * Notification Service
 * Contains all business logic for managing user notifications
 * Coordinates between controllers and repositories
 */

import { NotificationRepository } from '@/lib/repositories/NotificationRepository';
import { UserRepository } from '@/lib/repositories/UserRepository';
import { INotificationCreateRequest } from '@/lib/models/Notification';
import { MESSAGES, NOTIFICATION_TYPES } from '@/lib/config/constants';

export class NotificationService {
  /**
   * Get all notifications for a user
   */
  static async getUserNotifications(userId: number, page?: number, limit?: number) {
    const pageNum = page || 1;
    const pageLimit = Math.min(limit || 10, 50);
    const skip = (pageNum - 1) * pageLimit;

    // Verify user exists
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }

    const notifications = await NotificationRepository.findByUserId(userId, skip, pageLimit);
    const total = await NotificationRepository.countByUserId(userId);

    return {
      notifications,
      pagination: {
        page: pageNum,
        limit: pageLimit,
        total,
        totalPages: Math.ceil(total / pageLimit),
      },
    };
  }

  /**
   * Get unread notifications for a user
   */
  static async getUnreadNotifications(userId: number) {
    // Verify user exists
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }

    const notifications = await NotificationRepository.findUnread(userId);
    const unreadCount = await NotificationRepository.countUnread(userId);

    return {
      notifications,
      unreadCount,
    };
  }

  /**
   * Create a notification
   */
  static async createNotification(data: INotificationCreateRequest) {
    // Verify user exists
    const user = await UserRepository.findById(data.userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }

    const notification = await NotificationRepository.create({
      userId: data.userId,
      type: data.type,
      title: data.title,
      message: data.message,
      link: data.link,
    });

    return notification;
  }

  /**
   * Mark notification as read
   */
  static async markAsRead(notificationId: number, userId: number) {
    // Verify notification exists and belongs to user
    const notification = await NotificationRepository.findById(notificationId);
    if (!notification) {
      throw new Error('Notification not found');
    }

    if (notification.userId !== userId) {
      throw new Error('You do not have permission to update this notification');
    }

    const updatedNotification = await NotificationRepository.markAsRead(notificationId);
    return updatedNotification;
  }

  /**
   * Mark all notifications as read for a user
   */
  static async markAllAsRead(userId: number) {
    // Verify user exists
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }

    const result = await NotificationRepository.markAllAsRead(userId);
    return result;
  }

  /**
   * Delete notification
   */
  static async deleteNotification(notificationId: number, userId: number) {
    // Verify notification exists and belongs to user
    const notification = await NotificationRepository.findById(notificationId);
    if (!notification) {
      throw new Error('Notification not found');
    }

    if (notification.userId !== userId) {
      throw new Error('You do not have permission to delete this notification');
    }

    await NotificationRepository.deleteById(notificationId);
    return { message: 'Notification deleted' };
  }

  /**
   * Send match notification
   * Helper: Creates a match-type notification
   */
  static async sendMatchNotification(
    userId: number,
    matchId: number,
    lostItemTitle: string,
    foundItemTitle: string
  ) {
    return this.createNotification({
      userId,
      type: NOTIFICATION_TYPES.MATCH,
      title: 'Match Found!',
      message: `Your "${lostItemTitle}" might match "${foundItemTitle}"`,
      link: `/matches/${matchId}`,
    });
  }

  /**
   * Send system notification
   */
  static async sendSystemNotification(userId: number, title: string, message: string) {
    return this.createNotification({
      userId,
      type: NOTIFICATION_TYPES.SYSTEM,
      title,
      message,
    });
  }
}

export default NotificationService;
