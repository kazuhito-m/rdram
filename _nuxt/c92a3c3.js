(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17,4,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,48,49,50,51,56,62,66,67,68,69,70,71,73,74,76,78,79,80,91,92,93,94,95,96,97,98,100,101],{

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

/***/ 819:
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
var nuxt_property_decorator_umd = __webpack_require__(79);

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
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(786);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(785);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(799);

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

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/CoreResourceEditDialog.vue?vue&type=template&id=0beb40eb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('PropertiesSettingDialog',{attrs:{"id":_vm.resource,"consent":_vm.consent,"title":_vm.title,"subTitle":_vm.subTitle,"iconKey":_vm.iconKey,"width":_vm.dialogWidth,"ignoreEscKey":_vm.ignoreEscKey,"ignoreEnterKey":_vm.ignoreEnterKey},on:{"onClose":_vm.onClose,"onClickOk":_vm.onClickUpdateExecute,"onShow":_vm.onShow},scopedSlots:_vm._u([{key:"inputPart",fn:function(){return [_c('v-container',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"名前","counter":"","autofocus":!_vm.notFocusSetName,"rules":[_vm.validateName],"maxlength":_vm.nameMaxLength},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1)],1),_vm._v(" "),_vm._t("customInputFields"),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-textarea',{attrs:{"counter":"","filled":"","label":"備考・メモ","rows":"2","no-resize":"","max":_vm.descriptionMaxLength,"rules":[_vm.validateDescription]},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1)],1)],2)]},proxy:true}],null,true)})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/CoreResourceEditDialog.vue?vue&type=template&id=0beb40eb&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/PropertiesSettingDialog.vue + 4 modules
var PropertiesSettingDialog = __webpack_require__(819);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts + 1 modules
var ResourceType = __webpack_require__(3);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/CoreResourceEditDialog.vue?vue&type=script&lang=ts&








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






var CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(CoreResourceEditDialog, _Vue);

  var _super = _createSuper(CoreResourceEditDialog);

  function CoreResourceEditDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CoreResourceEditDialog);

    _this = _super.apply(this, arguments);
    _this.title = "";
    _this.subTitle = "";
    _this.iconKey = "";
    _this.firstCheck = false;
    _this.name = "";
    _this.description = "";
    return _this;
  }

  Object(createClass["a" /* default */])(CoreResourceEditDialog, [{
    key: "onModifyResource",
    value: function onModifyResource(_resource) {}
  }, {
    key: "onJustPutOnDiagram",
    value: function onJustPutOnDiagram(_resource) {}
  }, {
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "showCustomProperties",
    value: function showCustomProperties(_resource) {}
  }, {
    key: "changeConsent",
    value: function changeConsent(_newConsent) {}
  }, {
    key: "onChangeResource",
    value: function onChangeResource() {
      if (!this.resource) return;
      this.onShow();
    }
  }, {
    key: "onShow",
    value: function onShow() {
      var _this2 = this;

      this.changeConsent(false);
      this.firstCheck = true;
      var type = this.resource.type;
      this.title = this.resource.isNotRegister() ? "".concat(type.name, " \u306E\u65B0\u898F\u4F5C\u6210") : "".concat(this.resource.name, " \u306E\u8A2D\u5B9A");
      this.subTitle = type.name;
      this.iconKey = type.iconKey;
      this.showProperties(this.resource);
      this.$nextTick(function () {
        _this2.showCustomProperties(_this2.resource);

        if (ResourceType["a" /* default */].始点終点.equals(_this2.resource.type)) _this2.description += " "; // TODO 特殊条件過ぎる。包括的にやりたい。
      });
    }
  }, {
    key: "showProperties",
    value: function showProperties(resource) {
      this.name = resource.name;
      this.description = resource.description;
    }
  }, {
    key: "changed",
    value: function changed() {
      var old = this.resource;
      return old.name !== this.name || old.description !== this.description;
    }
  }, {
    key: "nameMaxLength",
    get: function get() {
      return Resource["a" /* default */].NAME_MAX_LENGTH;
    }
  }, {
    key: "descriptionMaxLength",
    get: function get() {
      return Resource["a" /* default */].DESCRIPTION_MAX_LENGTH;
    }
  }, {
    key: "validateName",
    value: function validateName() {
      this.changeConsent(false);
      if (this.firstCheck) return !(this.firstCheck = false); // 初期未入力でエラーにならないように対策

      var name = this.name;
      if (name.length === 0) return "入力してください。";
      var max = this.nameMaxLength;
      if (name.length > max) return "".concat(max, "\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      this.changeConsent(this.changed());
      return true;
    }
  }, {
    key: "validateDescription",
    value: function validateDescription() {
      this.changeConsent(false);
      var description = this.description;
      var max = this.descriptionMaxLength;
      if (description.length > max) return "".concat(max, "\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      this.changeConsent(this.changed());
      return true;
    }
  }, {
    key: "onClickUpdateExecute",
    value: function onClickUpdateExecute() {
      if (!this.consent) return;
      var resource = this.resource.with(this.name, this.description);
      var typeName = resource.type.name;
      var sameResource = this.resources.getSameOf(resource);

      if (sameResource) {
        if (resource.isNotRegister()) {
          if (this.diagram.existsResourceOnPlacementOf(sameResource.resourceId)) {
            alert("\u65E2\u306B\u91CD\u8907\u3057\u305F\u540D\u524D\u306E".concat(typeName, "\u304C\u5728\u308A\u3001\u56F3\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u307E\u3059\u3002"));
            return;
          }

          var result = confirm("\u65E2\u306B\u91CD\u8907\u3057\u305F\u540D\u524D\u306E".concat(typeName, "\u304C\u5728\u308A\u307E\u3059\u3002\u65E2\u5B58\u306E").concat(typeName, "\u3092\u56F3\u306B\u914D\u7F6E\u3057\u307E\u3059\u304B\uFF1F"));
          if (!result) return;
          this.onJustPutOnDiagram(sameResource);
          this.onClose();
          return;
        }

        if (sameResource.resourceId !== resource.resourceId) {
          alert("\u65E2\u306B\u91CD\u8907\u3057\u305F\u540D\u524D\u306E".concat(typeName, "\u304C\u5728\u308A\u307E\u3059\u3002"));
          return;
        }
      }

      this.onModifyResource(resource);
      this.onClose();
    }
  }]);

  return CoreResourceEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "resource", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "resources", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "diagram", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "consent", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "notFocusSetName", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "ignoreEscKey", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "ignoreEnterKey", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "dialogWidth", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "onModifyResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onJustPutOnDiagram")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "onJustPutOnDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "onClose", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("showCustomProperties")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "showCustomProperties", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("changeConsent")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "changeConsent", null);

__decorate([Object(nuxt_property_decorator_umd["Watch"])("resource")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "onChangeResource", null);

CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    PropertiesSettingDialog: PropertiesSettingDialog["default"]
  }
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog);
/* harmony default export */ var CoreResourceEditDialogvue_type_script_lang_ts_ = (CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog);
// CONCATENATED MODULE: ./src/components/resource/CoreResourceEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_CoreResourceEditDialogvue_type_script_lang_ts_ = (CoreResourceEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(800);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(801);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(803);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(804);

// CONCATENATED MODULE: ./src/components/resource/CoreResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_CoreResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "0beb40eb",
  null
  
)

/* harmony default export */ var resource_CoreResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {PropertiesSettingDialog: __webpack_require__(819).default})


/* vuetify-loader */






installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopLeftLocator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(815);
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

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropValue; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
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

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoomValueOnDraw2d; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(848);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
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

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericConnectPortsEvents; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(851);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _domain_relation_Relation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(340);















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var GenericConnectPortsEvents = /*#__PURE__*/function () {
  function GenericConnectPortsEvents() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, GenericConnectPortsEvents);

    this.eventGists = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(GenericConnectPortsEvents, [{
    key: "eventType",
    value: function eventType() {
      return "Connect Ports";
    }
  }, {
    key: "prototype",
    value: function prototype() {
      return new GenericConnectPortsEvents();
    }
  }, {
    key: "validate",
    value: function validate(diagram, product, view) {
      var _a, _b;

      var _iterator = _createForOfIteratorHelper(this.eventGists),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var eventGist = _step.value;
          var srcResourceId = parseInt((_a = eventGist.source) === null || _a === void 0 ? void 0 : _a.getParent().id, 10);
          var distResourceId = parseInt((_b = eventGist.target) === null || _b === void 0 ? void 0 : _b.getParent().id, 10);
          if (!srcResourceId || !distResourceId) continue;
          var relation = _domain_relation_Relation__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].prototypeOf("", srcResourceId, distResourceId);

          if (!this.validateRelationBetweenResource(relation, diagram, product, view)) {
            eventGist.rootCommand.undo();
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }, {
    key: "validateRelationBetweenResource",
    value: function validateRelationBetweenResource(relation, diagram, product, view) {
      var message = product.relationable(relation, diagram.id);
      if (message.length === 0) return true;
      view.showWarnBar(message);
      return false;
    }
  }, {
    key: "apply",
    value: function apply(diagram, product, view) {
      var _a, _b;

      var modifiedDiagram = diagram;

      var _iterator2 = _createForOfIteratorHelper(this.eventGists),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var eventGist = _step2.value;
          var srcResourceId = this.searchPortId((_a = eventGist.source) === null || _a === void 0 ? void 0 : _a.getParent());
          var distResourceId = this.searchPortId((_b = eventGist.target) === null || _b === void 0 ? void 0 : _b.getParent());
          if (!srcResourceId || !distResourceId) continue;
          var connection = eventGist.connection;
          connection.onContextMenu = view.onClickConnectorOnCanvas;
          var original = _domain_relation_Relation__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].prototypeOf(connection.id, srcResourceId, distResourceId);
          var relation = this.customizeRelation(original, product);
          modifiedDiagram = modifiedDiagram.addRelation(relation);
          view.decorateConnection(connection, relation);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return modifiedDiagram;
    }
  }, {
    key: "customizeRelation",
    value: function customizeRelation(original, _product) {
      return original;
    }
  }, {
    key: "searchPortId",
    value: function searchPortId(target) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!target) return undefined;
      if (this.isNumeric(target.getId())) return parseInt(target.getId(), 10);
      if (depth > 1) return undefined; // 一つ上の親Figureまでidを追う。

      return this.searchPortId(target.getParent(), depth + 1);
    }
  }, {
    key: "isNumeric",
    value: function isNumeric(value) {
      return Number.isInteger(value) && !isNaN(value) && value !== Infinity;
    }
  }]);

  return GenericConnectPortsEvents;
}();



/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventAnalyzer; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(293);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _AnalyzeResutEvents__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(899);












function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var EventAnalyzer = /*#__PURE__*/function () {
  function EventAnalyzer(eventsOfTypeTemplates) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this, EventAnalyzer);

    this.eventsOfTypeTemplates = eventsOfTypeTemplates;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(EventAnalyzer, [{
    key: "analyze",
    value: function analyze(targetCommand) {
      console.log('---- analyzeEvents start ----');
      var eventGists = this.analyzeEventGists(targetCommand);
      eventGists.forEach(function (i) {
        return console.log(i);
      });
      console.log('---- analyzeEvents end ----');
      if (eventGists.length === 0) return _AnalyzeResutEvents__WEBPACK_IMPORTED_MODULE_15__["default"].nothing();
      var eventsOfTypeMap = {};

      var _iterator = _createForOfIteratorHelper(this.eventsOfTypeTemplates),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var template = _step.value;
          eventsOfTypeMap[template.eventType()] = template.prototype();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      eventGists.filter(function (eventGist) {
        return eventsOfTypeMap[eventGist.eventType];
      }).forEach(function (eventGist) {
        return eventsOfTypeMap[eventGist.eventType].eventGists.push(eventGist);
      });
      var result = Object.values(eventsOfTypeMap).filter(function (eventsOfType) {
        return eventsOfType.eventGists.length > 0;
      });
      return new _AnalyzeResutEvents__WEBPACK_IMPORTED_MODULE_15__["default"](result);
    }
  }, {
    key: "analyzeEventGists",
    value: function analyzeEventGists(targetCommand) {
      return this.recursiveAnalyzeEvent(targetCommand, targetCommand);
    }
  }, {
    key: "recursiveAnalyzeEvent",
    value: function recursiveAnalyzeEvent(targetCommand, rootCommand) {
      var eventGist = {
        eventType: targetCommand.getLabel(),
        figure: targetCommand.figure,
        source: targetCommand.source,
        target: targetCommand.target,
        connection: targetCommand.connection,
        rootCommand: rootCommand
      };
      var results = [eventGist];
      if (!targetCommand || !targetCommand.commands) return results;

      var _iterator2 = _createForOfIteratorHelper(targetCommand.commands.data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var subCommand = _step2.value;
          var nestedEventGists = this.recursiveAnalyzeEvent(subCommand, rootCommand);

          var _iterator3 = _createForOfIteratorHelper(nestedEventGists),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var nested = _step3.value;
              results.push(nested);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return results;
    }
  }]);

  return EventAnalyzer;
}();



/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericDeleteShapeEvents; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FigureAnalyzer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(900);








var GenericDeleteShapeEvents = /*#__PURE__*/function () {
  function GenericDeleteShapeEvents() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenericDeleteShapeEvents);

    this.eventGists = [];
    this.figureAnalyzer = new _FigureAnalyzer__WEBPACK_IMPORTED_MODULE_6__["default"]();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GenericDeleteShapeEvents, [{
    key: "eventType",
    value: function eventType() {
      return "Delete Shape";
    }
  }, {
    key: "prototype",
    value: function prototype() {
      return new GenericDeleteShapeEvents();
    }
  }, {
    key: "validate",
    value: function validate(diagram, _product, view) {
      // TODO なんども連打される問題について
      // ひょっとして「Rootじゃなく、子イベントを叩いてる」からかな？
      var resourceIds = this.figureAnalyzer.analyzeResourceIds(this.validTargetFigures());
      if (view.confirmResourceDelete(resourceIds, diagram)) return true;
      var rootCommand = this.eventGists[0].rootCommand;
      rootCommand.undo();
      return false;
    }
  }, {
    key: "apply",
    value: function apply(diagram, _product, _view) {
      // 対象のFigure
      var validTargetFigures = this.validTargetFigures(); // Iconと線に分ける

      var resourceIds = this.figureAnalyzer.analyzeResourceIds(validTargetFigures);
      var relationIds = this.figureAnalyzer.analizeRelationIds(validTargetFigures);
      console.log("\u6D88\u3059\u4F4D\u7F6E:".concat(resourceIds.join()));
      console.log("\u6D88\u3059\u7DDA:".concat(relationIds.join()));
      return diagram.removeResourcesOf(resourceIds).removeRelationsOf(relationIds);
    }
  }, {
    key: "validTargetFigures",
    value: function validTargetFigures() {
      return this.eventGists.map(function (eventGist) {
        return eventGist.figure;
      }).filter(function (figure) {
        return typeof figure !== 'undefined';
      }).map(function (figure) {
        return figure;
      });
    }
  }]);

  return GenericDeleteShapeEvents;
}();



/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericMoveShapeEvents; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var GenericMoveShapeEvents = /*#__PURE__*/function () {
  function GenericMoveShapeEvents() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this, GenericMoveShapeEvents);

    this.eventGists = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(GenericMoveShapeEvents, [{
    key: "eventType",
    value: function eventType() {
      return "Move Shape";
    }
  }, {
    key: "prototype",
    value: function prototype() {
      return new GenericMoveShapeEvents();
    }
  }, {
    key: "validate",
    value: function validate(_diagram, _product, _view) {
      return this.validTargetFigures().length > 0;
    }
  }, {
    key: "apply",
    value: function apply(diagram, _product, _view) {
      var modifiedDiagram = diagram;

      var _iterator = _createForOfIteratorHelper(this.validTargetFigures()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var figure = _step.value;
          var resouceId = parseInt(figure.getId(), 10);
          var placement = diagram.placementOf(resouceId);
          if (!placement) continue;
          var replaced = placement.move(figure.getX(), figure.getY());
          modifiedDiagram = modifiedDiagram.modifyPlacementOf(replaced);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return modifiedDiagram;
    }
  }, {
    key: "validTargetFigures",
    value: function validTargetFigures() {
      return this.eventGists.map(function (eventGist) {
        return eventGist.figure;
      }).filter(function (figure) {
        return typeof figure !== 'undefined';
      }).map(function (figure) {
        return figure;
      });
    }
  }]);

  return GenericMoveShapeEvents;
}();



