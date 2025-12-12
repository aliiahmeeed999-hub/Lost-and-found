/**
 * MONOLITHIC ARCHITECTURE: Auth Route Handler
 * 
 * POST /api/auth/logout
 * This route delegates to AuthController which clears the auth token
 */

import { AuthController } from '@/lib/controllers/AuthController';

export async function POST() {
  return AuthController.logout();
}