/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/addImage.js":
/*!*************************!*\
  !*** ./app/addImage.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_addImage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/addImage.css */ \"./styles/addImage.css\");\n/* harmony import */ var _styles_addImage_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_addImage_css__WEBPACK_IMPORTED_MODULE_0__);\n\nlet smallImg = document.createElement('img');\nsmallImg.src = __webpack_require__(/*! ../images/ph1.jpeg */ \"./images/ph1.jpeg\");\ndocument.body.appendChild(smallImg);\nlet bigImg = document.createElement('img');\nbigImg.src = __webpack_require__(/*! ../images/ph2.jpeg */ \"./images/ph2.jpeg\");\ndocument.body.appendChild(bigImg);\n\n//# sourceURL=webpack:///./app/addImage.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum */ \"./app/sum.js\");\n// var sum = require('./sum');\n// console.log(sum(1, 2));\n\nconsole.log(Object(_sum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 2));\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/sum.js":
/*!********************!*\
  !*** ./app/sum.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// module.exports = function(a, b) {\n//     return a + b;\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = ((a, b) => {\n  return a + b;\n});\n\n//# sourceURL=webpack:///./app/sum.js?");

/***/ }),

/***/ "./images/ph1.jpeg":
/*!*************************!*\
  !*** ./images/ph1.jpeg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/ph1.b73ce5d40966d0636614a643b24fc22a.jpeg\";\n\n//# sourceURL=webpack:///./images/ph1.jpeg?");

/***/ }),

/***/ "./images/ph2.jpeg":
/*!*************************!*\
  !*** ./images/ph2.jpeg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/ph2.b69cc8de7027d8984b6ee467348fe6cd.jpeg\";\n\n//# sourceURL=webpack:///./images/ph2.jpeg?");

/***/ }),

/***/ "./styles/addImage.css":
/*!*****************************!*\
  !*** ./styles/addImage.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"test\":\"_2-AxcSaQBPXGeJRLE8Ocue\"};\n\n//# sourceURL=webpack:///./styles/addImage.css?");

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./app/index.js ./app/addImage.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./app/index.js */\"./app/index.js\");\nmodule.exports = __webpack_require__(/*! ./app/addImage.js */\"./app/addImage.js\");\n\n\n//# sourceURL=webpack:///multi_./app/index.js_./app/addImage.js?");

/***/ })

/******/ });