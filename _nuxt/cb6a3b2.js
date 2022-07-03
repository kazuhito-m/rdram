(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ 902:
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


/***/ })

}]);