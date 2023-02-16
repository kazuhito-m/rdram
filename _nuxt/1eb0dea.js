(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/menu/TabClickMenu.vue?vue&type=template&id=26e15754&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-list',{attrs:{"dence":""}},[(_vm.visibleOtherClose)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickOtherClose}},[_c('v-list-item-title',[_vm._v("他のタブをすべて閉じる")])],1):_vm._e(),_vm._v(" "),(_vm.visibleSideClose)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickLeftClose}},[_c('v-list-item-title',[_vm._v("左のタブをすべて閉じる")])],1):_vm._e(),_vm._v(" "),(_vm.visibleSideClose)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickRightClose}},[_c('v-list-item-title',[_vm._v("右のタブをすべて閉じる")])],1):_vm._e(),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickAllClose}},[_c('v-list-item-title',[_vm._v("タブをすべて閉じる")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/main/menu/TabClickMenu.vue?vue&type=template&id=26e15754&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/menu/TabClickMenu.vue?vue&type=script&lang=ts&








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



var TabClickMenuvue_type_script_lang_ts_TabClickMenu = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(TabClickMenu, _Vue);

  var _super = _createSuper(TabClickMenu);

  function TabClickMenu() {
    Object(classCallCheck["a" /* default */])(this, TabClickMenu);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TabClickMenu, [{
    key: "visibleOtherClose",
    get: function get() {
      return this.openTabs.length > 1;
    }
  }, {
    key: "visibleSideClose",
    get: function get() {
      var item = this.item;
      var tabs = this.openTabs;
      if (tabs.length < 3) return false;
      return !tabs[0].equals(item) && !tabs[tabs.length - 1].equals(item);
    }
  }, {
    key: "onClickOtherClose",
    value: function onClickOtherClose() {
      this.onClickLeftClose();
      this.onClickRightClose();
    }
  }, {
    key: "onClickLeftClose",
    value: function onClickLeftClose() {
      var index = this.selectedIndex();
      if (index < 0) return;
      this.openTabs.splice(0, index);
    }
  }, {
    key: "onClickRightClose",
    value: function onClickRightClose() {
      var index = this.selectedIndex();
      if (index < 0) return;
      this.openTabs.splice(index + 1);
    }
  }, {
    key: "onClickAllClose",
    value: function onClickAllClose() {
      this.openTabs.splice(0);
    }
  }, {
    key: "selectedIndex",
    value: function selectedIndex() {
      var t = this.item;
      return this.openTabs.findIndex(function (i) {
        return i.equals(t);
      });
    }
  }]);

  return TabClickMenu;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], TabClickMenuvue_type_script_lang_ts_TabClickMenu.prototype, "item", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], TabClickMenuvue_type_script_lang_ts_TabClickMenu.prototype, "openTabs", void 0);

TabClickMenuvue_type_script_lang_ts_TabClickMenu = __decorate([nuxt_property_decorator_umd["Component"]], TabClickMenuvue_type_script_lang_ts_TabClickMenu);
/* harmony default export */ var TabClickMenuvue_type_script_lang_ts_ = (TabClickMenuvue_type_script_lang_ts_TabClickMenu);
// CONCATENATED MODULE: ./src/components/main/menu/TabClickMenu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var menu_TabClickMenuvue_type_script_lang_ts_ = (TabClickMenuvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(341);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(107);

// CONCATENATED MODULE: ./src/components/main/menu/TabClickMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  menu_TabClickMenuvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "26e15754",
  null
  
)

/* harmony default export */ var menu_TabClickMenu = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */]})


/***/ })

}]);