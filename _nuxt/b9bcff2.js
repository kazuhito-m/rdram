(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30,29,31,32,33,35,36,53,70,71,73,75,78,81,82,94],{

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _IconZOrderLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(840);



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

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(592);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(837);
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

/***/ 840:
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

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PropertiesSettingDialog.vue?vue&type=template&id=171f26f0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":_vm.width,"value":_vm.id},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.onKeyEsc.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onKeyEnter.apply(null, arguments)}]}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v(_vm._s(_vm.iconKey))]),_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")],1),_vm._v(" "),_c('v-card-subtitle',{staticClass:"text-right"},[_vm._v(_vm._s(_vm.subTitle))]),_vm._v(" "),_c('v-card-text',[_vm._t("inputPart")],2),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("キャンセル")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","disabled":!_vm.consent,"color":"primary"},on:{"click":_vm.onClickOk}},[_vm._v("OK")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PropertiesSettingDialog.vue?vue&type=template&id=171f26f0&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PropertiesSettingDialog.vue?vue&type=script&lang=ts&







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



var PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(PropertiesSettingDialog, _Vue);

  var _super = _createSuper(PropertiesSettingDialog);

  function PropertiesSettingDialog() {
    Object(classCallCheck["a" /* default */])(this, PropertiesSettingDialog);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(PropertiesSettingDialog, [{
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "onClickOk",
    value: function onClickOk() {}
  }, {
    key: "onShow",
    value: function onShow() {}
  }, {
    key: "onChangeId",
    value: function onChangeId() {
      if (this.id) this.onShow();
    }
  }, {
    key: "onKeyEsc",
    value: function onKeyEsc() {
      if (this.ignoreEscKey) return;
      this.onClose();
    }
  }, {
    key: "onKeyEnter",
    value: function onKeyEnter() {
      if (this.ignoreEnterKey) return;
      this.onClickOk();
    }
  }]);

  return PropertiesSettingDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "id", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "title", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "iconKey", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "consent", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "subTitle", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "width", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "ignoreEscKey", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "ignoreEnterKey", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "onClose", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClickOk")], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "onClickOk", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onShow")], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "onShow", null);

__decorate([Object(nuxt_property_decorator_umd["Watch"])("id")], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog.prototype, "onChangeId", null);

PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog = __decorate([nuxt_property_decorator_umd["Component"]], PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog);
/* harmony default export */ var PropertiesSettingDialogvue_type_script_lang_ts_ = (PropertiesSettingDialogvue_type_script_lang_ts_PropertiesSettingDialog);
// CONCATENATED MODULE: ./src/components/PropertiesSettingDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PropertiesSettingDialogvue_type_script_lang_ts_ = (PropertiesSettingDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// CONCATENATED MODULE: ./src/components/PropertiesSettingDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertiesSettingDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "171f26f0",
  null
  
)

/* harmony default export */ var components_PropertiesSettingDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 844:
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

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoomValueOnDraw2d; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(871);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Draw2Dのzoom値(getZoom()で取れる値)を表すValueオブジェクト。
 * <p>
 * その値自体は倍率ではない(1を割るための分母)であるため、その知識をクラスに表す。
 */
var ZoomValueOnDraw2d = /*#__PURE__*/function () {
  function ZoomValueOnDraw2d(value) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ZoomValueOnDraw2d);

    this.value = value;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ZoomValueOnDraw2d, [{
    key: "percentage",
    value: function percentage() {
      return 100 / this.value;
    }
  }, {
    key: "ratio",
    value: function ratio() {
      return 1 / this.value;
    }
  }], [{
    key: "of",
    value: function of(zoom) {
      var fixZoom = Number.isFinite(zoom) ? zoom : 1;
      return new ZoomValueOnDraw2d(fixZoom);
    }
  }]);

  return ZoomValueOnDraw2d;
}();



/***/ }),

/***/ 853:
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
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(837);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_diagrams_icon_IconGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(839);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(838);









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

/***/ 854:
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

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var parseInt = __webpack_require__(873);

// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {
  parseInt: parseInt
});


/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(877);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("47f37972", content, true, {"sourceMap":false});

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draw2dCanvasGuideType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(837);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);







var Draw2dCanvasGuideType = /*#__PURE__*/function () {
  function Draw2dCanvasGuideType(type, iconKey, caption, canvasPolicy) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Draw2dCanvasGuideType);

    this.type = type;
    this.iconKey = iconKey;
    this.caption = caption;
    this.canvasPolicy = canvasPolicy;
    Draw2dCanvasGuideType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Draw2dCanvasGuideType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return (other === null || other === void 0 ? void 0 : other.iconKey) === this.iconKey;
    }
  }], [{
    key: "values",
    value: function values() {
      return Draw2dCanvasGuideType.vs;
    }
  }, {
    key: "of",
    value: function of(type) {
      var found = this.vs.find(function (item) {
        return item.type === type;
      });
      if (found) return found;
      return Draw2dCanvasGuideType.なし;
    }
  }, {
    key: "ofIconKey",
    value: function ofIconKey(iconKey) {
      var found = this.vs.find(function (item) {
        return item.iconKey === iconKey;
      });
      if (found) return found;
      return Draw2dCanvasGuideType.なし;
    }
  }]);

  return Draw2dCanvasGuideType;
}();


Draw2dCanvasGuideType.vs = [];
Draw2dCanvasGuideType.なし = new Draw2dCanvasGuideType(_domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_5__[/* CanvasGuideType */ "a"].NOTHING, "mdi-grid-off", "なし(白地)", null);
Draw2dCanvasGuideType.グリッド = new Draw2dCanvasGuideType(_domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_5__[/* CanvasGuideType */ "a"].GRID, "mdi-grid", "グリッド(方眼・格子状)", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.policy.canvas.SnapToGridEditPolicy());
Draw2dCanvasGuideType.ジオメトリ = new Draw2dCanvasGuideType(_domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_5__[/* CanvasGuideType */ "a"].GEOMETRY, "mdi-crop", "ジオメトリ(他アイコン位置をガイド)", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.policy.canvas.SnapToGeometryEditPolicy());

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(887);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("4d49831c", content, true, {"sourceMap":false});

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragAndDropResourceType; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(854);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(855);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var _presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(844);












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

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragAndDropResourceId; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(854);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(855);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(844);












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

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(914);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("1848a514", content, true, {"sourceMap":false});

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(46);
var fails = __webpack_require__(34);
var uncurryThis = __webpack_require__(32);
var toString = __webpack_require__(65);
var trim = __webpack_require__(355).trim;
var whitespaces = __webpack_require__(356);

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

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasZoomSlider_vue_vue_type_style_index_0_id_6cfb5a1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(856);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasZoomSlider_vue_vue_type_style_index_0_id_6cfb5a1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasZoomSlider_vue_vue_type_style_index_0_id_6cfb5a1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".zoom-slider[data-v-6cfb5a1a]{width:250px;height:35px}.zoom-parsentage[data-v-6cfb5a1a]{height:35px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(879);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("5d282c82", content, true, {"sourceMap":false});

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue?vue&type=template&id=6cfb5a1a&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-slider',{staticClass:"zoom-slider",attrs:{"dence":"","append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline","max":_vm.MAX,"min":_vm.MIN},on:{"click:append":_vm.onClickZoomIn,"click:prepend":_vm.onClickZoomOut},model:{value:(_vm.zoomPercentage),callback:function ($$v) {_vm.zoomPercentage=_vm._n($$v)},expression:"zoomPercentage"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue?vue&type=template&id=6cfb5a1a&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/ZoomValueOnDraw2d.ts
var ZoomValueOnDraw2d = __webpack_require__(845);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue?vue&type=script&lang=ts&








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




var CanvasZoomSlidervue_type_script_lang_ts_CanvasZoomSlider = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(CanvasZoomSlider, _Vue);

  var _super = _createSuper(CanvasZoomSlider);

  function CanvasZoomSlider() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CanvasZoomSlider);

    _this = _super.apply(this, arguments);
    _this.zoomPercentage = 100;
    _this.MAX = 200;
    _this.MIN = 20;
    _this.INCREMENTAL = 10;
    return _this;
  }

  Object(createClass["a" /* default */])(CanvasZoomSlider, [{
    key: "onChangeZoomBySlider",
    value: function onChangeZoomBySlider(_zoom) {}
  }, {
    key: "canvasZoomToSlider",
    value: function canvasZoomToSlider(zoom) {
      this.zoomPercentage = ZoomValueOnDraw2d["default"].of(zoom).percentage();
    }
  }, {
    key: "onChangeCanvasZoom",
    value: function onChangeCanvasZoom() {
      this.canvasZoomToSlider(this.canvasZoom);
    }
  }, {
    key: "onChangeSliderValue",
    value: function onChangeSliderValue() {
      if (!isFinite(this.zoomPercentage)) return;
      var base = Number(this.zoomPercentage);
      var fix = base;
      if (base < this.MIN) fix = this.MIN;
      if (base > this.MAX) fix = this.MAX;

      if (base !== fix) {
        this.zoomPercentage = fix;
        return;
      }

      var zoom = 100 / fix;
      this.onChangeZoomBySlider(zoom);
    }
  }, {
    key: "onClickZoomOut",
    value: function onClickZoomOut() {
      this.zoomPercentage = this.zoomPercentage - this.INCREMENTAL || this.MIN;
    }
  }, {
    key: "onClickZoomIn",
    value: function onClickZoomIn() {
      this.zoomPercentage = this.zoomPercentage + this.INCREMENTAL || this.MAX;
    }
  }]);

  return CanvasZoomSlider;
}(lib["Vue"]);

__decorate([Object(lib["Prop"])({
  required: true
})], CanvasZoomSlidervue_type_script_lang_ts_CanvasZoomSlider.prototype, "canvasZoom", void 0);

