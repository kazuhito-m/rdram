(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49,70],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


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

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateGroupIconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(494);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(232);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _icon_IconStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(683);









var StateGroupIconGenerator = /*#__PURE__*/function () {
  function StateGroupIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, StateGroupIconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(StateGroupIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].状態グループ;
    }
  }, {
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var id = String(placement.resourceId);
      var waku = new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.shape.basic.Rectangle({
        id: id,
        x: placement.x,
        y: placement.y,
        width: placement.width,
        height: placement.height,
        minWidth: 200,
        minHeight: 40,
        bgColor: "#FFE0AF",
        color: "#000000",
        alpha: 0.4,
        stroke: 2,
        radius: 40
      });
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 25,
        stroke: 0,
        padding: 0,
        bgColor: "none",
        resizable: false,
        alpha: 1
      });
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.shape.basic.Label({
        text: resource.name,
        bold: true,
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      var container = new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.shape.layout.TableLayout();
      container.addRow(icon, name);
      container.setCellVerticalAlign(0, 0, "middle");
      container.setCellVerticalAlign(0, 1, "middle");
      container.setStroke(0);
      var topBox = new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.shape.basic.Rectangle({
        width: placement.width,
        height: 40,
        bgColor: "none",
        color: "#000000",
        alpha: 1,
        stroke: 0
      });
      waku.on("resize", function (selfFigure) {
        selfFigure.getChildren().data.forEach(function (i) {
          return i.setWidth(selfFigure.getWidth());
        });
      });
      topBox.add(container, new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.layout.locator.CenterLocator());
      waku.add(topBox, new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.layout.locator.XYAbsPortLocator(0, 0));
      waku.createPort("input", new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.layout.locator.TopLocator());
      waku.createPort("output", new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.layout.locator.BottomLocator());
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_5___default.a.layout.anchor.ChopboxConnectionAnchor(icon);
      var port = waku.getOutputPorts().last();
      port.setConnectionAnchor(anchor);
      waku.setUserData(new _icon_IconStatus__WEBPACK_IMPORTED_MODULE_7__["default"](true));
      return waku;
    }
  }]);

  return StateGroupIconGenerator;
}();



/***/ })

}]);