/**
 * MONOLITHIC ARCHITECTURE: User Profile Route Handler
 * 
 * GET /api/user/profile
 * This route delegates to UserController which uses:
 * UserService (business logic) → UserRepository (data access)
 */

import { UserController } from '@/lib/controllers/UserController';

export async function GET(request: any) {
  return UserController.getProfile(request);
}

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get profile error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
      { status: 500 }
    );
  }
}
