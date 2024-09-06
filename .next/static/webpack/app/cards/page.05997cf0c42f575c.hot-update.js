"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cards/page",{

/***/ "(app-pages-browser)/./src/app/cards/page.tsx":
/*!********************************!*\
  !*** ./src/app/cards/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-left.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-NXTXE2B3.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _public_components_Cards_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/components/Cards/card */ \"(app-pages-browser)/./public/components/Cards/card.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const items = [\n        {\n            key: \"0\",\n            videoId: \"RnzW20zSsaA\"\n        },\n        {\n            key: \"1\",\n            videoId: \"r1HjX2ywkzI\"\n        },\n        {\n            key: \"2\",\n            videoId: \"9APT2ZhfWBo\"\n        },\n        {\n            key: \"3\",\n            videoId: \"eS8UXsKru2o\"\n        },\n        {\n            key: \"4\",\n            videoId: \"9pe4hpJGyP8\"\n        },\n        {\n            key: \"5\",\n            videoId: \"NkYv6kqL-3k\"\n        },\n        {\n            key: \"6\",\n            videoId: \"CFa1D5KrYsc\"\n        },\n        {\n            key: \"7\",\n            videoId: \"dxI_z2h42B8\"\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchVideosData = async ()=>{\n            try {\n                const videoDataPromises = items.map(async (item)=>{\n                    const videoId = item.videoId;\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://www.googleapis.com/youtube/v3/videos?id=\".concat(videoId, \"&part=snippet,contentDetails&key=AIzaSyBSdtLrgAkVPotIjYnBGhyz3xWpFoj6dbc\"));\n                    return response.data.items[0];\n                });\n                const videosData = await Promise.all(videoDataPromises);\n                setVideos(videosData);\n            } catch (error) {\n                console.error(\"Erro ao buscar dados dos v\\xeddeos:\", error);\n            }\n        };\n        fetchVideosData();\n    }, []);\n    const formatDuration = (duration)=>{\n        const match = duration.match(/PT(\\d+H)?(\\d+M)?(\\d+S)?/);\n        const hours = parseInt(match[1]) || 0;\n        const minutes = parseInt(match[2]) || 0;\n        const seconds = parseInt(match[3]) || 0;\n        return \"\".concat(hours.toString().padStart(2, \"0\"), \":\").concat(minutes.toString().padStart(2, \"0\"), \":\").concat(seconds.toString().padStart(2, \"0\"));\n    };\n    const renderVideos = ()=>{\n        return videos.map((video, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: \"/cards/videos/\".concat(video.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Cards_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        videoTitle: video.snippet.title,\n                        videoDescription: video.snippet.description,\n                        tumb: video.snippet.thumbnails.high.url,\n                        duration: formatDuration(video.contentDetails.duration)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full h-screen overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"row-span-1 h-[10vh] relative px-2 bg-Mevkgreen flex items-center space-x-5 shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"menu\", {\n                        className: \"flex-2 flex items-center z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.button_default, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/exercicios\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    color: \"#dbbc65\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 50\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/4.png\",\n                            width: 50,\n                            height: 50,\n                            alt: \"Client Icon\",\n                            className: \"max-w-full h-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-2 flex z-10\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-full bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 pb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\",\n                        children: renderVideos()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"bg-Mevkgreen w-full h-52 text-center flex-col flex items-center justify-center drop-shadow-lg gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/4.png\",\n                                width: 70,\n                                height: 70,\n                                alt: \"Client Icon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"drop-shadow-lg text-4xl font-thin text-NewPalet-yellow\",\n                                children: \" Desafio MEVK \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\cards\\\\page.tsx\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"39g9r2hk3cJXA16k+db4Z3Rqykw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2FyZHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2I7QUFDVTtBQUNFO0FBQ2Q7QUFDSDtBQUNvQztBQUUvQyxTQUFTUTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFdkMsTUFBTVUsUUFBUTtRQUNWO1lBQ0lDLEtBQUs7WUFDTEMsU0FBUztRQUNiO1FBQ0E7WUFDSUQsS0FBSztZQUNMQyxTQUFTO1FBQ2I7UUFDQTtZQUNJRCxLQUFLO1lBQ0xDLFNBQVM7UUFDYjtRQUNBO1lBQ0lELEtBQUs7WUFDTEMsU0FBUztRQUNiO1FBQ0E7WUFDSUQsS0FBSztZQUNMQyxTQUFTO1FBQ2I7UUFDQTtZQUNJRCxLQUFLO1lBQ0xDLFNBQVM7UUFDYjtRQUNBO1lBQ0lELEtBQUs7WUFDTEMsU0FBUztRQUNiO1FBQ0E7WUFDSUQsS0FBSztZQUNMQyxTQUFTO1FBQ2I7S0FDSDtJQUVEYixnREFBU0EsQ0FBQztRQUNOLE1BQU1jLGtCQUFrQjtZQUNwQixJQUFJO2dCQUNBLE1BQU1DLG9CQUFvQkosTUFBTUssR0FBRyxDQUFDLE9BQU9DO29CQUN2QyxNQUFNSixVQUFVSSxLQUFLSixPQUFPO29CQUM1QixNQUFNSyxXQUFXLE1BQU1aLDZDQUFLQSxDQUFDYSxHQUFHLENBQzVCLG1EQUEyRCxPQUFSTixTQUFRO29CQUUvRCxPQUFPSyxTQUFTRSxJQUFJLENBQUNULEtBQUssQ0FBQyxFQUFFO2dCQUNqQztnQkFFQSxNQUFNVSxhQUFrQixNQUFNQyxRQUFRQyxHQUFHLENBQUNSO2dCQUMxQ0wsVUFBVVc7WUFDZCxFQUFFLE9BQU9HLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQyx1Q0FBb0NBO1lBQ3REO1FBQ0o7UUFFQVY7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNWSxpQkFBaUIsQ0FBQ0M7UUFDcEIsTUFBTUMsUUFBUUQsU0FBU0MsS0FBSyxDQUFDO1FBQzdCLE1BQU1DLFFBQVFDLFNBQVNGLEtBQUssQ0FBQyxFQUFFLEtBQUs7UUFDcEMsTUFBTUcsVUFBVUQsU0FBU0YsS0FBSyxDQUFDLEVBQUUsS0FBSztRQUN0QyxNQUFNSSxVQUFVRixTQUFTRixLQUFLLENBQUMsRUFBRSxLQUFLO1FBRXRDLE9BQU8sR0FBd0NHLE9BQXJDRixNQUFNSSxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLE1BQUssS0FBMENGLE9BQXZDRCxRQUFRRSxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLE1BQUssS0FBdUMsT0FBcENGLFFBQVFDLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7SUFDekg7SUFFQSxNQUFNQyxlQUFlO1FBQ2pCLE9BQU8xQixPQUFPTyxHQUFHLENBQUMsQ0FBQ29CLE9BQVdDLHNCQUMxQiw4REFBQ2hDLGlEQUFJQTtnQkFBYWlDLE1BQU0saUJBQTBCLE9BQVRGLE1BQU1HLEVBQUU7MEJBQzdDLDRFQUFDQzs4QkFDRyw0RUFBQ2pDLHFFQUFTQTt3QkFDTmtDLFlBQVlMLE1BQU1NLE9BQU8sQ0FBQ0MsS0FBSzt3QkFDL0JDLGtCQUFrQlIsTUFBTU0sT0FBTyxDQUFDRyxXQUFXO3dCQUMzQ0MsTUFBTVYsTUFBTU0sT0FBTyxDQUFDSyxVQUFVLENBQUNDLElBQUksQ0FBQ0MsR0FBRzt3QkFDdkN0QixVQUFVRCxlQUFlVSxNQUFNYyxjQUFjLENBQUN2QixRQUFROzs7Ozs7Ozs7OztlQU52RFU7Ozs7O0lBV25CO0lBRUEscUJBQ0ksOERBQUNjO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDQztnQkFBT0QsV0FBVTs7a0NBQ2QsOERBQUNFO3dCQUFLRixXQUFVO2tDQUNaLDRFQUFDaEQsNkRBQU1BO3NDQUNILDRFQUFDQyxpREFBSUE7Z0NBQUNpQyxNQUFLOzBDQUFjLDRFQUFDbkMscUZBQVNBO29DQUFDb0QsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtsRCw4REFBQ2Y7d0JBQUlZLFdBQVU7a0NBQ1gsNEVBQUNsRCxrREFBS0E7NEJBQUNzRCxLQUFJOzRCQUFTQyxPQUFPOzRCQUFJQyxRQUFROzRCQUFJQyxLQUFJOzRCQUFjUCxXQUFVOzs7Ozs7Ozs7OztrQ0FHM0UsOERBQUNaO3dCQUFJWSxXQUFVOzs7Ozs7Ozs7Ozs7MEJBR25CLDhEQUFDUTtnQkFBUVIsV0FBVTs7a0NBQ2YsOERBQUNaO3dCQUFJWSxXQUFVO2tDQUNWakI7Ozs7OztrQ0FFTCw4REFBQzBCO3dCQUFPVCxXQUFVOzswQ0FDZCw4REFBQ2xELGtEQUFLQTtnQ0FBQ3NELEtBQUk7Z0NBQVNDLE9BQU87Z0NBQUlDLFFBQVE7Z0NBQUlDLEtBQUk7Ozs7OzswQ0FDL0MsOERBQUNHO2dDQUFHVixXQUFVOzBDQUF5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNGO0dBL0d3QjVDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY2FyZHMvcGFnZS50c3g/YjEzYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgQXJyb3dMZWZ0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBCdWlsZENhcmQgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9jb21wb25lbnRzL0NhcmRzL2NhcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbdmlkZW9zLCBzZXRWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiBcIjBcIixcclxuICAgICAgICAgICAgdmlkZW9JZDogXCJSbnpXMjB6U3NhQVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogXCIxXCIsXHJcbiAgICAgICAgICAgIHZpZGVvSWQ6IFwicjFIalgyeXdreklcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6IFwiMlwiLFxyXG4gICAgICAgICAgICB2aWRlb0lkOiBcIjlBUFQyWmhmV0JvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiBcIjNcIixcclxuICAgICAgICAgICAgdmlkZW9JZDogXCJlUzhVWHNLcnUyb1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogXCI0XCIsXHJcbiAgICAgICAgICAgIHZpZGVvSWQ6IFwiOXBlNGhwSkd5UDhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6IFwiNVwiLFxyXG4gICAgICAgICAgICB2aWRlb0lkOiBcIk5rWXY2a3FMLTNrXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiBcIjZcIixcclxuICAgICAgICAgICAgdmlkZW9JZDogXCJDRmExRDVLcllzY1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogXCI3XCIsXHJcbiAgICAgICAgICAgIHZpZGVvSWQ6IFwiZHhJX3oyaDQyQjhcIlxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hWaWRlb3NEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9EYXRhUHJvbWlzZXMgPSBpdGVtcy5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gaXRlbS52aWRlb0lkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3M/aWQ9JHt2aWRlb0lkfSZwYXJ0PXNuaXBwZXQsY29udGVudERldGFpbHMma2V5PUFJemFTeUJTZHRMcmdBa1ZQb3RJalluQkdoeXozeFdwRm9qNmRiY2BcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLml0ZW1zWzBdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9zRGF0YTogYW55ID0gYXdhaXQgUHJvbWlzZS5hbGwodmlkZW9EYXRhUHJvbWlzZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmlkZW9zKHZpZGVvc0RhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYnVzY2FyIGRhZG9zIGRvcyB2w61kZW9zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaFZpZGVvc0RhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXREdXJhdGlvbiA9IChkdXJhdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBkdXJhdGlvbi5tYXRjaCgvUFQoXFxkK0gpPyhcXGQrTSk/KFxcZCtTKT8vKTtcclxuICAgICAgICBjb25zdCBob3VycyA9IHBhcnNlSW50KG1hdGNoWzFdKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZUludChtYXRjaFsyXSkgfHwgMDtcclxuICAgICAgICBjb25zdCBzZWNvbmRzID0gcGFyc2VJbnQobWF0Y2hbM10pIHx8IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBgJHtob3Vycy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfToke3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVmlkZW9zID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2aWRlb3MubWFwKCh2aWRlbzphbnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17aW5kZXh9IGhyZWY9e2AvY2FyZHMvdmlkZW9zLyR7dmlkZW8uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWlsZENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9UaXRsZT17dmlkZW8uc25pcHBldC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9EZXNjcmlwdGlvbj17dmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHVtYj17dmlkZW8uc25pcHBldC50aHVtYm5haWxzLmhpZ2gudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17Zm9ybWF0RHVyYXRpb24odmlkZW8uY29udGVudERldGFpbHMuZHVyYXRpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyb3ctc3Bhbi0xIGgtWzEwdmhdIHJlbGF0aXZlIHB4LTIgYmctTWV2a2dyZWVuIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgIDxtZW51IGNsYXNzTmFtZT1cImZsZXgtMiBmbGV4IGl0ZW1zLWNlbnRlciB6LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leGVyY2ljaW9zXCI+PEFycm93TGVmdCBjb2xvcj1cIiNkYmJjNjVcIiAvPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbWVudT5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQ2VudHJhbGl6YXIgYSBpbWFnZW0gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvNC5wbmcnIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PVwiQ2xpZW50IEljb25cIiBjbGFzc05hbWU9XCJtYXgtdy1mdWxsIGgtYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMiBmbGV4IHotMTBcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJnLU1ldmstZGFya2dyZWVuIG92ZXJmbG93LWF1dG8gc2Nyb2xsYmFyLXRoaW4gc2Nyb2xsYmFyLXRodW1iLXNsYXRlLTQwMCBzY3JvbGxiYXItdHJhY2stc2xhdGUtMjAwIHBiLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlclZpZGVvcygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLU1ldmtncmVlbiB3LWZ1bGwgaC01MiB0ZXh0LWNlbnRlciBmbGV4LWNvbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBkcm9wLXNoYWRvdy1sZyBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy80LnBuZycgd2lkdGg9ezcwfSBoZWlnaHQ9ezcwfSBhbHQ9XCJDbGllbnQgSWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRyb3Atc2hhZG93LWxnIHRleHQtNHhsIGZvbnQtdGhpbiB0ZXh0LU5ld1BhbGV0LXllbGxvd1wiPiBEZXNhZmlvIE1FVksgPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkFycm93TGVmdCIsIkJ1dHRvbiIsIkxpbmsiLCJheGlvcyIsIkJ1aWxkQ2FyZCIsIkhvbWUiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJpdGVtcyIsImtleSIsInZpZGVvSWQiLCJmZXRjaFZpZGVvc0RhdGEiLCJ2aWRlb0RhdGFQcm9taXNlcyIsIm1hcCIsIml0ZW0iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJ2aWRlb3NEYXRhIiwiUHJvbWlzZSIsImFsbCIsImVycm9yIiwiY29uc29sZSIsImZvcm1hdER1cmF0aW9uIiwiZHVyYXRpb24iLCJtYXRjaCIsImhvdXJzIiwicGFyc2VJbnQiLCJtaW51dGVzIiwic2Vjb25kcyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJyZW5kZXJWaWRlb3MiLCJ2aWRlbyIsImluZGV4IiwiaHJlZiIsImlkIiwiZGl2IiwidmlkZW9UaXRsZSIsInNuaXBwZXQiLCJ0aXRsZSIsInZpZGVvRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInR1bWIiLCJ0aHVtYm5haWxzIiwiaGlnaCIsInVybCIsImNvbnRlbnREZXRhaWxzIiwibWFpbiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm1lbnUiLCJjb2xvciIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic2VjdGlvbiIsImZvb3RlciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/cards/page.tsx\n"));

/***/ })

});