## 🏛️ MONOLITHIC ARCHITECTURE - VISUAL DIAGRAMS

Comprehensive visual representations of the Lost & Found application's monolithic structure.

---

## 📐 Complete Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLIENT APPLICATION                          │
│                    (Web Browser / Mobile App)                        │
└─────────────────────────────────────────────────────────────────────┘
                                   ↓
                            HTTP/HTTPS
                                   ↓
┌─────────────────────────────────────────────────────────────────────┐
│                      NEXT.JS FRONTEND (React)                        │
│              Authentication, UI Components, Pages                     │
└─────────────────────────────────────────────────────────────────────┘
                                   ↓
                         src/app/api/*/route.ts
                                   ↓
┌─────────────────────────────────────────────────────────────────────┐
│                     🎯 API ROUTE HANDLERS                            │
│  POST /api/auth/login          GET /api/items                       │
│  POST /api/items               GET /api/match/list                  │
│  GET /api/user/profile         POST /api/notifications              │
└─────────────────────────────────────────────────────────────────────┘
                                   ↓ (imports & delegates)
┌─────────────────────────────────────────────────────────────────────┐
│               🎮 CONTROLLERS (Request Handlers)                       │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐        │
│  │ AuthController │  │ ItemController │  │ UserController │        │
│  ├────────────────┤  ├────────────────┤  ├────────────────┤        │
│  │ • login()      │  │ • getAll()     │  │ • getProfile() │        │
│  │ • signup()     │  │ • create()     │  │ • updateProf() │        │
│  │ • logout()     │  │ • update()     │  │ • getStats()   │        │
│  └────────────────┘  └────────────────┘  └────────────────┘        │
│  ┌────────────────┐  ┌────────────────┐                            │
│  │MatchController│  │ NotifController│                            │
│  ├────────────────┤  ├────────────────┤                            │
│  │ • getAll()     │  │ • getAll()     │                            │
│  │ • confirm()    │  │ • create()     │                            │
│  │ • reject()     │  │ • markRead()   │                            │
│  └────────────────┘  └────────────────┘                            │
└─────────────────────────────────────────────────────────────────────┘
                                   ↓ (imports & calls)
┌─────────────────────────────────────────────────────────────────────┐
│                ⚙️ SERVICES (Business Logic)                          │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐        │
│  │ AuthService    │  │ ItemService    │  │ UserService    │        │
│  ├────────────────┤  ├────────────────┤  ├────────────────┤        │
│  │ • registerUser │  │ • createItem   │  │ • getProfile   │        │
│  │ • loginUser    │  │ • getAllItems  │  │ • updateProf   │        │
│  │ • getUserById  │  │ • updateItem   │  │ • getStats     │        │
│  └────────────────┘  └────────────────┘  └────────────────┘        │
│  ┌────────────────┐  ┌────────────────┐                            │
│  │ MatchService   │  │ NotifService   │                            │
│  ├────────────────┤  ├────────────────┤                            │
│  │ • getAllMatches│  │ • getNotifs    │                            │
│  │ • confirmMatch │  │ • createNotif  │                            │
│  │ • rejectMatch  │  │ • markAsRead   │                            │
│  └────────────────┘  └────────────────┘                            │
└─────────────────────────────────────────────────────────────────────┘
                                   ↓ (imports & calls)
┌─────────────────────────────────────────────────────────────────────┐
│              💾 REPOSITORIES (Data Access Layer)                     │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐        │
│  │ UserRepository │  │ ItemRepository │  │ MatchRepository│        │
│  ├────────────────┤  ├────────────────┤  ├────────────────┤        │
│  │ • findById()   │  │ • findById()   │  │ • findById()   │        │
│  │ • findByEmail()│  │ • findAll()    │  │ • findAll()    │        │
│  │ • create()     │  │ • create()     │  │ • create()     │        │
│  │ • updateById() │  │ • updateById() │  │ • updateById() │        │
│  └────────────────┘  └────────────────┘  └────────────────┘        │
│  ┌────────────────┐                                                 │
│  │ NotifRepository│                                                 │
│  ├────────────────┤                                                 │
│  │ • findById()   │                                                 │
│  │ • findByUserId│                                                 │
│  │ • create()     │                                                 │
│  │ • markAsRead() │                                                 │
│  └────────────────┘                                                 │
└─────────────────────────────────────────────────────────────────────┘
                                   ↓ (uses)
┌─────────────────────────────────────────────────────────────────────┐
│                    🗄️ PRISMA ORM CLIENT                              │
│            (lib/prisma.js - Database Client)                        │
└─────────────────────────────────────────────────────────────────────┘
                                   ↓
┌─────────────────────────────────────────────────────────────────────┐
│                   🗄️ PostgreSQL DATABASE                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │    Users     │  │    Items     │  │   Matches    │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│  ┌──────────────┐                                                   │
│  │ Notifications│                                                   │
│  └──────────────┘                                                   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Request Flow: Create Item

```
┌─────────────┐
│ POST Request│ → /api/items
│ { title, desc, category, status... }
└─────────────┘
       ↓
┌──────────────────────┐
│ Route Handler        │  src/app/api/items/route.js
│                      │
│ export async POST    │
│   return             │
│   ItemController.    │
│   create(request)    │
└──────────────────────┘
       ↓
┌──────────────────────────────┐
│ ItemController.create()      │  lib/controllers/ItemController.ts
│                              │
│ • Parse request.json()       │
│ • Get authenticated user     │
│ • Validate required fields   │
│ • Call ItemService.create()  │
│ • Format & return response   │
└──────────────────────────────┘
       ↓
┌──────────────────────────────┐
│ ItemService.createItem()     │  lib/services/ItemService.ts
│                              │
│ • Verify user exists         │
│ • Validate business rules    │
│ • Check permissions          │
│ • Call                       │
│   ItemRepository.create()    │
│ • Return created item        │
└──────────────────────────────┘
       ↓
┌──────────────────────────────┐
│ ItemRepository.create()      │  lib/repositories/ItemRepository.ts
│                              │
│ • Call prisma.item.create()  │
│ • Pass validated data        │
│ • Include user relations     │
│ • Return database result     │
└──────────────────────────────┘
       ↓
┌──────────────────────────────┐
│ prisma.item.create({         │  Prisma Client
│   data: {                    │
│     userId: 5,               │
│     title: "Lost Phone",     │
│     ...                      │
│   }                          │
│ })                           │
└──────────────────────────────┘
       ↓
┌──────────────────────────────┐
│ INSERT INTO items (          │  PostgreSQL
│   user_id, title, ...        │
│ ) VALUES (5, ...) ...        │
└──────────────────────────────┘
       ↓
┌──────────────────────────────┐
│ { id: 1, userId: 5,          │  Return Data
│   title: "Lost Phone", ... }  │
└──────────────────────────────┘
       ↓ (back up the layers)
┌──────────────────────────────┐
│ { success: true,             │  JSON Response
│   item: { ... } }            │
└──────────────────────────────┘
       ↓
    Browser
```

---

## 🎯 Module Interaction Map

```
                    ┌─────────────────────┐
                    │   Controllers       │
                    │  (5 classes)        │
                    └─────────────────────┘
                              ↓
                    imports & calls (direct)
                              ↓
    ┌───────────────────────────────────────────────────────┐
    │              Services                                 │
    │  (5 classes with business logic)                     │
    └───────────────────────────────────────────────────────┘
                              ↓
                    imports & calls (direct)
                              ↓
    ┌───────────────────────────────────────────────────────┐
    │              Repositories                             │
    │  (4 classes with CRUD operations)                    │
    └───────────────────────────────────────────────────────┘
                              ↓
                      uses (Prisma client)
                              ↓
                    ┌──────────────────┐
                    │  PostgreSQL DB   │
                    └──────────────────┘

KEY POINTS:
✅ Controllers → Services → Repositories → Database
✅ Downward flow only
✅ No upward dependencies
✅ No circular dependencies
✅ Direct calls between layers (no HTTP)
```

---

## 📊 Feature to Layer Mapping

```
FEATURE: User Authentication
├── Route: src/app/api/auth/login/route.js
├── Controller: lib/controllers/AuthController.ts
│   └── Methods: login(), signup(), logout()
├── Service: lib/services/AuthService.ts
│   └── Methods: loginUser(), registerUser()
├── Repository: lib/repositories/UserRepository.ts
│   └── Methods: findByEmail(), create()
└── Models: lib/models/User.ts
    └── Interfaces: IUser, IUserCreateRequest

FEATURE: Item Management
├── Route: src/app/api/items/route.js
├── Controller: lib/controllers/ItemController.ts
│   └── Methods: getAll(), create(), update(), delete()
├── Service: lib/services/ItemService.ts
│   └── Methods: createItem(), getAllItems(), updateItem()
├── Repository: lib/repositories/ItemRepository.ts
│   └── Methods: create(), findAll(), findById(), update()
└── Models: lib/models/Item.ts
    └── Interfaces: IItem, IItemCreateRequest

FEATURE: Match Finding
├── Route: src/app/api/match/*/route.ts
├── Controller: lib/controllers/MatchController.ts
├── Service: lib/services/MatchService.ts
├── Repository: lib/repositories/MatchRepository.ts
└── Models: lib/models/Match.ts

