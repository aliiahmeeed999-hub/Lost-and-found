/**
 * MONOLITHIC APPLICATION LAYER: /repositories
 * 
 * Item Repository
 * Data access layer for Item entity - handles all database queries for items
 * No business logic here, only CRUD operations and database interactions
 */

import { prisma } from '@/lib/prisma';
import { IItem, IItemCreateRequest, IItemUpdateRequest } from '@/lib/models/Item';

export class ItemRepository {
  /**
   * Find item by ID
   */
  static async findById(id: number) {
    return prisma.item.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            reputation: true,
            profileImage: true,
          },
        },
      },
    });
  }

  /**
   * Find all items with filters
   */
  static async findAll(filters: {
    status?: string;
    category?: string;
    itemStatus?: string;
    skip?: number;
    take?: number;
  }) {
    const where: any = {};

    if (filters.status) where.status = filters.status;
    if (filters.category) where.category = filters.category;
    if (filters.itemStatus) where.itemStatus = filters.itemStatus;

    return prisma.item.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            reputation: true,
            profileImage: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      skip: filters.skip || 0,
      take: filters.take || 10,
    });
  }

  /**
   * Count items with filters
   */
  static async countAll(filters: {
    status?: string;
    category?: string;
    itemStatus?: string;
  }) {
    const where: any = {};

    if (filters.status) where.status = filters.status;
    if (filters.category) where.category = filters.category;
    if (filters.itemStatus) where.itemStatus = filters.itemStatus;

    return prisma.item.count({ where });
  }

  /**
   * Find items by user ID
   */
  static async findByUserId(userId: number, skip?: number, take?: number) {
    return prisma.item.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      skip: skip || 0,
      take: take || 10,
    });
  }

  /**
   * Create new item
   */
  static async create(data: {
    userId: number;
    title: string;
    description: string;
    category: string;
    status: string;
    locationLost?: string;
    locationFound?: string;
    locationDetails?: string;
    dateLost?: Date;
    dateFound?: Date;
    imageUrls?: string[];
    contactInfo?: string;
    rewardAmount?: number;
    tags?: string[];
    color?: string;
    brand?: string;
    distinguishingFeatures?: string;
  }) {
    return prisma.item.create({
      data: {
        userId: data.userId,
        title: data.title,
        description: data.description,
        category: data.category,
        status: data.status,
        locationLost: data.locationLost,
        locationFound: data.locationFound,
        locationDetails: data.locationDetails,
        dateLost: data.dateLost,
        dateFound: data.dateFound,
        imageUrls: data.imageUrls || [],
        contactInfo: data.contactInfo,
        rewardAmount: data.rewardAmount ? parseFloat(data.rewardAmount as any) : null,
        tags: data.tags || [],
        color: data.color,
        brand: data.brand,
        distinguishingFeatures: data.distinguishingFeatures,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            reputation: true,
            profileImage: true,
          },
        },
      },
    });
  }

  /**
   * Update item by ID
   */
  static async updateById(id: number, data: IItemUpdateRequest) {
    return prisma.item.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        category: data.category,
        status: data.status,
        locationLost: data.locationLost,
        locationFound: data.locationFound,
        locationDetails: data.locationDetails,
        dateLost: data.dateLost ? new Date(data.dateLost) : undefined,
        dateFound: data.dateFound ? new Date(data.dateFound) : undefined,
        imageUrls: data.imageUrls,
        contactInfo: data.contactInfo,
        rewardAmount: data.rewardAmount ? parseFloat(data.rewardAmount as any) : undefined,
        tags: data.tags,
        color: data.color,
        brand: data.brand,
        distinguishingFeatures: data.distinguishingFeatures,
        itemStatus: data.itemStatus,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            reputation: true,
            profileImage: true,
          },
        },
      },
    });
  }

  /**
   * Increment view count
   */
  static async incrementViews(id: number) {
    return prisma.item.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  }

  /**
   * Update item status
   */
  static async updateItemStatus(id: number, status: string) {
    return prisma.item.update({
      where: { id },
      data: { itemStatus: status },
    });
  }

  /**
   * Delete item by ID
   */
  static async deleteById(id: number) {
    return prisma.item.delete({
      where: { id },
    });
  }

  /**
   * Search items by title or description
   */
  static async search(query: string, skip?: number, take?: number) {
    return prisma.item.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { tags: { hasSome: [query] } },
        ],
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            reputation: true,
            profileImage: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      skip: skip || 0,
      take: take || 10,
    });
  }
}

export default ItemRepository;
