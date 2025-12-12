/**
 * MONOLITHIC APPLICATION LAYER: /utils
 * 
 * Image Upload Utils
 * Utilities for handling image uploads with Cloudinary
 */

import { v2 as cloudinary } from 'cloudinary';
import { IMAGE_CONFIG, ENV } from '@/lib/config/constants';

// Configure Cloudinary
cloudinary.config({
  cloud_name: ENV.CLOUDINARY_CLOUD_NAME,
  api_key: ENV.CLOUDINARY_API_KEY,
  api_secret: ENV.CLOUDINARY_API_SECRET,
  secure: true,
});

export class ImageUploadUtils {
  /**
   * Upload image to Cloudinary
   */
  static async uploadImage(
    base64Image: string,
    folder: string = 'items'
  ): Promise<string> {
    try {
      if (!ENV.CLOUDINARY_API_SECRET) {
        throw new Error('Cloudinary is not configured');
      }

      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder,
        resource_type: 'auto',
        transformation: [
          {
            width: IMAGE_CONFIG.TRANSFORM_WIDTH,
            height: IMAGE_CONFIG.TRANSFORM_HEIGHT,
            crop: 'limit',
          },
          { quality: 'auto', fetch_format: 'auto' },
        ],
      });

      return uploadResult.secure_url;
    } catch (error: any) {
      console.error('Image upload error:', error);
      throw new Error(`Image upload failed: ${error.message}`);
    }
  }

  /**
   * Delete image from Cloudinary
   */
  static async deleteImage(publicId: string): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (error: any) {
      console.error('Image deletion error:', error);
      throw new Error(`Image deletion failed: ${error.message}`);
    }
  }

  /**
   * Validate image format
   */
  static isValidImageFormat(mimeType: string): boolean {
    return IMAGE_CONFIG.SUPPORTED_FORMATS.includes(mimeType);
  }
}

export default ImageUploadUtils;