/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericResizeShapeEvents; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var GenericResizeShapeEvents = /*#__PURE__*/function () {
  function GenericResizeShapeEvents() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this, GenericResizeShapeEvents);

    this.eventGists = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(GenericResizeShapeEvents, [{
    key: "eventType",
    value: function eventType() {
      return "Resize Shape";
    }
  }, {
    key: "prototype",
    value: function prototype() {
      return new GenericResizeShapeEvents();
    }
  }, {
    key: "validate",
    value: function validate(_diagram, _product, _view) {
      return true;
    }
  }, {
    key: "apply",
    value: function apply(diagram, _product, _view) {
      var modifiedDiagram = diagram;

      var _iterator = _createForOfIteratorHelper(this.validTargetFigures()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var figure = _step.value;
          var resourceId = parseInt(figure.getId(), 10);
          var placement = diagram.placementOf(resourceId);
          if (!placement) continue;
          var resized = placement.resize(figure.getWidth(), figure.getHeight());
          modifiedDiagram = modifiedDiagram.modifyPlacementOf(resized);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return modifiedDiagram;
    }
  }, {
    key: "validTargetFigures",
    value: function validTargetFigures() {
      return this.eventGists.map(function (eventGist) {
        return eventGist.figure;
      }).filter(function (figure) {
        return typeof figure !== 'undefined';
      }).map(function (figure) {
        return figure;
      });
    }
  }]);

  return GenericResizeShapeEvents;
}();



/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/DiagramEditor.vue?vue&type=template&id=29ce38b9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"diagram-pane-container"},[_c('ResourceEditDialog',{ref:"resourceEditDialog",attrs:{"diagramId":_vm.diagramId},on:{"onUpdatedResource":_vm.onUpdatedResource}}),_vm._v(" "),_c('ResourceRightClickMenu',{ref:"resourceRightClickMenu",on:{"onEditResource":_vm.onEditResource,"onOpenDiagramOfResourceRelate":_vm.onOpenDiagramOfResourceRelate,"onDeleteResourceOnDiagram":_vm.onDeleteResourceOnDiagram,"onDeleteResourceOnProduct":_vm.onDeleteResourceOnProduct}}),_vm._v(" "),_c('TwoPaneWithSlideBarLayout',{attrs:{"adsorptionRightWhenDoubleClick":"true","defaultLeftPaneWidth":"80%"},scopedSlots:_vm._u([{key:"leftPane",fn:function(){return [_c('DiagramCanvas',{ref:"diagramCanvas",attrs:{"diagramId":_vm.diagramId,"product":_vm.product,"usedResouceIds":_vm.usedResouceIds,"allResources":_vm.allResources,"lastPropertiesUpdatedDiagramId":_vm.lastPropertiesUpdatedDiagramId,"iconMap":_vm.iconMap,"eventAnalyzer":_vm.eventAnalyzer,"iconGenerators":_vm.iconGenerators},on:{"onUpdateResources":_vm.onUpdateResources,"onMergePlacement":_vm.onMergePlacement,"onOpendDiagramPropertiesEditor":_vm.onOpendDiagramPropertiesEditor,"onShowWarnBar":_vm.onShowWarnBar,"onEditResource":_vm.onEditResource,"onShowResourceMenu":_vm.onShowResourceMenu,"onOpenResourceEditorWhenCreate":_vm.onOpenResourceEditorWhenCreate,"onShowConnectorMenu":_vm.onShowConnectorMenu}})]},proxy:true},{key:"rightPane",fn:function(){return [_c('ResourceParet',{attrs:{"diagramId":_vm.diagramId,"allResources":_vm.allResources,"usedResouceIds":_vm.usedResouceIds,"product":_vm.product},on:{"onShowResourceMenu":_vm.onShowResourceMenu}})]},proxy:true}])}),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":"2000"},scopedSlots:_vm._u([{key:"action",fn:function(ref){
var attrs = ref.attrs;
return [_c('v-btn',_vm._b({attrs:{"color":"blue","text":""},on:{"click":function($event){_vm.warnBar = false}}},'v-btn',attrs,false),[_vm._v("Close")])]}}]),model:{value:(_vm.warnBar),callback:function ($$v) {_vm.warnBar=$$v},expression:"warnBar"}},[_vm._v("\n    "+_vm._s(_vm.warnMessage)+"\n    ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue?vue&type=template&id=29ce38b9&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(29);

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

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(578);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__(579);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__(580);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__(581);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__(582);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__(583);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__(584);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__(585);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__(586);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__(587);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__(588);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__(589);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__(590);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__(591);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__(592);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__(593);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__(594);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/ResourceRightClickMenu.vue + 4 modules
var ResourceRightClickMenu = __webpack_require__(903);

// EXTERNAL MODULE: ./src/components/twopane/TwoPaneWithSlideBarLayout.vue + 5 modules
var TwoPaneWithSlideBarLayout = __webpack_require__(898);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue + 5 modules
var DiagramCanvas = __webpack_require__(902);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue + 8 modules
var ResourceParet = __webpack_require__(901);

// EXTERNAL MODULE: ./src/components/resource/ResourceEditDialog.vue + 4 modules
var ResourceEditDialog = __webpack_require__(846);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/DiagramEditor.vue?vue&type=script&lang=ts&










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








var DiagramEditorvue_type_script_lang_ts_DiagramEditor = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(DiagramEditor, _Vue);

  var _super = _createSuper(DiagramEditor);

  function DiagramEditor() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DiagramEditor);

    // Props
    _this = _super.apply(this, arguments);
    _this.usedResouceIds = [];
    _this.iconMap = {};
    _this.warnBar = false;
    _this.warnMessage = "";
    return _this;
  } // Emits


  Object(createClass["a" /* default */])(DiagramEditor, [{
    key: "onUpdateResources",
    value: function onUpdateResources() {}
  }, {
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(_diagramId) {}
  }, {
    key: "onOpenDiagramOfResourceRelate",
    value: function onOpenDiagramOfResourceRelate(_resourceId) {}
  }, {
    key: "onRenamedResource",
    value: function onRenamedResource(_src, _dest) {} // Vue events(life cycle events)

  }, {
    key: "created",
    value: function created() {
      this.product = this.getCurrentProduct();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.intializeIconCharMap(this.diagram());
    } // children component events.

  }, {
    key: "onEditResource",
    value: function () {
      var _onEditResource = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resourceId) {
        var resource, srcResource;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resourceEditDialog().showForModifyOf(resourceId);

              case 2:
                resource = _context.sent;

                if (!resource.isEmpty()) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                srcResource = this.reflectResourcesOnViewModel(resource);

                if (srcResource) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                this.onRenamedResource(srcResource, resource);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onEditResource(_x) {
        return _onEditResource.apply(this, arguments);
      }

      return onEditResource;
    }()
  }, {
    key: "onDeleteResourceOnDiagram",
    value: function onDeleteResourceOnDiagram(resourceId) {
      var diagram = this.deleteResourceOnDiagram(resourceId);
      if (!diagram) return;
      this.onMergePlacement(diagram.placements);
    }
  }, {
    key: "onDeleteResourceOnProduct",
    value: function onDeleteResourceOnProduct(resourceId) {
      this.deleteResourceOnProduct(resourceId);
      this.onUpdateResources();
    }
  }, {
    key: "onMergePlacement",
    value: function onMergePlacement(diffTarget) {
      var usedResouceIds = this.usedResouceIds;
      var idSet = new Set(diffTarget.map(function (p) {
        return p.resourceId;
      }));

      for (var i = usedResouceIds.length - 1; i >= 0; i--) {
        var usedResouceId = usedResouceIds[i];
        if (idSet.has(usedResouceId)) idSet.delete(usedResouceId);else usedResouceIds.splice(i, 1);
      }

      idSet.forEach(function (id) {
        return usedResouceIds.push(id);
      });
    }
  }, {
    key: "onShowResourceMenu",
    value: function onShowResourceMenu(resource, x, y) {
      var diagramCanvas = this.$refs.diagramCanvas;
      diagramCanvas.visibleConnectorMenu = false;
      var resourceMenu = this.$refs.resourceRightClickMenu;
      resourceMenu.show(resource, this.diagram(), x, y); // TODO 右クリックメニューを表示する度にローカルストレージを呼ぶのをやめたい
    }
  }, {
    key: "onShowConnectorMenu",
    value: function onShowConnectorMenu() {
      var resourceMenu = this.$refs.resourceRightClickMenu;
      resourceMenu.close();
    }
  }, {
    key: "onOpenResourceEditorWhenCreate",
    value: function () {
      var _onOpenResourceEditorWhenCreate = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resourceType) {
        var resource;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resourceEditDialog().showForCreateNew(resourceType);

              case 2:
                resource = _context2.sent;

                if (!resource.isEmpty()) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                this.onUpdatedResource(resource);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onOpenResourceEditorWhenCreate(_x2) {
        return _onOpenResourceEditorWhenCreate.apply(this, arguments);
      }

      return onOpenResourceEditorWhenCreate;
    }()
  }, {
    key: "onUpdatedResource",
    value: function onUpdatedResource(resource) {
      var diagramCanvas = this.$refs.diagramCanvas;
      diagramCanvas.addPlacement(resource);
      this.onUpdateResources();
    }
  }, {
    key: "onShowWarnBar",
    value: function onShowWarnBar(text) {
      this.warnMessage = text;
      this.warnBar = true;
    } // private methods.

  }, {
    key: "getCurrentProduct",
    value: function getCurrentProduct() {
      return this.repository.getCurrentProduct();
    }
  }, {
    key: "diagram",
    value: function diagram() {
      var product = this.getCurrentProduct();
      return product.diagrams.of(this.diagramId);
    }
  }, {
    key: "resourceEditDialog",
    value: function resourceEditDialog() {
      return this.$refs.resourceEditDialog;
    }
  }, {
    key: "deleteResourceOnDiagram",
    value: function deleteResourceOnDiagram(resourceId) {
      var product = this.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      var resource = product.resources.of(resourceId);
      if (!resource) return null;
      if (!this.confirmResourceDelete([resourceId], diagram)) return null;
      var modifiedDiagram = diagram.removeResouceOf(resource);
      var diagrams = product.diagrams.mergeByIdOf(modifiedDiagram);
      var modifiedProduct = product.withDiagrams(diagrams);
      this.repository.registerCurrentProduct(modifiedProduct);
      this.product = modifiedProduct;
      return modifiedDiagram;
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
    key: "deleteResourceOnProduct",
    value: function deleteResourceOnProduct(resourceId) {
      var product = this.getCurrentProduct();
      var resource = product.resources.of(resourceId);
      var thisDiagram = product.diagrams.of(this.diagramId);
      if (!resource) return;
      var usings = product.diagrams.using(resource);

      if (usings.length > 0) {
        var diagramInfo = "".concat(usings.length, "\u500B\u306E\u56F3");

        if (usings.length === 1) {
          var diagram = usings.last();
          diagramInfo = diagram.id === (thisDiagram === null || thisDiagram === void 0 ? void 0 : thisDiagram.id) ? "この図のみ" : "\u300C".concat(diagram.name, "(").concat(diagram.type.name, ")\u300D");
        }

        var message = "\u300C".concat(resource.name, "\u300D\u306F\u73FE\u5728\u3001").concat(diagramInfo, "\u3067\u53C2\u7167\u3055\u308C\u3066\u3044\u307E\u3059\u3002\n") + "削除する場合、図のアイコンや関連のすべては削除されます。\n" + "".concat(resource.name, " \u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\u3002");
        if (!window.confirm(message)) return;
      }

      var modifiedProduct = product.removeOf(resource);
      this.repository.registerCurrentProduct(modifiedProduct);
      this.product = modifiedProduct;
    }
  }, {
    key: "intializeIconCharMap",
    value: function intializeIconCharMap(diagram) {
      var _this2 = this;

      diagram.availableResourceTypes().map(function (resourceType) {
        return resourceType.iconKey;
      }).forEach(function (i) {
        return _this2.iconMap[i] = _this2.analyzeMdiIconCharOf(i);
      });
    }
  }, {
    key: "analyzeMdiIconCharOf",
    value: function analyzeMdiIconCharOf(iconKey) {
      var e = document.getElementById(iconKey);
      var style = window.getComputedStyle(e, "::before");
      var content = style.content;
      return {
        fontFamily: style.fontFamily,
        charactor: content.replace(/"/g, "")
      };
    }
  }, {
    key: "reflectResourcesOnViewModel",
    value: function reflectResourcesOnViewModel(resource) {
      var resources = this.allResources;
      var i = resources.findIndex(function (r) {
        return r.resourceId === resource.resourceId;
      });
      if (i < 0) return null;
      var beforeResoruce = resources[i];
      resources.splice(i, 1);
      resources.push(resource);
      return beforeResoruce;
    }
  }, {
    key: "dumpDiagram",
    value: function dumpDiagram(diagram, prefix) {
      console.log("---- ".concat(prefix, " Diagram\u60C5\u5831 start ----"));
      diagram.placements.forEach(function (i) {
        return console.log("\u4F4D\u7F6E;".concat(i.resourceId));
      });
      diagram.allRelations().forEach(function (i) {
        return console.log("\u7DDA;".concat(i.id, ", from:").concat(i.fromResourceId, ", to:").concat(i.toResourceId));
      });
      console.log("---- ".concat(prefix, " Diagram\u60C5\u5831 end ----"));
    }
  }]);

  return DiagramEditor;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "diagramId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "allResources", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "lastPropertiesUpdatedDiagramId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "eventAnalyzer", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "iconGenerators", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onUpdateResources")], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "onUpdateResources", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onOpendDiagramPropertiesEditor")], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "onOpendDiagramPropertiesEditor", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onOpenDiagramOfResourceRelate")], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "onOpenDiagramOfResourceRelate", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onRenamedResource")], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "onRenamedResource", null);

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "repository", void 0);

DiagramEditorvue_type_script_lang_ts_DiagramEditor = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    TwoPaneWithSlideBarLayout: TwoPaneWithSlideBarLayout["default"],
    DiagramCanvas: DiagramCanvas["default"],
    ResourceParet: ResourceParet["default"],
    ResourceEditDialog: ResourceEditDialog["default"],
    ResourceRightClickMenu: ResourceRightClickMenu["default"]
  }
})], DiagramEditorvue_type_script_lang_ts_DiagramEditor);
/* harmony default export */ var DiagramEditorvue_type_script_lang_ts_ = (DiagramEditorvue_type_script_lang_ts_DiagramEditor);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue?vue&type=script&lang=ts&
 /* harmony default export */ var template_DiagramEditorvue_type_script_lang_ts_ = (DiagramEditorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue?vue&type=style&index=0&id=29ce38b9&scoped=true&lang=css&
var DiagramEditorvue_type_style_index_0_id_29ce38b9_scoped_true_lang_css_ = __webpack_require__(904);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(786);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSnackbar/VSnackbar.sass
var VSnackbar = __webpack_require__(906);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var util_console = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js




// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ var VSnackbar_VSnackbar = (Object(mixins["a" /* default */])(VSheet["a" /* default */], colorable["a" /* default */], toggleable["a" /* default */], Object(positionable["b" /* factory */])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: function validator(v) {
        return typeof v === 'string' || v === false;
      }
    },
    vertical: Boolean
  },
  data: function data() {
    return {
      activeTimeout: -1
    };
  },
  computed: {
    classes: function classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },
    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground: function hasBackground() {
      return !this.text && !this.outlined;
    },
    // Snackbar is dark by default
    // override themeable logic.
    isDark: function isDark() {
      return this.hasBackground ? !this.light : themeable["a" /* default */].options.computed.isDark.call(this);
    },
    styles: function styles() {
      if (this.absolute || !this.app) return {};
      var _this$$vuetify$applic = this.$vuetify.application,
          bar = _this$$vuetify$applic.bar,
          bottom = _this$$vuetify$applic.bottom,
          footer = _this$$vuetify$applic.footer,
          insetFooter = _this$$vuetify$applic.insetFooter,
          left = _this$$vuetify$applic.left,
          right = _this$$vuetify$applic.right,
          top = _this$$vuetify$applic.top;
      return {
        paddingBottom: Object(helpers["h" /* convertToUnit */])(bottom + footer + insetFooter),
        paddingLeft: Object(helpers["h" /* convertToUnit */])(left),
        paddingRight: Object(helpers["h" /* convertToUnit */])(right),
        paddingTop: Object(helpers["h" /* convertToUnit */])(bar + top)
      };
    }
  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },
  mounted: function mounted() {
    if (this.isActive) this.setTimeout();
  },
  created: function created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(util_console["e" /* removed */])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(util_console["d" /* deprecate */])('timeout="0"', '-1', this);
    }
  },
  methods: {
    genActions: function genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(helpers["q" /* getSlot */])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },
    genContent: function genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: Object(defineProperty["a" /* default */])({}, this.contentClass, true),
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(helpers["q" /* getSlot */])(this)]);
    },
    genWrapper: function genWrapper() {
      var _this = this;

      var setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      var data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: VSheet["a" /* default */].options.computed.classes.call(this),
        style: VSheet["a" /* default */].options.computed.styles.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          pointerenter: function pointerenter() {
            return window.clearTimeout(_this.activeTimeout);
          },
          pointerleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },
    genTransition: function genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },
    setTimeout: function setTimeout() {
      var _this2 = this;

      window.clearTimeout(this.activeTimeout);
      var timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(function () {
        _this2.isActive = false;
      }, timeout);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }
}));
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template_DiagramEditorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "29ce38b9",
  null
  
)

