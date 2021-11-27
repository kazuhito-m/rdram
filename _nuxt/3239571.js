(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52,76],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/**
 * アイコンの形状の状態を定義する。
 * <p>
 * FigureのuserDataに仕込む。
 */
var IconStatus = function IconStatus(area) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, IconStatus);

  this.area = area;
};



/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartOrEndPointIconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(237);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _icon_IconStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(686);






var StartOrEndPointIconGenerator = /*#__PURE__*/function () {
  function StartOrEndPointIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, StartOrEndPointIconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(StartOrEndPointIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].始点終点;
    }
  }, {
    key: "generate",
    value: function generate(placement, point, iconChar) {
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
      outline.setUserData(new _icon_IconStatus__WEBPACK_IMPORTED_MODULE_4__["default"](false));
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