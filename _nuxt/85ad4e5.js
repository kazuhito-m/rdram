(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54,78,79],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _IconZOrderLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(767);



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

/***/ 767:
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

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateGroupIconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(544);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(274);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(766);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_icon_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(767);











var StateGroupIconGenerator = /*#__PURE__*/function () {
  function StateGroupIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, StateGroupIconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(StateGroupIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].状態グループ;
    }
  }, {
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var id = String(placement.resourceId);
      var waku = new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.shape.basic.Rectangle({
        id: id,
        x: placement.x,
        y: placement.y,
        width: placement.width,
        height: placement.height,
        minWidth: 40,
        minHeight: 40,
        bgColor: "#FFE0AF",
        color: "#000000",
        alpha: 0.4,
        stroke: 2,
        radius: 40
      });
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 25,
        stroke: 0,
        padding: 0,
        bgColor: "none",
        resizable: false,
        alpha: 1
      });
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.shape.basic.Label({
        text: resource.name,
        bold: true,
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      var container = new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.shape.layout.TableLayout();
      container.addRow(icon, name);
      container.setCellVerticalAlign(0, 0, "middle");
      container.setCellVerticalAlign(0, 1, "middle");
      container.setStroke(0);
      var topBox = new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.shape.basic.Rectangle({
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
      topBox.add(container, new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.layout.locator.CenterLocator());
      waku.add(topBox, new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.layout.locator.XYAbsPortLocator(0, 0));
      waku.createPort("input", new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.layout.locator.TopLocator());
      waku.createPort("output", new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.layout.locator.BottomLocator());
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.layout.anchor.ChopboxConnectionAnchor(icon);
      var port = waku.getOutputPorts().last();
      port.setConnectionAnchor(anchor);
      waku.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_7__["default"](_components_diagrams_icon_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_9__["default"].AREA));
      return waku;
    }
  }]);

  return StateGroupIconGenerator;
}();



/***/ })

}]);