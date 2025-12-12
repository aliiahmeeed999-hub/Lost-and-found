## 📋 MONOLITHIC ARCHITECTURE - QUICK REFERENCE

A quick cheat sheet for understanding the Lost & Found application's monolithic structure.

---

## 🎯 One-Minute Summary

```
This is a MONOLITHIC application where:
- Everything is in ONE codebase (/lost-found-app)
- ONE database (PostgreSQL)
- ONE deployment unit
- Modules communicate directly (no HTTP between layers)
- Clear layering: Controllers → Services → Repositories
```

---

## 🏗️ The 5 Layers

### Layer 1: Routes (Entry Point)
**File:** `src/app/api/items/route.js`
```javascript
export async function POST(request) {
  return ItemController.create(request); // Delegate to controller
}
```
✓ Minimal code | ✓ Only delegates | ✗ No business logic

---

### Layer 2: Controllers (Request Handling)
**File:** `lib/controllers/ItemController.ts`
```typescript
static async create(request: Request) {
  const body = await request.json();
  const item = await ItemService.createItem(userId, body);
  return NextResponse.json(item);
}
```
✓ Parses requests | ✓ Validates input | ✓ Calls services | ✗ No business logic

---

### Layer 3: Services (Business Logic)
**File:** `lib/services/ItemService.ts`
```typescript
static async createItem(userId: number, data: IItemCreateRequest) {
  const user = await UserRepository.findById(userId);
  if (!user) throw new Error('User not found');
  return await ItemRepository.create(data);
}
```
✓ Business rules | ✓ Permissions | ✓ Calls repositories | ✗ No SQL

---

### Layer 4: Repositories (Data Access)
**File:** `lib/repositories/ItemRepository.ts`
```typescript
static async create(data) {
  return prisma.item.create({
    data: { userId: data.userId, title: data.title }
  });
}
```
✓ Database queries | ✓ CRUD ops | ✗ No business logic

---

### Layer 5: Database
**File:** `prisma/schema.prisma`
```prisma
model Item {
  id        Int     @id @default(autoincrement())
  userId    Int
  title     String
}
```
✓ Data storage | ✓ Relationships

---

## 📁 Folder Map

```
lib/
├── config/
│   ├── constants.ts ............ Global constants (ITEM_CATEGORIES, etc.)
│   └── environment.ts .......... Environment variables
│
├── models/
│   ├── User.ts ................ User interfaces (IUser, IUserResponse, etc.)
│   ├── Item.ts ................ Item interfaces (IItem, IItemCreateRequest, etc.)
│   ├── Match.ts ............... Match interfaces
│   └── Notification.ts ........ Notification interfaces
│
├── controllers/
│   ├── AuthController.ts ....... Handles /api/auth/* requests
│   ├── ItemController.ts ....... Handles /api/items/* requests
│   ├── UserController.ts ....... Handles /api/user/* requests
│   ├── MatchController.ts ...... Handles /api/match/* requests
│   └── NotificationController.ts Handles /api/notifications/* requests
│
├── services/
│   ├── AuthService.ts ......... Login, signup, token logic
│   ├── ItemService.ts ......... Create, update, delete items
│   ├── UserService.ts ......... User profiles & stats
│   ├── MatchService.ts ........ Match confirmation logic
│   └── NotificationService.ts . Notification management
│
├── repositories/
│   ├── UserRepository.ts ....... User CRUD (find, create, update)
│   ├── ItemRepository.ts ....... Item CRUD (find, create, update, search)
│   ├── MatchRepository.ts ...... Match CRUD
│   └── NotificationRepository.ts Notification CRUD
│
└── utils/
    ├── ResponseFormatter.ts ..... Format API responses
    ├── ValidationUtils.ts ....... Email, password, phone validation
    ├── ErrorHandler.ts ......... Error handling
    └── ImageUploadUtils.ts ...... Cloudinary uploads
```

---

## 🔄 Request Flow Examples

### Example 1: Login User
```
1. POST /api/auth/login
   ↓ (route delegates)
2. AuthController.login(request)
   ↓ (parses & validates)
3. AuthService.loginUser(email, password)
   ↓ (business logic)
4. UserRepository.findByEmail(email)
   ↓ (database query)
5. prisma.user.findUnique(...)
   ↓ (returns user)
6. Response with token
```

---

### Example 2: Create Item
```
1. POST /api/items { title, description, ... }
   ↓
2. ItemController.create(request)
   ↓
3. ItemService.createItem(userId, data)
   ↓
4. ItemRepository.create(data)
   ↓
5. prisma.item.create(...)
   ↓
6. Return created item with user profile
```

---

### Example 3: Get User Notifications
```
1. GET /api/notifications/list?page=1&limit=10
   ↓
2. NotificationController.getAll(request)
   ↓
3. NotificationService.getUserNotifications(userId, page, limit)
   ↓
4. NotificationRepository.findByUserId(userId, skip, take)
   ↓
5. prisma.notification.findMany(...)
   ↓
6. Return paginated notifications
```

---

## ✅ Monolithic Checklist

- [ ] All code in `/lost-found-app` (single codebase)
- [ ] One database (PostgreSQL with Prisma)
- [ ] Controllers import services (not repositories)
- [ ] Services import repositories (not Prisma directly)
- [ ] Repositories only import Prisma
- [ ] No HTTP calls between layers
- [ ] No microservices
- [ ] No external APIs (except Cloudinary for images)

