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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst PhotoGallery = ()=>{\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PhotoGallery.useEffect\": ()=>{\n            const fetchData = {\n                \"PhotoGallery.useEffect.fetchData\": async ()=>{\n                    try {\n                        const response = await fetch(\"http://localhost:1337/api/phoo-galleries?populate=*\");\n                        const data = await response.json();\n                        const baseUrl = \"http://localhost:1337\";\n                        const extractedImages = data.data[0].images.map({\n                            \"PhotoGallery.useEffect.fetchData.extractedImages\": (image)=>{\n                                if (image.formats && image.formats.thumbnail) {\n                                    return \"\".concat(baseUrl).concat(image.formats.thumbnail.url);\n                                } else if (image.url) {\n                                    return \"\".concat(baseUrl).concat(image.url);\n                                }\n                                return null;\n                            }\n                        }[\"PhotoGallery.useEffect.fetchData.extractedImages\"]).filter({\n                            \"PhotoGallery.useEffect.fetchData.extractedImages\": (url)=>url !== null\n                        }[\"PhotoGallery.useEffect.fetchData.extractedImages\"]);\n                        setImages(extractedImages);\n                    } catch (error) {\n                        console.error(\"Error fetching images:\", error);\n                    }\n                }\n            }[\"PhotoGallery.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"PhotoGallery.useEffect\"], []);\n    if (images.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n            lineNumber: 36,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white border border-gray-200 rounded-lg shadow-md p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-500 text-white px-4 py-2 rounded-t-lg flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-xl font-bold\",\n                    children: \"फोटो गैलरी\"\n                }, void 0, false, {\n                    fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50\",\n                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image,\n                            alt: \"Gallery image \".concat(index + 1),\n                            className: \"w-full h-40 object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/photo-gallery.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PhotoGallery, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n_c = PhotoGallery;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoGallery);\nvar _c;\n$RefreshReg$(_c, \"PhotoGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bob3RvLWdhbGxlcnkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUVuRCxNQUFNRyxlQUFlOztJQUNuQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQVcsRUFBRTtJQUVqREQsZ0RBQVNBO2tDQUFDO1lBQ1IsTUFBTUs7b0RBQVk7b0JBQ2hCLElBQUk7d0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO3dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7d0JBQ2hDLE1BQU1DLFVBQVU7d0JBQ2hCLE1BQU1DLGtCQUFrQkgsS0FBS0EsSUFBSSxDQUFDLEVBQUUsQ0FBQ0wsTUFBTSxDQUN4Q1MsR0FBRztnRkFBQyxDQUFDQztnQ0FDSixJQUFJQSxNQUFNQyxPQUFPLElBQUlELE1BQU1DLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFO29DQUM1QyxPQUFPLEdBQWFGLE9BQVZILFNBQXNDLE9BQTVCRyxNQUFNQyxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRztnQ0FDakQsT0FBTyxJQUFJSCxNQUFNRyxHQUFHLEVBQUU7b0NBQ3BCLE9BQU8sR0FBYUgsT0FBVkgsU0FBb0IsT0FBVkcsTUFBTUcsR0FBRztnQ0FDL0I7Z0NBQ0EsT0FBTzs0QkFDVDsrRUFDQ0MsTUFBTTtnRkFBQyxDQUFDRCxNQUF1QkEsUUFBUTs7d0JBRTFDWixVQUFVTztvQkFDWixFQUFFLE9BQU9PLE9BQU87d0JBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO29CQUMxQztnQkFDRjs7WUFFQWI7UUFDRjtpQ0FBRyxFQUFFO0lBSUwsSUFBSUYsT0FBT2lCLE1BQU0sS0FBSyxHQUFHO1FBQ3ZCLHFCQUFPLDhEQUFDQztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBS0QsV0FBVTs4QkFBb0I7Ozs7Ozs7Ozs7OzBCQUd0Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pwQixPQUFPUyxHQUFHLENBQUMsQ0FBQ0MsT0FBT1ksc0JBQ2xCLDhEQUFDSDt3QkFFQ0MsV0FBVTtrQ0FFViw0RUFBQ0c7NEJBQ0NDLEtBQUtkOzRCQUNMZSxLQUFLLGlCQUEyQixPQUFWSCxRQUFROzRCQUM5QkYsV0FBVTs7Ozs7O3VCQU5QRTs7Ozs7Ozs7Ozs7Ozs7OztBQWFqQjtHQTFETXZCO0tBQUFBO0FBNEROLGlFQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWtoaWxlc2hrdW1hci9EZXNrdG9wL25hZ2FyL2Zyb250ZW5kL2Zyb250ZW5kLW5leHQvc3JjL2NvbXBvbmVudHMvcGhvdG8tZ2FsbGVyeS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFBob3RvR2FsbGVyeSA9ICgpID0+IHtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9waG9vLWdhbGxlcmllcz9wb3B1bGF0ZT0qXCIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjsgXG4gICAgICAgIGNvbnN0IGV4dHJhY3RlZEltYWdlcyA9IGRhdGEuZGF0YVswXS5pbWFnZXNcbiAgICAgICAgICAubWFwKChpbWFnZTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UuZm9ybWF0cyAmJiBpbWFnZS5mb3JtYXRzLnRodW1ibmFpbCkge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7YmFzZVVybH0ke2ltYWdlLmZvcm1hdHMudGh1bWJuYWlsLnVybH1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbWFnZS51cmwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGAke2Jhc2VVcmx9JHtpbWFnZS51cmx9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsOyBcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoKHVybDogc3RyaW5nIHwgbnVsbCkgPT4gdXJsICE9PSBudWxsKTsgXG4gIFxuICAgICAgICBzZXRJbWFnZXMoZXh0cmFjdGVkSW1hZ2VzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBpbWFnZXM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuICBcbiAgXG5cbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTRcIj5cbiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC10LWxnIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+4KSr4KWL4KSf4KWLIOCkl+CliOCksuCksOClgDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTQgcC00IGJnLWdyYXktNTBcIj5cbiAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e2BHYWxsZXJ5IGltYWdlICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9HYWxsZXJ5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQaG90b0dhbGxlcnkiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJiYXNlVXJsIiwiZXh0cmFjdGVkSW1hZ2VzIiwibWFwIiwiaW1hZ2UiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwidXJsIiwiZmlsdGVyIiwiZXJyb3IiLCJjb25zb2xlIiwibGVuZ3RoIiwicCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJpbmRleCIsImltZyIsInNyYyIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/photo-gallery.tsx\n"));

/***/ })

});