__decorate([Object(lib["Emit"])("onChangeZoomBySlider")], CanvasZoomSlidervue_type_script_lang_ts_CanvasZoomSlider.prototype, "onChangeZoomBySlider", null);

__decorate([Object(lib["Watch"])("canvasZoom")], CanvasZoomSlidervue_type_script_lang_ts_CanvasZoomSlider.prototype, "onChangeCanvasZoom", null);

__decorate([Object(lib["Watch"])("zoomPercentage")], CanvasZoomSlidervue_type_script_lang_ts_CanvasZoomSlider.prototype, "onChangeSliderValue", null);

CanvasZoomSlidervue_type_script_lang_ts_CanvasZoomSlider = __decorate([lib["Component"]], CanvasZoomSlidervue_type_script_lang_ts_CanvasZoomSlider);
/* harmony default export */ var CanvasZoomSlidervue_type_script_lang_ts_ = (CanvasZoomSlidervue_type_script_lang_ts_CanvasZoomSlider);
// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue?vue&type=script&lang=ts&
 /* harmony default export */ var toolbar_CanvasZoomSlidervue_type_script_lang_ts_ = (CanvasZoomSlidervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue?vue&type=style&index=0&id=6cfb5a1a&scoped=true&lang=css&
var CanvasZoomSlidervue_type_style_index_0_id_6cfb5a1a_scoped_true_lang_css_ = __webpack_require__(876);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.js
var VSlider = __webpack_require__(946);

// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  toolbar_CanvasZoomSlidervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "6cfb5a1a",
  null
  
)

/* harmony default export */ var toolbar_CanvasZoomSlider = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VSlider: VSlider["a" /* default */]})


/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue?vue&type=template&id=2732aa14&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('PropertiesSettingDialog',{attrs:{"id":_vm.relation,"consent":_vm.consent,"title":_vm.title,"subTitle":_vm.subTitle,"iconKey":"mdi-vector-line","width":"490"},on:{"onClose":_vm.onClose,"onClickOk":_vm.onClickUpdateExecute,"onShow":_vm.onShow},scopedSlots:_vm._u([{key:"inputPart",fn:function(){return [_c('v-container',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"意味(関連に表示されるラベル)","counter":"","autofocus":"","rules":[_vm.validateMeaning],"maxlength":_vm.meaningMaxLength},model:{value:(_vm.meaning),callback:function ($$v) {_vm.meaning=$$v},expression:"meaning"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('p',[_vm._v("線形(軌跡の形状)")]),_vm._v(" "),_c('v-btn-toggle',{attrs:{"tile":"","color":"deep-purple accent-3","group":""},model:{value:(_vm.routerType.id),callback:function ($$v) {_vm.$set(_vm.routerType, "id", $$v)},expression:"routerType.id"}},_vm._l((_vm.routerTypes),function(itemRouterType){return _c('v-btn',{key:itemRouterType.id,attrs:{"value":itemRouterType.id},on:{"click":function($event){return _vm.onChangeRouterType(itemRouterType)}}},[_vm._v(_vm._s(itemRouterType.name))])}),1)],1)],1)],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue?vue&type=template&id=2732aa14&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

// EXTERNAL MODULE: ./src/components/PropertiesSettingDialog.vue + 4 modules
var PropertiesSettingDialog = __webpack_require__(841);

// EXTERNAL MODULE: ./src/domain/relation/Relation.ts
var Relation = __webpack_require__(353);

// EXTERNAL MODULE: ./src/domain/relation/RouterType.ts
var RouterType = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue?vue&type=script&lang=ts&








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






var RelationPropertiesEditDialogvue_type_script_lang_ts_RelationPropertiesEditDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(RelationPropertiesEditDialog, _Vue);

  var _super = _createSuper(RelationPropertiesEditDialog);

  function RelationPropertiesEditDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, RelationPropertiesEditDialog);

    _this = _super.apply(this, arguments);
    _this.consent = false;
    _this.title = "関連 の設定";
    _this.subTitle = "関連";
    _this.routerTypes = RouterType["a" /* default */].values();
    _this.meaning = "";
    _this.routerType = RouterType["a" /* default */].DIRECT;
    return _this;
  }

  Object(createClass["a" /* default */])(RelationPropertiesEditDialog, [{
    key: "onUpdateRelationProperties",
    value: function onUpdateRelationProperties(_relation) {}
  }, {
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "onChangeRelation",
    value: function onChangeRelation() {
      if (this.relation) this.onShow();
    }
  }, {
    key: "onShow",
    value: function onShow() {
      if (!this.relation) return;
      this.consent = false;
      this.showProperties(this.relation);
    }
  }, {
    key: "showProperties",
    value: function showProperties(relation) {
      this.meaning = relation.meaning;
      this.routerType = relation.routerType;
    }
  }, {
    key: "changed",
    value: function changed() {
      if (!this.relation) return false;
      var old = this.relation;
      return old.meaning !== this.meaning || !old.routerType.equals(this.routerType);
    }
  }, {
    key: "meaningMaxLength",
    get: function get() {
      return Relation["a" /* default */].MEANING_MAX_LENGTH;
    }
  }, {
    key: "validateMeaning",
    value: function validateMeaning() {
      this.consent = false;
      var meaning = this.meaning;
      var max = this.meaningMaxLength;
      if (meaning.length > max) return "".concat(max, "\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      this.consent = this.changed();
      return true;
    }
  }, {
    key: "onClickUpdateExecute",
    value: function onClickUpdateExecute() {
      if (!this.relation || !this.consent) return;
      var modified = this.relation.changeMeaning(this.meaning).changeRouter(this.routerType);
      this.onUpdateRelationProperties(modified);
      this.onClose();
    }
  }, {
    key: "onChangeRouterType",
    value: function onChangeRouterType(routerType) {
      this.routerType = routerType;
      this.consent = this.changed();
    }
  }]);

  return RelationPropertiesEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], RelationPropertiesEditDialogvue_type_script_lang_ts_RelationPropertiesEditDialog.prototype, "relation", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onUpdateRelationProperties")], RelationPropertiesEditDialogvue_type_script_lang_ts_RelationPropertiesEditDialog.prototype, "onUpdateRelationProperties", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], RelationPropertiesEditDialogvue_type_script_lang_ts_RelationPropertiesEditDialog.prototype, "onClose", null);

__decorate([Object(nuxt_property_decorator_umd["Watch"])("relation")], RelationPropertiesEditDialogvue_type_script_lang_ts_RelationPropertiesEditDialog.prototype, "onChangeRelation", null);

RelationPropertiesEditDialogvue_type_script_lang_ts_RelationPropertiesEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    PropertiesSettingDialog: PropertiesSettingDialog["default"]
  }
})], RelationPropertiesEditDialogvue_type_script_lang_ts_RelationPropertiesEditDialog);
/* harmony default export */ var RelationPropertiesEditDialogvue_type_script_lang_ts_ = (RelationPropertiesEditDialogvue_type_script_lang_ts_RelationPropertiesEditDialog);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var canvas_RelationPropertiesEditDialogvue_type_script_lang_ts_ = (RelationPropertiesEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js + 1 modules
var VBtnToggle = __webpack_require__(947);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(822);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(823);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(825);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(87);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  canvas_RelationPropertiesEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "2732aa14",
  null
  
)

/* harmony default export */ var canvas_RelationPropertiesEditDialog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {PropertiesSettingDialog: __webpack_require__(841).default})


/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VBtnToggle: VBtnToggle["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasSettingToolBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(859);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasSettingToolBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasSettingToolBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".canvas-float-toolbar{width:520px;left:2%;top:-10%;display:block;z-index:2;transition:none;position:absolute}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(889);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("11091623", content, true, {"sourceMap":false});

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{transform:translateY(100%)}.v-bottom-sheet.v-dialog{align-self:flex-end;border-radius:0;flex:0 1 auto;margin:0;overflow:visible}.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:70%}@media only screen and (max-width:599.98px){.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 895:
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
/* harmony import */ var _components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(853);








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

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconViewModel; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(114);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_diagrams_icon_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(840);







var IconViewModel = /*#__PURE__*/function () {
  function IconViewModel(icon) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, IconViewModel);

    this.icon = icon;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(IconViewModel, [{
    key: "isNotAreaIcon",
    value: function isNotAreaIcon() {
      var status = this.icon.getUserData();
      return status.zOrder === _components_diagrams_icon_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_5__["default"].NORMAL;
    }
  }, {
    key: "compareNumber",
    value: function compareNumber() {
      var zOrderLevel = this.zOrderLevelOf(this.icon);
      return zOrderLevel * 1000000 + this.resourceId();
    }
  }, {
    key: "zOrderLevelOf",
    value: function zOrderLevelOf(icon) {
      var iconStatus = icon.getUserData();
      if (!iconStatus) return _components_diagrams_icon_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_5__["default"].NORMAL;
      return iconStatus.zOrder;
    }
  }, {
    key: "resourceId",
    value: function resourceId() {
      return Number(this.icon.getId());
    }
  }, {
    key: "toString",
    value: function toString(resources) {
      var resource = resources.of(this.resourceId());
      return [this.compareNumber(), resource === null || resource === void 0 ? void 0 : resource.name].join(", ");
    }
  }], [{
    key: "compare",
    value: function compare(left, right) {
      return left.compareNumber() - right.compareNumber();
    }
  }]);

  return IconViewModel;
}();



/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsolutePosition; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _ZoomValueOnDraw2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(845);



/**
 * Canvasの座標から、ブラウザ上の絶対座標に変換するクラス。
 */

