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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./src/components/header.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/logo */ \"(app-pages-browser)/./src/components/logo.tsx\");\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/nav */ \"(app-pages-browser)/./src/components/nav.tsx\");\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/carousel */ \"(app-pages-browser)/./src/components/carousel.tsx\");\n/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/info */ \"(app-pages-browser)/./src/components/info.tsx\");\n/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_info__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/address */ \"(app-pages-browser)/./src/components/address.tsx\");\n/* harmony import */ var _components_photo_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/photo-gallery */ \"(app-pages-browser)/./src/components/photo-gallery.tsx\");\n/* harmony import */ var _components_emergency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/emergency */ \"(app-pages-browser)/./src/components/emergency.tsx\");\n/* harmony import */ var _components_nagrik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/nagrik */ \"(app-pages-browser)/./src/components/nagrik.tsx\");\n/* harmony import */ var _components_parshad_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/parshad-card */ \"(app-pages-browser)/./src/components/parshad-card.tsx\");\n/* harmony import */ var _components_aapki__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/aapki */ \"(app-pages-browser)/./src/components/aapki.tsx\");\n// \"use client\"\n// import React,{useState,useEffect} from \"react\";\n// import Header from \"@/components/header\";\n// import Logo from \"@/components/logo\";\n// import Nav from \"@/components/nav\";\n// import Carousel from \"@/components/carousel\";\n// import Info from \"@/components/info\";\n// import Address from \"@/components/address\";\n// import PhotoGallery from \"@/components/photo-gallery\";\n// import EContact from \"@/components/emergency\";\n// import ServiceCards from \"@/components/nagrik\";\n// import ParshadCard from \"@/components/parshad-card\";\n// import Phone from \"@/components/aapki\";\n// const Home = () => {\n//   const [images, setImages] = useState<string[]>([]);\n//   useEffect(() => {\n//     const fetchData = async () => {\n//       try {\n//         const response = await fetch(\"http://localhost:1337/api/phoyo-galleries?populate=*\");\n//         const data = await response.json();\n//         const baseUrl = \"http://localhost:1337\"; \n//         const extractedImages = data.data[0].images\n//           .map((image: any) => {\n//             if (image.formats && image.formats.thumbnail) {\n//               return `${baseUrl}${image.formats.thumbnail.url}`;\n//             } else if (image.url) {\n//               return `${baseUrl}${image.url}`;\n//             }\n//             return null; \n//           })\n//           .filter((url: string | null) => url !== null); \n//         setImages(extractedImages);\n//       } catch (error) {\n//         console.error(\"Error fetching images:\", error);\n//       }\n//     };\n//     fetchData();\n//   }, []);\n//   return (\n//     <div className=\"font-sans  min-h-screen\">\n//       <Header/>\n//      <Logo/>\n//       <Nav/>\n//     <Carousel images={images}/>\n//     <Info/>\n//     <ServiceCards/>\n//     <Phone/>\n//     <div className=\"lg:px-36 px-0\">\n//     <ParshadCard/>\n//     <EContact/>\n//     </div>\n//     <div className=\"lg:flex flex flex-col lg:flex-row lg:space-x-12 lg:p-6 lg:px-12 space-y-6\">\n//       <Address/>\n//       <PhotoGallery/>\n//     </div>\n//     </div>\n//   );\n// };\n// export default Home;\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    const images = [\n        \"/images/4.jpeg\",\n        \"/images/5.jpeg\",\n        \"/images/6.jpeg\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-sans  min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                images: images\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 97,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_info__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 98,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nagrik__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 101,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_aapki__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 102,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:px-36 px-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parshad_card__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_emergency__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:flex flex flex-col lg:flex-row lg:space-x-12 lg:p-6 lg:px-12 space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_address__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_photo_gallery__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n                lineNumber: 108,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/app/page.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7QUFDZixrREFBa0Q7QUFDbEQsNENBQTRDO0FBQzVDLHdDQUF3QztBQUN4QyxzQ0FBc0M7QUFDdEMsZ0RBQWdEO0FBQ2hELHdDQUF3QztBQUN4Qyw4Q0FBOEM7QUFDOUMseURBQXlEO0FBQ3pELGlEQUFpRDtBQUNqRCxrREFBa0Q7QUFDbEQsdURBQXVEO0FBQ3ZELDBDQUEwQztBQUUxQyx1QkFBdUI7QUFDdkIsd0RBQXdEO0FBQ3hELHNCQUFzQjtBQUN0QixzQ0FBc0M7QUFDdEMsY0FBYztBQUNkLGdHQUFnRztBQUNoRyw4Q0FBOEM7QUFDOUMsb0RBQW9EO0FBQ3BELHNEQUFzRDtBQUN0RCxtQ0FBbUM7QUFDbkMsOERBQThEO0FBQzlELG1FQUFtRTtBQUNuRSxzQ0FBc0M7QUFDdEMsaURBQWlEO0FBQ2pELGdCQUFnQjtBQUNoQiw0QkFBNEI7QUFDNUIsZUFBZTtBQUNmLDREQUE0RDtBQUU1RCxzQ0FBc0M7QUFDdEMsMEJBQTBCO0FBQzFCLDBEQUEwRDtBQUMxRCxVQUFVO0FBQ1YsU0FBUztBQUVULG1CQUFtQjtBQUNuQixZQUFZO0FBRVosYUFBYTtBQUNiLGdEQUFnRDtBQUNoRCxrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLGVBQWU7QUFDZixrQ0FBa0M7QUFDbEMsY0FBYztBQUdkLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Ysc0NBQXNDO0FBQ3RDLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsYUFBYTtBQUViLGtHQUFrRztBQUNsRyxtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLGFBQWE7QUFFYixhQUFhO0FBQ2IsT0FBTztBQUNQLEtBQUs7QUFFTCx1QkFBdUI7O0FBSUc7QUFDZTtBQUNKO0FBQ0Y7QUFDVTtBQUNSO0FBQ007QUFDVztBQUNSO0FBQ0M7QUFDSztBQUNiO0FBRXZDLE1BQU1ZLE9BQU87SUFDVixNQUFNQyxTQUFRO1FBQ2I7UUFDQTtRQUNBO0tBQ0E7SUFFRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNkLDBEQUFNQTs7Ozs7MEJBQ1IsOERBQUNDLHdEQUFJQTs7Ozs7MEJBQ0osOERBQUNDLHVEQUFHQTs7Ozs7MEJBQ04sOERBQUNDLDREQUFRQTtnQkFBQ1MsUUFBUUE7Ozs7OzswQkFDbEIsOERBQUNSLHlEQUFJQTs7Ozs7MEJBR0wsOERBQUNJLDJEQUFZQTs7Ozs7MEJBQ2IsOERBQUNFLDBEQUFLQTs7Ozs7MEJBQ04sOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0wsaUVBQVdBOzs7OztrQ0FDWiw4REFBQ0YsNkRBQVFBOzs7Ozs7Ozs7OzswQkFHVCw4REFBQ007Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVCwyREFBT0E7Ozs7O2tDQUNSLDhEQUFDQyxpRUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0tBOUJNSztBQWdDTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FraGlsZXNoa3VtYXIvRGVza3RvcC9uYWdhci1mci9zdHJhcGktZnIvc3JjL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIlxuLy8gaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlclwiO1xuLy8gaW1wb3J0IExvZ28gZnJvbSBcIkAvY29tcG9uZW50cy9sb2dvXCI7XG4vLyBpbXBvcnQgTmF2IGZyb20gXCJAL2NvbXBvbmVudHMvbmF2XCI7XG4vLyBpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIkAvY29tcG9uZW50cy9jYXJvdXNlbFwiO1xuLy8gaW1wb3J0IEluZm8gZnJvbSBcIkAvY29tcG9uZW50cy9pbmZvXCI7XG4vLyBpbXBvcnQgQWRkcmVzcyBmcm9tIFwiQC9jb21wb25lbnRzL2FkZHJlc3NcIjtcbi8vIGltcG9ydCBQaG90b0dhbGxlcnkgZnJvbSBcIkAvY29tcG9uZW50cy9waG90by1nYWxsZXJ5XCI7XG4vLyBpbXBvcnQgRUNvbnRhY3QgZnJvbSBcIkAvY29tcG9uZW50cy9lbWVyZ2VuY3lcIjtcbi8vIGltcG9ydCBTZXJ2aWNlQ2FyZHMgZnJvbSBcIkAvY29tcG9uZW50cy9uYWdyaWtcIjtcbi8vIGltcG9ydCBQYXJzaGFkQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL3BhcnNoYWQtY2FyZFwiO1xuLy8gaW1wb3J0IFBob25lIGZyb20gXCJAL2NvbXBvbmVudHMvYWFwa2lcIjtcblxuLy8gY29uc3QgSG9tZSA9ICgpID0+IHtcbi8vICAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvcGhveW8tZ2FsbGVyaWVzP3BvcHVsYXRlPSpcIik7XG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiOyBcbi8vICAgICAgICAgY29uc3QgZXh0cmFjdGVkSW1hZ2VzID0gZGF0YS5kYXRhWzBdLmltYWdlc1xuLy8gICAgICAgICAgIC5tYXAoKGltYWdlOiBhbnkpID0+IHtcbi8vICAgICAgICAgICAgIGlmIChpbWFnZS5mb3JtYXRzICYmIGltYWdlLmZvcm1hdHMudGh1bWJuYWlsKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiBgJHtiYXNlVXJsfSR7aW1hZ2UuZm9ybWF0cy50aHVtYm5haWwudXJsfWA7XG4vLyAgICAgICAgICAgICB9IGVsc2UgaWYgKGltYWdlLnVybCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gYCR7YmFzZVVybH0ke2ltYWdlLnVybH1gO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIG51bGw7IFxuLy8gICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgLmZpbHRlcigodXJsOiBzdHJpbmcgfCBudWxsKSA9PiB1cmwgIT09IG51bGwpOyBcbiAgXG4vLyAgICAgICAgIHNldEltYWdlcyhleHRyYWN0ZWRJbWFnZXMpO1xuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGltYWdlczpcIiwgZXJyb3IpO1xuLy8gICAgICAgfVxuLy8gICAgIH07XG4gIFxuLy8gICAgIGZldGNoRGF0YSgpO1xuLy8gICB9LCBbXSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyAgbWluLWgtc2NyZWVuXCI+XG4vLyAgICAgICA8SGVhZGVyLz5cbi8vICAgICAgPExvZ28vPlxuLy8gICAgICAgPE5hdi8+XG4vLyAgICAgPENhcm91c2VsIGltYWdlcz17aW1hZ2VzfS8+XG4vLyAgICAgPEluZm8vPlxuXG4gIFxuLy8gICAgIDxTZXJ2aWNlQ2FyZHMvPlxuLy8gICAgIDxQaG9uZS8+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpweC0zNiBweC0wXCI+XG4vLyAgICAgPFBhcnNoYWRDYXJkLz5cbi8vICAgICA8RUNvbnRhY3QvPlxuLy8gICAgIDwvZGl2PlxuXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGc6c3BhY2UteC0xMiBsZzpwLTYgbGc6cHgtMTIgc3BhY2UteS02XCI+XG4vLyAgICAgICA8QWRkcmVzcy8+XG4vLyAgICAgICA8UGhvdG9HYWxsZXJ5Lz5cbi8vICAgICA8L2Rpdj5cbiAgIFxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIkAvY29tcG9uZW50cy9sb2dvXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJAL2NvbXBvbmVudHMvbmF2XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIkAvY29tcG9uZW50cy9jYXJvdXNlbFwiO1xuaW1wb3J0IEluZm8gZnJvbSBcIkAvY29tcG9uZW50cy9pbmZvXCI7XG5pbXBvcnQgQWRkcmVzcyBmcm9tIFwiQC9jb21wb25lbnRzL2FkZHJlc3NcIjtcbmltcG9ydCBQaG90b0dhbGxlcnkgZnJvbSBcIkAvY29tcG9uZW50cy9waG90by1nYWxsZXJ5XCI7XG5pbXBvcnQgRUNvbnRhY3QgZnJvbSBcIkAvY29tcG9uZW50cy9lbWVyZ2VuY3lcIjtcbmltcG9ydCBTZXJ2aWNlQ2FyZHMgZnJvbSBcIkAvY29tcG9uZW50cy9uYWdyaWtcIjtcbmltcG9ydCBQYXJzaGFkQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL3BhcnNoYWQtY2FyZFwiO1xuaW1wb3J0IFBob25lIGZyb20gXCJAL2NvbXBvbmVudHMvYWFwa2lcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgIGNvbnN0IGltYWdlcyA9W1xuICAgIFwiL2ltYWdlcy80LmpwZWdcIixcbiAgICBcIi9pbWFnZXMvNS5qcGVnXCIsXG4gICAgXCIvaW1hZ2VzLzYuanBlZ1wiXG4gICBdXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyAgbWluLWgtc2NyZWVuXCI+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgPExvZ28vPlxuICAgICAgPE5hdi8+XG4gICAgPENhcm91c2VsIGltYWdlcz17aW1hZ2VzfS8+XG4gICAgPEluZm8vPlxuXG4gIFxuICAgIDxTZXJ2aWNlQ2FyZHMvPlxuICAgIDxQaG9uZS8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZzpweC0zNiBweC0wXCI+XG4gICAgPFBhcnNoYWRDYXJkLz5cbiAgICA8RUNvbnRhY3QvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGc6c3BhY2UteC0xMiBsZzpwLTYgbGc6cHgtMTIgc3BhY2UteS02XCI+XG4gICAgICA8QWRkcmVzcy8+XG4gICAgICA8UGhvdG9HYWxsZXJ5Lz5cbiAgICA8L2Rpdj5cbiAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkxvZ28iLCJOYXYiLCJDYXJvdXNlbCIsIkluZm8iLCJBZGRyZXNzIiwiUGhvdG9HYWxsZXJ5IiwiRUNvbnRhY3QiLCJTZXJ2aWNlQ2FyZHMiLCJQYXJzaGFkQ2FyZCIsIlBob25lIiwiSG9tZSIsImltYWdlcyIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/info.tsx":
/*!*********************************!*\
  !*** ./src/components/info.tsx ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("// import React, { useEffect, useState } from \"react\";\n// type Section = {\n//   type: string;\n//   children: { type: string; text: string }[];\n// };\n// type SironjData = {\n//   id: number;\n//   documentId: string;\n//   sironj: Section[];\n// };\n// const Info = () => {\n//   const info=[\n//     {\n//       \"head\":\"सिरोंज के बारे में\",\n//       \"info\":\"सिरोंज मध्य प्रदेश राज्य के विदिशा जिले में स्थित एक नगर और नगर पालिका है। यह तहसील मुख्यालय और विधानसभा क्षेत्र के रूप में कार्य करता है। सिरोंज शहर को कई वार्डों में विभाजित किया गया है, जिनके लिए हर पाँच साल में चुनाव होते हैं। सिरोंज नगर पालिका के पास बड़ी संख्या में घरों का प्रशासनिक नियंत्रण है और यह पानी की आपूर्ति और सीवरेज जैसी बुनियादी सुविधाएं प्रदान करती है। इसके अलावा, यह अपने अधिकार क्षेत्र में सड़कों के निर्माण और रखरखाव की जिम्मेदारी निभाती है और संपत्तियों पर कर लगाने का भी अधिकार रखती है।\"\n//     },\n//     {\n//       \"head\":\"इतिहास\",\n//       \"info\":\"1947 में भारत की स्वतंत्रता के बाद, सिरोंज मध्य भारत (मध्य भारत राज्य) का हिस्सा बना और बाद में 1 नवंबर 1956 को मध्य प्रदेश में शामिल कर दिया गया। आज सिरोंज विदिशा जिले का एक हिस्सा है और इसका सांस्कृतिक और ऐतिहासिक महत्व बना हुआ है।\"\n//     },\n//     {\n//       \"head\":\"भूगोल\",\n//       \"info\":\"सिरोंज, जो मध्य प्रदेश का एक जिला है, 24.10°N 77.69°E पर स्थित है। इसकी औसत ऊंचाई 464 मीटर (1522 फीट) है। सिरोंज मध्य प्रदेश की राजधानी भोपाल से लगभग 120 किलोमीटर दूर स्थित है और यह पार्वती नदी के किनारे बसा हुआ है।\"\n//     }\n//   ]\n//   const [data, setData] = useState<SironjData[]>([]);\n//   const [loading, setLoading] = useState(true);\n//   const fetchData = async () => {\n//     try {\n//       const response = await fetch(\"http://localhost:1337/api/sironj-ke-bares?populate=*\"); \n//       const result = await response.json();\n//       setData(result.data);\n//     } catch (error) {\n//       console.error(\"Error fetching data:\", error);\n//     } finally {\n//       setLoading(false);\n//     }\n//   };\n//   useEffect(() => {\n//     fetchData();\n//   }, []);\n//   if (loading) {\n//     return <div>Loading...</div>;\n//   }\n//   return (\n//     <div className=\"text-black font-sans py-10 px-4\">\n//       <div className=\"max-w-5xl mx-auto space-y-12\">\n//         {data.map((section) => (\n//           <section key={section.id}>\n//             <h2 className=\"text-3xl font-bold mb-4 flex items-center\">\n//               <span className=\"mr-2\">{section.sironj[0]?.children[0]?.text}</span>\n//               <span className=\"w-full h-px bg-yellow-400\"></span>\n//             </h2>\n//             <p className=\"text-base leading-relaxed\">\n//               {section.sironj[1]?.children[0]?.text}\n//             </p>\n//           </section>\n//         ))}\n//       </div>\n//     </div>\n//   );\n// };\n// export default Info;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luZm8udHN4IiwibWFwcGluZ3MiOiJBQUFBLHNEQUFzRDtBQUV0RCxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLGdEQUFnRDtBQUNoRCxLQUFLO0FBRUwsc0JBQXNCO0FBQ3RCLGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLEtBQUs7QUFFTCx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUixxQ0FBcUM7QUFDckMsaWhCQUFpaEI7QUFDamhCLFNBQVM7QUFDVCxRQUFRO0FBQ1IseUJBQXlCO0FBQ3pCLDJQQUEyUDtBQUMzUCxTQUFTO0FBQ1QsUUFBUTtBQUNSLHdCQUF3QjtBQUN4Qix5T0FBeU87QUFDek8sUUFBUTtBQUNSLE1BQU07QUFDTix3REFBd0Q7QUFDeEQsa0RBQWtEO0FBR2xELG9DQUFvQztBQUNwQyxZQUFZO0FBQ1osK0ZBQStGO0FBQy9GLDhDQUE4QztBQUM5Qyw4QkFBOEI7QUFDOUIsd0JBQXdCO0FBQ3hCLHNEQUFzRDtBQUN0RCxrQkFBa0I7QUFDbEIsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUixPQUFPO0FBRVAsc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQixZQUFZO0FBRVosbUJBQW1CO0FBQ25CLG9DQUFvQztBQUNwQyxNQUFNO0FBRU4sYUFBYTtBQUNiLHdEQUF3RDtBQUN4RCx1REFBdUQ7QUFDdkQsbUNBQW1DO0FBQ25DLHVDQUF1QztBQUN2Qyx5RUFBeUU7QUFDekUscUZBQXFGO0FBQ3JGLG9FQUFvRTtBQUNwRSxvQkFBb0I7QUFDcEIsd0RBQXdEO0FBQ3hELHVEQUF1RDtBQUN2RCxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLGNBQWM7QUFDZCxlQUFlO0FBQ2YsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwsdUJBQXVCIiwic291cmNlcyI6WyIvVXNlcnMvYWtoaWxlc2hrdW1hci9EZXNrdG9wL25hZ2FyLWZyL3N0cmFwaS1mci9zcmMvY29tcG9uZW50cy9pbmZvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyB0eXBlIFNlY3Rpb24gPSB7XG4vLyAgIHR5cGU6IHN0cmluZztcbi8vICAgY2hpbGRyZW46IHsgdHlwZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfVtdO1xuLy8gfTtcblxuLy8gdHlwZSBTaXJvbmpEYXRhID0ge1xuLy8gICBpZDogbnVtYmVyO1xuLy8gICBkb2N1bWVudElkOiBzdHJpbmc7XG4vLyAgIHNpcm9uajogU2VjdGlvbltdO1xuLy8gfTtcblxuLy8gY29uc3QgSW5mbyA9ICgpID0+IHtcbi8vICAgY29uc3QgaW5mbz1bXG4vLyAgICAge1xuLy8gICAgICAgXCJoZWFkXCI6XCLgpLjgpL/gpLDgpYvgpILgpJwg4KSV4KWHIOCkrOCkvuCksOClhyDgpK7gpYfgpIJcIixcbi8vICAgICAgIFwiaW5mb1wiOlwi4KS44KS/4KSw4KWL4KSC4KScIOCkruCkp+CljeCkryDgpKrgpY3gpLDgpKbgpYfgpLYg4KSw4KS+4KSc4KWN4KSvIOCkleClhyDgpLXgpL/gpKbgpL/gpLbgpL4g4KSc4KS/4KSy4KWHIOCkruClh+CkgiDgpLjgpY3gpKXgpL/gpKQg4KSP4KSVIOCkqOCkl+CksCDgpJTgpLAg4KSo4KSX4KSwIOCkquCkvuCksuCkv+CkleCkviDgpLngpYjgpaQg4KSv4KS5IOCkpOCkueCkuOClgOCksiDgpK7gpYHgpJbgpY3gpK/gpL7gpLLgpK8g4KSU4KSwIOCkteCkv+Ckp+CkvuCkqOCkuOCkreCkviDgpJXgpY3gpLfgpYfgpKTgpY3gpLAg4KSV4KWHIOCksOClguCkqiDgpK7gpYfgpIIg4KSV4KS+4KSw4KWN4KSvIOCkleCksOCkpOCkviDgpLngpYjgpaQg4KS44KS/4KSw4KWL4KSC4KScIOCktuCkueCksCDgpJXgpYsg4KSV4KSIIOCkteCkvuCksOCljeCkoeCli+CkgiDgpK7gpYfgpIIg4KS14KS/4KSt4KS+4KSc4KS/4KSkIOCkleCkv+Ckr+CkviDgpJfgpK/gpL4g4KS54KWILCDgpJzgpL/gpKjgpJXgpYcg4KSy4KS/4KSPIOCkueCksCDgpKrgpL7gpIHgpJog4KS44KS+4KSyIOCkruClh+CkgiDgpJrgpYHgpKjgpL7gpLUg4KS54KWL4KSk4KWHIOCkueCliOCkguClpCDgpLjgpL/gpLDgpYvgpILgpJwg4KSo4KSX4KSwIOCkquCkvuCksuCkv+CkleCkviDgpJXgpYcg4KSq4KS+4KS4IOCkrOCkoeCkvOClgCDgpLjgpILgpJbgpY3gpK/gpL4g4KSu4KWH4KSCIOCkmOCksOCli+CkgiDgpJXgpL4g4KSq4KWN4KSw4KS24KS+4KS44KSo4KS/4KSVIOCkqOCkv+Ckr+CkguCkpOCljeCksOCkoyDgpLngpYgg4KSU4KSwIOCkr+CkuSDgpKrgpL7gpKjgpYAg4KSV4KWAIOCkhuCkquClguCksOCljeCkpOCkvyDgpJTgpLAg4KS44KWA4KS14KSw4KWH4KScIOCknOCliOCkuOClgCDgpKzgpYHgpKjgpL/gpK/gpL7gpKbgpYAg4KS44KWB4KS14KS/4KSn4KS+4KSP4KSCIOCkquCljeCksOCkpuCkvuCkqCDgpJXgpLDgpKTgpYAg4KS54KWI4KWkIOCkh+CkuOCkleClhyDgpIXgpLLgpL7gpLXgpL4sIOCkr+CkuSDgpIXgpKrgpKjgpYcg4KSF4KSn4KS/4KSV4KS+4KSwIOCkleCljeCkt+Clh+CkpOCljeCksCDgpK7gpYfgpIIg4KS44KSh4KS84KSV4KWL4KSCIOCkleClhyDgpKjgpL/gpLDgpY3gpK7gpL7gpKMg4KSU4KSwIOCksOCkluCksOCkluCkvuCktSDgpJXgpYAg4KSc4KS/4KSu4KWN4KSu4KWH4KSm4KS+4KSw4KWAIOCkqOCkv+CkreCkvuCkpOClgCDgpLngpYgg4KSU4KSwIOCkuOCkguCkquCkpOCljeCkpOCkv+Ckr+Cli+CkgiDgpKrgpLAg4KSV4KSwIOCksuCkl+CkvuCkqOClhyDgpJXgpL4g4KSt4KWAIOCkheCkp+Ckv+CkleCkvuCksCDgpLDgpJbgpKTgpYAg4KS54KWI4KWkXCJcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIFwiaGVhZFwiOlwi4KSH4KSk4KS/4KS54KS+4KS4XCIsXG4vLyAgICAgICBcImluZm9cIjpcIjE5NDcg4KSu4KWH4KSCIOCkreCkvuCksOCkpCDgpJXgpYAg4KS44KWN4KS14KSk4KSC4KSk4KWN4KSw4KSk4KS+IOCkleClhyDgpKzgpL7gpKYsIOCkuOCkv+CksOCli+CkguCknCDgpK7gpKfgpY3gpK8g4KSt4KS+4KSw4KSkICjgpK7gpKfgpY3gpK8g4KSt4KS+4KSw4KSkIOCksOCkvuCknOCljeCkrykg4KSV4KS+IOCkueCkv+CkuOCljeCkuOCkviDgpKzgpKjgpL4g4KSU4KSwIOCkrOCkvuCkpiDgpK7gpYfgpIIgMSDgpKjgpLXgpILgpKzgpLAgMTk1NiDgpJXgpYsg4KSu4KSn4KWN4KSvIOCkquCljeCksOCkpuClh+CktiDgpK7gpYfgpIIg4KS24KS+4KSu4KS/4KSyIOCkleCksCDgpKbgpL/gpK/gpL4g4KSX4KSv4KS+4KWkIOCkhuCknCDgpLjgpL/gpLDgpYvgpILgpJwg4KS14KS/4KSm4KS/4KS24KS+IOCknOCkv+CksuClhyDgpJXgpL4g4KSP4KSVIOCkueCkv+CkuOCljeCkuOCkviDgpLngpYgg4KSU4KSwIOCkh+CkuOCkleCkviDgpLjgpL7gpILgpLjgpY3gpJXgpYPgpKTgpL/gpJUg4KSU4KSwIOCkkOCkpOCkv+CkueCkvuCkuOCkv+CklSDgpK7gpLngpKTgpY3gpLUg4KSs4KSo4KS+IOCkueClgeCkhiDgpLngpYjgpaRcIlxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgXCJoZWFkXCI6XCLgpK3gpYLgpJfgpYvgpLJcIixcbi8vICAgICAgIFwiaW5mb1wiOlwi4KS44KS/4KSw4KWL4KSC4KScLCDgpJzgpYsg4KSu4KSn4KWN4KSvIOCkquCljeCksOCkpuClh+CktiDgpJXgpL4g4KSP4KSVIOCknOCkv+CksuCkviDgpLngpYgsIDI0LjEwwrBOIDc3LjY5wrBFIOCkquCksCDgpLjgpY3gpKXgpL/gpKQg4KS54KWI4KWkIOCkh+CkuOCkleClgCDgpJTgpLjgpKQg4KSK4KSC4KSa4KS+4KSIIDQ2NCDgpK7gpYDgpJ/gpLAgKDE1MjIg4KSr4KWA4KSfKSDgpLngpYjgpaQg4KS44KS/4KSw4KWL4KSC4KScIOCkruCkp+CljeCkryDgpKrgpY3gpLDgpKbgpYfgpLYg4KSV4KWAIOCksOCkvuCknOCkp+CkvuCkqOClgCDgpK3gpYvgpKrgpL7gpLIg4KS44KWHIOCksuCkl+CkreCklyAxMjAg4KSV4KS/4KSy4KWL4KSu4KWA4KSf4KSwIOCkpuClguCksCDgpLjgpY3gpKXgpL/gpKQg4KS54KWIIOCklOCksCDgpK/gpLkg4KSq4KS+4KSw4KWN4KS14KSk4KWAIOCkqOCkpuClgCDgpJXgpYcg4KSV4KS/4KSo4KS+4KSw4KWHIOCkrOCkuOCkviDgpLngpYHgpIYg4KS54KWI4KWkXCJcbi8vICAgICB9XG4vLyAgIF1cbi8vICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8U2lyb25qRGF0YVtdPihbXSk7XG4vLyAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG5cbi8vICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9zaXJvbmota2UtYmFyZXM/cG9wdWxhdGU9KlwiKTsgXG4vLyAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgICBzZXREYXRhKHJlc3VsdC5kYXRhKTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbi8vICAgICB9IGZpbmFsbHkge1xuLy8gICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4vLyAgICAgfVxuLy8gICB9O1xuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgZmV0Y2hEYXRhKCk7XG4vLyAgIH0sIFtdKTtcblxuLy8gICBpZiAobG9hZGluZykge1xuLy8gICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4vLyAgIH1cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmb250LXNhbnMgcHktMTAgcHgtNFwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0byBzcGFjZS15LTEyXCI+XG4vLyAgICAgICAgIHtkYXRhLm1hcCgoc2VjdGlvbikgPT4gKFxuLy8gICAgICAgICAgIDxzZWN0aW9uIGtleT17c2VjdGlvbi5pZH0+XG4vLyAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbi8vICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPntzZWN0aW9uLnNpcm9ualswXT8uY2hpbGRyZW5bMF0/LnRleHR9PC9zcGFuPlxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1weCBiZy15ZWxsb3ctNDAwXCI+PC9zcGFuPlxuLy8gICAgICAgICAgICAgPC9oMj5cbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWRcIj5cbi8vICAgICAgICAgICAgICAge3NlY3Rpb24uc2lyb25qWzFdPy5jaGlsZHJlblswXT8udGV4dH1cbi8vICAgICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgICA8L3NlY3Rpb24+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmZvO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/info.tsx\n"));

/***/ })

});