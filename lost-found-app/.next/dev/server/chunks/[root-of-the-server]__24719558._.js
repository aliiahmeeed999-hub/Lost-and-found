module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/Desktop/my-project/lost-found-app/src/lib/prisma.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
// Prevent multiple instances of Prisma Client in development
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        'query',
        'error',
        'warn'
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/Desktop/my-project/lost-found-app/src/lib/auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateToken",
    ()=>generateToken,
    "getUserFromCookies",
    ()=>getUserFromCookies,
    "hashPassword",
    ()=>hashPassword,
    "isValidEmail",
    ()=>isValidEmail,
    "requireAuth",
    ()=>requireAuth,
    "validatePassword",
    ()=>validatePassword,
    "verifyPassword",
    ()=>verifyPassword,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
if (!process.env.JWT_SECRET) {
    console.warn('⚠️ WARNING: JWT_SECRET is not set in environment variables!');
}
async function hashPassword(password) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 12);
}
async function verifyPassword(password, hashedPassword) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hashedPassword);
}
function generateToken(userId, email) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign({
        userId,
        email,
        iat: Math.floor(Date.now() / 1000)
    }, JWT_SECRET, {
        expiresIn: '7d'
    } // Token expires in 7 days
    );
}
function verifyToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return null;
    }
}
async function getUserFromCookies() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('token')?.value;
    if (!token) {
        return null;
    }
    return verifyToken(token);
}
async function requireAuth() {
    const user = await getUserFromCookies();
    if (!user) {
        throw new Error('Authentication required');
    }
    return user;
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePassword(password) {
    const errors = [];
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
        errors.push('Password must contain at least one number');
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
}),
"[project]/Desktop/my-project/lost-found-app/src/app/api/items/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/src/lib/prisma.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/src/lib/auth.js [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        // Get query parameters for filtering
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status'); // 'lost' or 'found'
        const category = searchParams.get('category');
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;
        // Build filter object
        const where = {};
        if (status && [
            'lost',
            'found'
        ].includes(status)) {
            where.status = status;
        }
        if (category) {
            where.category = category;
        }
        // Get total count for pagination
        const total = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.count({
            where
        });
        // Get items with user info
        const items = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.findMany({
            where,
            skip,
            take: limit,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        profileImage: true
                    }
                }
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            items,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Fetch items error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch items'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        // Check authentication
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromCookies"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication required'
            }, {
                status: 401
            });
        }
        // Parse request body
        const body = await request.json();
        const { title, description, category, status, itemStatus, locationLost, locationFound, locationDetails, dateLost, dateFound, color, brand, distinguishingFeatures, contactInfo, rewardAmount, tags, imageUrls } = body;
        // Validation
        if (!title || !title.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Title is required'
            }, {
                status: 400
            });
        }
        if (!description || !description.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Description is required'
            }, {
                status: 400
            });
        }
        if (!category) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Category is required'
            }, {
                status: 400
            });
        }
        if (!status || ![
            'lost',
            'found'
        ].includes(status)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid status'
            }, {
                status: 400
            });
        }
        if (status === 'lost' && !locationLost) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Location where item was lost is required'
            }, {
                status: 400
            });
        }
        if (status === 'found' && !locationFound) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Location where item was found is required'
            }, {
                status: 400
            });
        }
        // Create item in database
        const item = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.create({
            data: {
                userId: user.userId,
                title: title.trim(),
                description: description.trim(),
                category,
                status,
                itemStatus: itemStatus || 'active',
                locationLost: locationLost?.trim() || null,
                locationFound: locationFound?.trim() || null,
                locationDetails: locationDetails?.trim() || null,
                dateLost: dateLost ? new Date(dateLost) : null,
                dateFound: dateFound ? new Date(dateFound) : null,
                color: color?.trim() || null,
                brand: brand?.trim() || null,
                distinguishingFeatures: distinguishingFeatures?.trim() || null,
                contactInfo: contactInfo?.trim() || null,
                rewardAmount: rewardAmount ? parseFloat(rewardAmount) : null,
                tags: tags || [],
                imageUrls: imageUrls || []
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        profileImage: true
                    }
                }
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Item reported successfully',
            item
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Create item error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to create item'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__24719558._.js.map