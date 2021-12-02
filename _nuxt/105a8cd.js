(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68,19,20,21,22,23,24,25,26,36,57,61,63,64,73,76,80,81,82,83,84,85,86,87],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


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

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/CoreResourceEditDialog.vue?vue&type=template&id=5d2b2ebe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('PropertiesSettingDialog',{attrs:{"id":_vm.resource,"consent":_vm.consent,"title":_vm.title,"subTitle":_vm.subTitle,"iconKey":_vm.iconKey,"width":_vm.dialogWidth,"ignoreEscKey":_vm.ignoreEscKey,"ignoreEnterKey":_vm.ignoreEnterKey},on:{"onClose":_vm.onClose,"onClickOk":_vm.onClickUpdateExecute,"onShow":_vm.onShow},scopedSlots:_vm._u([{key:"inputPart",fn:function(){return [_c('v-container',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"名前","counter":"","autofocus":!_vm.notFocusSetName,"rules":[_vm.validateName],"maxlength":_vm.nameMaxLength},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1)],1),_vm._v(" "),_vm._t("customInputFields"),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-textarea',{attrs:{"counter":"","filled":"","label":"備考・メモ","rows":"2","no-resize":"","max":_vm.descriptionMaxLength,"rules":[_vm.validateDescription]},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1)],1)],2)]},proxy:true}],null,true)})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/CoreResourceEditDialog.vue?vue&type=template&id=5d2b2ebe&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/PropertiesSettingDialog.vue + 4 modules
var PropertiesSettingDialog = __webpack_require__(702);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(2);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(65);

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

var CoreResourceEditDialog_1;





var CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog = CoreResourceEditDialog_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(CoreResourceEditDialog, _Vue);

  var _super = _createSuper(CoreResourceEditDialog);

  function CoreResourceEditDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CoreResourceEditDialog);

    _this = _super.apply(this, arguments);
    _this.subTitle = "";
    _this.title = "";
    _this.iconKey = "";
    _this.firstCheck = false;
    _this.name = "";
    _this.description = "";
    return _this;
  }

  Object(createClass["a" /* default */])(CoreResourceEditDialog, [{
    key: "onModifyResource",
    value: function onModifyResource(resource) {}
  }, {
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "showCustomProperties",
    value: function showCustomProperties(resource) {}
  }, {
    key: "changeConsent",
    value: function changeConsent(newConsent) {}
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
      this.title = this.isAddNew() ? "".concat(type.name, " \u306E\u65B0\u898F\u4F5C\u6210") : "".concat(this.resource.name, " \u306E\u8A2D\u5B9A");
      this.subTitle = type.name;
      this.iconKey = type.iconKey;
      this.showProperties(this.resource);
      this.$nextTick(function () {
        _this2.showCustomProperties(_this2.resource);

        if (ResourceType["a" /* default */].始点終点.equals(_this2.resource.type)) _this2.description += " "; // TODO 特殊条件過ぎる。包括的にやりたい。
      });
    }
  }, {
    key: "isAddNew",
    value: function isAddNew() {
      return this.resource.resourceId === CoreResourceEditDialog_1.ID_WHEN_CREATE_NEW;
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
      var resource = this.getInputResource();
      if (resource === null) return;
      this.onModifyResource(resource);
      this.onClose();
    }
  }, {
    key: "getInputResource",
    value: function getInputResource() {
      var newResource = this.resource.with(this.name, this.description);
      if (!this.logicalValidation(newResource)) return null;
      return newResource;
    }
  }, {
    key: "logicalValidation",
    value: function logicalValidation(resource) {
      if (this.resources.existsSomeName(resource.name, resource.type)) {
        alert("\u65E2\u306B\u91CD\u8907\u3057\u305F\u540D\u524D\u306E".concat(resource.type.name, "\u304C\u5728\u308A\u307E\u3059\u3002"));
        return false;
      }

      return true;
    }
  }]);

  return CoreResourceEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.ID_WHEN_CREATE_NEW = -1;

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "resource", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "resources", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "consent", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "notFocusSetName", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "ignoreEscKey", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "ignoreEnterKey", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "dialogWidth", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "onModifyResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "onClose", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("showCustomProperties")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "showCustomProperties", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("changeConsent")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "changeConsent", null);

__decorate([Object(nuxt_property_decorator_umd["Watch"])("resource")], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog.prototype, "onChangeResource", null);

CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog = CoreResourceEditDialog_1 = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    PropertiesSettingDialog: PropertiesSettingDialog["default"]
  }
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog);
/* harmony default export */ var CoreResourceEditDialogvue_type_script_lang_ts_ = (CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog);
// CONCATENATED MODULE: ./src/components/resource/CoreResourceEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_CoreResourceEditDialogvue_type_script_lang_ts_ = (CoreResourceEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(687);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(688);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(690);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(691);

// CONCATENATED MODULE: ./src/components/resource/CoreResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_CoreResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "5d2b2ebe",
  null
  
)

/* harmony default export */ var resource_CoreResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {PropertiesSettingDialog: __webpack_require__(702).default})


/* vuetify-loader */






installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericSingleIconGenerator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(515);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(238);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _IconStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(699);







var GenericSingleIconGenerator = /*#__PURE__*/function () {
  function GenericSingleIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenericSingleIconGenerator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GenericSingleIconGenerator, [{
    key: "generate",
    value: function generate(placement, resource, iconChar) {
      var padding = 0;
      var id = String(placement.resourceId);
      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Label({
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
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.shape.basic.Label({
        text: resource.name,
        stroke: 0,
        padding: padding,
        resizable: false,
        selectable: false
      });
      icon.createPort("hybrid", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.CenterLocator()); // PortからではなくFigureから線が出ているように見せるため、アンカー設定。

      var port = icon.getPorts().last();
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.anchor.ChopboxConnectionAnchor(icon);
      port.setConnectionAnchor(anchor);
      icon.add(name, new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.layout.locator.BottomLocator());
      icon.setUserData(new _IconStatus__WEBPACK_IMPORTED_MODULE_5__["default"](false));
      return icon;
    }
  }]);

  return GenericSingleIconGenerator;
}();



/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PropertiesSettingDialog.vue?vue&type=template&id=6576dd9c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":_vm.width,"value":_vm.id},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.onKeyEsc.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onKeyEnter.apply(null, arguments)}]}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v(_vm._s(_vm.iconKey))]),_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")],1),_vm._v(" "),_c('v-card-subtitle',{staticClass:"text-right"},[_vm._v(_vm._s(_vm.subTitle))]),_vm._v(" "),_c('v-card-text',[_vm._t("inputPart")],2),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("キャンセル")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","disabled":!_vm.consent,"color":"primary"},on:{"click":_vm.onClickOk}},[_vm._v("OK")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PropertiesSettingDialog.vue?vue&type=template&id=6576dd9c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

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
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(674);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(290);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(686);

// CONCATENATED MODULE: ./src/components/PropertiesSettingDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertiesSettingDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "6576dd9c",
  null
  
)

/* harmony default export */ var components_PropertiesSettingDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ get_get; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(getPrototypeOf["a" /* default */])(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js

function get_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    get_get = Reflect.get;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return get_get(target, property, receiver || target);
}

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopLeftLocator; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(238);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * draw2dのToLocatorが「上に付くが、横位置は真ん中に固定」なので、
 * 「上について横位置は左端」というロケータが欲しくて、自力で実装したもの。
 */

var TopLeftLocator = /*#__PURE__*/function (_draw2d$layout$locato) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TopLeftLocator, _draw2d$layout$locato);

  var _super = _createSuper(TopLeftLocator);

  function TopLeftLocator(attr, setter, getter) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, TopLeftLocator);

    _this = _super.call(this, attr, setter, getter);
    _this.NAME = 'draw2d.layout.locator.TopLeftLocator';
    _this.padding = 0;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(TopLeftLocator, [{
    key: "relocate",
    value: function relocate(index, target) {
      var targetBoundingBox = target.getBoundingBox();
      var y = 0;
      if (!(target instanceof draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.Port)) y = -targetBoundingBox.h - 2;
      target.setPosition(0, y);
    }
  }]);

  return TopLeftLocator;
}(draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.layout.locator.TopLocator);



/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(726);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(25).default
var update = add("3a9e3d91", content, true, {"sourceMap":false});

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(728);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(25).default
var update = add("479762b0", content, true, {"sourceMap":false});

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(730);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(25).default
var update = add("d6cf6c78", content, true, {"sourceMap":false});

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(740);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(25).default
var update = add("4d49831c", content, true, {"sourceMap":false});

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericConnectPortsEvents; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var _domain_relation_Relation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(306);












function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var GenericConnectPortsEvents = /*#__PURE__*/function () {
  function GenericConnectPortsEvents() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this, GenericConnectPortsEvents);

    this.eventGists = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(GenericConnectPortsEvents, [{
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
          var relation = _domain_relation_Relation__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].prototypeOf("", srcResourceId, distResourceId);

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
          var srcResourceId = parseInt((_a = eventGist.source) === null || _a === void 0 ? void 0 : _a.getParent().id, 10);
          var distResourceId = parseInt((_b = eventGist.target) === null || _b === void 0 ? void 0 : _b.getParent().id, 10);
          if (!srcResourceId || !distResourceId) continue;
          var connection = eventGist.connection;
          connection.onContextMenu = view.onClickConnectorOnCanvas;
          var original = _domain_relation_Relation__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].prototypeOf(connection.id, srcResourceId, distResourceId);
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
    value: function customizeRelation(original, product) {
      return original;
    }
  }]);

  return GenericConnectPortsEvents;
}();



/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventAnalyzer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(309);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _AnalyzeResutEvents__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(750);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }















var EventAnalyzer = /*#__PURE__*/function () {
  function EventAnalyzer(eventsOfTypeTemplates) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, EventAnalyzer);

    this.eventsOfTypeTemplates = eventsOfTypeTemplates;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(EventAnalyzer, [{
    key: "analyze",
    value: function analyze(targetCommand) {
      console.log('---- analyzeEvents start ----');
      var eventGists = this.analyzeEventGists(targetCommand);
      eventGists.forEach(function (i) {
        return console.log(i);
      });
      console.log('---- analyzeEvents end ----');
      if (eventGists.length === 0) return _AnalyzeResutEvents__WEBPACK_IMPORTED_MODULE_14__["default"].nothing();
      var eventsOfTypeMap = {};
      this.eventsOfTypeTemplates.forEach(function (t) {
        return eventsOfTypeMap[t.eventType()] = t.prototype();
      });
      eventGists.filter(function (eventGist) {
        return eventsOfTypeMap[eventGist.eventType];
      }).forEach(function (eventGist) {
        return eventsOfTypeMap[eventGist.eventType].eventGists.push(eventGist);
      });
      var result = Object.values(eventsOfTypeMap).filter(function (eventsOfType) {
        return eventsOfType.eventGists.length > 0;
      });
      return new _AnalyzeResutEvents__WEBPACK_IMPORTED_MODULE_14__["default"](result);
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

      var _iterator = _createForOfIteratorHelper(targetCommand.commands.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var subCommand = _step.value;
          var nestedEventGists = this.recursiveAnalyzeEvent(subCommand, rootCommand);

          var _iterator2 = _createForOfIteratorHelper(nestedEventGists),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var nested = _step2.value;
              results.push(nested);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return results;
    }
  }]);

  return EventAnalyzer;
}();



/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericDeleteShapeEvents; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FigureAnalyzer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(751);







