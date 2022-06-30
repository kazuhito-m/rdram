(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73,27,28],{

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropValue; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(102);
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

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);

// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return number != number;
  }
});


/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var parseInt = __webpack_require__(843);

// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es-x/no-number-parseint -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {
  parseInt: parseInt
});


/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragAndDropResourceType; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(825);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(826);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var _presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(816);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var DragAndDropResourceType = /*#__PURE__*/function (_DragAndDropValue) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(DragAndDropResourceType, _DragAndDropValue);

  var _super = _createSuper(DragAndDropResourceType);

  function DragAndDropResourceType(type, value) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, DragAndDropResourceType);

    return _super.call(this, type, value);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(DragAndDropResourceType, [{
    key: "typeName",
    value: function typeName() {
      return "resourceType";
    }
  }, {
    key: "convIdToValue",
    value: function convIdToValue(id) {
      return id.id.toString();
    }
  }, {
    key: "convValueToId",
    value: function convValueToId(value) {
      if (Number.isNaN(value)) return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].アクター;
      var id = Number.parseInt(value, 10);
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].ofId(id);
    }
  }, {
    key: "of",
    value: function of(type, value) {
      return new DragAndDropResourceType(type, value);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new DragAndDropResourceType("", "");
    }
  }]);

  return DragAndDropResourceType;
}(_presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);



