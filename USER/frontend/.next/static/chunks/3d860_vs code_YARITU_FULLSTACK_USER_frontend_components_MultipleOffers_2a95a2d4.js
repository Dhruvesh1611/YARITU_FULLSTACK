(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const offers = [
    {
        id: 1,
        image: '/images/offer1.png',
        discount: 'UP TO 50% OFF',
        category: 'HAUL'
    },
    {
        id: 2,
        image: '/images/offer2.png',
        discount: 'UP TO 40% OFF',
        category: 'STYLE'
    },
    {
        id: 3,
        image: '/images/offer3.png',
        discount: 'UP TO 60% OFF',
        category: 'LIFE'
    },
    {
        id: 4,
        image: '/images/offer4.png',
        discount: 'UP TO 30% OFF',
        category: 'FRESH'
    },
    {
        id: 5,
        image: '/images/offer5.png',
        discount: 'UP TO 70% OFF',
        category: 'OOTD'
    }
];
const MultipleOffers = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultipleOffers.useEffect": ()=>{
            const interval = setInterval({
                "MultipleOffers.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "MultipleOffers.useEffect.interval": (prevIndex)=>(prevIndex + 1) % offers.length
                    }["MultipleOffers.useEffect.interval"]);
                }
            }["MultipleOffers.useEffect.interval"], 3000); // Change slide every 3 seconds
            return ({
                "MultipleOffers.useEffect": ()=>clearInterval(interval)
            })["MultipleOffers.useEffect"];
        }
    }["MultipleOffers.useEffect"], []);
    const getCardStyle = (index)=>{
        const distance = (index - currentIndex + offers.length) % offers.length;
        const isCentered = distance === 2;
        let transform = '';
        let zIndex = 0;
        let filter = 'grayscale(100%)';
        if (isCentered) {
            // Centered card
            transform = 'translateX(0) scale(1.1)';
            zIndex = 5;
            filter = 'grayscale(0%)';
        } else {
            // Side cards
            const side = distance < 2 ? 'left' : 'right';
            const position = side === 'left' ? 2 - distance : distance - 2;
            const xOffset = position * 60; // Adjust spacing
            const scale = 1 - position * 0.1;
            transform = "translateX(".concat(side === 'left' ? -xOffset : xOffset, "%) scale(").concat(scale, ")");
            zIndex = 4 - position;
        }
        return {
            transform,
            zIndex,
            filter,
            transition: 'transform 0.5s ease, filter 0.5s ease'
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "multiple-offers-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title",
                children: [
                    "Multiple ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "highlight",
                        children: "Offers"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                        lineNumber: 59,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "offers-container",
                children: offers.map((offer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "offer-card",
                        style: getCardStyle(index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: offer.image,
                                alt: "Offer ".concat(offer.id),
                                layout: "fill",
                                objectFit: "cover",
                                className: "offer-image"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "offer-details",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "offer-category",
                                        children: offer.category
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "offer-discount",
                                        children: offer.discount
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, offer.id, true, {
                        fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MultipleOffers, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c = MultipleOffers;
const __TURBOPACK__default__export__ = MultipleOffers;
var _c;
__turbopack_context__.k.register(_c, "MultipleOffers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=3d860_vs%20code_YARITU_FULLSTACK_USER_frontend_components_MultipleOffers_2a95a2d4.js.map