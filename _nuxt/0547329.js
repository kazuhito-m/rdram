(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);





var ResourceType = /*#__PURE__*/function () {
  function ResourceType(id, name, iconKey) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ResourceType);

    this.id = id;
    this.name = name;
    this.iconKey = iconKey;
    ResourceType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ResourceType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return other.id === this.id;
    }
  }], [{
    key: "values",
    value: function values() {
      return ResourceType.vs;
    }
  }, {
    key: "ofId",
    value: function ofId(id) {
      var found = this.vs.find(function (item) {
        return item.id === id;
      });
      return found ? found : null;
    }
  }]);

  return ResourceType;
}();


ResourceType.vs = [];
ResourceType.システム = new ResourceType(1, 'システム', 'mdi-desktop-mac-dashboard');
ResourceType.自社システム = new ResourceType(2, '自社システム', 'mdi-desktop-tower-monitor');
ResourceType.外部システム = new ResourceType(3, '外部システム', 'mdi-server');
ResourceType.目的 = new ResourceType(4, '目的', 'mdi-bullseye-arrow');
ResourceType.アクター = new ResourceType(5, 'アクター', 'mdi-account');
ResourceType.要求 = new ResourceType(6, '要求', 'mdi-hand-heart-outline');
ResourceType.要件 = new ResourceType(7, '要件', 'mdi-handshake-outline');
ResourceType.業務 = new ResourceType(8, '業務', 'mdi-cog-outline');
ResourceType.商品 = new ResourceType(9, '商品', 'mdi-package-variant-closed');
ResourceType.住宅 = new ResourceType(10, '住宅', 'mdi-home-variant');
ResourceType.契約 = new ResourceType(11, '契約', 'mdi-file-key-outline');
ResourceType.サービス = new ResourceType(12, 'サービス', 'mdi-room-service-outline');
ResourceType.組織 = new ResourceType(13, '組織', 'mdi-sitemap');
ResourceType.会社 = new ResourceType(14, '会社', 'mdi-office-building-outline');
ResourceType.在庫 = new ResourceType(15, '在庫', 'mdi-stack-exchange');
ResourceType.配送 = new ResourceType(16, '配送', 'mdi-truck-outline');
ResourceType.条件 = new ResourceType(17, '条件', 'mdi-call-split');
ResourceType.利用シーン = new ResourceType(25, '利用シーン', 'mdi-video-account');
ResourceType.シナリオ = new ResourceType(32, 'シナリオ', 'mdi-script-text-outline');
ResourceType.ユースケース = new ResourceType(23, 'ユースケース', 'mdi-alpha-u-circle-outline');
ResourceType.情報 = new ResourceType(18, '情報', 'mdi-text-box-outline');
ResourceType.情報グループ = new ResourceType(19, '情報グループ', 'mdi-text-box-multiple-outline');
ResourceType.画面 = new ResourceType(20, '画面', 'mdi-application');
ResourceType.アクティビティ = new ResourceType(21, 'アクティビティ', 'mdi-alpha-a-box-outline');
ResourceType.イベント = new ResourceType(22, 'イベント', 'mdi-lightning-bolt');
ResourceType.ビジネスユースケース = new ResourceType(24, 'ビジネスユースケース', 'mdi-alpha-b-circle-outline');
ResourceType.タイマー = new ResourceType(26, 'タイマー', 'mdi-alarm');
ResourceType.状態 = new ResourceType(27, '状態', 'mdi-circle-slice-4');
ResourceType.状態グループ = new ResourceType(28, '状態グループ', 'mdi-circle-slice-4');
ResourceType.バリエーション = new ResourceType(29, 'バリエーション', 'mdi-lock-pattern');
ResourceType.表形式の条件 = new ResourceType(30, '表形式の条件', 'mdi-table');
ResourceType.項目説明 = new ResourceType(31, '項目説明', '');
ResourceType.スライド = new ResourceType(32, 'スライド', 'mdi-presentation');
ResourceType.説明 = new ResourceType(101, '説明', 'mdi-comment-outline');
ResourceType.始点終点 = new ResourceType(102, '始点・終点', 'mdi-source-commit-start');
ResourceType.遷移 = new ResourceType(801, '遷移', ''); // 資料にあったが…これはなんだろう？

ResourceType.Webサービス = new ResourceType(901, 'Webサービス', 'mdi-cloud-download-outline');
ResourceType.通帳 = new ResourceType(902, '通帳', 'mdi-badge-account-horizontal-outline');
ResourceType.データベース = new ResourceType(903, 'データベース', 'mdi-database');
ResourceType.機器 = new ResourceType(904, '機器', 'mdi-chip');
ResourceType.決済 = new ResourceType(905, '決済', 'mdi-cash-register');
ResourceType.背景 = new ResourceType(906, '背景', 'mdi-wallpaper');
ResourceType.お金 = new ResourceType(907, 'お金', 'mdi-cash-100');

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartOrEndPoint; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(138);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「始点」または「終点」。
 */

var StartOrEndPoint = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(StartOrEndPoint, _Resource);

  var _super = _createSuper(StartOrEndPoint);

  function StartOrEndPoint(resourceId, name, description, deletable) {
    var _this;

    var startPoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, StartOrEndPoint);

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].始点終点.id, name, description);
    _this.deletable = deletable;
    _this.startPoint = startPoint;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(StartOrEndPoint, [{
    key: "renewDefaultName",
    value: function renewDefaultName(seq) {
      var type = this.type;
      var newName = '終点' + this.zeroPadding(seq, 2);
      return this.withName(newName);
    }
  }, {
    key: "zeroPadding",
    value: function zeroPadding(value, point) {
      return ('0'.repeat(point) + value).slice(-1 * point);
    }
  }]);

  return StartOrEndPoint;
}(_Resource__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=template&id=21b96a13&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"dark":""}},[(_vm.error.statusCode === 404)?_c('h1',[_vm._v("\n    "+_vm._s(_vm.pageNotFound)+"\n  ")]):_c('h1',[_vm._v("\n    "+_vm._s(_vm.otherError)+"\n  ")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("\n    Home page\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=template&id=21b96a13&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(106);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=script&lang=ts&








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



var errorvue_type_script_lang_ts_default_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(default_1, _Vue);

  var _super = _createSuper(default_1);

  function default_1() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, default_1);

    _this = _super.apply(this, arguments);
    _this.layout = 'empty';
    _this.pageNotFound = '404 Not Found';
    _this.otherError = 'An error occurred';
    _this.error = {
      type: Object,
      default: null,
      statusCode: 0
    };
    return _this;
  }

  Object(createClass["a" /* default */])(default_1, [{
    key: "head",
    value: function head() {
      var title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
      return {
        title: title
      };
    }
  }]);

  return default_1;
}(nuxt_property_decorator_umd["Vue"]);

errorvue_type_script_lang_ts_default_1 = __decorate([nuxt_property_decorator_umd["Component"]], errorvue_type_script_lang_ts_default_1);
/* harmony default export */ var errorvue_type_script_lang_ts_ = (errorvue_type_script_lang_ts_default_1);
// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_errorvue_type_script_lang_ts_ = (errorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/layouts/error.vue?vue&type=style&index=0&id=21b96a13&scoped=true&lang=css&
var errorvue_type_style_index_0_id_21b96a13_scoped_true_lang_css_ = __webpack_require__(542);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(79);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(673);

// CONCATENATED MODULE: ./src/layouts/error.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "21b96a13",
  null
  
)

/* harmony default export */ var error = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VApp: VApp["a" /* default */]})


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableTypeCondition; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 表形式の条件。
 */

var TableTypeCondition = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TableTypeCondition, _Resource);

  var _super = _createSuper(TableTypeCondition);

  function TableTypeCondition(resourceId, name, description, leftVariationId, topVariationId, values) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, TableTypeCondition);

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].表形式の条件.id, name, description);
    _this.leftVariationId = leftVariationId;
    _this.topVariationId = topVariationId;
    _this.values = values;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(TableTypeCondition, [{
    key: "withValues",
    value: function withValues(newValues) {
      var resource = this.clone();
      resource.values = newValues;
      return resource;
    }
  }, {
    key: "valuesOf",
    value: function valuesOf() {
      return this.values.concat();
    }
  }]);

  return TableTypeCondition;
}(_Resource__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


TableTypeCondition.NOTHING_VARIATION_ID = 0;

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);





var RouterType = /*#__PURE__*/function () {
  // static SKETCH = new RouterType(5, 'スケッチ');
  function RouterType(id, name) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RouterType);

    this.id = id;
    this.name = name;
    RouterType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RouterType, [{
    key: "equals",
    value: function equals(other) {
      return this.id === other.id;
    }
  }], [{
    key: "values",
    value: function values() {
      return RouterType.vs;
    }
  }, {
    key: "ofId",
    value: function ofId(id) {
      var found = this.vs.find(function (item) {
        return item.id === id;
      });
      return found ? found : null;
    }
  }]);

  return RouterType;
}();


RouterType.vs = [];
RouterType.DIRECT = new RouterType(1, '直線');
RouterType.MANHATTAN = new RouterType(2, 'マンハッタン');
RouterType.CIRCUIT = new RouterType(3, 'サーキット');
RouterType.SPLINE = new RouterType(4, 'スプライン');

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Status; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



var Status = /*#__PURE__*/function () {
  function Status(currentProductId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Status);

    this.currentProductId = currentProductId;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Status, null, [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Status("");
    }
  }]);

  return Status;
}();



/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94);
/* harmony import */ var _Purpose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(177);
/* harmony import */ var _Requirement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207);
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(208);
/* harmony import */ var _Scenario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(209);
/* harmony import */ var _StartOrEndPoint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(103);
/* harmony import */ var _Variation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(174);
/* harmony import */ var _Condition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(173);
/* harmony import */ var _TableTypeCondition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(127);















var ResourceFactory = /*#__PURE__*/function () {
  function ResourceFactory() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ResourceFactory);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ResourceFactory, [{
    key: "create",
    value: function create(name, resourceType, newResourceId, nowResouces) {
      var resource = this.createEmptyResoruce(name, resourceType, newResourceId);
      if (resource instanceof _HasContentResource__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]) return this.setDefaultName(resource, nowResouces);
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].始点終点.equals(resourceType)) return this.setDefaultNameForEndPoint(resource, nowResouces);
      return resource;
    }
  }, {
    key: "createEmptyResoruce",
    value: function createEmptyResoruce(name, resourceType, newResourceId) {
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].目的.equals(resourceType)) return new _Purpose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"](newResourceId, name, "", "");
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].要求.equals(resourceType)) return new _Request__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"](newResourceId, name, "", "");
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].要件.equals(resourceType)) return new _Requirement__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"](newResourceId, name, "", "");
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].シナリオ.equals(resourceType)) return new _Scenario__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"](newResourceId, name, "", "");
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].始点終点.equals(resourceType)) return new _StartOrEndPoint__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"](newResourceId, name, "", true);
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].バリエーション.equals(resourceType)) return new _Variation__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](newResourceId, name, "", ["", ""]);
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].条件.equals(resourceType)) return new _Condition__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](newResourceId, "", "", "");

      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].表形式の条件.equals(resourceType)) {
        return new _TableTypeCondition__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"](newResourceId, "", "", _TableTypeCondition__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].NOTHING_VARIATION_ID, _TableTypeCondition__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].NOTHING_VARIATION_ID, [["対象の項目", "上バリエ1", "上バリエ2"], ["左バリエ1", "", ""], ["左バリエ2", "", ""]]);
      }

      return new _Resource__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](newResourceId, resourceType.id, name, "");
    }
  }, {
    key: "setDefaultName",
    value: function setDefaultName(resource, nowResouces) {
      var r = resource;
      if (r.name.length > 0) return r;
      var i = 1;

      do {
        r = r.renewDefaultName(i++);
      } while (nowResouces.existsSomeName(r.name, r.type));

      return r;
    }
  }, {
    key: "setDefaultNameForEndPoint",
    value: function setDefaultNameForEndPoint(resource, nowResouces) {
      var r = resource;
      if (r.name.length > 0) return r;
      var i = 2;

      do {
        r = r.renewDefaultName(i++);
      } while (nowResouces.existsSomeName(r.name, r.type));

      return r;
    }
  }]);

  return ResourceFactory;
}();



/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Resources_Resources; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(14);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(62);

// EXTERNAL MODULE: ./src/domain/resource/ResourceFactory.ts
var ResourceFactory = __webpack_require__(167);

// EXTERNAL MODULE: ./src/domain/relation/RouterType.ts
var RouterType = __webpack_require__(149);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(1);

// CONCATENATED MODULE: ./src/domain/relation/RelationWithResources.ts





