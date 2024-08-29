"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-composed-ref";
exports.ids = ["vendor-chunks/use-composed-ref"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-composed-ref/dist/use-composed-ref.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-composed-ref/dist/use-composed-ref.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nvar updateRef = function updateRef(ref, value) {\r\n  if (typeof ref === 'function') {\r\n    ref(value);\r\n    return;\r\n  }\r\n  ref.current = value;\r\n};\r\n\r\nvar useComposedRef = function useComposedRef(libRef, userRef) {\r\n  var prevUserRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\r\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (instance) {\r\n    libRef.current = instance;\r\n\r\n    if (prevUserRef.current) {\r\n      updateRef(prevUserRef.current, null);\r\n    }\r\n\r\n    prevUserRef.current = userRef;\r\n\r\n    if (!userRef) {\r\n      return;\r\n    }\r\n\r\n    updateRef(userRef, instance);\r\n  }, [userRef]);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useComposedRef);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNvbXBvc2VkLXJlZi9kaXN0L3VzZS1jb21wb3NlZC1yZWYuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBTTtBQUMxQixTQUFTLGtEQUFXO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXRyaS1zbWFydC8uL25vZGVfbW9kdWxlcy91c2UtY29tcG9zZWQtcmVmL2Rpc3QvdXNlLWNvbXBvc2VkLXJlZi5lc20uanM/MGRjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxudmFyIHVwZGF0ZVJlZiA9IGZ1bmN0aW9uIHVwZGF0ZVJlZihyZWYsIHZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJlZih2YWx1ZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbn07XHJcblxyXG52YXIgdXNlQ29tcG9zZWRSZWYgPSBmdW5jdGlvbiB1c2VDb21wb3NlZFJlZihsaWJSZWYsIHVzZXJSZWYpIHtcclxuICB2YXIgcHJldlVzZXJSZWYgPSB1c2VSZWYoKTtcclxuICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICBsaWJSZWYuY3VycmVudCA9IGluc3RhbmNlO1xyXG5cclxuICAgIGlmIChwcmV2VXNlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHVwZGF0ZVJlZihwcmV2VXNlclJlZi5jdXJyZW50LCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2VXNlclJlZi5jdXJyZW50ID0gdXNlclJlZjtcclxuXHJcbiAgICBpZiAoIXVzZXJSZWYpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlZih1c2VyUmVmLCBpbnN0YW5jZSk7XHJcbiAgfSwgW3VzZXJSZWZdKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUNvbXBvc2VkUmVmO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-composed-ref/dist/use-composed-ref.esm.js\n");

/***/ })

};
;