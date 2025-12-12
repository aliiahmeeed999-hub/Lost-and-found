/**
 * API Route: POST /api/notifications/mark-read
 * Marks one or multiple notifications as read
 */

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get('token');
    const token = tokenCookie?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded || !('userId' in decoded)) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const body = await request.json();
    let { notificationId, notificationIds } = body;

    // Support both single and multiple IDs
    if (!notificationId && !notificationIds) {
      return NextResponse.json(
        { error: 'notificationId or notificationIds is required' },
        { status: 400 }
      );
    }

    const ids = notificationIds ? (Array.isArray(notificationIds) ? notificationIds : [notificationIds]) : [notificationId];

    // Verify all notifications belong to the user
    const notifications = await prisma.notification.findMany({
      where: { id: { in: ids } },
      select: { id: true, userId: true }
    });

    const unauthorizedIds = notifications.filter((n: { id: number; userId: number }) => n.userId !== decoded.userId);
    if (unauthorizedIds.length > 0) {
      return NextResponse.json(
        { error: 'Unauthorized: cannot update other user notifications' },
        { status: 403 }
      );
    }

    // Update notifications
    const updated = await prisma.notification.updateMany({
      where: { id: { in: ids } },
      data: { isRead: true }
    });

    return NextResponse.json(
      {
        success: true,
        message: `${updated.count} notification(s) marked as read`,
        count: updated.count
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in POST /api/notifications/mark-read:', error);

    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
