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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./src/components/header.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/logo */ \"(app-pages-browser)/./src/components/logo.tsx\");\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/nav */ \"(app-pages-browser)/./src/components/nav.tsx\");\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/carousel */ \"(app-pages-browser)/./src/components/carousel.tsx\");\n/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/info */ \"(app-pages-browser)/./src/components/info.tsx\");\n/* harmony import */ var _components_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/address */ \"(app-pages-browser)/./src/components/address.tsx\");\n/* harmony import */ var _components_photo_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/photo-gallery */ \"(app-pages-browser)/./src/components/photo-gallery.tsx\");\n/* harmony import */ var _components_emergency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/emergency */ \"(app-pages-browser)/./src/components/emergency.tsx\");\n/* harmony import */ var _components_nagrik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/nagrik */ \"(app-pages-browser)/./src/components/nagrik.tsx\");\n/* harmony import */ var _components_parshad_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/parshad-card */ \"(app-pages-browser)/./src/components/parshad-card.tsx\");\n/* harmony import */ var _components_aapki__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/aapki */ \"(app-pages-browser)/./src/components/aapki.tsx\");\n// \"use client\"\n// import React,{useState,useEffect} from \"react\";\n// import Header from \"@/components/header\";\n// import Logo from \"@/components/logo\";\n// import Nav from \"@/components/nav\";\n// import Carousel from \"@/components/carousel\";\n// import Info from \"@/components/info\";\n// import Address from \"@/components/address\";\n// import PhotoGallery from \"@/components/photo-gallery\";\n// import EContact from \"@/components/emergency\";\n// import ServiceCards from \"@/components/nagrik\";\n// import ParshadCard from \"@/components/parshad-card\";\n// import Phone from \"@/components/aapki\";\n// const Home = () => {\n//   const [images, setImages] = useState<string[]>([]);\n//   useEffect(() => {\n//     const fetchData = async () => {\n//       try {\n//         const response = await fetch(\"http://localhost:1337/api/phoyo-galleries?populate=*\");\n//         const data = await response.json();\n//         const baseUrl = \"http://localhost:1337\"; \n//         const extractedImages = data.data[0].images\n//           .map((image: any) => {\n//             if (image.formats && image.formats.thumbnail) {\n//               return `${baseUrl}${image.formats.thumbnail.url}`;\n//             } else if (image.url) {\n//               return `${baseUrl}${image.url}`;\n//             }\n//             return null; \n//           })\n//           .filter((url: string | null) => url !== null); \n//         setImages(extractedImages);\n//       } catch (error) {\n//         console.error(\"Error fetching images:\", error);\n//       }\n//     };\n//     fetchData();\n//   }, []);\n//   return (\n//     <div className=\"font-sans  min-h-screen\">\n//       <Header/>\n//      <Logo/>\n//       <Nav/>\n//     <Carousel images={images}/>\n//     <Info/>\n//     <ServiceCards/>\n//     <Phone/>\n//     <div className=\"lg:px-36 px-0\">\n//     <ParshadCard/>\n//     <EContact/>\n//     </div>\n//     <div className=\"lg:flex flex flex-col lg:flex-row lg:space-x-12 lg:p-6 lg:px-12 space-y-6\">\n//       <Address/>\n//       <PhotoGallery/>\n//     </div>\n//     </div>\n//   );\n// };\n// export default Home;\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    const images = [\n        \"/images/4.jpeg\",\n        \"/ima\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-sans  min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                images: images\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 96,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 97,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nagrik__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 100,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_aapki__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 101,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:px-36 px-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parshad_card__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_emergency__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 102,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:flex flex flex-col lg:flex-row lg:space-x-12 lg:p-6 lg:px-12 space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_address__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_photo_gallery__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 107,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZUFBZTtBQUNmLGtEQUFrRDtBQUNsRCw0Q0FBNEM7QUFDNUMsd0NBQXdDO0FBQ3hDLHNDQUFzQztBQUN0QyxnREFBZ0Q7QUFDaEQsd0NBQXdDO0FBQ3hDLDhDQUE4QztBQUM5Qyx5REFBeUQ7QUFDekQsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUNsRCx1REFBdUQ7QUFDdkQsMENBQTBDO0FBRTFDLHVCQUF1QjtBQUN2Qix3REFBd0Q7QUFDeEQsc0JBQXNCO0FBQ3RCLHNDQUFzQztBQUN0QyxjQUFjO0FBQ2QsZ0dBQWdHO0FBQ2hHLDhDQUE4QztBQUM5QyxvREFBb0Q7QUFDcEQsc0RBQXNEO0FBQ3RELG1DQUFtQztBQUNuQyw4REFBOEQ7QUFDOUQsbUVBQW1FO0FBQ25FLHNDQUFzQztBQUN0QyxpREFBaUQ7QUFDakQsZ0JBQWdCO0FBQ2hCLDRCQUE0QjtBQUM1QixlQUFlO0FBQ2YsNERBQTREO0FBRTVELHNDQUFzQztBQUN0QywwQkFBMEI7QUFDMUIsMERBQTBEO0FBQzFELFVBQVU7QUFDVixTQUFTO0FBRVQsbUJBQW1CO0FBQ25CLFlBQVk7QUFFWixhQUFhO0FBQ2IsZ0RBQWdEO0FBQ2hELGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsZUFBZTtBQUNmLGtDQUFrQztBQUNsQyxjQUFjO0FBR2Qsc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixzQ0FBc0M7QUFDdEMscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixhQUFhO0FBRWIsa0dBQWtHO0FBQ2xHLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsYUFBYTtBQUViLGFBQWE7QUFDYixPQUFPO0FBQ1AsS0FBSztBQUVMLHVCQUF1Qjs7QUFJRztBQUNlO0FBQ0o7QUFDRjtBQUNVO0FBQ1I7QUFDTTtBQUNXO0FBQ1I7QUFDQztBQUNLO0FBQ2I7QUFFdkMsTUFBTVksT0FBTztJQUNWLE1BQU1DLFNBQVE7UUFDYjtRQUNBO0tBQ0E7SUFFRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNkLDBEQUFNQTs7Ozs7MEJBQ1IsOERBQUNDLHdEQUFJQTs7Ozs7MEJBQ0osOERBQUNDLHVEQUFHQTs7Ozs7MEJBQ04sOERBQUNDLDREQUFRQTtnQkFBQ1MsUUFBUUE7Ozs7OzswQkFDbEIsOERBQUNSLHdEQUFJQTs7Ozs7MEJBR0wsOERBQUNJLDJEQUFZQTs7Ozs7MEJBQ2IsOERBQUNFLDBEQUFLQTs7Ozs7MEJBQ04sOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0wsaUVBQVdBOzs7OztrQ0FDWiw4REFBQ0YsNkRBQVFBOzs7Ozs7Ozs7OzswQkFHVCw4REFBQ007Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVCwyREFBT0E7Ozs7O2tDQUNSLDhEQUFDQyxpRUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0tBN0JNSztBQStCTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FraGlsZXNoa3VtYXIvRGVza3RvcC9uYWdhci1mci9zdHJhcGktZnIvc3JjL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIlxuLy8gaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlclwiO1xuLy8gaW1wb3J0IExvZ28gZnJvbSBcIkAvY29tcG9uZW50cy9sb2dvXCI7XG4vLyBpbXBvcnQgTmF2IGZyb20gXCJAL2NvbXBvbmVudHMvbmF2XCI7XG4vLyBpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIkAvY29tcG9uZW50cy9jYXJvdXNlbFwiO1xuLy8gaW1wb3J0IEluZm8gZnJvbSBcIkAvY29tcG9uZW50cy9pbmZvXCI7XG4vLyBpbXBvcnQgQWRkcmVzcyBmcm9tIFwiQC9jb21wb25lbnRzL2FkZHJlc3NcIjtcbi8vIGltcG9ydCBQaG90b0dhbGxlcnkgZnJvbSBcIkAvY29tcG9uZW50cy9waG90by1nYWxsZXJ5XCI7XG4vLyBpbXBvcnQgRUNvbnRhY3QgZnJvbSBcIkAvY29tcG9uZW50cy9lbWVyZ2VuY3lcIjtcbi8vIGltcG9ydCBTZXJ2aWNlQ2FyZHMgZnJvbSBcIkAvY29tcG9uZW50cy9uYWdyaWtcIjtcbi8vIGltcG9ydCBQYXJzaGFkQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL3BhcnNoYWQtY2FyZFwiO1xuLy8gaW1wb3J0IFBob25lIGZyb20gXCJAL2NvbXBvbmVudHMvYWFwa2lcIjtcblxuLy8gY29uc3QgSG9tZSA9ICgpID0+IHtcbi8vICAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvcGhveW8tZ2FsbGVyaWVzP3BvcHVsYXRlPSpcIik7XG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiOyBcbi8vICAgICAgICAgY29uc3QgZXh0cmFjdGVkSW1hZ2VzID0gZGF0YS5kYXRhWzBdLmltYWdlc1xuLy8gICAgICAgICAgIC5tYXAoKGltYWdlOiBhbnkpID0+IHtcbi8vICAgICAgICAgICAgIGlmIChpbWFnZS5mb3JtYXRzICYmIGltYWdlLmZvcm1hdHMudGh1bWJuYWlsKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiBgJHtiYXNlVXJsfSR7aW1hZ2UuZm9ybWF0cy50aHVtYm5haWwudXJsfWA7XG4vLyAgICAgICAgICAgICB9IGVsc2UgaWYgKGltYWdlLnVybCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gYCR7YmFzZVVybH0ke2ltYWdlLnVybH1gO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIG51bGw7IFxuLy8gICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgLmZpbHRlcigodXJsOiBzdHJpbmcgfCBudWxsKSA9PiB1cmwgIT09IG51bGwpOyBcbiAgXG4vLyAgICAgICAgIHNldEltYWdlcyhleHRyYWN0ZWRJbWFnZXMpO1xuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGltYWdlczpcIiwgZXJyb3IpO1xuLy8gICAgICAgfVxuLy8gICAgIH07XG4gIFxuLy8gICAgIGZldGNoRGF0YSgpO1xuLy8gICB9LCBbXSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyAgbWluLWgtc2NyZWVuXCI+XG4vLyAgICAgICA8SGVhZGVyLz5cbi8vICAgICAgPExvZ28vPlxuLy8gICAgICAgPE5hdi8+XG4vLyAgICAgPENhcm91c2VsIGltYWdlcz17aW1hZ2VzfS8+XG4vLyAgICAgPEluZm8vPlxuXG4gIFxuLy8gICAgIDxTZXJ2aWNlQ2FyZHMvPlxuLy8gICAgIDxQaG9uZS8+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpweC0zNiBweC0wXCI+XG4vLyAgICAgPFBhcnNoYWRDYXJkLz5cbi8vICAgICA8RUNvbnRhY3QvPlxuLy8gICAgIDwvZGl2PlxuXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGc6c3BhY2UteC0xMiBsZzpwLTYgbGc6cHgtMTIgc3BhY2UteS02XCI+XG4vLyAgICAgICA8QWRkcmVzcy8+XG4vLyAgICAgICA8UGhvdG9HYWxsZXJ5Lz5cbi8vICAgICA8L2Rpdj5cbiAgIFxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIkAvY29tcG9uZW50cy9sb2dvXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJAL2NvbXBvbmVudHMvbmF2XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIkAvY29tcG9uZW50cy9jYXJvdXNlbFwiO1xuaW1wb3J0IEluZm8gZnJvbSBcIkAvY29tcG9uZW50cy9pbmZvXCI7XG5pbXBvcnQgQWRkcmVzcyBmcm9tIFwiQC9jb21wb25lbnRzL2FkZHJlc3NcIjtcbmltcG9ydCBQaG90b0dhbGxlcnkgZnJvbSBcIkAvY29tcG9uZW50cy9waG90by1nYWxsZXJ5XCI7XG5pbXBvcnQgRUNvbnRhY3QgZnJvbSBcIkAvY29tcG9uZW50cy9lbWVyZ2VuY3lcIjtcbmltcG9ydCBTZXJ2aWNlQ2FyZHMgZnJvbSBcIkAvY29tcG9uZW50cy9uYWdyaWtcIjtcbmltcG9ydCBQYXJzaGFkQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL3BhcnNoYWQtY2FyZFwiO1xuaW1wb3J0IFBob25lIGZyb20gXCJAL2NvbXBvbmVudHMvYWFwa2lcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgIGNvbnN0IGltYWdlcyA9W1xuICAgIFwiL2ltYWdlcy80LmpwZWdcIixcbiAgICBcIi9pbWFcIlxuICAgXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNhbnMgIG1pbi1oLXNjcmVlblwiPlxuICAgICAgPEhlYWRlci8+XG4gICAgIDxMb2dvLz5cbiAgICAgIDxOYXYvPlxuICAgIDxDYXJvdXNlbCBpbWFnZXM9e2ltYWdlc30vPlxuICAgIDxJbmZvLz5cblxuICBcbiAgICA8U2VydmljZUNhcmRzLz5cbiAgICA8UGhvbmUvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6cHgtMzYgcHgtMFwiPlxuICAgIDxQYXJzaGFkQ2FyZC8+XG4gICAgPEVDb250YWN0Lz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleCBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOnNwYWNlLXgtMTIgbGc6cC02IGxnOnB4LTEyIHNwYWNlLXktNlwiPlxuICAgICAgPEFkZHJlc3MvPlxuICAgICAgPFBob3RvR2FsbGVyeS8+XG4gICAgPC9kaXY+XG4gICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJMb2dvIiwiTmF2IiwiQ2Fyb3VzZWwiLCJJbmZvIiwiQWRkcmVzcyIsIlBob3RvR2FsbGVyeSIsIkVDb250YWN0IiwiU2VydmljZUNhcmRzIiwiUGFyc2hhZENhcmQiLCJQaG9uZSIsIkhvbWUiLCJpbWFnZXMiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});