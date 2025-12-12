/**
 * MONOLITHIC APPLICATION LAYER: /services
 * 
 * User Service
 * Contains all business logic for user profile management
 * Coordinates between controllers and repositories
 */

import { UserRepository } from '@/lib/repositories/UserRepository';
import { IUserUpdateRequest } from '@/lib/models/User';
import { MESSAGES } from '@/lib/config/constants';

export class UserService {
  /**
   * Get user profile by ID
   */
  static async getUserProfile(userId: number) {
    const user = await UserRepository.getUserProfile(userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }
    return user;
  }

  /**
   * Update user profile
   * Business logic: validate ownership, optional field updates
   */
  static async updateUserProfile(userId: number, data: IUserUpdateRequest) {
    // Verify user exists
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }

    // Update user
    const updatedUser = await UserRepository.updateById(userId, data);

    // Return safe profile data (without password)
    return {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      studentId: updatedUser.studentId,
      profileImage: updatedUser.profileImage,
      bio: updatedUser.bio,
      isVerified: updatedUser.isVerified,
      reputation: updatedUser.reputation,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    };
  }

  /**
   * Update user profile image
   */
  static async updateProfileImage(userId: number, imageUrl: string) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }

    const updatedUser = await UserRepository.updateById(userId, {
      profileImage: imageUrl,
    });

    return {
      id: updatedUser.id,
      profileImage: updatedUser.profileImage,
    };
  }

  /**
   * Get user statistics
   */
  static async getUserStats(userId: number) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }

    // This would typically fetch additional stats from repositories
    return {
      userId,
      name: user.name,
      reputation: user.reputation,
      isVerified: user.isVerified,
      memberSince: user.createdAt,
    };
  }

  /**
   * Increment user reputation
   */
  static async incrementReputation(userId: number, amount: number = 1) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error(MESSAGES.USER_NOT_FOUND);
    }

    const updatedUser = await UserRepository.incrementReputation(userId, amount);
    return updatedUser;
  }
}

export default UserService;