/* harmony default export */ var template_DiagramEditor = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {ResourceEditDialog: __webpack_require__(846).default})


/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VSnackbar: VSnackbar_VSnackbar})


/***/ }),

/***/ 832:
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

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var parseInt = __webpack_require__(850);

// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es-x/no-number-parseint -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {
  parseInt: parseInt
});


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(856);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("47f37972", content, true, {"sourceMap":false});

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draw2dCanvasGuideType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(815);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);







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

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(865);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("4d49831c", content, true, {"sourceMap":false});

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(869);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("6e920e92", content, true, {"sourceMap":false});

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(871);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("3eefd6a8", content, true, {"sourceMap":false});

/***/ }),

/***/ 839:
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
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(832);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(833);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var _presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(822);












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

/***/ 840:
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
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(832);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(833);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(822);












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

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericTextEllipseIconGenerator; });
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




/**
 * 「楕円のテキスト＋左上アイコン」ジェネレータ。
 */

var GenericTextEllipseIconGenerator = /*#__PURE__*/function (_IconGenerator) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(GenericTextEllipseIconGenerator, _IconGenerator);

  var _super = _createSuper(GenericTextEllipseIconGenerator);

  function GenericTextEllipseIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, GenericTextEllipseIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(GenericTextEllipseIconGenerator, [{
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var id = String(placement.resourceId);
      var oval = new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.shape.basic.Oval({
        x: placement.x,
        y: placement.y,
        color: "#000000",
        bgColor: "#FFFFFF",
        alpha: 1,
        width: placement.width,
        height: placement.height,
        radius: 0,
        stroke: 0,
        selectable: true,
        resizable: true,
        padding: 0,
        minWidth: 20,
        minHeight: 20,
        id: id
      });
      var moji = new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.shape.basic.Label({
        text: resource.name,
        stroke: 0,
        padding: 0,
        alpha: 1,
        bold: true
      });
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 25,
        stroke: 0,
        padding: 0,
        bgColor: "none",
        alpha: 1
      });
      oval.add(moji, new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.layout.locator.CenterLocator());
      oval.add(icon, new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.layout.locator.XYAbsPortLocator({
        x: -14,
        y: -17
      }));
      this.makeSingleHybridPort(oval);
      oval.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_10__["default"]());
      return oval;
    }
  }]);

  return GenericTextEllipseIconGenerator;
}(_components_diagrams_icon_IconGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(889);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("7bb655a6", content, true, {"sourceMap":false});

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentRect = function (target) {
    if ('getBBox' in target) {
        var box = target.getBBox();
        return Object.freeze({
            height: box.height,
            left: 0,
            top: 0,
            width: box.width,
        });
    }
    else { // if (target instanceof HTMLElement) { // also includes all other non-SVGGraphicsElements
        var styles = window.getComputedStyle(target);
        return Object.freeze({
            height: parseFloat(styles.height || '0'),
            left: parseFloat(styles.paddingLeft || '0'),
            top: parseFloat(styles.paddingTop || '0'),
            width: parseFloat(styles.width || '0'),
        });
    }
};
exports.ContentRect = ContentRect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFJlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ29udGVudFJlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxJQUFNLFdBQVcsR0FBRyxVQUFDLE1BQWU7SUFDaEMsSUFBSSxTQUFTLElBQUssTUFBNkIsRUFBRTtRQUM3QyxJQUFNLEdBQUcsR0FBSSxNQUE2QixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztTQUNuQixDQUFDLENBQUM7S0FDTjtTQUFNLEVBQUUsMEZBQTBGO1FBQy9GLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUN4QyxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO1lBQzNDLEdBQUcsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDekMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztTQUN6QyxDQUFDLENBQUM7S0FDTjtBQUNMLENBQUMsQ0FBQztBQUVPLGtDQUFXIn0=

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(893);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("49cd7422", content, true, {"sourceMap":false});

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(895);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("3950c51e", content, true, {"sourceMap":false});

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/ResourceEditDialog.vue?vue&type=template&id=58af2ffc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('StandardResourceEditDialog',{attrs:{"resource":_vm.targetStandaerdResource,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose}}),_vm._v(" "),_c('HasContentResourceEditDialog',{attrs:{"resource":_vm.targetHasContentResource,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose}}),_vm._v(" "),_c('VariationEditDialog',{attrs:{"resource":_vm.targetVariation,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose}}),_vm._v(" "),_c('ConditionEditDialog',{attrs:{"resource":_vm.targetCondition,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose}}),_vm._v(" "),_c('TableTypeConditionEditDialog',{attrs:{"resource":_vm.targetTableTypeCondition,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/ResourceEditDialog.vue?vue&type=template&id=58af2ffc&scoped=true&

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
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/resource/StandardResourceEditDialog.vue + 4 modules
var StandardResourceEditDialog = __webpack_require__(883);

// EXTERNAL MODULE: ./src/components/resource/HasContentResourceEditDialog.vue + 4 modules
var HasContentResourceEditDialog = __webpack_require__(884);

// EXTERNAL MODULE: ./src/components/resource/VariationEditDialog.vue + 4 modules
var VariationEditDialog = __webpack_require__(885);

// EXTERNAL MODULE: ./src/components/resource/ConditionEditDialog.vue + 4 modules
var ConditionEditDialog = __webpack_require__(886);

// EXTERNAL MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue + 4 modules
var TableTypeConditionEditDialog = __webpack_require__(887);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(87);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(106);

// EXTERNAL MODULE: ./src/domain/resource/HasContentResource.ts
var HasContentResource = __webpack_require__(112);

// EXTERNAL MODULE: ./src/domain/resource/Variation.ts
var Variation = __webpack_require__(167);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(166);

// EXTERNAL MODULE: ./src/domain/resource/TableTypeCondition.ts
var TableTypeCondition = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/ResourceEditDialog.vue?vue&type=script&lang=ts&







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














var ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(ResourceEditDialog, _Vue);

  var _super = _createSuper(ResourceEditDialog);

  function ResourceEditDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ResourceEditDialog);

    _this = _super.apply(this, arguments);
    _this.latestResources = Resources["a" /* default */].prototypeOf();
    _this.targetStandaerdResource = null;
    _this.targetHasContentResource = null;
    _this.targetVariation = null;
    _this.targetCondition = null;
    _this.targetTableTypeCondition = null;
    _this.targetDiagram = null;
    _this.resolve = null;
    return _this;
  }

  Object(createClass["a" /* default */])(ResourceEditDialog, [{
    key: "onUpdatedResource",
    value: function onUpdatedResource(_resource, _addNew) {}
  }, {
    key: "showForModifyOf",
    value: function showForModifyOf(resourceId) {
      return this.show(function (resources) {
        return resources.of(resourceId);
      });
    }
  }, {
    key: "showForCreateNew",
    value: function showForCreateNew(resourceType) {
      return this.show(function (resources) {
        return resources.prototypeResourceOf(resourceType);
      });
    }
  }, {
    key: "show",
    value: function show(findResourceFunc) {
      var _this2 = this;

      var target = this.initializeOf(findResourceFunc);
      if (!target) return new Promise(function (resolve) {
        return resolve(Resource["a" /* default */].empty());
      });
      this.visibleByType(target);
      return new Promise(function (resolve) {
        return _this2.resolve = resolve;
      });
    }
  }, {
    key: "initializeOf",
    value: function initializeOf(findResourceFunc) {
      var _a;

      var product = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.getCurrentProduct();
      if (!product) return null;
      var resources = product.resources;
      if (!resources) return null;
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return null;
      var target = findResourceFunc(resources);
      if (!target) return null;
      this.latestResources = resources;
      this.targetDiagram = diagram;
      return target;
    } // リソース別エディタ切り替え判定

  }, {
    key: "visibleByType",
    value: function visibleByType(target) {
      if (target instanceof Variation["a" /* default */]) {
        this.targetVariation = target;
        return;
      }

      if (target instanceof Condition["a" /* default */]) {
        this.targetCondition = target;
        return;
      }

      if (target instanceof TableTypeCondition["a" /* default */]) {
        this.targetTableTypeCondition = target;
        return;
      }

      if (target instanceof HasContentResource["a" /* default */]) {
        this.targetHasContentResource = target;
        return;
      }

      if (target) {
        this.targetStandaerdResource = target;
        return;
      }

      this.targetStandaerdResource = null;
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.targetStandaerdResource = null;
      this.targetHasContentResource = null;
      this.targetVariation = null;
      this.targetCondition = null;
      this.targetTableTypeCondition = null;
    }
  }, {
    key: "onModifyResource",
    value: function onModifyResource(resource) {
      var _a, _b;

      var product = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.getCurrentProduct();
      if (!product) return;
      var addNew = !product.resources.existsIdOf(resource.resourceId);
      var newResource = resource;

      if (addNew) {
        newResource = newResource.renewId(product.resourceIdSequence);
        product = product.moveNextResourceIdSequence();
      }

      var addedResources = product.resources.mergeByIdOf(newResource);
      product = product.withResources(addedResources);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.registerCurrentProduct(product);
      this.resolve(newResource);
    }
  }, {
    key: "onJustPutOnDiagram",
    value: function onJustPutOnDiagram(resource) {
      this.onUpdatedResource(resource, false);
    }
  }]);

  return ResourceEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "repository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "diagramId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onUpdatedResource')], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "onUpdatedResource", null);

ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    StandardResourceEditDialog: StandardResourceEditDialog["default"],
    HasContentResourceEditDialog: HasContentResourceEditDialog["default"],
    VariationEditDialog: VariationEditDialog["default"],
    ConditionEditDialog: ConditionEditDialog["default"],
    TableTypeConditionEditDialog: TableTypeConditionEditDialog["default"]
  }
})], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog);
/* harmony default export */ var ResourceEditDialogvue_type_script_lang_ts_ = (ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog);
// CONCATENATED MODULE: ./src/components/resource/ResourceEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_ResourceEditDialogvue_type_script_lang_ts_ = (ResourceEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// CONCATENATED MODULE: ./src/components/resource/ResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_ResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "58af2ffc",
  null
  
)

/* harmony default export */ var resource_ResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(905);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("2bc47ca7", content, true, {"sourceMap":false});

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var numberIsFinite = __webpack_require__(849);

// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
$({ target: 'Number', stat: true }, { isFinite: numberIsFinite });


/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(43);

var globalIsFinite = global.isFinite;

// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es-x/no-number-isfinite -- safe
module.exports = Number.isFinite || function isFinite(it) {
  return typeof it == 'number' && globalIsFinite(it);
};


/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(43);
var fails = __webpack_require__(35);
var uncurryThis = __webpack_require__(33);
var toString = __webpack_require__(68);
var trim = __webpack_require__(342).trim;
var whitespaces = __webpack_require__(343);

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

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var isIntegralNumber = __webpack_require__(852);

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isIntegralNumber
});


/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(76);

