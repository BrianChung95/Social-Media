"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {\n        },\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        __source: {\n            fileName: \"F:\\\\CST\\\\coop\\\\project\\\\Social Media\\\\client\\\\context\\\\index.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEQ7QUFFMUQsS0FBSyxDQUFDRyxXQUFXLGlCQUFHRixvREFBYTtBQUVqQyxLQUFLLENBQUNHLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN0QyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJUCwrQ0FBUSxDQUFDLENBQUM7UUFDbENRLElBQUksRUFBRSxDQUFDO1FBQUEsQ0FBQztRQUNSQyxLQUFLLEVBQUUsQ0FBRTtJQUNYLENBQUM7SUFFRFAsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZLLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTTtJQUN4RCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSxzRUFDSFgsV0FBVyxDQUFDWSxRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDVjtZQUFBQSxLQUFLO1lBQUVDLFFBQVE7UUFBQSxDQUFDOzs7Ozs7O2tCQUMzQ0YsUUFBUTs7QUFHZixDQUFDO0FBRW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcjoge30sXHJcbiAgICB0b2tlbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXRlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXIiLCJ0b2tlbiIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\n\n\nconst Home = ()=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"F:\\\\CST\\\\coop\\\\project\\\\Social Media\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"F:\\\\CST\\\\coop\\\\project\\\\Social Media\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"col\",\n                __source: {\n                    fileName: \"F:\\\\CST\\\\coop\\\\project\\\\Social Media\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"display-1 text-center\",\n                        __source: {\n                            fileName: \"F:\\\\CST\\\\coop\\\\project\\\\Social Media\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        },\n                        __self: undefined,\n                        children: \"Home page\"\n                    }),\n                    JSON.stringify(state),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/images/default.jpg\",\n                        alt: \"image\",\n                        __source: {\n                            fileName: \"F:\\\\CST\\\\coop\\\\project\\\\Social Media\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        },\n                        __self: undefined\n                    })\n                ]\n            })\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ007QUFFeEMsS0FBSyxDQUFDRSxJQUFJLE9BQVMsQ0FBQztJQUNsQixLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJSixpREFBVSxDQUFDQyxpREFBVztJQUVoRCxNQUFNLHNFQUNISSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7O3VGQUN2QkQsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBSzs7Ozs7Ozs0RkFDakJELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFLOzs7Ozs7Ozt5RkFDakJDLENBQUU7d0JBQUNELFNBQVMsRUFBQyxDQUF1Qjs7Ozs7OztrQ0FBQyxDQUFTOztvQkFDOUNFLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixLQUFLO3lGQUNwQk8sQ0FBRzt3QkFBQ0MsR0FBRyxFQUFDLENBQXFCO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTzs7Ozs7Ozs7Ozs7O0FBS3BELENBQUM7QUFFRCxpRUFBZVYsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTEgdGV4dC1jZW50ZXJcIj5Ib21lIHBhZ2U8L2gxPlxyXG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0YXRlKX1cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kZWZhdWx0LmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIkhvbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();