var RelationWithResources_RelationWithResources = /*#__PURE__*/function () {
  function RelationWithResources(id, fromResource, toResource, routerType, midpoints) {
    Object(classCallCheck["a" /* default */])(this, RelationWithResources);

    this.id = id;
    this.fromResource = fromResource;
    this.toResource = toResource;
    this.routerType = routerType;
    this.midpoints = midpoints;
  }

  Object(createClass["a" /* default */])(RelationWithResources, [{
    key: "isFlowRelation",
    value: function isFlowRelation() {
      return this.betweenBothFromTo(ResourceType["a" /* default */].アクティビティ) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].アクティビティ, ResourceType["a" /* default */].始点終点) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].状態, ResourceType["a" /* default */].ユースケース) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].状態, ResourceType["a" /* default */].始点終点) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].状態グループ, ResourceType["a" /* default */].ユースケース) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].状態グループ, ResourceType["a" /* default */].始点終点);
    }
    /**
     * from/to両方共「同一タイプのリソース」か。
     */

  }, {
    key: "betweenBothFromTo",
    value: function betweenBothFromTo(resourceType) {
      return resourceType.equals(this.fromType) && resourceType.equals(this.toType);
    }
    /**
     * from/to問わず「2つのタイプのリソース」か。
     */

  }, {
    key: "betweenRevercibleFromTo",
    value: function betweenRevercibleFromTo(typeOne, typeTwo) {
      return typeOne.equals(this.fromType) && typeTwo.equals(this.toType) || typeTwo.equals(this.fromType) && typeOne.equals(this.toType);
    }
  }, {
    key: "existsType",
    value: function existsType(resourceType) {
      return resourceType.equals(this.fromType) || resourceType.equals(this.toType);
    }
  }, {
    key: "fromType",
    get: function get() {
      return this.fromResource.type;
    }
  }, {
    key: "toType",
    get: function get() {
      return this.toResource.type;
    }
  }], [{
    key: "of",
    value: function of(relation, fromResource, toResource) {
      return new RelationWithResources(relation.id, fromResource, toResource, RouterType["a" /* default */].ofId(relation.routerTypeId), relation.midpoints);
    }
  }]);

  return RelationWithResources;
}();


// CONCATENATED MODULE: ./src/domain/resource/Resources.ts















var Resources_Resources = /*#__PURE__*/function () {
  function Resources(values) {
    Object(classCallCheck["a" /* default */])(this, Resources);

    this.values = values;
  }

  Object(createClass["a" /* default */])(Resources, [{
    key: "createResourceOf",
    value: function createResourceOf(name, resourceType, resourceId) {
      var factory = new ResourceFactory["a" /* default */]();
      return factory.create(name, resourceType, resourceId, this);
    }
  }, {
    key: "prototypeResourceOf",
    value: function prototypeResourceOf(resourceType) {
      return this.createResourceOf("", resourceType, Resource["a" /* default */].YET_NUMBERING_ID);
    }
  }, {
    key: "existsSomeName",
    value: function existsSomeName(name, type) {
      return this.values.filter(function (resource) {
        return resource.name === name;
      }).some(function (resource) {
        return resource.type.equals(type);
      });
    }
  }, {
    key: "of",
    value: function of(resourceId) {
      var found = this.values.find(function (resource) {
        return resource.resourceId === resourceId;
      });
      return found ? found : null;
    }
  }, {
    key: "typeOf",
    value: function typeOf(resourceType) {
      var newValues = this.values.filter(function (r) {
        return resourceType.equals(r.type);
      });
      return new Resources(newValues);
    }
  }, {
    key: "add",
    value: function add(resource) {
      var newValues = Array.from(this.values);
      newValues.push(resource);
      return new Resources(newValues);
    }
  }, {
    key: "remove",
    value: function remove(resource) {
      var newValues = this.values.filter(function (r) {
        return r.resourceId !== resource.resourceId;
      });
      return new Resources(newValues);
    }
  }, {
    key: "meage",
    value: function meage(resource) {
      var newValues = this.values.map(function (p) {
        return p.resourceId === resource.resourceId ? resource : p;
      });
      if (newValues.every(function (p) {
        return p !== resource;
      })) newValues.push(resource);
      return new Resources(newValues);
    }
  }, {
    key: "relationWithResourcesOf",
    value: function relationWithResourcesOf(relation) {
      var fromResource = this.of(relation.fromResourceId);
      var toResource = this.of(relation.toResourceId);
      if (!fromResource || !toResource) return null;
      return RelationWithResources_RelationWithResources.of(relation, fromResource, toResource);
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.values.forEach(func);
    }
  }, {
    key: "map",
    value: function map(func) {
      return this.values.map(func);
    }
  }, {
    key: "filter",
    value: function filter(func) {
      return this.values.filter(func);
    }
  }, {
    key: "length",
    get: function get() {
      return this.values.length;
    }
  }, {
    key: "last",
    value: function last() {
      return this.values[this.length - 1];
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Resources([]);
    }
  }, {
    key: "empty",
    value: function empty() {
      return new Resources([]);
    }
  }]);

  return Resources;
}();



/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Condition; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 条件(名前が付けられた条件)。
 */

var Condition = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Condition, _Resource);

  var _super = _createSuper(Condition);

  function Condition(resourceId, name, description, value) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Condition);

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].条件.id, name, description);
    _this.value = value;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Condition, [{
    key: "withValue",
    value: function withValue(newValue) {
      var resource = this.clone();
      resource.value = newValue.trim();
      return resource;
    }
  }]);

  return Condition;
}(_Resource__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);


Condition.CONDITION_VALUE_MAX_LENGTH = 128;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Variation; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * バリエーション。
 */

var Variation = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Variation, _Resource);

  var _super = _createSuper(Variation);

  function Variation(resourceId, name, description, values) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Variation);

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].バリエーション.id, name, description);
    _this.values = values;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Variation, [{
    key: "withValues",
    value: function withValues(newValues) {
      var resource = this.clone();
      resource.values = newValues;
      return resource;
    }
  }, {
    key: "valuesOf",
    value: function valuesOf() {
      return this.values.concat();
    }
  }]);

  return Variation;
}(_Resource__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


Variation.CONDITION_VALUE_MAX_LENGTH = 128;

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Purpose; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「目的」リソース。
 */

var Purpose = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Purpose, _HasContentResource);

  var _super = _createSuper(Purpose);

  function Purpose(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Purpose);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].目的.id, name, description, content);
  }

  return Purpose;
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);



/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStrage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _domain_strage_Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(166);
/* harmony import */ var _domain_product_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);





var LocalStrage = /*#__PURE__*/function () {
  function LocalStrage(updateAt, status, products) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LocalStrage);

    this.updateAt = updateAt;
    this.status = status;
    this.products = products;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LocalStrage, [{
    key: "renewTimeStamp",
    value: function renewTimeStamp() {
      return new LocalStrage(new Date(), this.status, this.products);
    }
  }, {
    key: "currentProduct",
    value: function currentProduct() {
      return this.products.of(this.status.currentProductId);
    }
  }, {
    key: "isCurrentProduct",
    value: function isCurrentProduct(product) {
      return this.status.currentProductId === product.id;
    }
  }, {
    key: "merge",
    value: function merge(product) {
      return new LocalStrage(this.updateAt, this.status, this.products.merge(product));
    }
  }, {
    key: "changeCurrent",
    value: function changeCurrent(product) {
      return new LocalStrage(this.updateAt, new _domain_strage_Status__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](product.id), this.products.merge(product));
    }
  }, {
    key: "with",
    value: function _with(mearged) {
      return new LocalStrage(this.updateAt, this.status, mearged);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new LocalStrage(new Date(), _domain_strage_Status__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].prototypeOf(), _domain_product_Products__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].prototypeOf());
    }
  }]);

  return LocalStrage;
}();



/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Products; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(150);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);











var Products = /*#__PURE__*/function () {
  function Products(values) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Products);

    this.values = values;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Products, [{
    key: "existsSomeName",
    value: function existsSomeName(name) {
      return this.values.some(function (product) {
        return product.name === name;
      });
    }
  }, {
    key: "of",
    value: function of(productId) {
      var found = this.values.find(function (product) {
        return product.id === productId;
      });
      return found ? found : null;
    }
  }, {
    key: "merge",
    value: function merge(product) {
      var newValues = Array.from(this.values);
      var index = newValues.findIndex(function (p) {
        return p.id === product.id;
      });

      if (index < 0) {
        newValues.push(product);
      } else {
        newValues[index] = product;
      }

      return new Products(newValues);
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.values.forEach(func);
    }
  }, {
    key: "list",
    value: function list() {
      var result = Array.from(this.values);
      return result;
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Products([]);
    }
  }]);

  return Products;
}();



/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettings; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



var UserSettings = /*#__PURE__*/function () {
  function UserSettings(autoSave, darkMode) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, UserSettings);

    this.autoSave = autoSave;
    this.darkMode = darkMode;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(UserSettings, null, [{
    key: "create",
    value: function create() {
      return new UserSettings(true, true);
    }
  }]);

  return UserSettings;
}();



/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Requirement; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「要件」リソース。
 */

var Requirement = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Requirement, _HasContentResource);

  var _super = _createSuper(Requirement);

  function Requirement(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Requirement);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].要件.id, name, description, content);
  }

  return Requirement;
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);



/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「要求」リソース。
 */

var Request = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Request, _HasContentResource);

  var _super = _createSuper(Request);

  function Request(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Request);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].要求.id, name, description, content);
  }

  return Request;
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);



/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scenario; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「シナリオ」リソース。
 */

var Scenario = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Scenario, _HasContentResource);

  var _super = _createSuper(Scenario);

  function Scenario(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Scenario);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].シナリオ.id, name, description, content);
  }

  return Scenario;
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);



/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessContextDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var BusinessContextDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessContextDiagram, _Diagram);

  var _super = _createSuper(BusinessContextDiagram);

  function BusinessContextDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, BusinessContextDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(BusinessContextDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].業務, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].商品, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].住宅, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].契約, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].サービス, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].組織, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].会社, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].自社システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].情報];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].組織.equals(resType) || _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].会社.equals(resType)) {
        width = 80;
        height = 35;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].業務.equals(resType)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new BusinessContextDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new BusinessContextDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new BusinessContextDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new BusinessContextDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new BusinessContextDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new BusinessContextDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new BusinessContextDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].ビジネスコンテキスト図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].なし.id);
    }
  }]);

  return BusinessContextDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessUseCaseDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var BusinessUseCaseDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessUseCaseDiagram, _Diagram);

  var _super = _createSuper(BusinessUseCaseDiagram);

  function BusinessUseCaseDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, BusinessUseCaseDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(BusinessUseCaseDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ビジネスユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].商品, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].住宅, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].契約, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].サービス, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].組織, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].会社, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].自社システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].情報, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].条件];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].組織.equals(resType) || _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].会社.equals(resType)) {
        width = 80;
        height = 35;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ビジネスユースケース.equals(resType)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new BusinessUseCaseDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new BusinessUseCaseDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new BusinessUseCaseDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new BusinessUseCaseDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new BusinessUseCaseDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new BusinessUseCaseDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new BusinessUseCaseDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].ビジネスユースケース図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].なし.id);
    }
  }]);

  return BusinessUseCaseDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationModelDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var InformationModelDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(InformationModelDiagram, _Diagram);

  var _super = _createSuper(InformationModelDiagram);

  function InformationModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, InformationModelDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(InformationModelDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].情報, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].情報グループ];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].情報グループ.equals(resType)) {
        width = 80;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new InformationModelDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new InformationModelDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new InformationModelDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new InformationModelDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new InformationModelDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new InformationModelDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new InformationModelDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].情報モデル図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].なし.id);
    }
  }]);

  return InformationModelDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateModelDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var StateModelDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(StateModelDiagram, _Diagram);

  var _super = _createSuper(StateModelDiagram);

  function StateModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, StateModelDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(StateModelDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].状態, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].状態グループ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].始点終点];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ユースケース.equals(resType)) {
        width = 120;
        height = 40;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].状態.equals(resType)) {
        width = 160;
        height = 40;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].状態グループ.equals(resType)) {
        width = 200;
        height = 120;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new StateModelDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new StateModelDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new StateModelDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new StateModelDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new StateModelDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new StateModelDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new StateModelDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].状態モデル図.id, name.trim(), [], [], 768, 1024, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].グリッド.id);
    }
  }]);

  return StateModelDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemContextDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var SystemContextDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SystemContextDiagram, _Diagram);

  var _super = _createSuper(SystemContextDiagram);

  function SystemContextDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, SystemContextDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(SystemContextDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].目的, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].自社システム];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].システム.equals(resType)) {
        width = 350;
        height = 75;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new SystemContextDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new SystemContextDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new SystemContextDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new SystemContextDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new SystemContextDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new SystemContextDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name, resources) {
      var diagram = new SystemContextDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].システムコンテキスト図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].なし.id); // 特殊処理、Resource種が「システム」で、かつ「ひとつだけ」なら予め足してしまう。

      var resoucesOfSystem = resources.typeOf(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].システム);
      if (resoucesOfSystem.length !== 1) return diagram;
      var system = resoucesOfSystem.last();
      var placement = diagram.createPlacementAtCenter(system);
      if (!placement) return diagram;
      var modified = diagram.addPlacement(placement);
      return modified;
    }
  }]);

  return SystemContextDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestModelDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var RequestModelDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RequestModelDiagram, _Diagram);

  var _super = _createSuper(RequestModelDiagram);

  function RequestModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, RequestModelDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(RequestModelDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].要求, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].要件];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].要求.equals(resType) || _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].要件.equals(resType)) {
        width = 200;
        height = 37;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new RequestModelDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new RequestModelDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new RequestModelDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new RequestModelDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new RequestModelDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new RequestModelDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new RequestModelDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].要求モデル図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].なし.id);
    }
  }]);

  return RequestModelDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsageSceneDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var UsageSceneDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UsageSceneDiagram, _Diagram);

  var _super = _createSuper(UsageSceneDiagram);

  function UsageSceneDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, UsageSceneDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(UsageSceneDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].利用シーン, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].シナリオ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクター];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].シナリオ.equals(resType)) {
        width = 350;
        height = 75;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ユースケース.equals(resType)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new UsageSceneDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new UsageSceneDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new UsageSceneDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new UsageSceneDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new UsageSceneDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new UsageSceneDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new UsageSceneDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].利用シーン図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].なし.id);
    }
  }]);

  return UsageSceneDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessFlowDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var BusinessFlowDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessFlowDiagram, _Diagram);

  var _super = _createSuper(BusinessFlowDiagram);

  function BusinessFlowDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, BusinessFlowDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(BusinessFlowDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクティビティ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].始点終点];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクター.equals(resType)) {
        width = 280;
        height = 700;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ユースケース.equals(resType)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new BusinessFlowDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new BusinessFlowDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new BusinessFlowDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new BusinessFlowDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new BusinessFlowDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new BusinessFlowDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new BusinessFlowDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].業務フロー図.id, name.trim(), [], [], 768, 1024, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].グリッド.id);
    }
  }]);

  return BusinessFlowDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseCaseCompositeDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var UseCaseCompositeDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UseCaseCompositeDiagram, _Diagram);

  var _super = _createSuper(UseCaseCompositeDiagram);

  function UseCaseCompositeDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, UseCaseCompositeDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(UseCaseCompositeDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].アクティビティ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].情報, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].画面, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].イベント, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].バリエーション, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].条件, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].表形式の条件];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ユースケース.equals(resource.type)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId, false);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new UseCaseCompositeDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new UseCaseCompositeDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new UseCaseCompositeDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new UseCaseCompositeDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new UseCaseCompositeDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new UseCaseCompositeDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new UseCaseCompositeDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].ユースケース複合図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].なし.id);
    }
  }]);

  return UseCaseCompositeDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariationAndConditionDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var VariationAndConditionDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VariationAndConditionDiagram, _Diagram);

  var _super = _createSuper(VariationAndConditionDiagram);

  function VariationAndConditionDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, VariationAndConditionDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(VariationAndConditionDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].バリエーション, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].条件, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].表形式の条件];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](left, top, width, height, resource.resourceId, false);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new VariationAndConditionDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new VariationAndConditionDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new VariationAndConditionDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new VariationAndConditionDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new VariationAndConditionDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new VariationAndConditionDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new VariationAndConditionDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].バリエーション条件.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_14__["default"].なし.id);
    }
  }]);

  return VariationAndConditionDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);



