/**
 * MONOLITHIC APPLICATION LAYER: /services
 * 
 * Item Service
 * Contains all business logic for managing items (lost/found)
 * Coordinates between controllers and repositories
 */

import { ItemRepository } from '@/lib/repositories/ItemRepository';
import { UserRepository } from '@/lib/repositories/UserRepository';
import { IItemCreateRequest, IItemUpdateRequest } from '@/lib/models/Item';
import { MESSAGES, ITEM_CONDITION, PAGINATION } from '@/lib/config/constants';

export class ItemService {
  /**
   * Create a new item (lost or found)
   * Business logic: validation, user ownership, image handling
   */
  static async createItem(userId: number, data: IItemCreateRequest) {
    // Verify user exists
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }

    // Validate required fields
    if (!data.title || !data.description || !data.category || !data.status) {
      throw new Error('Title, description, category, and status are required');
    }

    // Create item
    const item = await ItemRepository.create({
      userId,
      title: data.title,
      description: data.description,
      category: data.category,
      status: data.status, // 'lost' or 'found'
      locationLost: data.locationLost,
      locationFound: data.locationFound,
      locationDetails: data.locationDetails,
      dateLost: data.dateLost ? new Date(data.dateLost) : undefined,
      dateFound: data.dateFound ? new Date(data.dateFound) : undefined,
      imageUrls: data.imageUrls,
      contactInfo: data.contactInfo,
      rewardAmount: data.rewardAmount ? parseFloat(data.rewardAmount) : undefined,
      tags: data.tags,
      color: data.color,
      brand: data.brand,
      distinguishingFeatures: data.distinguishingFeatures,
    });

    return item;
  }

  /**
   * Get item by ID with user profile
   */
  static async getItemById(itemId: number) {
    const item = await ItemRepository.findById(itemId);
    if (!item) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    // Increment views
    await ItemRepository.incrementViews(itemId);

    return item;
  }

  /**
   * Get all items with pagination and filters
   */
  static async getAllItems(filters: {
    status?: string;
    category?: string;
    itemStatus?: string;
    page?: number;
    limit?: number;
  }) {
    const page = filters.page || PAGINATION.DEFAULT_PAGE;
    const limit = Math.min(filters.limit || PAGINATION.DEFAULT_LIMIT, PAGINATION.MAX_LIMIT);
    const skip = (page - 1) * limit;

    const items = await ItemRepository.findAll({
      status: filters.status,
      category: filters.category,
      itemStatus: filters.itemStatus,
      skip,
      take: limit,
    });

    const total = await ItemRepository.countAll({
      status: filters.status,
      category: filters.category,
      itemStatus: filters.itemStatus,
    });

    return {
      items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Get items by user ID
   */
  static async getUserItems(userId: number, page?: number, limit?: number) {
    const pageNum = page || PAGINATION.DEFAULT_PAGE;
    const pageLimit = Math.min(limit || PAGINATION.DEFAULT_LIMIT, PAGINATION.MAX_LIMIT);
    const skip = (pageNum - 1) * pageLimit;

    const items = await ItemRepository.findByUserId(userId, skip, pageLimit);

    return items;
  }

  /**
   * Update item
   * Business logic: validate ownership, permission checks
   */
  static async updateItem(itemId: number, userId: number, data: IItemUpdateRequest) {
    // Get item
    const item = await ItemRepository.findById(itemId);
    if (!item) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    // Verify ownership
    if (item.userId !== userId) {
      throw new Error('You do not have permission to update this item');
    }

    // Update item
    const updatedItem = await ItemRepository.updateById(itemId, data);

    return updatedItem;
  }

  /**
   * Delete item
   * Business logic: validate ownership
   */
  static async deleteItem(itemId: number, userId: number) {
    // Get item
    const item = await ItemRepository.findById(itemId);
    if (!item) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    // Verify ownership
    if (item.userId !== userId) {
      throw new Error('You do not have permission to delete this item');
    }

    // Delete item
    await ItemRepository.deleteById(itemId);

    return { message: MESSAGES.ITEM_DELETED };
  }

  /**
   * Search items
   */
  static async searchItems(query: string, page?: number, limit?: number) {
    const pageNum = page || PAGINATION.DEFAULT_PAGE;
    const pageLimit = Math.min(limit || PAGINATION.DEFAULT_LIMIT, PAGINATION.MAX_LIMIT);
    const skip = (pageNum - 1) * pageLimit;

    const items = await ItemRepository.search(query, skip, pageLimit);

    return items;
  }

  /**
   * Mark item as reunited
   */
  static async markAsReunited(itemId: number, userId: number) {
    const item = await ItemRepository.findById(itemId);
    if (!item) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    if (item.userId !== userId) {
      throw new Error('You do not have permission to update this item');
    }

    const updatedItem = await ItemRepository.updateItemStatus(itemId, ITEM_CONDITION.REUNITED);
    return updatedItem;
  }

  /**
   * Mark item as closed
   */
  static async markAsClosed(itemId: number, userId: number) {
    const item = await ItemRepository.findById(itemId);
    if (!item) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    if (item.userId !== userId) {
      throw new Error('You do not have permission to update this item');
    }

    const updatedItem = await ItemRepository.updateItemStatus(itemId, ITEM_CONDITION.CLOSED);
    return updatedItem;
  }
}

export default ItemService;