var GenericDeleteShapeEvents = /*#__PURE__*/function () {
  function GenericDeleteShapeEvents() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenericDeleteShapeEvents);

    this.eventGists = [];
    this.figureAnalyzer = new _FigureAnalyzer__WEBPACK_IMPORTED_MODULE_5__["default"]();
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
    value: function validate(diagram, product, view) {
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
    value: function apply(diagram, product, view) {
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

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericMoveShapeEvents; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);














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
    value: function validate(diagram, product, view) {
      return this.validTargetFigures().length > 0;
    }
  }, {
    key: "apply",
    value: function apply(diagram, product, view) {
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

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericResizeShapeEvents; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);














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
    value: function validate(diagram, product, view) {
      return true;
    }
  }, {
    key: "apply",
    value: function apply(diagram, product, view) {
      console.log('まず、来てるのか');
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

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/DiagramEditor.vue?vue&type=template&id=9d44e614&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"diagram-pain-container"},[_c('TwoPainWithSlideBarLayout',{attrs:{"adsorptionLeftWhenDoubleClick":"true","defaultLeftPainWidth":"80%"},scopedSlots:_vm._u([{key:"leftPain",fn:function(){return [_c('DiagramCanvas',{attrs:{"diagramId":_vm.diagramId,"product":_vm.product,"usedResouceIds":_vm.usedResouceIds,"allResourcesOnCurrentProduct":_vm.allResourcesOnCurrentProduct,"lastPropertiesUpdatedDiagramId":_vm.lastPropertiesUpdatedDiagramId,"iconMap":_vm.iconMap,"eventAnalyzer":_vm.eventAnalyzer,"iconGenerators":_vm.iconGenerators},on:{"onUpdateResources":_vm.onUpdateResources,"onMergePlacement":_vm.onMergePlacement,"onOpendDiagramPropertiesEditor":_vm.onOpendDiagramPropertiesEditor,"onShowWarnBar":_vm.onShowWarnBar}})]},proxy:true},{key:"rightPain",fn:function(){return [_c('ResourceParet',{attrs:{"diagramId":_vm.diagramId,"allResourcesOnCurrentProduct":_vm.allResourcesOnCurrentProduct,"usedResouceIds":_vm.usedResouceIds,"product":_vm.product},on:{"onDeleteResourceOnDiagram":_vm.onDeleteResourceOnDiagram,"onDeleteResourceOnProduct":_vm.onDeleteResourceOnProduct}})]},proxy:true}])}),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":"2000"},scopedSlots:_vm._u([{key:"action",fn:function(ref){
var attrs = ref.attrs;
return [_c('v-btn',_vm._b({attrs:{"color":"blue","text":""},on:{"click":function($event){_vm.warnBar = false}}},'v-btn',attrs,false),[_vm._v("Close")])]}}]),model:{value:(_vm.warnBar),callback:function ($$v) {_vm.warnBar=$$v},expression:"warnBar"}},[_vm._v("\n    "+_vm._s(_vm.warnMessage)+"\n    ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue?vue&type=template&id=9d44e614&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(766);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__(767);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__(768);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__(769);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__(770);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__(771);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__(772);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__(773);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__(774);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__(775);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__(776);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__(777);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__(778);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__(779);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__(780);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__(781);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__(782);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/TwoPainWithSlideBarLayout.vue + 4 modules
var TwoPainWithSlideBarLayout = __webpack_require__(720);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue + 4 modules
var DiagramCanvas = __webpack_require__(753);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue + 4 modules
var ResourceParet = __webpack_require__(754);

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
    value: function onOpendDiagramPropertiesEditor(diagramId) {}
  }, {
    key: "created",
    value: function created() {
      this.product = this.getCurrentProduct();
      var diagramId = this.diagramId;
    } // Vue events(life cycle events)

  }, {
    key: "mounted",
    value: function mounted() {
      var diagram = this.product.diagrams.of(this.diagramId);
      this.intializeIconCharMap(diagram);
    }
  }, {
    key: "onShowWarnBar",
    value: function onShowWarnBar(text) {
      this.warnMessage = text;
      this.warnBar = true;
    } // children component events.

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
    } // private methods.

  }, {
    key: "deleteResourceOnDiagram",
    value: function deleteResourceOnDiagram(resourceId) {
      var product = this.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      var resource = product.resources.of(resourceId);
      if (!resource) return null;
      if (!this.confirmResourceDelete([resourceId], diagram)) return null;
      var modifiedDiagram = diagram.removeResouceOf(resource);
      var diagrams = product.diagrams.meage(modifiedDiagram);
      var modifiedProduct = product.with(diagrams);
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
    key: "getCurrentProduct",
    value: function getCurrentProduct() {
      return this.repository.getCurrentProduct();
    }
  }, {
    key: "deleteResourceOnProduct",
    value: function deleteResourceOnProduct(resourceId) {
      var product = this.getCurrentProduct();
      var resource = product.resources.of(resourceId);
      if (!resource) return;
      var usedCount = product.diagrams.countOfUsingOf(resource);

      if (usedCount > 0) {
        var message = "\u300C".concat(resource.name, "\u300D\u306F\u3001\u73FE\u5728 ").concat(usedCount, "\u500B \u306E\u30C0\u30A4\u30A2\u30B0\u30E9\u30E0\u3067\u53C2\u7167\u3055\u308C\u3066\u3044\u307E\u3059\u3002\n") + "削除する場合、それらのダイアログのアイコンや関連のすべては削除されます。\n" + "".concat(resource.name, " \u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\u3002");
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
    key: "dumpDiagram",
    value: function dumpDiagram(diagram, prefix) {
      console.log("---- ".concat(prefix, " Diagram\u60C5\u5831 start ----"));
      diagram.placements.forEach(function (i) {
        return console.log("\u4F4D\u7F6E;".concat(i.resourceId));
      });
      diagram.relations.forEach(function (i) {
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
})], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "allResourcesOnCurrentProduct", void 0);

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

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], DiagramEditorvue_type_script_lang_ts_DiagramEditor.prototype, "repository", void 0);

DiagramEditorvue_type_script_lang_ts_DiagramEditor = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    TwoPainWithSlideBarLayout: TwoPainWithSlideBarLayout["default"],
    DiagramCanvas: DiagramCanvas["default"],
    ResourceParet: ResourceParet["default"]
  }
})], DiagramEditorvue_type_script_lang_ts_DiagramEditor);
/* harmony default export */ var DiagramEditorvue_type_script_lang_ts_ = (DiagramEditorvue_type_script_lang_ts_DiagramEditor);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue?vue&type=script&lang=ts&
 /* harmony default export */ var template_DiagramEditorvue_type_script_lang_ts_ = (DiagramEditorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue?vue&type=style&index=0&id=9d44e614&scoped=true&lang=css&
var DiagramEditorvue_type_style_index_0_id_9d44e614_scoped_true_lang_css_ = __webpack_require__(755);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(898);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template_DiagramEditorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "9d44e614",
  null
  
)

/* harmony default export */ var template_DiagramEditor = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {TwoPainWithSlideBarLayout: __webpack_require__(720).default})


/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VSnackbar: VSnackbar["a" /* default */]})


/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/ResourceEditDialog.vue?vue&type=template&id=240a6eba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('StandardResourceEditDialog',{attrs:{"resource":_vm.targetStandaerdResource,"resources":_vm.latestResources},on:{"onModifyResource":_vm.onModifyStandardResource,"onClose":_vm.onCloseStandardResourceEditDialog}}),_vm._v(" "),_c('HasContentResourceEditDialog',{attrs:{"resource":_vm.targetHasContentResource,"resources":_vm.latestResources},on:{"onModifyResource":_vm.onModifyHasContentResource,"onClose":_vm.onCloseHasContentResourceEditDialog}}),_vm._v(" "),_c('VariationEditDialog',{attrs:{"resource":_vm.targetVariation,"resources":_vm.latestResources},on:{"onModifyResource":_vm.onModifyVariation,"onClose":_vm.onCloseVariationEditDialog}}),_vm._v(" "),_c('ConditionEditDialog',{attrs:{"resource":_vm.targetCondition,"resources":_vm.latestResources},on:{"onModifyResource":_vm.onModifyCondition,"onClose":_vm.onCloseConditionEditDialog}}),_vm._v(" "),_c('TableTypeConditionEditDialog',{attrs:{"resource":_vm.targetTableTypeCondition,"resources":_vm.latestResources},on:{"onModifyResource":_vm.onModifyTableTypeCondition,"onClose":_vm.onCloseTableTypeConditionEditDialog}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/ResourceEditDialog.vue?vue&type=template&id=240a6eba&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/domain/resource/HasContentResource.ts
var HasContentResource = __webpack_require__(95);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(700);

// EXTERNAL MODULE: ./src/components/resource/StandardResourceEditDialog.vue + 4 modules
var StandardResourceEditDialog = __webpack_require__(734);

// EXTERNAL MODULE: ./src/components/resource/HasContentResourceEditDialog.vue + 4 modules
var HasContentResourceEditDialog = __webpack_require__(735);

// EXTERNAL MODULE: ./src/components/resource/VariationEditDialog.vue + 4 modules
var VariationEditDialog = __webpack_require__(736);

// EXTERNAL MODULE: ./src/domain/resource/Variation.ts
var Variation = __webpack_require__(177);

// EXTERNAL MODULE: ./src/components/resource/ConditionEditDialog.vue + 4 modules
var ConditionEditDialog = __webpack_require__(737);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(176);

// EXTERNAL MODULE: ./src/domain/resource/TableTypeCondition.ts
var TableTypeCondition = __webpack_require__(129);

// EXTERNAL MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue + 4 modules
var TableTypeConditionEditDialog = __webpack_require__(738);

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
    _this.latestResources = null;
    _this.targetStandaerdResource = null;
    _this.targetHasContentResource = null;
    _this.targetVariation = null;
    _this.targetCondition = null;
    _this.targetTableTypeCondition = null;
    return _this;
  }

  Object(createClass["a" /* default */])(ResourceEditDialog, [{
    key: "onUpdatedResource",
    value: function onUpdatedResource(resource) {}
  }, {
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "onChangeResourceId",
    value: function onChangeResourceId() {
      if (!this.resourceId) return;
      var id = Number(this.resourceId);
      if (id !== 0) this.onShow();
    }
  }, {
    key: "onShow",
    value: function onShow() {
      var resources = this.loadResources();
      if (!resources) return;
      var resource = this.getTargetResource(resources);
      this.latestResources = resources; // リソース別エディタ切り替え判定

      if (resource instanceof Variation["a" /* default */]) {
        this.targetVariation = resource;
        return;
      }

      if (resource instanceof Condition["a" /* default */]) {
        this.targetCondition = resource;
        return;
      }

      if (resource instanceof TableTypeCondition["a" /* default */]) {
        this.targetTableTypeCondition = resource;
        return;
      }

      if (resource instanceof HasContentResource["a" /* default */]) {
        this.targetHasContentResource = resource;
        return;
      }

      this.targetStandaerdResource = resource;
    }
  }, {
    key: "onModifyStandardResource",
    value: function onModifyStandardResource(resource) {
      var registerd = this.registerResoruce(resource);
      this.onUpdatedResource(registerd);
    }
  }, {
    key: "onCloseStandardResourceEditDialog",
    value: function onCloseStandardResourceEditDialog() {
      this.targetStandaerdResource = null;
      this.onClose();
    }
  }, {
    key: "onModifyHasContentResource",
    value: function onModifyHasContentResource(resource) {
      var registerd = this.registerResoruce(resource);
      this.onUpdatedResource(registerd);
    }
  }, {
    key: "onCloseHasContentResourceEditDialog",
    value: function onCloseHasContentResourceEditDialog() {
      this.targetHasContentResource = null;
      this.onClose();
    }
  }, {
    key: "onModifyVariation",
    value: function onModifyVariation(resource) {
      var registerd = this.registerResoruce(resource);
      this.onUpdatedResource(registerd);
    }
  }, {
    key: "onCloseVariationEditDialog",
    value: function onCloseVariationEditDialog() {
      this.targetVariation = null;
      this.onClose();
    }
  }, {
    key: "onModifyCondition",
    value: function onModifyCondition(resource) {
      var registerd = this.registerResoruce(resource);
      this.onUpdatedResource(registerd);
    }
  }, {
    key: "onCloseConditionEditDialog",
    value: function onCloseConditionEditDialog() {
      this.targetCondition = null;
      this.onClose();
    }
  }, {
    key: "onModifyTableTypeCondition",
    value: function onModifyTableTypeCondition(resource) {
      var registerd = this.registerResoruce(resource);
      this.onUpdatedResource(registerd);
    }
  }, {
    key: "onCloseTableTypeConditionEditDialog",
    value: function onCloseTableTypeConditionEditDialog() {
      this.targetTableTypeCondition = null;
      this.onClose();
    }
  }, {
    key: "isAddNew",
    value: function isAddNew() {
      return this.resourceId === CoreResourceEditDialog["default"].ID_WHEN_CREATE_NEW;
    }
  }, {
    key: "getTargetResource",
    value: function getTargetResource(resources) {
      if (this.isAddNew()) return resources.prototypeResourceOf(this.resourceType).renewId(CoreResourceEditDialog["default"].ID_WHEN_CREATE_NEW);
      return resources.of(this.resourceId);
    }
  }, {
    key: "loadResources",
    value: function loadResources() {
      var _a;

      var product = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.getCurrentProduct();
      if (!product) return null;
      return product.resources;
    }
  }, {
    key: "registerResoruce",
    value: function registerResoruce(resource) {
      var _a, _b;

      var product = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.getCurrentProduct();
      if (!product) return resource;
      var newResource = resource;

      if (this.isAddNew()) {
        newResource = newResource.renewId(product.resourceIdSequence);
        product = product.moveNextResourceIdSequence();
      }

      var addedResources = product.resources.meage(newResource);
      product = product.withResources(addedResources);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.registerCurrentProduct(product);
      return newResource;
    }
  }]);

  return ResourceEditDialog;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "resourceId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "resourceType", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onUpdatedResource")], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "onUpdatedResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "onClose", null);