var floor = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es-x/no-number-isinteger -- safe
module.exports = Number.isInteger || function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(854);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("c1d8e262", content, true, {"sourceMap":false});

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-slider .v-slider__thumb,.theme--light.v-slider .v-slider__track-background,.theme--light.v-slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--dark.v-slider .v-slider__thumb,.theme--dark.v-slider .v-slider__track-background,.theme--dark.v-slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.v-slider{cursor:default;display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;padding:0;width:100%;display:none}.v-slider__track-container{position:absolute;border-radius:0}.v-slider__thumb-container,.v-slider__track-background,.v-slider__track-fill{position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container{outline:none;top:50%}.v-slider__thumb-container:hover .v-slider__thumb:before{transform:scale(1)}.v-slider__thumb{width:12px;height:12px;left:-6px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb,.v-slider__thumb:before{position:absolute;border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb:before{content:\"\";color:inherit;width:36px;height:36px;background:currentColor;opacity:.3;left:-12px;top:-12px;transform:scale(.1);pointer-events:none}.v-slider__thumb:after{content:\"\";width:42px;height:42px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.v-slider__tick,.v-slider__ticks-container{position:absolute}.v-slider__tick{opacity:0;background-color:rgba(0,0,0,.5);transition:.3s cubic-bezier(.25,.8,.5,1);border-radius:0}.v-slider__tick--filled{background-color:hsla(0,0%,100%,.5)}.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label{transform:none}.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(100%)}.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label{transform:none}.v-slider__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.v-slider__thumb-label-container{top:0}.v-slider__thumb-label,.v-slider__thumb-label-container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--horizontal{min-height:32px;margin-left:8px;margin-right:8px}.v-slider--horizontal .v-slider__track-container{width:100%;height:2px;left:0;top:50%;transform:translateY(-50%)}.v-slider--horizontal .v-slider__track-background,.v-slider--horizontal .v-slider__track-fill{height:100%}.v-slider--horizontal .v-slider__ticks-container{left:0;height:2px;width:100%}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(100%)}.v-slider--horizontal .v-slider__tick .v-slider__tick-label{top:8px}.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(-50%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(50%)}.v-slider--horizontal .v-slider__thumb-label{transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)}.v-slider--horizontal .v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider--vertical{min-height:150px;margin-top:12px;margin-bottom:12px}.v-slider--vertical .v-slider__track-container{height:100%;width:2px;left:50%;top:0;transform:translateX(-50%)}.v-slider--vertical .v-slider__track-background,.v-slider--vertical .v-slider__track-fill{width:100%}.v-slider--vertical .v-slider__thumb-container{left:50%}.v-slider--vertical .v-slider__ticks-container{top:0;width:2px;height:100%;left:50%;transform:translateX(-50%)}.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);left:12px}.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);right:12px}.v-slider--vertical .v-slider__thumb-label>*{transform:rotate(-135deg)}.v-slider__thumb-container--focused .v-slider__thumb:before{transform:scale(1)}.v-slider--active .v-slider__tick{opacity:1}.v-slider__thumb-container--active .v-slider__thumb:before{transform:scale(1.5)!important}.v-slider--disabled{pointer-events:none}.v-slider--disabled .v-slider__thumb{width:8px;height:8px;left:-4px}.v-slider--disabled .v-slider__thumb:before{display:none}.v-slider__ticks-container--always-show .v-slider__tick{opacity:1}.v-input__slider.v-input--is-readonly>.v-input__control{pointer-events:none}.v-application--is-ltr .v-input__slider .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label,.v-application--is-rtl .v-input__slider .v-input__slot .v-label{margin-right:0;margin-left:12px}.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-input__slider--vertical{align-items:center}.v-application--is-ltr .v-input__slider--vertical{flex-direction:column-reverse}.v-application--is-rtl .v-input__slider--vertical{flex-direction:column}.v-input__slider--vertical .v-input__append-outer,.v-input__slider--vertical .v-input__prepend-outer,.v-input__slider--vertical .v-input__slot{margin:0}.v-input__slider--vertical .v-messages{display:none}.v-input--has-state .v-slider__track-background{opacity:.4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasZoomSlider_vue_vue_type_style_index_0_id_6cfb5a1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasZoomSlider_vue_vue_type_style_index_0_id_6cfb5a1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasZoomSlider_vue_vue_type_style_index_0_id_6cfb5a1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".zoom-slider[data-v-6cfb5a1a]{width:250px;height:35px}.zoom-parsentage[data-v-6cfb5a1a]{height:35px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(858);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("01907af4", content, true, {"sourceMap":false});

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 862:
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
var es_number_constructor = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/ZoomValueOnDraw2d.ts
var ZoomValueOnDraw2d = __webpack_require__(823);

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
var CanvasZoomSlidervue_type_style_index_0_id_6cfb5a1a_scoped_true_lang_css_ = __webpack_require__(855);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.js
var VSlider = __webpack_require__(921);

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

/***/ 863:
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
var web_dom_collections_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/PropertiesSettingDialog.vue + 4 modules
var PropertiesSettingDialog = __webpack_require__(819);

// EXTERNAL MODULE: ./src/domain/relation/Relation.ts
var Relation = __webpack_require__(340);

// EXTERNAL MODULE: ./src/domain/relation/RouterType.ts
var RouterType = __webpack_require__(205);

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
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(786);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js + 1 modules
var VBtnToggle = __webpack_require__(922);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(800);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(801);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(803);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(88);

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
installComponents_default()(component, {PropertiesSettingDialog: __webpack_require__(819).default})


/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VBtnToggle: VBtnToggle["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasSettingToolBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(836);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasSettingToolBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasSettingToolBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".canvas-float-toolbar{width:520px;left:2%;top:-10%;display:block;z-index:2;transition:none;position:absolute}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(867);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("1d31a8d0", content, true, {"sourceMap":false});

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{transform:translateY(100%)}.v-bottom-sheet.v-dialog{align-self:flex-end;border-radius:0;flex:0 1 auto;margin:0;overflow:visible}.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:70%}@media only screen and (max-width:599.98px){.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariationEditDialog_vue_vue_type_style_index_0_id_a9800bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(837);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariationEditDialog_vue_vue_type_style_index_0_id_a9800bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariationEditDialog_vue_vue_type_style_index_0_id_a9800bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".values-spread[data-v-a9800bf8]{color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTypeConditionEditDialog_vue_vue_type_style_index_0_id_20d18534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(838);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTypeConditionEditDialog_vue_vue_type_style_index_0_id_20d18534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTypeConditionEditDialog_vue_vue_type_style_index_0_id_20d18534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".values-spread-headless[data-v-20d18534]{color:#000}.values-spread-headless>div>table>tbody>tr>td[data-v-20d18534]{min-height:120px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 873:
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
/* harmony import */ var _presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(822);








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



/***/ }),

/***/ 874:
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

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconViewModel; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_diagrams_icon_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(818);







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

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsolutePosition; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _ZoomValueOnDraw2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(823);



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

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResizeObservation_1 = __webpack_require__(890);
var ResizeObserverEntry_1 = __webpack_require__(891);
var resizeObservers = [];
var ResizeObserver = /** @class */ (function () {
    function ResizeObserver(callback) {
        /** @internal */
        this.$$observationTargets = [];
        /** @internal */
        this.$$activeTargets = [];
        /** @internal */
        this.$$skippedTargets = [];
        var message = callbackGuard(callback);
        if (message) {
            throw TypeError(message);
        }
        this.$$callback = callback;
    }
    ResizeObserver.prototype.observe = function (target) {
        var message = targetGuard('observe', target);
        if (message) {
            throw TypeError(message);
        }
        var index = findTargetIndex(this.$$observationTargets, target);
        if (index >= 0) {
            return;
        }
        this.$$observationTargets.push(new ResizeObservation_1.ResizeObservation(target));
        registerResizeObserver(this);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        var message = targetGuard('unobserve', target);
        if (message) {
            throw TypeError(message);
        }
        var index = findTargetIndex(this.$$observationTargets, target);
        if (index < 0) {
            return;
        }
        this.$$observationTargets.splice(index, 1);
        if (this.$$observationTargets.length === 0) {
            deregisterResizeObserver(this);
        }
    };
    ResizeObserver.prototype.disconnect = function () {
        this.$$observationTargets = [];
        this.$$activeTargets = [];
        deregisterResizeObserver(this);
    };
    return ResizeObserver;
}());
exports.ResizeObserver = ResizeObserver;
function registerResizeObserver(resizeObserver) {
    var index = resizeObservers.indexOf(resizeObserver);
    if (index < 0) {
        resizeObservers.push(resizeObserver);
        startLoop();
    }
}
function deregisterResizeObserver(resizeObserver) {
    var index = resizeObservers.indexOf(resizeObserver);
    if (index >= 0) {
        resizeObservers.splice(index, 1);
        checkStopLoop();
    }
}
function callbackGuard(callback) {
    if (typeof (callback) === 'undefined') {
        return "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";
    }
    if (typeof (callback) !== 'function') {
        return "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.";
    }
}
function targetGuard(functionName, target) {
    if (typeof (target) === 'undefined') {
        return "Failed to execute '" + functionName + "' on 'ResizeObserver': 1 argument required, but only 0 present.";
    }
    if (!(target && target.nodeType === window.Node.ELEMENT_NODE)) {
        return "Failed to execute '" + functionName + "' on 'ResizeObserver': parameter 1 is not of type 'Element'.";
    }
}
function findTargetIndex(collection, target) {
    for (var index = 0; index < collection.length; index += 1) {
        if (collection[index].target === target) {
            return index;
        }
    }
    return -1;
}
var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function (ro) {
        ro.$$activeTargets = [];
        ro.$$skippedTargets = [];
        ro.$$observationTargets.forEach(function (ot) {
            if (ot.isActive()) {
                var targetDepth = calculateDepthForNode(ot.target);
                if (targetDepth > depth) {
                    ro.$$activeTargets.push(ot);
                }
                else {
                    ro.$$skippedTargets.push(ot);
                }
            }
        });
    });
};
var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return !!ro.$$activeTargets.length; });
};
var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return !!ro.$$skippedTargets.length; });
};
var broadcastActiveObservations = function () {
    var shallowestTargetDepth = Infinity;
    resizeObservers.forEach(function (ro) {
        if (!ro.$$activeTargets.length) {
            return;
        }
        var entries = [];
        ro.$$activeTargets.forEach(function (obs) {
            var entry = new ResizeObserverEntry_1.ResizeObserverEntry(obs.target);
            entries.push(entry);
            obs.$$broadcastWidth = entry.contentRect.width;
            obs.$$broadcastHeight = entry.contentRect.height;
            var targetDepth = calculateDepthForNode(obs.target);
            if (targetDepth < shallowestTargetDepth) {
                shallowestTargetDepth = targetDepth;
            }
        });
        ro.$$callback(entries, ro);
        ro.$$activeTargets = [];
    });
    return shallowestTargetDepth;
};
var deliverResizeLoopErrorNotification = function () {
    var errorEvent = new window.ErrorEvent('ResizeLoopError', {
        message: 'ResizeObserver loop completed with undelivered notifications.',
    });
    window.dispatchEvent(errorEvent);
};
var calculateDepthForNode = function (target) {
    var depth = 0;
    while (target.parentNode) {
        target = target.parentNode;
        depth += 1;
    }
    return depth;
};
var notificationIteration = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopErrorNotification();
    }
};
var animationFrameCancelToken;
var startLoop = function () {
    if (animationFrameCancelToken)
        return;
    runLoop();
};
var runLoop = function () {
    animationFrameCancelToken = window.requestAnimationFrame(function () {
        notificationIteration();
        runLoop();
    });
};
var checkStopLoop = function () {
    if (animationFrameCancelToken && !resizeObservers.some(function (ro) { return !!ro.$$observationTargets.length; })) {
        window.cancelAnimationFrame(animationFrameCancelToken);
        animationFrameCancelToken = undefined;
    }
};
var install = function () {
    return window.ResizeObserver = ResizeObserver;
};
exports.install = install;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplT2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUmVzaXplT2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBd0Q7QUFFeEQsNkRBQTREO0FBRTVELElBQU0sZUFBZSxHQUFHLEVBQXNCLENBQUM7QUFFL0M7SUFVSSx3QkFBWSxRQUFnQztRQVA1QyxnQkFBZ0I7UUFDVCx5QkFBb0IsR0FBRyxFQUF5QixDQUFDO1FBQ3hELGdCQUFnQjtRQUNULG9CQUFlLEdBQUcsRUFBeUIsQ0FBQztRQUNuRCxnQkFBZ0I7UUFDVCxxQkFBZ0IsR0FBRyxFQUF5QixDQUFDO1FBR2hELElBQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLE9BQU8sRUFBRTtZQUNULE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxNQUFlO1FBQzFCLElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLEVBQUU7WUFDVCxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ1osT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLHFDQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUQsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLGtDQUFTLEdBQWhCLFVBQWlCLE1BQWU7UUFDNUIsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLE9BQU8sRUFBRTtZQUNULE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVNLG1DQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQix3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBdUpHLHdDQUFjO0FBckpsQixTQUFTLHNCQUFzQixDQUFDLGNBQThCO0lBQzFELElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyQyxTQUFTLEVBQUUsQ0FBQztLQUNmO0FBQ0wsQ0FBQztBQUVELFNBQVMsd0JBQXdCLENBQUMsY0FBOEI7SUFDNUQsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RCxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDWixlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxhQUFhLEVBQUUsQ0FBQztLQUNuQjtBQUNMLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxRQUFnQztJQUNuRCxJQUFJLE9BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxXQUFXLEVBQUU7UUFDbEMsT0FBTyxnRkFBZ0YsQ0FBQztLQUMzRjtJQUNELElBQUksT0FBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUNqQyxPQUFPLCtGQUErRixDQUFDO0tBQzFHO0FBQ0wsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFlBQW9CLEVBQUUsTUFBa0M7SUFDekUsSUFBSSxPQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFO1FBQ2hDLE9BQU8sd0JBQXNCLFlBQVksb0VBQWlFLENBQUM7S0FDOUc7SUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBTSxNQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ3BFLE9BQU8sd0JBQXNCLFlBQVksaUVBQThELENBQUM7S0FDM0c7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsVUFBK0IsRUFBRSxNQUFlO0lBQ3JFLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDdkQsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNkLENBQUM7QUFFRCxJQUFNLCtCQUErQixHQUFHLFVBQUMsS0FBYTtJQUNsRCxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRTtRQUN2QixFQUFFLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN4QixFQUFFLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1lBQy9CLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNmLElBQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckQsSUFBSSxXQUFXLEdBQUcsS0FBSyxFQUFFO29CQUNyQixFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0gsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRixJQUFNLHFCQUFxQixHQUFHO0lBQzFCLE9BQUEsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBM0IsQ0FBMkIsQ0FBQztBQUF6RCxDQUF5RCxDQUFDO0FBRTlELElBQU0sc0JBQXNCLEdBQUc7SUFDM0IsT0FBQSxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQTVCLENBQTRCLENBQUM7QUFBMUQsQ0FBMEQsQ0FBQztBQUUvRCxJQUFNLDJCQUEyQixHQUFHO0lBQ2hDLElBQUkscUJBQXFCLEdBQUcsUUFBUSxDQUFDO0lBQ3JDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUM1QixPQUFPO1NBQ1Y7UUFFRCxJQUFNLE9BQU8sR0FBRyxFQUEyQixDQUFDO1FBQzVDLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUMzQixJQUFNLEtBQUssR0FBRyxJQUFJLHlDQUFtQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDakQsSUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELElBQUksV0FBVyxHQUFHLHFCQUFxQixFQUFFO2dCQUNyQyxxQkFBcUIsR0FBRyxXQUFXLENBQUM7YUFDdkM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxxQkFBcUIsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRixJQUFNLGtDQUFrQyxHQUFHO0lBQ3ZDLElBQU0sVUFBVSxHQUFHLElBQUssTUFBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNqRSxPQUFPLEVBQUUsK0RBQStEO0tBQzNFLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBRUYsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLE1BQVk7SUFDdkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsT0FBTyxNQUFNLENBQUMsVUFBVSxFQUFFO1FBQ3RCLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLENBQUM7S0FDZDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLElBQU0scUJBQXFCLEdBQUc7SUFDMUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsK0JBQStCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsT0FBTyxxQkFBcUIsRUFBRSxFQUFFO1FBQzVCLEtBQUssR0FBRywyQkFBMkIsRUFBRSxDQUFDO1FBQ3RDLCtCQUErQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDO0lBRUQsSUFBSSxzQkFBc0IsRUFBRSxFQUFFO1FBQzFCLGtDQUFrQyxFQUFFLENBQUM7S0FDeEM7QUFDTCxDQUFDLENBQUM7QUFFRixJQUFJLHlCQUE2QyxDQUFDO0FBRWxELElBQU0sU0FBUyxHQUFHO0lBQ2QsSUFBSSx5QkFBeUI7UUFBRSxPQUFPO0lBRXRDLE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUc7SUFDWix5QkFBeUIsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDckQscUJBQXFCLEVBQUUsQ0FBQztRQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUc7SUFDbEIsSUFBSSx5QkFBeUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBaEMsQ0FBZ0MsQ0FBQyxFQUFFO1FBQzlGLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZELHlCQUF5QixHQUFHLFNBQVMsQ0FBQztLQUN6QztBQUNMLENBQUMsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHO0lBQ1osT0FBQyxNQUFjLENBQUMsY0FBYyxHQUFHLGNBQWM7QUFBL0MsQ0FBK0MsQ0FBQztBQUdoRCwwQkFBTyJ9

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouterTypeDraw2dConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(815);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);





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

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericAreaIconGenerator; });
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
/* harmony import */ var _IconZOrderLevel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(818);
/* harmony import */ var _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(821);
/* harmony import */ var _components_diagrams_icon_IconGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(817);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(816);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var GenericAreaIconGenerator = /*#__PURE__*/function (_IconGenerator) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(GenericAreaIconGenerator, _IconGenerator);

  var _super = _createSuper(GenericAreaIconGenerator);

  function GenericAreaIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, GenericAreaIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(GenericAreaIconGenerator, [{
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var id = String(placement.resourceId);
      var waku = new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.shape.basic.Rectangle({
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
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 30,
        stroke: 0,
        padding: 0,
        bgColor: "#FFFFFF",
        alpha: 1
      });
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.shape.basic.Label({
        text: resource.name,
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      icon.add(name, new draw2d__WEBPACK_IMPORTED_MODULE_8___default.a.layout.locator.XYRelPortLocator({
        x: 105,
        y: 27
      }));
      waku.add(icon, new _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]());
      this.makeSingleHybridPort(icon);
      waku.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_12__["default"](_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_9__["default"].AREA));
      return waku;
    }
  }]);

  return GenericAreaIconGenerator;
}(_components_diagrams_icon_IconGenerator__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ 880:
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
var web_dom_collections_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue + 4 modules
var RelationPropertiesEditDialog = __webpack_require__(863);

// EXTERNAL MODULE: ./src/domain/relation/RouterType.ts
var RouterType = __webpack_require__(205);

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
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
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
var es_number_constructor = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBottomSheet/VBottomSheet.sass
var VBottomSheet = __webpack_require__(866);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(785);

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
var VBtn = __webpack_require__(786);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js + 1 modules
var VBtnToggle = __webpack_require__(922);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(328);

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

/***/ 881:
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
var es_symbol_description = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

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
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(808);

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

/***/ 882:
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
var es_regexp_exec = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/resize-observer/lib/ResizeObserver.js
var ResizeObserver = __webpack_require__(877);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue + 4 modules
var CanvasZoomSlider = __webpack_require__(862);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/Draw2dCanvasGuideType.ts
var Draw2dCanvasGuideType = __webpack_require__(835);

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
var CanvasSettingToolBarvue_type_style_index_0_lang_css_ = __webpack_require__(864);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(786);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(328);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(799);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(808);

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

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/StandardResourceEditDialog.vue?vue&type=template&id=7bebd05c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"dialogWidth":"450"},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"changeConsent":_vm.changeConsent}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/StandardResourceEditDialog.vue?vue&type=template&id=7bebd05c&scoped=true&

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
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(820);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/StandardResourceEditDialog.vue?vue&type=script&lang=ts&







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




var StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(StandardResourceEditDialog, _Vue);

  var _super = _createSuper(StandardResourceEditDialog);

  function StandardResourceEditDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, StandardResourceEditDialog);

    _this = _super.apply(this, arguments);
    _this.consent = false;
    return _this;
  }

  Object(createClass["a" /* default */])(StandardResourceEditDialog, [{
    key: "onModifyResource",
    value: function onModifyResource(_resource) {}
  }, {
    key: "onJustPutOnDiagram",
    value: function onJustPutOnDiagram(_resource) {}
  }, {
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "changeConsent",
    value: function changeConsent(newConsent) {
      this.consent = newConsent;
    }
  }]);

  return StandardResourceEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog.prototype, "resource", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog.prototype, "resources", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog.prototype, "diagram", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog.prototype, "onModifyResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onJustPutOnDiagram")], StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog.prototype, "onJustPutOnDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog.prototype, "onClose", null);

StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    CoreResourceEditDialog: CoreResourceEditDialog["default"]
  }
})], StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog);
/* harmony default export */ var StandardResourceEditDialogvue_type_script_lang_ts_ = (StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog);
// CONCATENATED MODULE: ./src/components/resource/StandardResourceEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_StandardResourceEditDialogvue_type_script_lang_ts_ = (StandardResourceEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// CONCATENATED MODULE: ./src/components/resource/StandardResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_StandardResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "7bebd05c",
  null
  
)

