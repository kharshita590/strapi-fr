"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/departments/more/page",{

/***/ "(app-pages-browser)/./src/app/departments/more/page.tsx":
/*!*******************************************!*\
  !*** ./src/app/departments/more/page.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./src/components/header.tsx\");\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/nav */ \"(app-pages-browser)/./src/components/nav.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/logo */ \"(app-pages-browser)/./src/components/logo.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst More = ()=>{\n    var _depart__children_, _depart_;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"More.useEffect\": ()=>{\n            const fetchData = {\n                \"More.useEffect.fetchData\": async ()=>{\n                    try {\n                        const response = await fetch(\"http://localhost:1337/api/mores?populate=*\");\n                        const result = await response.json();\n                        // const formattedData=result.data.map((item:any,index:any)=>({\n                        //   id:item.id,\n                        //   name:item.na,\n                        //   designation:item.designation,\n                        //   email:item.email.trim(),\n                        //   address:item.address,\n                        //   phone:item.phone,\n                        //   room:item.room,\n                        // }))\n                        // setData(formattedData)\n                        if (result.data) {\n                            const moreData = result.data[0];\n                            setData(moreData);\n                        }\n                    } catch (error) {\n                        console.log(error);\n                    }\n                }\n            }[\"More.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"More.useEffect\"], []);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading..\"\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/departments/more/page.tsx\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, undefined);\n    }\n    const { depart } = data;\n    const renderPara = (content)=>content.map((item, index)=>{\n            var _item_children;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[16px] text-black\",\n                children: ((_item_children = item.children) === null || _item_children === void 0 ? void 0 : _item_children.map((child)=>child.text).join(\"\")) || \"\"\n            }, index, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/departments/more/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, undefined);\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/departments/more/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/departments/more/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/departments/more/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"p-24 space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-black font-bold text-3xl\",\n                        children: [\n                            \"  \",\n                            ((_depart_ = depart[0]) === null || _depart_ === void 0 ? void 0 : (_depart__children_ = _depart_.children[0]) === null || _depart__children_ === void 0 ? void 0 : _depart__children_.text) || \"Departments\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/departments/more/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 1\n                    }, undefined),\n                    renderPara(depart.slice(1))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/departments/more/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/app/departments/more/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(More, \"oTjFXqkVm01zmbqbmeeX8Z82zxg=\");\n_c = More;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (More);\nvar _c;\n$RefreshReg$(_c, \"More\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGVwYXJ0bWVudHMvbW9yZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0M7QUFDTjtBQUNOO0FBQ0U7QUFDckMsTUFBTU0sT0FBTztRQTZDb0NDLG9CQUFBQTs7SUE1Qy9DLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFDUiwrQ0FBUUEsQ0FBTTtJQUNuQ0MsZ0RBQVNBOzBCQUFDO1lBQ1IsTUFBTVE7NENBQVk7b0JBQ2hCLElBQUc7d0JBQ0QsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO3dCQUM3QixNQUFNQyxTQUFTLE1BQU1GLFNBQVNHLElBQUk7d0JBQ2xDLCtEQUErRDt3QkFDL0QsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGtDQUFrQzt3QkFDbEMsNkJBQTZCO3dCQUM3QiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixNQUFNO3dCQUNOLHlCQUF5Qjt3QkFDekIsSUFBR0QsT0FBT0wsSUFBSSxFQUFDOzRCQUNiLE1BQU1PLFdBQVdGLE9BQU9MLElBQUksQ0FBQyxFQUFFOzRCQUMvQkMsUUFBUU07d0JBQ1Y7b0JBQ0YsRUFBQyxPQUFNQyxPQUFVO3dCQUNmQyxRQUFRQyxHQUFHLENBQUNGO29CQUNkO2dCQUNGOztZQUNBTjtRQUNGO3lCQUFFLEVBQUU7SUFDTCxJQUFHLENBQUNGLE1BQUs7UUFDTixxQkFBTyw4REFBQ1c7c0JBQUU7Ozs7OztJQUNiO0lBRUEsTUFBTSxFQUFDWixNQUFNLEVBQUMsR0FBQ0M7SUFFaEIsTUFBTVksYUFBVyxDQUFDQyxVQUNoQkEsUUFBUUMsR0FBRyxDQUFDLENBQUNDLE1BQVNDO2dCQUVqQkQ7aUNBREgsOERBQUNKO2dCQUFjTSxXQUFVOzBCQUN0QkYsRUFBQUEsaUJBQUFBLEtBQUtHLFFBQVEsY0FBYkgscUNBQUFBLGVBQWVELEdBQUcsQ0FBQyxDQUFDSyxRQUFZQSxNQUFNQyxJQUFJLEVBQUVDLElBQUksQ0FBQyxRQUFNO2VBRGxETDs7Ozs7O0lBSVYscUJBQ0UsOERBQUNNO1FBQUlMLFdBQVU7OzBCQUNYLDhEQUFDcEIsd0RBQUlBOzs7OzswQkFDTCw4REFBQ0YsMERBQU1BOzs7OzswQkFDUCw4REFBQ0MsdURBQUdBOzs7OzswQkFDSiw4REFBQzJCO2dCQUFLTixXQUFVOztrQ0FDeEIsOERBQUNPO3dCQUFHUCxXQUFVOzs0QkFBZ0M7NEJBQUdsQixFQUFBQSxXQUFBQSxNQUFNLENBQUMsRUFBRSxjQUFUQSxnQ0FBQUEscUJBQUFBLFNBQVdtQixRQUFRLENBQUMsRUFBRSxjQUF0Qm5CLHlDQUFBQSxtQkFBd0JxQixJQUFJLEtBQUk7Ozs7Ozs7b0JBQ2hGUixXQUFXYixPQUFPMEIsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBS3pCO0dBbkRNM0I7S0FBQUE7QUFxRE4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbGVzaGt1bWFyL0Rlc2t0b3AvbmFnYXIvZnJvbnRlbmQvZnJvbnRlbmQtbmV4dC9zcmMvYXBwL2RlcGFydG1lbnRzL21vcmUvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBOYXYgZnJvbSBcIkAvY29tcG9uZW50cy9uYXZcIjtcbmltcG9ydCBMb2dvIGZyb20gJ0AvY29tcG9uZW50cy9sb2dvJztcbmNvbnN0IE1vcmUgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLHNldERhdGFdPXVzZVN0YXRlPGFueT4obnVsbCk7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jKCk9PntcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvbW9yZXM/cG9wdWxhdGU9KlwiKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAvLyBjb25zdCBmb3JtYXR0ZWREYXRhPXJlc3VsdC5kYXRhLm1hcCgoaXRlbTphbnksaW5kZXg6YW55KT0+KHtcbiAgICAgICAgLy8gICBpZDppdGVtLmlkLFxuICAgICAgICAvLyAgIG5hbWU6aXRlbS5uYSxcbiAgICAgICAgLy8gICBkZXNpZ25hdGlvbjppdGVtLmRlc2lnbmF0aW9uLFxuICAgICAgICAvLyAgIGVtYWlsOml0ZW0uZW1haWwudHJpbSgpLFxuICAgICAgICAvLyAgIGFkZHJlc3M6aXRlbS5hZGRyZXNzLFxuICAgICAgICAvLyAgIHBob25lOml0ZW0ucGhvbmUsXG4gICAgICAgIC8vICAgcm9vbTppdGVtLnJvb20sXG4gICAgICAgIC8vIH0pKVxuICAgICAgICAvLyBzZXREYXRhKGZvcm1hdHRlZERhdGEpXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhKXtcbiAgICAgICAgICBjb25zdCBtb3JlRGF0YSA9IHJlc3VsdC5kYXRhWzBdO1xuICAgICAgICAgIHNldERhdGEobW9yZURhdGEpO1xuICAgICAgICB9XG4gICAgICB9Y2F0Y2goZXJyb3I6YW55KXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LFtdKVxuIGlmKCFkYXRhKXtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uPC9wPlxuIH1cblxuIGNvbnN0IHtkZXBhcnR9PWRhdGE7XG4gXG5jb25zdCByZW5kZXJQYXJhPShjb250ZW50OmFueVtdKT0+XG4gIGNvbnRlbnQubWFwKChpdGVtOmFueSxpbmRleDpudW1iZXIpPT4oXG4gICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gdGV4dC1ibGFja1wiPlxuICAgICAge2l0ZW0uY2hpbGRyZW4/Lm1hcCgoY2hpbGQ6YW55KT0+Y2hpbGQudGV4dCkuam9pbihcIlwiKXx8IFwiXCJ9XG4gICAgPC9wPlxuICApKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxMb2dvLz5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgIDxOYXYvPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJwLTI0IHNwYWNlLXktNFwiPlxuPGgxIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtM3hsXCI+ICB7ZGVwYXJ0WzBdPy5jaGlsZHJlblswXT8udGV4dCB8fCBcIkRlcGFydG1lbnRzXCJ9PC9oMT5cbntyZW5kZXJQYXJhKGRlcGFydC5zbGljZSgxKSl9XG48L21haW4+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vcmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIk5hdiIsIkxvZ28iLCJNb3JlIiwiZGVwYXJ0IiwiZGF0YSIsInNldERhdGEiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsIm1vcmVEYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicCIsInJlbmRlclBhcmEiLCJjb250ZW50IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjaGlsZCIsInRleHQiLCJqb2luIiwiZGl2IiwibWFpbiIsImgxIiwic2xpY2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/departments/more/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/nav.tsx":
/*!********************************!*\
  !*** ./src/components/nav.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Navbar = ()=>{\n    _s();\n    // Use the type for the state\n    const [dropdowns, setDropdowns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        ज़िला: false,\n        विभागों: false,\n        निर्देशिका: false\n    });\n    // Ensure the function parameter is strongly typed\n    const toggleDropdown = (menu)=>{\n        setDropdowns((prev)=>({\n                ...prev,\n                [menu]: !prev[menu]\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"bg-[#00008B] text-white font-bold py-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex justify-center gap-8 text-sm font-bold relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"होम\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative cursor-pointer\",\n                        onMouseEnter: ()=>toggleDropdown(\"ज़िला\"),\n                        onMouseLeave: ()=>toggleDropdown(\"ज़िला\"),\n                        children: [\n                            \"ज़िला\",\n                            dropdowns[\"ज़िला\"] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"absolute top-10 left-0 bg-white text-black rounded shadow-lg py-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-2 hover:bg-gray-200\",\n                                        children: \"Option 1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-2 hover:bg-gray-200\",\n                                        children: \"Option 2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-2 hover:bg-gray-200\",\n                                        children: \"Option 3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative cursor-pointer\",\n                        onMouseEnter: ()=>toggleDropdown(\"विभागों\"),\n                        onMouseLeave: ()=>toggleDropdown(\"विभागों\"),\n                        children: [\n                            \"विभागों\",\n                            dropdowns[\"विभागों\"] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"absolute top-10 left-0 bg-white text-black rounded shadow-lg py-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-2 hover:bg-gray-200\",\n                                        children: \"Option 1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-2 hover:bg-gray-200\",\n                                        children: \"Option 2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-2 hover:bg-gray-200\",\n                                        children: \"Option 3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative cursor-pointer\",\n                        onMouseEnter: ()=>toggleDropdown(\"निर्देशिका\"),\n                        onMouseLeave: ()=>toggleDropdown(\"निर्देशिका\"),\n                        children: [\n                            \"निर्देशिका\",\n                            dropdowns[\"निर्देशिका\"] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"absolute top-10 left-0 bg-white text-black rounded shadow-lg py-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-2 hover:bg-gray-200\",\n                                        children: \"Option 1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-2 hover:bg-gray-200\",\n                                        children: \"Option 2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-2 hover:bg-gray-200\",\n                                        children: \"Option 3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar/frontend/frontend-next/src/components/nav.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"3TeHKTY0d0dyvCAhdVJzghodEZ4=\");\n_c = Navbar;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLFNBQVM7O0lBSWIsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBK0I7UUFDdkVJLE9BQU87UUFDUEMsU0FBUztRQUNUQyxZQUFZO0lBQ2Q7SUFFQSxrREFBa0Q7SUFDbEQsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCTCxhQUFhLENBQUNNLE9BQVU7Z0JBQ3RCLEdBQUdBLElBQUk7Z0JBQ1AsQ0FBQ0QsS0FBSyxFQUFFLENBQUNDLElBQUksQ0FBQ0QsS0FBSztZQUNyQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFBR0QsV0FBVTs7a0NBQ1osOERBQUNFO2tDQUFHOzs7Ozs7a0NBR0osOERBQUNBO3dCQUNDRixXQUFVO3dCQUNWRyxjQUFjLElBQU1SLGVBQWU7d0JBQ25DUyxjQUFjLElBQU1ULGVBQWU7OzRCQUNwQzs0QkFFRUwsU0FBUyxDQUFDLFFBQVEsa0JBQ2pCLDhEQUFDVztnQ0FBR0QsV0FBVTs7a0RBQ1osOERBQUNFO3dDQUFHRixXQUFVO2tEQUE4Qjs7Ozs7O2tEQUM1Qyw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQThCOzs7Ozs7a0RBQzVDLDhEQUFDRTt3Q0FBR0YsV0FBVTtrREFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNbEQsOERBQUNFO3dCQUNDRixXQUFVO3dCQUNWRyxjQUFjLElBQU1SLGVBQWU7d0JBQ25DUyxjQUFjLElBQU1ULGVBQWU7OzRCQUNwQzs0QkFFRUwsU0FBUyxDQUFDLFVBQVUsa0JBQ25CLDhEQUFDVztnQ0FBR0QsV0FBVTs7a0RBQ1osOERBQUNFO3dDQUFHRixXQUFVO2tEQUE4Qjs7Ozs7O2tEQUM1Qyw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQThCOzs7Ozs7a0RBQzVDLDhEQUFDRTt3Q0FBR0YsV0FBVTtrREFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNbEQsOERBQUNFO3dCQUNDRixXQUFVO3dCQUNWRyxjQUFjLElBQU1SLGVBQWU7d0JBQ25DUyxjQUFjLElBQU1ULGVBQWU7OzRCQUNwQzs0QkFFRUwsU0FBUyxDQUFDLGFBQWEsa0JBQ3RCLDhEQUFDVztnQ0FBR0QsV0FBVTs7a0RBQ1osOERBQUNFO3dDQUFHRixXQUFVO2tEQUE4Qjs7Ozs7O2tEQUM1Qyw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQThCOzs7Ozs7a0RBQzVDLDhEQUFDRTt3Q0FBR0YsV0FBVTtrREFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUQ7R0E1RU1YO0tBQUFBO0FBOEVOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWtoaWxlc2hrdW1hci9EZXNrdG9wL25hZ2FyL2Zyb250ZW5kL2Zyb250ZW5kLW5leHQvc3JjL2NvbXBvbmVudHMvbmF2LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAvLyBEZWZpbmUgYSB0eXBlIGZvciB0aGUgZHJvcGRvd24ga2V5c1xuICB0eXBlIERyb3Bkb3duS2V5ID0gXCLgpJzgpLzgpL/gpLLgpL5cIiB8IFwi4KS14KS/4KSt4KS+4KSX4KWL4KSCXCIgfCBcIuCkqOCkv+CksOCljeCkpuClh+CktuCkv+CkleCkvlwiO1xuXG4gIC8vIFVzZSB0aGUgdHlwZSBmb3IgdGhlIHN0YXRlXG4gIGNvbnN0IFtkcm9wZG93bnMsIHNldERyb3Bkb3duc10gPSB1c2VTdGF0ZTxSZWNvcmQ8RHJvcGRvd25LZXksIGJvb2xlYW4+Pih7XG4gICAg4KSc4KS84KS/4KSy4KS+OiBmYWxzZSxcbiAgICDgpLXgpL/gpK3gpL7gpJfgpYvgpII6IGZhbHNlLFxuICAgIOCkqOCkv+CksOCljeCkpuClh+CktuCkv+CkleCkvjogZmFsc2UsXG4gIH0pO1xuXG4gIC8vIEVuc3VyZSB0aGUgZnVuY3Rpb24gcGFyYW1ldGVyIGlzIHN0cm9uZ2x5IHR5cGVkXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKG1lbnU6IERyb3Bkb3duS2V5KSA9PiB7XG4gICAgc2V0RHJvcGRvd25zKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFttZW51XTogIXByZXZbbWVudV0sXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctWyMwMDAwOEJdIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTZcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTggdGV4dC1zbSBmb250LWJvbGQgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8bGk+4KS54KWL4KSuPC9saT5cblxuICAgICAgICAgIHsvKiDgpJzgpLzgpL/gpLLgpL4gRHJvcGRvd24gKi99XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRvZ2dsZURyb3Bkb3duKFwi4KSc4KS84KS/4KSy4KS+XCIpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0b2dnbGVEcm9wZG93bihcIuCknOCkvOCkv+CksuCkvlwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDgpJzgpLzgpL/gpLLgpL5cbiAgICAgICAgICAgIHtkcm9wZG93bnNbXCLgpJzgpLzgpL/gpLLgpL5cIl0gJiYgKFxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEwIGxlZnQtMCBiZy13aGl0ZSB0ZXh0LWJsYWNrIHJvdW5kZWQgc2hhZG93LWxnIHB5LTJcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMjAwXCI+T3B0aW9uIDE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC00IHB5LTIgaG92ZXI6YmctZ3JheS0yMDBcIj5PcHRpb24gMjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTIwMFwiPk9wdGlvbiAzPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgIHsvKiDgpLXgpL/gpK3gpL7gpJfgpYvgpIIgRHJvcGRvd24gKi99XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRvZ2dsZURyb3Bkb3duKFwi4KS14KS/4KSt4KS+4KSX4KWL4KSCXCIpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0b2dnbGVEcm9wZG93bihcIuCkteCkv+CkreCkvuCkl+Cli+CkglwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDgpLXgpL/gpK3gpL7gpJfgpYvgpIJcbiAgICAgICAgICAgIHtkcm9wZG93bnNbXCLgpLXgpL/gpK3gpL7gpJfgpYvgpIJcIl0gJiYgKFxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEwIGxlZnQtMCBiZy13aGl0ZSB0ZXh0LWJsYWNrIHJvdW5kZWQgc2hhZG93LWxnIHB5LTJcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMjAwXCI+T3B0aW9uIDE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC00IHB5LTIgaG92ZXI6YmctZ3JheS0yMDBcIj5PcHRpb24gMjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTIwMFwiPk9wdGlvbiAzPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgIHsvKiDgpKjgpL/gpLDgpY3gpKbgpYfgpLbgpL/gpJXgpL4gRHJvcGRvd24gKi99XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRvZ2dsZURyb3Bkb3duKFwi4KSo4KS/4KSw4KWN4KSm4KWH4KS24KS/4KSV4KS+XCIpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0b2dnbGVEcm9wZG93bihcIuCkqOCkv+CksOCljeCkpuClh+CktuCkv+CkleCkvlwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDgpKjgpL/gpLDgpY3gpKbgpYfgpLbgpL/gpJXgpL5cbiAgICAgICAgICAgIHtkcm9wZG93bnNbXCLgpKjgpL/gpLDgpY3gpKbgpYfgpLbgpL/gpJXgpL5cIl0gJiYgKFxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEwIGxlZnQtMCBiZy13aGl0ZSB0ZXh0LWJsYWNrIHJvdW5kZWQgc2hhZG93LWxnIHB5LTJcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMjAwXCI+T3B0aW9uIDE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC00IHB5LTIgaG92ZXI6YmctZ3JheS0yMDBcIj5PcHRpb24gMjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTIwMFwiPk9wdGlvbiAzPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZiYXIiLCJkcm9wZG93bnMiLCJzZXREcm9wZG93bnMiLCLgpJzgpLzgpL/gpLLgpL4iLCLgpLXgpL/gpK3gpL7gpJfgpYvgpIIiLCLgpKjgpL/gpLDgpY3gpKbgpYfgpLbgpL/gpJXgpL4iLCJ0b2dnbGVEcm9wZG93biIsIm1lbnUiLCJwcmV2IiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwidWwiLCJsaSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/nav.tsx\n"));

/***/ })

});