__decorate([Object(nuxt_property_decorator_umd["Watch"])("resourceId")], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "onChangeResourceId", null);

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "repository", void 0);

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
var componentNormalizer = __webpack_require__(75);

// CONCATENATED MODULE: ./src/components/resource/ResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_ResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "240a6eba",
  null
  
)

/* harmony default export */ var resource_ResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(745);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(25).default
var update = add("40a43c99", content, true, {"sourceMap":false});

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(747);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(25).default
var update = add("75d80c8f", content, true, {"sourceMap":false});

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(749);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(25).default
var update = add("3950c51e", content, true, {"sourceMap":false});

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TwoPainWithSlideBarLayout.vue?vue&type=template&id=3c1f481d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{staticClass:"text-center"},[_c('div',{staticClass:"pain-container",on:{"dragover":_vm.onDragOverMasterPainSlideBar,"drop":_vm.onDropMasterPainSlideBar}},[_c('div',{ref:"leftPain",staticClass:"left-pain"},[_vm._t("leftPain")],2),_vm._v(" "),_c('div',{staticClass:"slidebar",attrs:{"id":"slideBar","draggable":"true"},on:{"dblclick":_vm.onDoubleClickSlideBar,"dragstart":_vm.onDragStartMasterPainSlideBar}}),_vm._v(" "),_c('div',{ref:"rightPain",staticClass:"right-pain"},[_vm._t("rightPain")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TwoPainWithSlideBarLayout.vue?vue&type=template&id=3c1f481d&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/domain/world/Uuid.ts
var Uuid = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TwoPainWithSlideBarLayout.vue?vue&type=script&lang=ts&








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




var TwoPainWithSlideBarLayoutvue_type_script_lang_ts_TwoPainWithSlideBarLayout = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(TwoPainWithSlideBarLayout, _Vue);

  var _super = _createSuper(TwoPainWithSlideBarLayout);

  function TwoPainWithSlideBarLayout() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TwoPainWithSlideBarLayout);

    _this = _super.apply(this, arguments);
    _this.leftPainWidth = null;
    return _this;
  }

  Object(createClass["a" /* default */])(TwoPainWithSlideBarLayout, [{
    key: "mounted",
    value: function mounted() {
      if (!this.defaultLeftPainWidth) return;
      var leftPain = this.$refs.leftPain;
      leftPain.style.width = this.defaultLeftPainWidth;
    }
  }, {
    key: "onDoubleClickSlideBar",
    value: function onDoubleClickSlideBar() {
      var leftPain = this.$refs.leftPain;
      var leftPainStyle = leftPain.style;

      if (this.adsorptionLeftWhenDoubleClick) {
        var rightPain = this.$refs.rightPain;
        var rightPainStyle = rightPain.style;

        if (this.leftPainWidth === null) {
          rightPainStyle.display = "none";
          this.leftPainWidth = leftPainStyle.width;
          leftPainStyle.width = "100%";
          leftPainStyle.resize = "none";
        } else {
          rightPainStyle.display = "inline";
          leftPainStyle.resize = "horizontal";
          leftPainStyle.width = this.leftPainWidth;
          this.leftPainWidth = null;
        }
      } else {
        leftPainStyle.display = leftPainStyle.display === "none" ? "inline" : "none";
      }
    }
  }, {
    key: "onDragStartMasterPainSlideBar",
    value: function onDragStartMasterPainSlideBar(event) {
      var _a;

      this.dragId = Uuid["a" /* default */].generate();
      (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text", this.dragId);
    }
  }, {
    key: "onDragOverMasterPainSlideBar",
    value: function onDragOverMasterPainSlideBar(event) {
      event === null || event === void 0 ? void 0 : event.preventDefault();
    }
  }, {
    key: "onDropMasterPainSlideBar",
    value: function onDropMasterPainSlideBar(event) {
      var _a;

      event.preventDefault();
      if (((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text")) !== this.dragId) return;
      var leftPain = this.$refs.leftPain;
      var style = leftPain.style;
      var painLeft = 0;

      if (style.left) {
        var left = style.left;
        if (left.match("px$")) painLeft = parseInt(left.replace("px", ""), 10);
      }

      style.width = event.x - painLeft + "px";
    }
  }]);

  return TwoPainWithSlideBarLayout;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], TwoPainWithSlideBarLayoutvue_type_script_lang_ts_TwoPainWithSlideBarLayout.prototype, "adsorptionLeftWhenDoubleClick", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], TwoPainWithSlideBarLayoutvue_type_script_lang_ts_TwoPainWithSlideBarLayout.prototype, "defaultLeftPainWidth", void 0);

TwoPainWithSlideBarLayoutvue_type_script_lang_ts_TwoPainWithSlideBarLayout = __decorate([nuxt_property_decorator_umd["Component"]], TwoPainWithSlideBarLayoutvue_type_script_lang_ts_TwoPainWithSlideBarLayout);
/* harmony default export */ var TwoPainWithSlideBarLayoutvue_type_script_lang_ts_ = (TwoPainWithSlideBarLayoutvue_type_script_lang_ts_TwoPainWithSlideBarLayout);
// CONCATENATED MODULE: ./src/components/TwoPainWithSlideBarLayout.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_TwoPainWithSlideBarLayoutvue_type_script_lang_ts_ = (TwoPainWithSlideBarLayoutvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/TwoPainWithSlideBarLayout.vue?vue&type=style&index=0&id=3c1f481d&scoped=true&lang=css&
var TwoPainWithSlideBarLayoutvue_type_style_index_0_id_3c1f481d_scoped_true_lang_css_ = __webpack_require__(744);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(868);

// CONCATENATED MODULE: ./src/components/TwoPainWithSlideBarLayout.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TwoPainWithSlideBarLayoutvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "3c1f481d",
  null
  
)

/* harmony default export */ var components_TwoPainWithSlideBarLayout = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VFlex: VFlex["a" /* default */]})


/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(756);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(25).default
var update = add("7303093e", content, true, {"sourceMap":false});

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasZoomSlider_vue_vue_type_style_index_0_id_3838a836_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(706);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasZoomSlider_vue_vue_type_style_index_0_id_3838a836_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasZoomSlider_vue_vue_type_style_index_0_id_3838a836_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".zoom-slider[data-v-3838a836]{width:250px;height:35px}.zoom-parsentage[data-v-3838a836]{height:35px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariationEditDialog_vue_vue_type_style_index_0_id_e56dac4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(707);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariationEditDialog_vue_vue_type_style_index_0_id_e56dac4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariationEditDialog_vue_vue_type_style_index_0_id_e56dac4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".values-spread[data-v-e56dac4a]{color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTypeConditionEditDialog_vue_vue_type_style_index_0_id_3e835658_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(708);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTypeConditionEditDialog_vue_vue_type_style_index_0_id_3e835658_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTypeConditionEditDialog_vue_vue_type_style_index_0_id_3e835658_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".values-spread-headless[data-v-3e835658]{color:#000}.values-spread-headless>div>table>tbody>tr>td[data-v-3e835658]{min-height:120px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue?vue&type=template&id=3838a836&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-slider',{staticClass:"zoom-slider",attrs:{"dence":"","append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline","max":_vm.MAX,"min":_vm.MIN},on:{"click:append":_vm.onClickZoomIn,"click:prepend":_vm.onClickZoomOut},model:{value:(_vm.zoomPercentage),callback:function ($$v) {_vm.zoomPercentage=_vm._n($$v)},expression:"zoomPercentage"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue?vue&type=template&id=3838a836&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(35);

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
    value: function onChangeZoomBySlider(zoom) {}
  }, {
    key: "canvasZoomToSlider",
    value: function canvasZoomToSlider(zoom) {
      this.zoomPercentage = 100 / zoom;
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
// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue?vue&type=style&index=0&id=3838a836&scoped=true&lang=css&
var CanvasZoomSlidervue_type_style_index_0_id_3838a836_scoped_true_lang_css_ = __webpack_require__(725);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.js
var VSlider = __webpack_require__(851);

// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  toolbar_CanvasZoomSlidervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "3838a836",
  null
  
)

/* harmony default export */ var toolbar_CanvasZoomSlider = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VSlider: VSlider["a" /* default */]})