/* harmony default export */ var resource_StandardResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/HasContentResourceEditDialog.vue?vue&type=template&id=322e99b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"dialogWidth":"450","notFocusSetName":"true"},on:{"onModifyResource":_vm.onModifyResourceInner,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_c('v-textarea',{ref:"inputContent",attrs:{"counter":"","filled":"","label":"内容","rows":"3","no-resize":"","autofocus":"","rules":[_vm.validateContent],"hint":_vm.inputContentHint},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1)],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/HasContentResourceEditDialog.vue?vue&type=template&id=322e99b4&scoped=true&

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
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(820);

// EXTERNAL MODULE: ./src/domain/resource/Purpose.ts
var Purpose = __webpack_require__(171);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts + 1 modules
var ResourceType = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/HasContentResourceEditDialog.vue?vue&type=script&lang=ts&







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






var HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(HasContentResourceEditDialog, _Vue);

  var _super = _createSuper(HasContentResourceEditDialog);

  function HasContentResourceEditDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, HasContentResourceEditDialog);

    _this = _super.apply(this, arguments);
    _this.content = "";
    _this.inputContentHint = "";
    _this.consent = false;
    return _this;
  }

  Object(createClass["a" /* default */])(HasContentResourceEditDialog, [{
    key: "onModifyResource",
    value: function onModifyResource(_resource) {}
  }, {
    key: "onJustPutOnDiagram",
    value: function onJustPutOnDiagram(_resource) {}
  }, {
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "showCustomProperties",
    value: function showCustomProperties(resource) {
      this.content = resource.content;
      this.inputContentHint = this.choiceHintText(resource);
    }
  }, {
    key: "changeConsent",
    value: function changeConsent(newConsent) {
      if (this.validateContent() !== true) {
        this.consent = false;
        return;
      }

      this.consent = newConsent;
    }
  }, {
    key: "choiceHintText",
    value: function choiceHintText(resource) {
      if (ResourceType["a" /* default */].目的.equals(resource.type)) return "半角スペース・改行 で折り返す事ができます。";
      return "改行 で折り返す事ができます。";
    }
  }, {
    key: "validateContent",
    value: function validateContent() {
      this.consent = false;
      var content = this.content;
      if (content.length <= 0) return "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002";
      var max = Purpose["a" /* default */].CONTENT_MAX_LENGTH;
      if (content.length > max) return "".concat(max, "\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      this.consent = true;
      return true;
    }
  }, {
    key: "onModifyResourceInner",
    value: function onModifyResourceInner(resource) {
      var withContent = resource.withContent(this.content);
      this.onModifyResource(withContent);
    }
  }]);

  return HasContentResourceEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog.prototype, "resource", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog.prototype, "resources", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog.prototype, "diagram", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog.prototype, "onModifyResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onJustPutOnDiagram")], HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog.prototype, "onJustPutOnDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog.prototype, "onClose", null);

HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    CoreResourceEditDialog: CoreResourceEditDialog["default"]
  }
})], HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog);
/* harmony default export */ var HasContentResourceEditDialogvue_type_script_lang_ts_ = (HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog);
// CONCATENATED MODULE: ./src/components/resource/HasContentResourceEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_HasContentResourceEditDialogvue_type_script_lang_ts_ = (HasContentResourceEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(800);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(803);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(804);

// CONCATENATED MODULE: ./src/components/resource/HasContentResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_HasContentResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "322e99b4",
  null
  
)

/* harmony default export */ var resource_HasContentResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/VariationEditDialog.vue?vue&type=template&id=a9800bf8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"dialogWidth":"450","ignoreEscKey":"true","ignoreEnterKey":"true"},on:{"onModifyResource":_vm.onModifyResourceInner,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_c('div',{ref:"valuesSpreadDiv",staticClass:"values-spread"})])],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/VariationEditDialog.vue?vue&type=template&id=a9800bf8&scoped=true&

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
var web_dom_collections_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.js
var jexcel = __webpack_require__(860);
var jexcel_default = /*#__PURE__*/__webpack_require__.n(jexcel);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.css
var dist_jexcel = __webpack_require__(861);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(820);

// EXTERNAL MODULE: ./src/domain/resource/Variation.ts
var Variation = __webpack_require__(167);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/VariationEditDialog.vue?vue&type=script&lang=ts&








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







var VariationEditDialogvue_type_script_lang_ts_VariationEditDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(VariationEditDialog, _Vue);

  var _super = _createSuper(VariationEditDialog);

  function VariationEditDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VariationEditDialog);

    _this = _super.apply(this, arguments);
    _this.values = [];
    _this.valuesSpread = null;
    _this.consent = false;
    return _this;
  }

  Object(createClass["a" /* default */])(VariationEditDialog, [{
    key: "onModifyResource",
    value: function onModifyResource(_resource) {}
  }, {
    key: "onJustPutOnDiagram",
    value: function onJustPutOnDiagram(_resource) {}
  }, {
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "showCustomProperties",
    value: function showCustomProperties(resource) {
      if (this.valuesSpread !== null) this.valuesSpread.destroy();
      this.values = resource.valuesOf().map(function (value) {
        return [value];
      });
      var div = this.$refs.valuesSpreadDiv;
      this.valuesSpread = this.createSpread(this.values, div);
    }
  }, {
    key: "createSpread",
    value: function createSpread(_values, div) {
      var options = {
        data: this.values,
        allowToolbar: true,
        columnResize: false,
        columnSorting: false,
        tableOverflow: true,
        tableHeight: "130px",
        allowInsertColumn: false,
        onchange: this.onChangedCell,
        columns: [{
          type: "text",
          title: "値の種類",
          width: "325px",
          align: "left"
        }]
      };
      return jexcel_default()(div, options);
    }
  }, {
    key: "onChangedCell",
    value: function onChangedCell(_instance, cell, _columnIndex, rowIndex, value) {
      var rowIndexNumber = Number(rowIndex);
      var changeValue = value;
      var fixedValue = changeValue.trim().substring(0, Variation["a" /* default */].CONDITION_VALUE_MAX_LENGTH);
      this.values[rowIndexNumber][0] = fixedValue;
      cell.textContent = fixedValue;
    }
  }, {
    key: "onModifyResourceInner",
    value: function onModifyResourceInner(resource) {
      var newValues = this.values.map(function (line) {
        return line[0];
      }).map(function (value) {
        return value.trim();
      }).filter(function (value) {
        return value.length > 0;
      });
      var withContent = resource.withValues(newValues);
      this.onModifyResource(withContent);
    }
  }, {
    key: "changeConsent",
    value: function changeConsent(newConsent) {
      this.consent = newConsent;
    }
  }]);

  return VariationEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog.prototype, "resource", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog.prototype, "resources", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog.prototype, "diagram", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog.prototype, "onModifyResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onJustPutOnDiagram")], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog.prototype, "onJustPutOnDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog.prototype, "onClose", null);

VariationEditDialogvue_type_script_lang_ts_VariationEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    CoreResourceEditDialog: CoreResourceEditDialog["default"]
  }
})], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog);
/* harmony default export */ var VariationEditDialogvue_type_script_lang_ts_ = (VariationEditDialogvue_type_script_lang_ts_VariationEditDialog);
// CONCATENATED MODULE: ./src/components/resource/VariationEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_VariationEditDialogvue_type_script_lang_ts_ = (VariationEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/resource/VariationEditDialog.vue?vue&type=style&index=0&id=a9800bf8&scoped=true&lang=css&
var VariationEditDialogvue_type_style_index_0_id_a9800bf8_scoped_true_lang_css_ = __webpack_require__(868);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(800);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(803);

// CONCATENATED MODULE: ./src/components/resource/VariationEditDialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_VariationEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "a9800bf8",
  null
  
)

/* harmony default export */ var resource_VariationEditDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/ConditionEditDialog.vue?vue&type=template&id=4fb620b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"dialogWidth":"450"},on:{"onModifyResource":_vm.onModifyResourceInner,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"条件の内容","counter":"","rules":[_vm.validateValue],"maxlength":_vm.valueMaxLength},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1)],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/ConditionEditDialog.vue?vue&type=template&id=4fb620b8&scoped=true&

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
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(820);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/ConditionEditDialog.vue?vue&type=script&lang=ts&







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





var ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(ConditionEditDialog, _Vue);

  var _super = _createSuper(ConditionEditDialog);

  function ConditionEditDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ConditionEditDialog);

    _this = _super.apply(this, arguments);
    _this.value = "";
    _this.consent = false;
    return _this;
  }

  Object(createClass["a" /* default */])(ConditionEditDialog, [{
    key: "onModifyResource",
    value: function onModifyResource(_resource) {}
  }, {
    key: "onJustPutOnDiagram",
    value: function onJustPutOnDiagram(_resource) {}
  }, {
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "showCustomProperties",
    value: function showCustomProperties(resource) {
      this.value = resource.value;
    }
  }, {
    key: "onModifyResourceInner",
    value: function onModifyResourceInner(resource) {
      var withContent = resource.withValue(this.value);
      this.onModifyResource(withContent);
    }
  }, {
    key: "changeConsent",
    value: function changeConsent(newConsent) {
      if (this.validateValue() !== true) return;
      this.consent = newConsent;
    }
  }, {
    key: "valueMaxLength",
    get: function get() {
      return Condition["a" /* default */].CONDITION_VALUE_MAX_LENGTH;
    }
  }, {
    key: "validateValue",
    value: function validateValue() {
      this.consent = false;
      var value = this.value;
      if (value.length === 0) return "入力してください。";
      var max = this.valueMaxLength;
      if (value.length > max) return "".concat(max, "\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      this.consent = true;
      return true;
    }
  }]);

  return ConditionEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog.prototype, "resource", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog.prototype, "resources", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog.prototype, "diagram", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog.prototype, "onModifyResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onJustPutOnDiagram")], ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog.prototype, "onJustPutOnDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog.prototype, "onClose", null);

ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    CoreResourceEditDialog: CoreResourceEditDialog["default"]
  }
})], ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog);
/* harmony default export */ var ConditionEditDialogvue_type_script_lang_ts_ = (ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog);
// CONCATENATED MODULE: ./src/components/resource/ConditionEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_ConditionEditDialogvue_type_script_lang_ts_ = (ConditionEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(800);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(803);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(88);

// CONCATENATED MODULE: ./src/components/resource/ConditionEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_ConditionEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "4fb620b8",
  null
  
)

/* harmony default export */ var resource_ConditionEditDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=template&id=20d18534&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"ignoreEscKey":"true","ignoreEnterKey":"true","dialogWidth":"600"},on:{"onModifyResource":_vm.onModifyResourceInner,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_vm._v("\n        条件\n        "),_c('br'),_vm._v(" "),_c('div',{ref:"valuesSpreadDiv",staticClass:"values-spread-headless"}),_vm._v("\n        ※tabキーで列追加、enterキーで行追加、右クリックでその他の操作\n      ")])],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=template&id=20d18534&scoped=true&

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
var web_dom_collections_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.js
var jexcel = __webpack_require__(860);
var jexcel_default = /*#__PURE__*/__webpack_require__.n(jexcel);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.css
var dist_jexcel = __webpack_require__(861);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(820);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=script&lang=ts&








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







var TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(TableTypeConditionEditDialog, _Vue);

  var _super = _createSuper(TableTypeConditionEditDialog);

  function TableTypeConditionEditDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TableTypeConditionEditDialog);

    _this = _super.apply(this, arguments);
    _this.values = [];
    _this.valuesSpread = null;
    _this.consent = false;
    return _this;
  }

  Object(createClass["a" /* default */])(TableTypeConditionEditDialog, [{
    key: "onModifyResource",
    value: function onModifyResource(_resource) {}
  }, {
    key: "onJustPutOnDiagram",
    value: function onJustPutOnDiagram(_resource) {}
  }, {
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "showCustomProperties",
    value: function showCustomProperties(resource) {
      if (this.valuesSpread !== null) this.valuesSpread.destroy();
      this.values = resource.valuesOf();
      var div = this.$refs.valuesSpreadDiv;
      this.valuesSpread = this.createSpread(this.values, div);
    }
  }, {
    key: "createSpread",
    value: function createSpread(_values, div) {
      var options = {
        data: this.values,
        allowToolbar: true,
        columnResize: true,
        columnSorting: false,
        rowResize: true,
        tableOverflow: true,
        tableHeight: "130px",
        tableWidth: "530px",
        defaultColWidth: "130px",
        defaultColAlign: "left",
        allowInsertColumn: true,
        onchange: this.onChangedCell
      };
      var target = jexcel_default()(div, options);
      target.hideIndex();
      this.hideRowHeader(div);
      return target;
    }
  }, {
    key: "hideRowHeader",
    value: function hideRowHeader(spreadTable) {
      var tHead = spreadTable.getElementsByTagName("thead").item(0);
      tHead.style.display = "none";
    }
  }, {
    key: "onChangedCell",
    value: function onChangedCell(_instance, cell, columnIndex, rowIndex, value) {
      var row = Number(rowIndex);
      var col = Number(columnIndex);
      var fixedValue = this.fixInputValue(value);
      this.values[row][col] = fixedValue;
      cell.textContent = fixedValue;
    }
  }, {
    key: "fixInputValue",
    value: function fixInputValue(value) {
      return value.trim().substring(0, Condition["a" /* default */].CONDITION_VALUE_MAX_LENGTH);
    }
  }, {
    key: "onModifyResourceInner",
    value: function onModifyResourceInner(resource) {
      var _this2 = this;

      var newValues = this.values.map(function (line) {
        return _this2.normalizeValues(line);
      });
      var withContent = resource.withValues(newValues);
      this.onModifyResource(withContent);
    }
  }, {
    key: "normalizeValues",
    value: function normalizeValues(values) {
      return values.map(function (value) {
        return value.trim();
      });
    }
  }, {
    key: "changeConsent",
    value: function changeConsent(newConsent) {
      this.consent = newConsent;
    }
  }]);

  return TableTypeConditionEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog.prototype, "resource", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog.prototype, "resources", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog.prototype, "diagram", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog.prototype, "onModifyResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onJustPutOnDiagram")], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog.prototype, "onJustPutOnDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog.prototype, "onClose", null);

TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    CoreResourceEditDialog: CoreResourceEditDialog["default"]
  }
})], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog);
/* harmony default export */ var TableTypeConditionEditDialogvue_type_script_lang_ts_ = (TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog);
// CONCATENATED MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_TableTypeConditionEditDialogvue_type_script_lang_ts_ = (TableTypeConditionEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=style&index=0&id=20d18534&scoped=true&lang=css&
var TableTypeConditionEditDialogvue_type_style_index_0_id_20d18534_scoped_true_lang_css_ = __webpack_require__(870);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(800);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(803);

// CONCATENATED MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_TableTypeConditionEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "20d18534",
  null
  
)

