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

/***/ "(app-pages-browser)/./src/components/info.tsx":
/*!*********************************!*\
  !*** ./src/components/info.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Info = ()=>{\n    _s();\n    const info = [];\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:1337/api/sironj-ke-bares?populate=*\");\n            const result = await response.json();\n            setData(result.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Info.useEffect\": ()=>{\n            fetchData();\n        }\n    }[\"Info.useEffect\"], []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black font-sans py-10 px-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-5xl mx-auto space-y-12\",\n            children: data.map((section)=>{\n                var _section_sironj__children_, _section_sironj_, _section_sironj__children_1, _section_sironj_1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold mb-4 flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mr-2\",\n                                    children: (_section_sironj_ = section.sironj[0]) === null || _section_sironj_ === void 0 ? void 0 : (_section_sironj__children_ = _section_sironj_.children[0]) === null || _section_sironj__children_ === void 0 ? void 0 : _section_sironj__children_.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-full h-px bg-yellow-400\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base leading-relaxed\",\n                            children: (_section_sironj_1 = section.sironj[1]) === null || _section_sironj_1 === void 0 ? void 0 : (_section_sironj__children_1 = _section_sironj_1.children[0]) === null || _section_sironj__children_1 === void 0 ? void 0 : _section_sironj__children_1.text\n                        }, void 0, false, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, section.id, true, {\n                    fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Info, \"YP7e7Smzxlgf2d3MqLcgRZjo83U=\");\n_c = Info;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);\nvar _c;\n$RefreshReg$(_c, \"Info\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luZm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQWFuRCxNQUFNRyxPQUFPOztJQUNYLE1BQU1DLE9BQUssRUFBRTtJQUNiLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBZSxFQUFFO0lBQ2pELE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUd2QyxNQUFNTyxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTUMsU0FBUyxNQUFNRixTQUFTRyxJQUFJO1lBQ2xDUCxRQUFRTSxPQUFPUCxJQUFJO1FBQ3JCLEVBQUUsT0FBT1MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QyxTQUFVO1lBQ1JOLFdBQVc7UUFDYjtJQUNGO0lBRUFQLGdEQUFTQTswQkFBQztZQUNSUTtRQUNGO3lCQUFHLEVBQUU7SUFFTCxJQUFJRixTQUFTO1FBQ1gscUJBQU8sOERBQUNTO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNaWixLQUFLYSxHQUFHLENBQUMsQ0FBQ0M7b0JBR21CQSw0QkFBQUEsa0JBSXZCQSw2QkFBQUE7cUNBTkwsOERBQUNBOztzQ0FDQyw4REFBQ0M7NEJBQUdILFdBQVU7OzhDQUNaLDhEQUFDSTtvQ0FBS0osV0FBVTsrQ0FBUUUsbUJBQUFBLFFBQVFHLE1BQU0sQ0FBQyxFQUFFLGNBQWpCSCx3Q0FBQUEsNkJBQUFBLGlCQUFtQkksUUFBUSxDQUFDLEVBQUUsY0FBOUJKLGlEQUFBQSwyQkFBZ0NLLElBQUk7Ozs7Ozs4Q0FDNUQsOERBQUNIO29DQUFLSixXQUFVOzs7Ozs7Ozs7Ozs7c0NBRWxCLDhEQUFDUTs0QkFBRVIsV0FBVTt1Q0FDVkUsb0JBQUFBLFFBQVFHLE1BQU0sQ0FBQyxFQUFFLGNBQWpCSCx5Q0FBQUEsOEJBQUFBLGtCQUFtQkksUUFBUSxDQUFDLEVBQUUsY0FBOUJKLGtEQUFBQSw0QkFBZ0NLLElBQUk7Ozs7Ozs7bUJBTjNCTCxRQUFRTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBYWxDO0dBM0NNdkI7S0FBQUE7QUE2Q04saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbGVzaGt1bWFyL0Rlc2t0b3AvbmFnYXItZnIvc3RyYXBpLWZyL3NyYy9jb21wb25lbnRzL2luZm8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgU2VjdGlvbiA9IHtcbiAgdHlwZTogc3RyaW5nO1xuICBjaGlsZHJlbjogeyB0eXBlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9W107XG59O1xuXG50eXBlIFNpcm9uakRhdGEgPSB7XG4gIGlkOiBudW1iZXI7XG4gIGRvY3VtZW50SWQ6IHN0cmluZztcbiAgc2lyb25qOiBTZWN0aW9uW107XG59O1xuXG5jb25zdCBJbmZvID0gKCkgPT4ge1xuICBjb25zdCBpbmZvPVtdXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFNpcm9uakRhdGFbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvc2lyb25qLWtlLWJhcmVzP3BvcHVsYXRlPSpcIik7IFxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZm9udC1zYW5zIHB5LTEwIHB4LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG8gc3BhY2UteS0xMlwiPlxuICAgICAgICB7ZGF0YS5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICA8c2VjdGlvbiBrZXk9e3NlY3Rpb24uaWR9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj57c2VjdGlvbi5zaXJvbmpbMF0/LmNoaWxkcmVuWzBdPy50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy1mdWxsIGgtcHggYmcteWVsbG93LTQwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIHtzZWN0aW9uLnNpcm9ualsxXT8uY2hpbGRyZW5bMF0/LnRleHR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW5mbyIsImluZm8iLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJzZWN0aW9uIiwiaDIiLCJzcGFuIiwic2lyb25qIiwiY2hpbGRyZW4iLCJ0ZXh0IiwicCIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/info.tsx\n"));

/***/ })

});