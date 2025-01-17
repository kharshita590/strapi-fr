"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/departments/health/page",{

/***/ "(app-pages-browser)/./src/components/health.tsx":
/*!***********************************!*\
  !*** ./src/components/health.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Health = ()=>{\n    var _Health__children_, _Health_;\n    _s();\n    cons;\n    const [healthData, setHealthData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Health.useEffect\": ()=>{\n            const fetchData = {\n                \"Health.useEffect.fetchData\": async ()=>{\n                    try {\n                        const response = await fetch(\"http://localhost:1337/api/healthss?populate=*\");\n                        const result = await response.json();\n                        if (result.data && result.data.length > 0) {\n                            setHealthData(result.data[0]);\n                        }\n                    } catch (error) {\n                        console.error(\"Error fetching health data:\", error);\n                    }\n                }\n            }[\"Health.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"Health.useEffect\"], []);\n    if (!healthData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/health.tsx\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, undefined);\n    }\n    const { Health, vidhishaContent, scheme, infra } = healthData;\n    const renderParagraphs = (content)=>content.map((item, index)=>{\n            var _item_children;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-black text-[16px]\",\n                children: ((_item_children = item.children) === null || _item_children === void 0 ? void 0 : _item_children.map((child)=>child.text).join(\"\")) || \"\"\n            }, index, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/health.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined);\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-24 space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-black font-bold text-3xl\",\n                children: ((_Health_ = Health[0]) === null || _Health_ === void 0 ? void 0 : (_Health__children_ = _Health_.children[0]) === null || _Health__children_ === void 0 ? void 0 : _Health__children_.text) || \"Health\"\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/health.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            renderParagraphs(Health.slice(1))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/health.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Health, \"TNIGpgRKfFZamovTVCXGXNXdQ20=\");\n_c = Health;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Health);\nvar _c;\n$RefreshReg$(_c, \"Health\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWx0aC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBRW5ELE1BQU1HLFNBQW1CO1FBc0NoQkEsb0JBQUFBOztJQXJDUEM7SUFDQSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQWE7SUFFekRELGdEQUFTQTs0QkFBQztZQUNSLE1BQU1NOzhDQUFZO29CQUNoQixJQUFJO3dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTt3QkFDN0IsTUFBTUMsU0FBUyxNQUFNRixTQUFTRyxJQUFJO3dCQUVsQyxJQUFJRCxPQUFPRSxJQUFJLElBQUlGLE9BQU9FLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7NEJBQ3pDUCxjQUFjSSxPQUFPRSxJQUFJLENBQUMsRUFBRTt3QkFDOUI7b0JBQ0YsRUFBRSxPQUFPRSxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsK0JBQStCQTtvQkFDL0M7Z0JBQ0Y7O1lBRUFQO1FBQ0Y7MkJBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0YsWUFBWTtRQUNmLHFCQUFPLDhEQUFDVztzQkFBRTs7Ozs7O0lBQ1o7SUFHQSxNQUFNLEVBQUViLE1BQU0sRUFBRWMsZUFBZSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHZDtJQUVuRCxNQUFNZSxtQkFBbUIsQ0FBQ0MsVUFDeEJBLFFBQVFDLEdBQUcsQ0FBQyxDQUFDQyxNQUFXQztnQkFFbkJEO2lDQURILDhEQUFDUDtnQkFBY1MsV0FBVTswQkFDdEJGLEVBQUFBLGlCQUFBQSxLQUFLRyxRQUFRLGNBQWJILHFDQUFBQSxlQUFlRCxHQUFHLENBQUMsQ0FBQ0ssUUFBZUEsTUFBTUMsSUFBSSxFQUFFQyxJQUFJLENBQUMsUUFBTztlQUR0REw7Ozs7OztJQUtaLHFCQUNFLDhEQUFDTTtRQUFJTCxXQUFVOzswQkFDYiw4REFBQ007Z0JBQUdOLFdBQVU7MEJBQ1h0QixFQUFBQSxXQUFBQSxNQUFNLENBQUMsRUFBRSxjQUFUQSxnQ0FBQUEscUJBQUFBLFNBQVd1QixRQUFRLENBQUMsRUFBRSxjQUF0QnZCLHlDQUFBQSxtQkFBd0J5QixJQUFJLEtBQUk7Ozs7OztZQUVsQ1IsaUJBQWlCakIsT0FBTzZCLEtBQUssQ0FBQzs7Ozs7OztBQU1yQztHQTlDTTdCO0tBQUFBO0FBZ0ROLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWtoaWxlc2hrdW1hci9EZXNrdG9wL25hZ2FyLWZyL3N0cmFwaS1mci9zcmMvY29tcG9uZW50cy9oZWFsdGgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhbHRoOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc1xuICBjb25zdCBbaGVhbHRoRGF0YSwgc2V0SGVhbHRoRGF0YV0gPSB1c2VTdGF0ZTxudWxsIHwgYW55PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2hlYWx0aHNzP3BvcHVsYXRlPSpcIik7IFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRIZWFsdGhEYXRhKHJlc3VsdC5kYXRhWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhlYWx0aCBkYXRhOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFoZWFsdGhEYXRhKSB7XG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+OyBcbiAgfVxuXG5cbiAgY29uc3QgeyBIZWFsdGgsIHZpZGhpc2hhQ29udGVudCwgc2NoZW1lLCBpbmZyYSB9ID0gaGVhbHRoRGF0YTtcblxuICBjb25zdCByZW5kZXJQYXJhZ3JhcGhzID0gKGNvbnRlbnQ6IGFueVtdKSA9PlxuICAgIGNvbnRlbnQubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdGV4dC1bMTZweF1cIj5cbiAgICAgICAge2l0ZW0uY2hpbGRyZW4/Lm1hcCgoY2hpbGQ6IGFueSkgPT4gY2hpbGQudGV4dCkuam9pbihcIlwiKSB8fCBcIlwifVxuICAgICAgPC9wPlxuICAgICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTI0IHNwYWNlLXktNFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtM3hsXCI+XG4gICAgICAgIHtIZWFsdGhbMF0/LmNoaWxkcmVuWzBdPy50ZXh0IHx8IFwiSGVhbHRoXCJ9XG4gICAgICA8L2gxPlxuICAgICAge3JlbmRlclBhcmFncmFwaHMoSGVhbHRoLnNsaWNlKDEpKX1cbiAgIFxuICAgICAgXG4gICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWx0aDtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFsdGgiLCJjb25zIiwiaGVhbHRoRGF0YSIsInNldEhlYWx0aERhdGEiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiLCJwIiwidmlkaGlzaGFDb250ZW50Iiwic2NoZW1lIiwiaW5mcmEiLCJyZW5kZXJQYXJhZ3JhcGhzIiwiY29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJ0ZXh0Iiwiam9pbiIsImRpdiIsImgxIiwic2xpY2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/health.tsx\n"));

/***/ })

});