/* harmony default export */ var resource_TableTypeConditionEditDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPaneWithSlideBarLayout_vue_vue_type_style_index_0_id_a3bb8534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(842);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPaneWithSlideBarLayout_vue_vue_type_style_index_0_id_a3bb8534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPaneWithSlideBarLayout_vue_vue_type_style_index_0_id_a3bb8534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pane-container[data-v-a3bb8534]{display:flex;height:100%;width:100%;max-width:none;padding-right:0;padding-left:0;margin-right:unset;margin-left:unset}.left-pane[data-v-a3bb8534]{text-align:left;width:250px}.left-pane[data-v-a3bb8534],.right-pane[data-v-a3bb8534]{overflow:hidden;resize:none}.right-pane[data-v-a3bb8534]{flex-grow:1;width:0;min-width:0}.slidebar[data-v-a3bb8534]{width:8px;background-color:#404040;cursor:col-resize;transition:.25s}.slidebar[data-v-a3bb8534]:hover{background-color:#a0a0a0;transition:.25s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentRect_1 = __webpack_require__(843);
var ResizeObservation = /** @class */ (function () {
    function ResizeObservation(target) {
        this.target = target;
        this.$$broadcastWidth = this.$$broadcastHeight = 0;
    }
    Object.defineProperty(ResizeObservation.prototype, "broadcastWidth", {
        get: function () {
            return this.$$broadcastWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizeObservation.prototype, "broadcastHeight", {
        get: function () {
            return this.$$broadcastHeight;
        },
        enumerable: true,
        configurable: true
    });
    ResizeObservation.prototype.isActive = function () {
        var cr = ContentRect_1.ContentRect(this.target);
        return !!cr
            && (cr.width !== this.broadcastWidth
                || cr.height !== this.broadcastHeight);
    };
    return ResizeObservation;
}());
exports.ResizeObservation = ResizeObservation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplT2JzZXJ2YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUmVzaXplT2JzZXJ2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUM7SUFlSSwyQkFBWSxNQUFlO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFWRCxzQkFBVyw2Q0FBYzthQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsOENBQWU7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQU9NLG9DQUFRLEdBQWY7UUFDSSxJQUFNLEVBQUUsR0FBRyx5QkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxPQUFPLENBQUMsQ0FBQyxFQUFFO2VBQ0osQ0FDQyxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxjQUFjO21CQUM3QixFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQ3hDLENBQUM7SUFDVixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBRVEsOENBQWlCIn0=

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentRect_1 = __webpack_require__(843);
var ResizeObserverEntry = /** @class */ (function () {
    function ResizeObserverEntry(target) {
        this.target = target;
        this.contentRect = ContentRect_1.ContentRect(target);
    }
    return ResizeObserverEntry;
}());
exports.ResizeObserverEntry = ResizeObserverEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplT2JzZXJ2ZXJFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNpemVPYnNlcnZlckVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTRDO0FBRTVDO0lBR0ksNkJBQVksTUFBZTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFFUSxrREFBbUIifQ==

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramCanvas_vue_vue_type_style_index_0_id_757325e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(844);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramCanvas_vue_vue_type_style_index_0_id_757325e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramCanvas_vue_vue_type_style_index_0_id_757325e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".canvas-container[data-v-757325e4]{width:100%;height:100%;min-width:0;overflow:auto;text-align:left}.diagram-canvas[data-v-757325e4]{width:1px;height:1px;margin:0;border-radius:5px;filter:drop-shadow(10px 10px 10px rgba(0,0,0,.6));position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceParet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(845);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceParet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceParet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".paret-panel{overflow-x:hidden;overflow-y:auto;width:100%;height:100%}.omit-long-text{position:absolute;text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;padding:0}.ignore-padding{padding:0}.chip-container{position:absolute;text-align:left;width:100%}.v-expansion-panel-content__wrap{padding:0;flex:auto}.v-expansion-panel--next-active{padding:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(897);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("48751daa", content, true, {"sourceMap":false});

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.04}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.08}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:\"\";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/twopane/TwoPaneWithSlideBarLayout.vue?vue&type=template&id=a3bb8534&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{staticClass:"text-center"},[_c('div',{ref:"paneContainer",staticClass:"pane-container",on:{"dragover":_vm.onDragOverMasterPaneSlideBar,"drop":_vm.onDropMasterPaneSlideBar}},[_c('div',{ref:"leftPane",staticClass:"left-pane"},[_vm._t("leftPane")],2),_vm._v(" "),_c('div',{staticClass:"slidebar",attrs:{"id":"slideBar","draggable":"true"},on:{"dblclick":_vm.onDoubleClickSlideBar,"dragstart":_vm.onDragStartMasterPaneSlideBar}}),_vm._v(" "),_c('div',{ref:"rightPane",staticClass:"right-pane"},[_vm._t("rightPane")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/twopane/TwoPaneWithSlideBarLayout.vue?vue&type=template&id=a3bb8534&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/twopane/DragAndDropSlideBarId.ts
var DragAndDropSlideBarId = __webpack_require__(873);

// EXTERNAL MODULE: ./src/domain/world/Uuid.ts
var Uuid = __webpack_require__(347);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/twopane/TwoPaneWithSlideBarLayout.vue?vue&type=script&lang=ts&








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





var TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_TwoPaneWithSlideBarLayout = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(TwoPaneWithSlideBarLayout, _Vue);

  var _super = _createSuper(TwoPaneWithSlideBarLayout);

  function TwoPaneWithSlideBarLayout() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TwoPaneWithSlideBarLayout);

    _this = _super.apply(this, arguments);
    _this.leftPaneDisplay = 'none';
    _this.adsorptionRight = false;
    _this.leftPaneWidth = '';
    _this.rightPaneWidth = '';
    return _this;
  }

  Object(createClass["a" /* default */])(TwoPaneWithSlideBarLayout, [{
    key: "mounted",
    value: function mounted() {
      if (!this.defaultLeftPaneWidth) return;
      var leftPane = this.$refs.leftPane;
      leftPane.style.width = this.defaultLeftPaneWidth;
    }
  }, {
    key: "onDoubleClickSlideBar",
    value: function onDoubleClickSlideBar() {
      var leftPane = this.$refs.leftPane;
      var leftPaneStyle = leftPane.style;

      if (!this.adsorptionRightWhenDoubleClick) {
        var last = leftPaneStyle.display;
        leftPaneStyle.display = this.leftPaneDisplay;
        this.leftPaneDisplay = last;
        return;
      }

      var rightPane = this.$refs.rightPane;
      var rightPaneStyle = rightPane.style;
      this.adsorptionRight = !this.adsorptionRight;

      if (this.adsorptionRight) {
        this.leftPaneWidth = leftPaneStyle.width;
        this.rightPaneWidth = rightPaneStyle.width;
        rightPaneStyle.width = '0%';
        leftPaneStyle.width = '100%';
      } else {
        rightPaneStyle.width = this.rightPaneWidth;
        leftPaneStyle.width = this.leftPaneWidth;
      }

      rightPaneStyle.display = this.adsorptionRight ? 'none' : 'inline';
    }
  }, {
    key: "onDragStartMasterPaneSlideBar",
    value: function onDragStartMasterPaneSlideBar(event) {
      var _a;

      this.dragId = Uuid["a" /* default */].generate();
      var ddv = DragAndDropSlideBarId["default"].prototypeOf().renew(this.dragId);
      (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text/plain', ddv.toString());
    }
  }, {
    key: "onDragOverMasterPaneSlideBar",
    value: function onDragOverMasterPaneSlideBar(event) {
      event === null || event === void 0 ? void 0 : event.preventDefault();
    }
  }, {
    key: "onDropMasterPaneSlideBar",
    value: function onDropMasterPaneSlideBar(event) {
      var _a;

      event.preventDefault();
      var ddv = DragAndDropSlideBarId["default"].prototypeOf().parseOf((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text/plain'));
      if (ddv.isInvalid()) return;
      if (ddv.id() !== this.dragId) return;
      if (this.adsorptionLeft || this.adsorptionRight) return;
      var paneContainer = this.$refs.paneContainer;
      var absoluteLeft = paneContainer.getBoundingClientRect().left;
      var leftPane = this.$refs.leftPane;
      var style = leftPane.style;
      style.width = event.pageX - absoluteLeft + 'px';
    }
  }, {
    key: "adsorptionLeft",
    get: function get() {
      var leftPane = this.$refs.leftPane;
      return leftPane.style.display === 'none';
    }
  }]);

  return TwoPaneWithSlideBarLayout;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_TwoPaneWithSlideBarLayout.prototype, "adsorptionRightWhenDoubleClick", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_TwoPaneWithSlideBarLayout.prototype, "defaultLeftPaneWidth", void 0);

TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_TwoPaneWithSlideBarLayout = __decorate([nuxt_property_decorator_umd["Component"]], TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_TwoPaneWithSlideBarLayout);
/* harmony default export */ var TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_ = (TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_TwoPaneWithSlideBarLayout);
// CONCATENATED MODULE: ./src/components/twopane/TwoPaneWithSlideBarLayout.vue?vue&type=script&lang=ts&
 /* harmony default export */ var twopane_TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_ = (TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/twopane/TwoPaneWithSlideBarLayout.vue?vue&type=style&index=0&id=a3bb8534&scoped=true&lang=css&
var TwoPaneWithSlideBarLayoutvue_type_style_index_0_id_a3bb8534_scoped_true_lang_css_ = __webpack_require__(888);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VGrid/_grid.sass
var _grid = __webpack_require__(345);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/grid.js
var grid = __webpack_require__(346);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js


/* harmony default export */ var VFlex = (Object(grid["a" /* default */])('flex'));
// CONCATENATED MODULE: ./src/components/twopane/TwoPaneWithSlideBarLayout.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  twopane_TwoPaneWithSlideBarLayoutvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "a3bb8534",
  null
  
)

/* harmony default export */ var twopane_TwoPaneWithSlideBarLayout = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VFlex: VFlex})


/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnalyzeResutEvents; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












var AnalyzeResutEvents = /*#__PURE__*/function () {
  function AnalyzeResutEvents(eventsOfTypes) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AnalyzeResutEvents);

    this.eventsOfTypes = eventsOfTypes;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AnalyzeResutEvents, [{
    key: "validate",
    value: function validate(diagram, product, view) {
      return this.eventsOfTypes.every(function (events) {
        return events.validate(diagram, product, view);
      });
    }
  }, {
    key: "apply",
    value: function apply(diagram, product, view) {
      var modifiedDiagram = diagram;

      var _iterator = _createForOfIteratorHelper(this.eventsOfTypes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var events = _step.value;
          var result = events.apply(modifiedDiagram, product, view);
          if (result === null) return null;
          modifiedDiagram = result;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return modifiedDiagram;
    }
  }, {
    key: "isNothing",
    value: function isNothing() {
      return this.eventsOfTypes.length === 0;
    }
  }], [{
    key: "nothing",
    value: function nothing() {
      return new AnalyzeResutEvents([]);
    }
  }]);

  return AnalyzeResutEvents;
}();



/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FigureAnalyzer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(344);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);








var FigureAnalyzer = /*#__PURE__*/function () {
  function FigureAnalyzer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, FigureAnalyzer);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(FigureAnalyzer, [{
    key: "isConnection",
    value: function isConnection(figure) {
      if (!figure) return false;
      var id = figure.getId();
      if (!id) return false;
      return !id.search(/^[0-9]+$/);
    }
  }, {
    key: "analyzeResourceId",
    value: function analyzeResourceId(figure) {
      if (this.isConnection(figure)) return null;
      return parseInt(figure === null || figure === void 0 ? void 0 : figure.getId(), 10);
    }
  }, {
    key: "analyzeResourceIds",
    value: function analyzeResourceIds(figures) {
      var _this = this;

      return figures.filter(function (figure) {
        return _this.isConnection(figure);
      }).map(function (figure) {
        return parseInt(figure.getId(), 10);
      });
    }
  }, {
    key: "analizeRelationIds",
    value: function analizeRelationIds(figures) {
      var _this2 = this;

      return figures.filter(function (figure) {
        return !_this2.isConnection(figure);
      }).map(function (figure) {
        return figure.getId();
      });
    }
  }]);

  return FigureAnalyzer;
}();



/***/ }),

/***/ 901:
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

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/dad/DragAndDropResourceType.ts
var DragAndDropResourceType = __webpack_require__(839);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/dad/DragAndDropResourceId.ts
var DragAndDropResourceId = __webpack_require__(840);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts + 1 modules
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
var ResourceParetvue_type_style_index_0_lang_css_ = __webpack_require__(894);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/registrable/index.js
var registrable = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(13);

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
var transitions = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/bootable/index.js
var bootable = __webpack_require__(240);

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
var VIcon = __webpack_require__(75);

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
var es_array_flat = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat.js
var es_array_unscopables_flat = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VExpansionPanel/VExpansionPanel.sass
var VExpansionPanel_VExpansionPanel = __webpack_require__(896);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(142);

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
var VIcon_VIcon = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(808);

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


