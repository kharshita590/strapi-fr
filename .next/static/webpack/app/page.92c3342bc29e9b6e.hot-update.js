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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// \"use client\"\n// import React, { useEffect, useState } from \"react\";\n// const PhotoGallery = () => {\n//   const [images, setImages] = useState<string[]>([]);\n//   useEffect(() => {\n//     const fetchData = async () => {\n//       try {\n//         const response = await fetch(\"http://localhost:1337/api/phoyo-galleries?populate=*\");\n//         const data = await response.json();\n//         const baseUrl = \"http://localhost:1337\"; \n//         const extractedImages = data.data[0].images\n//           .map((image: any) => {\n//             if (image.formats && image.formats.thumbnail) {\n//               return `${baseUrl}${image.formats.thumbnail.url}`;\n//             } else if (image.url) {\n//               return `${baseUrl}${image.url}`;\n//             }\n//             return null; \n//           })\n//           .filter((url: string | null) => url !== null); \n//         setImages(extractedImages);\n//       } catch (error) {\n//         console.error(\"Error fetching images:\", error);\n//       }\n//     };\n//     fetchData();\n//   }, []);\n//   if (images.length === 0) {\n//     return <p>Loading...</p>;\n//   }\n//   return (\n//     <div className=\"bg-white border border-gray-200 rounded-lg shadow-md \">\n//       <div className=\"bg-[#00008B] text-white px-4 py-2 rounded-t-lg flex items-center\">\n//         <span className=\"text-xl font-bold\">फोटो गैलरी</span>\n//       </div>\n//       <div className=\"grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50\">\n//         {images.map((image, index) => (\n//           <div\n//             key={index}\n//             className=\"border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300\"\n//           >\n//             <img\n//               src={image}\n//               alt={`Gallery image ${index + 1}`}\n//               className=\"w-full h-40 object-cover\"\n//             />\n//           </div>\n//         ))}\n//       </div>\n//     </div>\n//   );\n// };\n// export default PhotoGallery;\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst PhotoGallery = ()=>{\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PhotoGallery.useEffect\": ()=>{\n            const fetchData = {\n                \"PhotoGallery.useEffect.fetchData\": async ()=>{\n                    try {\n                        const response = await fetch(\"http://localhost:1337/api/phoyo-galleries?populate=*\");\n                        const data = await response.json();\n                        const baseUrl = \"http://localhost:1337\";\n                        const extractedImages = data.data[0].images.map({\n                            \"PhotoGallery.useEffect.fetchData.extractedImages\": (image)=>{\n                                if (image.formats && image.formats.thumbnail) {\n                                    return \"\".concat(baseUrl).concat(image.formats.thumbnail.url);\n                                } else if (image.url) {\n                                    return \"\".concat(baseUrl).concat(image.url);\n                                }\n                                return null;\n                            }\n                        }[\"PhotoGallery.useEffect.fetchData.extractedImages\"]).filter({\n                            \"PhotoGallery.useEffect.fetchData.extractedImages\": (url)=>url !== null\n                        }[\"PhotoGallery.useEffect.fetchData.extractedImages\"]);\n                        setImages(extractedImages);\n                    } catch (error) {\n                        console.error(\"Error fetching images:\", error);\n                    }\n                }\n            }[\"PhotoGallery.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"PhotoGallery.useEffect\"], []);\n    if (images.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/photo-gallery.tsx\",\n            lineNumber: 102,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white border border-gray-200 rounded-lg shadow-md \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#00008B] text-white px-4 py-2 rounded-t-lg flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-xl font-bold\",\n                    children: \"फोटो गैलरी\"\n                }, void 0, false, {\n                    fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/photo-gallery.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/photo-gallery.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50\",\n                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image,\n                            alt: \"Gallery image \".concat(index + 1),\n                            className: \"w-full h-40 object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/photo-gallery.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/photo-gallery.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/photo-gallery.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/photo-gallery.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PhotoGallery, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n_c = PhotoGallery;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoGallery);\nvar _c;\n$RefreshReg$(_c, \"PhotoGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bob3RvLWdhbGxlcnkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxlQUFlO0FBQ2Ysc0RBQXNEO0FBRXRELCtCQUErQjtBQUMvQix3REFBd0Q7QUFFeEQsc0JBQXNCO0FBQ3RCLHNDQUFzQztBQUN0QyxjQUFjO0FBQ2QsZ0dBQWdHO0FBQ2hHLDhDQUE4QztBQUM5QyxvREFBb0Q7QUFDcEQsc0RBQXNEO0FBQ3RELG1DQUFtQztBQUNuQyw4REFBOEQ7QUFDOUQsbUVBQW1FO0FBQ25FLHNDQUFzQztBQUN0QyxpREFBaUQ7QUFDakQsZ0JBQWdCO0FBQ2hCLDRCQUE0QjtBQUM1QixlQUFlO0FBQ2YsNERBQTREO0FBRTVELHNDQUFzQztBQUN0QywwQkFBMEI7QUFDMUIsMERBQTBEO0FBQzFELFVBQVU7QUFDVixTQUFTO0FBRVQsbUJBQW1CO0FBQ25CLFlBQVk7QUFJWiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDLE1BQU07QUFFTixhQUFhO0FBQ2IsOEVBQThFO0FBRTlFLDJGQUEyRjtBQUMzRixnRUFBZ0U7QUFDaEUsZUFBZTtBQUVmLCtFQUErRTtBQUMvRSwwQ0FBMEM7QUFDMUMsaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQiwyR0FBMkc7QUFDM0csY0FBYztBQUNkLG1CQUFtQjtBQUNuQiw0QkFBNEI7QUFDNUIsbURBQW1EO0FBQ25ELHFEQUFxRDtBQUNyRCxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLGNBQWM7QUFDZCxlQUFlO0FBQ2YsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwsK0JBQStCOzs7QUFHb0I7QUFFbkQsTUFBTUcsZUFBZTs7SUFFbkIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFXLEVBQUU7SUFFakRELGdEQUFTQTtrQ0FBQztZQUNSLE1BQU1LO29EQUFZO29CQUNoQixJQUFJO3dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTt3QkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO3dCQUNoQyxNQUFNQyxVQUFVO3dCQUNoQixNQUFNQyxrQkFBa0JILEtBQUtBLElBQUksQ0FBQyxFQUFFLENBQUNMLE1BQU0sQ0FDeENTLEdBQUc7Z0ZBQUMsQ0FBQ0M7Z0NBQ0osSUFBSUEsTUFBTUMsT0FBTyxJQUFJRCxNQUFNQyxPQUFPLENBQUNDLFNBQVMsRUFBRTtvQ0FDNUMsT0FBTyxHQUFhRixPQUFWSCxTQUFzQyxPQUE1QkcsTUFBTUMsT0FBTyxDQUFDQyxTQUFTLENBQUNDLEdBQUc7Z0NBQ2pELE9BQU8sSUFBSUgsTUFBTUcsR0FBRyxFQUFFO29DQUNwQixPQUFPLEdBQWFILE9BQVZILFNBQW9CLE9BQVZHLE1BQU1HLEdBQUc7Z0NBQy9CO2dDQUNBLE9BQU87NEJBQ1Q7K0VBQ0NDLE1BQU07Z0ZBQUMsQ0FBQ0QsTUFBdUJBLFFBQVE7O3dCQUUxQ1osVUFBVU87b0JBQ1osRUFBRSxPQUFPTyxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtvQkFDMUM7Z0JBQ0Y7O1lBRUFiO1FBQ0Y7aUNBQUcsRUFBRTtJQUlMLElBQUlGLE9BQU9pQixNQUFNLEtBQUssR0FBRztRQUN2QixxQkFBTyw4REFBQ0M7c0JBQUU7Ozs7OztJQUNaO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUtELFdBQVU7OEJBQW9COzs7Ozs7Ozs7OzswQkFHdEMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNacEIsT0FBT1MsR0FBRyxDQUFDLENBQUNDLE9BQU9ZLHNCQUNsQiw4REFBQ0g7d0JBRUNDLFdBQVU7a0NBRVYsNEVBQUNHOzRCQUNDQyxLQUFLZDs0QkFDTGUsS0FBSyxpQkFBMkIsT0FBVkgsUUFBUTs0QkFDOUJGLFdBQVU7Ozs7Ozt1QkFOUEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhakI7R0EzRE12QjtLQUFBQTtBQTZETixpRUFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FraGlsZXNoa3VtYXIvRGVza3RvcC9uYWdhci1mci9zdHJhcGktZnIvc3JjL2NvbXBvbmVudHMvcGhvdG8tZ2FsbGVyeS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gXCJ1c2UgY2xpZW50XCJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGNvbnN0IFBob3RvR2FsbGVyeSA9ICgpID0+IHtcbi8vICAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgICB0cnkge1xuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9waG95by1nYWxsZXJpZXM/cG9wdWxhdGU9KlwiKTtcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICAgICAgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7IFxuLy8gICAgICAgICBjb25zdCBleHRyYWN0ZWRJbWFnZXMgPSBkYXRhLmRhdGFbMF0uaW1hZ2VzXG4vLyAgICAgICAgICAgLm1hcCgoaW1hZ2U6IGFueSkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKGltYWdlLmZvcm1hdHMgJiYgaW1hZ2UuZm9ybWF0cy50aHVtYm5haWwpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIGAke2Jhc2VVcmx9JHtpbWFnZS5mb3JtYXRzLnRodW1ibmFpbC51cmx9YDtcbi8vICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW1hZ2UudXJsKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiBgJHtiYXNlVXJsfSR7aW1hZ2UudXJsfWA7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICByZXR1cm4gbnVsbDsgXG4vLyAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAuZmlsdGVyKCh1cmw6IHN0cmluZyB8IG51bGwpID0+IHVybCAhPT0gbnVsbCk7IFxuICBcbi8vICAgICAgICAgc2V0SW1hZ2VzKGV4dHJhY3RlZEltYWdlcyk7XG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW1hZ2VzOlwiLCBlcnJvcik7XG4vLyAgICAgICB9XG4vLyAgICAgfTtcbiAgXG4vLyAgICAgZmV0Y2hEYXRhKCk7XG4vLyAgIH0sIFtdKTtcbiAgXG4gIFxuXG4vLyAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3ctbWQgXCI+XG4gXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMDAwMDhCXSB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLXQtbGcgZmxleCBpdGVtcy1jZW50ZXJcIj5cbi8vICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj7gpKvgpYvgpJ/gpYsg4KSX4KWI4KSy4KSw4KWAPC9zcGFuPlxuLy8gICAgICAgPC9kaXY+XG5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNCBwLTQgYmctZ3JheS01MFwiPlxuLy8gICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgPGRpdlxuLy8gICAgICAgICAgICAga2V5PXtpbmRleH1cbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwXCJcbi8vICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICA8aW1nXG4vLyAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4vLyAgICAgICAgICAgICAgIGFsdD17YEdhbGxlcnkgaW1hZ2UgJHtpbmRleCArIDF9YH1cbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDAgb2JqZWN0LWNvdmVyXCJcbi8vICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBQaG90b0dhbGxlcnk7XG5cblwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQaG90b0dhbGxlcnkgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL3Bob3lvLWdhbGxlcmllcz9wb3B1bGF0ZT0qXCIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjsgXG4gICAgICAgIGNvbnN0IGV4dHJhY3RlZEltYWdlcyA9IGRhdGEuZGF0YVswXS5pbWFnZXNcbiAgICAgICAgICAubWFwKChpbWFnZTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UuZm9ybWF0cyAmJiBpbWFnZS5mb3JtYXRzLnRodW1ibmFpbCkge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7YmFzZVVybH0ke2ltYWdlLmZvcm1hdHMudGh1bWJuYWlsLnVybH1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbWFnZS51cmwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGAke2Jhc2VVcmx9JHtpbWFnZS51cmx9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsOyBcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoKHVybDogc3RyaW5nIHwgbnVsbCkgPT4gdXJsICE9PSBudWxsKTsgXG4gIFxuICAgICAgICBzZXRJbWFnZXMoZXh0cmFjdGVkSW1hZ2VzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBpbWFnZXM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuICBcbiAgXG5cbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdy1tZCBcIj5cbiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMwMDAwOEJdIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtdC1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPuCkq+Cli+Ckn+CliyDgpJfgpYjgpLLgpLDgpYA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00IHAtNCBiZy1ncmF5LTUwXCI+XG4gICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXtgR2FsbGVyeSBpbWFnZSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00MCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGhvdG9HYWxsZXJ5IiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiYmFzZVVybCIsImV4dHJhY3RlZEltYWdlcyIsIm1hcCIsImltYWdlIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsInVybCIsImZpbHRlciIsImVycm9yIiwiY29uc29sZSIsImxlbmd0aCIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJhbHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/photo-gallery.tsx\n"));

/***/ })

});