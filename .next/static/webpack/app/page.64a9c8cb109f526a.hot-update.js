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

/***/ "(app-pages-browser)/./src/components/photo-gallery.tsx":
/*!******************************************!*\
  !*** ./src/components/photo-gallery.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst PhotoGallery = ()=>{\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PhotoGallery.useEffect\": ()=>{\n            const fetchData = {\n                \"PhotoGallery.useEffect.fetchData\": async ()=>{\n                    try {\n                        const response = await fetch(\"http://localhost:1337/api/photo-galleries?populate=*\");\n                        const data = await response.json();\n                        const baseUrl = \"http://localhost:1337\"; // Adjust to your server's base URL\n                        const extractedImages = data.data[0].images.map({\n                            \"PhotoGallery.useEffect.fetchData.extractedImages\": (image)=>\"\".concat(baseUrl).concat(image.formats.thumbnail.url)\n                        }[\"PhotoGallery.useEffect.fetchData.extractedImages\"]);\n                        setImages(extractedImages);\n                    } catch (error) {\n                        console.error(\"Error fetching images:\", error);\n                    }\n                }\n            }[\"PhotoGallery.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"PhotoGallery.useEffect\"], []);\n    if (images.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white border border-gray-200 rounded-lg shadow-md p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-500 text-white px-4 py-2 rounded-t-lg flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-xl font-bold\",\n                    children: \"फोटो गैलरी\"\n                }, void 0, false, {\n                    fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50\",\n                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image,\n                            alt: \"Gallery image \".concat(index + 1),\n                            className: \"w-full h-40 object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PhotoGallery, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n_c = PhotoGallery;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoGallery);\nvar _c;\n$RefreshReg$(_c, \"PhotoGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bob3RvLWdhbGxlcnkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUVuRCxNQUFNRyxlQUFlOztJQUNuQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQVcsRUFBRTtJQUVqREQsZ0RBQVNBO2tDQUFDO1lBQ1IsTUFBTUs7b0RBQVk7b0JBQ2hCLElBQUk7d0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO3dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7d0JBRWhDLE1BQU1DLFVBQVUseUJBQXlCLG1DQUFtQzt3QkFDNUUsTUFBTUMsa0JBQWtCSCxLQUFLQSxJQUFJLENBQUMsRUFBRSxDQUFDTCxNQUFNLENBQUNTLEdBQUc7Z0ZBQUMsQ0FBQ0MsUUFBZSxHQUFhQSxPQUFWSCxTQUFzQyxPQUE1QkcsTUFBTUMsT0FBTyxDQUFDQyxTQUFTLENBQUNDLEdBQUc7O3dCQUV4R1osVUFBVU87b0JBQ1osRUFBRSxPQUFPTSxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtvQkFDMUM7Z0JBQ0Y7O1lBRUFaO1FBQ0Y7aUNBQUcsRUFBRTtJQUdMLElBQUlGLE9BQU9nQixNQUFNLEtBQUssR0FBRztRQUN2QixxQkFBTyw4REFBQ0M7c0JBQUU7Ozs7OztJQUNaO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUtELFdBQVU7OEJBQW9COzs7Ozs7Ozs7OzswQkFHdEMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNabkIsT0FBT1MsR0FBRyxDQUFDLENBQUNDLE9BQU9XLHNCQUNsQiw4REFBQ0g7d0JBRUNDLFdBQVU7a0NBRVYsNEVBQUNHOzRCQUNDQyxLQUFLYjs0QkFDTGMsS0FBSyxpQkFBMkIsT0FBVkgsUUFBUTs0QkFDOUJGLFdBQVU7Ozs7Ozt1QkFOUEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhakI7R0FqRE10QjtLQUFBQTtBQW1ETixpRUFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FraGlsZXNoa3VtYXIvRGVza3RvcC9uYWdhci9mcm9udGVuZC9mcm9udGVuZC1uZXh0L3NyYy9jb21wb25lbnRzL3Bob3RvLWdhbGxlcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQaG90b0dhbGxlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvcGhvdG8tZ2FsbGVyaWVzP3BvcHVsYXRlPSpcIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7IC8vIEFkanVzdCB0byB5b3VyIHNlcnZlcidzIGJhc2UgVVJMXG4gICAgICAgIGNvbnN0IGV4dHJhY3RlZEltYWdlcyA9IGRhdGEuZGF0YVswXS5pbWFnZXMubWFwKChpbWFnZTogYW55KSA9PiBgJHtiYXNlVXJsfSR7aW1hZ2UuZm9ybWF0cy50aHVtYm5haWwudXJsfWApO1xuICAgICAgICBcbiAgICAgICAgc2V0SW1hZ2VzKGV4dHJhY3RlZEltYWdlcyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW1hZ2VzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgXG5cbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTRcIj5cbiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC10LWxnIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+4KSr4KWL4KSf4KWLIOCkl+CliOCksuCksOClgDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTQgcC00IGJnLWdyYXktNTBcIj5cbiAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e2BHYWxsZXJ5IGltYWdlICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9HYWxsZXJ5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQaG90b0dhbGxlcnkiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJiYXNlVXJsIiwiZXh0cmFjdGVkSW1hZ2VzIiwibWFwIiwiaW1hZ2UiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwidXJsIiwiZXJyb3IiLCJjb25zb2xlIiwibGVuZ3RoIiwicCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJpbmRleCIsImltZyIsInNyYyIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/photo-gallery.tsx\n"));

/***/ })

});