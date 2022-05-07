(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85,82,83,84,86,87,88,89],{

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/CoreResourceEditDialog.vue?vue&type=template&id=9ce59244&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('PropertiesSettingDialog',{attrs:{"id":_vm.resource,"consent":_vm.consent,"title":_vm.title,"subTitle":_vm.subTitle,"iconKey":_vm.iconKey,"width":_vm.dialogWidth,"ignoreEscKey":_vm.ignoreEscKey,"ignoreEnterKey":_vm.ignoreEnterKey},on:{"onClose":_vm.onClose,"onClickOk":_vm.onClickUpdateExecute,"onShow":_vm.onShow},scopedSlots:_vm._u([{key:"inputPart",fn:function(){return [_c('v-container',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"名前","counter":"","autofocus":!_vm.notFocusSetName,"rules":[_vm.validateName],"maxlength":_vm.nameMaxLength},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1)],1),_vm._v(" "),_vm._t("customInputFields"),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-textarea',{attrs:{"counter":"","filled":"","label":"備考・メモ","rows":"2","no-resize":"","max":_vm.descriptionMaxLength,"rules":[_vm.validateDescription]},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1)],1)],2)]},proxy:true}],null,true)})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/CoreResourceEditDialog.vue?vue&type=template&id=9ce59244&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(73);

// EXTERNAL MODULE: ./src/components/PropertiesSettingDialog.vue + 4 modules
var PropertiesSettingDialog = __webpack_require__(772);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(3);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(80);

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
      var resource = this.resource.with(this.name, this.description);

      if (!this.resources.existsSomeTypeAndNameOf(resource)) {
        this.onModifyResource(resource);
        this.onClose();
        return;
      }

      var typeName = resource.type.name;
      var sameNameResource = this.resources.someTypeAndNameOf(resource);

      if (this.diagram.existsResourceOnPlacementOf(sameNameResource.resourceId)) {
        alert("\u65E2\u306B\u91CD\u8907\u3057\u305F\u540D\u524D\u306E".concat(typeName, "\u304C\u5728\u308A\u3001\u56F3\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u307E\u3059\u3002"));
        return;
      }

      var result = confirm("\u65E2\u306B\u91CD\u8907\u3057\u305F\u540D\u524D\u306E".concat(typeName, "\u304C\u5728\u308A\u307E\u3059\u3002\u65E2\u5B58\u306E").concat(typeName, "\u3092\u56F3\u306B\u914D\u7F6E\u3057\u307E\u3059\u304B\uFF1F"));
      if (!result) return;
      this.onJustPutOnDiagram(sameNameResource);
      this.onClose();
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

CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog = CoreResourceEditDialog_1 = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    PropertiesSettingDialog: PropertiesSettingDialog["default"]
  }
})], CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog);
/* harmony default export */ var CoreResourceEditDialogvue_type_script_lang_ts_ = (CoreResourceEditDialogvue_type_script_lang_ts_CoreResourceEditDialog);
// CONCATENATED MODULE: ./src/components/resource/CoreResourceEditDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var resource_CoreResourceEditDialogvue_type_script_lang_ts_ = (CoreResourceEditDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(72);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(756);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(757);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(759);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(760);

// CONCATENATED MODULE: ./src/components/resource/CoreResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_CoreResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "9ce59244",
  null
  
)

/* harmony default export */ var resource_CoreResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {PropertiesSettingDialog: __webpack_require__(772).default})


/* vuetify-loader */






installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PropertiesSettingDialog.vue?vue&type=template&id=171f26f0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":_vm.width,"value":_vm.id},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.onKeyEsc.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onKeyEnter.apply(null, arguments)}]}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v(_vm._s(_vm.iconKey))]),_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")],1),_vm._v(" "),_c('v-card-subtitle',{staticClass:"text-right"},[_vm._v(_vm._s(_vm.subTitle))]),_vm._v(" "),_c('v-card-text',[_vm._t("inputPart")],2),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("キャンセル")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","disabled":!_vm.consent,"color":"primary"},on:{"click":_vm.onClickOk}},[_vm._v("OK")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PropertiesSettingDialog.vue?vue&type=template&id=171f26f0&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(73);

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
var componentNormalizer = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(72);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(743);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(302);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(742);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(755);

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

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(805);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(29).default
var update = add("6e920e92", content, true, {"sourceMap":false});

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(807);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(29).default
var update = add("3eefd6a8", content, true, {"sourceMap":false});

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/ResourceEditDialog.vue?vue&type=template&id=28406e96&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('StandardResourceEditDialog',{attrs:{"resource":_vm.targetStandaerdResource,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onCloseStandardResourceEditDialog}}),_vm._v(" "),_c('HasContentResourceEditDialog',{attrs:{"resource":_vm.targetHasContentResource,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onCloseHasContentResourceEditDialog}}),_vm._v(" "),_c('VariationEditDialog',{attrs:{"resource":_vm.targetVariation,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onCloseVariationEditDialog}}),_vm._v(" "),_c('ConditionEditDialog',{attrs:{"resource":_vm.targetCondition,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onCloseConditionEditDialog}}),_vm._v(" "),_c('TableTypeConditionEditDialog',{attrs:{"resource":_vm.targetTableTypeCondition,"resources":_vm.latestResources,"diagram":_vm.targetDiagram},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onCloseTableTypeConditionEditDialog}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/ResourceEditDialog.vue?vue&type=template&id=28406e96&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(73);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(770);

// EXTERNAL MODULE: ./src/components/resource/StandardResourceEditDialog.vue + 4 modules
var StandardResourceEditDialog = __webpack_require__(811);

// EXTERNAL MODULE: ./src/components/resource/HasContentResourceEditDialog.vue + 4 modules
var HasContentResourceEditDialog = __webpack_require__(812);

// EXTERNAL MODULE: ./src/components/resource/VariationEditDialog.vue + 4 modules
var VariationEditDialog = __webpack_require__(813);

// EXTERNAL MODULE: ./src/components/resource/ConditionEditDialog.vue + 4 modules
var ConditionEditDialog = __webpack_require__(814);

// EXTERNAL MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue + 4 modules
var TableTypeConditionEditDialog = __webpack_require__(815);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(110);

// EXTERNAL MODULE: ./src/domain/resource/HasContentResource.ts
var HasContentResource = __webpack_require__(106);

// EXTERNAL MODULE: ./src/domain/resource/Variation.ts
var Variation = __webpack_require__(215);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(213);

// EXTERNAL MODULE: ./src/domain/resource/TableTypeCondition.ts
var TableTypeCondition = __webpack_require__(142);

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
    return _this;
  }

  Object(createClass["a" /* default */])(ResourceEditDialog, [{
    key: "onUpdatedResource",
    value: function onUpdatedResource(_resource) {}
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
      this.latestResources = resources;
      this.targetDiagram = this.getTargetDiagram(); // リソース別エディタ切り替え判定

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

      if (resource) {
        this.targetStandaerdResource = resource;
        return;
      }

      this.targetStandaerdResource = null;
    }
  }, {
    key: "onModifyResource",
    value: function onModifyResource(resource) {
      var registerd = this.registerResoruce(resource);
      this.onUpdatedResource(registerd);
    }
  }, {
    key: "onJustPutOnDiagram",
    value: function onJustPutOnDiagram(resource) {
      this.onUpdatedResource(resource);
    }
  }, {
    key: "onCloseStandardResourceEditDialog",
    value: function onCloseStandardResourceEditDialog() {
      this.targetStandaerdResource = null;
      this.onClose();
    }
  }, {
    key: "onCloseHasContentResourceEditDialog",
    value: function onCloseHasContentResourceEditDialog() {
      this.targetHasContentResource = null;
      this.onClose();
    }
  }, {
    key: "onCloseVariationEditDialog",
    value: function onCloseVariationEditDialog() {
      this.targetVariation = null;
      this.onClose();
    }
  }, {
    key: "onCloseConditionEditDialog",
    value: function onCloseConditionEditDialog() {
      this.targetCondition = null;
      this.onClose();
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
  }, {
    key: "getTargetDiagram",
    value: function getTargetDiagram() {
      var _a, _b;

      var diagram = (_b = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.getCurrentProduct()) === null || _b === void 0 ? void 0 : _b.diagrams.of(this.diagramId);
      return diagram || null;
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

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ResourceEditDialogvue_type_script_lang_ts_ResourceEditDialog.prototype, "diagramId", void 0);

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
var componentNormalizer = __webpack_require__(67);

// CONCATENATED MODULE: ./src/components/resource/ResourceEditDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resource_ResourceEditDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "28406e96",
  null
  
)

/* harmony default export */ var resource_ResourceEditDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariationEditDialog_vue_vue_type_style_index_0_id_a9800bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariationEditDialog_vue_vue_type_style_index_0_id_a9800bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariationEditDialog_vue_vue_type_style_index_0_id_a9800bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(28);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".values-spread[data-v-a9800bf8]{color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTypeConditionEditDialog_vue_vue_type_style_index_0_id_20d18534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(778);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTypeConditionEditDialog_vue_vue_type_style_index_0_id_20d18534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTypeConditionEditDialog_vue_vue_type_style_index_0_id_20d18534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(28);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".values-spread-headless[data-v-20d18534]{color:#000}.values-spread-headless>div>table>tbody>tr>td[data-v-20d18534]{min-height:120px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/StandardResourceEditDialog.vue?vue&type=template&id=7bebd05c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"dialogWidth":"450"},on:{"onModifyResource":_vm.onModifyResource,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"changeConsent":_vm.changeConsent}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/StandardResourceEditDialog.vue?vue&type=template&id=7bebd05c&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(73);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(770);

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
var componentNormalizer = __webpack_require__(67);

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

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/HasContentResourceEditDialog.vue?vue&type=template&id=322e99b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"dialogWidth":"450","notFocusSetName":"true"},on:{"onModifyResource":_vm.onModifyResourceInner,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_c('v-textarea',{ref:"inputContent",attrs:{"counter":"","filled":"","label":"内容","rows":"3","no-resize":"","autofocus":"","rules":[_vm.validateContent],"hint":_vm.inputContentHint},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1)],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/HasContentResourceEditDialog.vue?vue&type=template&id=322e99b4&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(73);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(770);

// EXTERNAL MODULE: ./src/domain/resource/Purpose.ts
var Purpose = __webpack_require__(217);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
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
var componentNormalizer = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(72);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(756);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(759);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(760);

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

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/VariationEditDialog.vue?vue&type=template&id=a9800bf8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"dialogWidth":"450","ignoreEscKey":"true","ignoreEnterKey":"true"},on:{"onModifyResource":_vm.onModifyResourceInner,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_c('div',{ref:"valuesSpreadDiv",staticClass:"values-spread"})])],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/VariationEditDialog.vue?vue&type=template&id=a9800bf8&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.js
var jexcel = __webpack_require__(797);
var jexcel_default = /*#__PURE__*/__webpack_require__.n(jexcel);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.css
var dist_jexcel = __webpack_require__(798);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(770);

