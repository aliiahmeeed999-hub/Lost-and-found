/**
 * MONOLITHIC ARCHITECTURE: User Profile Route Handler
 * 
 * GET /api/user/dashboard/profile
 * This route delegates to UserController which uses:
 * UserService (business logic) → UserRepository (data access)
 */

import { UserController } from '@/lib/controllers/UserController';

export async function GET(request: any) {
  return UserController.getProfile(request);
}
