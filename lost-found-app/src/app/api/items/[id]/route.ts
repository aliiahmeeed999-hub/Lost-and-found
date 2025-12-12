/**
 * MONOLITHIC ARCHITECTURE: Item Detail Route Handler
 * 
 * GET/PUT/DELETE /api/items/[id]
 * This route delegates to ItemController which uses:
 * ItemService (business logic) → ItemRepository (data access)
 */

import { ItemController } from '@/lib/controllers/ItemController';

export async function GET(request: any, { params }: any) {
  return ItemController.getById(request, params);
}

export async function PUT(request: any, { params }: any) {
  return ItemController.update(request, params);
}

export async function DELETE(request: any, { params }: any) {
  return ItemController.delete(request, params);
}
    }

    // Increment view count
    await prisma.item.update({
      where: { id: itemId },
      data: { views: { increment: 1 } },
    });

    return NextResponse.json(item, { status: 200 });
  } catch (error) {
    console.error('Error fetching item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch item' },
      { status: 500 }
    );
  }
}

// DELETE /api/items/[id] - Delete an item
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Verify user is authenticated
    const user = await getUserFromCookies();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id: itemIdStr } = await params;
    const itemId = parseInt(itemIdStr, 10);

    // Get the item and verify ownership
    const item = await prisma.item.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      );
    }

    if (item.userId !== (user as any).userId) {
      return NextResponse.json(
        { error: 'You can only delete your own items' },
        { status: 403 }
      );
    }

    // Delete the item
    // Note: Cascade deletes should handle matches and notifications
    await prisma.item.delete({
      where: { id: itemId },
    });

    return NextResponse.json(
      { 
        message: 'Item deleted successfully',
        id: itemId 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting item:', error);
    return NextResponse.json(
      { error: 'Failed to delete item' },
      { status: 500 }
    );
  }
}
