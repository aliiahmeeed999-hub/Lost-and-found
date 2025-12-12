## Lost & Found Application - Monolithic Architecture

This project demonstrates a **MONOLITHIC ARCHITECTURE** where all modules are organized in a single, deployable application with clear separation of concerns.

---

## 🏗️ Architecture Overview

### **Monolithic Design Principles**

A monolithic architecture keeps all application logic within a **single codebase**. Modules communicate directly with each other while maintaining clear layering:

```
HTTP Request
    ↓
Controller (Request Handling)
    ↓
Service (Business Logic)
    ↓
Repository (Data Access)
    ↓
Database
```

**Key Benefits:**
- ✅ Unified codebase - easier to understand and maintain
- ✅ Shared dependencies - no duplication
- ✅ Direct module communication - no network overhead
- ✅ Easier testing - all code in one place
- ✅ Clear separation of concerns - each layer has specific responsibility

---

## 📁 Project Structure

```
lost-found-app/
├── src/
│   └── app/
│       ├── api/                          # API routes (entry points)
│       │   ├── auth/
│       │   │   ├── login/route.js
│       │   │   ├── signup/route.js
│       │   │   └── logout/route.js
│       │   ├── items/route.js
│       │   ├── match/
│       │   ├── notifications/
│       │   └── user/
│       └── [UI components & pages]
│
├── lib/                                 # MONOLITHIC BUSINESS LOGIC
│   ├── config/                          # Application Configuration
│   │   ├── constants.ts                # Global constants & categories
│   │   └── environment.ts              # Environment variables
│   │
│   ├── models/                          # Data Models & Interfaces
│   │   ├── User.ts                     # User entity
│   │   ├── Item.ts                     # Item (Lost/Found) entity
│   │   ├── Match.ts                    # Match entity
│   │   └── Notification.ts             # Notification entity
│   │
│   ├── controllers/                     # Request Handlers (HTTP Layer)
│   │   ├── AuthController.ts           # Auth request handling
│   │   ├── ItemController.ts           # Item request handling
│   │   ├── UserController.ts           # User request handling
│   │   ├── MatchController.ts          # Match request handling
│   │   └── NotificationController.ts   # Notification request handling
│   │
│   ├── services/                        # Business Logic
│   │   ├── AuthService.ts              # Auth business logic
│   │   ├── ItemService.ts              # Item operations & validation
│   │   ├── UserService.ts              # User profile management
│   │   ├── MatchService.ts             # Matching algorithm & logic
│   │   └── NotificationService.ts      # Notification management
│   │
│   ├── repositories/                    # Data Access Layer
│   │   ├── UserRepository.ts           # User CRUD operations
│   │   ├── ItemRepository.ts           # Item CRUD operations
│   │   ├── MatchRepository.ts          # Match CRUD operations
│   │   └── NotificationRepository.ts   # Notification CRUD operations
│   │
│   ├── utils/                          # Shared Utilities
│   │   ├── ResponseFormatter.ts        # API response formatting
│   │   ├── ValidationUtils.ts          # Input validation
│   │   ├── ErrorHandler.ts             # Error handling
│   │   └── ImageUploadUtils.ts         # Image upload utilities
│   │
│   ├── auth.js                         # Authentication utilities
│   ├── prisma.js                       # Database client
│   └── matchingAlgorithm.ts           # Item matching logic
│
├── prisma/
│   ├── schema.prisma                   # Database schema
│   └── migrations/                     # Database migrations
│
└── [other config files]
```

---

## 🔄 Monolithic Data Flow Pattern

### Example: Creating an Item

```
1. POST /api/items
   ↓
2. ItemController.create(request)
   - Parse & validate input
   - Authenticate user
   - ↓
3. ItemService.createItem(userId, data)
   - Verify user exists
   - Validate business rules
   - Check permissions
   - ↓
4. ItemRepository.create(data)
   - Execute database query
   - Return raw data
   - ↓
5. Response sent to client
```

### Example: Finding Matches

