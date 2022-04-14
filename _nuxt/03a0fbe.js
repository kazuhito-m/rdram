(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29,76],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



/**
 * アイコンの形状の状態を定義する。
 * <p>
 * FigureのuserDataに仕込む。
 */
var IconStatus = /*#__PURE__*/Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function IconStatus(area) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, IconStatus);

  this.area = area;
});



/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivityForBusinessFlowIconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(537);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(269);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(742);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);








var ActivityForBusinessFlowIconGenerator = /*#__PURE__*/function () {
  function ActivityForBusinessFlowIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ActivityForBusinessFlowIconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ActivityForBusinessFlowIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].アクティビティ;
    }
  }, {
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var id = String(placement.resourceId);
      var outline = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Rectangle({
        id: id,
        x: placement.x,
        y: placement.y,
        width: 40,
        height: 40,
        bgColor: "none",
        stroke: 0
      });
      outline.setResizeable(false);
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 35,
        stroke: 0,
        padding: 0,
        bgColor: "#FFFFFF"
      });
      outline.add(icon, new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.CenterLocator());
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Label({
        text: resource.name,
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      outline.add(name, new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.BottomLocator());
      outline.createPort("input", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.TopLocator());
      outline.createPort("output", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.BottomLocator());
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.anchor.ChopboxConnectionAnchor(icon);
      var port = outline.getOutputPorts().last();
      port.setConnectionAnchor(anchor);
      outline.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_5__["default"](false));
      return outline;
    }
  }]);

  return ActivityForBusinessFlowIconGenerator;
}();



/***/ })

}]);