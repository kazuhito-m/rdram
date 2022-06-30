(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/open/DiagramTypeSelectorDialog.vue?vue&type=template&id=6c64ce80&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"400"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close()}},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[(_vm.isRelateDiagramExists)?_c('span',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-selection-multiple")]),_vm._v(" 開く図の種類の選択\n      ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n        ["+_vm._s(_vm.resource.type.name)+"]アイコンに対応する図を開きます。"),_c('br'),_vm._v("\n        図の種類を選択してください。\n      ")])],1):_c('span',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-selection-multiple")]),_vm._v(" 新しい図の種類の選択\n      ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n        ["+_vm._s(_vm.resource.type.name)+"]アイコンに対応する図を新たに作成します。"),_c('br'),_vm._v("\n        新規作成する図の種類を選択してください。\n      ")])],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n      アイコン(図の名前) :\n      "),_c('v-chip',{attrs:{"color":"primary","dark":"","draggable":""}},[_c('v-tooltip',{attrs:{"bottom":"","open-delay":"500"},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-icon',_vm._g(_vm._b({},'v-icon',attrs,false),on),[_vm._v("\n              "+_vm._s(_vm.resource.type.iconKey)+"\n            ")])]}}])},[_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resource.type.name))])]),_vm._v("\n        "+_vm._s(_vm.resource.name)+"\n      ")],1),_vm._v(" "),_c('v-radio-group',{scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._v(" 図の種類 ")]},proxy:true}]),model:{value:(_vm.diagramTypeId),callback:function ($$v) {_vm.diagramTypeId=$$v},expression:"diagramTypeId"}},[_vm._v(" "),_vm._l((_vm.diagramTypes),function(diagramType){return _c('v-radio',{key:diagramType.id,attrs:{"value":diagramType.id},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('div',[_c('v-icon',[_vm._v(_vm._s(diagramType.iconKey))]),_vm._v("\n              "+_vm._s(diagramType.name)+"\n            ")],1)]},proxy:true}],null,true)})})],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClickCancel}},[_vm._v(" キャンセル ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"green darken-1"},on:{"click":_vm.onClickOk}},[_vm._v(" OK ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/open/DiagramTypeSelectorDialog.vue?vue&type=template&id=6c64ce80&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(87);

// EXTERNAL MODULE: ./src/domain/product/Product.ts + 2 modules
var Product = __webpack_require__(169);

// EXTERNAL MODULE: ./src/domain/diagram/type/DiagramTypes.ts + 1 modules
var DiagramTypes = __webpack_require__(171);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/open/DiagramTypeSelectorDialog.vue?vue&type=script&lang=ts&








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

var DiagramTypeSelectorDialog_1;





var DiagramTypeSelectorDialogvue_type_script_lang_ts_DiagramTypeSelectorDialog = DiagramTypeSelectorDialog_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(DiagramTypeSelectorDialog, _Vue);

  var _super = _createSuper(DiagramTypeSelectorDialog);

  function DiagramTypeSelectorDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DiagramTypeSelectorDialog);

    _this = _super.apply(this, arguments);
    _this.visible = false;
    _this.resolve = null;
    _this.reject = null;
    _this.diagramTypes = [];
    _this.resource = Resource["a" /* default */].empty();
    _this.isRelateDiagramExists = false;
    _this.diagramTypeId = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(DiagramTypeSelectorDialog, [{
    key: "onClickCancel",
    value: function onClickCancel() {
      this.close();
      this.resolve(DiagramTypeSelectorDialog_1.NOTHING_DIAGRAM_ID);
    }
  }, {
    key: "onClickOk",
    value: function onClickOk() {
      var diagramId = this.fixedDiagramId();
      this.close();
      this.resolve(diagramId);
    }
  }, {
    key: "show",
    value: function show(resourceId) {
      var _this2 = this;

      var diagramIds = this.findRelateDiagramIdsOf(resourceId);
      if (diagramIds.length === 1) return new Promise(function (resolve) {
        return resolve(diagramIds[0]);
      });
      this.diagramTypeId = this.diagramTypes[0].id;
      this.visible = true;
      return new Promise(function (resolve, reject) {
        _this2.resolve = resolve;
        _this2.reject = reject;
      });
    }
  }, {
    key: "findRelateDiagramIdsOf",
    value: function findRelateDiagramIdsOf(resourceId) {
      var diagrams = this.findRelateDiagrams(resourceId);
      if (diagrams.length === 1) return diagrams.map(function (diagram) {
        return diagram.id;
      });
      this.isRelateDiagramExists = diagrams.length > 1;

      if (!this.isRelateDiagramExists) {
        this.diagramTypes = Product["a" /* default */].correspondingDiagramTypesOf(this.resource);
        return [];
      }

      this.diagramTypes = diagrams.map(function (diagram) {
        return diagram.type;
      });
      return diagrams.map(function (diagram) {
        return diagram.id;
      });
    }
  }, {
    key: "findRelateDiagrams",
    value: function findRelateDiagrams(resourceId) {
      var _a;

      var product = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.getCurrentProduct();
      this.resource = product.resources.of(resourceId);
      return product.diagramsOfResourceRelate(resourceId);
    }
  }, {
    key: "fixedDiagramId",
    value: function fixedDiagramId() {
      var diagramType = DiagramTypes["a" /* default */].byId(this.diagramTypeId);
      var diagrams = this.findRelateDiagrams(this.resource.resourceId);
      if (diagrams.length === 0) return this.createAndAddDiagram(this.resource.name, diagramType).id;
      var diagram = diagrams.typeOf(diagramType).last();
      return diagram.id;
    }
  }, {
    key: "createAndAddDiagram",
    value: function createAndAddDiagram(name, diagramType) {
      var repository = this.repository;
      var product = repository.getCurrentProduct();
      var modifiedProduct = product.createAndAddDiagram(name, diagramType);
      var diagram = modifiedProduct.diagrams.last();
      repository.registerCurrentProduct(modifiedProduct);
      return diagram;
    }
  }, {
    key: "close",
    value: function close() {
      this.visible = false;
    }
  }]);

  return DiagramTypeSelectorDialog;
}(lib["Vue"]);