FEATURE: User Notifications
├── Route: src/app/api/notifications/*/route.ts
├── Controller: lib/controllers/NotificationController.ts
├── Service: lib/services/NotificationService.ts
├── Repository: lib/repositories/NotificationRepository.ts
└── Models: lib/models/Notification.ts

FEATURE: User Profiles
├── Route: src/app/api/user/*/route.ts
├── Controller: lib/controllers/UserController.ts
├── Service: lib/services/UserService.ts
├── Repository: lib/repositories/UserRepository.ts
└── Models: lib/models/User.ts
```

---

## 🔐 Security Layer Diagram

```
┌─────────────────────────────────────────────────────┐
│                    HTTP Request                      │
│        POST /api/items { title, desc... }           │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│   CONTROLLER SECURITY                               │
│   ✅ Validate input format                          │
│   ✅ Check authentication (JWT token)               │
│   ✅ Verify Content-Type                            │
│   ❌ Would reject malformed requests               │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│   SERVICE SECURITY                                  │
│   ✅ Verify user exists                             │
│   ✅ Check permissions (ownership)                  │
│   ✅ Validate business rules                        │
│   ✅ Apply transformations                          │
│   ❌ Would reject unauthorized actions              │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│   REPOSITORY SECURITY                               │
│   ✅ Use Prisma (parameterized queries)             │
│   ✅ Prevent SQL injection                          │
│   ✅ Type-safe queries (TypeScript)                 │
│   ✅ Database constraints                           │
│   ❌ Would prevent dangerous queries                │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│         PostgreSQL Database                         │
│   Only receives safe, validated data                │
└─────────────────────────────────────────────────────┘
```

---

## 🧩 Dependency Tree

```
Route Files
  │
  ├── src/app/api/auth/login/route.js
  │   └── imports → AuthController
  │       ├── imports → AuthService
  │       │   └── imports → UserRepository
  │       │       └── imports → prisma
  │       └── imports → Models/User.ts
  │
  ├── src/app/api/items/route.js
  │   └── imports → ItemController
  │       ├── imports → ItemService
  │       │   └── imports → ItemRepository
  │       │       └── imports → prisma
  │       └── imports → Models/Item.ts
  │
  ├── src/app/api/match/*/route.ts
  │   └── imports → MatchController
  │       └── imports → MatchService
  │           └── imports → MatchRepository
  │
  ├── src/app/api/notifications/*/route.ts
  │   └── imports → NotificationController
  │       └── imports → NotificationService
  │           └── imports → NotificationRepository
  │
  └── src/app/api/user/*/route.ts
      └── imports → UserController
          └── imports → UserService
              └── imports → UserRepository

SHARED DEPENDENCIES:
├── lib/config/constants.ts
├── lib/config/environment.ts
├── lib/utils/
│   ├── ValidationUtils.ts
│   ├── ErrorHandler.ts
│   ├── ResponseFormatter.ts
│   └── ImageUploadUtils.ts
├── lib/auth.js (utilities)
└── lib/prisma.js (database client)
```

---

## 🔄 Data Flow: Login Example

```
1. USER ACTION
   └─ Fills form: email, password
      └─ Clicks "Login"

2. HTTP REQUEST
   └─ POST /api/auth/login
      └─ Body: { email: "user@example.com", password: "pass" }

3. ROUTE HANDLER (src/app/api/auth/login/route.js)
   └─ export async function POST(request)
      └─ return AuthController.login(request);

4. CONTROLLER (lib/controllers/AuthController.ts)
   ├─ const body = await request.json();
   ├─ const { email, password } = body;
   ├─ if (!email || !password) → return 400 error
   ├─ if (!isValidEmail(email)) → return 400 error
   └─ const result = await AuthService.loginUser(email, password);

5. SERVICE (lib/services/AuthService.ts)
   ├─ if (!isValidEmail(email)) → throw error
   ├─ const user = await UserRepository.findByEmail(email);
   ├─ if (!user) → throw "Invalid email or password"
   ├─ const isValid = await verifyPassword(password, user.passwordHash);
   ├─ if (!isValid) → throw "Invalid email or password"
   ├─ const token = generateToken(user.id, user.email);
   └─ return { token, user };

6. REPOSITORY (lib/repositories/UserRepository.ts)
   └─ return prisma.user.findUnique({
        where: { email: email.toLowerCase().trim() }
      });

7. DATABASE QUERY (PostgreSQL via Prisma)
   └─ SELECT * FROM users WHERE email = $1 LIMIT 1;
      [email: "user@example.com"]

8. DATABASE RESPONSE
   └─ { id: 5, name: "John", email: "user@example.com", ... }

9. REPOSITORY RETURNS
   └─ User object with id, name, email, passwordHash, etc.

10. SERVICE VALIDATES
    └─ Checks password hash matches provided password

11. SERVICE RETURNS
    └─ { token: "eyJh...", user: { id, name, email, ... } }

12. CONTROLLER FORMATS
    └─ NextResponse.json(
         { success: true, user: {...} },
         { status: 200 }
       )
       .cookies.set('token', token, { ... })

13. HTTP RESPONSE
    └─ 200 OK
       Body: { success: true, user: {...} }
       Cookie: token=eyJh...

14. BROWSER
    └─ Stores token in cookie
    └─ Stores user info in state/localStorage
    └─ Redirects to dashboard
```

---

## 📈 Scalability Path

```
MONOLITHIC ARCHITECTURE (Current)
├─ Single codebase
├─ Single database
├─ Single deployment
└─ Direct module communication

        ↓ (If needed to scale)

MODULAR MONOLITH (Option 1)
├─ Same codebase
├─ Organized modules
├─ Shared database
└─ Could be split later

        ↓ (If further scaling needed)

MICROSERVICES (Option 2)
├─ Auth Service (separate deployment)
├─ Items Service (separate deployment)
├─ Notifications Service (separate deployment)
├─ Matching Service (separate deployment)
├─ User Service (separate deployment)
└─ Requires service mesh, API gateway, etc.

CURRENT PROJECT: ✅ MONOLITHIC (Step 1)
```

---

## ✅ Verification Checklist

```
LAYER SEPARATION:
☐ Controllers exist in lib/controllers/
☐ Services exist in lib/services/
☐ Repositories exist in lib/repositories/
☐ Models exist in lib/models/
☐ Config exists in lib/config/
☐ Utils exist in lib/utils/

CONTROLLER RULES:
☐ Controllers import services (not repositories)
☐ Controllers handle HTTP only
☐ Controllers format responses
☐ No database queries in controllers
☐ No business logic in controllers

SERVICE RULES:
☐ Services import repositories (not Prisma)
☐ Services contain business logic
☐ Services validate permissions
☐ No HTTP handling in services
☐ No direct database queries in services

REPOSITORY RULES:
☐ Repositories import Prisma only
☐ Repositories contain only database queries
☐ No business logic in repositories
☐ No HTTP handling in repositories
☐ No imports from services

DATABASE RULES:
☐ Single database (PostgreSQL)
☐ Uses Prisma ORM
☐ Database is central point
☐ All queries go through repositories

DEPENDENCY RULES:
☐ Routes → Controllers → Services → Repositories
☐ No circular dependencies
☐ No upward dependencies
☐ No side-to-side dependencies (except through layers)
☐ Downward flow only

MONOLITHIC RULES:
☐ Single codebase
☐ Single deployment
☐ Direct module communication
☐ No HTTP between layers
☐ No external microservices
☐ One database
☐ One app instance
```

---

**Diagrams Version:** 1.0 | **Date:** December 2025 | **Pattern:** Monolithic