/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragAndDropResourceId; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(825);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(826);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(816);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var DragAndDropResourceId = /*#__PURE__*/function (_DragAndDropValue) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(DragAndDropResourceId, _DragAndDropValue);

  var _super = _createSuper(DragAndDropResourceId);

  function DragAndDropResourceId(type, value) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, DragAndDropResourceId);

    return _super.call(this, type, value);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(DragAndDropResourceId, [{
    key: "typeName",
    value: function typeName() {
      return "resourceId";
    }
  }, {
    key: "convIdToValue",
    value: function convIdToValue(id) {
      return id.toString();
    }
  }, {
    key: "convValueToId",
    value: function convValueToId(value) {
      if (Number.isNaN(value)) return 0;
      return Number.parseInt(value, 10);
    }
  }, {
    key: "of",
    value: function of(type, value) {
      return new DragAndDropResourceId(type, value);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new DragAndDropResourceId("", "");
    }
  }]);

  return DragAndDropResourceId;
}(_presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(885);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("3950c51e", content, true, {"sourceMap":false});

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(44);
var fails = __webpack_require__(36);
var uncurryThis = __webpack_require__(35);
var toString = __webpack_require__(69);
var trim = __webpack_require__(335).trim;
var whitespaces = __webpack_require__(336);

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceParet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(837);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceParet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceParet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".paret-panel{overflow-x:hidden;overflow-y:auto;width:100%;height:100%}.omit-long-text{position:absolute;text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;padding:0}.ignore-padding{padding:0}.chip-container{position:absolute;text-align:left;width:100%}.v-expansion-panel-content__wrap{padding:0;flex:auto}.v-expansion-panel--next-active{padding:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(887);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("48751daa", content, true, {"sourceMap":false});

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.04}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.08}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:\"\";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/paret/ResourceParet.vue?vue&type=template&id=af33c444&lang=html&
var ResourceParetvue_type_template_id_af33c444_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"paret-panel"},[_c('v-expansion-panels',{attrs:{"multiple":"","focusable":"","dark":""},model:{value:(_vm.paretsOpen),callback:function ($$v) {_vm.paretsOpen=$$v},expression:"paretsOpen"}},[_vm._l((_vm.availableResourceTypes),function(resourceType){return _c('v-expansion-panel',{key:resourceType.id},[_c('v-expansion-panel-header',[_c('div',{staticClass:"omit-long-text"},[_c('v-icon',{attrs:{"id":resourceType.iconKey}},[_vm._v(_vm._s(resourceType.iconKey))]),_vm._v("\n          "+_vm._s(resourceType.name)+"\n        ")],1)]),_vm._v(" "),_c('v-expansion-panel-content',[_c('v-list',{attrs:{"dark":"","dence":""}},[_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"chip-container"},[_c('v-chip',{attrs:{"color":"primary","dark":"","outlined":"","draggable":"","data-resource-type-id":resourceType.id},on:{"dragstart":_vm.onDragStartNewCompany}},[_c('v-icon',[_vm._v(_vm._s(resourceType.iconKey))]),_vm._v("新規追加\n                ")],1)],1)],1)],1),_vm._v(" "),_vm._l((_vm.allResources.filter(function (r) { return _vm.filterDisplayParet(r, resourceType, _vm.usedResouceIds); }
            )),function(resource){return _c('v-list-item',{key:resource.resourceId},[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"chip-container"},[_c('v-chip',{attrs:{"data-resource-id":resource.resourceId,"color":"primary","dark":"","draggable":""},on:{"dragstart":_vm.onDragStartResource,"contextmenu":_vm.onRightClickResource}},[_c('v-icon',[_vm._v(_vm._s(resourceType.iconKey))]),_vm._v("\n                  "+_vm._s(resource.name)+"\n                ")],1)],1)],1)],1)})],2)],1)],1)}),_vm._v(" "),_c('v-expansion-panel',[_c('v-expansion-panel-header',[_c('div',{staticClass:"omit-long-text"},[_c('v-icon',[_vm._v("mdi-clipboard-check-multiple-outline")]),_vm._v("この図で使用済\n        ")],1)]),_vm._v(" "),_c('v-expansion-panel-content',[_c('v-list',{attrs:{"dark":"","dence":""}},_vm._l((_vm.allResources.filter(function (r) { return _vm.filterUsedList(r, _vm.usedResouceIds); }
            )),function(usedResource){return _c('v-list-item',{key:usedResource.resourceId},[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"chip-container"},[_c('v-chip',{attrs:{"dark":"","data-resource-id":usedResource.resourceId,"data-resource-on-diagram":"true"},on:{"contextmenu":_vm.onRightClickResource}},[_c('v-tooltip',{attrs:{"left":"","open-delay":"2000"},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
            var on = ref.on;
            var attrs = ref.attrs;
return [_c('v-icon',_vm._g(_vm._b({},'v-icon',attrs,false),on),[_vm._v("\n                        "+_vm._s(usedResource.type.iconKey)+"\n                      ")])]}}],null,true)},[_vm._v(" "),_c('span',[_vm._v(_vm._s(usedResource.type.name))])]),_vm._v("\n                  "+_vm._s(usedResource.name)+"\n                ")],1)],1)],1)],1)}),1)],1)],1)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue?vue&type=template&id=af33c444&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/dad/DragAndDropResourceType.ts
var DragAndDropResourceType = __webpack_require__(832);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/dad/DragAndDropResourceId.ts
var DragAndDropResourceId = __webpack_require__(833);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/paret/ResourceParet.vue?vue&type=script&lang=ts&








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ResourceParetvue_type_script_lang_ts_ResourceParet = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(ResourceParet, _Vue);

  var _super = _createSuper(ResourceParet);

  function ResourceParet() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ResourceParet);

    _this = _super.apply(this, arguments);
    _this.availableResourceTypes = [];
    _this.paretsOpen = [];
    return _this;
  }

  Object(createClass["a" /* default */])(ResourceParet, [{
    key: "onShowResourceMenu",
    value: function onShowResourceMenu(_r, _x, _y) {}
  }, {
    key: "created",
    value: function created() {
      var _this2 = this;

      var diagram = this.product.diagrams.of(this.diagramId);
      if (!diagram) return;
      diagram.availableResourceTypes().forEach(function (resourceType) {
        return _this2.availableResourceTypes.push(resourceType);
      });
    }
  }, {
    key: "onDragStartNewCompany",
    value: function onDragStartNewCompany(event) {
      var _a;

      if (!event.target) return;
      var target = event.target;
      var text = target.getAttribute('data-resource-type-id');
      if (!text) return;
      var typeId = parseInt(text, 10);
      var resourceType = ResourceType["a" /* default */].ofId(typeId);
      if (!resourceType) return;
      var ddrt = DragAndDropResourceType["default"].prototypeOf().renew(resourceType);
      (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text/plain', ddrt.toString());
    }
  }, {
    key: "onDragStartResource",
    value: function onDragStartResource(event) {
      var _a;

      var chip = event.target;
      var id = this.resourceIdOf(chip);
      var ddri = DragAndDropResourceId["default"].prototypeOf().renew(id);
      (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text/plain', ddri.toString());
    }
  }, {
    key: "onRightClickResource",
    value: function onRightClickResource(event) {
      event.preventDefault();
      var src = event.target;
      if (!src.parentElement) return;
      var id = this.resourceIdOf(src.parentElement); // FIXME ちょっと「Veutifyの構造を知りすぎてる」気がする。手が在れば変えたい。

      if (id === 0) return;
      var resource = this.allResources.find(function (r) {
        return r.resourceId === id;
      });
      if (!resource) return;
      this.onShowResourceMenu(resource, event.x, event.y);
    }
  }, {
    key: "filterDisplayParet",
    value: function filterDisplayParet(resource, resourceType, usedResouceIds) {
      var diagram = this.product.diagrams.of(this.diagramId);
      if (!diagram) return false;
      if (!resource.type.equals(resourceType)) return false;
      return !usedResouceIds.includes(resource.resourceId);
    }
  }, {
    key: "filterUsedList",
    value: function filterUsedList(resource, usedResouceIds) {
      return usedResouceIds.includes(resource.resourceId);
    }
  }, {
    key: "resourceIdOf",
    value: function resourceIdOf(chip) {
      var resourceIdText = chip.getAttribute('data-resource-id');
      if (!resourceIdText) return 0;
      return Number(resourceIdText);
    }
  }]);

  return ResourceParet;
}(lib["Vue"]);

__decorate([Object(lib["Prop"])({
  required: true
})], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "diagramId", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "product", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "allResources", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "usedResouceIds", void 0);

__decorate([Object(lib["Emit"])('onShowResourceMenu')], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "onShowResourceMenu", null);

ResourceParetvue_type_script_lang_ts_ResourceParet = __decorate([lib["Component"]], ResourceParetvue_type_script_lang_ts_ResourceParet);
/* harmony default export */ var ResourceParetvue_type_script_lang_ts_ = (ResourceParetvue_type_script_lang_ts_ResourceParet);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue?vue&type=script&lang=ts&
 /* harmony default export */ var paret_ResourceParetvue_type_script_lang_ts_ = (ResourceParetvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue?vue&type=style&index=0&lang=css&
var ResourceParetvue_type_style_index_0_lang_css_ = __webpack_require__(884);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(61);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(278);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/registrable/index.js
var registrable = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Mixins

 // Utilities



/* harmony default export */ var VExpansionPanel = (Object(mixins["a" /* default */])(Object(groupable["a" /* factory */])('expansionPanels', 'v-expansion-panel', 'v-expansion-panels'), Object(registrable["b" /* provide */])('expansionPanel', true)
/* @vue/component */
).extend({
  name: 'v-expansion-panel',
  props: {
    disabled: Boolean,
    readonly: Boolean
  },
  data: function data() {
    return {
      content: null,
      header: null,
      nextIsActive: false
    };
  },
  computed: {
    classes: function classes() {
      return _objectSpread({
        'v-expansion-panel--active': this.isActive,
        'v-expansion-panel--next-active': this.nextIsActive,
        'v-expansion-panel--disabled': this.isDisabled
      }, this.groupClasses);
    },
    isDisabled: function isDisabled() {
      return this.expansionPanels.disabled || this.disabled;
    },
    isReadonly: function isReadonly() {
      return this.expansionPanels.readonly || this.readonly;
    }
  },
  methods: {
    registerContent: function registerContent(vm) {
      this.content = vm;
    },
    unregisterContent: function unregisterContent() {
      this.content = null;
    },
    registerHeader: function registerHeader(vm) {
      this.header = vm;
      vm.$on('click', this.onClick);
    },
    unregisterHeader: function unregisterHeader() {
      this.header = null;
    },
    onClick: function onClick(e) {
      if (e.detail) this.header.$el.blur();
      this.$emit('click', e);
      this.isReadonly || this.isDisabled || this.toggle();
    },
    toggle: function toggle() {
      var _this = this;

      this.$nextTick(function () {
        return _this.$emit('change');
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'v-expansion-panel',
      class: this.classes,
      attrs: {
        'aria-expanded': String(this.isActive)
      }
    }, Object(helpers["q" /* getSlot */])(this));
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/bootable/index.js
var bootable = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
 // Mixins



 // Utilities



var baseMixins = Object(mixins["a" /* default */])(bootable["a" /* default */], colorable["a" /* default */], Object(registrable["a" /* inject */])('expansionPanel', 'v-expansion-panel-content', 'v-expansion-panel'));
/* @vue/component */

/* harmony default export */ var VExpansionPanelContent = (baseMixins.extend().extend({
  name: 'v-expansion-panel-content',
  data: function data() {
    return {
      isActive: false
    };
  },
  computed: {
    parentIsActive: function parentIsActive() {
      return this.expansionPanel.isActive;
    }
  },
  watch: {
    parentIsActive: {
      immediate: true,
      handler: function handler(val, oldVal) {
        var _this = this;

        if (val) this.isBooted = true;
        if (oldVal == null) this.isActive = val;else this.$nextTick(function () {
          return _this.isActive = val;
        });
      }
    }
  },
  created: function created() {
    this.expansionPanel.registerContent(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.expansionPanel.unregisterContent();
  },
  render: function render(h) {
    var _this2 = this;

    return h(transitions["a" /* VExpandTransition */], this.showLazyContent(function () {
      return [h('div', _this2.setBackgroundColor(_this2.color, {
        staticClass: 'v-expansion-panel-content',
        directives: [{
          name: 'show',
          value: _this2.isActive
        }]
      }), [h('div', {
        class: 'v-expansion-panel-content__wrap'
      }, Object(helpers["q" /* getSlot */])(_this2))])];
    }));
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(90);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js









function VExpansionPanelHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function VExpansionPanelHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? VExpansionPanelHeader_ownKeys(Object(source), !0).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : VExpansionPanelHeader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Components

 // Mixins


 // Directives

 // Utilities



var VExpansionPanelHeader_baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], Object(registrable["a" /* inject */])('expansionPanel', 'v-expansion-panel-header', 'v-expansion-panel'));
/* harmony default export */ var VExpansionPanelHeader = (VExpansionPanelHeader_baseMixins.extend().extend({
  name: 'v-expansion-panel-header',
  directives: {
    ripple: ripple["a" /* default */]
  },
  props: {
    disableIconRotate: Boolean,
    expandIcon: {
      type: String,
      default: '$expand'
    },
    hideActions: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },
  data: function data() {
    return {
      hasMousedown: false
    };
  },
  computed: {
    classes: function classes() {
      return {
        'v-expansion-panel-header--active': this.isActive,
        'v-expansion-panel-header--mousedown': this.hasMousedown
      };
    },
    isActive: function isActive() {
      return this.expansionPanel.isActive;
    },
    isDisabled: function isDisabled() {
      return this.expansionPanel.isDisabled;
    },
    isReadonly: function isReadonly() {
      return this.expansionPanel.isReadonly;
    }
  },
  created: function created() {
    this.expansionPanel.registerHeader(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.expansionPanel.unregisterHeader();
  },
  methods: {
    onClick: function onClick(e) {
      this.$emit('click', e);
    },
    genIcon: function genIcon() {
      var icon = Object(helpers["q" /* getSlot */])(this, 'actions') || [this.$createElement(VIcon["a" /* default */], this.expandIcon)];
      return this.$createElement(transitions["c" /* VFadeTransition */], [this.$createElement('div', {
        staticClass: 'v-expansion-panel-header__icon',
        class: {
          'v-expansion-panel-header__icon--disable-rotate': this.disableIconRotate
        },
        directives: [{
          name: 'show',
          value: !this.isDisabled
        }]
      }, icon)]);
    }
  },
  render: function render(h) {
    var _this = this;

    return h('button', this.setBackgroundColor(this.color, {
      staticClass: 'v-expansion-panel-header',
      class: this.classes,
      attrs: {
        tabindex: this.isDisabled ? -1 : null,
        type: 'button',
        'aria-expanded': this.isActive
      },
      directives: [{
        name: 'ripple',
        value: this.ripple
      }],
      on: VExpansionPanelHeader_objectSpread(VExpansionPanelHeader_objectSpread({}, this.$listeners), {}, {
        click: this.onClick,
        mousedown: function mousedown() {
          return _this.hasMousedown = true;
        },
        mouseup: function mouseup() {
          return _this.hasMousedown = false;
        }
      })
    }), [Object(helpers["q" /* getSlot */])(this, 'default', {
      open: this.isActive
    }, true), this.hideActions || this.genIcon()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat.js
var es_array_unscopables_flat = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VExpansionPanel/VExpansionPanel.sass
var VExpansionPanel_VExpansionPanel = __webpack_require__(886);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js











function VExpansionPanels_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function VExpansionPanels_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? VExpansionPanels_ownKeys(Object(source), !0).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : VExpansionPanels_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Styles
 // Components

 // Utilities


/* @vue/component */

/* harmony default export */ var VExpansionPanels = (VItemGroup["a" /* BaseItemGroup */].extend({
  name: 'v-expansion-panels',
  provide: function provide() {
    return {
      expansionPanels: this
    };
  },
  props: {
    accordion: Boolean,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    focusable: Boolean,
    inset: Boolean,
    popout: Boolean,
    readonly: Boolean,
    tile: Boolean
  },
  computed: {
    classes: function classes() {
      return VExpansionPanels_objectSpread(VExpansionPanels_objectSpread({}, VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this)), {}, {
        'v-expansion-panels': true,
        'v-expansion-panels--accordion': this.accordion,
        'v-expansion-panels--flat': this.flat,
        'v-expansion-panels--hover': this.hover,
        'v-expansion-panels--focusable': this.focusable,
        'v-expansion-panels--inset': this.inset,
        'v-expansion-panels--popout': this.popout,
        'v-expansion-panels--tile': this.tile
      });
    }
  },
  created: function created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('expand')) {
      Object(console["a" /* breaking */])('expand', 'multiple', this);
    }
    /* istanbul ignore next */


    if (Array.isArray(this.value) && this.value.length > 0 && typeof this.value[0] === 'boolean') {
      Object(console["a" /* breaking */])(':value="[true, false, true]"', ':value="[0, 2]"', this);
    }
  },
  methods: {
    updateItem: function updateItem(item, index) {
      var value = this.getValue(item, index);
      var nextValue = this.getValue(item, index + 1);
      item.isActive = this.toggleMethod(value);
      item.nextIsActive = this.toggleMethod(nextValue);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon_VIcon = __webpack_require__(318);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(222);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(801);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paret_ResourceParetvue_type_script_lang_ts_,
  ResourceParetvue_type_template_id_af33c444_lang_html_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var paret_ResourceParet = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */












installComponents_default()(component, {VChip: VChip["a" /* default */],VExpansionPanel: VExpansionPanel,VExpansionPanelContent: VExpansionPanelContent,VExpansionPanelHeader: VExpansionPanelHeader,VExpansionPanels: VExpansionPanels,VIcon: VIcon_VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemTitle: components_VList["b" /* VListItemTitle */],VTooltip: VTooltip["a" /* default */]})


/***/ })

}]);