/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Product_Product; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(61);

// EXTERNAL MODULE: ./src/domain/setting/UserSettings.ts
var UserSettings = __webpack_require__(206);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(170);

// EXTERNAL MODULE: ./src/domain/world/Uuid.ts
var Uuid = __webpack_require__(288);

// CONCATENATED MODULE: ./src/domain/product/ProductIdentifier.ts




var ProductIdentifier_ProductIdentifier = /*#__PURE__*/function () {
  function ProductIdentifier(value) {
    Object(classCallCheck["a" /* default */])(this, ProductIdentifier);

    this.value = value;
  }

  Object(createClass["a" /* default */])(ProductIdentifier, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }], [{
    key: "ganerate",
    value: function ganerate() {
      var uuid = Uuid["a" /* default */].generate();
      return new ProductIdentifier(uuid);
    }
  }]);

  return ProductIdentifier;
}();


// EXTERNAL MODULE: ./src/domain/diagram/Diagrams.ts + 1 modules
var Diagrams = __webpack_require__(231);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(1);

// EXTERNAL MODULE: ./src/domain/resource/ResourceFactory.ts
var ResourceFactory = __webpack_require__(167);

// EXTERNAL MODULE: ./src/domain/resource/StartOrEndPoint.ts
var StartOrEndPoint = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(14);

// CONCATENATED MODULE: ./src/domain/relation/Relations.ts











var Relations_Relations = /*#__PURE__*/function () {
  function Relations(values) {
    Object(classCallCheck["a" /* default */])(this, Relations);

    this.values = values;
  }

  Object(createClass["a" /* default */])(Relations, [{
    key: "exists",
    value: function exists(relation) {
      return this.values.some(function (i) {
        return i.equalRoute(relation);
      });
    }
  }, {
    key: "existsFromResource",
    value: function existsFromResource(resource) {
      return this.values.some(function (i) {
        return i.fromResourceId === resource.resourceId;
      });
    }
    /**
     * ルートが逆も含め(f->t,t->f のどちらか)在る場合。
     */

  }, {
    key: "existsOrReversivle",
    value: function existsOrReversivle(relation) {
      return this.values.some(function (i) {
        return i.equalRouteReversivle(relation);
      });
    }
    /**
     * ルートが両方(f->t,t->f の2つとも)在る場合。
     */

  }, {
    key: "existsBothReversivle",
    value: function existsBothReversivle(relation) {
      var rs = this.values;
      var reverse = relation.reverse();
      return rs.some(function (i) {
        return i.equalRoute(relation);
      }) && rs.some(function (i) {
        return i.equalRoute(reverse);
      });
    }
  }, {
    key: "of",
    value: function of(relationId) {
      var found = this.values.find(function (Relation) {
        return Relation.id === relationId;
      });
      return found ? found : null;
    }
  }, {
    key: "add",
    value: function add(relation) {
      var newValues = Array.from(this.values);
      newValues.push(relation);
      return new Relations(newValues);
    }
  }, {
    key: "remove",
    value: function remove(relation) {
      var newValues = this.values.filter(function (value) {
        return value.id !== relation.id;
      });
      return new Relations(newValues);
    }
  }, {
    key: "meage",
    value: function meage(relation) {
      if (this.values.some(function (d) {
        return d.id === relation.id;
      })) {
        var _newValues = this.values.map(function (d) {
          return d.id === relation.id ? relation : d;
        });

        return new Relations(_newValues);
      }

      var newValues = Array.from(this.values);
      newValues.push(relation);
      return new Relations(newValues);
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.values.forEach(func);
    }
  }, {
    key: "last",
    value: function last() {
      return this.values[this.values.length - 1];
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Relations([]);
    }
  }, {
    key: "empty",
    value: function empty() {
      return new Relations([]);
    }
  }]);

  return Relations;
}();


// CONCATENATED MODULE: ./src/domain/product/Product.ts














var Product_Product = /*#__PURE__*/function () {
  function Product(updateAt, id, name, userSettings, diagrams, resources, resourceIdSequence) {
    Object(classCallCheck["a" /* default */])(this, Product);

    this.updateAt = updateAt;
    this.id = id;
    this.name = name;
    this.userSettings = userSettings;
    this.diagrams = diagrams;
    this.resources = resources;
    this.resourceIdSequence = resourceIdSequence;
  }

  Object(createClass["a" /* default */])(Product, [{
    key: "relationable",
    value: function relationable(relation, diagramId) {
      var diagram = this.diagrams.of(diagramId);
      if (!diagram) return "指定されたダイアグラムがありません。";
      var relationPlus = this.resources.relationWithResourcesOf(relation);
      if (!relationPlus) return "対応するリソースがありません。";
      var relations = new Relations_Relations(diagram.relations); // TODO Diagram側にこれをつけたい。

      if (relations.exists(relation)) return "すでに関連が存在します。";

      if (relationPlus.fromType.equals(ResourceType["a" /* default */].始点終点)) {
        var startPoint = relationPlus.fromResource;

        if (startPoint.startPoint) {
          if (relations.existsFromResource(startPoint)) {
            return "始点からは一つの関連しか引けません。";
          }
        }
      }

      if (relationPlus.existsType(ResourceType["a" /* default */].始点終点)) {
        if (!relationPlus.existsType(ResourceType["a" /* default */].アクティビティ) && !relationPlus.existsType(ResourceType["a" /* default */].状態) && !relationPlus.existsType(ResourceType["a" /* default */].状態グループ)) {
          return "そのアイコン種類の間に関連は引けません。";
        }
      }

      if (relationPlus.betweenBothFromTo(ResourceType["a" /* default */].アクティビティ)) {
        if (relations.existsBothReversivle(relation)) return "すでに関連が存在します。";
        return "";
      }

      if (relationPlus.existsType(ResourceType["a" /* default */].状態) || relationPlus.existsType(ResourceType["a" /* default */].状態グループ)) {
        if (!relationPlus.existsType(ResourceType["a" /* default */].ユースケース) && !relationPlus.existsType(ResourceType["a" /* default */].始点終点)) {
          return "そのアイコン種類の間に関連は引けません。";
        }

        return "";
      }

      if (relations.existsOrReversivle(relation)) return "すでに関連が存在します。";
      return "";
    }
  }, {
    key: "replaceOf",
    value: function replaceOf(newDiagram) {
      return this.with(this.diagrams.meage(newDiagram));
    }
  }, {
    key: "removeOf",
    value: function removeOf(resource) {
      return new Product(this.updateAt, this.id, this.name, this.userSettings, this.diagrams.removeResouceOf(resource), this.resources.remove(resource), this.resourceIdSequence);
    }
  }, {
    key: "with",
    value: function _with(newDiagrams) {
      return new Product(this.updateAt, this.id, this.name, this.userSettings, newDiagrams, this.resources, this.resourceIdSequence);
    }
  }, {
    key: "withResources",
    value: function withResources(newResources) {
      return new Product(this.updateAt, this.id, this.name, this.userSettings, this.diagrams, newResources, this.resourceIdSequence);
    }
  }, {
    key: "renewTimeStamp",
    value: function renewTimeStamp() {
      return new Product(new Date(), this.id, this.name, this.userSettings, this.diagrams, this.resources, this.resourceIdSequence);
    }
  }, {
    key: "moveNextResourceIdSequence",
    value: function moveNextResourceIdSequence() {
      return new Product(this.updateAt, this.id, this.name, this.userSettings, this.diagrams, this.resources, this.resourceIdSequence + 1);
    }
  }, {
    key: "createAndAddResource",
    value: function createAndAddResource() {
      var factory = new ResourceFactory["a" /* default */]();
      var addedResources = this.resources.add(factory.create(this.name, ResourceType["a" /* default */].システム, 1, this.resources)).add(new StartOrEndPoint["a" /* default */](2, "始点", "", true)).add(new StartOrEndPoint["a" /* default */](3, "終点", "", false));
      return this.withResources(addedResources);
    }
  }, {
    key: "createAndAddDiagram",
    value: function createAndAddDiagram(name, diagramType) {
      var diagrams = this.diagrams;
      var diagram = diagrams.createNewDiagram(name, diagramType, this.resources);
      var addedDiagrams = diagrams.add(diagram);
      return this.with(addedDiagrams);
    }
  }, {
    key: "lastCreatdResource",
    value: function lastCreatdResource() {
      return this.resources.last();
    }
  }, {
    key: "isFlowRelation",
    value: function isFlowRelation(relation) {
      var relationPlus = this.resources.relationWithResourcesOf(relation);
      if (!relationPlus) return false;
      return relationPlus.isFlowRelation();
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newName) {
      // 特殊処理。プロダクトに最初からあるリソースは、ここで作る。
      var factory = new ResourceFactory["a" /* default */]();
      var resources = [factory.create(newName, ResourceType["a" /* default */].システム, 1, Resources["a" /* default */].empty()), new StartOrEndPoint["a" /* default */](2, "始点", "", false, true), new StartOrEndPoint["a" /* default */](3, "終点", "", false, false)];
      return new Product(new Date(), ProductIdentifier_ProductIdentifier.ganerate().toString(), newName, UserSettings["a" /* default */].create(), Diagrams["a" /* default */].empty(), new Resources["a" /* default */](resources), 4);
    }
  }]);

  return Product;
}();



/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Serializer_Serializer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(60);

// EXTERNAL MODULE: ./src/domain/strage/LocalStrage.ts
var LocalStrage = __webpack_require__(204);

// EXTERNAL MODULE: ./src/domain/setting/UserSettings.ts
var UserSettings = __webpack_require__(206);

// EXTERNAL MODULE: ./src/domain/product/Product.ts + 2 modules
var Product = __webpack_require__(228);

// EXTERNAL MODULE: ./src/domain/product/Products.ts
var Products = __webpack_require__(205);

// EXTERNAL MODULE: ./src/domain/strage/Status.ts
var Status = __webpack_require__(166);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(170);

// EXTERNAL MODULE: ./src/domain/diagram/Diagrams.ts + 1 modules
var Diagrams = __webpack_require__(231);

// EXTERNAL MODULE: ./src/domain/diagram/Diagram.ts
var Diagram = __webpack_require__(45);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(62);

