(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57,84,85],{

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _IconZOrderLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(807);



/**
 * アイコンの形状の状態を定義する。
 * <p>
 * FigureのuserDataに仕込む。
 */

var IconStatus = /*#__PURE__*/Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function IconStatus() {
  var zOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _IconZOrderLevel__WEBPACK_IMPORTED_MODULE_2__["default"].NORMAL;

  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, IconStatus);

  this.zOrder = zOrder;
});



/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var IconZOrderLevel;

(function (IconZOrderLevel) {
  IconZOrderLevel[IconZOrderLevel["NORMAL"] = 3] = "NORMAL";
  IconZOrderLevel[IconZOrderLevel["AREA"] = 2] = "AREA";
  IconZOrderLevel[IconZOrderLevel["BACKGROUND_AREA"] = 1] = "BACKGROUND_AREA";
})(IconZOrderLevel || (IconZOrderLevel = {}));

/* harmony default export */ __webpack_exports__["default"] = (IconZOrderLevel);

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartOrEndPointIconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(805);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(806);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);






var StartOrEndPointIconGenerator = /*#__PURE__*/function () {
  function StartOrEndPointIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, StartOrEndPointIconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(StartOrEndPointIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].始点終点;
    }
  }, {
    key: "generate",
    value: function generate(placement, point, _iconChar) {
      var id = String(placement.resourceId);
      var outline = new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.shape.basic.Rectangle({
        id: id,
        x: placement.x,
        y: placement.y,
        width: 40,
        height: 20,
        bgColor: "none",
        alpha: 0,
        stroke: 0
      });
      outline.setResizeable(false);
      if (point.startPoint) this.decorateStartPint(outline);else this.decorateEndPoint(outline);
      outline.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_3__["default"]());
      return outline;
    }
  }, {
    key: "decorateStartPint",
    value: function decorateStartPint(outline) {
      var ten = new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.shape.basic.Circle({
        bgColor: "#000000"
      });
      ten.setWidth(20);
      outline.add(ten, new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.layout.locator.CenterLocator());
      var port = new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.OutputPort();
      outline.addPort(port, new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.layout.locator.BottomLocator());
    }
  }, {
    key: "decorateEndPoint",
    value: function decorateEndPoint(outline) {
      var maru = new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.shape.basic.Circle({
        bgColor: "none",
        stroke: 2
      });
      maru.setWidth(20);
      outline.add(maru, new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.layout.locator.CenterLocator());
      var ten = new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.shape.basic.Circle({
        bgColor: "#000000",
        stroke: 1
      });
      ten.setWidth(12);
      outline.add(ten, new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.layout.locator.CenterLocator());
      var port = new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.InputPort();
      outline.addPort(port, new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.layout.locator.TopLocator());
    }
  }]);

  return StartOrEndPointIconGenerator;
}();



/***/ })

}]);