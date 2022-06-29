(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20,26],{

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoomValueOnDraw2d; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(841);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Draw2Dのzoom値(getZoom()で取れる値)を表すValueオブジェクト。
 * <p>
 * その値自体は倍率ではない(1を割るための分母)であるため、その知識をクラスに表す。
 */
var ZoomValueOnDraw2d = /*#__PURE__*/function () {
  function ZoomValueOnDraw2d(value) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ZoomValueOnDraw2d);

    this.value = value;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ZoomValueOnDraw2d, [{
    key: "percentage",
    value: function percentage() {
      return 100 / this.value;
    }
  }, {
    key: "ratio",
    value: function ratio() {
      return 1 / this.value;
    }
  }], [{
    key: "of",
    value: function of(zoom) {
      var fixZoom = Number.isFinite(zoom) ? zoom : 1;
      return new ZoomValueOnDraw2d(fixZoom);
    }
  }]);

  return ZoomValueOnDraw2d;
}();



/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var numberIsFinite = __webpack_require__(842);

// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
$({ target: 'Number', stat: true }, { isFinite: numberIsFinite });


/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(44);

var globalIsFinite = global.isFinite;

// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es-x/no-number-isfinite -- safe
module.exports = Number.isFinite || function isFinite(it) {
  return typeof it == 'number' && globalIsFinite(it);
};


/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsolutePosition; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _ZoomValueOnDraw2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(817);



/**
 * Canvasの座標から、ブラウザ上の絶対座標に変換するクラス。
 */

var AbsolutePosition = /*#__PURE__*/function () {
  function AbsolutePosition(xOnCanvas, yOnCanvas, canvas) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AbsolutePosition);

    this.xOnCanvas = xOnCanvas;
    this.yOnCanvas = yOnCanvas;
    this.canvas = canvas;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AbsolutePosition, [{
    key: "ratio",
    value: function ratio() {
      var zoom = this.canvas.getZoom();
      return _ZoomValueOnDraw2d__WEBPACK_IMPORTED_MODULE_2__["default"].of(zoom).ratio();
    }
  }, {
    key: "x",
    value: function x() {
      return this.xOnCanvas * this.ratio() + this.canvas.getAbsoluteX();
    }
  }, {
    key: "y",
    value: function y() {
      return this.yOnCanvas * this.ratio() + this.canvas.getAbsoluteY();
    }
  }]);

  return AbsolutePosition;
}();



/***/ })

}]);