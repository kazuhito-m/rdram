(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31,76],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


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

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActorAndLaneIconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(240);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(703);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);








var ActorAndLaneIconGenerator = /*#__PURE__*/function () {
  function ActorAndLaneIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ActorAndLaneIconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ActorAndLaneIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].アクター;
    }
  }, {
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var id = String(placement.resourceId);
      var waku = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Rectangle({
        id: id,
        x: placement.x,
        y: placement.y,
        width: placement.width,
        height: placement.height,
        minWidth: 100,
        minHeight: 40,
        bgColor: "none",
        color: "#000000",
        alpha: 1,
        stroke: 2
      });
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 28,
        stroke: 0,
        padding: 0,
        bgColor: "#FFFFFF",
        resizable: false,
        alpha: 1
      });
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Label({
        text: resource.name,
        bold: true,
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      var container = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.layout.TableLayout();
      container.addRow(icon, name);
      container.setCellVerticalAlign(0, 0, "middle");
      container.setCellVerticalAlign(0, 1, "middle");
      container.setStroke(0);
      var topBox = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Rectangle({
        width: placement.width,
        height: 40,
        bgColor: "none",
        color: "#000000",
        alpha: 1,
        stroke: 1
      });
      waku.on("resize", function (selfFigure) {
        selfFigure.getChildren().data.forEach(function (i) {
          return i.setWidth(selfFigure.getWidth());
        });
      });
      topBox.add(container, new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.CenterLocator());
      waku.add(topBox, new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.XYAbsPortLocator(0, 0));
      waku.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_5__["default"](true));
      return waku;
    }
  }]);

  return ActorAndLaneIconGenerator;
}();



/***/ })

}]);