// EXTERNAL MODULE: ./src/domain/resource/Purpose.ts
var Purpose = __webpack_require__(177);

// EXTERNAL MODULE: ./src/domain/resource/Request.ts
var Request = __webpack_require__(208);

// EXTERNAL MODULE: ./src/domain/resource/Requirement.ts
var Requirement = __webpack_require__(207);

// EXTERNAL MODULE: ./src/domain/diagram/placement/Placement.ts
var Placement = __webpack_require__(48);

// CONCATENATED MODULE: ./src/domain/relation/Midpoint.ts



var Midpoint_Midpoint = /*#__PURE__*/function () {
  function Midpoint(id, left, top) {
    Object(classCallCheck["a" /* default */])(this, Midpoint);

    this.id = id;
    this.left = left;
    this.top = top;
  }

  Object(createClass["a" /* default */])(Midpoint, [{
    key: "clone",
    value: function clone() {
      return new Midpoint(this.id, this.left, this.top);
    }
  }]);

  return Midpoint;
}();


// EXTERNAL MODULE: ./src/domain/relation/Relation.ts
var Relation = __webpack_require__(283);

// EXTERNAL MODULE: ./src/domain/resource/Scenario.ts
var Scenario = __webpack_require__(209);

// EXTERNAL MODULE: ./src/domain/resource/StartOrEndPoint.ts
var StartOrEndPoint = __webpack_require__(103);

// EXTERNAL MODULE: ./src/domain/diagram/systemcontext/SystemContextDiagram.ts
var SystemContextDiagram = __webpack_require__(214);

// EXTERNAL MODULE: ./src/domain/diagram/businesscontext/BusinessContextDiagram.ts
var BusinessContextDiagram = __webpack_require__(210);

// EXTERNAL MODULE: ./src/domain/diagram/informationmodel/InformationModelDiagram.ts
var InformationModelDiagram = __webpack_require__(212);

// EXTERNAL MODULE: ./src/domain/diagram/statemodel/StateModelDiagram.ts
var StateModelDiagram = __webpack_require__(213);

// EXTERNAL MODULE: ./src/domain/diagram/requrestmodel/RequestModelDiagram.ts
var RequestModelDiagram = __webpack_require__(215);

// EXTERNAL MODULE: ./src/domain/diagram/businessusecase/BusinessUseCaseDiagram.ts
var BusinessUseCaseDiagram = __webpack_require__(211);

// EXTERNAL MODULE: ./src/domain/diagram/businessflow/BusinessFlowDiagram.ts
var BusinessFlowDiagram = __webpack_require__(217);

// EXTERNAL MODULE: ./src/domain/diagram/usagescene/UsageSceneDiagram.ts
var UsageSceneDiagram = __webpack_require__(216);

// EXTERNAL MODULE: ./src/domain/diagram/usecasecomposite/UseCaseCompositeDiagram.ts
var UseCaseCompositeDiagram = __webpack_require__(218);

// EXTERNAL MODULE: ./src/domain/diagram/variationandcondition/VariationAndConditionDiagram.ts
var VariationAndConditionDiagram = __webpack_require__(219);

// EXTERNAL MODULE: ./src/domain/resource/Variation.ts
var Variation = __webpack_require__(174);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(173);

// EXTERNAL MODULE: ./src/domain/resource/TableTypeCondition.ts
var TableTypeCondition = __webpack_require__(127);

// CONCATENATED MODULE: ./src/domain/Serializer.ts






































var Serializer_Serializer = /*#__PURE__*/function () {
  function Serializer() {
    Object(classCallCheck["a" /* default */])(this, Serializer);

    /** シリアライズで復元する可能性のあるクラスのコンストラクタ。 */
    this.constructors = [LocalStrage["a" /* default */], UserSettings["a" /* default */], Products["a" /* default */], Product["a" /* default */], Date, Status["a" /* default */], Resources["a" /* default */], Resource["a" /* default */], Purpose["a" /* default */], Request["a" /* default */], Requirement["a" /* default */], Scenario["a" /* default */], StartOrEndPoint["a" /* default */], Variation["a" /* default */], Condition["a" /* default */], TableTypeCondition["a" /* default */], Diagrams["a" /* default */], Diagram["a" /* default */], Placement["a" /* default */], Midpoint_Midpoint, Relation["a" /* default */], BusinessContextDiagram["a" /* default */], InformationModelDiagram["a" /* default */], StateModelDiagram["a" /* default */], SystemContextDiagram["a" /* default */], RequestModelDiagram["a" /* default */], BusinessUseCaseDiagram["a" /* default */], BusinessFlowDiagram["a" /* default */], UsageSceneDiagram["a" /* default */], UseCaseCompositeDiagram["a" /* default */], VariationAndConditionDiagram["a" /* default */]];
  }

  Object(createClass["a" /* default */])(Serializer, [{
    key: "cloningOf",
    value: function cloningOf(source) {
      return this.deserialize(this.serialize(source));
    }
  }, {
    key: "serialize",
    value: function serialize(target) {
      this.addClassNameProperty(target); // TODO 元のオブジェクトを上書きまくるのでなんとかしたい

      return JSON.stringify(target, null, 4);
    }
  }, {
    key: "deserialize",
    value: function deserialize(json) {
      var obj = JSON.parse(json);
      return this.toClassInstance(obj);
    }
  }, {
    key: "addClassNameProperty",
    value: function addClassNameProperty(value) {
      var _this = this;

      if (Object(esm_typeof["a" /* default */])(value) !== "object") return;
      if (Array.isArray(value)) return value.forEach(function (i) {
        return _this.addClassNameProperty(i);
      });
      value.__CLASS_NAME = value.constructor.name;

      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          this.addClassNameProperty(value[key]);
        }
      }
    }
  }, {
    key: "toClassInstance",
    value: function toClassInstance(value) {
      var _this2 = this;

      if (Object(esm_typeof["a" /* default */])(value) !== "object") return value;
      if (Array.isArray(value)) return value.map(function (i) {
        return _this2.toClassInstance(i);
      });
      if (!value.__CLASS_NAME) return value;
      if (value.__CLASS_NAME === "Object") return value;
      var obj = this.createInstanceOf(value.__CLASS_NAME);
      if (!obj) return obj;

      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          var inValue = value[key];
          obj[key] = this.toClassInstance(inValue);
        }
      }

      return obj;
    }
  }, {
    key: "createInstanceOf",
    value: function createInstanceOf(className) {
      var foundCons = this.constructors.find(function (cons) {
        return className === cons.name;
      });
      if (!foundCons) return null;
      return new foundCons();
    }
  }]);

  return Serializer;
}();



/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Diagrams_Diagrams; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(14);

// EXTERNAL MODULE: ./src/domain/diagram/Diagram.ts
var Diagram = __webpack_require__(45);

// EXTERNAL MODULE: ./src/domain/diagram/DiagramType.ts
var DiagramType = __webpack_require__(32);

// EXTERNAL MODULE: ./src/domain/diagram/businesscontext/BusinessContextDiagram.ts
var BusinessContextDiagram = __webpack_require__(210);

// EXTERNAL MODULE: ./src/domain/diagram/businessusecase/BusinessUseCaseDiagram.ts
var BusinessUseCaseDiagram = __webpack_require__(211);

// EXTERNAL MODULE: ./src/domain/diagram/informationmodel/InformationModelDiagram.ts
var InformationModelDiagram = __webpack_require__(212);

// EXTERNAL MODULE: ./src/domain/diagram/statemodel/StateModelDiagram.ts
var StateModelDiagram = __webpack_require__(213);

// EXTERNAL MODULE: ./src/domain/diagram/systemcontext/SystemContextDiagram.ts
var SystemContextDiagram = __webpack_require__(214);

// EXTERNAL MODULE: ./src/domain/diagram/requrestmodel/RequestModelDiagram.ts
var RequestModelDiagram = __webpack_require__(215);

// EXTERNAL MODULE: ./src/domain/diagram/usagescene/UsageSceneDiagram.ts
var UsageSceneDiagram = __webpack_require__(216);

// EXTERNAL MODULE: ./src/domain/diagram/businessflow/BusinessFlowDiagram.ts
var BusinessFlowDiagram = __webpack_require__(217);

// EXTERNAL MODULE: ./src/domain/diagram/usecasecomposite/UseCaseCompositeDiagram.ts
var UseCaseCompositeDiagram = __webpack_require__(218);

// EXTERNAL MODULE: ./src/domain/diagram/variationandcondition/VariationAndConditionDiagram.ts
var VariationAndConditionDiagram = __webpack_require__(219);

// CONCATENATED MODULE: ./src/domain/diagram/DiagramFactory.ts















var DiagramFactory_DiagramFactory = /*#__PURE__*/function () {
  function DiagramFactory(resources) {
    Object(classCallCheck["a" /* default */])(this, DiagramFactory);

    this.resources = resources;
  }

  Object(createClass["a" /* default */])(DiagramFactory, [{
    key: "create",
    value: function create(newDiagramId, name, diagramType) {
      if (DiagramType["a" /* default */].システムコンテキスト図.equals(diagramType)) return SystemContextDiagram["a" /* default */].prototypeOf(newDiagramId, name, this.resources);
      if (DiagramType["a" /* default */].要求モデル図.equals(diagramType)) return RequestModelDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].ビジネスコンテキスト図.equals(diagramType)) return BusinessContextDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].ビジネスユースケース図.equals(diagramType)) return BusinessUseCaseDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].業務フロー図.equals(diagramType)) return BusinessFlowDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].利用シーン図.equals(diagramType)) return UsageSceneDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].情報モデル図.equals(diagramType)) return InformationModelDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].状態モデル図.equals(diagramType)) return StateModelDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].ユースケース複合図.equals(diagramType)) return UseCaseCompositeDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].バリエーション条件.equals(diagramType)) return VariationAndConditionDiagram["a" /* default */].prototypeOf(newDiagramId, name); // それ以外(未定義なものが来た時)

      return Diagram["a" /* default */].genericPrototypeOf(newDiagramId, name, diagramType, this.resources);
    }
  }]);

  return DiagramFactory;
}();


// CONCATENATED MODULE: ./src/domain/diagram/Diagrams.ts













var Diagrams_Diagrams = /*#__PURE__*/function () {
  function Diagrams(values) {
    Object(classCallCheck["a" /* default */])(this, Diagrams);

    this.values = values;
  }

  Object(createClass["a" /* default */])(Diagrams, [{
    key: "createNewDiagram",
    value: function createNewDiagram(name, diagramType, resources) {
      var newDiagramId = this.generateDiagramId();
      var factory = new DiagramFactory_DiagramFactory(resources);
      return factory.create(newDiagramId, name, diagramType);
    }
  }, {
    key: "generateDiagramId",
    value: function generateDiagramId() {
      return this.values.map(function (d) {
        return d.id;
      }).reduce(function (l, r) {
        return Math.max(l, r);
      }, 0) + 1;
    }
  }, {
    key: "countOfUsingOf",
    value: function countOfUsingOf(resource) {
      return this.values.filter(function (diagram) {
        return diagram.usingOf(resource);
      }).length;
    }
  }, {
    key: "existsSomeName",
    value: function existsSomeName(name, diagramType) {
      return this.values.some(function (d) {
        return d.name === name && d.type.equals(diagramType);
      });
    }
  }, {
    key: "of",
    value: function of(diagramId) {
      var found = this.values.find(function (diagram) {
        return diagram.id === diagramId;
      });
      return found ? found : null;
    }
  }, {
    key: "add",
    value: function add(diagram) {
      var newValues = Array.from(this.values);
      newValues.push(diagram);
      return new Diagrams(newValues);
    }
  }, {
    key: "remove",
    value: function remove(diagram) {
      var newValues = this.values.filter(function (value) {
        return value.id !== diagram.id;
      });
      return new Diagrams(newValues);
    }
  }, {
    key: "meage",
    value: function meage(diagram) {
      if (this.values.some(function (d) {
        return d.id === diagram.id;
      })) {
        var _newValues = this.values.map(function (d) {
          return d.id === diagram.id ? diagram : d;
        });

        return new Diagrams(_newValues);
      }

      var newValues = Array.from(this.values);
      newValues.push(diagram);
      return new Diagrams(newValues);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var newValues = this.values.map(function (diagram) {
        return diagram.removeResouceOf(resource);
      });
      return new Diagrams(newValues);
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.values.forEach(func);
    }
  }, {
    key: "eixistsSomeName",
    value: function eixistsSomeName(diagram) {
      return this.values.filter(function (d) {
        return d.id !== diagram.id;
      }).map(function (i) {
        console.log(i.id, i.name);
        return i;
      }).some(function (d) {
        return d.name === diagram.name;
      });
    }
  }, {
    key: "last",
    value: function last() {
      return this.values[this.values.length - 1];
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Diagrams([]);
    }
  }, {
    key: "empty",
    value: function empty() {
      return new Diagrams([]);
    }
  }]);

  return Diagrams;
}();