var AbsolutePosition = /*#__PURE__*/function () {
  function AbsolutePosition(xOnCanvas, yOnCanvas, canvas) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AbsolutePosition);

    this.xOnCanvas = xOnCanvas;
    this.yOnCanvas = yOnCanvas;
    this.canvas = canvas;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AbsolutePosition, [{
    key: "ratio",
    value: function ratio() {
      var zoom = this.canvas.getZoom();
      return _ZoomValueOnDraw2d__WEBPACK_IMPORTED_MODULE_2__["default"].of(zoom).ratio();
    }
  }, {
    key: "x",
    value: function x() {
      return this.xOnCanvas * this.ratio() + this.canvas.getAbsoluteX();
    }
  }, {
    key: "y",
    value: function y() {
      return this.yOnCanvas * this.ratio() + this.canvas.getAbsoluteY();
    }
  }]);

  return AbsolutePosition;
}();



/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouterTypeDraw2dConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(213);





var RouterTypeDraw2dConverter = /*#__PURE__*/function () {
  function RouterTypeDraw2dConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RouterTypeDraw2dConverter);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RouterTypeDraw2dConverter, [{
    key: "draw2dRouterOf",
    value: function draw2dRouterOf(routerType) {
      if (!routerType) return undefined;
      if (routerType.equals(_domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].MANHATTAN)) return new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.layout.connection.ManhattanConnectionRouter();
      if (routerType.equals(_domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].CIRCUIT)) return new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.layout.connection.CircuitConnectionRouter();
      if (routerType.equals(_domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].SPLINE)) return new draw2d__WEBPACK_IMPORTED_MODULE_2___default.a.layout.connection.SplineConnectionRouter(); // if (routerType.equals(RouterType.SKETCH))
      //    return new draw2d.layout.connection.SketchConnectionRouter();

      return undefined;
    }
  }, {
    key: "analyzeRouterType",
    value: function analyzeRouterType(router) {
      if (!router) return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].DIRECT;
      var name = router.NAME;
      if (!name) return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].DIRECT;
      if (name === "draw2d.layout.connection.ManhattanConnectionRouter") return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].MANHATTAN;
      if (name === "draw2d.layout.connection.CircuitConnectionRouter") return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].CIRCUIT;
      if (name === "draw2d.layout.connection.SplineConnectionRouter") return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].SPLINE; // if (name === "draw2d.layout.connection.SketchConnectionRouter") return RouterType.SKETCH;

      return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].DIRECT;
    }
  }]);

  return RouterTypeDraw2dConverter;
}();



/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue?vue&type=template&id=b2765026&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-menu',{attrs:{"value":_vm.visible,"position-x":_vm.menuPositionX,"position-y":_vm.menuPositionY,"close-on-click":"","close-on-content-click":"","offset-x":"","rounded":""}},[_c('v-list',[_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickChangeRouter}},[_c('v-list-item-title',[_vm._v("関連の線形(軌跡の形状)を変更...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickEditConnection}},[_c('v-list-item-title',[_vm._v("関連の設定...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickDeleteConnection}},[_c('v-list-item-title',[_vm._v("関連の削除")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"inset":"","open-on-hover":""},model:{value:(_vm.visibleRouterSelector),callback:function ($$v) {_vm.visibleRouterSelector=$$v},expression:"visibleRouterSelector"}},[_c('v-sheet',{staticClass:"text-center",attrs:{"height":"200px"}},[_c('v-btn',{staticClass:"mt-6",attrs:{"text":"","color":"normal"},on:{"click":function($event){_vm.visibleRouterSelector = !_vm.visibleRouterSelector}}},[_vm._v("close")]),_vm._v(" "),_c('div',{staticClass:"my-3"},[_vm._v("変更したい線形(軌跡の形状)を選択してください。")]),_vm._v(" "),_c('v-btn-toggle',{attrs:{"tile":"","color":"deep-purple accent-3","group":""},model:{value:(_vm.changedRouterTypeId),callback:function ($$v) {_vm.changedRouterTypeId=$$v},expression:"changedRouterTypeId"}},_vm._l((_vm.routerTypes),function(routerType){return _c('v-btn',{key:routerType.id,attrs:{"value":routerType.id},on:{"click":function($event){return _vm.onChangeRouterType(routerType)}}},[_vm._v(_vm._s(routerType.name))])}),1)],1)],1),_vm._v(" "),_c('RelationPropertiesEditDialog',{attrs:{"relation":_vm.editTargetRelation},on:{"onUpdateRelationProperties":_vm.onUpdateRelationProperties,"onClose":_vm.onClosePropertiesEditor}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue?vue&type=template&id=b2765026&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue + 4 modules
var RelationPropertiesEditDialog = __webpack_require__(885);

// EXTERNAL MODULE: ./src/domain/relation/RouterType.ts
var RouterType = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue?vue&type=script&lang=ts&








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





var ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(ConnectorRightClickMenuAndEditor, _Vue);

  var _super = _createSuper(ConnectorRightClickMenuAndEditor);

  function ConnectorRightClickMenuAndEditor() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ConnectorRightClickMenuAndEditor);

    _this = _super.apply(this, arguments);
    _this.routerTypes = RouterType["a" /* default */].values();
    _this.visibleRouterSelector = false;
    _this.changedRouterTypeId = 0;
    _this.editTargetRelation = null;
    return _this;
  }

  Object(createClass["a" /* default */])(ConnectorRightClickMenuAndEditor, [{
    key: "onUpdateRelation",
    value: function onUpdateRelation(_relation) {}
  }, {
    key: "onDeleteRelation",
    value: function onDeleteRelation(_relation) {}
  }, {
    key: "onClickChangeRouter",
    value: function onClickChangeRouter() {
      if (!this.relation) return;
      this.visibleRouterSelector = false;
      this.changedRouterTypeId = this.relation.routerType.id;
      this.visibleRouterSelector = true;
    }
  }, {
    key: "onChangeRouterType",
    value: function onChangeRouterType(routerType) {
      if (!this.relation) return;
      this.visibleRouterSelector = false;
      this.onUpdateRelation(this.relation.changeRouter(routerType));
    }
  }, {
    key: "onClickDeleteConnection",
    value: function onClickDeleteConnection() {
      if (!this.relation) return;
      this.onDeleteRelation(this.relation);
    }
  }, {
    key: "onClickEditConnection",
    value: function onClickEditConnection() {
      this.editTargetRelation = this.relation;
    }
  }, {
    key: "onUpdateRelationProperties",
    value: function onUpdateRelationProperties(relation) {
      this.onUpdateRelation(relation);
    }
  }, {
    key: "onClosePropertiesEditor",
    value: function onClosePropertiesEditor() {
      this.editTargetRelation = null;
    }
  }]);

  return ConnectorRightClickMenuAndEditor;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "visible", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "relation", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "menuPositionX", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "menuPositionY", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onUpdateRelation')], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "onUpdateRelation", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onDeleteRelation')], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "onDeleteRelation", null);

ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    RelationPropertiesEditDialog: RelationPropertiesEditDialog["default"]
  }
})], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor);
/* harmony default export */ var ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ = (ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue?vue&type=script&lang=ts&
 /* harmony default export */ var canvas_ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ = (ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBottomSheet/VBottomSheet.sass
var VBottomSheet = __webpack_require__(888);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


 // Extensions


/* @vue/component */

/* harmony default export */ var VBottomSheet_VBottomSheet = (VDialog["a" /* default */].extend({
  name: 'v-bottom-sheet',
  props: {
    inset: Boolean,
    maxWidth: [String, Number],
    transition: {
      type: String,
      default: 'bottom-sheet-transition'
    }
  },
  computed: {
    classes: function classes() {
      return _objectSpread(_objectSpread({}, VDialog["a" /* default */].options.computed.classes.call(this)), {}, {
        'v-bottom-sheet': true,
        'v-bottom-sheet--inset': this.inset
      });
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js + 1 modules
var VBtnToggle = __webpack_require__(947);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(341);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(96);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  canvas_ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "b2765026",
  null
  
)

/* harmony default export */ var canvas_ConnectorRightClickMenuAndEditor = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBottomSheet: VBottomSheet_VBottomSheet,VBtn: VBtn["a" /* default */],VBtnToggle: VBtnToggle["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VSheet: VSheet["a" /* default */]})


/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/IconToolTip.vue?vue&type=template&id=e2aa9e64&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-tooltip',{attrs:{"top":"","absolute":"","z-index":"3","position-x":_vm.positionX,"position-y":_vm.positionY},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('span',{on:{"click":function($event){return _vm.close()}}},[_c('div',[_vm._v("種類 : "+_vm._s(_vm.type.name))]),_vm._v(" "),(_vm.description.length > 0)?_c('div',[_vm._v("\n        備考・メモ : "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.description)}})]):_vm._e()])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/IconToolTip.vue?vue&type=template&id=e2aa9e64&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts + 1 modules
var ResourceType = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/IconToolTip.vue?vue&type=script&lang=ts&








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

var IconToolTip_1;



var IconToolTipvue_type_script_lang_ts_IconToolTip = IconToolTip_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(IconToolTip, _Vue);

  var _super = _createSuper(IconToolTip);

  function IconToolTip() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, IconToolTip);

    _this = _super.apply(this, arguments);
    _this.visible = false;
    _this.positionX = 0;
    _this.positionY = 0;
    _this.timer = -1;
    _this.type = ResourceType["a" /* default */].アクター;
    _this.description = '';
    return _this;
  }

  Object(createClass["a" /* default */])(IconToolTip, [{
    key: "show",
    value: function show(resource, x, y) {
      var _this2 = this;

      this.timer = setTimeout(function () {
        _this2.timer = -1;

        _this2.doShow(resource, x, y);
      }, IconToolTip_1.SHOW_DELAY_MS);
    }
  }, {
    key: "doShow",
    value: function doShow(resource, x, y) {
      this.type = resource.type;
      this.description = this.repCr(resource.description);
      this.positionX = x;
      this.positionY = y;
      this.visible = true;
    }
  }, {
    key: "close",
    value: function close() {
      if (this.timer !== -1) {
        clearTimeout(this.timer);
        this.timer = -1;
        return;
      }

      this.doClose();
    }
  }, {
    key: "doClose",
    value: function doClose() {
      this.visible = false;
    }
  }, {
    key: "move",
    value: function move(x, y) {
      this.positionX = x;
      this.positionY = y;
    }
  }, {
    key: "repCr",
    value: function repCr(text) {
      return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\r\n|\r|\n/g, '<br>');
    }
  }]);

  return IconToolTip;
}(nuxt_property_decorator_umd["Vue"]);

IconToolTipvue_type_script_lang_ts_IconToolTip.SHOW_DELAY_MS = 2500;
IconToolTipvue_type_script_lang_ts_IconToolTip = IconToolTip_1 = __decorate([nuxt_property_decorator_umd["Component"]], IconToolTipvue_type_script_lang_ts_IconToolTip);
/* harmony default export */ var IconToolTipvue_type_script_lang_ts_ = (IconToolTipvue_type_script_lang_ts_IconToolTip);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/IconToolTip.vue?vue&type=script&lang=ts&
 /* harmony default export */ var canvas_IconToolTipvue_type_script_lang_ts_ = (IconToolTipvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(830);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/IconToolTip.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  canvas_IconToolTipvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "e2aa9e64",
  null
  
)

/* harmony default export */ var canvas_IconToolTip = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VTooltip: VTooltip["a" /* default */]})


/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue?vue&type=template&id=3584352c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-toolbar',{staticClass:"canvas-float-toolbar",attrs:{"id":_vm.toolBarId,"draggable":"","dense":"","floating":"","outlined":"","rounded":"","shaped":"","short":"","collapse":_vm.toolBarCollapse},on:{"dragstart":_vm.onDragStartToolBar,"mousedown":_vm.onMouseDownToolBar}},[_c('v-btn',{attrs:{"dark":"","icon":""},on:{"click":_vm.onClickEditDiagramProperties}},[_c('v-icon',[_vm._v("mdi-content-save-edit-outline")])],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-card',[_c('CanvasZoomSlider',{attrs:{"canvasZoom":_vm.canvasZoom},on:{"onChangeZoomBySlider":_vm.onChangeZoom}})],1):_vm._e(),_vm._v(" "),(!_vm.toolBarCollapse)?_c('span',{on:{"dblclick":function($event){return _vm.onDblClickZoomPercentage()}}},[_vm._v(_vm._s(_vm.calcZoomPercentage()))]):_vm._e(),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-menu',{attrs:{"top":"","offset-y":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('div',_vm._g(_vm._b({},'div',attrs,false),on),[_c('v-tooltip',{attrs:{"top":"","open-delay":"1000"},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-btn',_vm._g(_vm._b({attrs:{"dark":"","small":"","icon":""}},'v-btn',attrs,false),on),[_c('v-icon',[_vm._v(_vm._s(_vm.canvasGuideType.iconKey))])],1)]}}],null,true)},[_vm._v(" "),_c('span',[_vm._v("ガイド形状 : "+_vm._s(_vm.canvasGuideType.caption))])])],1)]}}],null,false,3802571375)},[_vm._v(" "),_c('v-list',_vm._l((_vm.canvasGuideTypes()),function(guideType){return _c('v-list-item',{key:guideType.iconKey,on:{"click":function($event){return _vm.onClickChangeCanvasGuideType(guideType)}}},[_c('v-list-item-title',[_c('v-icon',[_vm._v(_vm._s(guideType.iconKey))]),_vm._v("\n          "+_vm._s(guideType.caption)+"\n        ")],1)],1)}),1)],1):_vm._e(),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-btn',{attrs:{"dark":"","small":"","icon":""}},[_c('v-icon',{on:{"click":_vm.onClickPngDownload}},[_vm._v("mdi-image")])],1):_vm._e(),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-btn',{attrs:{"dark":"","small":"","icon":""}},[_c('v-icon',{on:{"click":_vm.onClickSvgDownload}},[_vm._v("mdi-image-outline")])],1):_vm._e(),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-btn',{attrs:{"dark":"","small":"","icon":""}},[_c('v-icon',{on:{"click":_vm.onClickDiagramExport}},[_vm._v("mdi-file-export")])],1):_vm._e(),_vm._v(" "),_c('v-spacer'),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-btn',{attrs:{"dark":"","icon":""},on:{"click":_vm.onClickBarCollapseToggle}},[_c('v-icon',[_vm._v("mdi-arrow-collapse-horizontal")])],1):_vm._e(),_vm._v(" "),(_vm.toolBarCollapse)?_c('v-btn',{attrs:{"dark":"","icon":""},on:{"click":_vm.onClickBarCollapseToggle}},[_c('v-icon',[_vm._v("mdi-arrow-expand-horizontal")])],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue?vue&type=template&id=3584352c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/resize-observer/lib/ResizeObserver.js
var ResizeObserver = __webpack_require__(898);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue + 4 modules
var CanvasZoomSlider = __webpack_require__(884);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/Draw2dCanvasGuideType.ts
var Draw2dCanvasGuideType = __webpack_require__(858);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue?vue&type=script&lang=ts&








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

var CanvasSettingToolBar_1;





var CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar = CanvasSettingToolBar_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(CanvasSettingToolBar, _Vue);

  var _super = _createSuper(CanvasSettingToolBar);

  function CanvasSettingToolBar() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CanvasSettingToolBar);

    _this = _super.apply(this, arguments);
    _this.toolBarCollapse = true;
    _this.dragStartLayerX = 0;
    _this.dragStartLayerY = 0;
    _this.canvasZoom = 1;
    _this.lastContainerWidth = 0;
    _this.lastContainerHeight = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(CanvasSettingToolBar, [{
    key: "onChangeCanvasGuideType",
    value: function onChangeCanvasGuideType(_canvasGuideType) {}
  }, {
    key: "onPngDownload",
    value: function onPngDownload() {}
  }, {
    key: "onSvgDownLoad",
    value: function onSvgDownLoad() {}
  }, {
    key: "onDiagramExport",
    value: function onDiagramExport() {}
  }, {
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(_diagramId) {}
  }, {
    key: "created",
    value: function created() {
      this.toolBarId = "toolBar" + this.diagramId;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var container = this.getCanvasContainer();
      if (!container) return;
      container.addEventListener("dragover", this.onDragOverToolBar);
      container.addEventListener("drop", this.onDropToolBar);
      this.addResizeListenerCanvasContainer();
      this.moveToolBarOnFirstPosition();
    }
  }, {
    key: "onChangeZoom",
    value: function onChangeZoom(zoom) {
      this.onChangeZoomParent(zoom);
    }
  }, {
    key: "onChangeZoomParent",
    value: function onChangeZoomParent(zoom) {
      this.canvasZoom = zoom;
    }
  }, {
    key: "onResizeEditorPane",
    value: function onResizeEditorPane(event) {
      // FIXME Tabの非アクティブ時に裏で無限呼び出され、することへの対策。今の所「ResizeObzerverを削除」くらいしか手がないが…。
      if (event[0].target.clientHeight === 0) return;
      var toolBar = this.getToolBarElement();
      if (!toolBar) return;
      var c = event[0].target; // 右/下の座標を維持するような挙動張

      var movedX = c.clientWidth - this.lastContainerWidth;
      var movedY = c.clientHeight - this.lastContainerHeight;
      var left = toolBar.offsetLeft + movedX;
      var top = toolBar.offsetTop + movedY;
      this.fixAreaOverToolBar(left, top, toolBar);
      this.lastContainerWidth = c.clientWidth;
      this.lastContainerHeight = c.clientHeight;
    }
  }, {
    key: "onDblClickZoomPercentage",
    value: function onDblClickZoomPercentage() {
      this.onChangeZoomParent(1);
    }
  }, {
    key: "addResizeListenerCanvasContainer",
    value: function addResizeListenerCanvasContainer() {
      var container = this.getCanvasContainer();
      if (!container) return;
      var observer = new ResizeObserver["ResizeObserver"](this.onResizeEditorPane);
      observer.observe(container);
    }
  }, {
    key: "moveToolBarOnFirstPosition",
    value: function moveToolBarOnFirstPosition() {
      var toolBar = this.getToolBarElement();
      var c = this.getCanvasContainer();
      if (!c) return;
      this.lastContainerWidth = c.clientWidth;
      this.lastContainerHeight = c.clientHeight;
      var padding = CanvasSettingToolBar_1.TOOLBAR_PADDING;
      var left = c.clientWidth - toolBar.offsetWidth - padding;
      var top = c.clientHeight - toolBar.offsetHeight - padding;
      var style = toolBar.style;
      style.left = "".concat(left, "px");
      style.top = "".concat(top, "px");
    }
  }, {
    key: "onMouseDownToolBar",
    value: function onMouseDownToolBar(event) {
      this.dragStartLayerX = event.layerX;
      this.dragStartLayerY = event.layerY;
    }
  }, {
    key: "onDragStartToolBar",
    value: function onDragStartToolBar(event) {
      var _a;

      (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text", this.toolBarId);
    }
  }, {
    key: "onDragOverToolBar",
    value: function onDragOverToolBar(event) {
      event === null || event === void 0 ? void 0 : event.preventDefault();
    }
  }, {
    key: "onDropToolBar",
    value: function onDropToolBar(event) {
      var _a;

      var toolBarId = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text");
      if (toolBarId !== this.toolBarId) return;
      var toolBar = this.getToolBarElement();
      var container = this.getCanvasContainer();
      if (!(toolBar && container)) return;
      var browserAbsContainerRect = container.getBoundingClientRect();
      var left = event.pageX - browserAbsContainerRect.left;
      var top = event.pageY - browserAbsContainerRect.top;
      var adjustLeft = left - this.dragStartLayerX;
      var adjustTop = top - this.dragStartLayerY;
      this.fixAreaOverToolBar(adjustLeft, adjustTop, toolBar);
      event.preventDefault();
    }
  }, {
    key: "fixAreaOverToolBar",
    value: function fixAreaOverToolBar(left, top, toolBar) {
      var container = this.getCanvasContainer();
      if (!container) return;
      var toolBarWidth = toolBar.offsetWidth;
      var toolBarHeight = toolBar.offsetHeight;
      var leftOver = left + toolBarWidth - container.clientWidth;
      if (leftOver > 0) left = container.clientWidth - toolBarWidth;
      if (left < 0) left = 0;
      var topOver = top + toolBarHeight - container.clientHeight;
      if (topOver > 0) top = container.clientHeight - toolBarHeight;
      if (top < 0) top = 0;
      var style = toolBar.style;
      style.left = "".concat(left, "px");
      style.top = "".concat(top, "px");
    }
    /**
     * バーを畳む時「左畳み」ではなく「右畳み」にする。
     */

  }, {
    key: "onClickBarCollapseToggle",
    value: function onClickBarCollapseToggle() {
      var _this2 = this;

      var toolBar = this.getToolBarElement();
      var beforeWidth = toolBar.offsetWidth;
      this.toolBarCollapse = !this.toolBarCollapse;
      this.$nextTick(function () {
        var left = toolBar.offsetLeft + beforeWidth - toolBar.offsetWidth;
        var top = parseInt(toolBar.style.top.replace(/px$/, ""));

        _this2.fixAreaOverToolBar(left, top, toolBar);
      });
    }
  }, {
    key: "calcZoomPercentage",
    value: function calcZoomPercentage() {
      return "".concat(Math.floor(100 / this.canvasZoom), "%");
    }
  }, {
    key: "canvasGuideTypes",
    value: function canvasGuideTypes() {
      var _this3 = this;

      return Draw2dCanvasGuideType["default"].values().filter(function (type) {
        return !type.equals(_this3.canvasGuideType);
      });
    }
  }, {
    key: "onClickChangeCanvasGuideType",
    value: function onClickChangeCanvasGuideType(canvasGuideType) {
      this.onChangeCanvasGuideType(canvasGuideType);
    }
  }, {
    key: "onClickPngDownload",
    value: function onClickPngDownload() {
      this.onPngDownload();
    }
  }, {
    key: "onClickSvgDownload",
    value: function onClickSvgDownload() {
      this.onSvgDownLoad();
    }
  }, {
    key: "onClickDiagramExport",
    value: function onClickDiagramExport() {
      this.onDiagramExport();
    }
  }, {
    key: "onClickEditDiagramProperties",
    value: function onClickEditDiagramProperties() {
      this.onOpendDiagramPropertiesEditor(this.diagramId);
    }
  }, {
    key: "getToolBarElement",
    value: function getToolBarElement() {
      // FIXME 本当は「IDとっといてgetElementById()とかしたくない」んだけど、$refsが「ほんものを返してくれない」のでLeft値が変えられない。
      return document.getElementById(this.toolBarId);
    }
  }, {
    key: "getEditorPane",
    value: function getEditorPane() {
      var parent = this.getToolBarElement().parentElement;
      if (!parent) return null;
      return parent;
    }
  }, {
    key: "getCanvasContainer",
    value: function getCanvasContainer() {
      var container = this.$parent.$el;
      if (!container) return null;
      return container;
    }
  }]);

  return CanvasSettingToolBar;
}(nuxt_property_decorator_umd["Vue"]);

CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.TOOLBAR_PADDING = 10;

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "diagramId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "canvasGuideType", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onChangeCanvasGuideType")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onChangeCanvasGuideType", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onPngDownload")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onPngDownload", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onSvgDownload")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onSvgDownLoad", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onDiagramExport")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onDiagramExport", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onOpendDiagramPropertiesEditor")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onOpendDiagramPropertiesEditor", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onChangeZoomBySlider")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onChangeZoomParent", null);

CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar = CanvasSettingToolBar_1 = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    CanvasZoomSlider: CanvasZoomSlider["default"]
  }
})], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar);
/* harmony default export */ var CanvasSettingToolBarvue_type_script_lang_ts_ = (CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar);
// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var toolbar_CanvasSettingToolBarvue_type_script_lang_ts_ = (CanvasSettingToolBarvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue?vue&type=style&index=0&lang=css&
var CanvasSettingToolBarvue_type_style_index_0_lang_css_ = __webpack_require__(886);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(341);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(830);

// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  toolbar_CanvasSettingToolBarvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var toolbar_CanvasSettingToolBar = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */











installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VSpacer: VSpacer["a" /* default */],VToolbar: VToolbar["a" /* default */],VTooltip: VTooltip["a" /* default */]})


/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramCanvas_vue_vue_type_style_index_0_id_52369355_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(866);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramCanvas_vue_vue_type_style_index_0_id_52369355_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramCanvas_vue_vue_type_style_index_0_id_52369355_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".canvas-container[data-v-52369355]{width:100%;height:100%;min-width:0;overflow:auto;text-align:left}.diagram-canvas[data-v-52369355]{width:1px;height:1px;margin:0;border-radius:5px;filter:drop-shadow(10px 10px 10px rgba(0,0,0,.6));position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=template&id=52369355&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"convasContainer",staticClass:"canvas-container"},[_c('div',{ref:"canvasBase",staticClass:"diagram-canvas",attrs:{"id":_vm.canvasId}}),_vm._v(" "),_c('CanvasSettingToolBar',{attrs:{"diagramId":_vm.diagramId,"canvasGuideType":_vm.canvasGuideType},on:{"onChangeZoomBySlider":_vm.onChangeZoomBySlider,"onChangeCanvasGuideType":_vm.onChangeCanvasGuideType,"onPngDownload":_vm.onPngDownload,"onSvgDownload":_vm.onSvgDownload,"onDiagramExport":_vm.onDiagramExport,"onOpendDiagramPropertiesEditor":_vm.onOpendDiagramPropertiesEditor}}),_vm._v(" "),_c('ConnectorRightClickMenuAndEditor',{attrs:{"visible":_vm.visibleConnectorMenu,"relation":_vm.targetRelation,"menuPositionX":_vm.menuX,"menuPositionY":_vm.menuY},on:{"onUpdateRelation":_vm.onUpdateRelation,"onDeleteRelation":_vm.onDeleteRelation}}),_vm._v(" "),_c('IconToolTip',{ref:"iconToolTip"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=template&id=52369355&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(302);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.delete-all.js
var esnext_map_delete_all = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.every.js
var esnext_map_every = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.filter.js
var esnext_map_filter = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find.js
var esnext_map_find = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find-key.js
var esnext_map_find_key = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.includes.js
var esnext_map_includes = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.key-of.js
var esnext_map_key_of = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-keys.js
var esnext_map_map_keys = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-values.js
var esnext_map_map_values = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.merge.js
var esnext_map_merge = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.reduce.js
var esnext_map_reduce = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.some.js
var esnext_map_some = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.update.js
var esnext_map_update = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/draw2d/dist/draw2d.js
var draw2d = __webpack_require__(837);
var draw2d_default = /*#__PURE__*/__webpack_require__.n(draw2d);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(908);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widget.js
var widget = __webpack_require__(939);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/draggable.js
var draggable = __webpack_require__(943);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/droppable.js
var droppable = __webpack_require__(945);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/DefaultIconGenerator.ts
var DefaultIconGenerator = __webpack_require__(895);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/IconViewModel.ts
var IconViewModel = __webpack_require__(896);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/ZoomValueOnDraw2d.ts
var ZoomValueOnDraw2d = __webpack_require__(845);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/AbsolutePosition.ts
var AbsolutePosition = __webpack_require__(897);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/IconToolTip.vue + 4 modules
var IconToolTip = __webpack_require__(901);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue + 4 modules
var CanvasSettingToolBar = __webpack_require__(902);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue + 5 modules
var ConnectorRightClickMenuAndEditor = __webpack_require__(900);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/Draw2dCanvasGuideType.ts
var Draw2dCanvasGuideType = __webpack_require__(858);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/RouterTypeDraw2dConverter.ts
var RouterTypeDraw2dConverter = __webpack_require__(899);

// EXTERNAL MODULE: ./src/domain/diagram/Diagram.ts
var Diagram = __webpack_require__(174);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(108);

// CONCATENATED MODULE: ./src/domain/client/DownloadCustomFile.ts



var DownloadCustomFile_DownloadCustomFile = /*#__PURE__*/Object(createClass["a" /* default */])(function DownloadCustomFile(clientFileName, contentType, contents) {
  Object(classCallCheck["a" /* default */])(this, DownloadCustomFile);

  this.clientFileName = clientFileName;
  this.contentType = contentType;
  this.contents = contents;
});


// EXTERNAL MODULE: ./src/domain/client/WithTimestampFileName.ts
var WithTimestampFileName = __webpack_require__(249);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/dad/DragAndDropResourceType.ts
var DragAndDropResourceType = __webpack_require__(862);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/dad/DragAndDropResourceId.ts
var DragAndDropResourceId = __webpack_require__(863);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=script&lang=ts&













function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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























