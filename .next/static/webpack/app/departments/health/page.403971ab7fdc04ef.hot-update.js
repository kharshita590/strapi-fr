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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Health = ()=>{\n    var _Health__children_, _Health_;\n    _s();\n    const data = [];\n    const [healthData, setHealthData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Health.useEffect\": ()=>{\n            const fetchData = {\n                \"Health.useEffect.fetchData\": async ()=>{\n                    try {\n                        const response = await fetch(\"http://localhost:1337/api/healthss?populate=*\");\n                        const result = await response.json();\n                        if (result.data && result.data.length > 0) {\n                            setHealthData(result.data[0]);\n                        }\n                    } catch (error) {\n                        console.error(\"Error fetching health data:\", error);\n                    }\n                }\n            }[\"Health.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"Health.useEffect\"], []);\n    if (!healthData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/health.tsx\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, undefined);\n    }\n    const { Health, vidhishaContent, scheme, infra } = healthData;\n    const renderParagraphs = (content)=>content.map((item, index)=>{\n            var _item_children;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-black text-[16px]\",\n                children: ((_item_children = item.children) === null || _item_children === void 0 ? void 0 : _item_children.map((child)=>child.text).join(\"\")) || \"\"\n            }, index, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/health.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined);\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-24 space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-black font-bold text-3xl\",\n                children: ((_Health_ = Health[0]) === null || _Health_ === void 0 ? void 0 : (_Health__children_ = _Health_.children[0]) === null || _Health__children_ === void 0 ? void 0 : _Health__children_.text) || \"Health\"\n            }, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/health.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            renderParagraphs(Health.slice(1))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/health.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Health, \"TNIGpgRKfFZamovTVCXGXNXdQ20=\");\n_c = Health;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Health);\nvar _c;\n$RefreshReg$(_c, \"Health\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWx0aC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBRW5ELE1BQU1HLFNBQW1CO1FBd0NoQkEsb0JBQUFBOztJQXZDUCxNQUFNQyxPQUFNLEVBRVg7SUFDRCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQWE7SUFFekRELGdEQUFTQTs0QkFBQztZQUNSLE1BQU1NOzhDQUFZO29CQUNoQixJQUFJO3dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTt3QkFDN0IsTUFBTUMsU0FBUyxNQUFNRixTQUFTRyxJQUFJO3dCQUVsQyxJQUFJRCxPQUFPTixJQUFJLElBQUlNLE9BQU9OLElBQUksQ0FBQ1EsTUFBTSxHQUFHLEdBQUc7NEJBQ3pDTixjQUFjSSxPQUFPTixJQUFJLENBQUMsRUFBRTt3QkFDOUI7b0JBQ0YsRUFBRSxPQUFPUyxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsK0JBQStCQTtvQkFDL0M7Z0JBQ0Y7O1lBRUFOO1FBQ0Y7MkJBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0YsWUFBWTtRQUNmLHFCQUFPLDhEQUFDVTtzQkFBRTs7Ozs7O0lBQ1o7SUFHQSxNQUFNLEVBQUVaLE1BQU0sRUFBRWEsZUFBZSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHYjtJQUVuRCxNQUFNYyxtQkFBbUIsQ0FBQ0MsVUFDeEJBLFFBQVFDLEdBQUcsQ0FBQyxDQUFDQyxNQUFXQztnQkFFbkJEO2lDQURILDhEQUFDUDtnQkFBY1MsV0FBVTswQkFDdEJGLEVBQUFBLGlCQUFBQSxLQUFLRyxRQUFRLGNBQWJILHFDQUFBQSxlQUFlRCxHQUFHLENBQUMsQ0FBQ0ssUUFBZUEsTUFBTUMsSUFBSSxFQUFFQyxJQUFJLENBQUMsUUFBTztlQUR0REw7Ozs7OztJQUtaLHFCQUNFLDhEQUFDTTtRQUFJTCxXQUFVOzswQkFDYiw4REFBQ007Z0JBQUdOLFdBQVU7MEJBQ1hyQixFQUFBQSxXQUFBQSxNQUFNLENBQUMsRUFBRSxjQUFUQSxnQ0FBQUEscUJBQUFBLFNBQVdzQixRQUFRLENBQUMsRUFBRSxjQUF0QnRCLHlDQUFBQSxtQkFBd0J3QixJQUFJLEtBQUk7Ozs7OztZQUVsQ1IsaUJBQWlCaEIsT0FBTzRCLEtBQUssQ0FBQzs7Ozs7OztBQU1yQztHQWhETTVCO0tBQUFBO0FBa0ROLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWtoaWxlc2hrdW1hci9EZXNrdG9wL25hZ2FyLWZyL3N0cmFwaS1mci9zcmMvY29tcG9uZW50cy9oZWFsdGgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhbHRoOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9W1xuICAgIFxuICBdXG4gIGNvbnN0IFtoZWFsdGhEYXRhLCBzZXRIZWFsdGhEYXRhXSA9IHVzZVN0YXRlPG51bGwgfCBhbnk+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvaGVhbHRoc3M/cG9wdWxhdGU9KlwiKTsgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNldEhlYWx0aERhdGEocmVzdWx0LmRhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaGVhbHRoIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoIWhlYWx0aERhdGEpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47IFxuICB9XG5cblxuICBjb25zdCB7IEhlYWx0aCwgdmlkaGlzaGFDb250ZW50LCBzY2hlbWUsIGluZnJhIH0gPSBoZWFsdGhEYXRhO1xuXG4gIGNvbnN0IHJlbmRlclBhcmFncmFwaHMgPSAoY29udGVudDogYW55W10pID0+XG4gICAgY29udGVudC5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LVsxNnB4XVwiPlxuICAgICAgICB7aXRlbS5jaGlsZHJlbj8ubWFwKChjaGlsZDogYW55KSA9PiBjaGlsZC50ZXh0KS5qb2luKFwiXCIpIHx8IFwiXCJ9XG4gICAgICA8L3A+XG4gICAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMjQgc3BhY2UteS00XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmb250LWJvbGQgdGV4dC0zeGxcIj5cbiAgICAgICAge0hlYWx0aFswXT8uY2hpbGRyZW5bMF0/LnRleHQgfHwgXCJIZWFsdGhcIn1cbiAgICAgIDwvaDE+XG4gICAgICB7cmVuZGVyUGFyYWdyYXBocyhIZWFsdGguc2xpY2UoMSkpfVxuICAgXG4gICAgICBcbiAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhbHRoO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWx0aCIsImRhdGEiLCJoZWFsdGhEYXRhIiwic2V0SGVhbHRoRGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwibGVuZ3RoIiwiZXJyb3IiLCJjb25zb2xlIiwicCIsInZpZGhpc2hhQ29udGVudCIsInNjaGVtZSIsImluZnJhIiwicmVuZGVyUGFyYWdyYXBocyIsImNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImNoaWxkIiwidGV4dCIsImpvaW4iLCJkaXYiLCJoMSIsInNsaWNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/health.tsx\n"));

/***/ })

});