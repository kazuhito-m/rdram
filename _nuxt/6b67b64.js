(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51,73,76,79,80],{

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _IconZOrderLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(818);



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

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(577);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(815);
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

/***/ 818:
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

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericSingleIconGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(815);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_diagrams_icon_IconGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(817);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(816);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var GenericSingleIconGenerator = /*#__PURE__*/function (_IconGenerator) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(GenericSingleIconGenerator, _IconGenerator);

  var _super = _createSuper(GenericSingleIconGenerator);

  function GenericSingleIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, GenericSingleIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(GenericSingleIconGenerator, [{
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var padding = 0;
      var id = String(placement.resourceId);
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.shape.basic.Label({
        x: placement.x,
        y: placement.y,
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 40,
        stroke: 0,
        padding: padding,
        bgColor: "#FFFFFF",
        resizable: false,
        alpha: 1,
        id: id
      });
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.shape.basic.Label({
        text: resource.name,
        stroke: 0,
        padding: padding,
        resizable: false,
        selectable: false
      });
      this.makeSingleHybridPort(icon);
      icon.add(name, new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.layout.locator.BottomLocator());
      icon.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_10__["default"]());
      return icon;
    }
  }]);

  return GenericSingleIconGenerator;
}(_components_diagrams_icon_IconGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultIconGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(825);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var DefaultIconGenerator = /*#__PURE__*/function (_GenericSingleIconGen) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DefaultIconGenerator, _GenericSingleIconGen);

  var _super = _createSuper(DefaultIconGenerator);

  function DefaultIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, DefaultIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(DefaultIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      throw new Error("このアイコンジェネレータが比較されることはない。");
    }
  }], [{
    key: "get",
    value: function get() {
      return DefaultIconGenerator.ONE;
    }
  }]);

  return DefaultIconGenerator;
}(_components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_7__["default"]);


DefaultIconGenerator.ONE = new DefaultIconGenerator();

/***/ })

}]);