// EXTERNAL MODULE: ./src/domain/resource/Variation.ts
var Variation = __webpack_require__(215);

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
var VariationEditDialogvue_type_style_index_0_id_a9800bf8_scoped_true_lang_css_ = __webpack_require__(804);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(72);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(756);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(759);

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

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/ConditionEditDialog.vue?vue&type=template&id=4fb620b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"dialogWidth":"450"},on:{"onModifyResource":_vm.onModifyResourceInner,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"条件の内容","counter":"","rules":[_vm.validateValue],"maxlength":_vm.valueMaxLength},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1)],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/ConditionEditDialog.vue?vue&type=template&id=4fb620b8&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(73);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(770);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(213);

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
var componentNormalizer = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(72);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(756);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(759);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(84);

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

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=template&id=20d18534&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CoreResourceEditDialog',{attrs:{"resource":_vm.resource,"resources":_vm.resources,"diagram":_vm.diagram,"consent":_vm.consent,"ignoreEscKey":"true","ignoreEnterKey":"true","dialogWidth":"600"},on:{"onModifyResource":_vm.onModifyResourceInner,"onJustPutOnDiagram":_vm.onJustPutOnDiagram,"onClose":_vm.onClose,"showCustomProperties":_vm.showCustomProperties,"changeConsent":_vm.changeConsent},scopedSlots:_vm._u([{key:"customInputFields",fn:function(){return [_c('v-row',[_c('v-col',[_vm._v("\n        条件\n        "),_c('br'),_vm._v(" "),_c('div',{ref:"valuesSpreadDiv",staticClass:"values-spread-headless"}),_vm._v("\n        ※tabキーで列追加、enterキーで行追加、右クリックでその他の操作\n      ")])],1)]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource/TableTypeConditionEditDialog.vue?vue&type=template&id=20d18534&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.js
var jexcel = __webpack_require__(797);
var jexcel_default = /*#__PURE__*/__webpack_require__.n(jexcel);

// EXTERNAL MODULE: ./node_modules/jexcel/dist/jexcel.css
var dist_jexcel = __webpack_require__(798);

// EXTERNAL MODULE: ./src/components/resource/CoreResourceEditDialog.vue + 4 modules
var CoreResourceEditDialog = __webpack_require__(770);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(213);

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
var TableTypeConditionEditDialogvue_type_style_index_0_id_20d18534_scoped_true_lang_css_ = __webpack_require__(806);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(72);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(756);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(759);

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


/***/ })

}]);