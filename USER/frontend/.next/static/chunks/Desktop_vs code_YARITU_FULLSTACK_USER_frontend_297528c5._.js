(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/hooks/useMediaQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useMediaQuery(query) {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = {
                "useMediaQuery.useEffect.listener": ()=>{
                    setMatches(media.matches);
                }
            }["useMediaQuery.useEffect.listener"];
            media.addListener(listener);
            return ({
                "useMediaQuery.useEffect": ()=>media.removeListener(listener)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        matches,
        query
    ]);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
const __TURBOPACK__default__export__ = useMediaQuery;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/StayClassy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/hooks/useMediaQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const collectionImages = [
    '/images/Featured1.png',
    '/images/Trending1.png',
    '/images/Featured3.png',
    '/images/reel2.png',
    '/images/reel3.png',
    '/images/reel4.png',
    '/images/reel5.png',
    '/images/store.png',
    '/images/offer1.png',
    '/images/offer2.png',
    '/images/offer3.png',
    '/images/offer4.png',
    '/images/offer5.png',
    '/images/hero1.png',
    '/images/hero2.png',
    '/images/Featured1.png',
    '/images/Trending1.png',
    '/images/Featured3.png',
    '/images/reel2.png',
    '/images/reel3.png',
    '/images/reel4.png',
    '/images/reel5.png',
    '/images/store.png',
    '/images/offer1.png',
    '/images/offer2.png'
];
const StayClassy = ()=>{
    _s();
    const [isFlipped, setIsFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('(max-width: 768px)');
    const gridSize = isMobile ? 16 : 25;
    const handleFlip = ()=>{
        setIsFlipped(!isFlipped);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StayClassy.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "StayClassy.useEffect": (param)=>{
                    let [entry] = param;
                    if (entry.isIntersecting) {
                        setIsFlipped(true);
                    } else {
                        setIsFlipped(false);
                    }
                }
            }["StayClassy.useEffect"], {
                rootMargin: '0px',
                threshold: 0.5
            });
            if (gridRef.current) {
                observer.observe(gridRef.current);
            }
            return ({
                "StayClassy.useEffect": ()=>{
                    if (gridRef.current) {
                        observer.unobserve(gridRef.current);
                    }
                }
            })["StayClassy.useEffect"];
        }
    }["StayClassy.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "stay-classy-section",
        ref: gridRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stay-classy-grid ".concat(isMobile ? 'grid-4x4' : ''),
                children: Array.from({
                    length: gridSize
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flip-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flip-card-inner ".concat(isFlipped ? 'is-flipped' : ''),
                            style: {
                                transitionDelay: "".concat(isFlipped ? index * 0.05 : (gridSize - 1 - index) * 0.05, "s")
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flip-card-front"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/StayClassy.js",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flip-card-back",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: collectionImages[index],
                                        alt: "Collection item ".concat(index + 1),
                                        layout: "fill",
                                        objectFit: "cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/StayClassy.js",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/StayClassy.js",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/StayClassy.js",
                            lineNumber: 56,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/StayClassy.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/StayClassy.js",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleFlip,
                className: "flip-button",
                children: isFlipped ? 'View Logo' : 'View Collection'
            }, void 0, false, {
                fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/StayClassy.js",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/StayClassy.js",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StayClassy, "jn81hF6zMQlD5QuBQ1WFKQcnJwU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = StayClassy;
const __TURBOPACK__default__export__ = StayClassy;
var _c;
__turbopack_context__.k.register(_c, "StayClassy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_vs%20code_YARITU_FULLSTACK_USER_frontend_297528c5._.js.map