/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue?vue&type=template&id=4b1ecac6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('PropertiesSettingDialog',{attrs:{"id":_vm.relation,"consent":_vm.consent,"title":_vm.title,"subTitle":_vm.subTitle,"iconKey":"mdi-vector-line","width":"490"},on:{"onClose":_vm.onClose,"onClickOk":_vm.onClickUpdateExecute,"onShow":_vm.onShow},scopedSlots:_vm._u([{key:"inputPart",fn:function(){return [_c('v-container',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"意味(関連に表示されるラベル)","counter":"","autofocus":"","rules":[_vm.validateMeaning],"maxlength":_vm.meaningMaxLength},model:{value:(_vm.meaning),callback:function ($$v) {_vm.meaning=$$v},expression:"meaning"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('p',[_vm._v("線形(軌跡の形状)")]),_vm._v(" "),_c('v-btn-toggle',{attrs:{"tile":"","color":"deep-purple accent-3","group":""},model:{value:(_vm.routerType.id),callback:function ($$v) {_vm.$set(_vm.routerType, "id", $$v)},expression:"routerType.id"}},_vm._l((_vm.routerTypes),function(itemRouterType){return _c('v-btn',{key:itemRouterType.id,attrs:{"value":itemRouterType.id},on:{"click":function($event){return _vm.onChangeRouterType(itemRouterType)}}},[_vm._v(_vm._s(itemRouterType.name))])}),1)],1)],1)],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue?vue&type=template&id=4b1ecac6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/PropertiesSettingDialog.vue + 4 modules
var PropertiesSettingDialog = __webpack_require__(702);

// EXTERNAL MODULE: ./src/domain/relation/Relation.ts
var Relation = __webpack_require__(306);

// EXTERNAL MODULE: ./src/domain/relation/RouterType.ts
var RouterType = __webpack_require__(151);

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
    value: function onUpdateRelationProperties(relation) {}
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
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js + 1 modules
var VBtnToggle = __webpack_require__(847);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(687);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(688);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(690);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(74);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  canvas_RelationPropertiesEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "4b1ecac6",
  null
  
)

/* harmony default export */ var canvas_RelationPropertiesEditDialog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {PropertiesSettingDialog: __webpack_require__(702).default})


/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VBtnToggle: VBtnToggle["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/StandardResourceEditDialog.vue?vue&type=template&id=4129e6b3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"consent":_vm.consent,"dialogWidth":"450"},on:{"onModifyResource":_vm.onModifyResource,"onClose":_vm.onClose,"changeConsent":_vm.changeConsent}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/StandardResourceEditDialog.vue?vue&type=template&id=4129e6b3&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(700);

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
    value: function onModifyResource(resource) {}
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

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], StandardResourceEditDialogvue_type_script_lang_ts_StandardResourceEditDialog.prototype, "onModifyResource", null);

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
var componentNormalizer = __webpack_require__(75);

// CONCATENATED MODULE: ./src/components/resource/StandardResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_StandardResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "4129e6b3",
  null
  
)

/* harmony default export */ var resource_StandardResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/HasContentResourceEditDialog.vue?vue&type=template&id=2f486cee&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"consent":_vm.consent,"dialogWidth":"450","notFocusSetName":"true"},on:{"onModifyResource":_vm.onModifyResourceInner,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_c('v-textarea',{ref:"inputContent",attrs:{"counter":"","filled":"","label":"内容","rows":"3","no-resize":"","autofocus":"","rules":[_vm.validateContent],"hint":_vm.inputContentHint},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1)],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/HasContentResourceEditDialog.vue?vue&type=template&id=2f486cee&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(700);

// EXTERNAL MODULE: ./src/domain/resource/Purpose.ts
var Purpose = __webpack_require__(179);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(2);

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
    value: function onModifyResource(resource) {}
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

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], HasContentResourceEditDialogvue_type_script_lang_ts_HasContentResourceEditDialog.prototype, "onModifyResource", null);

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
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(687);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(690);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(691);

// CONCATENATED MODULE: ./src/components/resource/HasContentResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_HasContentResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "2f486cee",
  null
  
)

/* harmony default export */ var resource_HasContentResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/VariationEditDialog.vue?vue&type=template&id=e56dac4a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"consent":_vm.consent,"dialogWidth":"450","ignoreEscKey":"true","ignoreEnterKey":"true"},on:{"onModifyResource":_vm.onModifyResourceInner,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_c('div',{ref:"valuesSpreadDiv",staticClass:"values-spread"})])],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/VariationEditDialog.vue?vue&type=template&id=e56dac4a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.js
var jexcel = __webpack_require__(723);
var jexcel_default = /*#__PURE__*/__webpack_require__.n(jexcel);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.css
var dist_jexcel = __webpack_require__(724);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(700);

// EXTERNAL MODULE: ./src/domain/resource/Variation.ts
var Variation = __webpack_require__(177);

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
    value: function onModifyResource(resource) {}
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
    value: function createSpread(values, div) {
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
    value: function onChangedCell(instance, cell, columnIndex, rowIndex, value) {
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

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog.prototype, "onModifyResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog.prototype, "onClose", null);

VariationEditDialogvue_type_script_lang_ts_VariationEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    CoreResourceEditDialog: CoreResourceEditDialog["default"]
  }
})], VariationEditDialogvue_type_script_lang_ts_VariationEditDialog);
/* harmony default export */ var VariationEditDialogvue_type_script_lang_ts_ = (VariationEditDialogvue_type_script_lang_ts_VariationEditDialog);
// CONCATENATED MODULE: ./src/components/resource/VariationEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_VariationEditDialogvue_type_script_lang_ts_ = (VariationEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/resource/VariationEditDialog.vue?vue&type=style&index=0&id=e56dac4a&scoped=true&lang=css&
var VariationEditDialogvue_type_style_index_0_id_e56dac4a_scoped_true_lang_css_ = __webpack_require__(727);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(687);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(690);

// CONCATENATED MODULE: ./src/components/resource/VariationEditDialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_VariationEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "e56dac4a",
  null
  
)

/* harmony default export */ var resource_VariationEditDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/ConditionEditDialog.vue?vue&type=template&id=ef481198&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"consent":_vm.consent,"dialogWidth":"450"},on:{"onModifyResource":_vm.onModifyResourceInner,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"条件の内容","counter":"","rules":[_vm.validateValue],"maxlength":_vm.valueMaxLength},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1)],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/ConditionEditDialog.vue?vue&type=template&id=ef481198&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(700);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(176);

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
    value: function onModifyResource(resource) {}
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

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], ConditionEditDialogvue_type_script_lang_ts_ConditionEditDialog.prototype, "onModifyResource", null);

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
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(687);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(690);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(74);

// CONCATENATED MODULE: ./src/components/resource/ConditionEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_ConditionEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "ef481198",
  null
  
)

/* harmony default export */ var resource_ConditionEditDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=template&id=3e835658&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"consent":_vm.consent,"ignoreEscKey":"true","ignoreEnterKey":"true","dialogWidth":"600"},on:{"onModifyResource":_vm.onModifyResourceInner,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_vm._v("\n        条件\n        "),_c('br'),_vm._v(" "),_c('div',{ref:"valuesSpreadDiv",staticClass:"values-spread-headless"}),_vm._v("\n        ※tabキーで列追加、enterキーで行追加、右クリックでその他の操作\n      ")])],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=template&id=3e835658&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.js
var jexcel = __webpack_require__(723);
var jexcel_default = /*#__PURE__*/__webpack_require__.n(jexcel);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.css
var dist_jexcel = __webpack_require__(724);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(700);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(176);

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
    value: function onModifyResource(resource) {}
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
    value: function createSpread(values, div) {
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
    value: function onChangedCell(instance, cell, columnIndex, rowIndex, value) {
      var rowIndexNumber = Number(rowIndex);
      var changeValue = value;
      var fixedValue = changeValue.trim().substring(0, Condition["a" /* default */].CONDITION_VALUE_MAX_LENGTH);
      this.values[rowIndexNumber][0] = fixedValue;
      cell.textContent = fixedValue;
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

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onModifyResource")], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog.prototype, "onModifyResource", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onClose")], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog.prototype, "onClose", null);

TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    CoreResourceEditDialog: CoreResourceEditDialog["default"]
  }
})], TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog);
/* harmony default export */ var TableTypeConditionEditDialogvue_type_script_lang_ts_ = (TableTypeConditionEditDialogvue_type_script_lang_ts_TableTypeConditionEditDialog);
// CONCATENATED MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_TableTypeConditionEditDialogvue_type_script_lang_ts_ = (TableTypeConditionEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=style&index=0&id=3e835658&scoped=true&lang=css&
var TableTypeConditionEditDialogvue_type_style_index_0_id_3e835658_scoped_true_lang_css_ = __webpack_require__(729);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(687);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(690);

// CONCATENATED MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_TableTypeConditionEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "3e835658",
  null
  
)

/* harmony default export */ var resource_TableTypeConditionEditDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasSettingToolBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(709);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasSettingToolBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasSettingToolBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".canvas-float-toolbar{width:500px;left:2%;top:-10%;display:block;z-index:2;transition:none;position:absolute}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouterTypeDraw2dConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(151);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(238);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_3__);





var RouterTypeDraw2dConverter = /*#__PURE__*/function () {
  function RouterTypeDraw2dConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RouterTypeDraw2dConverter);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RouterTypeDraw2dConverter, [{
    key: "draw2dRouterOf",
    value: function draw2dRouterOf(routerType) {
      if (!routerType) return undefined;
      if (routerType.equals(_domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].MANHATTAN)) return new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.connection.ManhattanConnectionRouter();
      if (routerType.equals(_domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].CIRCUIT)) return new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.connection.CircuitConnectionRouter();
      if (routerType.equals(_domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].SPLINE)) return new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.connection.SplineConnectionRouter(); // if (routerType.equals(RouterType.SKETCH))
      //    return new draw2d.layout.connection.SketchConnectionRouter();

      return undefined;
    }
  }, {
    key: "analyzeRouterType",
    value: function analyzeRouterType(router) {
      if (!router) return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].DIRECT;
      var name = router.NAME;
      if (!name) return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].DIRECT;
      if (name === "draw2d.layout.connection.ManhattanConnectionRouter") return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].MANHATTAN;
      if (name === "draw2d.layout.connection.CircuitConnectionRouter") return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].CIRCUIT;
      if (name === "draw2d.layout.connection.SplineConnectionRouter") return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].SPLINE; // if (name === "draw2d.layout.connection.SketchConnectionRouter") return RouterType.SKETCH;

      return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].DIRECT;
    }
  }]);

  return RouterTypeDraw2dConverter;
}();



