(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/my-project/lost-found-app/src/context/AuthContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/my-project/lost-found-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
/**
 * Authentication Context
 * Provides user data and auth state across the app
 */ const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children, initialUser = null }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialUser);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!initialUser);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // If we already have initial user data, don't fetch
            if (initialUser) {
                setIsLoading(false);
                return;
            }
            // Check if token exists and decode it
            const checkAuth = {
                "AuthProvider.useEffect.checkAuth": ()=>{
                    try {
                        const token = document.cookie.split('; ').find({
                            "AuthProvider.useEffect.checkAuth": (row)=>row.startsWith('token=')
                        }["AuthProvider.useEffect.checkAuth"])?.split('=')[1];
                        if (token) {
                            // Decode JWT (basic decoding, doesn't verify signature)
                            const parts = token.split('.');
                            if (parts.length === 3) {
                                const decoded = JSON.parse(atob(parts[1]));
                                setUser({
                                    userId: decoded.userId,
                                    email: decoded.email,
                                    iat: decoded.iat
                                });
                            }
                        }
                    } catch (error) {
                        console.error('Error checking auth:', error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AuthProvider.useEffect.checkAuth"];
            checkAuth();
        }
    }["AuthProvider.useEffect"], [
        initialUser
    ]);
    const logout = ()=>{
        setUser(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/my-project/lost-found-app/src/context/AuthContext.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "eE8LEosv4sJy+jUs0o/N4RjiFEo=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$my$2d$project$2f$lost$2d$found$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_my-project_lost-found-app_src_context_AuthContext_jsx_0f573179._.js.map