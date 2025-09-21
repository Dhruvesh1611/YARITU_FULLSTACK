module.exports = [
"[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
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
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % offers.length);
        }, 3000); // Change slide every 3 seconds
        return ()=>clearInterval(interval);
    }, []);
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
            transform = `translateX(${side === 'left' ? -xOffset : xOffset}%) scale(${scale})`;
            zIndex = 4 - position;
        }
        return {
            transform,
            zIndex,
            filter,
            transition: 'transform 0.5s ease, filter 0.5s ease'
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "multiple-offers-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title",
                children: [
                    "Multiple ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "offers-container",
                children: offers.map((offer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "offer-card",
                        style: getCardStyle(index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: offer.image,
                                alt: `Offer ${offer.id}`,
                                layout: "fill",
                                objectFit: "cover",
                                className: "offer-image"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "offer-details",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "offer-category",
                                        children: offer.category
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/vs code/YARITU_FULLSTACK/USER/frontend/components/MultipleOffers.js",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vs__code$2f$YARITU_FULLSTACK$2f$USER$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
const __TURBOPACK__default__export__ = MultipleOffers;
}),
];

//# sourceMappingURL=3d860_vs%20code_YARITU_FULLSTACK_USER_frontend_components_MultipleOffers_de040dad.js.map