/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue?vue&type=template&id=3f929ab2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-toolbar',{staticClass:"canvas-float-toolbar",attrs:{"id":_vm.toolBarId,"draggable":"","dense":"","floating":"","outlined":"","rounded":"","shaped":"","short":"","collapse":_vm.toolBarCollapse},on:{"dragstart":_vm.onDragStartToolBar,"mousedown":_vm.onMouseDownToolBar}},[_c('v-btn',{attrs:{"dark":"","icon":""},on:{"click":_vm.onClickEditDiagramProperties}},[_c('v-icon',[_vm._v("mdi-content-save-edit-outline")])],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-card',[_c('CanvasZoomSlider',{attrs:{"canvasZoom":_vm.canvasZoom},on:{"onChangeZoomBySlider":_vm.onChangeZoom}})],1):_vm._e(),_vm._v(" "),(!_vm.toolBarCollapse)?_c('span',{on:{"dblclick":function($event){return _vm.onDblClickZoomPercentage()}}},[_vm._v(_vm._s(_vm.calcZoomPercentage()))]):_vm._e(),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-menu',{attrs:{"top":"","offset-y":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-btn',_vm._g(_vm._b({attrs:{"dark":"","small":"","icon":""}},'v-btn',attrs,false),on),[_c('v-icon',[_vm._v(_vm._s(_vm.canvasGuideType.iconKey))])],1)]}}],null,false,3674894110)},[_vm._v(" "),_c('v-list',_vm._l((_vm.canvasGuideTypes()),function(guideType){return _c('v-list-item',{key:guideType.iconKey,on:{"click":function($event){return _vm.onClickChangeCanvasGuideType(guideType)}}},[_c('v-list-item-title',[_c('v-icon',[_vm._v(_vm._s(guideType.iconKey))]),_vm._v("\n          "+_vm._s(guideType.caption)+"\n        ")],1)],1)}),1)],1):_vm._e(),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-btn',{attrs:{"dark":"","small":"","icon":""}},[_c('v-icon',{on:{"click":_vm.onPngDownload}},[_vm._v("mdi-image")])],1):_vm._e(),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-btn',{attrs:{"dark":"","small":"","icon":""}},[_c('v-icon',{on:{"click":_vm.onClickSvgDownload}},[_vm._v("mdi-image-outline")])],1):_vm._e(),_vm._v(" "),_c('v-spacer'),_vm._v(" "),(!_vm.toolBarCollapse)?_c('v-btn',{attrs:{"dark":"","icon":""},on:{"click":_vm.onClickBarCollapseToggle}},[_c('v-icon',[_vm._v("mdi-arrow-collapse-horizontal")])],1):_vm._e(),_vm._v(" "),(_vm.toolBarCollapse)?_c('v-btn',{attrs:{"dark":"","icon":""},on:{"click":_vm.onClickBarCollapseToggle}},[_c('v-icon',[_vm._v("mdi-arrow-expand-horizontal")])],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue?vue&type=template&id=3f929ab2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/resize-observer/lib/ResizeObserver.js
var ResizeObserver = __webpack_require__(764);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasZoomSlider.vue + 4 modules
var CanvasZoomSlider = __webpack_require__(732);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasGuideType.ts
var CanvasGuideType = __webpack_require__(49);

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






var CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(CanvasSettingToolBar, _Vue);

  var _super = _createSuper(CanvasSettingToolBar);

  function CanvasSettingToolBar() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CanvasSettingToolBar);

    _this = _super.apply(this, arguments);
    _this.TOOLBAR_PADDING = 10;
    _this.toolBarCollapse = false;
    _this.dragStartLayerX = 0;
    _this.dragStartLayerY = 0;
    _this.lastContainerWidth = 0;
    _this.lastContainerHeight = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(CanvasSettingToolBar, [{
    key: "onChangeCanvasGuideType",
    value: function onChangeCanvasGuideType(canvasGuideType) {}
  }, {
    key: "onPngDownload",
    value: function onPngDownload() {}
  }, {
    key: "onSvgDownLoad",
    value: function onSvgDownLoad() {}
  }, {
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(diagramId) {}
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
    value: function onChangeZoomParent(zoom) {}
  }, {
    key: "onResizeEditorPain",
    value: function onResizeEditorPain(event) {
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
      var observer = new ResizeObserver["ResizeObserver"](this.onResizeEditorPain);
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
      var padding = this.TOOLBAR_PADDING;
      var scrollBarHeight = c.offsetHeight - c.clientHeight;
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

      return CanvasGuideType["default"].values().filter(function (type) {
        return !type.equals(_this3.canvasGuideType);
      });
    }
  }, {
    key: "onClickChangeCanvasGuideType",
    value: function onClickChangeCanvasGuideType(canvasGuideType) {
      this.onChangeCanvasGuideType(canvasGuideType);
    }
  }, {
    key: "onClickSvgDownload",
    value: function onClickSvgDownload() {
      this.onSvgDownLoad();
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
    key: "getEditorPain",
    value: function getEditorPain() {
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

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "diagramId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "canvasZoom", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "canvasGuideType", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onChangeCanvasGuideType")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onChangeCanvasGuideType", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onPngDownload")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onPngDownload", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onSvgDownload")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onSvgDownLoad", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onOpendDiagramPropertiesEditor")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onOpendDiagramPropertiesEditor", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onChangeZoomBySlider")], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar.prototype, "onChangeZoomParent", null);

CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    CanvasZoomSlider: CanvasZoomSlider["default"]
  }
})], CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar);
/* harmony default export */ var CanvasSettingToolBarvue_type_script_lang_ts_ = (CanvasSettingToolBarvue_type_script_lang_ts_CanvasSettingToolBar);
// CONCATENATED MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var toolbar_CanvasSettingToolBarvue_type_script_lang_ts_ = (CanvasSettingToolBarvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue?vue&type=style&index=0&lang=css&
var CanvasSettingToolBarvue_type_style_index_0_lang_css_ = __webpack_require__(739);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(290);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 1 modules
var VMenu = __webpack_require__(298);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(686);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(88);

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










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VSpacer: VSpacer["a" /* default */],VToolbar: VToolbar["a" /* default */]})


/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue?vue&type=template&id=90953248&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-menu',{attrs:{"value":_vm.visibleConnectorRightClickMenu,"close-on-click":true,"close-on-content-click":true,"offset-x":true,"rounded":true,"position-x":_vm.menuPositionX,"position-y":_vm.menuPositionY}},[_c('v-list',[_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickChangeRouter}},[_c('v-list-item-title',[_vm._v("関連の線形(軌跡の形状)を変更...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickEditConnection}},[_c('v-list-item-title',[_vm._v("関連の設定...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickDeleteConnection}},[_c('v-list-item-title',[_vm._v("関連の削除")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"inset":"","open-on-hover":""},model:{value:(_vm.visibleRouterSelector),callback:function ($$v) {_vm.visibleRouterSelector=$$v},expression:"visibleRouterSelector"}},[_c('v-sheet',{staticClass:"text-center",attrs:{"height":"200px"}},[_c('v-btn',{staticClass:"mt-6",attrs:{"text":"","color":"normal"},on:{"click":function($event){_vm.visibleRouterSelector = !_vm.visibleRouterSelector}}},[_vm._v("close")]),_vm._v(" "),_c('div',{staticClass:"my-3"},[_vm._v("変更したい線形(軌跡の形状)を選択してください。")]),_vm._v(" "),_c('v-btn-toggle',{attrs:{"tile":"","color":"deep-purple accent-3","group":""},model:{value:(_vm.changedRouterTypeId),callback:function ($$v) {_vm.changedRouterTypeId=$$v},expression:"changedRouterTypeId"}},_vm._l((_vm.routerTypes),function(routerType){return _c('v-btn',{key:routerType.id,attrs:{"value":routerType.id},on:{"click":function($event){return _vm.onChangeRouterType(routerType)}}},[_vm._v(_vm._s(routerType.name))])}),1)],1)],1),_vm._v(" "),_c('RelationPropertiesEditDialog',{attrs:{"relation":_vm.editTargetRelation},on:{"onUpdateRelationProperties":_vm.onUpdateRelationProperties,"onClose":_vm.onClosePropertiesEditor}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue?vue&type=template&id=90953248&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/RelationPropertiesEditDialog.vue + 4 modules
var RelationPropertiesEditDialog = __webpack_require__(733);

// EXTERNAL MODULE: ./src/domain/relation/RouterType.ts
var RouterType = __webpack_require__(151);

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
    value: function onUpdateRelation(relation) {}
  }, {
    key: "onDeleteRelation",
    value: function onDeleteRelation(relation) {}
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
})], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "visibleConnectorRightClickMenu", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "relation", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "menuPositionX", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "menuPositionY", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onUpdateRelation")], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "onUpdateRelation", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onDeleteRelation")], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor.prototype, "onDeleteRelation", null);

ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    RelationPropertiesEditDialog: RelationPropertiesEditDialog["default"]
  }
})], ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor);
/* harmony default export */ var ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ = (ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ConnectorRightClickMenuAndEditor);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue?vue&type=script&lang=ts&
 /* harmony default export */ var canvas_ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_ = (ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(852);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js + 1 modules
var VBtnToggle = __webpack_require__(847);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 1 modules
var VMenu = __webpack_require__(298);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(87);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  canvas_ConnectorRightClickMenuAndEditorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "90953248",
  null
  
)

