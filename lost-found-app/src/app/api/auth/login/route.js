/**
 * MONOLITHIC ARCHITECTURE: Auth Route Handler
 * 
 * POST /api/auth/login
 * This route delegates to AuthController which uses:
 * AuthService (business logic) → UserRepository (data access)
 */

import { AuthController } from '@/lib/controllers/AuthController';

export async function POST(request) {
  return AuthController.login(request);
}