var DiagramCanvasvue_type_script_lang_ts_DiagramCanvas = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(DiagramCanvas, _Vue);

  var _super = _createSuper(DiagramCanvas);

  function DiagramCanvas() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DiagramCanvas);

    _this = _super.apply(this, arguments);
    _this.routerConverter = new RouterTypeDraw2dConverter["default"]();
    _this.canvasGuideType = Draw2dCanvasGuideType["default"].なし;
    _this.lastResourcesCache = null;
    _this.visibleConnectorMenu = false;
    _this.targetRelation = null;
    _this.menuX = 0;
    _this.menuY = 0;
    _this.dropXOnCanvas = 0;
    _this.dropYOnCanvas = 0;
    _this.initialized = false;
    return _this;
  } // Properties.


  Object(createClass["a" /* default */])(DiagramCanvas, [{
    key: "zoom",
    value: function zoom() {
      var zoom = this.canvas.getZoom();
      return ZoomValueOnDraw2d["default"].of(zoom).value;
    }
  }, {
    key: "diagramId",
    get: function get() {
      return this.diagram.id;
    } // Events
    // This view callback(Emit).

  }, {
    key: "onUpdateResources",
    value: function onUpdateResources() {}
  }, {
    key: "onMergePlacement",
    value: function onMergePlacement(_diffTarget) {}
  }, {
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(_diagramId) {}
  }, {
    key: "onShowWarnBar",
    value: function onShowWarnBar(_text) {}
  }, {
    key: "onShowResourceMenu",
    value: function onShowResourceMenu(_resource, _x, _y) {}
  }, {
    key: "onEditResource",
    value: function onEditResource(_resourceId) {
      this.closeIconToolTip();
    }
  }, {
    key: "onOpenResourceEditorWhenCreate",
    value: function onOpenResourceEditorWhenCreate(_resourceType) {}
  }, {
    key: "onShowConnectorMenu",
    value: function onShowConnectorMenu() {} // Watch event.

  }, {
    key: "onUpdatedDiagramProperties",
    value: function onUpdatedDiagramProperties() {
      var diagramId = this.diagramId;
      if (diagramId !== this.lastPropertiesUpdatedDiagramId) return;
      var diagram = this.loadDiagram();
      var c = this.canvas;
      if (c.getWidth() === diagram.width && c.getHeight() === diagram.height) return;
      this.reverceSyncCavansDeleteThings();
      this.canvas.setDimension(diagram.width, diagram.height);
      this.onMergePlacement(diagram.placements);
      this.onChangeZoomBySlider(this.zoom() + 0.001); // 再描画がうまく行くHack
    }
  }, {
    key: "onChangeResourcesOnProduct",
    value: function onChangeResourcesOnProduct() {
      if (!this.lastResourcesCache) return;
      var nowResources = this.allResources;
      var cache = this.lastResourcesCache;
      var whenResouce = nowResources.length < cache.size;

      if (whenResouce) {
        this.reverceSyncCavansDeleteThings();
      } else {
        var modifies = nowResources.filter(function (r) {
          return cache.get(r.resourceId) !== r;
        });
        this.redrawIcons(modifies);
      }

      this.cacheNowResources();
    }
  }, {
    key: "onChangeUsedResouceIds",
    value: function onChangeUsedResouceIds() {
      this.reverceSyncCavansDeleteThings();
    }
  }, {
    key: "onChangeVisibleConnectorMenu",
    value: function onChangeVisibleConnectorMenu() {
      if (this.visibleConnectorMenu) this.onShowConnectorMenu();
    } // Vue events.(life cycle events)

  }, {
    key: "created",
    value: function created() {
      this.canvasId = 'canvas' + this.diagramId;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      this.withLoadingScreen(function () {
        _this2.initialize();
      });
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.cacheNowResources();
      var diagram = this.diagram;
      var guideType = Draw2dCanvasGuideType["default"].of(diagram.canvasGuideType);
      this.showCanvas();
      this.fixCanvasPosition();
      this.addCanvasEvent();
      this.drawDiagram(diagram);
      this.onChangeCanvasGuideType(guideType);
    } // public by other diarogs

  }, {
    key: "showWarnBar",
    value: function showWarnBar(text) {
      this.onShowWarnBar(text);
    } // right click menu events.

  }, {
    key: "onDeleteRelation",
    value: function onDeleteRelation(relation) {
      this.deleteConnection(relation);
      this.transactionOf(function (diagram, _) {
        return diagram.removeRelationsOf([relation.id]);
      });
    }
  }, {
    key: "onUpdateRelation",
    value: function onUpdateRelation(relation) {
      var connection = this.canvas.getLine(relation.id);
      if (!connection) return;
      this.decorateConnection(connection, relation);
      connection.getChildren().asArray().forEach(function (c) {
        return connection.remove(c);
      });
      this.addConnectionLabel(connection, relation);
      this.transactionOf(function (diagram, _product) {
        return diagram.modifyRelationOf(relation);
      });
    } // from Toolbar events.

  }, {
    key: "onChangeZoomBySlider",
    value: function onChangeZoomBySlider(zoom) {
      this.canvas.setZoom(zoom, false);
    }
  }, {
    key: "onChangeCanvasGuideType",
    value: function onChangeCanvasGuideType(canvasGuideType) {
      var canvas = this.canvas;
      var beforeDraw2dCanvasGuideType = this.canvasGuideType;
      if (beforeDraw2dCanvasGuideType.canvasPolicy) canvas.uninstallEditPolicy(beforeDraw2dCanvasGuideType.canvasPolicy);
      if (canvasGuideType.canvasPolicy) canvas.installEditPolicy(canvasGuideType.canvasPolicy); // 「何故か、背景が真っ黒になってしまう」対策。ちょーーっとだけリサイズする。
      // …こんなワークアラウンドのほうが安定するからしゃーない。

      canvas.setZoom(this.zoom() - 0.001, false);
      this.canvasGuideType = canvasGuideType;
    }
  }, {
    key: "onPngDownload",
    value: function onPngDownload() {
      var _this3 = this;

      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return;
      var fileName = this.makeDownloadFileName(diagram, 'png');
      var writer = new draw2d_default.a.io.png.Writer();
      writer.marshal(this.canvas, function (png) {
        _this3.clientDownloadRepository.registerBase64PngImage(png, fileName);
      });
    }
  }, {
    key: "onSvgDownload",
    value: function onSvgDownload() {
      var _this4 = this;

      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return;
      var fileName = this.makeDownloadFileName(diagram, 'svg');
      var writer = new draw2d_default.a.io.svg.Writer();
      writer.marshal(this.canvas, function (svg) {
        var withFontSvg = _this4.includeWebFont(svg);

        var file = new DownloadCustomFile_DownloadCustomFile(fileName, 'image/svg+xml', withFontSvg);

        _this4.clientDownloadRepository.register(file);
      });
    }
  }, {
    key: "onDiagramExport",
    value: function onDiagramExport() {
      this.diagramExportService.downloadExportFileOnClient(this.diagramId);
    } // Canvas Events

  }, {
    key: "onDropCanvas",
    value: function onDropCanvas(event) {
      var _a;

      event.preventDefault();
      var zoom = this.zoom();
      this.dropXOnCanvas = event.offsetX * zoom;
      this.dropYOnCanvas = event.offsetY * zoom;
      var textData = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text/plain');
      if (!textData) return;
      var ddrt = DragAndDropResourceType["default"].prototypeOf().parseOf(textData); // 新規追加時。

      if (!ddrt.isInvalid()) {
        var resourceType = ddrt.id();
        if (!resourceType) return;
        this.onOpenResourceEditorWhenCreate(resourceType);
        return;
      }

      var ddri = DragAndDropResourceId["default"].prototypeOf().parseOf(textData);
      if (ddri.isInvalid()) return;
      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return;
      var resource = product.resources.of(ddri.id());
      if (!resource) return;
      this.addPlacement(resource);
    }
  }, {
    key: "onDropOverCanvas",
    value: function onDropOverCanvas(event) {
      event.preventDefault();
    }
  }, {
    key: "onCanvasCommandExecute",
    value: function onCanvasCommandExecute(event) {
      var _this5 = this;

      if (!event.isPostChangeEvent()) return;
      var rootCommand = event.getCommand();
      var analyzeResutEvents = this.eventAnalyzer.analyze(rootCommand);
      if (analyzeResutEvents.isNothing()) return;
      this.transactionOf(function (diagram, product) {
        if (!analyzeResutEvents.validate(diagram, product, _this5)) return null;
        return analyzeResutEvents.apply(diagram, product, _this5);
      });
    }
  }, {
    key: "onClickConnectorOnCanvas",
    value: function onClickConnectorOnCanvas(x, y) {
      var canvas = this.canvas;
      var foundFigure = canvas.getBestFigure(x, y, [], []);
      if (!foundFigure) return;
      var product = this.repository.getCurrentProduct();
      if (!product) return;
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return;
      var targetRelation = diagram.relationOf(foundFigure.id);
      if (!targetRelation) return;
      var zoom = this.zoom();
      var absoluteX = canvas.getAbsoluteX() + x / zoom;
      var absoluteY = canvas.getAbsoluteY() + y / zoom;
      this.showConnectorRightClickMenu(targetRelation, absoluteX, absoluteY);
    } // Initialize methods

  }, {
    key: "showCanvas",
    value: function showCanvas() {
      var canvas = new draw2d_default.a.Canvas(this.canvasId, Diagram["a" /* default */].MAX_WIDTH, Diagram["a" /* default */].MAX_HEIGHT);
      canvas.installEditPolicy(new draw2d_default.a.policy.canvas.CoronaDecorationPolicy());
      canvas.installEditPolicy(new draw2d_default.a.policy.canvas.ShowGridEditPolicy(-1));
      canvas.installEditPolicy(new draw2d_default.a.policy.canvas.ExtendedKeyboardPolicy()); // XXX 多分必要だと思うのだけど、実害がないので一旦消す。
      // これで「スクロールの元と成るオブジェクトがわからなくなる」のだとは思うが、
      // canvasのスクロールを制御するコードがまだないので、このままにしておく。
      // 必要になったらここを思い出すこと。(無理だろ…)
      //
      // const editorPane = this.$refs.editorPane as HTMLElement;
      // editorPane.id = `editorPane${this.diagramId}`;
      // canvas.setScrollArea(`#${editorPane.id}`);

      this.canvas = canvas;
    }
  }, {
    key: "drawDiagram",
    value: function drawDiagram(diagram) {
      var _this6 = this;

      diagram.placements.forEach(function (p) {
        return _this6.usedResouceIds.push(p.resourceId);
      });
      var allResources = new Resources["a" /* default */](this.allResources);
      var iconViewModels = diagram.placements.filter(function (placement) {
        return allResources.existsIdOf(placement.resourceId);
      }).map(function (placement) {
        return _this6.generateIcon(allResources.of(placement.resourceId), placement);
      }).filter(function (icon) {
        return icon;
      }).map(function (icon) {
        return new IconViewModel["default"](icon);
      });
      this.canvas.setDimension(diagram.width, diagram.height);
      iconViewModels.sort(IconViewModel["default"].compare).map(function (vm) {
        return vm.icon;
      }).forEach(function (icon) {
        return _this6.canvas.add(icon);
      });
      diagram.allRelations().forEach(this.addConnection);
    } // self decralation event.
    // UI controll.

  }, {
    key: "addResouceIconToCanvas",
    value: function addResouceIconToCanvas(resource, placement) {
      var icon = this.generateIcon(resource, placement);
      if (!icon) return;
      this.canvas.add(icon);
      this.fixZOrder(icon);
    }
  }, {
    key: "generateIcon",
    value: function generateIcon(resource, placement) {
      var type = resource.type;
      var generator = this.choiceIconGenerator(type);
      var icon = generator.generate(placement, resource, this.iconStyleOf(type));
      this.setIconEventHandler(icon, resource);
      return icon;
    }
  }, {
    key: "setIconEventHandler",
    value: function setIconEventHandler(icon, resource) {
      var _this7 = this;

      var topIcon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var tIcon = topIcon || icon;

      icon.onContextMenu = function (x, y) {
        return _this7.showResourceMenu(resource, x, y);
      };

      icon.onDoubleClick = function () {
        return _this7.onEditResource(resource.resourceId);
      };

      icon.onMouseEnter = function () {
        return _this7.showIconToolTip(resource, tIcon);
      };

      icon.onMouseLeave = function () {
        return _this7.closeIconToolTip();
      };

      icon.on('move', function () {
        return _this7.moveIconToolTip(tIcon);
      }, undefined);
      var children = icon.getChildren();

      for (var i = 0; i < children.getSize(); i++) {
        this.setIconEventHandler(children.get(i), resource, tIcon);
      }
    }
  }, {
    key: "showResourceMenu",
    value: function showResourceMenu(resource, x, y) {
      this.closeIconToolTip();
      var pos = new AbsolutePosition["default"](x, y, this.canvas);
      this.onShowResourceMenu(resource, pos.x(), pos.y());
    }
    /**
     * 最後に追加したのが「範囲アイコン」なら、通常アイコンよりZOrder後ろにもっていく。
     *
     * 「範囲アイコン」でなければ、Draw2D的なZOrderは触らない。
     * (初期表示とは動きが異なるので、通常アイコン同士の重なりは後勝ちになるかも)
     *
     * TODO IconGeneratorでsetUserData()してるので、このロジックもそこらへんに移動したい。
     */

  }, {
    key: "fixZOrder",
    value: function fixZOrder(icon) {
      var targetIconVM = new IconViewModel["default"](icon);
      if (targetIconVM.isNotAreaIcon()) return;
      var sortedIconVMs = this.iconVMs().sort(IconViewModel["default"].compare);
      var compareNumberOverItem = sortedIconVMs.find(function (vm) {
        return vm.compareNumber() > targetIconVM.compareNumber();
      });
      if (!compareNumberOverItem) return;
      var afterIcon = compareNumberOverItem.icon;
      icon.toBack(afterIcon); // Debug
      // const allResources = new Resources(this.allResources);
      // console.log("対象のIcon:", targetIconVM.toString(allResources));
      // sortedIconVMs
      //   .forEach(i => console.log(i.toString(allResources)));
      // console.log("めっかったやつ:", compareNumberOverItem?.toString(allResources));
      //
      // const figures = this.canvas
      //   .getFigures()
      //   .asArray() as Figure[];
      // console.log("最終的なZOrderを含めた結果。");
      // figures
      //   .sort((l,r) => l.getZOrder() - r.getZOrder())
      //   .map(i => new IconViewModel(i))
      //   .forEach(i => console.log("ZOrder:",i.icon.getZOrder(), ", ID:", i.toString(allResources)));
    }
  }, {
    key: "choiceIconGenerator",
    value: function choiceIconGenerator(resourceType) {
      var found = this.iconGenerators.find(function (g) {
        return g.resourceType().equals(resourceType);
      });
      return found || DefaultIconGenerator["default"].get();
    }
  }, {
    key: "addConnection",
    value: function addConnection(relation) {
      var canvas = this.canvas;
      var connection = new draw2d_default.a.Connection({
        id: relation.id
      });
      var startPort = this.getPort(relation.fromResourceId, canvas, true);
      if (startPort) connection.setSource(startPort);
      var endPort = this.getPort(relation.toResourceId, canvas, false);
      if (endPort) connection.setTarget(endPort);
      connection.onContextMenu = this.onClickConnectorOnCanvas;
      this.addConnectionLabel(connection, relation);
      this.decorateConnection(connection, relation);
      canvas.add(connection);
    }
  }, {
    key: "getPort",
    value: function getPort(resourceId, canvas, fromPort) {
      var targetFigure = canvas.getFigure(String(resourceId));
      if (!targetFigure) return undefined;
      var portTypeName = fromPort ? 'draw2d.OutputPort' : 'draw2d.InputPort';
      return this.searchPortOf(targetFigure, portTypeName);
    }
  }, {
    key: "searchPortOf",
    value: function searchPortOf(figure, portTypeName) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var target = figure;
      var foundPort = target.getPorts(false).asArray().find(function (port) {
        return port.NAME === portTypeName || port.NAME === 'draw2d.HybridPort';
      });
      if (foundPort || depth > 1) return foundPort; // 一つ下の子FigureまでPortを追う。

      var next = depth + 1;

      var _iterator = _createForOfIteratorHelper(figure.getChildren().asArray()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          var found = this.searchPortOf(child, portTypeName, next);
          if (found) return found;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return undefined;
    }
  }, {
    key: "addConnectionLabel",
    value: function addConnectionLabel(connection, relation) {
      if (relation.meaning.length === 0) return;
      var label = new draw2d_default.a.shape.basic.Label({
        text: relation.meaning,
        stroke: 0,
        padding: 0,
        alpha: 0.75,
        bgColor: '#ffffff'
      });
      connection.add(label, new draw2d_default.a.layout.locator.ParallelMidpointLocator());
    }
  }, {
    key: "showConnectorRightClickMenu",
    value: function showConnectorRightClickMenu(relation, x, y) {
      var _this8 = this;

      this.visibleConnectorMenu = false;
      this.targetRelation = relation;
      this.menuX = x;
      this.menuY = y;
      this.$nextTick(function () {
        _this8.visibleConnectorMenu = true;
      });
    }
  }, {
    key: "iconStyleOf",
    value: function iconStyleOf(resourceType) {
      return this.iconMap[resourceType.iconKey];
    }
    /**
     * キャンバス側から、逆にデータにあるかを調べ、削除されてそうなものが在れば消す。
     */

  }, {
    key: "reverceSyncCavansDeleteThings",
    value: function reverceSyncCavansDeleteThings() {
      // 初期ロード時、onChangeUsedResouceIds() が走ってしまい、LocalSterageからの読み出しが走ってしまう。
      // そのため「一度目だけは外からもちこまれたdiagramを使う」ようにする。(ダーティーハック)
      var diagram = this.initialized ? this.loadDiagram() : this.diagram;
      this.initialized = true;
      var canvas = this.canvas;
      canvas.getLines().each(function (_, line) {
        if (!diagram.existsRelationId(line.id.toString())) canvas.remove(line);
      });
      canvas.getFigures().each(function (_, figure) {
        var resourceId = Number(figure.id);
        if (!diagram.existsResourceOnPlacementOf(resourceId)) canvas.remove(figure);
      });
    }
  }, {
    key: "confirmResourceDelete",
    value: function confirmResourceDelete(resourceIds, diagram) {
      var relationIds = diagram.relationIdsOfDeleteTargetResouce(resourceIds);
      if (relationIds.length === 0) return true;
      var message = "\u9078\u629E\u3055\u308C\u305F\u8981\u7D20\u306B\u306F\u3001\u4ED6\u306E\u8981\u7D20\u3078\u306E\u95A2\u9023\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u308C\u3089\u3092\u542B\u3081\u524A\u9664\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\u3002";
      return confirm(message);
    }
  }, {
    key: "makeDownloadFileName",
    value: function makeDownloadFileName(diagram, extension) {
      var namePart = "".concat(diagram.id, "-").concat(diagram.name);
      return new WithTimestampFileName["a" /* default */](namePart, extension);
    }
  }, {
    key: "includeWebFont",
    value: function includeWebFont(svgContents) {
      var cssLink = "<defs><style type='text/css'>@import url('https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css');</style></defs>";
      return svgContents.replace('<defs', cssLink + '<defs');
    }
  }, {
    key: "decorateConnection",
    value: function decorateConnection(connection, relation) {
      var router = this.routerConverter.draw2dRouterOf(relation.routerType);
      connection.setRouter(router);
      if (relation.tipAllow) this.arrowDocorate(connection);
    }
  }, {
    key: "arrowDocorate",
    value: function arrowDocorate(connection) {
      var decorator = new draw2d_default.a.decoration.connection.ArrowDecorator();
      decorator.setBackgroundColor(connection.getColor());
      connection.setTargetDecorator(decorator);
    }
  }, {
    key: "redrawIcons",
    value: function redrawIcons(resources) {
      var _this9 = this;

      var diagram = this.loadDiagram();
      resources.forEach(function (resource) {
        return _this9.redrawIcon(resource, diagram);
      });
    }
  }, {
    key: "redrawIcon",
    value: function redrawIcon(resource, diagram) {
      var _this10 = this;

      var placement = diagram.placementOf(resource.resourceId);
      if (!placement) return;
      var relations = diagram.allRelations().onlyRelatedOf(resource);
      var iconVM = this.iconVMOf(resource);
      if (!iconVM) return;
      relations.forEach(function (relation) {
        return _this10.deleteConnection(relation);
      });
      this.canvas.remove(iconVM.icon);
      this.addResouceIconToCanvas(resource, placement);
      relations.forEach(this.addConnection);
    }
  }, {
    key: "iconVMs",
    value: function iconVMs() {
      var allIcons = this.canvas.getFigures().asArray();
      return allIcons.map(function (i) {
        return new IconViewModel["default"](i);
      });
    }
  }, {
    key: "iconVMOf",
    value: function iconVMOf(resource) {
      return this.iconVMs().find(function (vm) {
        return vm.resourceId() === resource.resourceId;
      });
    }
  }, {
    key: "deleteConnection",
    value: function deleteConnection(relation) {
      var connection = this.canvas.getLine(relation.id);
      this.canvas.remove(connection);
    } // Data change controll.

    /**
     * どーしても、draw2dがsvg作るときに”position: absolute"をしてしまうので、削除する。
     */

  }, {
    key: "fixCanvasPosition",
    value: function fixCanvasPosition() {
      var _a;

      var svg = (_a = document.getElementById(this.canvasId)) === null || _a === void 0 ? void 0 : _a.firstChild;
      svg.style.removeProperty('position');
      svg.addEventListener('drop', this.onDropCanvas);
      svg.addEventListener('dragover', this.onDropOverCanvas);

      svg.oncontextmenu = function () {
        return false;
      }; // これは自動的にdraw2d.jsがやってくれるはず…なんだけどなぁ。

    }
  }, {
    key: "addCanvasEvent",
    value: function addCanvasEvent() {
      var commandStack = this.canvas.getCommandStack();
      commandStack.addEventListener(this.onCanvasCommandExecute);
    }
  }, {
    key: "addPlacement",
    value: function addPlacement(resource) {
      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      if (!product || !diagram) return;
      var placement = diagram.createPlacement(resource, this.dropXOnCanvas, this.dropYOnCanvas);
      var modifiedDiagram = diagram.addPlacement(placement);
      var modifiedProduct = product.meageDiagramByIdOf(modifiedDiagram);
      this.addResouceIconToCanvas(resource, placement);
      this.repository.registerCurrentProduct(modifiedProduct);
      this.onMergePlacement(modifiedDiagram.placements);
    }
    /**
     * 自動保存のOn/Offを意識した「product,diagramへの操作」。
     */

  }, {
    key: "transactionOf",
    value: function transactionOf(func) {
      var product = this.repository.getCurrentProduct();
      var diagram = this.loadDiagram();
      var modifiedDiagram = func(diagram, product);
      if (modifiedDiagram === null) return;
      this.onMergePlacement(modifiedDiagram.placements);
      var modifiedProduct = product.meageDiagramByIdOf(modifiedDiagram);
      this.repository.registerCurrentProduct(modifiedProduct);
    }
  }, {
    key: "cacheNowResources",
    value: function cacheNowResources() {
      var nowResources = this.allResources;
      var dic = new Map();
      nowResources.forEach(function (r) {
        return dic.set(r.resourceId, r);
      });
      this.lastResourcesCache = dic;
    }
  }, {
    key: "calculateCenterPositionOf",
    value: function calculateCenterPositionOf(icon) {
      var x = icon.getX() + icon.getWidth() / 2;
      var y = icon.getY();
      return new AbsolutePosition["default"](x, y, this.canvas);
    }
  }, {
    key: "showIconToolTip",
    value: function showIconToolTip(resource, icon) {
      var pos = this.calculateCenterPositionOf(icon);
      var toolTip = this.$refs.iconToolTip;
      toolTip.show(resource, pos.x(), pos.y());
    }
  }, {
    key: "closeIconToolTip",
    value: function closeIconToolTip() {
      var toolTip = this.$refs.iconToolTip;
      toolTip.close();
    }
  }, {
    key: "moveIconToolTip",
    value: function moveIconToolTip(icon) {
      var pos = this.calculateCenterPositionOf(icon);
      var toolTip = this.$refs.iconToolTip;
      toolTip.move(pos.x(), pos.y());
    }
  }, {
    key: "loadDiagram",
    value: function loadDiagram() {
      var product = this.repository.getCurrentProduct();
      return product.diagrams.of(this.diagramId);
    }
  }, {
    key: "withLoadingScreen",
    value: function withLoadingScreen(actions) {
      var _this11 = this;

      this.$nuxt.$loading.start();
      var timer = setInterval(function () {
        clearInterval(timer);
        actions();

        _this11.$nuxt.$loading.finish();
      }, 1);
    }
  }]);

  return DiagramCanvas;
}(lib["Vue"]);

