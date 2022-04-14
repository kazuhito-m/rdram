(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55,76],{

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

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SystemForSystemContextIconGenerator; });
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








var SystemForSystemContextIconGenerator = /*#__PURE__*/function () {
  function SystemForSystemContextIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SystemForSystemContextIconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SystemForSystemContextIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].システム;
    }
  }, {
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var id = String(placement.resourceId);
      var oval = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Oval({
        id: id,
        x: placement.x,
        y: placement.y,
        bgColor: "#FFFFFF",
        alpha: 1,
        width: placement.width,
        height: placement.height,
        radius: 0,
        stroke: 2,
        selectable: true,
        resizable: true,
        color: "#000000",
        padding: 0
      });
      var moji = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Label({
        text: resource.name,
        fontSize: 23,
        stroke: 0,
        padding: 0,
        alpha: 1,
        bold: true
      });
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 25,
        stroke: 0,
        padding: 0,
        bgColor: "#FFFFFF",
        alpha: 1
      });
      oval.add(moji, new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.CenterLocator());
      oval.add(icon, new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.XYRelPortLocator({
        x: 47,
        y: 3
      }));
      oval.createPort("hybrid", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.CenterLocator()); // PortからではなくFigureから線が出ているように見せるため、アンカー設定。

      var port = oval.getPorts().last();
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.anchor.ChopboxConnectionAnchor(oval);
      port.setConnectionAnchor(anchor);
      oval.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_5__["default"](false));
      return oval;
    }
  }]);

  return SystemForSystemContextIconGenerator;
}();



/***/ })

}]);