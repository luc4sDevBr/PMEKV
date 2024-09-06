"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cards/videos/[videoid]/page",{

/***/ "(app-pages-browser)/./src/app/cards/videos/[videoid]/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/cards/videos/[videoid]/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-left.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-NXTXE2B3.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-youtube */ \"(app-pages-browser)/./node_modules/react-youtube/dist/YouTube.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { params } = param;\n    _s();\n    const [iframeLoaded, setIframeLoaded] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n    const [videoTitle, setVideoTitle] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const [videoDescription, setvideoDescription] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const [videoDuration, setVideoDuration] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const youtubePlayerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const formatDuration = (duration)=>{\n        const match = duration.match(/PT(\\d+H)?(\\d+M)?(\\d+S)?/);\n        const hours = parseInt(match === null || match === void 0 ? void 0 : match[1]) || 0;\n        const minutes = parseInt(match === null || match === void 0 ? void 0 : match[2]) || 0;\n        const seconds = parseInt(match === null || match === void 0 ? void 0 : match[3]) || 0;\n        return \"\".concat(hours.toString().padStart(2, \"0\"), \":\").concat(minutes.toString().padStart(2, \"0\"), \":\").concat(seconds.toString().padStart(2, \"0\"));\n    };\n    const onReady = (event)=>{\n        const player = event.target;\n        const iframe = player.getIframe();\n        if (iframe) {\n            iframe.style.width = \"100%\";\n            iframe.style.height = \"70vh\";\n            iframe.style.borderRadius = \"12px\";\n            iframe.style.boxShadow = \"0px 4px 8px rgba(0, 0, 0, 0.1)\";\n            setIframeLoaded(true);\n        }\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://www.googleapis.com/youtube/v3/videos?id=\".concat(params.videoid, \"&part=snippet,contentDetails&key=AIzaSyBSdtLrgAkVPotIjYnBGhyz3xWpFoj6dbc\")).then((response)=>{\n            if (response.data.items && response.data.items.length > 0) {\n                const video = response.data.items[0];\n                const title = video.snippet.title;\n                const description = video.snippet.description;\n                const duration = formatDuration(video.contentDetails.duration);\n                setVideoDuration(duration);\n                setvideoDescription(description);\n                setVideoTitle(title);\n            }\n        }).catch((error)=>{\n            console.error(\"Erro ao obter informa\\xe7\\xf5es do v\\xeddeo:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"grid grid-rows-14 w-full h-screen overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"row-span-1 px-2 bg-Mevkgreen flex space-x-6 shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"menu\", {\n                        className: \"flex-1 flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.button_default, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/exercicios\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    color: \"#dbbc65\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 50\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-4 flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/4.png\",\n                            width: 50,\n                            height: 50,\n                            alt: \"Client Icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 flex\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-full row-span-12 bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"frame\",\n                        className: iframeLoaded ? \"mt-10 mb-10 w-full h-auto flex flex-col items-center gap-10\" : \"hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"youtube-container w-full lg:w-3/5 h-full rounded-lg px-4 lg:px-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    videoId: params.videoid,\n                                    onReady: onReady\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-Mevkgreen text-slate-500 shadow-md my-5 p-5 flex flex-col items-start rounded-lg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm uppercase font-bold text-Mevkgolden\",\n                                            children: videoTitle\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"font-bold text-lg text-Mevkgolden\",\n                                            children: videoDuration\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                            className: \"text-sm text-Mevkligth p-2 text-left h-56 w-full max-w-full overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-yellow-100\",\n                                            children: videoDescription\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"bg-Mevkgreen w-full h-52 text-center flex flex-col items-center justify-center drop-shadow-lg gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: \"/4.png\",\n                                width: 70,\n                                height: 70,\n                                alt: \"Client Icon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"drop-shadow-lg text-4xl font-thin text-NewPalet-yellow\",\n                                children: \" Desafio MEVK \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\videos\\\\[videoid]\\\\page.tsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"yJPoRjMWX0MxrR2cWzUgABGWTLA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2FyZHMvdmlkZW9zL1t2aWRlb2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDVTtBQUNIO0FBQ0s7QUFDZDtBQUNPO0FBQ1Y7QUFNWCxTQUFTUSxLQUFLLEtBQWlCO1FBQWpCLEVBQUVDLE1BQU0sRUFBUyxHQUFqQjs7SUFDekIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QscURBQWMsQ0FBQztJQUN2RCxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1oscURBQWMsQ0FBQztJQUNuRCxNQUFNLENBQUNhLGtCQUFrQkMsb0JBQW9CLEdBQUdkLHFEQUFjLENBQUM7SUFDL0QsTUFBTSxDQUFDZSxlQUFlQyxpQkFBaUIsR0FBR2hCLHFEQUFjLENBQUM7SUFDekQsTUFBTWlCLG1CQUFtQmhCLDZDQUFNQSxDQUFDO0lBRWhDLE1BQU1pQixpQkFBaUIsQ0FBQ0M7UUFDcEIsTUFBTUMsUUFBWUQsU0FBU0MsS0FBSyxDQUFDO1FBQ2pDLE1BQU1DLFFBQVFDLFNBQVNGLGtCQUFBQSw0QkFBQUEsS0FBTyxDQUFDLEVBQUUsS0FBSztRQUN0QyxNQUFNRyxVQUFVRCxTQUFTRixrQkFBQUEsNEJBQUFBLEtBQU8sQ0FBQyxFQUFFLEtBQUs7UUFDeEMsTUFBTUksVUFBVUYsU0FBU0Ysa0JBQUFBLDRCQUFBQSxLQUFPLENBQUMsRUFBRSxLQUFLO1FBRXhDLE9BQU8sR0FBd0NHLE9BQXJDRixNQUFNSSxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLE1BQUssS0FBMENGLE9BQXZDRCxRQUFRRSxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLE1BQUssS0FBdUMsT0FBcENGLFFBQVFDLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7SUFDekg7SUFFQSxNQUFNQyxVQUFVLENBQUNDO1FBQ2IsTUFBTUMsU0FBU0QsTUFBTUUsTUFBTTtRQUMzQixNQUFNQyxTQUFTRixPQUFPRyxTQUFTO1FBRS9CLElBQUlELFFBQVE7WUFDUkEsT0FBT0UsS0FBSyxDQUFDQyxLQUFLLEdBQUc7WUFDckJILE9BQU9FLEtBQUssQ0FBQ0UsTUFBTSxHQUFHO1lBQ3RCSixPQUFPRSxLQUFLLENBQUNHLFlBQVksR0FBRztZQUM1QkwsT0FBT0UsS0FBSyxDQUFDSSxTQUFTLEdBQUc7WUFDekI1QixnQkFBZ0I7UUFDcEI7UUFFQUosNkNBQUtBLENBQUNpQyxHQUFHLENBQUMsbURBQWtFLE9BQWYvQixPQUFPZ0MsT0FBTyxFQUFDLDZFQUN2RUMsSUFBSSxDQUFDLENBQUNDO1lBQ0gsSUFBSUEsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLElBQUlGLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRztnQkFDdkQsTUFBTUMsUUFBUUosU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsTUFBTUcsUUFBUUQsTUFBTUUsT0FBTyxDQUFDRCxLQUFLO2dCQUNqQyxNQUFNRSxjQUFjSCxNQUFNRSxPQUFPLENBQUNDLFdBQVc7Z0JBQzdDLE1BQU03QixXQUFXRCxlQUFlMkIsTUFBTUksY0FBYyxDQUFDOUIsUUFBUTtnQkFFN0RILGlCQUFpQkc7Z0JBQ2pCTCxvQkFBb0JrQztnQkFDcEJwQyxjQUFja0M7WUFDbEI7UUFDSixHQUNDSSxLQUFLLENBQUMsQ0FBQ0M7WUFDSkMsUUFBUUQsS0FBSyxDQUFDLGdEQUF1Q0E7UUFDekQ7SUFDUjtJQUVBLHFCQUNJLDhEQUFDRTtRQUFLQyxXQUFVOzswQkFHWiw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNkLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FDWiw0RUFBQ3BELDZEQUFNQTtzQ0FDSCw0RUFBQ0MsaURBQUlBO2dDQUFDc0QsTUFBSzswQ0FBYyw0RUFBQzFELHFGQUFTQTtvQ0FBQzJELE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbEQsOERBQUNDO3dCQUFJTCxXQUFVO2tDQUNYLDRFQUFDeEQsa0RBQUtBOzRCQUFDOEQsS0FBSTs0QkFBUzFCLE9BQU87NEJBQUlDLFFBQVE7NEJBQUkwQixLQUFJOzs7Ozs7Ozs7OztrQ0FFbkQsOERBQUNGO3dCQUFJTCxXQUFVOzs7Ozs7Ozs7Ozs7MEJBSW5CLDhEQUFDUTtnQkFBUVIsV0FBVTs7a0NBQ2YsOERBQUNLO3dCQUFJSSxJQUFHO3dCQUFRVCxXQUFXOUMsZUFBZSxnRUFBZ0U7a0NBRXRHLDRFQUFDbUQ7NEJBQUlMLFdBQVU7OzhDQUNYLDhEQUFDbEQscURBQU9BO29DQUFDNEQsU0FBU3pELE9BQU9nQyxPQUFPO29DQUFFWixTQUFTQTs7Ozs7OzhDQUUzQyw4REFBQ2dDO29DQUFJTCxXQUFVOztzREFDWCw4REFBQ1c7NENBQUVYLFdBQVU7c0RBQStDM0M7Ozs7OztzREFDNUQsOERBQUN1RDs0Q0FBR1osV0FBVTtzREFBcUN2Qzs7Ozs7O3NEQUVuRCw4REFBQ29EOzRDQUFNYixXQUFVO3NEQUNaekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU9qQiw4REFBQ3VEO3dCQUFPZCxXQUFVOzswQ0FDZCw4REFBQ3hELGtEQUFLQTtnQ0FBQzhELEtBQUk7Z0NBQVMxQixPQUFPO2dDQUFJQyxRQUFRO2dDQUFJMEIsS0FBSTs7Ozs7OzBDQUMvQyw4REFBQ1E7Z0NBQUdmLFdBQVU7MENBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0Y7R0F4RndCaEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jYXJkcy92aWRlb3MvW3ZpZGVvaWRdL3BhZ2UudHN4PzllNWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBBcnJvd0xlZnQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFlvdVR1YmUgZnJvbSBcInJlYWN0LXlvdXR1YmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHBhcmFtczogeyB2aWRlb2lkOiBzdHJpbmcgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcGFyYW1zIH06IFByb3BzKSB7XHJcbiAgICBjb25zdCBbaWZyYW1lTG9hZGVkLCBzZXRJZnJhbWVMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZpZGVvVGl0bGUsIHNldFZpZGVvVGl0bGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdmlkZW9EZXNjcmlwdGlvbiwgc2V0dmlkZW9EZXNjcmlwdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2aWRlb0R1cmF0aW9uLCBzZXRWaWRlb0R1cmF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgeW91dHViZVBsYXllclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXREdXJhdGlvbiA9IChkdXJhdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2g6YW55ID0gZHVyYXRpb24ubWF0Y2goL1BUKFxcZCtIKT8oXFxkK00pPyhcXGQrUyk/Lyk7XHJcbiAgICAgICAgY29uc3QgaG91cnMgPSBwYXJzZUludChtYXRjaD8uWzFdKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZUludChtYXRjaD8uWzJdKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBwYXJzZUludChtYXRjaD8uWzNdKSB8fCAwO1xyXG5cclxuICAgICAgICByZXR1cm4gYCR7aG91cnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uUmVhZHkgPSAoZXZlbnQ6IHsgdGFyZ2V0OiBhbnkgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllciA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCBpZnJhbWUgPSBwbGF5ZXIuZ2V0SWZyYW1lKCk7XHJcblxyXG4gICAgICAgIGlmIChpZnJhbWUpIHtcclxuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjcwdmhcIjtcclxuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTJweFwiO1xyXG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSlcIjtcclxuICAgICAgICAgICAgc2V0SWZyYW1lTG9hZGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcz9pZD0ke3BhcmFtcy52aWRlb2lkfSZwYXJ0PXNuaXBwZXQsY29udGVudERldGFpbHMma2V5PUFJemFTeUJTZHRMcmdBa1ZQb3RJalluQkdoeXozeFdwRm9qNmRiY2ApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuaXRlbXMgJiYgcmVzcG9uc2UuZGF0YS5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlkZW8gPSByZXNwb25zZS5kYXRhLml0ZW1zWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdmlkZW8uc25pcHBldC50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBmb3JtYXREdXJhdGlvbih2aWRlby5jb250ZW50RGV0YWlscy5kdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZGVvRHVyYXRpb24oZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHZpZGVvRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZGVvVGl0bGUodGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzIGRvIHbDrWRlbzpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy0xNCB3LWZ1bGwgaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuXCI+XHJcblxyXG4gICAgICAgICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJvdy1zcGFuLTEgcHgtMiBiZy1NZXZrZ3JlZW4gZmxleCBzcGFjZS14LTYgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICA8bWVudSBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhlcmNpY2lvc1wiPjxBcnJvd0xlZnQgY29sb3I9XCIjZGJiYzY1XCIgLz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L21lbnU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtNCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nLzQucG5nJyB3aWR0aD17NTB9IGhlaWdodD17NTB9IGFsdD1cIkNsaWVudCBJY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBWaWRlbyBQbGF5ZXIgU2VjdGlvbiAqL31cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3ctc3Bhbi0xMiBiZy1NZXZrLWRhcmtncmVlbiBvdmVyZmxvdy1hdXRvIHNjcm9sbGJhci10aGluIHNjcm9sbGJhci10aHVtYi1zbGF0ZS00MDAgc2Nyb2xsYmFyLXRyYWNrLXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImZyYW1lXCIgY2xhc3NOYW1lPXtpZnJhbWVMb2FkZWQgPyBcIm10LTEwIG1iLTEwIHctZnVsbCBoLWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTEwXCIgOiBcImhpZGRlblwifT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5b3V0dWJlLWNvbnRhaW5lciB3LWZ1bGwgbGc6dy0zLzUgaC1mdWxsIHJvdW5kZWQtbGcgcHgtNCBsZzpweC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxZb3VUdWJlIHZpZGVvSWQ9e3BhcmFtcy52aWRlb2lkfSBvblJlYWR5PXtvblJlYWR5fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1NZXZrZ3JlZW4gdGV4dC1zbGF0ZS01MDAgc2hhZG93LW1kIG15LTUgcC01IGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtTWV2a2dvbGRlblwiPnt2aWRlb1RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyB0ZXh0LU1ldmtnb2xkZW5cIj57dmlkZW9EdXJhdGlvbn08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFqdXN0ZSBkbyA8c21hbGw+IGNvbSBzY3JvbGxiYXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LU1ldmtsaWd0aCBwLTIgdGV4dC1sZWZ0IGgtNTYgdy1mdWxsIG1heC13LWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGwgb3ZlcmZsb3cteC1oaWRkZW4gc2Nyb2xsYmFyLXRoaW4gc2Nyb2xsYmFyLXRodW1iLWdyYXktNDAwIHNjcm9sbGJhci10cmFjay15ZWxsb3ctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZpZGVvRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBGb290ZXIgKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLU1ldmtncmVlbiB3LWZ1bGwgaC01MiB0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBkcm9wLXNoYWRvdy1sZyBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy80LnBuZycgd2lkdGg9ezcwfSBoZWlnaHQ9ezcwfSBhbHQ9XCJDbGllbnQgSWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRyb3Atc2hhZG93LWxnIHRleHQtNHhsIGZvbnQtdGhpbiB0ZXh0LU5ld1BhbGV0LXllbGxvd1wiPiBEZXNhZmlvIE1FVksgPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJBcnJvd0xlZnQiLCJSZWFjdCIsInVzZVJlZiIsIkJ1dHRvbiIsIkxpbmsiLCJZb3VUdWJlIiwiYXhpb3MiLCJIb21lIiwicGFyYW1zIiwiaWZyYW1lTG9hZGVkIiwic2V0SWZyYW1lTG9hZGVkIiwidXNlU3RhdGUiLCJ2aWRlb1RpdGxlIiwic2V0VmlkZW9UaXRsZSIsInZpZGVvRGVzY3JpcHRpb24iLCJzZXR2aWRlb0Rlc2NyaXB0aW9uIiwidmlkZW9EdXJhdGlvbiIsInNldFZpZGVvRHVyYXRpb24iLCJ5b3V0dWJlUGxheWVyUmVmIiwiZm9ybWF0RHVyYXRpb24iLCJkdXJhdGlvbiIsIm1hdGNoIiwiaG91cnMiLCJwYXJzZUludCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm9uUmVhZHkiLCJldmVudCIsInBsYXllciIsInRhcmdldCIsImlmcmFtZSIsImdldElmcmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJnZXQiLCJ2aWRlb2lkIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIml0ZW1zIiwibGVuZ3RoIiwidmlkZW8iLCJ0aXRsZSIsInNuaXBwZXQiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnREZXRhaWxzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibWVudSIsImhyZWYiLCJjb2xvciIsImRpdiIsInNyYyIsImFsdCIsInNlY3Rpb24iLCJpZCIsInZpZGVvSWQiLCJwIiwiaDQiLCJzbWFsbCIsImZvb3RlciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/cards/videos/[videoid]/page.tsx\n"));

/***/ })

});