/* harmony default export */ var canvas_ConnectorRightClickMenuAndEditor = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBottomSheet: VBottomSheet["a" /* default */],VBtn: VBtn["a" /* default */],VBtnToggle: VBtnToggle["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VSheet: VSheet["a" /* default */]})


/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPainWithSlideBarLayout_vue_vue_type_style_index_0_id_3c1f481d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(717);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPainWithSlideBarLayout_vue_vue_type_style_index_0_id_3c1f481d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPainWithSlideBarLayout_vue_vue_type_style_index_0_id_3c1f481d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pain-container[data-v-3c1f481d]{display:flex;height:100%;width:100%;max-width:none;padding-right:0;padding-left:0;margin-right:unset;margin-left:unset}.left-pain[data-v-3c1f481d]{overflow:hidden;text-align:left;resize:both;width:250px}.right-pain[data-v-3c1f481d]{flex-grow:1;width:0;min-width:0;overflow:hidden}.slidebar[data-v-3c1f481d]{width:8px;background-color:grey;cursor:col-resize}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramCanvas_vue_vue_type_style_index_0_id_5e223eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(718);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramCanvas_vue_vue_type_style_index_0_id_5e223eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramCanvas_vue_vue_type_style_index_0_id_5e223eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".canvas-container[data-v-5e223eda]{width:100%;height:100%;min-width:0;overflow:auto;text-align:left}.diagram-canvas[data-v-5e223eda]{width:1px;height:1px;margin:0;border-radius:5px;filter:drop-shadow(10px 10px 10px rgba(0,0,0,.6));position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceParet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(719);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceParet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceParet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".paret-panel{overflow-x:hidden;overflow-y:auto;width:100%;height:100%}.omit-long-text{position:absolute;text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;padding:0}.ignore-padding{padding:0}.chip-container{position:absolute;text-align:left;width:100%}.v-expansion-panel-content__wrap{padding:0;flex:auto}.v-expansion-panel--next-active{padding:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnalyzeResutEvents; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);












function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var AnalyzeResutEvents = /*#__PURE__*/function () {
  function AnalyzeResutEvents(eventsOfTypes) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this, AnalyzeResutEvents);

    this.eventsOfTypes = eventsOfTypes;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(AnalyzeResutEvents, [{
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

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FigureAnalyzer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(307);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);







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

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=template&id=5e223eda&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"convasContainer",staticClass:"canvas-container"},[_c('div',{staticClass:"diagram-canvas",attrs:{"id":_vm.canvasId}}),_vm._v(" "),_c('CanvasSettingToolBar',{attrs:{"diagramId":_vm.diagramId,"canvasZoom":_vm.canvasZoom,"canvasGuideType":_vm.canvasGuideType},on:{"onChangeZoomBySlider":_vm.onChangeZoomBySlider,"onChangeCanvasGuideType":_vm.onChangeCanvasGuideType,"onPngDownload":_vm.onPngDownload,"onSvgDownload":_vm.onSvgDownload,"onOpendDiagramPropertiesEditor":_vm.onOpendDiagramPropertiesEditor}}),_vm._v(" "),_c('ConnectorRightClickMenuAndEditor',{attrs:{"visibleConnectorRightClickMenu":_vm.visibleConnectorMenu,"relation":_vm.targetRelation,"menuPositionX":_vm.menuX,"menuPositionY":_vm.menuY},on:{"onUpdateRelation":_vm.onUpdateRelation,"onDeleteRelation":_vm.onDeleteRelation}}),_vm._v(" "),_c('ResourceEditDialog',{attrs:{"resourceId":_vm.editResourceId,"resourceType":_vm.editResourceType},on:{"onUpdatedResource":_vm.onUpdatedResource,"onClose":_vm.onCloseResourceEditor}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=template&id=5e223eda&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(35);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue + 4 modules
var CanvasSettingToolBar = __webpack_require__(742);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue + 4 modules
var ConnectorRightClickMenuAndEditor = __webpack_require__(743);

// EXTERNAL MODULE: ./src/components/resource/ResourceEditDialog.vue + 4 modules
var ResourceEditDialog = __webpack_require__(716);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widget.js
var widget = __webpack_require__(758);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/draggable.js
var draggable = __webpack_require__(761);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/droppable.js
var droppable = __webpack_require__(763);

// EXTERNAL MODULE: ./node_modules/draw2d/dist/draw2d.js
var draw2d = __webpack_require__(238);
var draw2d_default = /*#__PURE__*/__webpack_require__.n(draw2d);

// EXTERNAL MODULE: ./src/components/diagrams/editor/toolbar/CanvasGuideType.ts
var CanvasGuideType = __webpack_require__(49);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/RouterTypeDraw2dConverter.ts
var RouterTypeDraw2dConverter = __webpack_require__(741);

// EXTERNAL MODULE: ./src/domain/diagram/Diagram.ts
var Diagram = __webpack_require__(47);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(2);

// EXTERNAL MODULE: ./src/domain/client/DownloadFile.ts
var DownloadFile = __webpack_require__(180);

// EXTERNAL MODULE: ./src/domain/client/RdramDownloadFileName.ts
var RdramDownloadFileName = __webpack_require__(311);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(700);

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
    _this.canvasZoom = 1;
    _this.canvasGuideType = CanvasGuideType["default"].なし;
    _this.lastResourcesOnCurrentProductCount = 0;
    _this.visibleConnectorMenu = false;
    _this.targetRelation = null;
    _this.menuX = 0;
    _this.menuY = 0;
    _this.editResourceId = 0;
    _this.editResourceType = null;
    _this.dropXOnCanvas = 0;
    _this.dropYOnCanvas = 0;
    return _this;
  } // Events
  // This view callback(Emit).


  Object(createClass["a" /* default */])(DiagramCanvas, [{
    key: "onUpdateResources",
    value: function onUpdateResources() {}
  }, {
    key: "onMergePlacement",
    value: function onMergePlacement(diffTarget) {}
  }, {
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(diagramId) {}
  }, {
    key: "onShowWarnBar",
    value: function onShowWarnBar(text) {} // Watch event.

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
      this.onChangeZoomBySlider(this.canvasZoom + 0.001); // 再描画がうまく行くHack
    }
  }, {
    key: "onChangeAllResourcesOnCurrentProduct",
    value: function onChangeAllResourcesOnCurrentProduct() {
      var whenRemoveResource = this.allResourcesOnCurrentProduct.length < this.lastResourcesOnCurrentProductCount;
      this.lastResourcesOnCurrentProductCount = this.allResourcesOnCurrentProduct.length;
      if (!whenRemoveResource) return;
      this.reverceSyncCavansDeleteThings();
    }
  }, {
    key: "onChangeUsedResouceIds",
    value: function onChangeUsedResouceIds() {
      this.reverceSyncCavansDeleteThings();
    } // Vue events.(life cycle events)

  }, {
    key: "created",
    value: function created() {
      var _a;

      var diagram = (_a = this.product) === null || _a === void 0 ? void 0 : _a.diagrams.of(this.diagramId);
      if (!diagram) return;
      this.canvasId = "canvas" + this.diagramId;
      this.lastResourcesOnCurrentProductCount = this.allResourcesOnCurrentProduct.length;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      this.$nuxt.$loading.start();
      this.$nextTick(function () {
        var _a;

        var diagram = (_a = _this2.product) === null || _a === void 0 ? void 0 : _a.diagrams.of(_this2.diagramId);
        if (!diagram) return;

        _this2.showCanvas();

        _this2.fixCanvasPosition();

        _this2.addCanvasEvent();

        _this2.drawDiagram(diagram);

        _this2.onChangeCanvasGuideType(diagram.canvasGuideType);

        _this2.$nuxt.$loading.finish(); // FIXME フラグ管理的には正しいタイミングで動いているが、Loding画面出てこない。修正要。

      });
    } // public by other diarogs

  }, {
    key: "showWarnBar",
    value: function showWarnBar(text) {
      this.onShowWarnBar(text);
    } // right click menu events.

  }, {
    key: "onDeleteRelation",
    value: function onDeleteRelation(relation) {
      var connection = this.canvas.getLine(relation.id);
      this.canvas.remove(connection);
      this.transactionOf2(function (diagram, product) {
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
      this.transactionOf2(function (diagram, product) {
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
      var beforeCanvasGuideType = this.canvasGuideType;
      if (beforeCanvasGuideType.canvasPolicy) canvas.uninstallEditPolicy(beforeCanvasGuideType.canvasPolicy);
      if (canvasGuideType.canvasPolicy) canvas.installEditPolicy(canvasGuideType.canvasPolicy); // 「何故か、背景が真っ黒になってしまう」対策。ちょーーっとだけリサイズする。
      // …こんなワークアラウンドのほうが安定するからしゃーない。

      canvas.setZoom(canvas.getZoom() - 0.001, false);
      this.canvasGuideType = canvasGuideType;
    }
  }, {
    key: "onPngDownload",
    value: function onPngDownload() {
      var _this3 = this;

      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return;
      var fileName = this.makeDownloadFileName(diagram, "png");
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
      var fileName = this.makeDownloadFileName(diagram, "svg");
      var writer = new draw2d_default.a.io.svg.Writer();
      writer.marshal(this.canvas, function (svg) {
        var withFontSvg = _this4.includeWebFont(svg);

        var file = new DownloadFile["a" /* default */](fileName, "image/svg+xml", withFontSvg);

        _this4.clientDownloadRepository.register(file);
      });
    } // from ResourcePropertiesEditor events.

  }, {
    key: "onUpdatedResource",
    value: function onUpdatedResource(resource) {
      this.addPlacement(resource);
      this.onUpdateResources(); // 親にコールバック
    }
  }, {
    key: "onCloseResourceEditor",
    value: function onCloseResourceEditor() {
      this.editResourceId = 0;
    } // Canvas Events

  }, {
    key: "onZoomChangeFromCanvas",
    value: function onZoomChangeFromCanvas(emitterFigure, zoomData) {
      this.canvasZoom = zoomData.value;
    }
  }, {
    key: "onDropCanvas",
    value: function onDropCanvas(event) {
      var _a;

      event.preventDefault();
      var zoom = this.canvas.getZoom();
      zoom = isFinite(zoom) ? Number(zoom) : 1; // Zoom状況を考慮

      this.dropXOnCanvas = event.offsetX * zoom;
      this.dropYOnCanvas = event.offsetY * zoom;
      var textData = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text");
      if (!textData) return;
      var resourceId = parseInt(textData, 10);
      var isAddNew = resourceId < 0; // 新規追加時。

      var resource = null;

      if (isAddNew) {
        var resourceType = ResourceType["a" /* default */].ofId(resourceId * -1);
        this.showResourcePropertiesEditor(resourceType);
        return;
      }

      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return;
      resource = product.resources.of(resourceId);
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
      this.transactionOf2(function (diagram, product) {
        if (!analyzeResutEvents.validate(diagram, product, _this5)) return null;
        return analyzeResutEvents.apply(diagram, product, _this5);
      });
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
      // const editorPain = this.$refs.editorPain as HTMLElement;
      // editorPain.id = `editorPain${this.diagramId}`;
      // canvas.setScrollArea(`#${editorPain.id}`);

      this.canvas = canvas;
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
      var zoom = canvas.getZoom();
      var absoluteX = canvas.getAbsoluteX() + x / zoom;
      var absoluteY = canvas.getAbsoluteY() + y / zoom;
      this.showConnectorRightClickMenu(targetRelation, absoluteX, absoluteY);
    }
  }, {
    key: "drawDiagram",
    value: function drawDiagram(diagram) {
      var _this6 = this;

      diagram.placements.forEach(function (p) {
        return _this6.usedResouceIds.push(p.resourceId);
      });
      this.canvas.setDimension(diagram.width, diagram.height);

      var _iterator = _createForOfIteratorHelper(diagram.placements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var placement = _step.value;
          var resource = this.findResource(placement.resourceId);
          if (!resource) continue;
          this.addResouceIconToCanvas(resource, placement);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(diagram.relations),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var relation = _step2.value;
          this.addConnection(relation);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "findResource",
    value: function findResource(resourceId) {
      var found = this.allResourcesOnCurrentProduct.find(function (r) {
        return r.resourceId === resourceId;
      });
      return found ? found : null;
    } // self decralation event.
    // UI controll.

  }, {
    key: "addResouceIconToCanvas",
    value: function addResouceIconToCanvas(resource, placement) {
      var type = resource.type;
      var generator = this.choiceIconGenerator(type);

      if (!generator) {
        alert("ジェネレータ無しアイコン生成不能:" + type.name);
        return;
      }

      var icon = generator.generate(placement, resource, this.iconStyleOf(type));
      this.canvas.add(icon);
      this.fixZOrder(icon);
    }
    /**
     * 最後に追加したのが「範囲アイコン」なら、通常アイコンよりZOrder後ろにもっていく。
     *
     * TODO IconGeneratorでsetUserData()してるので、このロジックもそこらへんに移動したい。
     */

  }, {
    key: "fixZOrder",
    value: function fixZOrder(icon) {
      var allFigures = this.canvas.getFigures().asArray();
      var lastAdded = allFigures.find(function (i) {
        return i.getId() === icon.getId();
      });
      if (!lastAdded || !this.isAreaIcon(lastAdded)) return;
      var lastZOrder = null;

      var _iterator3 = _createForOfIteratorHelper(allFigures),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var figure = _step3.value;
          if (figure.getId() === lastAdded.getId()) continue;

          if (!lastZOrder) {
            lastZOrder = figure;
            continue;
          }

          if (this.isAreaIcon(figure)) continue;
          if (lastZOrder.getZOrder() < figure.getZOrder()) continue;
          lastZOrder = figure;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (!lastZOrder) return;
      lastAdded.toBack(lastZOrder);
    }
  }, {
    key: "isAreaIcon",
    value: function isAreaIcon(icon) {
      if (!icon.getUserData()) return false;
      var iconStatus = icon.getUserData();
      if (iconStatus.area) return true;
      return false;
    }
  }, {
    key: "choiceIconGenerator",
    value: function choiceIconGenerator(resourceType) {
      var generator = this.iconGenerators.find(function (g) {
        return g.resourceType().equals(resourceType);
      });
      return generator ? generator : null;
    }
  }, {
    key: "addConnection",
    value: function addConnection(relation) {
      var canvas = this.canvas;
      var connection = new draw2d_default.a.Connection({
        id: relation.id
      });
      var start = canvas.getFigure(String(relation.fromResourceId));
      var end = canvas.getFigure(String(relation.toResourceId));
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
      if (!targetFigure) return null;
      var portTypeName = fromPort ? "draw2d.OutputPort" : "draw2d.InputPort";
      var foundPoft = targetFigure.getPorts(false).asArray().find(function (port) {
        return port.NAME === portTypeName || port.NAME === "draw2d.HybridPort";
      });
      return foundPoft ? foundPoft : null;
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
        bgColor: "#ffffff"
      });
      connection.add(label, new draw2d_default.a.layout.locator.ParallelMidpointLocator());
    }
  }, {
    key: "showConnectorRightClickMenu",
    value: function showConnectorRightClickMenu(relation, x, y) {
      var _this7 = this;

      this.visibleConnectorMenu = false;
      this.targetRelation = relation;
      this.menuX = x;
      this.menuY = y;
      this.$nextTick(function () {
        _this7.visibleConnectorMenu = true;
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
      canvas.getLines().each(function (i, line) {
        if (!diagram.existsRelationId(line.id.toString())) canvas.remove(line);
      });
      canvas.getFigures().each(function (i, figure) {
        var resourceId = Number(figure.id);
        if (!diagram.existsPlacementId(resourceId)) canvas.remove(figure);
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
      return new RdramDownloadFileName["a" /* default */](namePart, extension);
    }
  }, {
    key: "includeWebFont",
    value: function includeWebFont(svgContents) {
      var cssLink = "<defs><style type='text/css'>@import url('https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css');</style></defs>";
      return svgContents.replace("<defs", cssLink + "<defs");
    }
  }, {
    key: "showResourcePropertiesEditor",
    value: function showResourcePropertiesEditor(resourceType) {
      this.editResourceType = resourceType;
      this.editResourceId = CoreResourceEditDialog["default"].ID_WHEN_CREATE_NEW;
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
    } // Data change controll.

    /**
     * どーしても、draw2dがsvg作るときに”position: absolute"をしてしまうので、削除する。
     */

  }, {
    key: "fixCanvasPosition",
    value: function fixCanvasPosition() {
      var _a;

      var svg = (_a = document.getElementById(this.canvasId)) === null || _a === void 0 ? void 0 : _a.firstChild;
      svg.style.removeProperty("position");
      svg.addEventListener("drop", this.onDropCanvas);
      svg.addEventListener("dragover", this.onDropOverCanvas);

      svg.oncontextmenu = function () {
        return false;
      }; // これは自動的にdraw2d.jsがやってくれるはず…なんだけどなぁ。

    }
  }, {
    key: "addCanvasEvent",
    value: function addCanvasEvent() {
      var commandStack = this.canvas.getCommandStack();
      commandStack.addEventListener(this.onCanvasCommandExecute);
      this.canvas.on("zoom", this.onZoomChangeFromCanvas);
    }
  }, {
    key: "addPlacement",
    value: function addPlacement(resource) {
      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      if (!product || !diagram) return;
      var placement = diagram.createPlacement(resource, this.dropXOnCanvas, this.dropYOnCanvas);
      var modifiedDiagram = diagram.addPlacement(placement);
      var modifiedProduct = product.replaceOf(modifiedDiagram);
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
      var requireSave = func(diagram, this.product);
      this.onMergePlacement(diagram.placements);
      if (requireSave) this.repository.registerCurrentProduct(product);
    }
  }, {
    key: "transactionOf2",
    value: function transactionOf2(func) {
      var product = this.repository.getCurrentProduct();
      var diagram = product.diagrams.of(this.diagramId);
      if (!diagram) return;
      var modifiedDiagram = func(diagram, product);
      if (modifiedDiagram === null) return;
      this.onMergePlacement(modifiedDiagram.placements);
      var modifiedProduct = product.replaceOf(modifiedDiagram);
      this.repository.registerCurrentProduct(modifiedProduct);
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
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "allResourcesOnCurrentProduct", void 0);

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

__decorate([Object(lib["Emit"])("onUpdateResources")], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onUpdateResources", null);

__decorate([Object(lib["Emit"])("onMergePlacement")], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onMergePlacement", null);

__decorate([Object(lib["Emit"])("onOpendDiagramPropertiesEditor")], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onOpendDiagramPropertiesEditor", null);

__decorate([Object(lib["Emit"])("onShowWarnBar")], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onShowWarnBar", null);

__decorate([Object(lib["Watch"])("lastPropertiesUpdatedDiagramId")], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onUpdatedDiagramProperties", null);

__decorate([Object(lib["Watch"])("allResourcesOnCurrentProduct.length")], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onChangeAllResourcesOnCurrentProduct", null);

__decorate([Object(lib["Watch"])("usedResouceIds")], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas.prototype, "onChangeUsedResouceIds", null);

DiagramCanvasvue_type_script_lang_ts_DiagramCanvas = __decorate([Object(lib["Component"])({
  components: {
    CanvasSettingToolBar: CanvasSettingToolBar["default"],
    ConnectorRightClickMenuAndEditor: ConnectorRightClickMenuAndEditor["default"],
    ResourceEditDialog: ResourceEditDialog["default"]
  }
})], DiagramCanvasvue_type_script_lang_ts_DiagramCanvas);
/* harmony default export */ var DiagramCanvasvue_type_script_lang_ts_ = (DiagramCanvasvue_type_script_lang_ts_DiagramCanvas);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=script&lang=ts&
 /* harmony default export */ var canvas_DiagramCanvasvue_type_script_lang_ts_ = (DiagramCanvasvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue?vue&type=style&index=0&id=5e223eda&scoped=true&lang=css&
var DiagramCanvasvue_type_style_index_0_id_5e223eda_scoped_true_lang_css_ = __webpack_require__(746);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/DiagramCanvas.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  canvas_DiagramCanvasvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "5e223eda",
  null
  
)

/* harmony default export */ var canvas_DiagramCanvas = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ResourceEditDialog: __webpack_require__(716).default})


/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/paret/ResourceParet.vue?vue&type=template&id=77394171&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"paret-panel"},[_c('v-expansion-panels',{attrs:{"multiple":"","focusable":"","dark":""},model:{value:(_vm.paretsOpen),callback:function ($$v) {_vm.paretsOpen=$$v},expression:"paretsOpen"}},[_vm._l((_vm.availableResourceTypes),function(resourceType){return _c('v-expansion-panel',{key:resourceType.id},[_c('v-expansion-panel-header',[_c('div',{staticClass:"omit-long-text"},[_c('v-icon',{attrs:{"id":resourceType.iconKey}},[_vm._v(_vm._s(resourceType.iconKey))]),_vm._v("\n        "+_vm._s(resourceType.name)+"\n      ")],1)]),_vm._v(" "),_c('v-expansion-panel-content',[_c('v-list',{attrs:{"dark":"","dence":""}},[_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"chip-container"},[_c('v-chip',{attrs:{"color":"primary","dark":"","outlined":"","draggable":"","data-resource-type-id":resourceType.id},on:{"dragstart":_vm.onDragStartNewCompany}},[_c('v-icon',[_vm._v(_vm._s(resourceType.iconKey))]),_vm._v("新規追加\n              ")],1)],1)],1)],1),_vm._v(" "),_vm._l((_vm.allResourcesOnCurrentProduct.filter(function (r) { return _vm.filterDisplayParet(r, resourceType, _vm.usedResouceIds); })),function(resource){return _c('v-list-item',{key:resource.resourceId},[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"chip-container"},[_c('v-chip',{attrs:{"data-resource-id":resource.resourceId,"color":"primary","dark":"","draggable":""},on:{"dragstart":_vm.onDragStartResource,"contextmenu":_vm.onRightClickResource}},[_c('v-icon',[_vm._v(_vm._s(resourceType.iconKey))]),_vm._v("\n                "+_vm._s(resource.name)+"\n              ")],1)],1)],1)],1)})],2)],1)],1)}),_vm._v(" "),_c('v-expansion-panel',[_c('v-expansion-panel-header',[_c('div',{staticClass:"omit-long-text"},[_c('v-icon',[_vm._v("mdi-clipboard-check-multiple-outline")]),_vm._v("この図で使用済\n      ")],1)]),_vm._v(" "),_c('v-expansion-panel-content',[_c('v-list',{attrs:{"dark":"","dence":""}},_vm._l((_vm.allResourcesOnCurrentProduct.filter(function (r) { return _vm.filterUsedList(r, _vm.usedResouceIds); })),function(usedResource){return _c('v-list-item',{key:usedResource.id},[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"chip-container"},[_c('v-chip',{attrs:{"dark":"","data-resource-id":usedResource.resourceId,"data-resource-on-diagram":"true"},on:{"contextmenu":_vm.onRightClickResource}},[_c('v-icon',[_vm._v(_vm._s(_vm.iconKeyOf(usedResource)))]),_vm._v("\n                "+_vm._s(usedResource.name)+"\n              ")],1)],1)],1)],1)}),1)],1)],1),_vm._v(" "),_c('v-menu',{attrs:{"value":_vm.rightClickedResourceId,"close-on-click":true,"close-on-content-click":true,"offset-x":true,"rounded":true,"position-x":_vm.rightClickedResourceX,"position-y":_vm.rightClickedResourceY}},[_c('v-list',[(_vm.rightClickedResourceOnDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuDeleteResourceOnDiagram}},[_c('v-list-item-title',[_vm._v("このダイアグラムから削除")])],1):_vm._e(),_vm._v(" "),(_vm.rightClickedResourceOnProduct)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuDeleteResourceOnProduct}},[_c('v-list-item-title',[_vm._v("プロダクト全体から削除")])],1):_vm._e()],1)],1)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue?vue&type=template&id=77394171&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(35);

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
    _this.rightClickedResourceId = 0;
    _this.rightClickedResourceOnDiagram = false;
    _this.rightClickedResourceOnProduct = false;
    _this.rightClickedResourceX = 0;
    _this.rightClickedResourceY = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(ResourceParet, [{
    key: "onDeleteResourceOnDiagram",
    value: function onDeleteResourceOnDiagram(resourceId) {}
  }, {
    key: "onDeleteResourceOnProduct",
    value: function onDeleteResourceOnProduct(resourceId) {}
  }, {
    key: "created",
    value: function created() {
      var _this2 = this;

      var diagram = this.product.diagrams.of(this.diagramId);
      if (!diagram) return;
      diagram.availableResourceTypes().forEach(function (resourceType) {
        return _this2.availableResourceTypes.push(resourceType);
      });

      for (var i = 0; i < this.availableResourceTypes.length + 1; i++) {
        this.paretsOpen.push(i);
      }
    }
  }, {
    key: "onDragStartNewCompany",
    value: function onDragStartNewCompany(event) {
      var _a;

      if (!event.target) return;
      var target = event.target;
      var text = target.getAttribute("data-resource-type-id");
      if (!text) return;
      var resourceTypeId = parseInt(text, 10);
      (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text", "-" + resourceTypeId);
    }
  }, {
    key: "onDragStartResource",
    value: function onDragStartResource(event) {
      var _a;

      var chip = event.srcElement;
      var resourceIdText = chip.getAttribute("data-resource-id");
      (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text", resourceIdText);
    }
  }, {
    key: "onRightClickResource",
    value: function onRightClickResource(event) {
      var _this3 = this;

      event.preventDefault();
      var src = event.srcElement;
      var resourceIdText = src.getAttribute("data-resource-id");
      var chip = src.parentElement; // FIXME ちょっと「Veutifyの構造を知りすぎてる」気がする。手が在れば変えたい。

      resourceIdText = chip.getAttribute("data-resource-id");
      if (!resourceIdText) return;
      var resourceId = Number(resourceIdText);
      var onDinagram = chip.getAttribute("data-resource-on-diagram");
      var resource = this.allResourcesOnCurrentProduct.find(function (r) {
        return r.resourceId === resourceId;
      });
      if (!resource) return;
      this.rightClickedResourceOnDiagram = onDinagram === "true";
      this.rightClickedResourceOnProduct = resource.deletable;
      this.rightClickedResourceId = 0;
      this.rightClickedResourceX = event.x;
      this.rightClickedResourceY = event.y;
      this.$nextTick(function () {
        _this3.rightClickedResourceId = resourceId;
      });
    }
  }, {
    key: "onClickMenuDeleteResourceOnDiagram",
    value: function onClickMenuDeleteResourceOnDiagram() {
      var resourceId = Number(this.rightClickedResourceId);
      this.onDeleteResourceOnDiagram(resourceId);
    }
  }, {
    key: "onClickMenuDeleteResourceOnProduct",
    value: function onClickMenuDeleteResourceOnProduct() {
      var resourceId = Number(this.rightClickedResourceId);
      this.onDeleteResourceOnProduct(resourceId);
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
    key: "iconKeyOf",
    value: function iconKeyOf(resource) {
      if (!resource) return "";
      return resource.type.iconKey;
    }
  }]);

  return ResourceParet;
}(lib["Vue"]);

__decorate([Object(lib["Prop"])({
  required: true
})], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "diagramId", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "allResourcesOnCurrentProduct", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "usedResouceIds", void 0);

__decorate([Object(lib["Prop"])({
  required: true
})], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "product", void 0);

__decorate([Object(lib["Emit"])("onDeleteResourceOnDiagram")], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "onDeleteResourceOnDiagram", null);

__decorate([Object(lib["Emit"])("onDeleteResourceOnProduct")], ResourceParetvue_type_script_lang_ts_ResourceParet.prototype, "onDeleteResourceOnProduct", null);

ResourceParetvue_type_script_lang_ts_ResourceParet = __decorate([lib["Component"]], ResourceParetvue_type_script_lang_ts_ResourceParet);
/* harmony default export */ var ResourceParetvue_type_script_lang_ts_ = (ResourceParetvue_type_script_lang_ts_ResourceParet);
// CONCATENATED MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue?vue&type=script&lang=ts&
 /* harmony default export */ var paret_ResourceParetvue_type_script_lang_ts_ = (ResourceParetvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue?vue&type=style&index=0&lang=css&
var ResourceParetvue_type_style_index_0_lang_css_ = __webpack_require__(748);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(876);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(877);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(878);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js
var VExpansionPanels = __webpack_require__(879);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(290);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 1 modules
var VMenu = __webpack_require__(298);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/paret/ResourceParet.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paret_ResourceParetvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var paret_ResourceParet = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */












installComponents_default()(component, {VChip: VChip["a" /* default */],VExpansionPanel: VExpansionPanel["a" /* default */],VExpansionPanelContent: VExpansionPanelContent["a" /* default */],VExpansionPanelHeader: VExpansionPanelHeader["a" /* default */],VExpansionPanels: VExpansionPanels["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMenu: VMenu["a" /* default */]})


/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramEditor_vue_vue_type_style_index_0_id_9d44e614_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(721);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramEditor_vue_vue_type_style_index_0_id_9d44e614_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramEditor_vue_vue_type_style_index_0_id_9d44e614_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".diagram-pain-container[data-v-9d44e614]{display:flex;position:absolute;height:100%;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionIconGenerator; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(703);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(515);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(238);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(701);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2);
/* harmony import */ var _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(704);
/* harmony import */ var _icon_IconStatus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(699);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var ConditionIconGenerator = /*#__PURE__*/function (_GenericSingleIconGen) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ConditionIconGenerator, _GenericSingleIconGen);

  var _super = _createSuper(ConditionIconGenerator);

  function ConditionIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ConditionIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ConditionIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].条件;
    }
  }, {
    key: "generate",
    value: function generate(placement, condition, iconChar) {
      if (placement.alias) return Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ConditionIconGenerator.prototype), "generate", this).call(this, placement, condition, iconChar);
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
      container.add(icon, new _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]());
      container.createPort("hybrid", new draw2d__WEBPACK_IMPORTED_MODULE_9___default.a.layout.locator.CenterLocator()); // PortからではなくFigureから線が出ているように見せるため、アンカー設定。

      var port = container.getPorts().last();
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_9___default.a.layout.anchor.FanConnectionAnchor(container);
      port.setConnectionAnchor(anchor);
      container.setUserData(new _icon_IconStatus__WEBPACK_IMPORTED_MODULE_13__["default"](false));
      return container;
    }
  }]);

  return ConditionIconGenerator;
}(_components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VariationIconGenerator; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(703);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(515);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(238);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(701);
/* harmony import */ var _icon_IconStatus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(699);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2);
/* harmony import */ var _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(704);
















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var VariationIconGenerator = /*#__PURE__*/function (_GenericSingleIconGen) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(VariationIconGenerator, _GenericSingleIconGen);

  var _super = _createSuper(VariationIconGenerator);

  function VariationIconGenerator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this, VariationIconGenerator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(VariationIconGenerator, [{
    key: "resourceType",
    value: function resourceType() {
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"].バリエーション;
    }
  }, {
    key: "generate",
    value: function generate(placement, variation, iconChar) {
      if (placement.alias) return Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(VariationIconGenerator.prototype), "generate", this).call(this, placement, variation, iconChar);
      return this.generateVariationTable(placement, variation, iconChar);
    }
  }, {
    key: "generateVariationTable",
    value: function generateVariationTable(placement, variation, iconChar) {
      var id = String(placement.resourceId);
      var label = new draw2d__WEBPACK_IMPORTED_MODULE_17___default.a.shape.basic.Label({
        text: variation.name
      });
      label.setResizeable(true);
      label.setFontColor("#FFFFFF");
      label.setBold(true);
      label.setStroke(2);
      label.setColor("#FFFFFF");
      label.setPadding(2);
      label.setBackgroundColor("#F69747");
      var container = new draw2d__WEBPACK_IMPORTED_MODULE_17___default.a.shape.layout.TableLayout({
        id: id,
        x: placement.x,
        y: placement.y,
        padding: 1,
        stroke: 1
      });
      container.addRow(label);
      var i = 0;

      var _iterator = _createForOfIteratorHelper(variation.valuesOf()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          var valueLabel = new draw2d__WEBPACK_IMPORTED_MODULE_17___default.a.shape.basic.Label({
            text: value
          });
          valueLabel.setResizeable(true);
          valueLabel.setPadding(2);
          valueLabel.setStroke(2);
          valueLabel.setColor("#FFFFFF");
          valueLabel.setBackgroundColor(i % 2 ? "#FDF0EA" : "#FEDBD2");
          container.addRow(valueLabel);
          i++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var icon = new draw2d__WEBPACK_IMPORTED_MODULE_17___default.a.shape.basic.Label({
        fontFamily: iconChar.fontFamily,
        text: iconChar.charactor,
        fontSize: 30,
        stroke: 0,
        padding: 0,
        bgColor: "none",
        alpha: 1
      });
      var name = new draw2d__WEBPACK_IMPORTED_MODULE_17___default.a.shape.basic.Label({
        text: variation.name,
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      icon.add(name, new draw2d__WEBPACK_IMPORTED_MODULE_17___default.a.layout.locator.XYRelPortLocator({
        x: 105,
        y: 27
      }));
      container.add(icon, new _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]());
      container.createPort("hybrid", new draw2d__WEBPACK_IMPORTED_MODULE_17___default.a.layout.locator.CenterLocator()); // PortからではなくFigureから線が出ているように見せるため、アンカー設定。

      var port = container.getPorts().last();
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_17___default.a.layout.anchor.FanConnectionAnchor(container);
      port.setConnectionAnchor(anchor);
      container.setUserData(new _icon_IconStatus__WEBPACK_IMPORTED_MODULE_19__["default"](false));
      return container;
    }
  }]);

  return VariationIconGenerator;
}(_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_18__["default"]);



