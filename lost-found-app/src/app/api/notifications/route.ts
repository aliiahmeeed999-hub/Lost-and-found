/**
 * MONOLITHIC ARCHITECTURE: Notifications Route Handler
 * 
 * GET /api/notifications
 * This route delegates to NotificationController which uses:
 * NotificationService (business logic) → NotificationRepository (data access)
 */

import { NotificationController } from '@/lib/controllers/NotificationController';

export async function GET(request: any) {
  return NotificationController.getAll(request);
}
  } catch (error) {
    console.error('Error in GET /api/notifications:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
