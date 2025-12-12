/**
 * MONOLITHIC ARCHITECTURE: Create Notification Route Handler
 * 
 * POST /api/notifications/create
 * This route delegates to NotificationController which uses:
 * NotificationService (business logic) → NotificationRepository (data access)
 */

import { NotificationController } from '@/lib/controllers/NotificationController';

export async function POST(request: any) {
  return NotificationController.create(request);
}
      );
    }

    const validTypes = ['match', 'found', 'message', 'badge', 'reminder', 'nearby'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid notification type' },
        { status: 400 }
      );
    }

    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Create notification
    const notification = await prisma.notification.create({
      data: {
        userId,
        type,
        title: title.trim(),
        message: message.trim(),
        link: link?.trim() || null,
        isRead: false
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Notification created successfully',
        notification
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create notification error:', error);
    return NextResponse.json(
      {
        error: 'Failed to create notification',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
