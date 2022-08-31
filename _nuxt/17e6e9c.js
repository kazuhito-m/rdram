(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60,75,81,82],{

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _IconZOrderLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(821);



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

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(579);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(818);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_3__);





var IconGenerator = /*#__PURE__*/function () {
  function IconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, IconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(IconGenerator, [{
    key: "makeDoubleVectorPorts",
    value: function makeDoubleVectorPorts(icon) {
      icon.createPort("input", new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.locator.TopLocator());
      icon.createPort("output", new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.locator.BottomLocator());
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.anchor.ChopboxConnectionAnchor(icon);
      var port = icon.getOutputPorts().last();
      port.setConnectionAnchor(anchor);
    }
  }, {
    key: "makeSingleHybridPort",
    value: function makeSingleHybridPort(icon) {
      icon.createPort("hybrid", new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.locator.CenterLocator()); // PortからではなくFigureから線が出ているように見せるため、アンカー設定。

      var port = icon.getPorts().last();
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.anchor.FanConnectionAnchor(icon);
      port.setConnectionAnchor(anchor);
    }
  }]);

  return IconGenerator;
}();



/***/ }),

/***/ 821:
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

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartOrEndPointIconGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(818);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_diagrams_icon_IconGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(820);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(819);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var StartOrEndPointIconGenerator = /*#__PURE__*/function (_IconGenerator) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(StartOrEndPointIconGenerator, _IconGenerator);

  var _super = _createSuper(StartOrEndPointIconGenerator);

  function StartOrEndPointIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, StartOrEndPointIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(StartOrEndPointIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].始点終点;
    }
  }, {
    key: "generate",
    value: function generate(placement, point, _iconChar) {
      var id = String(placement.resourceId);
      var outline = new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.shape.basic.Rectangle({
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
      outline.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_9__["default"]());
      return outline;
    }
  }, {
    key: "decorateStartPint",
    value: function decorateStartPint(outline) {
      var ten = new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.shape.basic.Circle({
        bgColor: "#000000"
      });
      ten.setWidth(20);
      outline.add(ten, new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.layout.locator.CenterLocator());
      var port = new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.OutputPort();
      outline.addPort(port, new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.layout.locator.BottomLocator());
    }
  }, {
    key: "decorateEndPoint",
    value: function decorateEndPoint(outline) {
      var maru = new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.shape.basic.Circle({
        bgColor: "none",
        stroke: 2
      });
      maru.setWidth(20);
      outline.add(maru, new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.layout.locator.CenterLocator());
      var ten = new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.shape.basic.Circle({
        bgColor: "#000000",
        stroke: 1
      });
      ten.setWidth(12);
      outline.add(ten, new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.layout.locator.CenterLocator());
      var port = new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.InputPort();
      outline.addPort(port, new draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.layout.locator.TopLocator());
    }
  }]);

  return StartOrEndPointIconGenerator;
}(_components_diagrams_icon_IconGenerator__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ })

}]);