/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductSelectorDialog.vue?vue&type=template&id=3da73caf&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"600","data-opend":_vm.onOpen()},model:{value:(_vm.visibleProductSelectorDialog),callback:function ($$v) {_vm.visibleProductSelectorDialog=$$v},expression:"visibleProductSelectorDialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("プロダクト選択")]),_vm._v(" "),_c('v-card-text',[_vm._v("編集対象となるプロダクトを選択してください。")]),_vm._v(" "),_c('v-card-actions',[_c('v-select',{attrs:{"items":_vm.productsList(),"item-text":"name","label":"Product","return-object":""},model:{value:(_vm.selectedProduct),callback:function ($$v) {_vm.selectedProduct=$$v},expression:"selectedProduct"}}),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"primary"},on:{"click":_vm.onClickAddProduct}},[_vm._v("追加")])],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.cancelable)?_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]):_vm._e(),_vm._v(" "),_c('v-btn',{attrs:{"text":"","disabled":!_vm.selectedProduct,"color":"green darken-1"},on:{"click":_vm.onClickOpenProduct}},[_vm._v("\n        プロダクトを開く\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ProductSelectorDialog.vue?vue&type=template&id=3da73caf&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(44);

// EXTERNAL MODULE: ./src/presentation/MessageBox.ts
var MessageBox = __webpack_require__(338);

// EXTERNAL MODULE: ./src/domain/product/Product.ts + 2 modules
var Product = __webpack_require__(228);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductSelectorDialog.vue?vue&type=script&lang=ts&








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





var ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(ProductSelectorDialog, _Vue);

  var _super = _createSuper(ProductSelectorDialog);

  function ProductSelectorDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ProductSelectorDialog);

    _this = _super.apply(this, arguments);
    _this.cancelable = false;
    _this.selectedProduct = null;
    _this.products = null;
    return _this;
  }

  Object(createClass["a" /* default */])(ProductSelectorDialog, [{
    key: "onOpen",
    value: function onOpen() {
      var _a;

      if (!this.visibleProductSelectorDialog) return "";
      var strage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!strage) return "";

      if (!this.products) {
        this.products = strage.products;
      }

      if (!this.selectedProduct) {
        this.selectedProduct = strage.currentProduct();
      }

      return "";
    }
  }, {
    key: "productsList",
    value: function productsList() {
      if (!this.products) return [];
      return this.products.list();
    }
  }, {
    key: "onClickAddProduct",
    value: function onClickAddProduct() {
      var _this2 = this;

      var _a;

      var messageBox = new MessageBox["a" /* default */]();
      var message = "追加するプロダクトの名前を入力してください。";
      var name = messageBox.promptWith255Limit(message, "", function (inputText) {
        var _a;

        var exists = (_a = _this2.products) === null || _a === void 0 ? void 0 : _a.existsSomeName(inputText);
        if (exists) alert("既に同一のプロダクト名が在ります。");
        return !exists;
      });
      if (!name) return;
      var product = Product["a" /* default */].prototypeOf(name);
      this.products = (_a = this.products) === null || _a === void 0 ? void 0 : _a.merge(product);
      this.selectedProduct = product;
      this.saveAddProduct(product);
    }
  }, {
    key: "onClickOpenProduct",
    value: function onClickOpenProduct() {
      var changeCurrent = this.saveCurrentProduct();

      if (!changeCurrent) {
        this.onClose();
        return;
      }

      location.reload();
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.selectedProduct = null;
      this.products = null;
    }
  }, {
    key: "saveAddProduct",
    value: function saveAddProduct(product) {
      var _a, _b;

      var strage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!strage) return;
      var added = strage.merge(product);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.register(added);
    }
  }, {
    key: "saveCurrentProduct",
    value: function saveCurrentProduct() {
      var _a, _b;

      var strage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!strage || !this.selectedProduct) return false;
      if (strage.isCurrentProduct(this.selectedProduct)) return false;
      var changed = strage.changeCurrent(this.selectedProduct);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.register(changed);
      return true;
    }
  }]);

  return ProductSelectorDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "repository", void 0);

__decorate([Object(lib["Prop"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "visibleProductSelectorDialog", void 0);

__decorate([Object(lib["Prop"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "cancelable", void 0);

__decorate([Object(lib["Emit"])("onClose")], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "onClose", null);

ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog = __decorate([lib["Component"]], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog);
/* harmony default export */ var ProductSelectorDialogvue_type_script_lang_ts_ = (ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog);
// CONCATENATED MODULE: ./src/components/ProductSelectorDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ProductSelectorDialogvue_type_script_lang_ts_ = (ProductSelectorDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(79);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(294);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(663);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 7 modules
var VSelect = __webpack_require__(680);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(674);

// CONCATENATED MODULE: ./src/components/ProductSelectorDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductSelectorDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "3da73caf",
  null
  
)

/* harmony default export */ var components_ProductSelectorDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VSelect: VSelect["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LocalStrageInitializeDialog.vue?vue&type=template&id=76ebce2a&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"500"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("LocalStrageの初期化")]),_vm._v(" "),_c('v-card-text',[_vm._v("LocalStrageが初期化されていません。"),_c('br'),_vm._v("このWebアプリケーションは、ブラウザ固有のストレージ(LocalStarage)を使用します。"),_c('br'),_vm._v("LocalStrageを初期化し、データを保存してよろしいですか。")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":_vm.onClickAcceptUseLocalStrage}},[_vm._v("許可する")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LocalStrageInitializeDialog.vue?vue&type=template&id=76ebce2a&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LocalStrageInitializeDialog.vue?vue&type=script&lang=ts&








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



var LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(LocalStrageInitializeDialog, _Vue);

  var _super = _createSuper(LocalStrageInitializeDialog);

  function LocalStrageInitializeDialog() {
    Object(classCallCheck["a" /* default */])(this, LocalStrageInitializeDialog);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(LocalStrageInitializeDialog, [{
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "onClickAcceptUseLocalStrage",
    value: function onClickAcceptUseLocalStrage() {
      var _a;

      (_a = this.repository) === null || _a === void 0 ? void 0 : _a.initialize();
      this.onClose();
    }
  }]);

  return LocalStrageInitializeDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog.prototype, "repository", void 0);

__decorate([Object(lib["Prop"])()], LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog.prototype, "visible", void 0);

__decorate([Object(lib["Emit"])("onClose")], LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog.prototype, "onClose", null);

LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog = __decorate([lib["Component"]], LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog);
/* harmony default export */ var LocalStrageInitializeDialogvue_type_script_lang_ts_ = (LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog);
// CONCATENATED MODULE: ./src/components/LocalStrageInitializeDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LocalStrageInitializeDialogvue_type_script_lang_ts_ = (LocalStrageInitializeDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(79);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(294);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(663);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(674);

// CONCATENATED MODULE: ./src/components/LocalStrageInitializeDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LocalStrageInitializeDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "76ebce2a",
  null
  
)

/* harmony default export */ var components_LocalStrageInitializeDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LocalStrageDestroyDialog.vue?vue&type=template&id=5619f33c&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"500"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("LocalStrageの破棄")]),_vm._v(" "),_c('v-card-text',[_vm._v("\n      LocalStrageからデータ破棄します。"),_c('br'),_vm._v("\n      これは、"),_c('span',{staticClass:"red--text"},[_vm._v("全データの消去")]),_vm._v(" や "),_c('span',{staticClass:"red--text"},[_vm._v("システムの初期化")]),_vm._v(" と同様の操作です。"),_c('br'),_vm._v("\n      なお、安全措置として「実行」をクリックした際、LocalStrageの内容のファイルが自動的にダウンロードされます。"),_c('br'),_vm._v("\n      LocalStrageを破棄してよろしいですか。\n    ")]),_vm._v(" "),_c('v-card-text',[_c('v-checkbox',{attrs:{"label":"上記内容に同意する。"},model:{value:(_vm.consent),callback:function ($$v) {_vm.consent=$$v},expression:"consent"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","disabled":!_vm.consent,"color":"green darken-1"},on:{"click":_vm.onClickDestroyExecute}},[_vm._v("\n          実行\n        ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LocalStrageDestroyDialog.vue?vue&type=template&id=5619f33c&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(2);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/domain/client/DownloadFile.ts
var DownloadFile = __webpack_require__(290);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LocalStrageDestroyDialog.vue?vue&type=script&lang=ts&








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





var LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(LocalStrageDestroyDialog, _Vue);

  var _super = _createSuper(LocalStrageDestroyDialog);

  function LocalStrageDestroyDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LocalStrageDestroyDialog);

    _this = _super.apply(this, arguments);
    _this.consent = false;
    return _this;
  }

  Object(createClass["a" /* default */])(LocalStrageDestroyDialog, [{
    key: "onClose",
    value: function onClose() {
      this.consent = false;
    }
  }, {
    key: "onClickDestroyExecute",
    value: function onClickDestroyExecute() {
      var _a;

      if (!this.downloadNowLocalStrageDateFile()) {
        alert("ダウンロードファイルの作成に失敗しました。破棄処理を中段します。");
        return;
      }

      (_a = this.repository) === null || _a === void 0 ? void 0 : _a.destroy();
      location.reload();
    }
  }, {
    key: "downloadNowLocalStrageDateFile",
    value: function downloadNowLocalStrageDateFile() {
      var _a;

      var json = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.getJsonText();
      if (!json) return false;
      var ymdhms = moment_default()().format("YYYYMMDDHHmmss");
      var fileName = "rdram_backup_".concat(ymdhms, ".json");
      var file = new DownloadFile["a" /* default */](fileName, "text/json", json);
      this.clientDownloadRepository.register(file);
      return true;
    }
  }]);

  return LocalStrageDestroyDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog.prototype, "repository", void 0);

__decorate([Object(lib["Inject"])()], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog.prototype, "clientDownloadRepository", void 0);

__decorate([Object(lib["Prop"])()], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog.prototype, "visible", void 0);

__decorate([Object(lib["Emit"])("onClose")], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog.prototype, "onClose", null);

LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog = __decorate([lib["Component"]], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog);
/* harmony default export */ var LocalStrageDestroyDialogvue_type_script_lang_ts_ = (LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog);
// CONCATENATED MODULE: ./src/components/LocalStrageDestroyDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LocalStrageDestroyDialogvue_type_script_lang_ts_ = (LocalStrageDestroyDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(79);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(294);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js + 2 modules
var VCheckbox = __webpack_require__(682);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(663);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(674);

// CONCATENATED MODULE: ./src/components/LocalStrageDestroyDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LocalStrageDestroyDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "5619f33c",
  null
  
)

/* harmony default export */ var components_LocalStrageDestroyDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCheckbox: VCheckbox["a" /* default */],VDialog: VDialog["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relation; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RouterType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(149);






var Relation = /*#__PURE__*/function () {
  function Relation(id, fromResourceId, toResourceId, routerTypeId, tipAllow, meaning, midpoints) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Relation);

    this.id = id;
    this.fromResourceId = fromResourceId;
    this.toResourceId = toResourceId;
    this.routerTypeId = routerTypeId;
    this.tipAllow = tipAllow;
    this.meaning = meaning;
    this.midpoints = midpoints;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Relation, [{
    key: "routerType",
    get: function get() {
      return _RouterType__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].ofId(this.routerTypeId);
    }
  }, {
    key: "reverse",
    value: function reverse() {
      return new Relation(this.id, this.toResourceId, this.fromResourceId, this.routerTypeId, this.tipAllow, this.meaning, this.midpoints);
    }
  }, {
    key: "isRelatedTo",
    value: function isRelatedTo(resourceId) {
      return this.fromResourceId === resourceId || this.toResourceId === resourceId;
    }
  }, {
    key: "equalRoute",
    value: function equalRoute(other) {
      return this.fromResourceId === other.fromResourceId && this.toResourceId === other.toResourceId;
    }
  }, {
    key: "equalRouteReversivle",
    value: function equalRouteReversivle(other) {
      return this.equalRoute(other) || this.reverse().equalRoute(other);
    }
  }, {
    key: "changeMeaning",
    value: function changeMeaning(meaning) {
      return this.with(meaning, this.routerType, this.tipAllow);
    }
  }, {
    key: "changeRouter",
    value: function changeRouter(routerType) {
      return this.with(this.meaning, routerType, this.tipAllow);
    }
  }, {
    key: "changeTipAllow",
    value: function changeTipAllow(value) {
      return this.with(this.meaning, this.routerType, value);
    }
  }, {
    key: "with",
    value: function _with(meaning, routerType, tipAllow) {
      return new Relation(this.id, this.fromResourceId, this.toResourceId, routerType.id, tipAllow, meaning.trim(), this.midpoints);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Relation(this.id, this.fromResourceId, this.toResourceId, this.routerTypeId, this.tipAllow, this.meaning, this.midpoints.map(function (midpoint) {
        return midpoint.clone();
      }));
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(id, fromResourceId, toResourceId) {
      return new Relation(id, fromResourceId, toResourceId, _RouterType__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].DIRECT.id, false, "", []);
    }
  }]);

  return Relation;
}();


Relation.MEANING_MAX_LENGTH = 64;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uuid; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);








