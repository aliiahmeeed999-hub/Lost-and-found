
import { ItemController } from '@/lib/controllers/ItemController';

export async function GET(request) {
  return ItemController.getAll(request);
}

export async function POST(request) {
  return ItemController.create(request);
}
