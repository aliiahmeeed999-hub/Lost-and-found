/**
 * MONOLITHIC APPLICATION LAYER: /services
 * 
 * Match Service
 * Contains all business logic for matching lost and found items
 * Coordinates between controllers and repositories
 */

import { MatchRepository } from '@/lib/repositories/MatchRepository';
import { ItemRepository } from '@/lib/repositories/ItemRepository';
import { UserRepository } from '@/lib/repositories/UserRepository';
import { MESSAGES, MATCH_STATUS } from '@/lib/config/constants';

export class MatchService {
  /**
   * Get all matches with pagination
   */
  static async getAllMatches(filters: {
    status?: string;
    page?: number;
    limit?: number;
  }) {
    const page = filters.page || 1;
    const limit = Math.min(filters.limit || 10, 50);
    const skip = (page - 1) * limit;

    const matches = await MatchRepository.findAll({
      status: filters.status,
      skip,
      take: limit,
    });

    const total = await MatchRepository.countMatches({
      status: filters.status,
    });

    return {
      matches,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Get matches for a specific lost item
   */
  static async getMatchesForLostItem(lostItemId: number) {
    const item = await ItemRepository.findById(lostItemId);
    if (!item) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    const matches = await MatchRepository.findMatchesForLostItem(lostItemId);

    return matches;
  }

  /**
   * Get matches for a specific found item
   */
  static async getMatchesForFoundItem(foundItemId: number) {
    const item = await ItemRepository.findById(foundItemId);
    if (!item) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    const matches = await MatchRepository.findMatchesForFoundItem(foundItemId);

    return matches;
  }

  /**
   * Confirm a match between lost and found items
   * Business logic: validate items exist, permissions, status update
   */
  static async confirmMatch(matchId: number, userId: number) {
    // Get match
    const match = await MatchRepository.findById(matchId);
    if (!match) {
      throw new Error('Match not found');
    }

    // Get items
    const lostItem = await ItemRepository.findById(match.lostItemId);
    const foundItem = await ItemRepository.findById(match.foundItemId);

    if (!lostItem || !foundItem) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    // Verify user is owner of either lost or found item
    if (lostItem.userId !== userId && foundItem.userId !== userId) {
      throw new Error('You do not have permission to confirm this match');
    }

    // Update match status
    const updatedMatch = await MatchRepository.updateById(matchId, {
      status: MATCH_STATUS.CONFIRMED,
    });

    // Increment reputation for both users
    if (lostItem.userId !== userId) {
      await UserRepository.incrementReputation(lostItem.userId, 5);
    }
    if (foundItem.userId !== userId) {
      await UserRepository.incrementReputation(foundItem.userId, 5);
    }

    return updatedMatch;
  }

  /**
   * Reject a match
   */
  static async rejectMatch(matchId: number, userId: number) {
    // Get match
    const match = await MatchRepository.findById(matchId);
    if (!match) {
      throw new Error('Match not found');
    }

    // Get items
    const lostItem = await ItemRepository.findById(match.lostItemId);
    const foundItem = await ItemRepository.findById(match.foundItemId);

    if (!lostItem || !foundItem) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    // Verify user is owner of either lost or found item
    if (lostItem.userId !== userId && foundItem.userId !== userId) {
      throw new Error('You do not have permission to reject this match');
    }

    // Update match status
    const updatedMatch = await MatchRepository.updateById(matchId, {
      status: MATCH_STATUS.REJECTED,
    });

    return updatedMatch;
  }

  /**
   * Create a match (typically called by matching algorithm)
   */
  static async createMatch(data: {
    lostItemId: number;
    foundItemId: number;
    matchScore: number;
    notes?: string;
  }) {
    // Check if items exist
    const lostItem = await ItemRepository.findById(data.lostItemId);
    const foundItem = await ItemRepository.findById(data.foundItemId);

    if (!lostItem || !foundItem) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    // Check if match already exists
    const existingMatch = await MatchRepository.findByItemIds(
      data.lostItemId,
      data.foundItemId
    );

    if (existingMatch) {
      return existingMatch;
    }

    // Create new match
    const match = await MatchRepository.create({
      lostItemId: data.lostItemId,
      foundItemId: data.foundItemId,
      matchScore: data.matchScore,
      notes: data.notes,
    });

    return match;
  }

  /**
   * Delete a match
   */
  static async deleteMatch(matchId: number, userId: number) {
    // Get match
    const match = await MatchRepository.findById(matchId);
    if (!match) {
      throw new Error('Match not found');
    }

    // Get items
    const lostItem = await ItemRepository.findById(match.lostItemId);
    const foundItem = await ItemRepository.findById(match.foundItemId);

    if (!lostItem || !foundItem) {
      throw new Error(MESSAGES.ITEM_NOT_FOUND);
    }

    // Verify user is owner of either lost or found item
    if (lostItem.userId !== userId && foundItem.userId !== userId) {
      throw new Error('You do not have permission to delete this match');
    }

    // Delete match
    await MatchRepository.deleteById(matchId);

    return { message: 'Match deleted' };
  }
}

export default MatchService;