```
1. GET /api/match/check-lost/:itemId
   ↓
2. MatchController.getMatchesForLostItem(itemId)
   - Validate input
   - ↓
3. MatchService.getMatchesForLostItem(itemId)
   - Get all lost item
   - Call matching algorithm
   - Return results
   - ↓
4. MatchRepository.findMatchesForLostItem(itemId)
   - Database queries
   - Include related data
   - ↓
5. Response sent to client
```

---

## 📋 Layer Responsibilities

### **1. Controllers** (`/controllers`)
**Responsibility:** Handle HTTP requests and responses
```typescript
// ItemController.ts
export class ItemController {
  static async getAll(request: Request) {
    // ✓ Parse query parameters
    // ✓ Authenticate user
    // ✓ Call service
    // ✓ Format response
  }
}
```

### **2. Services** (`/services`)
**Responsibility:** Business logic and validation
```typescript
// ItemService.ts
export class ItemService {
  static async createItem(userId: number, data: IItemCreateRequest) {
    // ✓ Validate business rules
    // ✓ Check permissions
    // ✓ Apply transformations
    // ✓ Call repository
  }
}
```

### **3. Repositories** (`/repositories`)
**Responsibility:** Database operations (CRUD)
```typescript
// ItemRepository.ts
export class ItemRepository {
  static async create(data) {
    // ✓ Build query
    // ✓ Execute database operation
    // ✓ Return raw data
  }
}
```

### **4. Models** (`/models`)
**Responsibility:** Data structure definitions
```typescript
// Item.ts
export interface IItem {
  id: number;
  userId: number;
  title: string;
  // ... other fields
}
```

### **5. Config** (`/config`)
**Responsibility:** Application settings and constants
```typescript
// constants.ts
export const ITEM_CATEGORIES = {
  ELECTRONICS: 'electronics',
  DOCUMENTS: 'documents',
  // ...
};
```

### **6. Utils** (`/utils`)
**Responsibility:** Shared helper functions
```typescript
// ValidationUtils.ts
export class ValidationUtils {
  static isValidEmail(email: string): boolean { ... }
  static validatePassword(password: string) { ... }
}
```

---

## 🔐 Authentication Flow

```
1. User calls POST /api/auth/login
   ↓
2. AuthController.login()
   - Validates email & password format
   ↓
3. AuthService.loginUser()
   - Finds user in database
   - Verifies password with bcrypt
   - Generates JWT token
   ↓
4. UserRepository.findByEmail()
   - Database query
   ↓
5. Response with token cookie
```

---

## 📊 Database Schema

The application uses **PostgreSQL** with **Prisma ORM** for data access.

### Main Entities:
- **User** - Application users with profiles
- **Item** - Lost or Found items
- **Match** - Potential matches between items
- **Notification** - User notifications

Relationships:
```
User (1) ──→ (many) Item
User (1) ──→ (many) Notification
Item (1) ──→ (many) Match (as lost item)
Item (1) ──→ (many) Match (as found item)
```

---

## 🚀 Running the Application

### Development
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

### Build for Production
```bash
# Build application
npm run build

# Start production server
npm start
```

---

## 🧪 Testing the Monolithic Structure

### Verify Architecture Compliance:

1. **Controllers** - Check `/controllers` folder:
   - ✓ Each file handles ONE type of request (auth, items, users, etc.)
   - ✓ Methods validate input and delegate to services
   - ✓ No direct database queries

2. **Services** - Check `/services` folder:
   - ✓ Contains all business logic
   - ✓ Methods call repositories for data access
   - ✓ Validates permissions and business rules

3. **Repositories** - Check `/repositories` folder:
   - ✓ Only database queries (no business logic)
   - ✓ Static methods for data access
   - ✓ One file per entity

4. **Models** - Check `/models` folder:
   - ✓ TypeScript interfaces for data structures
   - ✓ Request/Response DTOs
   - ✓ Type safety definitions

5. **Config** - Check `/config` folder:
   - ✓ Centralized constants
   - ✓ Environment variables
   - ✓ Application settings

6. **Utils** - Check `/utils` folder:
   - ✓ Reusable helper functions
   - ✓ No business logic
   - ✓ Shared across services

---

## 📖 Code Examples