/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableTypeConditionIconGenerator; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(703);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(515);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(238);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _draw2d_custom_TopLeftLocator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(704);
/* harmony import */ var _components_diagrams_icon_GenericSingleIconGenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(701);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(699);













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
      return _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].表形式の条件;
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
      container.createPort("hybrid", new draw2d__WEBPACK_IMPORTED_MODULE_12___default.a.layout.locator.CenterLocator()); // PortからではなくFigureから線が出ているように見せるため、アンカー設定。

      var port = container.getPorts().last();
      var anchor = new draw2d__WEBPACK_IMPORTED_MODULE_12___default.a.layout.anchor.FanConnectionAnchor(container);
      port.setConnectionAnchor(anchor);
      container.setUserData(new _components_diagrams_icon_IconStatus__WEBPACK_IMPORTED_MODULE_16__["default"](false));
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

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/variationandcondition/VariationAndConditionDiagramEditor.vue?vue&type=template&id=c49b65ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DiagramEditor',{attrs:{"diagramId":_vm.diagramId,"allResourcesOnCurrentProduct":_vm.allResourcesOnCurrentProduct,"lastPropertiesUpdatedDiagramId":_vm.lastPropertiesUpdatedDiagramId,"eventAnalyzer":_vm.eventAnalyzer,"iconGenerators":_vm.iconGenerators},on:{"onUpdateResources":_vm.onUpdateResources,"onOpendDiagramPropertiesEditor":_vm.onOpendDiagramPropertiesEditor}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/variationandcondition/VariationAndConditionDiagramEditor.vue?vue&type=template&id=c49b65ac&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/DiagramEditor.vue + 4 modules
var DiagramEditor = __webpack_require__(715);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/EventAnalyzer.ts
var EventAnalyzer = __webpack_require__(711);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/events/GenericConnectPortsEvents.ts
var GenericConnectPortsEvents = __webpack_require__(710);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents.ts
var GenericDeleteShapeEvents = __webpack_require__(712);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/events/GenericMoveShapeEvents.ts
var GenericMoveShapeEvents = __webpack_require__(713);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/event/events/GenericResizeShapeEvents.ts
var GenericResizeShapeEvents = __webpack_require__(714);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/VariationIconGenerator.ts
var VariationIconGenerator = __webpack_require__(797);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/ConditionIconGenerator.ts
var ConditionIconGenerator = __webpack_require__(785);