/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=template&id=757325e4&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"convasContainer",staticClass:"canvas-container"},[_c('div',{ref:"canvasBase",staticClass:"diagram-canvas",attrs:{"id":_vm.canvasId}}),_vm._v(" "),_c('CanvasSettingToolBar',{attrs:{"diagramId":_vm.diagramId,"canvasGuideType":_vm.canvasGuideType},on:{"onChangeZoomBySlider":_vm.onChangeZoomBySlider,"onChangeCanvasGuideType":_vm.onChangeCanvasGuideType,"onPngDownload":_vm.onPngDownload,"onSvgDownload":_vm.onSvgDownload,"onDiagramExport":_vm.onDiagramExport,"onOpendDiagramPropertiesEditor":_vm.onOpendDiagramPropertiesEditor}}),_vm._v(" "),_c('ConnectorRightClickMenuAndEditor',{attrs:{"visible":_vm.visibleConnectorMenu,"relation":_vm.targetRelation,"menuPositionX":_vm.menuX,"menuPositionY":_vm.menuY},on:{"onUpdateRelation":_vm.onUpdateRelation,"onDeleteRelation":_vm.onDeleteRelation}}),_vm._v(" "),_c('IconToolTip',{ref:"iconToolTip"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=template&id=757325e4&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(81);

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
var es_array_map = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.delete-all.js
var esnext_map_delete_all = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.every.js
var esnext_map_every = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.filter.js
var esnext_map_filter = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find.js
var esnext_map_find = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find-key.js
var esnext_map_find_key = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.includes.js
var esnext_map_includes = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.key-of.js
var esnext_map_key_of = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-keys.js
var esnext_map_map_keys = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-values.js
var esnext_map_map_values = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.merge.js
var esnext_map_merge = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.reduce.js
var esnext_map_reduce = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.some.js
var esnext_map_some = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.update.js
var esnext_map_update = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/draw2d/dist/draw2d.js
var draw2d = __webpack_require__(815);
var draw2d_default = /*#__PURE__*/__webpack_require__.n(draw2d);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(872);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widget.js
var widget = __webpack_require__(913);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/draggable.js
var draggable = __webpack_require__(915);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/droppable.js
var droppable = __webpack_require__(917);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/DefaultIconGenerator.ts
var DefaultIconGenerator = __webpack_require__(874);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/IconViewModel.ts
var IconViewModel = __webpack_require__(875);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/ZoomValueOnDraw2d.ts
var ZoomValueOnDraw2d = __webpack_require__(823);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/AbsolutePosition.ts
var AbsolutePosition = __webpack_require__(876);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/IconToolTip.vue + 4 modules
var IconToolTip = __webpack_require__(881);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue + 4 modules
var CanvasSettingToolBar = __webpack_require__(882);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue + 5 modules
var ConnectorRightClickMenuAndEditor = __webpack_require__(880);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/Draw2dCanvasGuideType.ts
var Draw2dCanvasGuideType = __webpack_require__(835);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/RouterTypeDraw2dConverter.ts
var RouterTypeDraw2dConverter = __webpack_require__(878);

// EXTERNAL MODULE: ./src/domain/diagram/Diagram.ts
var Diagram = __webpack_require__(168);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(106);

// CONCATENATED MODULE: ./src/domain/client/DownloadCustomFile.ts



var DownloadCustomFile_DownloadCustomFile = /*#__PURE__*/Object(createClass["a" /* default */])(function DownloadCustomFile(clientFileName, contentType, contents) {
  Object(classCallCheck["a" /* default */])(this, DownloadCustomFile);

  this.clientFileName = clientFileName;
  this.contentType = contentType;
  this.contents = contents;
});


// EXTERNAL MODULE: ./src/domain/client/WithTimestampFileName.ts
var WithTimestampFileName = __webpack_require__(241);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/dad/DragAndDropResourceType.ts
var DragAndDropResourceType = __webpack_require__(839);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/dad/DragAndDropResourceId.ts
var DragAndDropResourceId = __webpack_require__(840);

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
    return _this;
  }

  Object(createClass["a" /* default */])(DiagramCanvas, [{
    key: "zoom",
    value: function zoom() {
      var zoom = this.canvas.getZoom();
      return ZoomValueOnDraw2d["default"].of(zoom).value;
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
      if (this.diagramId !== this.lastPropertiesUpdatedDiagramId) return;
      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return;
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
      var _a;

      var diagram = (_a = this.product) === null || _a === void 0 ? void 0 : _a.diagrams.of(this.diagramId);
      if (!diagram) return;
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
      var _a;

      this.cacheNowResources();
      var diagram = (_a = this.product) === null || _a === void 0 ? void 0 : _a.diagrams.of(this.diagramId);
      if (!diagram) return;
      var guideType = Draw2dCanvasGuideType["default"].of(diagram.canvasGuideType);
      console.log('guideType:', guideType);
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
      console.log('Figure:', targetFigure);
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
      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
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

      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
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
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return;
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
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "diagramId", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "product", void 0);

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
// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=style&index=0&id=757325e4&scoped=true&lang=css&
var DiagramCanvasvue_type_style_index_0_id_757325e4_scoped_true_lang_css_ = __webpack_require__(892);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  canvas_DiagramCanvasvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "757325e4",
  null
  
)

/* harmony default export */ var canvas_DiagramCanvas = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/ResourceRightClickMenu.vue?vue&type=template&id=328fe8d7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-menu',{attrs:{"value":_vm.visible,"position-x":_vm.showPositionX,"position-y":_vm.showPositionY,"close-on-click":"","close-on-content-click":"","offset-x":"","rounded":""},on:{"input":_vm.close}},[_c('v-list',[(_vm.enableEdit)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickEdit}},[_c('v-list-item-title',[_vm._v("編集...")])],1):_vm._e(),_vm._v(" "),(_vm.enableOpenDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickOpenDiagram}},[_c('v-list-item-title',[_vm._v("対応する図を開く")])],1):_vm._e(),_vm._v(" "),(_vm.enableDeleteOnDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickDeleteOnDiagram}},[_c('v-list-item-title',[_vm._v("この図から削除")])],1):_vm._e(),_vm._v(" "),(_vm.enableDeleteOnProduct)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickDeleteOnProduct}},[_c('v-list-item-title',[_vm._v("プロダクト全体から削除")])],1):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/ResourceRightClickMenu.vue?vue&type=template&id=328fe8d7&

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

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./src/domain/product/Product.ts + 2 modules
var Product = __webpack_require__(170);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/ResourceRightClickMenu.vue?vue&type=script&lang=ts&







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




var ResourceRightClickMenuvue_type_script_lang_ts_ResourceRightClickMenu = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(ResourceRightClickMenu, _Vue);

  var _super = _createSuper(ResourceRightClickMenu);

  function ResourceRightClickMenu() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ResourceRightClickMenu);

    _this = _super.apply(this, arguments);
    _this.visible = false;
    _this.resourceId = 0;
    _this.enableEdit = false;
    _this.enableOpenDiagram = false;
    _this.enableDeleteOnDiagram = false;
    _this.enableDeleteOnProduct = false;
    _this.showPositionX = 0;
    _this.showPositionY = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(ResourceRightClickMenu, [{
    key: "onClickEdit",
    value: function onClickEdit() {
      this.close();
      this.onEditResource(this.resourceId);
    }
  }, {
    key: "onClickOpenDiagram",
    value: function onClickOpenDiagram() {
      this.close();
      this.onOpenDiagramOfResourceRelate(this.resourceId);
    }
  }, {
    key: "onClickDeleteOnDiagram",
    value: function onClickDeleteOnDiagram() {
      this.close();
      this.onDeleteResourceOnDiagram(this.resourceId);
    }
  }, {
    key: "onClickDeleteOnProduct",
    value: function onClickDeleteOnProduct() {
      this.close();
      this.onDeleteResourceOnProduct(this.resourceId);
    }
  }, {
    key: "onEditResource",
    value: function onEditResource(_resourceId) {}
  }, {
    key: "onOpenDiagramOfResourceRelate",
    value: function onOpenDiagramOfResourceRelate(_resourceId) {}
  }, {
    key: "onDeleteResourceOnDiagram",
    value: function onDeleteResourceOnDiagram(_resourceId) {}
  }, {
    key: "onDeleteResourceOnProduct",
    value: function onDeleteResourceOnProduct(_resourceId) {}
  }, {
    key: "show",
    value: function show(resource, diagram, x, y) {
      this.resourceId = resource.resourceId;
      this.analyzeEnableMenu(resource, diagram);
      this.showPositionX = x;
      this.showPositionY = y;
      this.visible = true;
    }
  }, {
    key: "analyzeEnableMenu",
    value: function analyzeEnableMenu(resource, diagram) {
      var onDiagram = diagram.existsResourceOnPlacementOf(resource.resourceId);
      this.enableEdit = resource.deletable;
      this.enableOpenDiagram = Product["a" /* default */].hasCorrespondingDiagramTypeOf(resource);
      this.enableDeleteOnDiagram = onDiagram;
      this.enableDeleteOnProduct = resource.deletable;
    }
  }, {
    key: "close",
    value: function close() {
      this.visible = false;
    }
  }]);

  return ResourceRightClickMenu;
}(lib["Vue"]);

__decorate([Object(lib["Emit"])('onEditResource')], ResourceRightClickMenuvue_type_script_lang_ts_ResourceRightClickMenu.prototype, "onEditResource", null);

__decorate([Object(lib["Emit"])('onOpenDiagramOfResourceRelate')], ResourceRightClickMenuvue_type_script_lang_ts_ResourceRightClickMenu.prototype, "onOpenDiagramOfResourceRelate", null);

__decorate([Object(lib["Emit"])('onDeleteResourceOnDiagram')], ResourceRightClickMenuvue_type_script_lang_ts_ResourceRightClickMenu.prototype, "onDeleteResourceOnDiagram", null);

__decorate([Object(lib["Emit"])('onDeleteResourceOnProduct')], ResourceRightClickMenuvue_type_script_lang_ts_ResourceRightClickMenu.prototype, "onDeleteResourceOnProduct", null);

ResourceRightClickMenuvue_type_script_lang_ts_ResourceRightClickMenu = __decorate([lib["Component"]], ResourceRightClickMenuvue_type_script_lang_ts_ResourceRightClickMenu);
/* harmony default export */ var ResourceRightClickMenuvue_type_script_lang_ts_ = (ResourceRightClickMenuvue_type_script_lang_ts_ResourceRightClickMenu);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/ResourceRightClickMenu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var template_ResourceRightClickMenuvue_type_script_lang_ts_ = (ResourceRightClickMenuvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(328);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/ResourceRightClickMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template_ResourceRightClickMenuvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var template_ResourceRightClickMenu = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMenu: VMenu["a" /* default */]})


/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramEditor_vue_vue_type_style_index_0_id_29ce38b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(847);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramEditor_vue_vue_type_style_index_0_id_29ce38b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramEditor_vue_vue_type_style_index_0_id_29ce38b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".diagram-pane-container[data-v-29ce38b9]{display:flex;position:absolute;height:100%;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(907);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("63c9496b", content, true, {"sourceMap":false});

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionIconGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(127);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(815);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(821);
/* harmony import */ var _components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(825);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(816);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var ConditionIconGenerator = /*#__PURE__*/function (_GenericSingleIconGen) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ConditionIconGenerator, _GenericSingleIconGen);

  var _super = _createSuper(ConditionIconGenerator);

  function ConditionIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, ConditionIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ConditionIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].条件;
    }
  }, {
    key: "generate",
    value: function generate(placement, condition, iconChar) {
      if (placement.alias) return Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ConditionIconGenerator.prototype), "generate", this).call(this, placement, condition, iconChar);
      return this.generateConditionTable(placement, condition, iconChar);
    }
  }, {
    key: "generateConditionTable",
    value: function generateConditionTable(placement, condition, iconChar) {
      var id = String(placement.resourceId);
      var label = new draw2d__WEBPACK_IMPORTED_MODULE_9___default.a.shape.basic.Label({
        text: condition.name
      });
      label.setResizeable(true);
      label.setFontColor("#FFFFFF");
      label.setBold(true);
      label.setStroke(2);
      label.setColor("#FFFFFF");
      label.setPadding(2);
      label.setBackgroundColor("#2FA3EE");
      var container = new draw2d__WEBPACK_IMPORTED_MODULE_9___default.a.shape.layout.TableLayout({
        id: id,
        x: placement.x,
        y: placement.y,
        padding: 1,
        stroke: 1
      });
      var valueLabel = new draw2d__WEBPACK_IMPORTED_MODULE_9___default.a.shape.basic.Label({
        text: condition.value
      });
      valueLabel.setResizeable(true);
      valueLabel.setPadding(2);
      valueLabel.setStroke(2);
      valueLabel.setColor("#FFFFFF");
      valueLabel.setBackgroundColor("#E8F0FC");
      container.addRow(label, valueLabel);
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_9___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 30,
        stroke: 0,
        padding: 0,
        bgColor: "none",
        alpha: 1
      });
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_9___default.a.shape.basic.Label({
        text: condition.name,
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      icon.add(name, new draw2d__WEBPACK_IMPORTED_MODULE_9___default.a.layout.locator.XYRelPortLocator({
        x: 105,
        y: 27
      }));
      container.add(icon, new _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]());
      this.makeSingleHybridPort(container);
      container.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_12__["default"]());
      return container;
    }
  }]);

  return ConditionIconGenerator;
}(_components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableTypeConditionIconGenerator; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(127);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(815);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(821);
/* harmony import */ var _components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(825);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(816);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3);