### Creating an Item (End-to-End)

**Route Handler** (`src/app/api/items/route.js`):
```javascript
import { ItemController } from '@/lib/controllers/ItemController';

export async function POST(request) {
  return ItemController.create(request);
}
```

**Controller** (`lib/controllers/ItemController.ts`):
```typescript
static async create(request: Request) {
  const user = await getUserFromCookies();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
  const body = await request.json();
  const item = await ItemService.createItem(user.userId, body);
  return NextResponse.json({ success: true, item }, { status: 201 });
}
```

**Service** (`lib/services/ItemService.ts`):
```typescript
static async createItem(userId: number, data: IItemCreateRequest) {
  // Validate business rules
  const user = await UserRepository.findById(userId);
  if (!user) throw new Error('User not found');
  
  // Create item via repository
  const item = await ItemRepository.create({
    userId,
    title: data.title,
    // ... other fields
  });
  
  return item;
}
```

**Repository** (`lib/repositories/ItemRepository.ts`):
```typescript
static async create(data) {
  // Only database operations
  return prisma.item.create({
    data: {
      userId: data.userId,
      title: data.title,
      // ... other fields
    },
    include: { user: true },
  });
}
```

---

## 📝 Contributing Guidelines

### When Adding a New Feature:

1. **Define the Model** → `/models/NewFeature.ts`
   - Create interfaces for data structures

2. **Create the Repository** → `/repositories/NewFeatureRepository.ts`
   - Only database CRUD operations
   - No business logic

3. **Create the Service** → `/services/NewFeatureService.ts`
   - Add business logic
   - Validate permissions
   - Coordinate between repositories

4. **Create the Controller** → `/controllers/NewFeatureController.ts`
   - Handle HTTP requests
   - Validate input
   - Delegate to services

5. **Create the Route** → `src/app/api/new-feature/route.ts`
   - Import and call controller methods
   - Keep minimal logic

### Code Organization Rules:
- ✅ Controllers → Route handling only
- ✅ Services → Business logic only
- ✅ Repositories → Database queries only
- ✅ Models → Data structure definitions
- ✅ Utils → Shared helper functions
- ❌ No business logic in controllers
- ❌ No database queries in services
- ❌ No cross-layer circular dependencies

---

## 🔍 Identifying Monolithic Structure

A professor can quickly verify this is a monolithic architecture by:

1. **Check the `/lib` folder structure** - All layers are present and organized
2. **Read a route file** - It simply delegates to a controller
3. **Read a controller** - It handles requests and calls services
4. **Read a service** - It contains business logic and calls repositories
5. **Read a repository** - It only contains database queries
6. **Single Codebase** - Everything in one `lost-found-app` folder
7. **Direct Communication** - No external APIs or microservices

All modules work together in ONE application - that's monolithic!

---

## 📚 Technology Stack

- **Framework:** Next.js 16
- **Language:** TypeScript/JavaScript
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT with bcrypt
- **File Upload:** Cloudinary
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form

---

## 📞 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Items
- `GET /api/items` - Get all items
- `POST /api/items` - Create new item
- `GET /api/items/[id]` - Get item details
- `PUT /api/items/[id]` - Update item
- `DELETE /api/items/[id]` - Delete item

### Matching
- `GET /api/match/list` - Get all matches
- `GET /api/match/check-lost/[id]` - Get matches for lost item
- `GET /api/match/check-found/[id]` - Get matches for found item
- `POST /api/match/confirm/[id]` - Confirm match

### Notifications
- `GET /api/notifications/list` - Get all notifications
- `GET /api/notifications/unread` - Get unread notifications
- `POST /api/notifications/create` - Create notification
- `PUT /api/notifications/[id]/mark-read` - Mark as read
- `DELETE /api/notifications/[id]` - Delete notification

### User
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile
- `GET /api/user/[id]` - Get public profile
- `GET /api/user/stats` - Get user statistics

---

## 📄 License

This project is part of a coursework assignment demonstrating monolithic architecture patterns.

---

**Last Updated:** December 2025
**Architecture:** Monolithic
**Status:** Complete & Documented