// EXTERNAL MODULE: ./src/components/diagrams/editor/template/icon/TableTypeConditionIconGenerator.ts
var TableTypeConditionIconGenerator = __webpack_require__(798);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/variationandcondition/VariationAndConditionDiagramEditor.vue?vue&type=script&lang=ts&








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












var VariationAndConditionDiagramEditorvue_type_script_lang_ts_VariationAndConditionDiagramEditor = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(VariationAndConditionDiagramEditor, _Vue);

  var _super = _createSuper(VariationAndConditionDiagramEditor);

  function VariationAndConditionDiagramEditor() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VariationAndConditionDiagramEditor);

    // Props
    _this = _super.apply(this, arguments); // This class fields;

    _this.eventAnalyzer = new EventAnalyzer["default"]([new GenericDeleteShapeEvents["default"](), new GenericConnectPortsEvents["default"](), new GenericMoveShapeEvents["default"](), new GenericResizeShapeEvents["default"]()]);
    _this.iconGenerators = [new VariationIconGenerator["default"](), new ConditionIconGenerator["default"](), new TableTypeConditionIconGenerator["default"]()];
    return _this;
  } // Emits


  Object(createClass["a" /* default */])(VariationAndConditionDiagramEditor, [{
    key: "onUpdateResources",
    value: function onUpdateResources() {}
  }, {
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(diagramId) {}
  }]);

  return VariationAndConditionDiagramEditor;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], VariationAndConditionDiagramEditorvue_type_script_lang_ts_VariationAndConditionDiagramEditor.prototype, "diagramId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], VariationAndConditionDiagramEditorvue_type_script_lang_ts_VariationAndConditionDiagramEditor.prototype, "allResourcesOnCurrentProduct", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], VariationAndConditionDiagramEditorvue_type_script_lang_ts_VariationAndConditionDiagramEditor.prototype, "lastPropertiesUpdatedDiagramId", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onUpdateResources")], VariationAndConditionDiagramEditorvue_type_script_lang_ts_VariationAndConditionDiagramEditor.prototype, "onUpdateResources", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])("onOpendDiagramPropertiesEditor")], VariationAndConditionDiagramEditorvue_type_script_lang_ts_VariationAndConditionDiagramEditor.prototype, "onOpendDiagramPropertiesEditor", null);

VariationAndConditionDiagramEditorvue_type_script_lang_ts_VariationAndConditionDiagramEditor = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    DiagramEditor: DiagramEditor["default"]
  }
})], VariationAndConditionDiagramEditorvue_type_script_lang_ts_VariationAndConditionDiagramEditor);
/* harmony default export */ var VariationAndConditionDiagramEditorvue_type_script_lang_ts_ = (VariationAndConditionDiagramEditorvue_type_script_lang_ts_VariationAndConditionDiagramEditor);
// CONCATENATED MODULE: ./src/components/diagrams/editor/variationandcondition/VariationAndConditionDiagramEditor.vue?vue&type=script&lang=ts&
 /* harmony default export */ var variationandcondition_VariationAndConditionDiagramEditorvue_type_script_lang_ts_ = (VariationAndConditionDiagramEditorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// CONCATENATED MODULE: ./src/components/diagrams/editor/variationandcondition/VariationAndConditionDiagramEditor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  variationandcondition_VariationAndConditionDiagramEditorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var variationandcondition_VariationAndConditionDiagramEditor = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);