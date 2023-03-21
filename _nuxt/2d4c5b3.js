(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropValue; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);





var DragAndDropValue = /*#__PURE__*/function () {
  function DragAndDropValue(type, value) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DragAndDropValue);
    this.type = type;
    this.value = value;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DragAndDropValue, [{
    key: "is",
    value: function is() {
      return this.type === this.typeName();
    }
  }, {
    key: "isInvalid",
    value: function isInvalid() {
      return !this.is() || this.value === "";
    }
  }, {
    key: "id",
    value: function id() {
      return this.convValueToId(this.value);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.type, ":").concat(this.value);
    }
  }, {
    key: "parseOf",
    value: function parseOf(text) {
      if (!text) return this.empty();
      var parts = text.split(":");
      if (parts.length < 2) return this.empty();
      var value = parts[1];
      if (value.length === 0) return this.empty();
      return this.of(parts[0], value);
    }
  }, {
    key: "renew",
    value: function renew(id) {
      return this.of(this.typeName(), this.convIdToValue(id));
    }
  }, {
    key: "empty",
    value: function empty() {
      return this.of("", "");
    }
  }]);
  return DragAndDropValue;
}();


/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragAndDropSlideBarId; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(846);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DragAndDropSlideBarId = /*#__PURE__*/function (_DragAndDropValue) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DragAndDropSlideBarId, _DragAndDropValue);
  var _super = _createSuper(DragAndDropSlideBarId);
  function DragAndDropSlideBarId(type, value) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, DragAndDropSlideBarId);
    return _super.call(this, type, value);
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(DragAndDropSlideBarId, [{
    key: "typeName",
    value: function typeName() {
      return "slideBarId";
    }
  }, {
    key: "convIdToValue",
    value: function convIdToValue(id) {
      return id;
    }
  }, {
    key: "convValueToId",
    value: function convValueToId(value) {
      return value;
    }
  }, {
    key: "of",
    value: function of(type, value) {
      return new DragAndDropSlideBarId(type, value);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new DragAndDropSlideBarId("", "");
    }
  }]);
  return DragAndDropSlideBarId;
}(_presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);


/***/ })

}]);