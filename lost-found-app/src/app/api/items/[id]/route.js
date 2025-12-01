import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: 'Item ID is required' },
        { status: 400 }
      );
    }

    // Parse ID as integer
    const itemId = parseInt(id);
    if (isNaN(itemId)) {
      return NextResponse.json(
        { error: 'Invalid item ID' },
        { status: 400 }
      );
    }

    // Fetch the item by ID
    const item = await prisma.item.findUnique({
      where: { id: itemId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            profileImage: true,
            reputation: true
          }
        }
      }
    });

    // If item not found, return 404
    if (!item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      );
    }

    // Increment view count
    await prisma.item.update({
      where: { id: itemId },
      data: { views: { increment: 1 } }
    });

    return NextResponse.json({
      success: true,
      item
    });

  } catch (error) {
    console.error('Fetch item error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch item', details: error.message },
      { status: 500 }
    );
  }
}

