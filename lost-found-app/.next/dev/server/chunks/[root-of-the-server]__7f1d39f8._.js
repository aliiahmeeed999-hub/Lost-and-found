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
"[project]/Desktop/my-project/lost-found-app/lib/prisma.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/my-project/lost-found-app/lib/auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/my-project/lost-found-app/lib/matchingAlgorithm.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Matching Algorithm for Lost & Found Items
 * Calculates similarity score between lost and found items
 */ __turbopack_context__.s([
    "calculateMatchScore",
    ()=>calculateMatchScore,
    "checkMatchesForFoundItem",
    ()=>checkMatchesForFoundItem,
    "checkMatchesForLostItem",
    ()=>checkMatchesForLostItem,
    "confirmMatch",
    ()=>confirmMatch,
    "getUserMatches",
    ()=>getUserMatches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/lib/prisma.js [app-route] (ecmascript)");
;
// ============================================
// FUZZY STRING MATCHING
// ============================================
/**
 * Calculates Levenshtein distance between two strings
 * Returns a similarity score between 0 and 1
 */ function calculateStringSimilarity(str1, str2) {
    const s1 = str1.toLowerCase().trim();
    const s2 = str2.toLowerCase().trim();
    if (s1 === s2) return 1;
    if (s1.length === 0 || s2.length === 0) return 0;
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    if (longer.includes(shorter)) return 0.85; // Substring match is 85% similar
    const editDistance = getEditDistance(shorter, longer);
    const similarity = (longer.length - editDistance) / longer.length;
    return Math.max(0, similarity);
}
/**
 * Levenshtein distance algorithm for string comparison
 */ function getEditDistance(s1, s2) {
    const costs = [];
    for(let k = 0; k <= s1.length; k++){
        let lastValue = k;
        for(let i = 0; i <= s2.length; i++){
            if (k === 0) {
                costs[i] = i;
            } else if (i > 0) {
                let newValue = costs[i - 1];
                if (s1.charAt(k - 1) !== s2.charAt(i - 1)) {
                    newValue = Math.min(Math.min(newValue, lastValue), costs[i]) + 1;
                }
                costs[i - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (k > 0) costs[s2.length] = lastValue;
    }
    return costs[s1.length];
}
// ============================================
// KEYWORD MATCHING
// ============================================
/**
 * Extracts keywords from text (removes common words)
 */ function extractKeywords(text) {
    const commonWords = new Set([
        'the',
        'a',
        'an',
        'and',
        'or',
        'but',
        'in',
        'on',
        'at',
        'to',
        'for',
        'of',
        'with',
        'by',
        'from',
        'is',
        'was',
        'are',
        'been',
        'be',
        'have',
        'has',
        'had',
        'do',
        'does',
        'did',
        'will',
        'would',
        'could',
        'should',
        'may',
        'might',
        'can',
        'my',
        'your',
        'our',
        'their'
    ]);
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    return new Set(words.filter((word)=>word.length > 2 && !commonWords.has(word)));
}
/**
 * Calculate keyword overlap between two texts
 */ function calculateKeywordOverlap(text1, text2) {
    const keywords1 = extractKeywords(text1);
    const keywords2 = extractKeywords(text2);
    if (keywords1.size === 0 || keywords2.size === 0) return 0;
    let overlapCount = 0;
    keywords1.forEach((keyword)=>{
        if (keywords2.has(keyword)) {
            overlapCount++;
        }
    });
    const totalUnique = new Set([
        ...keywords1,
        ...keywords2
    ]).size;
    return overlapCount / totalUnique;
}
// ============================================
// LOCATION MATCHING
// ============================================
/**
 * Check if two locations are similar or nearby
 * For now, we'll do simple string matching
 * In a real app, you might use geocoding/distance calculation
 */ function calculateLocationSimilarity(location1, location2) {
    if (!location1 || !location2) return 0;
    const similarity = calculateStringSimilarity(location1, location2);
    // Extract city/neighborhood names for partial matching
    const loc1Parts = location1.toLowerCase().split(/[,\s]+/);
    const loc2Parts = location2.toLowerCase().split(/[,\s]+/);
    let partialMatch = 0;
    for (const part1 of loc1Parts){
        if (part1.length > 2 && loc2Parts.includes(part1)) {
            partialMatch += 1;
        }
    }
    // If any part matches, boost the score
    if (partialMatch > 0) {
        return Math.min(1, similarity + 0.2);
    }
    return similarity;
}
function calculateMatchScore(lostItem, foundItem) {
    // 1. Category matching (exact match = 1, no match = 0)
    const categoryScore = lostItem.category.toLowerCase() === foundItem.category.toLowerCase() ? 1 : 0;
    // 2. Title and description similarity
    const titleSimilarity = calculateStringSimilarity(lostItem.title, foundItem.title);
    const descriptionSimilarity = calculateStringSimilarity(lostItem.description, foundItem.description);
    const titleDescriptionScore = (titleSimilarity + descriptionSimilarity) / 2;
    // 3. Location similarity
    const locationScore = calculateLocationSimilarity(lostItem.locationLost || lostItem.locationFound, foundItem.locationFound || foundItem.locationLost);
    // 4. Keyword overlap
    const keywordScore = calculateKeywordOverlap(`${lostItem.title} ${lostItem.description}`, `${foundItem.title} ${foundItem.description}`);
    // Calculate weighted score
    const finalScore = categoryScore * 0.35 + titleDescriptionScore * 0.4 + locationScore * 0.2 + keywordScore * 0.05;
    return {
        score: Math.round(finalScore * 100) / 100,
        breakdown: {
            categoryScore,
            titleScore: titleSimilarity,
            locationScore,
            descriptionScore: keywordScore
        }
    };
}
async function checkMatchesForLostItem(lostItemId) {
    try {
        // Fetch the lost item
        const lostItem = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.findUnique({
            where: {
                id: lostItemId
            }
        });
        if (!lostItem || lostItem.status !== 'lost') return [];
        // Fetch all active found items
        const foundItems = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.findMany({
            where: {
                status: 'found',
                itemStatus: 'active'
            }
        });
        const matches = [];
        // Check against each found item
        for (const foundItem of foundItems){
            const matchResult = calculateMatchScore({
                title: lostItem.title,
                category: lostItem.category,
                description: lostItem.description,
                locationLost: lostItem.locationLost,
                locationFound: lostItem.locationFound
            }, {
                title: foundItem.title,
                category: foundItem.category,
                description: foundItem.description,
                locationLost: foundItem.locationLost,
                locationFound: foundItem.locationFound
            });
            // Log match result for debugging
            console.log(`[MATCHING DEBUG] Lost Item "${lostItem.title}" vs Found Item "${foundItem.title}"`);
            console.log(`  Score: ${matchResult.score} (need 0.7)`);
            console.log(`  Category: ${matchResult.breakdown.categoryScore} (${lostItem.category} vs ${foundItem.category})`);
            console.log(`  Title Similarity: ${matchResult.breakdown.titleScore}`);
            console.log(`  Location: ${matchResult.breakdown.locationScore}`);
            console.log(`  Description/Keywords: ${matchResult.breakdown.descriptionScore}`);
            // Create match if score is high enough
            if (matchResult.score >= 0.7) {
                try {
                    const match = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].match.upsert({
                        where: {
                            lostItemId_foundItemId: {
                                lostItemId,
                                foundItemId: foundItem.id
                            }
                        },
                        update: {
                            matchScore: matchResult.score
                        },
                        create: {
                            lostItemId,
                            foundItemId: foundItem.id,
                            matchScore: matchResult.score,
                            status: 'pending'
                        }
                    });
                    matches.push(match);
                    // Create notifications for both users
                    await Promise.all([
                        // Notify lost item owner
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.create({
                            data: {
                                userId: lostItem.userId,
                                type: 'match',
                                title: 'Potential Match Found!',
                                message: `A potential match for your lost item "${lostItem.title}" was found!`,
                                link: `/matches/${match.id}`
                            }
                        }),
                        // Notify found item owner
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.create({
                            data: {
                                userId: foundItem.userId,
                                type: 'match',
                                title: 'Your Found Item May Help!',
                                message: `Your found item "${foundItem.title}" may match a lost item someone is looking for!`,
                                link: `/matches/${match.id}`
                            }
                        })
                    ]);
                } catch (err) {
                    console.error('Error creating match:', err);
                }
            }
        }
        return matches;
    } catch (error) {
        console.error('Error checking matches for lost item:', error);
        throw error;
    }
}
async function checkMatchesForFoundItem(foundItemId) {
    try {
        // Fetch the found item
        const foundItem = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.findUnique({
            where: {
                id: foundItemId
            }
        });
        if (!foundItem || foundItem.status !== 'found') return [];
        // Fetch all active lost items
        const lostItems = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.findMany({
            where: {
                status: 'lost',
                itemStatus: 'active'
            }
        });
        const matches = [];
        // Check against each lost item
        for (const lostItem of lostItems){
            const matchResult = calculateMatchScore({
                title: lostItem.title,
                category: lostItem.category,
                description: lostItem.description,
                locationLost: lostItem.locationLost,
                locationFound: lostItem.locationFound
            }, {
                title: foundItem.title,
                category: foundItem.category,
                description: foundItem.description,
                locationLost: foundItem.locationLost,
                locationFound: foundItem.locationFound
            });
            // Log match result for debugging
            console.log(`[MATCHING DEBUG] Lost Item "${lostItem.title}" vs Found Item "${foundItem.title}"`);
            console.log(`  Score: ${matchResult.score} (need 0.7)`);
            console.log(`  Category: ${matchResult.breakdown.categoryScore} (${lostItem.category} vs ${foundItem.category})`);
            console.log(`  Title Similarity: ${matchResult.breakdown.titleScore}`);
            console.log(`  Location: ${matchResult.breakdown.locationScore}`);
            console.log(`  Description/Keywords: ${matchResult.breakdown.descriptionScore}`);
            // Create match if score is high enough
            if (matchResult.score >= 0.7) {
                try {
                    const match = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].match.upsert({
                        where: {
                            lostItemId_foundItemId: {
                                lostItemId: lostItem.id,
                                foundItemId
                            }
                        },
                        update: {
                            matchScore: matchResult.score
                        },
                        create: {
                            lostItemId: lostItem.id,
                            foundItemId,
                            matchScore: matchResult.score,
                            status: 'pending'
                        }
                    });
                    matches.push(match);
                    // Create notifications for both users
                    await Promise.all([
                        // Notify lost item owner
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.create({
                            data: {
                                userId: lostItem.userId,
                                type: 'match',
                                title: 'Potential Match Found!',
                                message: `A potential match for your lost item "${lostItem.title}" was found!`,
                                link: `/matches/${match.id}`
                            }
                        }),
                        // Notify found item owner
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.create({
                            data: {
                                userId: foundItem.userId,
                                type: 'match',
                                title: 'Your Found Item May Help!',
                                message: `Your found item "${foundItem.title}" may match a lost item someone is looking for!`,
                                link: `/matches/${match.id}`
                            }
                        })
                    ]);
                } catch (err) {
                    console.error('Error creating match:', err);
                }
            }
        }
        return matches;
    } catch (error) {
        console.error('Error checking matches for found item:', error);
        throw error;
    }
}
async function getUserMatches(userId) {
    try {
        const matches = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].match.findMany({
            where: {
                OR: [
                    {
                        lostItem: {
                            userId
                        }
                    },
                    {
                        foundItem: {
                            userId
                        }
                    }
                ]
            },
            include: {
                lostItem: {
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
                },
                foundItem: {
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
                }
            },
            orderBy: {
                matchScore: 'desc'
            }
        });
        return matches;
    } catch (error) {
        console.error('Error fetching user matches:', error);
        throw error;
    }
}
async function confirmMatch(matchId, notes) {
    try {
        const match = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].match.update({
            where: {
                id: matchId
            },
            data: {
                status: 'confirmed',
                notes
            }
        });
        return match;
    } catch (error) {
        console.error('Error confirming match:', error);
        throw error;
    }
}
}),
"[project]/Desktop/my-project/lost-found-app/src/app/api/items/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/cloudinary.js
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "deleteImage",
    ()=>deleteImage,
    "getOptimizedUrl",
    ()=>getOptimizedUrl,
    "uploadImage",
    ()=>uploadImage
]);
(()=>{
    const e = new Error("Cannot find module 'cloudinary'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// ===================================================================
// app/api/items/route.js
// ===================================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/lib/prisma.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/lib/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$matchingAlgorithm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/lib/matchingAlgorithm.ts [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/cloudinary'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dgnxydock',
    api_key: process.env.CLOUDINARY_API_KEY || '821783795161467',
    api_secret: process.env.CLOUDINARY_API_SECRET
});
async function uploadImage(fileData, folder = 'items') {
    try {
        const uploadResult = await cloudinary.uploader.upload(fileData, {
            folder: folder,
            resource_type: 'auto',
            transformation: [
                {
                    width: 1000,
                    height: 1000,
                    crop: 'limit'
                },
                {
                    quality: 'auto',
                    fetch_format: 'auto'
                } // Optimize
            ]
        });
        return {
            url: uploadResult.secure_url,
            publicId: uploadResult.public_id,
            width: uploadResult.width,
            height: uploadResult.height
        };
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw new Error('Failed to upload image');
    }
}
async function deleteImage(publicId) {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.error('Cloudinary delete error:', error);
    }
}
function getOptimizedUrl(publicId, options = {}) {
    return cloudinary.url(publicId, {
        fetch_format: 'auto',
        quality: 'auto',
        ...options
    });
}
;
;
;
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const category = searchParams.get('category');
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;
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
        const total = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.count({
            where
        });
        const items = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.findMany({
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
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromCookies"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication required'
            }, {
                status: 401
            });
        }
        const body = await request.json();
        const { title, description, category, status, itemStatus, locationLost, locationFound, locationDetails, dateLost, dateFound, color, brand, distinguishingFeatures, contactInfo, rewardAmount, tags, images// Array of base64 data URIs
         } = body;
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
        // Upload images to Cloudinary
        let imageUrls = [];
        if (images && Array.isArray(images) && images.length > 0) {
            try {
                const folder = status === 'lost' ? 'lost-items' : 'found-items';
                const uploadPromises = images.map((img)=>uploadImage(img, folder));
                const uploadResults = await Promise.all(uploadPromises);
                imageUrls = uploadResults.map((result)=>result.url);
            } catch (uploadError) {
                console.error('Image upload error:', uploadError);
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to upload images'
                }, {
                    status: 500
                });
            }
        }
        // Create item in database
        const item = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.create({
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
                imageUrls: imageUrls
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
        // Check for matches and create notifications
        try {
            if (status === 'lost') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$matchingAlgorithm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkMatchesForLostItem"])(item.id);
            } else if (status === 'found') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$matchingAlgorithm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkMatchesForFoundItem"])(item.id);
            }
        } catch (err) {
            console.error('Error checking matches:', err);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Item reported successfully',
            item
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Create item error:', error);
        console.error('Error details:', {
            message: error.message,
            code: error.code,
            stack: error.stack
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to create item',
            details: error.message
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromCookies"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication required'
            }, {
                status: 401
            });
        }
        const body = await request.json();
        const { image, folder } = body;
        if (!image) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Image data is required'
            }, {
                status: 400
            });
        }
        const result = await uploadImage(image, folder || 'items');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            url: result.url,
            publicId: result.publicId
        });
    } catch (error) {
        console.error('Upload error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to upload image'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7f1d39f8._.js.map