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

/***/ "(app-pages-browser)/./src/components/logo.tsx":
/*!*********************************!*\
  !*** ./src/components/logo.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Logo = ()=>{\n    _s();\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Logo.useEffect\": ()=>{\n            const fetchData = {\n                \"Logo.useEffect.fetchData\": async ()=>{\n                    try {\n                        var _data_data_;\n                        const response = await fetch(\"http://localhost:1337/api/logos?populate=*\");\n                        const data = await response.json();\n                        const baseUrl = \"http://localhost:1337\";\n                        const logo = (_data_data_ = data.data[0]) === null || _data_data_ === void 0 ? void 0 : _data_data_.logo;\n                        if (logo) {\n                            var _logo_formats_thumbnail, _logo_formats;\n                            const thumbnailUrl = (_logo_formats = logo.formats) === null || _logo_formats === void 0 ? void 0 : (_logo_formats_thumbnail = _logo_formats.thumbnail) === null || _logo_formats_thumbnail === void 0 ? void 0 : _logo_formats_thumbnail.url;\n                            const mainUrl = logo.url;\n                            setImageUrl(\"\".concat(baseUrl).concat(thumbnailUrl || mainUrl));\n                        } else {\n                            console.error(\"Logo data is missing in the response.\");\n                        }\n                    } catch (error) {\n                        console.error(\"Error fetching logo:\", error);\n                    }\n                }\n            }[\"Logo.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"Logo.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative bg-white shadow\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center py-4\",\n                    children: imageUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imageUrl,\n                        alt: \"Logo\",\n                        className: \"h-16 w-16 object-cover\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/logo.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading logo...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/logo.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/logo.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold text-center text-black mx-4\",\n                    children: [\n                        \"नगर पालिका सिरोंज\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/logo.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 28\n                        }, undefined),\n                        \"जिला विदिशा (म.प्र.)\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/logo.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/logo.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/logo.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Logo, \"SL08Rt4pXtolfSfte7ehwM433z0=\");\n_c = Logo;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);\nvar _c;\n$RefreshReg$(_c, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ28udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUVuRCxNQUFNRyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBZ0I7SUFFeERDLGdEQUFTQTswQkFBQztZQUNSLE1BQU1JOzRDQUFZO29CQUNoQixJQUFJOzRCQUtXQzt3QkFKYixNQUFNQyxXQUFXLE1BQU1DLE1BQU07d0JBQzdCLE1BQU1GLE9BQU8sTUFBTUMsU0FBU0UsSUFBSTt3QkFDaEMsTUFBTUMsVUFBVTt3QkFFaEIsTUFBTUMsUUFBT0wsY0FBQUEsS0FBS0EsSUFBSSxDQUFDLEVBQUUsY0FBWkEsa0NBQUFBLFlBQWNLLElBQUk7d0JBQy9CLElBQUlBLE1BQU07Z0NBQ2FBLHlCQUFBQTs0QkFBckIsTUFBTUMsZ0JBQWVELGdCQUFBQSxLQUFLRSxPQUFPLGNBQVpGLHFDQUFBQSwwQkFBQUEsY0FBY0csU0FBUyxjQUF2QkgsOENBQUFBLHdCQUF5QkksR0FBRzs0QkFDakQsTUFBTUMsVUFBVUwsS0FBS0ksR0FBRzs0QkFDeEJYLFlBQVksR0FBYVEsT0FBVkYsU0FBa0MsT0FBeEJFLGdCQUFnQkk7d0JBQzNDLE9BQU87NEJBQ0xDLFFBQVFDLEtBQUssQ0FBQzt3QkFDaEI7b0JBQ0YsRUFBRSxPQUFPQSxPQUFPO3dCQUNkRCxRQUFRQyxLQUFLLENBQUMsd0JBQXdCQTtvQkFDeEM7Z0JBQ0Y7O1lBRUFiO1FBQ0Y7eUJBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pqQix5QkFDQyw4REFBQ2tCO3dCQUNDQyxLQUFLbkI7d0JBQ0xvQixLQUFJO3dCQUNKSCxXQUFVOzs7OztrREFHWiw4REFBQ0k7a0NBQUU7Ozs7Ozs7Ozs7OzhCQUdQLDhEQUFDQztvQkFBR0wsV0FBVTs7d0JBQWdEO3NDQUMzQyw4REFBQ007Ozs7O3dCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakM7R0EvQ014QjtLQUFBQTtBQWlETixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FraGlsZXNoa3VtYXIvRGVza3RvcC9uYWdhci9mcm9udGVuZC9mcm9udGVuZC1uZXh0L3NyYy9jb21wb25lbnRzL2xvZ28udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTG9nbyA9ICgpID0+IHtcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2xvZ29zP3BvcHVsYXRlPSpcIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiOyBcblxuICAgICAgICBjb25zdCBsb2dvID0gZGF0YS5kYXRhWzBdPy5sb2dvOyBcbiAgICAgICAgaWYgKGxvZ28pIHtcbiAgICAgICAgICBjb25zdCB0aHVtYm5haWxVcmwgPSBsb2dvLmZvcm1hdHM/LnRodW1ibmFpbD8udXJsO1xuICAgICAgICAgIGNvbnN0IG1haW5VcmwgPSBsb2dvLnVybDtcbiAgICAgICAgICBzZXRJbWFnZVVybChgJHtiYXNlVXJsfSR7dGh1bWJuYWlsVXJsIHx8IG1haW5Vcmx9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkxvZ28gZGF0YSBpcyBtaXNzaW5nIGluIHRoZSByZXNwb25zZS5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsb2dvOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSBzaGFkb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00XCI+XG4gICAgICAgICAge2ltYWdlVXJsID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5Mb2FkaW5nIGxvZ28uLi48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrIG14LTRcIj5cbiAgICAgICAgICDgpKjgpJfgpLAg4KSq4KS+4KSy4KS/4KSV4KS+IOCkuOCkv+CksOCli+CkguCknDxiciAvPlxuICAgICAgICAgIOCknOCkv+CksuCkviDgpLXgpL/gpKbgpL/gpLbgpL4gKOCkri7gpKrgpY3gpLAuKVxuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMb2dvIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImZldGNoRGF0YSIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImJhc2VVcmwiLCJsb2dvIiwidGh1bWJuYWlsVXJsIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsInVybCIsIm1haW5VcmwiLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiaDEiLCJiciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/logo.tsx\n"));

/***/ })

});