var Uuid = /*#__PURE__*/function () {
  function Uuid() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Uuid);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Uuid, null, [{
    key: "generate",
    value: function generate() {
      // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js  
      // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";  
      var chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");

      for (var i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
          case "x":
            chars[i] = Math.floor(Math.random() * 16).toString(16);
            break;

          case "y":
            chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
            break;
        }
      }

      return chars.join("");
    }
  }]);

  return Uuid;
}();



/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadFile; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


var DownloadFile = function DownloadFile(clientFileName, contentType, contents) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DownloadFile);

  this.clientFileName = clientFileName;
  this.contentType = contentType;
  this.contents = contents;
};



/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);





var DiagramType = /*#__PURE__*/function () {
  function DiagramType(id, name, iconKey) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DiagramType);

    this.id = id;
    this.name = name;
    this.iconKey = iconKey;
    DiagramType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DiagramType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return (other === null || other === void 0 ? void 0 : other.id) === this.id;
    }
  }], [{
    key: "values",
    value: function values() {
      return DiagramType.vs;
    }
  }, {
    key: "ofId",
    value: function ofId(id) {
      var found = this.vs.find(function (item) {
        return item.id === id;
      });
      return found ? found : null;
    }
  }]);

  return DiagramType;
}();


DiagramType.vs = [];
DiagramType.システムコンテキスト図 = new DiagramType(1, 'システムコンテキスト図', "mdi-alpha-s-box");
DiagramType.要求モデル図 = new DiagramType(2, '要求モデル図', "mdi-alpha-r-box");
DiagramType.ビジネスコンテキスト図 = new DiagramType(3, 'ビジネスコンテキスト図', "mdi-alpha-c-box");
DiagramType.ビジネスユースケース図 = new DiagramType(4, 'ビジネスユースケース図', "mdi-alpha-u-box");
DiagramType.業務フロー図 = new DiagramType(11, '業務フロー図', "mdi-clipboard-flow");
DiagramType.利用シーン図 = new DiagramType(12, '利用シーン図', "mdi-video-image");
DiagramType.情報モデル図 = new DiagramType(5, '情報モデル図', "mdi-axis-arrow-info");
DiagramType.状態モデル図 = new DiagramType(6, '状態モデル図', "mdi-state-machine");
DiagramType.ユースケース複合図 = new DiagramType(7, 'ユースケース複合図', "mdi-set-none");
DiagramType.バリエーション条件 = new DiagramType(8, 'バリエーション・条件', "mdi-vector-combine");

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(543);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(27).default
var update = add("75e846b2", content, true, {"sourceMap":false});

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBox; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);




var MessageBox = /*#__PURE__*/function () {
  function MessageBox() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MessageBox);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MessageBox, [{
    key: "prompt",
    value: function prompt(message, defaultText, validation) {
      var result = this.promptWithTrim(message, defaultText);
      if (!validation) return result;

      while (!validation(result)) {
        result = this.promptWithTrim(message, result);
      }

      return result;
    }
  }, {
    key: "promptWith255Limit",
    value: function promptWith255Limit(message, defaultText, validation) {
      return this.prompt(message, defaultText, function (inputText) {
        if (inputText.length > 255) {
          alert("255文字以内で入力してください。");
          return false;
        }

        return validation(inputText);
      });
    }
  }, {
    key: "promptWithTrim",
    value: function promptWithTrim(message, defaultText) {
      var inputText = prompt(message, defaultText);
      var trimed = inputText ? inputText.trim() : "";
      return trimed;
    }
  }]);

  return MessageBox;
}();



/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagram; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(150);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(80);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _DiagramType__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




















var Diagram = /*#__PURE__*/function () {
  function Diagram(id, typeId, name, relations, // TODO Relationsに置き換えたい
  placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Diagram);

    this.id = id;
    this.typeId = typeId;
    this.name = name;
    this.relations = relations;
    this.placements = placements;
    this.width = width;
    this.height = height;
    this.canvasGuideTypeId = canvasGuideTypeId;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Diagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }
  }, {
    key: "createPlacementAtCenter",
    value: function createPlacementAtCenter(resource) {
      var newPlacement = this.createPlacement(resource, 0, 0);
      if (!newPlacement) return null;
      var x = Math.floor((this.width - newPlacement.width) / 2);
      var y = Math.floor((this.height - newPlacement.height) / 2);
      var modifiedPlacement = newPlacement.move(x, y);
      return modifiedPlacement;
    }
  }, {
    key: "placementOf",
    value: function placementOf(resourceId) {
      var found = this.placements.find(function (placement) {
        return placement.resourceId === resourceId;
      });
      return found ? found : null;
    }
  }, {
    key: "defaultNameWhenCopy",
    value: function defaultNameWhenCopy() {
      return "".concat(this.name, " \u306E\u30B3\u30D4\u30FC");
    }
  }, {
    key: "relationIdsOfDeleteTargetResouce",
    value: function relationIdsOfDeleteTargetResouce(deleteTargetResourceIds) {
      return this.relations.filter(function (relation) {
        return deleteTargetResourceIds.some(function (id) {
          return id === relation.fromResourceId;
        }) || deleteTargetResourceIds.some(function (id) {
          return id === relation.toResourceId;
        });
      }).map(function (relation) {
        return relation.id;
      });
    }
  }, {
    key: "usingOf",
    value: function usingOf(resource) {
      return this.placements.some(function (Placement) {
        return Placement.resourceId === resource.resourceId;
      });
    }
  }, {
    key: "modifyPlacementOf",
    value: function modifyPlacementOf(placement) {
      var newValues = this.placements.map(function (p) {
        return p.resourceId === placement.resourceId ? placement : p;
      });
      return this.replacePlacement(newValues);
    }
  }, {
    key: "removeResourcesOf",
    value: function removeResourcesOf(resourceIds) {
      var nonDeletedPlacements = this.placements.filter(function (p) {
        return !resourceIds.includes(p.resourceId);
      });
      var nonDeletedRelations = this.relations.filter(function (r) {
        return resourceIds.every(function (id) {
          return !r.isRelatedTo(id);
        });
      });
      return this.replacePlacement(nonDeletedPlacements).replaceRelations(nonDeletedRelations);
    }
  }, {
    key: "removeRelationsOf",
    value: function removeRelationsOf(relationIds) {
      var nonDeletedRelations = this.relations.filter(function (r) {
        return !relationIds.includes(r.id);
      });
      return this.replaceRelations(nonDeletedRelations);
    }
    /**
     * FIXME ここだ「イミュータブルを破ってしまって」いる…なんとかしたい。
     */

  }, {
    key: "modifyRelationOf",
    value: function modifyRelationOf(relation) {
      var index = this.relations.findIndex(function (r) {
        return r.id === relation.id;
      });
      if (index < 0) return this;
      this.relations[index] = relation;
      return this;
    }
  }, {
    key: "addRelation",
    value: function addRelation(relation) {
      var newValues = Array.from(this.relations);
      newValues.push(relation);
      return this.replaceRelations(newValues);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }
  }, {
    key: "addPlacement",
    value: function addPlacement(placement) {
      var newValues = Array.from(this.placements);
      newValues.push(placement);
      return this.replacePlacement(newValues);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }
  }, {
    key: "existsSomeRelation",
    value: function existsSomeRelation(relation) {
      return this.relations.some(function (r) {
        return r.equalRouteReversivle(relation);
      });
    }
  }, {
    key: "relationOf",
    value: function relationOf(relationId) {
      var found = this.relations.find(function (r) {
        return r.id === relationId;
      });
      return found ? found : null;
    }
  }, {
    key: "existsStickOutPlacements",
    value: function existsStickOutPlacements() {
      var _this = this;

      return this.placements.some(function (placement) {
        return _this.isStickOut(placement);
      });
    }
  }, {
    key: "existsPlacementId",
    value: function existsPlacementId(resourceId) {
      return this.placements.some(function (placement) {
        return placement.resourceId === resourceId;
      });
    }
  }, {
    key: "isStickOut",
    value: function isStickOut(placement) {
      var p = placement;
      return p.x + p.width > this.width || p.y + p.height > this.height;
    }
  }, {
    key: "existsRelationId",
    value: function existsRelationId(relationId) {
      return this.relations.some(function (relation) {
        return relation.id === relationId;
      });
    }
  }, {
    key: "type",
    get: function get() {
      return _DiagramType__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].ofId(this.typeId);
    }
  }, {
    key: "canvasGuideType",
    get: function get() {
      return _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_19__["default"].ofId(this.canvasGuideTypeId);
    }
  }, {
    key: "ngType",
    value: function ngType(resourceType) {
      return !this.availableResourceTypes().some(function (type) {
        return type.equals(resourceType);
      });
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new Diagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new Diagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new Diagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
    /**
     * 現在のサイズではみ出しているものを削除。
     */

  }, {
    key: "fixStickOuts",
    value: function fixStickOuts() {
      var deletePlacements = [];
      var survivePlacements = [];

      var _iterator = _createForOfIteratorHelper(this.placements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var placement = _step.value;
          if (this.isStickOut(placement)) deletePlacements.push(placement);else survivePlacements.push(placement);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var surviveRelations = this.relations.filter(function (relation) {
        return !deletePlacements.some(function (p) {
          return relation.isRelatedTo(p.resourceId);
        });
      });
      return this.replacePlacement(survivePlacements).replaceRelations(surviveRelations);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new Diagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "genericPrototypeOf",
    value: function genericPrototypeOf(newDiagramId, name, diagramType, resources) {
      return new Diagram(newDiagramId, diagramType.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_19__["default"].なし.id);
    }
  }]);

  return Diagram;
}();


Diagram.NAME_MAX_LENGTH = 128;
Diagram.MAX_WIDTH = 7680;
Diagram.MAX_HEIGHT = 4320;

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasGuideType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(233);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_3__);





var CanvasGuideType = /*#__PURE__*/function () {
  function CanvasGuideType(id, iconKey, caption, canvasPolicy) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CanvasGuideType);

    this.id = id;
    this.iconKey = iconKey;
    this.caption = caption;
    this.canvasPolicy = canvasPolicy;
    CanvasGuideType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CanvasGuideType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return (other === null || other === void 0 ? void 0 : other.iconKey) === this.iconKey;
    }
  }], [{
    key: "values",
    value: function values() {
      return CanvasGuideType.vs;
    }
  }, {
    key: "ofId",
    value: function ofId(id) {
      var found = this.vs.find(function (item) {
        return item.id === id;
      });
      return found ? found : CanvasGuideType.なし;
    }
  }, {
    key: "ofIconKey",
    value: function ofIconKey(iconKey) {
      var found = this.vs.find(function (item) {
        return item.iconKey === iconKey;
      });
      return found ? found : CanvasGuideType.なし;
    }
  }]);

  return CanvasGuideType;
}();


CanvasGuideType.vs = [];
CanvasGuideType.なし = new CanvasGuideType(1, "mdi-grid-off", "なし(白地)", null);
CanvasGuideType.グリッド = new CanvasGuideType(2, "mdi-grid", "グリッド(方眼・格子状)", new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.policy.canvas.SnapToGridEditPolicy());
CanvasGuideType.ジオメトリ = new CanvasGuideType(3, "mdi-crop", "ジオメトリ(他アイコン位置をガイド)", new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.policy.canvas.SnapToGeometryEditPolicy());

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(623);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(27).default
var update = add("68493dca", content, true, {"sourceMap":false});

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(625);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(27).default
var update = add("0883f874", content, true, {"sourceMap":false});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Placement; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



var Placement = /*#__PURE__*/function () {
  function Placement(x, y, width, height, resourceId) {
    var alias = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Placement);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.resourceId = resourceId;
    this.alias = alias;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Placement, [{
    key: "resize",
    value: function resize(width, height) {
      return new Placement(this.x, this.y, width, height, this.resourceId, this.alias);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      return new Placement(x, y, this.width, this.height, this.resourceId, this.alias);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Placement(this.x, this.y, this.width, this.height, this.resourceId, this.alias);
    }
  }]);

  return Placement;
}();