function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var TableTypeConditionIconGenerator = /*#__PURE__*/function (_GenericSingleIconGen) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TableTypeConditionIconGenerator, _GenericSingleIconGen);

  var _super = _createSuper(TableTypeConditionIconGenerator);

  function TableTypeConditionIconGenerator() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, TableTypeConditionIconGenerator);

    _this = _super.apply(this, arguments);

    _this.generateRowLabels = function (values, rowNumber) {
      return values.map(function (value, columnNumber) {
        return _this.generateColmunLabel(value, rowNumber, columnNumber);
      });
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TableTypeConditionIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"].表形式の条件;
    }
  }, {
    key: "generate",
    value: function generate(placement, tableTypeCondition, iconChar) {
      if (placement.alias) return Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(TableTypeConditionIconGenerator.prototype), "generate", this).call(this, placement, tableTypeCondition, iconChar);
      return this.generateTableTypeConditionTable(placement, tableTypeCondition, iconChar);
    }
  }, {
    key: "generateTableTypeConditionTable",
    value: function generateTableTypeConditionTable(placement, tableTypeCondition, iconChar) {
      var _this2 = this;

      var id = String(placement.resourceId);
      var container = new draw2d__WEBPACK_IMPORTED_MODULE_12___default.a.shape.layout.TableLayout({
        id: id,
        x: placement.x,
        y: placement.y,
        padding: 1,
        stroke: 1
      });
      tableTypeCondition.valuesOf().map(function (line, rowNumber) {
        return _this2.generateRowLabels(line, rowNumber);
      }).forEach(function (labels) {
        return container.addRow.apply(container, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(labels));
      });
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_12___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 30,
        stroke: 0,
        padding: 0,
        bgColor: "none",
        alpha: 1
      });
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_12___default.a.shape.basic.Label({
        text: tableTypeCondition.name,
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      icon.add(name, new draw2d__WEBPACK_IMPORTED_MODULE_12___default.a.layout.locator.XYRelPortLocator({
        x: 105,
        y: 27
      }));
      container.add(icon, new _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]());
      this.makeSingleHybridPort(container);
      container.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_15__["default"]());
      return container;
    }
  }, {
    key: "generateColmunLabel",
    value: function generateColmunLabel(value, rowNumber, columnNumber) {
      if (rowNumber === 0) return this.generateLabel(value, true, "#FFFFFF", "#2FA3EE");
      return this.generateLabel(value, columnNumber === 0, "#000000", rowNumber % 2 ? "#D1D8E5" : "#E8F0FC");
    }
  }, {
    key: "generateLabel",
    value: function generateLabel(text, bold, fontColor, backColor) {
      var label = new draw2d__WEBPACK_IMPORTED_MODULE_12___default.a.shape.basic.Label({
        text: text
      });
      label.setResizeable(true);
      label.setBold(bold);
      label.setFontColor(fontColor);
      label.setColor("#FFFFFF");
      label.setStroke(2);
      label.setPadding(2);
      label.setBackgroundColor(backColor);
      return label;
    }
  }]);

  return TableTypeConditionIconGenerator;
}(_components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CompanyIconGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(127);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _components_diagrams_icon_GenericAreaIconGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(879);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(816);
/* harmony import */ var _components_diagrams_icon_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(818);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var CompanyIconGenerator = /*#__PURE__*/function (_GenericAreaIconGener) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(CompanyIconGenerator, _GenericAreaIconGener);

  var _super = _createSuper(CompanyIconGenerator);

  function CompanyIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, CompanyIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(CompanyIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].会社;
    }
  }, {
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var icon = Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(CompanyIconGenerator.prototype), "generate", this).call(this, placement, resource, iconChar);

      icon.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_10__["default"](_components_diagrams_icon_IconZOrderLevel__WEBPACK_IMPORTED_MODULE_11__["default"].BACKGROUND_AREA));
      return icon;
    }
  }]);

  return CompanyIconGenerator;
}(_components_diagrams_icon_GenericAreaIconGenerator__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoomIconGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(127);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(815);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_diagrams_icon_GenericAreaIconGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(879);
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



/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(290);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(853);
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(141);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(13);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(207);
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(129);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











 // Components


 // Mixins


 // Directives

 // Helpers



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"])(_VInput__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], _mixins_loadable__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-slider',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"]
  },
  mixins: [_mixins_loadable__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]],
  props: {
    disabled: Boolean,
    inverseLabel: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    thumbColor: String,
    thumbLabel: {
      type: [Boolean, String],
      default: undefined,
      validator: function validator(v) {
        return typeof v === 'boolean' || v === 'always';
      }
    },
    thumbSize: {
      type: [Number, String],
      default: 32
    },
    tickLabels: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    ticks: {
      type: [Boolean, String],
      default: false,
      validator: function validator(v) {
        return typeof v === 'boolean' || v === 'always';
      }
    },
    tickSize: {
      type: [Number, String],
      default: 2
    },
    trackColor: String,
    trackFillColor: String,
    value: [Number, String],
    vertical: Boolean
  },
  data: function data() {
    return {
      app: null,
      oldValue: null,
      thumbPressed: false,
      mouseTimeout: -1,
      isFocused: false,
      isActive: false,
      noClick: false,
      startOffset: 0
    };
  },
  computed: {
    classes: function classes() {
      return _objectSpread(_objectSpread({}, _VInput__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].options.computed.classes.call(this)), {}, {
        'v-input__slider': true,
        'v-input__slider--vertical': this.vertical,
        'v-input__slider--inverse-label': this.inverseLabel
      });
    },
    internalValue: {
      get: function get() {
        return this.lazyValue;
      },
      set: function set(val) {
        val = isNaN(val) ? this.minValue : val; // Round value to ensure the
        // entire slider range can
        // be selected with step

        var value = this.roundValue(Math.min(Math.max(val, this.minValue), this.maxValue));
        if (value === this.lazyValue) return;
        this.lazyValue = value;
        this.$emit('input', value);
      }
    },
    trackTransition: function trackTransition() {
      return this.thumbPressed ? this.showTicks || this.stepNumeric ? '0.1s cubic-bezier(0.25, 0.8, 0.5, 1)' : 'none' : '';
    },
    minValue: function minValue() {
      return parseFloat(this.min);
    },
    maxValue: function maxValue() {
      return parseFloat(this.max);
    },
    stepNumeric: function stepNumeric() {
      return this.step > 0 ? parseFloat(this.step) : 0;
    },
    inputWidth: function inputWidth() {
      var inputWidth = (this.roundValue(this.internalValue) - this.minValue) / (this.maxValue - this.minValue) * 100;
      return isNaN(inputWidth) ? 0 : inputWidth;
    },
    trackFillStyles: function trackFillStyles() {
      var _ref;

      var startDir = this.vertical ? 'bottom' : 'left';
      var endDir = this.vertical ? 'top' : 'right';
      var valueDir = this.vertical ? 'height' : 'width';
      var start = this.$vuetify.rtl ? 'auto' : '0';
      var end = this.$vuetify.rtl ? '0' : 'auto';
      var value = this.isDisabled ? "calc(".concat(this.inputWidth, "% - 10px)") : "".concat(this.inputWidth, "%");
      return _ref = {
        transition: this.trackTransition
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, startDir, start), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, endDir, end), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, valueDir, value), _ref;
    },
    trackStyles: function trackStyles() {
      var _ref2;

      var startDir = this.vertical ? this.$vuetify.rtl ? 'bottom' : 'top' : this.$vuetify.rtl ? 'left' : 'right';
      var endDir = this.vertical ? 'height' : 'width';
      var start = '0px';
      var end = this.isDisabled ? "calc(".concat(100 - this.inputWidth, "% - 10px)") : "calc(".concat(100 - this.inputWidth, "%)");
      return _ref2 = {
        transition: this.trackTransition
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, startDir, start), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, endDir, end), _ref2;
    },
    showTicks: function showTicks() {
      return this.tickLabels.length > 0 || !!(!this.isDisabled && this.stepNumeric && this.ticks);
    },
    numTicks: function numTicks() {
      return Math.ceil((this.maxValue - this.minValue) / this.stepNumeric);
    },
    showThumbLabel: function showThumbLabel() {
      return !this.isDisabled && !!(this.thumbLabel || this.$scopedSlots['thumb-label']);
    },
    computedTrackColor: function computedTrackColor() {
      if (this.isDisabled) return undefined;
      if (this.trackColor) return this.trackColor;
      if (this.isDark) return this.validationState;
      return this.validationState || 'primary lighten-3';
    },
    computedTrackFillColor: function computedTrackFillColor() {
      if (this.isDisabled) return undefined;
      if (this.trackFillColor) return this.trackFillColor;
      return this.validationState || this.computedColor;
    },
    computedThumbColor: function computedThumbColor() {
      if (this.thumbColor) return this.thumbColor;
      return this.validationState || this.computedColor;
    }
  },
  watch: {
    min: function min(val) {
      var parsed = parseFloat(val);
      parsed > this.internalValue && this.$emit('input', parsed);
    },
    max: function max(val) {
      var parsed = parseFloat(val);
      parsed < this.internalValue && this.$emit('input', parsed);
    },
    value: {
      handler: function handler(v) {
        this.internalValue = v;
      }
    }
  },
  // If done in as immediate in
  // value watcher, causes issues
  // with vue-test-utils
  beforeMount: function beforeMount() {
    this.internalValue = this.value;
  },
  mounted: function mounted() {
    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || Object(_util_console__WEBPACK_IMPORTED_MODULE_24__[/* consoleWarn */ "c"])('Missing v-app or a non-body wrapping element with the [data-app] attribute', this);
  },
  methods: {
    genDefaultSlot: function genDefaultSlot() {
      var children = [this.genLabel()];
      var slider = this.genSlider();
      this.inverseLabel ? children.unshift(slider) : children.push(slider);
      children.push(this.genProgress());
      return children;
    },
    genSlider: function genSlider() {
      return this.$createElement('div', {
        class: _objectSpread({
          'v-slider': true,
          'v-slider--horizontal': !this.vertical,
          'v-slider--vertical': this.vertical,
          'v-slider--focused': this.isFocused,
          'v-slider--active': this.isActive,
          'v-slider--disabled': this.isDisabled,
          'v-slider--readonly': this.isReadonly
        }, this.themeClasses),
        directives: [{
          name: 'click-outside',
          value: this.onBlur
        }],
        on: {
          click: this.onSliderClick,
          mousedown: this.onSliderMouseDown,
          touchstart: this.onSliderMouseDown
        }
      }, this.genChildren());
    },
    genChildren: function genChildren() {
      return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isActive, this.isFocused, this.onFocus, this.onBlur)];
    },
    genInput: function genInput() {
      return this.$createElement('input', {
        attrs: _objectSpread({
          value: this.internalValue,
          id: this.computedId,
          disabled: true,
          readonly: true,
          tabindex: -1
        }, this.$attrs)
      });
    },
    genTrackContainer: function genTrackContainer() {
      var children = [this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
        staticClass: 'v-slider__track-background',
        style: this.trackStyles
      })), this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
        staticClass: 'v-slider__track-fill',
        style: this.trackFillStyles
      }))];
      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        ref: 'track'
      }, children);
    },
    genSteps: function genSteps() {
      var _this = this;

      if (!this.step || !this.showTicks) return null;
      var tickSize = parseFloat(this.tickSize);
      var range = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* createRange */ "i"])(this.numTicks + 1);
      var direction = this.vertical ? 'bottom' : this.$vuetify.rtl ? 'right' : 'left';
      var offsetDirection = this.vertical ? this.$vuetify.rtl ? 'left' : 'right' : 'top';
      if (this.vertical) range.reverse();
      var ticks = range.map(function (index) {
        var _style;

        var children = [];

        if (_this.tickLabels[index]) {
          children.push(_this.$createElement('div', {
            staticClass: 'v-slider__tick-label'
          }, _this.tickLabels[index]));
        }

        var width = index * (100 / _this.numTicks);
        var filled = _this.$vuetify.rtl ? 100 - _this.inputWidth < width : width < _this.inputWidth;
        return _this.$createElement('span', {
          key: index,
          staticClass: 'v-slider__tick',
          class: {
            'v-slider__tick--filled': filled
          },
          style: (_style = {
            width: "".concat(tickSize, "px"),
            height: "".concat(tickSize, "px")
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_style, direction, "calc(".concat(width, "% - ").concat(tickSize / 2, "px)")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_style, offsetDirection, "calc(50% - ".concat(tickSize / 2, "px)")), _style)
        }, children);
      });
      return this.$createElement('div', {
        staticClass: 'v-slider__ticks-container',
        class: {
          'v-slider__ticks-container--always-show': this.ticks === 'always' || this.tickLabels.length > 0
        }
      }, ticks);
    },
    genThumbContainer: function genThumbContainer(value, valueWidth, isActive, isFocused, onFocus, onBlur) {
      var ref = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'thumb';
      var children = [this.genThumb()];
      var thumbLabelContent = this.genThumbLabelContent(value);
      this.showThumbLabel && children.push(this.genThumbLabel(thumbLabelContent));
      return this.$createElement('div', this.setTextColor(this.computedThumbColor, {
        ref: ref,
        key: ref,
        staticClass: 'v-slider__thumb-container',
        class: {
          'v-slider__thumb-container--active': isActive,
          'v-slider__thumb-container--focused': isFocused,
          'v-slider__thumb-container--show-label': this.showThumbLabel
        },
        style: this.getThumbContainerStyles(valueWidth),
        attrs: {
          role: 'slider',
          tabindex: this.isDisabled ? -1 : this.$attrs.tabindex ? this.$attrs.tabindex : 0,
          'aria-label': this.$attrs['aria-label'] || this.label,
          'aria-valuemin': this.min,
          'aria-valuemax': this.max,
          'aria-valuenow': this.internalValue,
          'aria-readonly': String(this.isReadonly),
          'aria-orientation': this.vertical ? 'vertical' : 'horizontal'
        },
        on: {
          focus: onFocus,
          blur: onBlur,
          keydown: this.onKeyDown
        }
      }), children);
    },
    genThumbLabelContent: function genThumbLabelContent(value) {
      return this.$scopedSlots['thumb-label'] ? this.$scopedSlots['thumb-label']({
        value: value
      }) : [this.$createElement('span', [String(value)])];
    },
    genThumbLabel: function genThumbLabel(content) {
      var size = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* convertToUnit */ "h"])(this.thumbSize);
      var transform = this.vertical ? "translateY(20%) translateY(".concat(Number(this.thumbSize) / 3 - 1, "px) translateX(55%) rotate(135deg)") : "translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_19__[/* VScaleTransition */ "d"], {
        props: {
          origin: 'bottom center'
        }
      }, [this.$createElement('div', {
        staticClass: 'v-slider__thumb-label-container',
        directives: [{
          name: 'show',
          value: this.isFocused || this.isActive || this.thumbLabel === 'always'
        }]
      }, [this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb-label',
        style: {
          height: size,
          width: size,
          transform: transform
        }
      }), [this.$createElement('div', content)])])]);
    },
    genThumb: function genThumb() {
      return this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb'
      }));
    },
    getThumbContainerStyles: function getThumbContainerStyles(width) {
      var direction = this.vertical ? 'top' : 'left';
      var value = this.$vuetify.rtl ? 100 - width : width;
      value = this.vertical ? 100 - value : value;
      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
        transition: this.trackTransition
      }, direction, "".concat(value, "%"));
    },
    onSliderMouseDown: function onSliderMouseDown(e) {
      var _this2 = this;

      var _e$target;

      e.preventDefault();
      this.oldValue = this.internalValue;
      this.isActive = true;

      if ((_e$target = e.target) != null && _e$target.matches('.v-slider__thumb-container, .v-slider__thumb-container *')) {
        this.thumbPressed = true;
        var domRect = e.target.getBoundingClientRect();
        var touch = 'touches' in e ? e.touches[0] : e;
        this.startOffset = this.vertical ? touch.clientY - (domRect.top + domRect.height / 2) : touch.clientX - (domRect.left + domRect.width / 2);
      } else {
        this.startOffset = 0;
        window.clearTimeout(this.mouseTimeout);
        this.mouseTimeout = window.setTimeout(function () {
          _this2.thumbPressed = true;
        }, 300);
      }

      var mouseUpOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* passiveSupported */ "z"] ? {
        passive: true,
        capture: true
      } : true;
      var mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* passiveSupported */ "z"] ? {
        passive: true
      } : false;
      var isTouchEvent = ('touches' in e);
      this.onMouseMove(e);
      this.app.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', this.onMouseMove, mouseMoveOptions);
      Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* addOnceEventListener */ "a"])(this.app, isTouchEvent ? 'touchend' : 'mouseup', this.onSliderMouseUp, mouseUpOptions);
      this.$emit('start', this.internalValue);
    },
    onSliderMouseUp: function onSliderMouseUp(e) {
      e.stopPropagation();
      window.clearTimeout(this.mouseTimeout);
      this.thumbPressed = false;
      var mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* passiveSupported */ "z"] ? {
        passive: true
      } : false;
      this.app.removeEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
      this.app.removeEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
      this.$emit('mouseup', e);
      this.$emit('end', this.internalValue);

      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* deepEqual */ "k"])(this.oldValue, this.internalValue)) {
        this.$emit('change', this.internalValue);
        this.noClick = true;
      }

      this.isActive = false;
    },
    onMouseMove: function onMouseMove(e) {
      if (e.type === 'mousemove') {
        this.thumbPressed = true;
      }

      this.internalValue = this.parseMouseMove(e);
    },
    onKeyDown: function onKeyDown(e) {
      if (!this.isInteractive) return;
      var value = this.parseKeyDown(e, this.internalValue);
      if (value == null || value < this.minValue || value > this.maxValue) return;
      this.internalValue = value;
      this.$emit('change', value);
    },
    onSliderClick: function onSliderClick(e) {
      if (this.noClick) {
        this.noClick = false;
        return;
      }

      var thumb = this.$refs.thumb;
      thumb.focus();
      this.onMouseMove(e);
      this.$emit('change', this.internalValue);
    },
    onBlur: function onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    onFocus: function onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    parseMouseMove: function parseMouseMove(e) {
      var start = this.vertical ? 'top' : 'left';
      var length = this.vertical ? 'height' : 'width';
      var click = this.vertical ? 'clientY' : 'clientX';

      var _this$$refs$track$get = this.$refs.track.getBoundingClientRect(),
          trackStart = _this$$refs$track$get[start],
          trackLength = _this$$refs$track$get[length];

      var clickOffset = 'touches' in e ? e.touches[0][click] : e[click]; // It is possible for left to be NaN, force to number

      var clickPos = Math.min(Math.max((clickOffset - trackStart - this.startOffset) / trackLength, 0), 1) || 0;
      if (this.vertical) clickPos = 1 - clickPos;
      if (this.$vuetify.rtl) clickPos = 1 - clickPos;
      return parseFloat(this.min) + clickPos * (this.maxValue - this.minValue);
    },
    parseKeyDown: function parseKeyDown(e, value) {
      if (!this.isInteractive) return;
      var pageup = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].pageup,
          pagedown = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].pagedown,
          end = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].end,
          home = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].home,
          left = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].left,
          right = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].right,
          down = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].down,
          up = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].up;
      if (![pageup, pagedown, end, home, left, right, down, up].includes(e.keyCode)) return;
      e.preventDefault();
      var step = this.stepNumeric || 1;
      var steps = (this.maxValue - this.minValue) / step;

      if ([left, right, down, up].includes(e.keyCode)) {
        var increase = this.$vuetify.rtl ? [left, up] : [right, up];
        var direction = increase.includes(e.keyCode) ? 1 : -1;
        var multiplier = e.shiftKey ? 3 : e.ctrlKey ? 2 : 1;
        value = value + direction * step * multiplier;
      } else if (e.keyCode === home) {
        value = this.minValue;
      } else if (e.keyCode === end) {
        value = this.maxValue;
      } else {
        var _direction = e.keyCode === pagedown ? 1 : -1;

        value = value - _direction * step * (steps > 100 ? steps / 10 : 10);
      }

      return value;
    },
    roundValue: function roundValue(value) {
      if (!this.stepNumeric) return value; // Format input value using the same number
      // of decimals places as in the step prop

      var trimmedStep = this.step.toString().trim();
      var decimals = trimmedStep.indexOf('.') > -1 ? trimmedStep.length - trimmedStep.indexOf('.') - 1 : 0;
      var offset = this.minValue % this.stepNumeric;
      var newValue = Math.round((value - offset) / this.stepNumeric) * this.stepNumeric + offset;
      return parseFloat(Math.min(newValue, this.maxValue).toFixed(decimals));
    }
  }
}));

/***/ }),

/***/ 922:
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
var VBtnToggle = __webpack_require__(857);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(142);

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
var colorable = __webpack_require__(40);

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

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessUseCaseIconGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(127);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _components_diagrams_icon_GenericTextEllipseIconGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(841);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var BusinessUseCaseIconGenerator = /*#__PURE__*/function (_GenericTextEllipseIc) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(BusinessUseCaseIconGenerator, _GenericTextEllipseIc);

  var _super = _createSuper(BusinessUseCaseIconGenerator);

  function BusinessUseCaseIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, BusinessUseCaseIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessUseCaseIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].ビジネスユースケース;
    }
  }, {
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var icon = Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(BusinessUseCaseIconGenerator.prototype), "generate", this).call(this, placement, resource, iconChar);

      icon.setBackgroundColor("#FFDFDF");
      return icon;
    }
  }]);

  return BusinessUseCaseIconGenerator;
}(_components_diagrams_icon_GenericTextEllipseIconGenerator__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/rdra20/businessusecasediagram/BusinessUseCaseDiagramEditor.vue?vue&type=template&id=1bc6a116&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DiagramEditor',{attrs:{"diagramId":_vm.diagramId,"allResources":_vm.allResources,"lastPropertiesUpdatedDiagramId":_vm.lastPropertiesUpdatedDiagramId,"eventAnalyzer":_vm.eventAnalyzer,"iconGenerators":_vm.iconGenerators},on:{"onUpdateResources":_vm.onUpdateResources,"onOpendDiagramPropertiesEditor":_vm.onOpendDiagramPropertiesEditor,"onOpenDiagramOfResourceRelate":_vm.onOpenDiagramOfResourceRelate,"onRenamedResource":_vm.onRenamedResource}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/rdra20/businessusecasediagram/BusinessUseCaseDiagramEditor.vue?vue&type=template&id=1bc6a116&

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
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue + 5 modules
var DiagramEditor = __webpack_require__(831);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/EventAnalyzer.ts
var EventAnalyzer = __webpack_require__(827);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/events/GenericConnectPortsEvents.ts
var GenericConnectPortsEvents = __webpack_require__(826);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents.ts
var GenericDeleteShapeEvents = __webpack_require__(828);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/events/GenericMoveShapeEvents.ts
var GenericMoveShapeEvents = __webpack_require__(829);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/events/GenericResizeShapeEvents.ts
var GenericResizeShapeEvents = __webpack_require__(830);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/BusinessUseCaseIconGenerator.ts
var BusinessUseCaseIconGenerator = __webpack_require__(926);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/CompanyIconGenerator.ts
var CompanyIconGenerator = __webpack_require__(918);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/RoomIconGenerator.ts
var RoomIconGenerator = __webpack_require__(919);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/ConditionIconGenerator.ts
var ConditionIconGenerator = __webpack_require__(908);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/TableTypeConditionIconGenerator.ts
var TableTypeConditionIconGenerator = __webpack_require__(909);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/rdra20/businessusecasediagram/BusinessUseCaseDiagramEditor.vue?vue&type=script&lang=ts&







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














var BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(BusinessUseCaseDiagramEditor, _Vue);

  var _super = _createSuper(BusinessUseCaseDiagramEditor);

  function BusinessUseCaseDiagramEditor() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BusinessUseCaseDiagramEditor);

    // Props
    _this = _super.apply(this, arguments); // This class fields;

    _this.eventAnalyzer = new EventAnalyzer["default"]([new GenericDeleteShapeEvents["default"](), new GenericConnectPortsEvents["default"](), new GenericMoveShapeEvents["default"](), new GenericResizeShapeEvents["default"]()]);
    _this.iconGenerators = [new BusinessUseCaseIconGenerator["default"](), new CompanyIconGenerator["default"](), new RoomIconGenerator["default"](), new ConditionIconGenerator["default"](), new TableTypeConditionIconGenerator["default"]()];
    return _this;
  } // Emits


  Object(createClass["a" /* default */])(BusinessUseCaseDiagramEditor, [{
    key: "onUpdateResources",
    value: function onUpdateResources() {}
  }, {
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(_diagramId) {}
  }, {
    key: "onOpenDiagramOfResourceRelate",
    value: function onOpenDiagramOfResourceRelate(_resourceId) {}
  }, {
    key: "onRenamedResource",
    value: function onRenamedResource(_src, _dest) {}
  }]);

  return BusinessUseCaseDiagramEditor;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor.prototype, "diagramId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor.prototype, "allResources", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor.prototype, "lastPropertiesUpdatedDiagramId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onUpdateResources')], BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor.prototype, "onUpdateResources", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onOpendDiagramPropertiesEditor')], BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor.prototype, "onOpendDiagramPropertiesEditor", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onOpenDiagramOfResourceRelate')], BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor.prototype, "onOpenDiagramOfResourceRelate", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onRenamedResource')], BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor.prototype, "onRenamedResource", null);

BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    DiagramEditor: DiagramEditor["default"]
  }
})], BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor);
/* harmony default export */ var BusinessUseCaseDiagramEditorvue_type_script_lang_ts_ = (BusinessUseCaseDiagramEditorvue_type_script_lang_ts_BusinessUseCaseDiagramEditor);
// CONCATENATED MODULE: ./src/components/diagrams/editor/rdra20/businessusecasediagram/BusinessUseCaseDiagramEditor.vue?vue&type=script&lang=ts&
 /* harmony default export */ var businessusecasediagram_BusinessUseCaseDiagramEditorvue_type_script_lang_ts_ = (BusinessUseCaseDiagramEditorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// CONCATENATED MODULE: ./src/components/diagrams/editor/rdra20/businessusecasediagram/BusinessUseCaseDiagramEditor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  businessusecasediagram_BusinessUseCaseDiagramEditorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var businessusecasediagram_BusinessUseCaseDiagramEditor = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);