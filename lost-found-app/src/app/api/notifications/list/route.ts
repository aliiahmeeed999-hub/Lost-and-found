/**
 * MONOLITHIC ARCHITECTURE: Notifications List Route Handler
 * 
 * GET /api/notifications/list
 * This route delegates to NotificationController which uses:
 * NotificationService (business logic) → NotificationRepository (data access)
 */

import { NotificationController } from '@/lib/controllers/NotificationController';

export async function GET(request: any) {
  return NotificationController.getAll(request);
}