__decorate([Object(lib["Prop"])({
  required: true
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "diagram", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "usedResouceIds", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "allResources", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "lastPropertiesUpdatedDiagramId", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "iconMap", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "eventAnalyzer", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "iconGenerators", void 0);

__decorate([Object(lib["Inject"])()], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "repository", void 0);

__decorate([Object(lib["Inject"])()], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "clientDownloadRepository", void 0);

__decorate([Object(lib["Inject"])()], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "diagramExportService", void 0);

__decorate([Object(lib["Emit"])('onUpdateResources')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onUpdateResources", null);

__decorate([Object(lib["Emit"])('onMergePlacement')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onMergePlacement", null);

__decorate([Object(lib["Emit"])('onOpendDiagramPropertiesEditor')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onOpendDiagramPropertiesEditor", null);

__decorate([Object(lib["Emit"])('onShowWarnBar')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onShowWarnBar", null);

__decorate([Object(lib["Emit"])('onShowResourceMenu')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onShowResourceMenu", null);

__decorate([Object(lib["Emit"])('onEditResource')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onEditResource", null);

__decorate([Object(lib["Emit"])('onOpenResourceEditorWhenCreate')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onOpenResourceEditorWhenCreate", null);

__decorate([Object(lib["Emit"])('onShowConnectorMenu')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onShowConnectorMenu", null);

__decorate([Object(lib["Watch"])('lastPropertiesUpdatedDiagramId')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onUpdatedDiagramProperties", null);

__decorate([Object(lib["Watch"])('allResources')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onChangeResourcesOnProduct", null);

__decorate([Object(lib["Watch"])('usedResouceIds')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onChangeUsedResouceIds", null);

__decorate([Object(lib["Watch"])('visibleConnectorMenu')], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onChangeVisibleConnectorMenu", null);

DiagramCanvasvue_type_script_lang_ts_DiagramCanvas = __decorate([Object(lib["Component"])({
  components: {
    CanvasSettingToolBar: CanvasSettingToolBar["default"],
    ConnectorRightClickMenuAndEditor: ConnectorRightClickMenuAndEditor["default"],
    IconToolTip: IconToolTip["default"]
  }
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas);
/* harmony default export */ var DiagramCanvasvue_type_script_lang_ts_ = (DiagramCanvasvue_type_script_lang_ts_DiagramCanvas);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=script&lang=ts&
 /* harmony default export */ var canvas_DiagramCanvasvue_type_script_lang_ts_ = (DiagramCanvasvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=style&index=0&id=52369355&scoped=true&lang=css&
var DiagramCanvasvue_type_style_index_0_id_52369355_scoped_true_lang_css_ = __webpack_require__(913);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  canvas_DiagramCanvasvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "52369355",
  null
  
)

/* harmony default export */ var canvas_DiagramCanvas = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBtnToggle/VBtnToggle.sass
var VBtnToggle = __webpack_require__(878);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(147);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/button-group/index.js
// Extensions

/* @vue/component */

/* harmony default export */ var button_group = (VItemGroup["a" /* BaseItemGroup */].extend({
  name: 'button-group',
  provide: function provide() {
    return {
      btnToggle: this
    };
  },
  computed: {
    classes: function classes() {
      return VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this);
    }
  },
  methods: {
    // Isn't being passed down through types
    genData: VItemGroup["a" /* BaseItemGroup */].options.methods.genData
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Styles
 // Mixins


 // Utilities


/* @vue/component */

/* harmony default export */ var VBtnToggle_VBtnToggle = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(button_group, colorable["a" /* default */]).extend({
  name: 'v-btn-toggle',
  props: {
    backgroundColor: String,
    borderless: Boolean,
    dense: Boolean,
    group: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    tile: Boolean
  },
  computed: {
    classes: function classes() {
      return _objectSpread(_objectSpread({}, button_group.options.computed.classes.call(this)), {}, {
        'v-btn-toggle': true,
        'v-btn-toggle--borderless': this.borderless,
        'v-btn-toggle--dense': this.dense,
        'v-btn-toggle--group': this.group,
        'v-btn-toggle--rounded': this.rounded,
        'v-btn-toggle--shaped': this.shaped,
        'v-btn-toggle--tile': this.tile
      }, this.themeClasses);
    }
  },
  methods: {
    genData: function genData() {
      var data = this.setTextColor(this.color, _objectSpread({}, button_group.options.methods.genData.call(this)));
      if (this.group) return data;
      return this.setBackgroundColor(this.backgroundColor, data);
    }
  }
}));

/***/ })

}]);