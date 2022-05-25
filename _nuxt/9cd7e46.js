(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50,75,80,81],{

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _IconZOrderLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(776);



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

/***/ 776:
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

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ get_get; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(getPrototypeOf["a" /* default */])(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js

function get_get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    get_get = Reflect.get;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return get_get.apply(this, arguments);
}

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopLeftLocator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(774);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_7__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * draw2dのToLocatorが「上に付くが、横位置は真ん中に固定」なので、
 * 「上について横位置は左端」というロケータが欲しくて、自力で実装したもの。
 */

var TopLeftLocator = /*#__PURE__*/function (_draw2d$layout$locato) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TopLeftLocator, _draw2d$layout$locato);

  var _super = _createSuper(TopLeftLocator);

  function TopLeftLocator(attr, setter, getter) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, TopLeftLocator);

    _this = _super.call(this, attr, setter, getter);
    _this.NAME = 'draw2d.layout.locator.TopLeftLocator';
    _this.padding = 0;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TopLeftLocator, [{
    key: "relocate",
    value: function relocate(_index, target) {
      var targetBoundingBox = target.getBoundingBox();
      var y = 0;
      if (!(target instanceof draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.Port)) y = -targetBoundingBox.h - 2;
      target.setPosition(0, y);
    }
  }]);

  return TopLeftLocator;
}(draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.layout.locator.TopLocator);



/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericAreaIconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(774);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IconZOrderLevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(776);
/* harmony import */ var _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(781);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(775);








var GenericAreaIconGenerator = /*#__PURE__*/function () {
  function GenericAreaIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenericAreaIconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GenericAreaIconGenerator, [{
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var id = String(placement.resourceId);
      var waku = new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.shape.basic.Rectangle({
        x: placement.x,
        y: placement.y,
        bgColor: "#FFFFFF",
        alpha: 0.6,
        width: placement.width,
        height: placement.height,
        radius: 5,
        stroke: 3,
        selectable: true,
        resizable: true,
        padding: 0,
        keepAspectRatio: false,
        id: id
      });
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 30,
        stroke: 0,
        padding: 0,
        bgColor: "#FFFFFF",
        alpha: 1
      });
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.shape.basic.Label({
        text: resource.name,
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      waku.createPort("hybrid", new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.locator.XYAbsPortLocator({
        x: 15,
        y: -17
      }));
      icon.add(name, new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.locator.XYRelPortLocator({
        x: 105,
        y: 27
      }));
      waku.add(icon, new _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]());
      waku.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_6__["default"](_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_4__["default"].AREA));
      return waku;
    }
  }]);

  return GenericAreaIconGenerator;
}();



/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoomIconGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(780);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(774);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_diagrams_icon_GenericAreaIconGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(851);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var RoomIconGenerator = /*#__PURE__*/function (_GenericAreaIconGener) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(RoomIconGenerator, _GenericAreaIconGener);

  var _super = _createSuper(RoomIconGenerator);

  function RoomIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, RoomIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RoomIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].組織;
    }
  }, {
    key: "generate",
    value: function generate(placement, resource, iconStyle) {
      var result = Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(RoomIconGenerator.prototype), "generate", this).call(this, placement, resource, iconStyle);

      result.color = new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.util.Color(0, 192, 255);
      return result;
    }
  }]);

  return RoomIconGenerator;
}(_components_diagrams_icon_GenericAreaIconGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ })

}]);