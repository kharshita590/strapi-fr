"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./src/components/header.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/logo */ \"(app-pages-browser)/./src/components/logo.tsx\");\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/nav */ \"(app-pages-browser)/./src/components/nav.tsx\");\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/carousel */ \"(app-pages-browser)/./src/components/carousel.tsx\");\n/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/info */ \"(app-pages-browser)/./src/components/info.tsx\");\n/* harmony import */ var _components_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/address */ \"(app-pages-browser)/./src/components/address.tsx\");\n/* harmony import */ var _components_photo_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/photo-gallery */ \"(app-pages-browser)/./src/components/photo-gallery.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const fetchData = {\n                \"Home.useEffect.fetchData\": async ()=>{\n                    try {\n                        const response = await fetch(\"http://localhost:1337/api/phoyo-galleries?populate=*\");\n                        const data = await response.json();\n                        const baseUrl = \"http://localhost:1337\";\n                        const extractedImages = data.data[0].images.map({\n                            \"Home.useEffect.fetchData.extractedImages\": (image)=>{\n                                if (image.formats && image.formats.thumbnail) {\n                                    return \"\".concat(baseUrl).concat(image.formats.thumbnail.url);\n                                } else if (image.url) {\n                                    return \"\".concat(baseUrl).concat(image.url);\n                                }\n                                return null;\n                            }\n                        }[\"Home.useEffect.fetchData.extractedImages\"]).filter({\n                            \"Home.useEffect.fetchData.extractedImages\": (url)=>url !== null\n                        }[\"Home.useEffect.fetchData.extractedImages\"]);\n                        setImages(extractedImages);\n                    } catch (error) {\n                        console.error(\"Error fetching images:\", error);\n                    }\n                }\n            }[\"Home.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-sans bg-gray-100 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                images: images\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-12 p-6 px-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_address__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_photo_gallery__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNOO0FBQ0o7QUFDRjtBQUNVO0FBRVI7QUFDTTtBQUNXO0FBQ3RELE1BQU1VLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFXLEVBQUU7SUFDakRDLGdEQUFTQTswQkFBQztZQUNSLE1BQU1XOzRDQUFZO29CQUNoQixJQUFJO3dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTt3QkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO3dCQUNoQyxNQUFNQyxVQUFVO3dCQUNoQixNQUFNQyxrQkFBa0JILEtBQUtBLElBQUksQ0FBQyxFQUFFLENBQUNMLE1BQU0sQ0FDeENTLEdBQUc7d0VBQUMsQ0FBQ0M7Z0NBQ0osSUFBSUEsTUFBTUMsT0FBTyxJQUFJRCxNQUFNQyxPQUFPLENBQUNDLFNBQVMsRUFBRTtvQ0FDNUMsT0FBTyxHQUFhRixPQUFWSCxTQUFzQyxPQUE1QkcsTUFBTUMsT0FBTyxDQUFDQyxTQUFTLENBQUNDLEdBQUc7Z0NBQ2pELE9BQU8sSUFBSUgsTUFBTUcsR0FBRyxFQUFFO29DQUNwQixPQUFPLEdBQWFILE9BQVZILFNBQW9CLE9BQVZHLE1BQU1HLEdBQUc7Z0NBQy9CO2dDQUNBLE9BQU87NEJBQ1Q7dUVBQ0NDLE1BQU07d0VBQUMsQ0FBQ0QsTUFBdUJBLFFBQVE7O3dCQUUxQ1osVUFBVU87b0JBQ1osRUFBRSxPQUFPTyxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtvQkFDMUM7Z0JBQ0Y7O1lBRUFiO1FBQ0Y7eUJBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQzFCLDBEQUFNQTs7Ozs7MEJBQ1IsOERBQUNDLHdEQUFJQTs7Ozs7MEJBQ0osOERBQUNDLHVEQUFHQTs7Ozs7MEJBQ04sOERBQUNDLDREQUFRQTtnQkFBQ0ssUUFBUUE7Ozs7OzswQkFFbEIsOERBQUNKLHdEQUFJQTs7Ozs7MEJBRUwsOERBQUNxQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNyQiwyREFBT0E7Ozs7O2tDQUNSLDhEQUFDQyxpRUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0dBNUNNQztLQUFBQTtBQThDTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FraGlsZXNoa3VtYXIvRGVza3RvcC9uYWdhci9mcm9udGVuZC9mcm9udGVuZC1uZXh0L3NyYy9hcHAvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBMb2dvIGZyb20gXCJAL2NvbXBvbmVudHMvbG9nb1wiO1xuaW1wb3J0IE5hdiBmcm9tIFwiQC9jb21wb25lbnRzL25hdlwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJAL2NvbXBvbmVudHMvY2Fyb3VzZWxcIjtcbmltcG9ydCBIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvaGVyb1NlY3Rpb25cIjtcbmltcG9ydCBJbmZvIGZyb20gXCJAL2NvbXBvbmVudHMvaW5mb1wiO1xuaW1wb3J0IEFkZHJlc3MgZnJvbSBcIkAvY29tcG9uZW50cy9hZGRyZXNzXCI7XG5pbXBvcnQgUGhvdG9HYWxsZXJ5IGZyb20gXCJAL2NvbXBvbmVudHMvcGhvdG8tZ2FsbGVyeVwiO1xuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvcGhveW8tZ2FsbGVyaWVzP3BvcHVsYXRlPSpcIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiOyBcbiAgICAgICAgY29uc3QgZXh0cmFjdGVkSW1hZ2VzID0gZGF0YS5kYXRhWzBdLmltYWdlc1xuICAgICAgICAgIC5tYXAoKGltYWdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5mb3JtYXRzICYmIGltYWdlLmZvcm1hdHMudGh1bWJuYWlsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBgJHtiYXNlVXJsfSR7aW1hZ2UuZm9ybWF0cy50aHVtYm5haWwudXJsfWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGltYWdlLnVybCkge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7YmFzZVVybH0ke2ltYWdlLnVybH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbHRlcigodXJsOiBzdHJpbmcgfCBudWxsKSA9PiB1cmwgIT09IG51bGwpOyBcbiAgXG4gICAgICAgIHNldEltYWdlcyhleHRyYWN0ZWRJbWFnZXMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGltYWdlczpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyBiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkZXIvPlxuICAgICA8TG9nby8+XG4gICAgICA8TmF2Lz5cbiAgICA8Q2Fyb3VzZWwgaW1hZ2VzPXtpbWFnZXN9Lz5cbiAgICB7LyogPEhlcm8vPiAqL31cbiAgICA8SW5mby8+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xMiBwLTYgcHgtMTJcIj5cbiAgICAgIDxBZGRyZXNzLz5cbiAgICAgIDxQaG90b0dhbGxlcnkvPlxuICAgIDwvZGl2PlxuICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJMb2dvIiwiTmF2IiwiQ2Fyb3VzZWwiLCJJbmZvIiwiQWRkcmVzcyIsIlBob3RvR2FsbGVyeSIsIkhvbWUiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJiYXNlVXJsIiwiZXh0cmFjdGVkSW1hZ2VzIiwibWFwIiwiaW1hZ2UiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwidXJsIiwiZmlsdGVyIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"flex justify-between items-center bg-white p-4 border-b\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-sm text-gray-600\",\n                    children: \"Dec 11 2024 9:45 AM\"\n                }, void 0, false, {\n                    fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/header.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"border rounded px-2 py-1 text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"en\",\n                                    children: \"Select Language\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/header.tsx\",\n                                    lineNumber: 10,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"hi\",\n                                    children: \"Hindi\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/header.tsx\",\n                                    lineNumber: 11,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/header.tsx\",\n                            lineNumber: 9,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-brown-500 text-white px-4 py-2 rounded\",\n                            children: \"लॉगिन\"\n                        }, void 0, false, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/header.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/header.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/header.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/header.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsU0FBUztJQUNiLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFPRCxXQUFVOzs4QkFDaEIsOERBQUNEO29CQUFJQyxXQUFVOzhCQUF3Qjs7Ozs7OzhCQUN2Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBT0YsV0FBVTs7OENBQ2hCLDhEQUFDRztvQ0FBT0MsT0FBTTs4Q0FBSzs7Ozs7OzhDQUNuQiw4REFBQ0Q7b0NBQU9DLE9BQU07OENBQUs7Ozs7Ozs7Ozs7OztzQ0FFckIsOERBQUNDOzRCQUFPTCxXQUFVO3NDQUE0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEU7S0FsQk1GO0FBb0JOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWtoaWxlc2hrdW1hci9EZXNrdG9wL25hZ2FyL2Zyb250ZW5kL2Zyb250ZW5kLW5leHQvc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmctd2hpdGUgcC00IGJvcmRlci1iXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+RGVjIDExIDIwMjQgOTo0NSBBTTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBweC0yIHB5LTEgdGV4dC1zbVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuXCI+U2VsZWN0IExhbmd1YWdlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlcIj5IaW5kaTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYnJvd24tNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICAgIOCksuClieCkl+Ckv+CkqFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzZWxlY3QiLCJvcHRpb24iLCJ2YWx1ZSIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/header.tsx\n"));

/***/ })

});