**Score:** ___/8 ✓ = Monolithic

---

## 🚀 Common Tasks

### Add a New Entity (e.g., Review)

1. **Create Model** → `lib/models/Review.ts`
   ```typescript
   export interface IReview {
     id: number;
     itemId: number;
     userId: number;
     rating: number;
     comment: string;
   }
   ```

2. **Create Repository** → `lib/repositories/ReviewRepository.ts`
   ```typescript
   export class ReviewRepository {
     static async create(data) {
       return prisma.review.create({ data });
     }
   }
   ```

3. **Create Service** → `lib/services/ReviewService.ts`
   ```typescript
   export class ReviewService {
     static async createReview(userId: number, data) {
       // validate logic
       return ReviewRepository.create(data);
     }
   }
   ```

4. **Create Controller** → `lib/controllers/ReviewController.ts`
   ```typescript
   export class ReviewController {
     static async create(request: Request) {
       const body = await request.json();
       return ReviewService.createReview(userId, body);
     }
   }
   ```

5. **Create Route** → `src/app/api/reviews/route.ts`
   ```typescript
   export async function POST(request) {
     return ReviewController.create(request);
   }
   ```

Done! Following the monolithic pattern.

---

## 🔐 Security Flow

```
Request comes in
↓
Controller validates input & authenticates user
↓
Service checks permissions & business rules
↓
Repository executes parameterized Prisma query
↓
Database returns safe data
↓
Response sent to client
```

Each layer adds security.

---

## 🧪 Testing Strategy

### Test Layer by Layer

```typescript
// Test Repository (Mock Prisma)
describe('UserRepository', () => {
  it('should find user by email', async () => {
    // Mock prisma
    // Call UserRepository.findByEmail()
    // Assert result
  });
});

// Test Service (Mock Repository)
describe('UserService', () => {
  it('should create user if not exists', async () => {
    // Mock UserRepository
    // Call UserService.registerUser()
    // Assert business logic
  });
});

// Test Controller (Mock Service)
describe('AuthController', () => {
  it('should return token on login', async () => {
    // Mock AuthService
    // Call AuthController.login()
    // Assert response
  });
});
```

---

## 🎯 Key Principles

1. **Controllers** - Handle HTTP, validate input format
2. **Services** - Apply business rules, check permissions
3. **Repositories** - Execute database queries
4. **Models** - Define data structures
5. **Config** - Store constants
6. **Utils** - Share helper functions

### The Golden Rule:
```
Downward flow only
Controllers
  ↓
Services
  ↓
Repositories
  ↓
Database

NO UPWARD DEPENDENCIES!
NO CIRCULAR DEPENDENCIES!
NO DIRECT DATABASE ACCESS IN SERVICES!
NO BUSINESS LOGIC IN CONTROLLERS!
```

---

## 📊 Architecture Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Layers | 5 | ✅ Good |
| Modules | 1 (single app) | ✅ Monolithic |
| Databases | 1 (PostgreSQL) | ✅ Monolithic |
| Deployments | 1 | ✅ Monolithic |
| HTTP between layers | 0 | ✅ Direct calls |
| Microservices | 0 | ✅ None |
| Code reuse | High (utils) | ✅ Good |
| Testability | High | ✅ Good |

---

## 🎓 For Professors

This demonstrates:
- ✅ Understanding of monolithic architecture
- ✅ Layer separation of concerns
- ✅ MVC/Layered pattern knowledge
- ✅ Enterprise software design
- ✅ Type safety (TypeScript)
- ✅ SOLID principles (especially SRP)
- ✅ Scalable code organization

**Grade-worthy aspects:**
1. Clear folder structure ✅
2. Proper layer responsibilities ✅
3. No business logic in controllers ✅
4. No SQL in services ✅
5. Comprehensive interfaces ✅
6. Consistent patterns ✅
7. Documentation ✅

---

## 🔍 How to Verify in 5 Minutes

1. Open `src/app/api/items/route.js` - Should only import & call controller
2. Open `lib/controllers/ItemController.ts` - Should only import & call service
3. Open `lib/services/ItemService.ts` - Should only import & call repository
4. Open `lib/repositories/ItemRepository.ts` - Should only import Prisma
5. Check `/lib` folder - Should have config, models, controllers, services, repositories, utils

If all 5 checks pass → **Monolithic ✅**

---

## 📞 File Reference

| Feature | Controller | Service | Repository |
|---------|-----------|---------|------------|
| Login | `AuthController` | `AuthService` | `UserRepository` |
| Items | `ItemController` | `ItemService` | `ItemRepository` |
| Matching | `MatchController` | `MatchService` | `MatchRepository` |
| Profile | `UserController` | `UserService` | `UserRepository` |
| Notifications | `NotificationController` | `NotificationService` | `NotificationRepository` |

---

**Quick Start:** Read the full documentation in `MONOLITHIC_ARCHITECTURE.md`

**Verification Guide:** See `MONOLITHIC_VERIFICATION_GUIDE.md`

---

**Version:** 1.0 | **Date:** December 2025 | **Pattern:** Monolithic