/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=template&id=68bf8dc7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"dark":""}},[_c('v-navigation-drawer',{attrs:{"mini-variant":_vm.miniVariant,"clipped":_vm.clipped,"fixed":"","app":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',_vm._l((_vm.items),function(item,i){return _c('v-list-item',{key:i,attrs:{"to":item.to,"router":"","exact":""}},[_c('v-list-item-action',[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',{domProps:{"textContent":_vm._s(item.title)}})],1)],1)}),1)],1),_vm._v(" "),_c('v-app-bar',{attrs:{"clipped-left":_vm.clipped,"fixed":"","app":""}},[_c('v-app-bar-nav-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer = !_vm.drawer}}}),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.miniVariant = !_vm.miniVariant}}},[_c('v-icon',[_vm._v("mdi-"+_vm._s(("chevron-" + (_vm.miniVariant ? 'right' : 'left'))))])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.clipped = !_vm.clipped}}},[_c('v-icon',[_vm._v("mdi-application")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.fixed = !_vm.fixed}}},[_c('v-icon',[_vm._v("mdi-minus")])],1),_vm._v(" "),_c('v-toolbar-title',{domProps:{"textContent":_vm._s(_vm.title)}}),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.rightDrawer = !_vm.rightDrawer}}},[_c('v-icon',[_vm._v("mdi-menu")])],1)],1),_vm._v(" "),_c('v-main',[_c('v-container',[_c('Nuxt')],1)],1),_vm._v(" "),_c('v-navigation-drawer',{attrs:{"right":_vm.right,"temporary":"","fixed":""},model:{value:(_vm.rightDrawer),callback:function ($$v) {_vm.rightDrawer=$$v},expression:"rightDrawer"}},[_c('v-list',[_c('v-list-item',{nativeOn:{"click":function($event){_vm.right = !_vm.right}}},[_c('v-list-item-action',[_c('v-icon',{attrs:{"light":""}},[_vm._v("mdi-repeat")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("システムメニュー")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onChangeProduct}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-account-switch-outline")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("プロダクト切替え...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickDestryLocalStrage}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-delete-forever")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("LocalStrageの破棄...")])],1)],1)],1),_vm._v(" "),_c('v-footer',{attrs:{"absolute":!_vm.fixed,"app":""}},[_c('span',[_vm._v("\n      © "+_vm._s(new Date().getFullYear())+"\n      "),_c('a',{staticClass:"no-efect-link",attrs:{"target":"_new","href":"https://kazuhito-m.github.io/rdram"}},[_vm._v("rdram")])]),_vm._v(" "),_c('a',{staticClass:"auther-link",attrs:{"target":"_new","href":"https://twitter.com/kazuhito_m"}},[_c('v-icon',[_vm._v("mdi-twitter")]),_vm._v("kazuhito_m\n    ")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('a',{staticClass:"no-efect-link",attrs:{"target":"_new","href":"https://twitter.com/intent/tweet?url=https%3A%2F%2Fkazuhito-m.github.io%2Frdram&hashtags=rdram"}},[_c('v-icon',[_vm._v("mdi-share")])],1),_vm._v(" "),_c('a',{staticClass:"no-efect-link",attrs:{"target":"_new","href":"https://github.com/kazuhito-m/rdram/releases"}},[_vm._v("ver. "+_vm._s(_vm.selfVersion))])],1),_vm._v(" "),_c('ProductSelectorDialog',{attrs:{"visibleProductSelectorDialog":_vm.visibleProductSelector,"cancelable":_vm.productSelectorCancelable},on:{"onClose":_vm.onCloseChangeProduct}}),_vm._v(" "),_c('LocalStrageInitializeDialog',{attrs:{"visible":_vm.visibleApplicationInitializationDialog},on:{"onClose":_vm.onCloseApplicationInitializationDialog}}),_vm._v(" "),_c('LocalStrageDestroyDialog',{attrs:{"visible":_vm.visibleLocalStrageDestroyDialog},on:{"onClose":_vm.onCloseLocalStrageDestroyDialog}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=template&id=68bf8dc7&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(235);

// EXTERNAL MODULE: ./src/domain/Serializer.ts + 1 modules
var Serializer = __webpack_require__(230);

// EXTERNAL MODULE: ./src/domain/strage/LocalStrage.ts
var LocalStrage = __webpack_require__(204);

// CONCATENATED MODULE: ./src/infrastructure/strage/StrageDatasource.ts







var StrageDatasource_StrageDatasource = /*#__PURE__*/function () {
  function StrageDatasource() {
    Object(classCallCheck["a" /* default */])(this, StrageDatasource);

    this.serializer = new Serializer["a" /* default */]();
  }

  Object(createClass["a" /* default */])(StrageDatasource, [{
    key: "isInitialized",
    value: function isInitialized() {
      // this.clear();
      var data = this.get();
      if (data) return true;
      return false;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var initialData = this.defaultStructure();
      this.register(initialData);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      localStorage.removeItem(StrageDatasource.STRAGE_ID);
    }
  }, {
    key: "defaultStructure",
    value: function defaultStructure() {
      return LocalStrage["a" /* default */].prototypeOf();
    }
  }, {
    key: "getJsonText",
    value: function getJsonText() {
      return localStorage.getItem(StrageDatasource.STRAGE_ID);
    }
  }, {
    key: "get",
    value: function get() {
      var startTime = performance.now();
      var textData = this.getJsonText();
      if (!textData) return null;
      var strage = this.serializer.deserialize(textData); // console.log('get :    ' + textData);

      console.log(strage);
      var ms = performance.now() - startTime;
      console.log("StrageDatasource.get(),      ".concat(new Blob([textData]).size, " byte\u53D6\u5F97\u3002").concat(ms.toFixed(3), " ms")); // alert('get: ' + textData);

      return strage;
    }
  }, {
    key: "register",
    value: function register(strage) {
      var target = strage.renewTimeStamp();
      var startTime = performance.now();
      var jsonText = this.serializer.serialize(strage);
      localStorage.setItem(StrageDatasource.STRAGE_ID, jsonText);
      var ms = performance.now() - startTime;
      console.log('register: ' + jsonText);
      console.log(strage);
      console.log("StrageDatasource.register(), ".concat(new Blob([jsonText]).size, " byte\u4FDD\u5B58\u3002").concat(ms.toFixed(3), " ms")); // alert('reg: ' + jsonText);
    }
  }, {
    key: "getCurrentProduct",
    value: function getCurrentProduct() {
      var strage = this.get();
      if (!strage) return null;
      return strage.currentProduct();
    }
  }, {
    key: "registerCurrentProduct",
    value: function registerCurrentProduct(product) {
      var strage = this.get();
      if (!strage) return;
      var renewProduct = product.renewTimeStamp();
      var changed = strage.changeCurrent(renewProduct);
      var mearged = strage.products.merge(renewProduct);
      changed = changed.with(mearged);
      this.register(changed);
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.removeItem(StrageDatasource.STRAGE_ID);
    }
  }, {
    key: "generateResourceId",
    value: function generateResourceId() {
      var product = this.getCurrentProduct();
      if (!product) return 1;
      var updated = product.moveNextResourceIdSequence();
      this.registerCurrentProduct(updated);
      return updated.resourceIdSequence;
    }
  }]);

  return StrageDatasource;
}();


StrageDatasource_StrageDatasource.STRAGE_ID = 'rdram-strage';
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(561);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(259);

// CONCATENATED MODULE: ./src/infrastructure/client/ClientDownloadTransfar.ts








var ClientDownloadTransfar_ClientDownloadTransfar = /*#__PURE__*/function () {
  function ClientDownloadTransfar() {
    Object(classCallCheck["a" /* default */])(this, ClientDownloadTransfar);
  }

  Object(createClass["a" /* default */])(ClientDownloadTransfar, [{
    key: "register",
    value: function register(file) {
      var blob = new Blob([file.contents], {
        type: file.contentType
      });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = file.clientFileName;
      link.click();
      return true;
    }
  }, {
    key: "registerBase64PngImage",
    value: function registerBase64PngImage(encoded64PngText, clientFileName) {
      var link = document.createElement("a");
      link.href = encoded64PngText;
      link.download = clientFileName;
      link.click();
      return true;
    }
  }]);

  return ClientDownloadTransfar;
}();


// EXTERNAL MODULE: ./src/components/ProductSelectorDialog.vue + 4 modules
var ProductSelectorDialog = __webpack_require__(272);

// EXTERNAL MODULE: ./src/components/LocalStrageInitializeDialog.vue + 4 modules
var LocalStrageInitializeDialog = __webpack_require__(273);

// EXTERNAL MODULE: ./src/components/LocalStrageDestroyDialog.vue + 4 modules
var LocalStrageDestroyDialog = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=script&lang=ts&








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








var defaultvue_type_script_lang_ts_default_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(default_1, _Vue);

  var _super = _createSuper(default_1);

  function default_1() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, default_1);

    _this = _super.apply(this, arguments);
    _this.clipped = false;
    _this.drawer = false;
    _this.fixed = false;
    _this.miniVariant = false;
    _this.right = true;
    _this.rightDrawer = false;
    _this.title = 'RDRA-M';
    _this.selfVersion = "";
    _this.items = [{
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/'
    }, {
      icon: 'mdi-apps',
      title: 'ダイアグラム一覧',
      to: '/diagrams'
    }, {
      icon: 'mdi-chart-bubble',
      title: 'draw2dのテスト',
      to: '/layouttest'
    }, {
      icon: 'mdi-chart-bubble',
      title: 'canbasのテスト',
      to: '/canvastest'
    }]; // DI difinitions.

    _this.repository = new StrageDatasource_StrageDatasource();
    _this.clientDownloadRepository = new ClientDownloadTransfar_ClientDownloadTransfar(); // this classs property & functions.

    _this.visibleApplicationInitializationDialog = false;
    _this.visibleProductSelector = false;
    _this.productSelectorCancelable = false;
    _this.visibleLocalStrageDestroyDialog = false;
    return _this;
  }

  Object(createClass["a" /* default */])(default_1, [{
    key: "created",
    value: function created() {
      var _this2 = this;

      var _a, _b;

      this.$nextTick(function () {
        _this2.$nuxt.$loading.start();

        setTimeout(function () {
          return _this2.$nuxt.$loading.finish();
        }, 500);
      });
      var head = (_b = (_a = this.$store) === null || _a === void 0 ? void 0 : _a.app) === null || _b === void 0 ? void 0 : _b.head;
      this.title = head.title;
      this.selfVersion = head.selfVersion;
      if (this.showApplicationInitialization()) return;
      if (this.showProductSelectorWhenNotSelected()) return;
      var product = this.repository.getCurrentProduct();
      this.title += " - [".concat(product === null || product === void 0 ? void 0 : product.name, "]");
    }
  }, {
    key: "showApplicationInitialization",
    value: function showApplicationInitialization() {
      if (this.repository.isInitialized()) return false;
      this.visibleApplicationInitializationDialog = true;
      return true;
    }
  }, {
    key: "onCloseApplicationInitializationDialog",
    value: function onCloseApplicationInitializationDialog() {
      this.visibleApplicationInitializationDialog = false;
      this.showProductSelectorWhenNotSelected();
    }
  }, {
    key: "showProductSelectorWhenNotSelected",
    value: function showProductSelectorWhenNotSelected() {
      var _this3 = this;

      this.visibleProductSelector = false;
      var strage = this.repository.get();
      if (!strage || strage.status.currentProductId) return false;
      this.productSelectorCancelable = false;
      this.$nextTick(function () {
        _this3.visibleProductSelector = true;
      });
      return true;
    }
  }, {
    key: "onChangeProduct",
    value: function onChangeProduct() {
      this.visibleProductSelector = false;
      this.rightDrawer = false;
      this.productSelectorCancelable = true;
      this.visibleProductSelector = true;
    }
  }, {
    key: "onCloseChangeProduct",
    value: function onCloseChangeProduct() {
      this.visibleProductSelector = false;
    }
  }, {
    key: "onClickDestryLocalStrage",
    value: function onClickDestryLocalStrage() {
      this.visibleLocalStrageDestroyDialog = true;
      this.rightDrawer = false;
    }
  }, {
    key: "onCloseLocalStrageDestroyDialog",
    value: function onCloseLocalStrageDestroyDialog() {
      this.visibleLocalStrageDestroyDialog = false;
    }
  }]);

  return default_1;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "repository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "clientDownloadRepository", void 0);

defaultvue_type_script_lang_ts_default_1 = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    ProductSelectorDialog: ProductSelectorDialog["default"],
    LocalStrageInitializeDialog: LocalStrageInitializeDialog["default"],
    LocalStrageDestroyDialog: LocalStrageDestroyDialog["default"]
  }
})], defaultvue_type_script_lang_ts_default_1);
/* harmony default export */ var defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_default_1);
// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/layouts/default.vue?vue&type=style&index=0&id=68bf8dc7&scoped=true&lang=css&
var defaultvue_type_style_index_0_id_68bf8dc7_scoped_true_lang_css_ = __webpack_require__(622);

// EXTERNAL MODULE: ./src/layouts/default.vue?vue&type=style&index=1&lang=css&
var defaultvue_type_style_index_1_lang_css_ = __webpack_require__(624);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(79);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(673);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js + 2 modules
var VAppBar = __webpack_require__(681);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBarNavIcon.js
var VAppBarNavIcon = __webpack_require__(675);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(294);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(676);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFooter/VFooter.js
var VFooter = __webpack_require__(677);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(267);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(678);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js
var VNavigationDrawer = __webpack_require__(679);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(674);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(286);

// CONCATENATED MODULE: ./src/layouts/default.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "68bf8dc7",
  null
  
)

/* harmony default export */ var layouts_default = __webpack_exports__["a"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {ProductSelectorDialog: __webpack_require__(272).default,LocalStrageInitializeDialog: __webpack_require__(273).default,LocalStrageDestroyDialog: __webpack_require__(274).default})


/* vuetify-loader */


















installComponents_default()(component, {VApp: VApp["a" /* default */],VAppBar: VAppBar["a" /* default */],VAppBarNavIcon: VAppBarNavIcon["a" /* default */],VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */],VFooter: VFooter["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemIcon: VListItemIcon["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMain: VMain["a" /* default */],VNavigationDrawer: VNavigationDrawer["a" /* default */],VSpacer: VSpacer["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})


/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading.vue?vue&type=template&id=1a59ecc4&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loading)?_c('v-overlay',[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"64"}})],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=template&id=1a59ecc4&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading.vue?vue&type=script&lang=ts&








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



