/**
 * MONOLITHIC ARCHITECTURE: Items Route Handler
 * 
 * GET/POST /api/items
 * This route delegates to ItemController which uses:
 * ItemService (business logic) → ItemRepository (data access)
 */

import { ItemController } from '@/lib/controllers/ItemController';

export async function GET(request) {
  return ItemController.getAll(request);
}

export async function POST(request) {
  return ItemController.create(request);
}