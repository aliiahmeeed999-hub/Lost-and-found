import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserFromCookies } from '@/lib/auth';

export async function GET(request) {
  try {
    // Get query parameters for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status'); // 'lost' or 'found'
    const category = searchParams.get('category');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;

    const skip = (page - 1) * limit;

    // Build filter object
    const where = {};
    if (status && ['lost', 'found'].includes(status)) {
      where.status = status;
    }
    if (category) {
      where.category = category;
    }

    // Get total count for pagination
    const total = await prisma.item.count({ where });

    // Get items with user info
    const items = await prisma.item.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            profileImage: true
          }
        }
      }
    });

    return NextResponse.json({
      success: true,
      items,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Fetch items error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Check authentication
    const user = await getUserFromCookies();
    
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json();
    const {
      title,
      description,
      category,
      status,
      itemStatus,
      locationLost,
      locationFound,
      locationDetails,
      dateLost,
      dateFound,
      color,
      brand,
      distinguishingFeatures,
      contactInfo,
      rewardAmount,
      tags,
      imageUrls
    } = body;

    // Validation
    if (!title || !title.trim()) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    if (!description || !description.trim()) {
      return NextResponse.json(
        { error: 'Description is required' },
        { status: 400 }
      );
    }

    if (!category) {
      return NextResponse.json(
        { error: 'Category is required' },
        { status: 400 }
      );
    }

    if (!status || !['lost', 'found'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    if (status === 'lost' && !locationLost) {
      return NextResponse.json(
        { error: 'Location where item was lost is required' },
        { status: 400 }
      );
    }

    if (status === 'found' && !locationFound) {
      return NextResponse.json(
        { error: 'Location where item was found is required' },
        { status: 400 }
      );
    }

    // Create item in database
    const item = await prisma.item.create({
      data: {
        userId: user.userId,
        title: title.trim(),
        description: description.trim(),
        category,
        status,
        itemStatus: itemStatus || 'active',
        locationLost: locationLost?.trim() || null,
        locationFound: locationFound?.trim() || null,
        locationDetails: locationDetails?.trim() || null,
        dateLost: dateLost ? new Date(dateLost) : null,
        dateFound: dateFound ? new Date(dateFound) : null,
        color: color?.trim() || null,
        brand: brand?.trim() || null,
        distinguishingFeatures: distinguishingFeatures?.trim() || null,
        contactInfo: contactInfo?.trim() || null,
        rewardAmount: rewardAmount ? parseFloat(rewardAmount) : null,
        tags: tags || [],
        imageUrls: imageUrls || []
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            profileImage: true
          }
        }
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Item reported successfully',
      item
    }, { status: 201 });

  } catch (error) {
    console.error('Create item error:', error);
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    );
  }
}