var Loadingvue_type_script_lang_ts_Loading = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(Loading, _Vue);

  var _super = _createSuper(Loading);

  function Loading() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Loading);

    _this = _super.apply(this, arguments);
    _this.loading = false;
    _this.startTime = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(Loading, [{
    key: "start",
    value: function start() {
      this.startTime = performance.now();
      console.log("Loading\u8868\u793A\u958B\u59CB\u3002".concat(new Date()));
      this.loading = true;
    }
  }, {
    key: "finish",
    value: function finish() {
      this.loading = false;
      var time = performance.now() - this.startTime;
      console.log("Loading\u8868\u793A\u7D42\u4E86\u3002".concat(new Date(), " \u8868\u793A\u6642\u9593:").concat(time.toFixed(3), " ms"));
      this.startTime = 0;
    }
  }]);

  return Loading;
}(lib["Vue"]);

Loadingvue_type_script_lang_ts_Loading = __decorate([lib["Component"]], Loadingvue_type_script_lang_ts_Loading);
/* harmony default export */ var Loadingvue_type_script_lang_ts_ = (Loadingvue_type_script_lang_ts_Loading);
// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Loadingvue_type_script_lang_ts_ = (Loadingvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(79);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(262);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(263);

// CONCATENATED MODULE: ./src/components/Loading.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadingvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "1a59ecc4",
  null
  
)

/* harmony default export */ var components_Loading = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VOverlay: VOverlay["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */]})


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(517);
module.exports = __webpack_require__(518);


/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_21b96a13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(332);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_21b96a13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_21b96a13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-21b96a13]{font-size:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 341,
	"./af.js": 341,
	"./ar": 342,
	"./ar-dz": 343,
	"./ar-dz.js": 343,
	"./ar-kw": 344,
	"./ar-kw.js": 344,
	"./ar-ly": 345,
	"./ar-ly.js": 345,
	"./ar-ma": 346,
	"./ar-ma.js": 346,
	"./ar-sa": 347,
	"./ar-sa.js": 347,
	"./ar-tn": 348,
	"./ar-tn.js": 348,
	"./ar.js": 342,
	"./az": 349,
	"./az.js": 349,
	"./be": 350,
	"./be.js": 350,
	"./bg": 351,
	"./bg.js": 351,
	"./bm": 352,
	"./bm.js": 352,
	"./bn": 353,
	"./bn-bd": 354,
	"./bn-bd.js": 354,
	"./bn.js": 353,
	"./bo": 355,
	"./bo.js": 355,
	"./br": 356,
	"./br.js": 356,
	"./bs": 357,
	"./bs.js": 357,
	"./ca": 358,
	"./ca.js": 358,
	"./cs": 359,
	"./cs.js": 359,
	"./cv": 360,
	"./cv.js": 360,
	"./cy": 361,
	"./cy.js": 361,
	"./da": 362,
	"./da.js": 362,
	"./de": 363,
	"./de-at": 364,
	"./de-at.js": 364,
	"./de-ch": 365,
	"./de-ch.js": 365,
	"./de.js": 363,
	"./dv": 366,
	"./dv.js": 366,
	"./el": 367,
	"./el.js": 367,
	"./en-au": 368,
	"./en-au.js": 368,
	"./en-ca": 369,
	"./en-ca.js": 369,
	"./en-gb": 370,
	"./en-gb.js": 370,
	"./en-ie": 371,
	"./en-ie.js": 371,
	"./en-il": 372,
	"./en-il.js": 372,
	"./en-in": 373,
	"./en-in.js": 373,
	"./en-nz": 374,
	"./en-nz.js": 374,
	"./en-sg": 375,
	"./en-sg.js": 375,
	"./eo": 376,
	"./eo.js": 376,
	"./es": 377,
	"./es-do": 378,
	"./es-do.js": 378,
	"./es-mx": 379,
	"./es-mx.js": 379,
	"./es-us": 380,
	"./es-us.js": 380,
	"./es.js": 377,
	"./et": 381,
	"./et.js": 381,
	"./eu": 382,
	"./eu.js": 382,
	"./fa": 383,
	"./fa.js": 383,
	"./fi": 384,
	"./fi.js": 384,
	"./fil": 385,
	"./fil.js": 385,
	"./fo": 386,
	"./fo.js": 386,
	"./fr": 387,
	"./fr-ca": 388,
	"./fr-ca.js": 388,
	"./fr-ch": 389,
	"./fr-ch.js": 389,
	"./fr.js": 387,
	"./fy": 390,
	"./fy.js": 390,
	"./ga": 391,
	"./ga.js": 391,
	"./gd": 392,
	"./gd.js": 392,
	"./gl": 393,
	"./gl.js": 393,
	"./gom-deva": 394,
	"./gom-deva.js": 394,
	"./gom-latn": 395,
	"./gom-latn.js": 395,
	"./gu": 396,
	"./gu.js": 396,
	"./he": 397,
	"./he.js": 397,
	"./hi": 398,
	"./hi.js": 398,
	"./hr": 399,
	"./hr.js": 399,
	"./hu": 400,
	"./hu.js": 400,
	"./hy-am": 401,
	"./hy-am.js": 401,
	"./id": 402,
	"./id.js": 402,
	"./is": 403,
	"./is.js": 403,
	"./it": 404,
	"./it-ch": 405,
	"./it-ch.js": 405,
	"./it.js": 404,
	"./ja": 406,
	"./ja.js": 406,
	"./jv": 407,
	"./jv.js": 407,
	"./ka": 408,
	"./ka.js": 408,
	"./kk": 409,
	"./kk.js": 409,
	"./km": 410,
	"./km.js": 410,
	"./kn": 411,
	"./kn.js": 411,
	"./ko": 412,
	"./ko.js": 412,
	"./ku": 413,
	"./ku.js": 413,
	"./ky": 414,
	"./ky.js": 414,
	"./lb": 415,
	"./lb.js": 415,
	"./lo": 416,
	"./lo.js": 416,
	"./lt": 417,
	"./lt.js": 417,
	"./lv": 418,
	"./lv.js": 418,
	"./me": 419,
	"./me.js": 419,
	"./mi": 420,
	"./mi.js": 420,
	"./mk": 421,
	"./mk.js": 421,
	"./ml": 422,
	"./ml.js": 422,
	"./mn": 423,
	"./mn.js": 423,
	"./mr": 424,
	"./mr.js": 424,
	"./ms": 425,
	"./ms-my": 426,
	"./ms-my.js": 426,
	"./ms.js": 425,
	"./mt": 427,
	"./mt.js": 427,
	"./my": 428,
	"./my.js": 428,
	"./nb": 429,
	"./nb.js": 429,
	"./ne": 430,
	"./ne.js": 430,
	"./nl": 431,
	"./nl-be": 432,
	"./nl-be.js": 432,
	"./nl.js": 431,
	"./nn": 433,
	"./nn.js": 433,
	"./oc-lnc": 434,
	"./oc-lnc.js": 434,
	"./pa-in": 435,
	"./pa-in.js": 435,
	"./pl": 436,
	"./pl.js": 436,
	"./pt": 437,
	"./pt-br": 438,
	"./pt-br.js": 438,
	"./pt.js": 437,
	"./ro": 439,
	"./ro.js": 439,
	"./ru": 440,
	"./ru.js": 440,
	"./sd": 441,
	"./sd.js": 441,
	"./se": 442,
	"./se.js": 442,
	"./si": 443,
	"./si.js": 443,
	"./sk": 444,
	"./sk.js": 444,
	"./sl": 445,
	"./sl.js": 445,
	"./sq": 446,
	"./sq.js": 446,
	"./sr": 447,
	"./sr-cyrl": 448,
	"./sr-cyrl.js": 448,
	"./sr.js": 447,
	"./ss": 449,
	"./ss.js": 449,
	"./sv": 450,
	"./sv.js": 450,
	"./sw": 451,
	"./sw.js": 451,
	"./ta": 452,
	"./ta.js": 452,
	"./te": 453,
	"./te.js": 453,
	"./tet": 454,
	"./tet.js": 454,
	"./tg": 455,
	"./tg.js": 455,
	"./th": 456,
	"./th.js": 456,
	"./tk": 457,
	"./tk.js": 457,
	"./tl-ph": 458,
	"./tl-ph.js": 458,
	"./tlh": 459,
	"./tlh.js": 459,
	"./tr": 460,
	"./tr.js": 460,
	"./tzl": 461,
	"./tzl.js": 461,
	"./tzm": 462,
	"./tzm-latn": 463,
	"./tzm-latn.js": 463,
	"./tzm.js": 462,
	"./ug-cn": 464,
	"./ug-cn.js": 464,
	"./uk": 465,
	"./uk.js": 465,
	"./ur": 466,
	"./ur.js": 466,
	"./uz": 467,
	"./uz-latn": 468,
	"./uz-latn.js": 468,
	"./uz.js": 467,
	"./vi": 469,
	"./vi.js": 469,
	"./x-pseudo": 470,
	"./x-pseudo.js": 470,
	"./yo": 471,
	"./yo.js": 471,
	"./zh-cn": 472,
	"./zh-cn.js": 472,
	"./zh-hk": 473,
	"./zh-hk.js": 473,
	"./zh-mo": 474,
	"./zh-mo.js": 474,
	"./zh-tw": 475,
	"./zh-tw.js": 475
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 617;

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(230);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);








var Resource = /*#__PURE__*/function () {
  function Resource(resourceId, resourceTypeId, name, description) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Resource);

    this.resourceId = resourceId;
    this.resourceTypeId = resourceTypeId;
    this.name = name;
    this.description = description;
    this.deletable = true;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Resource, [{
    key: "with",
    value: function _with(name, description) {
      var clone = this.clone();
      clone.name = name;
      clone.description = description;
      return clone;
    }
  }, {
    key: "withName",
    value: function withName(name) {
      var clone = this.clone();
      clone.name = name;
      return clone;
    }
  }, {
    key: "renewId",
    value: function renewId(newResourceId) {
      var clone = this.clone();
      clone.resourceId = newResourceId;
      return clone;
    }
  }, {
    key: "type",
    get: function get() {
      return _ResourceType__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].ofId(this.resourceTypeId);
    }
  }, {
    key: "clone",
    value: function clone() {
      var serializer = new _Serializer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]();
      return serializer.cloningOf(this);
    }
  }]);

  return Resource;
}();


Resource.YET_NUMBERING_ID = 0;
Resource.NAME_MAX_LENGTH = 128;
Resource.DESCRIPTION_MAX_LENGTH = 512;

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_68bf8dc7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_68bf8dc7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_68bf8dc7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-68bf8dc7]{display:flex;height:100%;width:100%;max-width:none;padding-right:0;padding-left:0;margin-right:unset;margin-left:unset;position:absolute}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(477);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{overflow-y:hidden}.auther-link{text-decoration:none}.no-efect-link,.no-efect-link:active,.no-efect-link:hover,.no-efect-link:link,.no-efect-link:visited{text-decoration:none;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(165);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppricationStatus = /*#__PURE__*/function (_VuexModule) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AppricationStatus, _VuexModule);

  var _super = _createSuper(AppricationStatus);

  function AppricationStatus() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AppricationStatus);

    _this = _super.apply(this, arguments);
    _this.wheels = 2;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AppricationStatus, [{
    key: "incrWheels",
    value: function incrWheels(extra) {
      this.wheels += extra;
    }
  }, {
    key: "axles",
    get: function get() {
      return this.wheels / 2;
    }
  }]);

  return AppricationStatus;
}(vuex_module_decorators__WEBPACK_IMPORTED_MODULE_8__["VuexModule"]);

__decorate([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_8__["Mutation"]], AppricationStatus.prototype, "incrWheels", null);

AppricationStatus = __decorate([Object(vuex_module_decorators__WEBPACK_IMPORTED_MODULE_8__["Module"])({
  name: 'applicationstatus',
  stateFactory: true,
  namespaced: true
})], AppricationStatus);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasContentResource; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(138);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * 「内容」付きリソース。
 */

var HasContentResource = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(HasContentResource, _Resource);

  var _super = _createSuper(HasContentResource);

  function HasContentResource(resourceId, resouceTypeId, name, description, content) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, HasContentResource);

    _this = _super.call(this, resourceId, resouceTypeId, name, description);
    _this.content = content;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(HasContentResource, [{
    key: "withContent",
    value: function withContent(content) {
      var clone = this.clone();
      clone.content = content;
      return clone;
    }
  }, {
    key: "renewDefaultName",
    value: function renewDefaultName(seq) {
      var type = this.type;
      var newName = type.name + this.zeroPadding(seq, 2);
      return this.withName(newName);
    }
  }, {
    key: "zeroPadding",
    value: function zeroPadding(value, point) {
      return ('0'.repeat(point) + value).slice(-1 * point);
    }
  }]);

  return HasContentResource;
}(_Resource__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


HasContentResource.CONTENT_MAX_LENGTH = 512;

/***/ })

},[[516,96,5,97]]]);