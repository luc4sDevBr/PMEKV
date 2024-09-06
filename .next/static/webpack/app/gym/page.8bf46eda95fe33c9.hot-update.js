"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/gym/page",{

/***/ "(app-pages-browser)/./src/app/gym/page.tsx":
/*!******************************!*\
  !*** ./src/app/gym/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-left.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-NXTXE2B3.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _public_components_Cards_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/components/Cards/card */ \"(app-pages-browser)/./public/components/Cards/card.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const items = [\n        {\n            key: \"0\",\n            videoId: \"50AkPBZwACQ\"\n        },\n        {\n            key: \"1\",\n            videoId: \"NxSuojHZa8k\"\n        },\n        {\n            key: \"2\",\n            videoId: \"kYkOwbzzzxk\"\n        },\n        {\n            key: \"3\",\n            videoId: \"vs95I5KqBGE\"\n        },\n        {\n            key: \"4\",\n            videoId: \"J0adFq97U_s\"\n        },\n        {\n            key: \"5\",\n            videoId: \"m9iBEwaMenU\"\n        },\n        {\n            key: \"6\",\n            videoId: \"E-n0A4txXf4\"\n        },\n        {\n            key: \"7\",\n            videoId: \"dxI_z2h42B8\"\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchVideosData = async ()=>{\n            try {\n                const videoDataPromises = items.map(async (item)=>{\n                    const videoId = item.videoId;\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://www.googleapis.com/youtube/v3/videos?id=\".concat(videoId, \"&part=snippet,contentDetails&key=AIzaSyBSdtLrgAkVPotIjYnBGhyz3xWpFoj6dbc\"));\n                    return response.data.items[0];\n                });\n                const videosData = await Promise.all(videoDataPromises);\n                setVideos(videosData);\n            } catch (error) {\n                console.error(\"Erro ao buscar dados dos v\\xeddeos:\", error);\n            }\n        };\n        fetchVideosData();\n    }, []);\n    const formatDuration = (duration)=>{\n        const match = duration.match(/PT(\\d+H)?(\\d+M)?(\\d+S)?/);\n        const hours = parseInt(match[1]) || 0;\n        const minutes = parseInt(match[2]) || 0;\n        const seconds = parseInt(match[3]) || 0;\n        return \"\".concat(hours.toString().padStart(2, \"0\"), \":\").concat(minutes.toString().padStart(2, \"0\"), \":\").concat(seconds.toString().padStart(2, \"0\"));\n    };\n    const renderVideos = ()=>{\n        return videos.map((video, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: \"/cards/videos/\".concat(video.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Cards_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        videoTitle: video.snippet.title,\n                        videoDescription: video.snippet.description,\n                        tumb: video.snippet.thumbnails.high.url,\n                        duration: formatDuration(video.contentDetails.duration)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full h-screen overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"row-span-1 h-[10vh] relative px-2 bg-Mevkgreen flex items-center space-x-5 shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"menu\", {\n                        className: \"flex-2 flex items-center z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.button_default, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/exercicios\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    color: \"#dbbc65\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 50\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/4.png\",\n                            width: 50,\n                            height: 50,\n                            alt: \"Client Icon\",\n                            className: \"max-w-full h-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-2 flex z-10\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-full bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 pb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\",\n                        children: renderVideos()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"bg-Mevkgreen w-full h-52 text-center flex-col flex items-center justify-center drop-shadow-lg gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/4.png\",\n                                width: 70,\n                                height: 70,\n                                alt: \"Client Icon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"drop-shadow-lg text-4xl font-thin text-NewPalet-yellow\",\n                                children: \" Desafio MEVK \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\src\\\\app\\\\gym\\\\page.tsx\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"39g9r2hk3cJXA16k+db4Z3Rqykw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ3ltL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNiO0FBQ1U7QUFDRTtBQUNkO0FBQ0g7QUFDb0M7QUFFL0MsU0FBU1E7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDLE1BQU1VLFFBQVE7UUFDVjtZQUNJQyxLQUFLO1lBQ0xDLFNBQVM7UUFDYjtRQUNBO1lBQ0lELEtBQUs7WUFDTEMsU0FBUztRQUNiO1FBQ0E7WUFDSUQsS0FBSztZQUNMQyxTQUFTO1FBQ2I7UUFDQTtZQUNJRCxLQUFLO1lBQ0xDLFNBQVM7UUFDYjtRQUNBO1lBQ0lELEtBQUs7WUFDTEMsU0FBUztRQUNiO1FBQ0E7WUFDSUQsS0FBSztZQUNMQyxTQUFTO1FBQ2I7UUFDQTtZQUNJRCxLQUFLO1lBQ0xDLFNBQVM7UUFDYjtRQUNBO1lBQ0lELEtBQUs7WUFDTEMsU0FBUztRQUNiO0tBQ0g7SUFFRGIsZ0RBQVNBLENBQUM7UUFDTixNQUFNYyxrQkFBa0I7WUFDcEIsSUFBSTtnQkFDQSxNQUFNQyxvQkFBb0JKLE1BQU1LLEdBQUcsQ0FBQyxPQUFPQztvQkFDdkMsTUFBTUosVUFBVUksS0FBS0osT0FBTztvQkFDNUIsTUFBTUssV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsR0FBRyxDQUM1QixtREFBMkQsT0FBUk4sU0FBUTtvQkFFL0QsT0FBT0ssU0FBU0UsSUFBSSxDQUFDVCxLQUFLLENBQUMsRUFBRTtnQkFDakM7Z0JBRUEsTUFBTVUsYUFBa0IsTUFBTUMsUUFBUUMsR0FBRyxDQUFDUjtnQkFDMUNMLFVBQVVXO1lBQ2QsRUFBRSxPQUFPRyxPQUFPO2dCQUNaQyxRQUFRRCxLQUFLLENBQUMsdUNBQW9DQTtZQUN0RDtRQUNKO1FBRUFWO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTVksaUJBQWlCLENBQUNDO1FBQ3BCLE1BQU1DLFFBQVFELFNBQVNDLEtBQUssQ0FBQztRQUM3QixNQUFNQyxRQUFRQyxTQUFTRixLQUFLLENBQUMsRUFBRSxLQUFLO1FBQ3BDLE1BQU1HLFVBQVVELFNBQVNGLEtBQUssQ0FBQyxFQUFFLEtBQUs7UUFDdEMsTUFBTUksVUFBVUYsU0FBU0YsS0FBSyxDQUFDLEVBQUUsS0FBSztRQUV0QyxPQUFPLEdBQXdDRyxPQUFyQ0YsTUFBTUksUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRyxNQUFLLEtBQTBDRixPQUF2Q0QsUUFBUUUsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRyxNQUFLLEtBQXVDLE9BQXBDRixRQUFRQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO0lBQ3pIO0lBRUEsTUFBTUMsZUFBZTtRQUNqQixPQUFPMUIsT0FBT08sR0FBRyxDQUFDLENBQUNvQixPQUFXQyxzQkFDMUIsOERBQUNoQyxpREFBSUE7Z0JBQWFpQyxNQUFNLGlCQUEwQixPQUFURixNQUFNRyxFQUFFOzBCQUM3Qyw0RUFBQ0M7OEJBQ0csNEVBQUNqQyxxRUFBU0E7d0JBQ05rQyxZQUFZTCxNQUFNTSxPQUFPLENBQUNDLEtBQUs7d0JBQy9CQyxrQkFBa0JSLE1BQU1NLE9BQU8sQ0FBQ0csV0FBVzt3QkFDM0NDLE1BQU1WLE1BQU1NLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDQyxJQUFJLENBQUNDLEdBQUc7d0JBQ3ZDdEIsVUFBVUQsZUFBZVUsTUFBTWMsY0FBYyxDQUFDdkIsUUFBUTs7Ozs7Ozs7Ozs7ZUFOdkRVOzs7OztJQVduQjtJQUVBLHFCQUNJLDhEQUFDYztRQUFLQyxXQUFVOzswQkFDWiw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNkLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FDWiw0RUFBQ2hELDZEQUFNQTtzQ0FDSCw0RUFBQ0MsaURBQUlBO2dDQUFDaUMsTUFBSzswQ0FBYyw0RUFBQ25DLHFGQUFTQTtvQ0FBQ29ELE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLbEQsOERBQUNmO3dCQUFJWSxXQUFVO2tDQUNYLDRFQUFDbEQsa0RBQUtBOzRCQUFDc0QsS0FBSTs0QkFBU0MsT0FBTzs0QkFBSUMsUUFBUTs0QkFBSUMsS0FBSTs0QkFBY1AsV0FBVTs7Ozs7Ozs7Ozs7a0NBRzNFLDhEQUFDWjt3QkFBSVksV0FBVTs7Ozs7Ozs7Ozs7OzBCQUduQiw4REFBQ1E7Z0JBQVFSLFdBQVU7O2tDQUNmLDhEQUFDWjt3QkFBSVksV0FBVTtrQ0FDVmpCOzs7Ozs7a0NBRUwsOERBQUMwQjt3QkFBT1QsV0FBVTs7MENBQ2QsOERBQUNsRCxrREFBS0E7Z0NBQUNzRCxLQUFJO2dDQUFTQyxPQUFPO2dDQUFJQyxRQUFRO2dDQUFJQyxLQUFJOzs7Ozs7MENBQy9DLDhEQUFDRztnQ0FBR1YsV0FBVTswQ0FBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRjtHQS9Hd0I1QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2d5bS9wYWdlLnRzeD9hMjg4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBBcnJvd0xlZnQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEJ1aWxkQ2FyZCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2NvbXBvbmVudHMvQ2FyZHMvY2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6IFwiMFwiLFxyXG4gICAgICAgICAgICB2aWRlb0lkOiBcIjUwQWtQQlp3QUNRXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiBcIjFcIixcclxuICAgICAgICAgICAgdmlkZW9JZDogXCJOeFN1b2pIWmE4a1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogXCIyXCIsXHJcbiAgICAgICAgICAgIHZpZGVvSWQ6IFwia1lrT3dienp6eGtcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6IFwiM1wiLFxyXG4gICAgICAgICAgICB2aWRlb0lkOiBcInZzOTVJNUtxQkdFXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiBcIjRcIixcclxuICAgICAgICAgICAgdmlkZW9JZDogXCJKMGFkRnE5N1Vfc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogXCI1XCIsXHJcbiAgICAgICAgICAgIHZpZGVvSWQ6IFwibTlpQkV3YU1lblVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6IFwiNlwiLFxyXG4gICAgICAgICAgICB2aWRlb0lkOiBcIkUtbjBBNHR4WGY0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiBcIjdcIixcclxuICAgICAgICAgICAgdmlkZW9JZDogXCJkeElfejJoNDJCOFwiXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaFZpZGVvc0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0RhdGFQcm9taXNlcyA9IGl0ZW1zLm1hcChhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSBpdGVtLnZpZGVvSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcz9pZD0ke3ZpZGVvSWR9JnBhcnQ9c25pcHBldCxjb250ZW50RGV0YWlscyZrZXk9QUl6YVN5QlNkdExyZ0FrVlBvdElqWW5CR2h5ejN4V3BGb2o2ZGJjYFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuaXRlbXNbMF07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb3NEYXRhOiBhbnkgPSBhd2FpdCBQcm9taXNlLmFsbCh2aWRlb0RhdGFQcm9taXNlcyk7XHJcbiAgICAgICAgICAgICAgICBzZXRWaWRlb3ModmlkZW9zRGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBidXNjYXIgZGFkb3MgZG9zIHbDrWRlb3M6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoVmlkZW9zRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdER1cmF0aW9uID0gKGR1cmF0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IGR1cmF0aW9uLm1hdGNoKC9QVChcXGQrSCk/KFxcZCtNKT8oXFxkK1MpPy8pO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzID0gcGFyc2VJbnQobWF0Y2hbMV0pIHx8IDA7XHJcbiAgICAgICAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KG1hdGNoWzJdKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBwYXJzZUludChtYXRjaFszXSkgfHwgMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGAke2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfToke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJWaWRlb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZpZGVvcy5tYXAoKHZpZGVvOmFueSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gaHJlZj17YC9jYXJkcy92aWRlb3MvJHt2aWRlby5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1aWxkQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1RpdGxlPXt2aWRlby5zbmlwcGV0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0Rlc2NyaXB0aW9uPXt2aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0dW1iPXt2aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuaGlnaC51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXtmb3JtYXREdXJhdGlvbih2aWRlby5jb250ZW50RGV0YWlscy5kdXJhdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJvdy1zcGFuLTEgaC1bMTB2aF0gcmVsYXRpdmUgcHgtMiBiZy1NZXZrZ3JlZW4gZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC01IHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPG1lbnUgY2xhc3NOYW1lPVwiZmxleC0yIGZsZXggaXRlbXMtY2VudGVyIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4ZXJjaWNpb3NcIj48QXJyb3dMZWZ0IGNvbG9yPVwiI2RiYmM2NVwiIC8+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9tZW51PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBDZW50cmFsaXphciBhIGltYWdlbSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy80LnBuZycgd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJDbGllbnQgSWNvblwiIGNsYXNzTmFtZT1cIm1heC13LWZ1bGwgaC1hdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0yIGZsZXggei0xMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctTWV2ay1kYXJrZ3JlZW4gb3ZlcmZsb3ctYXV0byBzY3JvbGxiYXItdGhpbiBzY3JvbGxiYXItdGh1bWItc2xhdGUtNDAwIHNjcm9sbGJhci10cmFjay1zbGF0ZS0yMDAgcGItMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyVmlkZW9zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctTWV2a2dyZWVuIHctZnVsbCBoLTUyIHRleHQtY2VudGVyIGZsZXgtY29sIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGRyb3Atc2hhZG93LWxnIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nLzQucG5nJyB3aWR0aD17NzB9IGhlaWdodD17NzB9IGFsdD1cIkNsaWVudCBJY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZHJvcC1zaGFkb3ctbGcgdGV4dC00eGwgZm9udC10aGluIHRleHQtTmV3UGFsZXQteWVsbG93XCI+IERlc2FmaW8gTUVWSyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiQXJyb3dMZWZ0IiwiQnV0dG9uIiwiTGluayIsImF4aW9zIiwiQnVpbGRDYXJkIiwiSG9tZSIsInZpZGVvcyIsInNldFZpZGVvcyIsIml0ZW1zIiwia2V5IiwidmlkZW9JZCIsImZldGNoVmlkZW9zRGF0YSIsInZpZGVvRGF0YVByb21pc2VzIiwibWFwIiwiaXRlbSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsInZpZGVvc0RhdGEiLCJQcm9taXNlIiwiYWxsIiwiZXJyb3IiLCJjb25zb2xlIiwiZm9ybWF0RHVyYXRpb24iLCJkdXJhdGlvbiIsIm1hdGNoIiwiaG91cnMiLCJwYXJzZUludCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInJlbmRlclZpZGVvcyIsInZpZGVvIiwiaW5kZXgiLCJocmVmIiwiaWQiLCJkaXYiLCJ2aWRlb1RpdGxlIiwic25pcHBldCIsInRpdGxlIiwidmlkZW9EZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwidHVtYiIsInRodW1ibmFpbHMiLCJoaWdoIiwidXJsIiwiY29udGVudERldGFpbHMiLCJtYWluIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibWVudSIsImNvbG9yIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzZWN0aW9uIiwiZm9vdGVyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/gym/page.tsx\n"));

/***/ })

});