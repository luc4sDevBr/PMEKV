"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/inicio/page",{

/***/ "(app-pages-browser)/./public/components/TextBox/textbox.js":
/*!**********************************************!*\
  !*** ./public/components/TextBox/textbox.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BuildTextBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction BuildTextBox(param) {\n    let { content, titleONTENT } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-Mevkgreen flex flex-col items-center  gap-5 w-full h-auto  p-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-col items-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-5xl p-4 rounded-3xl bg-gradient-to-tr from-Mevkgolden via-yellow-200 to-yellow-900 opacity-75 text-me font-semibold shadow-md text-Mevkgreen m-7\",\n                    children: titleONTENT\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\Documentos\\\\Projects\\\\nutri-smart\\\\nutri-smart\\\\public\\\\components\\\\TextBox\\\\textbox.js\",\n                    lineNumber: 6,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\Documentos\\\\Projects\\\\nutri-smart\\\\nutri-smart\\\\public\\\\components\\\\TextBox\\\\textbox.js\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, this),\n            content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-Mevkgolden  text-justify text-4xl\",\n                    children: item\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\Documentos\\\\Projects\\\\nutri-smart\\\\nutri-smart\\\\public\\\\components\\\\TextBox\\\\textbox.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\Documentos\\\\Projects\\\\nutri-smart\\\\nutri-smart\\\\public\\\\components\\\\TextBox\\\\textbox.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, this);\n}\n_c = BuildTextBox;\n;\nvar _c;\n$RefreshReg$(_c, \"BuildTextBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9jb21wb25lbnRzL1RleHRCb3gvdGV4dGJveC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNYLFNBQVNDLGFBQWEsS0FBd0I7UUFBeEIsRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUUsR0FBeEI7SUFDakMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQ1RGOzs7Ozs7Ozs7OztZQUlSRCxRQUFRSyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDQztvQkFBaUJMLFdBQVU7OEJBQ3ZCRzttQkFETUM7Ozs7Ozs7Ozs7O0FBTzNCO0tBakJ3QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvVGV4dEJveC90ZXh0Ym94LmpzP2U4YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdWlsZFRleHRCb3goeyBjb250ZW50LCB0aXRsZU9OVEVOVCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLU1ldmtncmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciAgZ2FwLTUgdy1mdWxsIGgtYXV0byAgcC0xNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTV4bCBwLTQgcm91bmRlZC0zeGwgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1NZXZrZ29sZGVuIHZpYS15ZWxsb3ctMjAwIHRvLXllbGxvdy05MDAgb3BhY2l0eS03NSB0ZXh0LW1lIGZvbnQtc2VtaWJvbGQgc2hhZG93LW1kIHRleHQtTWV2a2dyZWVuIG0tN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZU9OVEVOVH1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2NvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1NZXZrZ29sZGVuICB0ZXh0LWp1c3RpZnkgdGV4dC00eGxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnVpbGRUZXh0Qm94IiwiY29udGVudCIsInRpdGxlT05URU5UIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/components/TextBox/textbox.js\n"));

/***/ })

});