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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Info = ()=>{\n    _s();\n    const info = [\n        {\n            \"head\": \"सिरोंज के बारे में\",\n            \"info\": \"सिरोंज मध्य प्रदेश राज्य के विदिशा जिले में स्थित एक नगर और नगर पालिका है। यह तहसील मुख्यालय और विधानसभा क्षेत्र के रूप में कार्य करता है। सिरोंज शहर को कई वार्डों में विभाजित किया गया है, जिनके लिए हर पाँच साल में चुनाव होते हैं। सिरोंज नगर पालिका के पास बड़ी संख्या में घरों का प्रशासनिक नियंत्रण है और यह पानी की आपूर्ति और सीवरेज जैसी बुनियादी सुविधाएं प्रदान करती है। इसके अलावा, यह अपने अधिकार क्षेत्र में सड़कों के निर्माण और रखरखाव की जिम्मेदारी निभाती है और संपत्तियों पर कर लगाने का भी अधिकार रखती है।\"\n        },\n        {\n            \"head\": \"इतिहास\",\n            \"info\": \"1947 में भारत की स्वतंत्रता के बाद, सिरोंज मध्य भारत (मध्य भारत राज्य) का हिस्सा बना और बाद में 1 नवंबर 1956 को मध्य प्रदेश में शामिल कर दिया गया। आज सिरोंज विदिशा जिले का एक हिस्सा है और इसका सांस्कृतिक और ऐतिहासिक महत्व बना हुआ है।\"\n        },\n        {\n            \"head\": \"भूगोल\"\n        }\n    ];\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:1337/api/sironj-ke-bares?populate=*\");\n            const result = await response.json();\n            setData(result.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Info.useEffect\": ()=>{\n            fetchData();\n        }\n    }[\"Info.useEffect\"], []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n            lineNumber: 49,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black font-sans py-10 px-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-5xl mx-auto space-y-12\",\n            children: data.map((section)=>{\n                var _section_sironj__children_, _section_sironj_, _section_sironj__children_1, _section_sironj_1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold mb-4 flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mr-2\",\n                                    children: (_section_sironj_ = section.sironj[0]) === null || _section_sironj_ === void 0 ? void 0 : (_section_sironj__children_ = _section_sironj_.children[0]) === null || _section_sironj__children_ === void 0 ? void 0 : _section_sironj__children_.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-full h-px bg-yellow-400\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base leading-relaxed\",\n                            children: (_section_sironj_1 = section.sironj[1]) === null || _section_sironj_1 === void 0 ? void 0 : (_section_sironj__children_1 = _section_sironj_1.children[0]) === null || _section_sironj__children_1 === void 0 ? void 0 : _section_sironj__children_1.text\n                        }, void 0, false, {\n                            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, section.id, true, {\n                    fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/akhileshkumar/Desktop/nagar-fr/strapi-fr/src/components/info.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Info, \"YP7e7Smzxlgf2d3MqLcgRZjo83U=\");\n_c = Info;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);\nvar _c;\n$RefreshReg$(_c, \"Info\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luZm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQWFuRCxNQUFNRyxPQUFPOztJQUNYLE1BQU1DLE9BQUs7UUFDVDtZQUNFLFFBQU87WUFDUCxRQUFPO1FBQ1Q7UUFDQTtZQUNFLFFBQU87WUFDUCxRQUFPO1FBQ1Q7UUFDQTtZQUNFLFFBQU87UUFDVDtLQUNEO0lBQ0QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFlLEVBQUU7SUFDakQsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBR3ZDLE1BQU1PLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxTQUFTLE1BQU1GLFNBQVNHLElBQUk7WUFDbENQLFFBQVFNLE9BQU9QLElBQUk7UUFDckIsRUFBRSxPQUFPUyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDLFNBQVU7WUFDUk4sV0FBVztRQUNiO0lBQ0Y7SUFFQVAsZ0RBQVNBOzBCQUFDO1lBQ1JRO1FBQ0Y7eUJBQUcsRUFBRTtJQUVMLElBQUlGLFNBQVM7UUFDWCxxQkFBTyw4REFBQ1M7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1paLEtBQUthLEdBQUcsQ0FBQyxDQUFDQztvQkFHbUJBLDRCQUFBQSxrQkFJdkJBLDZCQUFBQTtxQ0FOTCw4REFBQ0E7O3NDQUNDLDhEQUFDQzs0QkFBR0gsV0FBVTs7OENBQ1osOERBQUNJO29DQUFLSixXQUFVOytDQUFRRSxtQkFBQUEsUUFBUUcsTUFBTSxDQUFDLEVBQUUsY0FBakJILHdDQUFBQSw2QkFBQUEsaUJBQW1CSSxRQUFRLENBQUMsRUFBRSxjQUE5QkosaURBQUFBLDJCQUFnQ0ssSUFBSTs7Ozs7OzhDQUM1RCw4REFBQ0g7b0NBQUtKLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FFbEIsOERBQUNROzRCQUFFUixXQUFVO3VDQUNWRSxvQkFBQUEsUUFBUUcsTUFBTSxDQUFDLEVBQUUsY0FBakJILHlDQUFBQSw4QkFBQUEsa0JBQW1CSSxRQUFRLENBQUMsRUFBRSxjQUE5Qkosa0RBQUFBLDRCQUFnQ0ssSUFBSTs7Ozs7OzttQkFOM0JMLFFBQVFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEM7R0F2RE12QjtLQUFBQTtBQXlETixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FraGlsZXNoa3VtYXIvRGVza3RvcC9uYWdhci1mci9zdHJhcGktZnIvc3JjL2NvbXBvbmVudHMvaW5mby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBTZWN0aW9uID0ge1xuICB0eXBlOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiB7IHR5cGU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH1bXTtcbn07XG5cbnR5cGUgU2lyb25qRGF0YSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgZG9jdW1lbnRJZDogc3RyaW5nO1xuICBzaXJvbmo6IFNlY3Rpb25bXTtcbn07XG5cbmNvbnN0IEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm89W1xuICAgIHtcbiAgICAgIFwiaGVhZFwiOlwi4KS44KS/4KSw4KWL4KSC4KScIOCkleClhyDgpKzgpL7gpLDgpYcg4KSu4KWH4KSCXCIsXG4gICAgICBcImluZm9cIjpcIuCkuOCkv+CksOCli+CkguCknCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2IOCksOCkvuCknOCljeCkryDgpJXgpYcg4KS14KS/4KSm4KS/4KS24KS+IOCknOCkv+CksuClhyDgpK7gpYfgpIIg4KS44KWN4KSl4KS/4KSkIOCkj+CklSDgpKjgpJfgpLAg4KSU4KSwIOCkqOCkl+CksCDgpKrgpL7gpLLgpL/gpJXgpL4g4KS54KWI4KWkIOCkr+CkuSDgpKTgpLngpLjgpYDgpLIg4KSu4KWB4KSW4KWN4KSv4KS+4KSy4KSvIOCklOCksCDgpLXgpL/gpKfgpL7gpKjgpLjgpK3gpL4g4KSV4KWN4KS34KWH4KSk4KWN4KSwIOCkleClhyDgpLDgpYLgpKog4KSu4KWH4KSCIOCkleCkvuCksOCljeCkryDgpJXgpLDgpKTgpL4g4KS54KWI4KWkIOCkuOCkv+CksOCli+CkguCknCDgpLbgpLngpLAg4KSV4KWLIOCkleCkiCDgpLXgpL7gpLDgpY3gpKHgpYvgpIIg4KSu4KWH4KSCIOCkteCkv+CkreCkvuCknOCkv+CkpCDgpJXgpL/gpK/gpL4g4KSX4KSv4KS+IOCkueCliCwg4KSc4KS/4KSo4KSV4KWHIOCksuCkv+CkjyDgpLngpLAg4KSq4KS+4KSB4KSaIOCkuOCkvuCksiDgpK7gpYfgpIIg4KSa4KWB4KSo4KS+4KS1IOCkueCli+CkpOClhyDgpLngpYjgpILgpaQg4KS44KS/4KSw4KWL4KSC4KScIOCkqOCkl+CksCDgpKrgpL7gpLLgpL/gpJXgpL4g4KSV4KWHIOCkquCkvuCkuCDgpKzgpKHgpLzgpYAg4KS44KSC4KSW4KWN4KSv4KS+IOCkruClh+CkgiDgpJjgpLDgpYvgpIIg4KSV4KS+IOCkquCljeCksOCktuCkvuCkuOCkqOCkv+CklSDgpKjgpL/gpK/gpILgpKTgpY3gpLDgpKMg4KS54KWIIOCklOCksCDgpK/gpLkg4KSq4KS+4KSo4KWAIOCkleClgCDgpIbgpKrgpYLgpLDgpY3gpKTgpL8g4KSU4KSwIOCkuOClgOCkteCksOClh+CknCDgpJzgpYjgpLjgpYAg4KSs4KWB4KSo4KS/4KSv4KS+4KSm4KWAIOCkuOClgeCkteCkv+Ckp+CkvuCkj+CkgiDgpKrgpY3gpLDgpKbgpL7gpKgg4KSV4KSw4KSk4KWAIOCkueCliOClpCDgpIfgpLjgpJXgpYcg4KSF4KSy4KS+4KS14KS+LCDgpK/gpLkg4KSF4KSq4KSo4KWHIOCkheCkp+Ckv+CkleCkvuCksCDgpJXgpY3gpLfgpYfgpKTgpY3gpLAg4KSu4KWH4KSCIOCkuOCkoeCkvOCkleCli+CkgiDgpJXgpYcg4KSo4KS/4KSw4KWN4KSu4KS+4KSjIOCklOCksCDgpLDgpJbgpLDgpJbgpL7gpLUg4KSV4KWAIOCknOCkv+CkruCljeCkruClh+CkpuCkvuCksOClgCDgpKjgpL/gpK3gpL7gpKTgpYAg4KS54KWIIOCklOCksCDgpLjgpILgpKrgpKTgpY3gpKTgpL/gpK/gpYvgpIIg4KSq4KSwIOCkleCksCDgpLLgpJfgpL7gpKjgpYcg4KSV4KS+IOCkreClgCDgpIXgpKfgpL/gpJXgpL7gpLAg4KSw4KSW4KSk4KWAIOCkueCliOClpFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImhlYWRcIjpcIuCkh+CkpOCkv+CkueCkvuCkuFwiLFxuICAgICAgXCJpbmZvXCI6XCIxOTQ3IOCkruClh+CkgiDgpK3gpL7gpLDgpKQg4KSV4KWAIOCkuOCljeCkteCkpOCkguCkpOCljeCksOCkpOCkviDgpJXgpYcg4KSs4KS+4KSmLCDgpLjgpL/gpLDgpYvgpILgpJwg4KSu4KSn4KWN4KSvIOCkreCkvuCksOCkpCAo4KSu4KSn4KWN4KSvIOCkreCkvuCksOCkpCDgpLDgpL7gpJzgpY3gpK8pIOCkleCkviDgpLngpL/gpLjgpY3gpLjgpL4g4KSs4KSo4KS+IOCklOCksCDgpKzgpL7gpKYg4KSu4KWH4KSCIDEg4KSo4KS14KSC4KSs4KSwIDE5NTYg4KSV4KWLIOCkruCkp+CljeCkryDgpKrgpY3gpLDgpKbgpYfgpLYg4KSu4KWH4KSCIOCktuCkvuCkruCkv+CksiDgpJXgpLAg4KSm4KS/4KSv4KS+IOCkl+Ckr+CkvuClpCDgpIbgpJwg4KS44KS/4KSw4KWL4KSC4KScIOCkteCkv+CkpuCkv+CktuCkviDgpJzgpL/gpLLgpYcg4KSV4KS+IOCkj+CklSDgpLngpL/gpLjgpY3gpLjgpL4g4KS54KWIIOCklOCksCDgpIfgpLjgpJXgpL4g4KS44KS+4KSC4KS44KWN4KSV4KWD4KSk4KS/4KSVIOCklOCksCDgpJDgpKTgpL/gpLngpL7gpLjgpL/gpJUg4KSu4KS54KSk4KWN4KS1IOCkrOCkqOCkviDgpLngpYHgpIYg4KS54KWI4KWkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaGVhZFwiOlwi4KSt4KWC4KSX4KWL4KSyXCJcbiAgICB9XG4gIF1cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8U2lyb25qRGF0YVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9zaXJvbmota2UtYmFyZXM/cG9wdWxhdGU9KlwiKTsgXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXREYXRhKHJlc3VsdC5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmb250LXNhbnMgcHktMTAgcHgtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0byBzcGFjZS15LTEyXCI+XG4gICAgICAgIHtkYXRhLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgIDxzZWN0aW9uIGtleT17c2VjdGlvbi5pZH0+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPntzZWN0aW9uLnNpcm9ualswXT8uY2hpbGRyZW5bMF0/LnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1weCBiZy15ZWxsb3ctNDAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAge3NlY3Rpb24uc2lyb25qWzFdPy5jaGlsZHJlblswXT8udGV4dH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmZvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbmZvIiwiaW5mbyIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNlY3Rpb24iLCJoMiIsInNwYW4iLCJzaXJvbmoiLCJjaGlsZHJlbiIsInRleHQiLCJwIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/info.tsx\n"));

/***/ })

});