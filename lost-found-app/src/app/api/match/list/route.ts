/**
 * MONOLITHIC ARCHITECTURE: Match Route Handler
 * 
 * GET /api/match/list
 * This route delegates to MatchController which uses:
 * MatchService (business logic) → MatchRepository (data access)
 */

import { MatchController } from '@/lib/controllers/MatchController';

export async function GET(request: any) {
  return MatchController.getAll(request);
}
      include: {
        lostItem: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                profileImage: true,
              },
            },
          },
        },
        foundItem: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                profileImage: true,
              },
            },
          },
        },
      },
      orderBy: {
        matchScore: 'desc',
      },
    });

    return NextResponse.json(
      {
        success: true,
        count: matches.length,
        matches,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in GET /api/match/list:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
