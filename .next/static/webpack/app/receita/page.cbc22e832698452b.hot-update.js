"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/receita/page",{

/***/ "(app-pages-browser)/./public/components/ListaDetox/listaDetox.jsx":
/*!*****************************************************!*\
  !*** ./public/components/ListaDetox/listaDetox.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListaDetoxWrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/scroll-shadow/dist/chunk-NCVCYSZZ.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/chip/dist/chunk-YOZJQNDF.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/listbox/dist/chunk-XKPQ6AZ5.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/listbox/dist/chunk-VHPYXGWP.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/avatar/dist/chunk-XBMXQVV7.mjs\");\n/* harmony import */ var _listaDetoxWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listaDetoxWrapper */ \"(app-pages-browser)/./public/components/ListaDetox/listaDetoxWrapper.jsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./public/components/ListaDetox/data.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ListaDetoxWrapper() {\n    _s();\n    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(new Set([\n        \"1\"\n    ]));\n    const arrayValues = Array.from(values);\n    const topContent = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>{\n        if (!arrayValues.length) {\n            return null;\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.scroll_shadow_default, {\n            hideScrollBar: true,\n            className: \"w-full flex py-0.5 px-2 gap-1\",\n            orientation: \"horizontal\",\n            children: arrayValues.map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.chip_default, {\n                    children: _data__WEBPACK_IMPORTED_MODULE_3__.users.find((user)=>\"\".concat(user.id) === \"\".concat(value)).name\n                }, value, false, {\n                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this);\n    }, [\n        arrayValues.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listaDetoxWrapper__WEBPACK_IMPORTED_MODULE_2__.ListboxWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.listbox_default, {\n            topContent: \"Receitas Det\\xf3x\",\n            className: \"p-0 w-full h-full text-xl sm:text-2xl font-semibold text-left text-Mevkgolden mt-5 sm:mt-10 mb-5 sm:mb-10\",\n            defaultSelectedKeys: [\n                \"1\"\n            ],\n            items: _data__WEBPACK_IMPORTED_MODULE_3__.users,\n            label: \"Assigned to\",\n            selectionMode: \"multiple\",\n            onSelectionChange: setValues,\n            variant: \"flat\",\n            children: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.listbox_item_base_default, {\n                    textValue: item.name,\n                    className: \"w-full p-0 mt-2 sm:mt-3 transition duration-700 ease-in-out bg-transparent shadow-lg text-left transform hover:-translate-y-1 hover:scale-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"/receita/receitaAtual/\".concat(item.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-full h-full rounded-lg items-center bg-gradient-to-tr from-Mevk-darkgreen via-Mevkgreen to-emerald-50 p-1 sm:p-3 gap-3 sm:gap-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.avatar_default, {\n                                    alt: item.name,\n                                    className: \"flex-shrink-0\",\n                                    size: \"sm\",\n                                    src: item.avatar\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-lg sm:text-2xl font-semibold text-Mevkgolden drop-shadow-lg w-full break-words\",\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-thin text-sm sm:text-base text-Mevkligth break-words\",\n                                            children: item.preview\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                }, item.id, false, {\n                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Documents\\\\LUCAS\\\\NEXT PROJECTS\\\\MEKV\\\\PMEKV\\\\public\\\\components\\\\ListaDetox\\\\listaDetox.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ListaDetoxWrapper, \"AQOUdPFzofeq+GDxho8tJd5kdOs=\");\n_c = ListaDetoxWrapper;\nvar _c;\n$RefreshReg$(_c, \"ListaDetoxWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9jb21wb25lbnRzL0xpc3RhRGV0b3gvbGlzdGFEZXRveC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDMkQ7QUFDaEM7QUFDdEI7QUFDRjtBQUVkLFNBQVNTOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gscURBQWMsQ0FBQyxJQUFJYSxJQUFJO1FBQUM7S0FBSTtJQUV4RCxNQUFNQyxjQUFjQyxNQUFNQyxJQUFJLENBQUNOO0lBRS9CLE1BQU1PLGFBQWFqQixvREFBYSxDQUFDO1FBQy9CLElBQUksQ0FBQ2MsWUFBWUssTUFBTSxFQUFFO1lBQ3ZCLE9BQU87UUFDVDtRQUVBLHFCQUNFLDhEQUFDZixvRUFBWUE7WUFDWGdCLGFBQWE7WUFDYkMsV0FBVTtZQUNWQyxhQUFZO3NCQUVYUixZQUFZUyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ2hCLDhEQUFDckIsMkRBQUlBOzhCQUNGSSx3Q0FBS0EsQ0FBQ2tCLElBQUksQ0FBQyxDQUFDQyxPQUFTLEdBQVcsT0FBUkEsS0FBS0MsRUFBRSxNQUFPLEdBQVMsT0FBTkgsUUFBU0ksSUFBSTttQkFEOUNKOzs7Ozs7Ozs7O0lBTW5CLEdBQUc7UUFBQ1YsWUFBWUssTUFBTTtLQUFDO0lBRXZCLHFCQUNFLDhEQUFDYiw4REFBY0E7a0JBQ2IsNEVBQUNMLDhEQUFPQTtZQUNOZ0IsWUFBWTtZQUNaSSxXQUFVO1lBQ1ZRLHFCQUFxQjtnQkFBQzthQUFJO1lBQzFCQyxPQUFPdkIsd0NBQUtBO1lBQ1p3QixPQUFNO1lBQ05DLGVBQWM7WUFDZEMsbUJBQW1CdEI7WUFDbkJ1QixTQUFRO3NCQUVQLENBQUNDLHFCQUNBLDhEQUFDakMsd0VBQVdBO29CQUVWa0MsV0FBV0QsS0FBS1AsSUFBSTtvQkFDcEJQLFdBQVU7OEJBRVYsNEVBQUNiLGlEQUFJQTt3QkFBQzZCLE1BQU0seUJBQWlDLE9BQVJGLEtBQUtSLEVBQUU7a0NBQzFDLDRFQUFDVzs0QkFBSWpCLFdBQVU7OzhDQUNiLDhEQUFDaEIsNkRBQU1BO29DQUNMa0MsS0FBS0osS0FBS1AsSUFBSTtvQ0FDZFAsV0FBVTtvQ0FDVm1CLE1BQUs7b0NBQ0xDLEtBQUtOLEtBQUtPLE1BQU07Ozs7Ozs4Q0FFbEIsOERBQUNKO29DQUFJakIsV0FBVTs7c0RBQ2IsOERBQUNzQjs0Q0FBS3RCLFdBQVU7c0RBQ2JjLEtBQUtQLElBQUk7Ozs7OztzREFFWiw4REFBQ2U7NENBQUt0QixXQUFVO3NEQUNiYyxLQUFLUyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFqQmhCVCxLQUFLUixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUEyQnhCO0dBbEV3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9jb21wb25lbnRzL0xpc3RhRGV0b3gvbGlzdGFEZXRveC5qc3g/ZjIyYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0Ym94LCBMaXN0Ym94SXRlbSwgQ2hpcCwgU2Nyb2xsU2hhZG93LCBBdmF0YXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdGJveFdyYXBwZXIgfSBmcm9tIFwiLi9saXN0YURldG94V3JhcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VycyB9IGZyb20gXCIuL2RhdGFcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGFEZXRveFdyYXBwZXIoKSB7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBTZXQoW1wiMVwiXSkpO1xyXG5cclxuICBjb25zdCBhcnJheVZhbHVlcyA9IEFycmF5LmZyb20odmFsdWVzKTtcclxuXHJcbiAgY29uc3QgdG9wQ29udGVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFhcnJheVZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNjcm9sbFNoYWRvd1xyXG4gICAgICAgIGhpZGVTY3JvbGxCYXJcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBweS0wLjUgcHgtMiBnYXAtMVwiXHJcbiAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHthcnJheVZhbHVlcy5tYXAoKHZhbHVlKSA9PiAoXHJcbiAgICAgICAgICA8Q2hpcCBrZXk9e3ZhbHVlfT5cclxuICAgICAgICAgICAge3VzZXJzLmZpbmQoKHVzZXIpID0+IGAke3VzZXIuaWR9YCA9PT0gYCR7dmFsdWV9YCkubmFtZX1cclxuICAgICAgICAgIDwvQ2hpcD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TY3JvbGxTaGFkb3c+XHJcbiAgICApO1xyXG4gIH0sIFthcnJheVZhbHVlcy5sZW5ndGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0Ym94V3JhcHBlcj5cclxuICAgICAgPExpc3Rib3hcclxuICAgICAgICB0b3BDb250ZW50PXtcIlJlY2VpdGFzIERldMOzeFwifVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInAtMCB3LWZ1bGwgaC1mdWxsIHRleHQteGwgc206dGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWxlZnQgdGV4dC1NZXZrZ29sZGVuIG10LTUgc206bXQtMTAgbWItNSBzbTptYi0xMFwiXHJcbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W1wiMVwiXX1cclxuICAgICAgICBpdGVtcz17dXNlcnN9XHJcbiAgICAgICAgbGFiZWw9XCJBc3NpZ25lZCB0b1wiXHJcbiAgICAgICAgc2VsZWN0aW9uTW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17c2V0VmFsdWVzfVxyXG4gICAgICAgIHZhcmlhbnQ9XCJmbGF0XCJcclxuICAgICAgPlxyXG4gICAgICAgIHsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPExpc3Rib3hJdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgdGV4dFZhbHVlPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTAgbXQtMiBzbTptdC0zIHRyYW5zaXRpb24gZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0IGJnLXRyYW5zcGFyZW50IHNoYWRvdy1sZyB0ZXh0LWxlZnQgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOnNjYWxlLTEwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmVjZWl0YS9yZWNlaXRhQXR1YWwvJHtpdGVtLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtbGcgaXRlbXMtY2VudGVyIGJnLWdyYWRpZW50LXRvLXRyIGZyb20tTWV2ay1kYXJrZ3JlZW4gdmlhLU1ldmtncmVlbiB0by1lbWVyYWxkLTUwIHAtMSBzbTpwLTMgZ2FwLTMgc206Z2FwLTVcIj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1NZXZrZ29sZGVuIGRyb3Atc2hhZG93LWxnIHctZnVsbCBicmVhay13b3Jkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC10aGluIHRleHQtc20gc206dGV4dC1iYXNlIHRleHQtTWV2a2xpZ3RoIGJyZWFrLXdvcmRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJldmlld31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTGlzdGJveEl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9MaXN0Ym94PlxyXG4gICAgPC9MaXN0Ym94V3JhcHBlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpc3Rib3giLCJMaXN0Ym94SXRlbSIsIkNoaXAiLCJTY3JvbGxTaGFkb3ciLCJBdmF0YXIiLCJMaXN0Ym94V3JhcHBlciIsInVzZXJzIiwiTGluayIsIkxpc3RhRGV0b3hXcmFwcGVyIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJTZXQiLCJhcnJheVZhbHVlcyIsIkFycmF5IiwiZnJvbSIsInRvcENvbnRlbnQiLCJ1c2VNZW1vIiwibGVuZ3RoIiwiaGlkZVNjcm9sbEJhciIsImNsYXNzTmFtZSIsIm9yaWVudGF0aW9uIiwibWFwIiwidmFsdWUiLCJmaW5kIiwidXNlciIsImlkIiwibmFtZSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJpdGVtcyIsImxhYmVsIiwic2VsZWN0aW9uTW9kZSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwidmFyaWFudCIsIml0ZW0iLCJ0ZXh0VmFsdWUiLCJocmVmIiwiZGl2IiwiYWx0Iiwic2l6ZSIsInNyYyIsImF2YXRhciIsInNwYW4iLCJwcmV2aWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/components/ListaDetox/listaDetox.jsx\n"));

/***/ })

});