DiagramTypeSelectorDialogvue_type_script_lang_ts_DiagramTypeSelectorDialog.NOTHING_DIAGRAM_ID = 0;

__decorate([Object(lib["Inject"])()], DiagramTypeSelectorDialogvue_type_script_lang_ts_DiagramTypeSelectorDialog.prototype, "repository", void 0);

DiagramTypeSelectorDialogvue_type_script_lang_ts_DiagramTypeSelectorDialog = DiagramTypeSelectorDialog_1 = __decorate([lib["Component"]], DiagramTypeSelectorDialogvue_type_script_lang_ts_DiagramTypeSelectorDialog);
/* harmony default export */ var DiagramTypeSelectorDialogvue_type_script_lang_ts_ = (DiagramTypeSelectorDialogvue_type_script_lang_ts_DiagramTypeSelectorDialog);
// CONCATENATED MODULE: ./src/components/diagrams/open/DiagramTypeSelectorDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var open_DiagramTypeSelectorDialogvue_type_script_lang_ts_ = (DiagramTypeSelectorDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(784);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(283);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(783);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(323);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
var VRadio = __webpack_require__(803);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
var VRadioGroup = __webpack_require__(804);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(797);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(806);

// CONCATENATED MODULE: ./src/components/diagrams/open/DiagramTypeSelectorDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  open_DiagramTypeSelectorDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "6c64ce80",
  null
  
)

/* harmony default export */ var open_DiagramTypeSelectorDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */













installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VChip: VChip["a" /* default */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VRadio: VRadio["a" /* default */],VRadioGroup: VRadioGroup["a" /* default */],VSpacer: VSpacer["a" /* default */],VTooltip: VTooltip["a" /* default */]})


/***/ })

}]);