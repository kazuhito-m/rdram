(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

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
var update = add("06af3092", content, true, {"sourceMap":false});

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TwoPainWithSlideBarLayout.vue?vue&type=template&id=7daee766&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{staticClass:"text-center"},[_c('div',{staticClass:"pain-container",on:{"dragover":_vm.onDragOverMasterPainSlideBar,"drop":_vm.onDropMasterPainSlideBar}},[_c('div',{ref:"leftPain",staticClass:"left-pain"},[_vm._t("leftPain")],2),_vm._v(" "),_c('div',{staticClass:"slidebar",attrs:{"id":"slideBar","draggable":"true"},on:{"dblclick":_vm.onDoubleClickSlideBar,"dragstart":_vm.onDragStartMasterPainSlideBar}}),_vm._v(" "),_c('div',{ref:"rightPain",staticClass:"right-pain"},[_vm._t("rightPain")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TwoPainWithSlideBarLayout.vue?vue&type=template&id=7daee766&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

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
var es_regexp_exec = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(95);

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
// EXTERNAL MODULE: ./src/components/TwoPainWithSlideBarLayout.vue?vue&type=style&index=0&id=7daee766&scoped=true&lang=css&
var TwoPainWithSlideBarLayoutvue_type_style_index_0_id_7daee766_scoped_true_lang_css_ = __webpack_require__(744);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(71);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(867);

// CONCATENATED MODULE: ./src/components/TwoPainWithSlideBarLayout.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TwoPainWithSlideBarLayoutvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "7daee766",
  null
  
)

/* harmony default export */ var components_TwoPainWithSlideBarLayout = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VFlex: VFlex["a" /* default */]})


/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPainWithSlideBarLayout_vue_vue_type_style_index_0_id_7daee766_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(717);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPainWithSlideBarLayout_vue_vue_type_style_index_0_id_7daee766_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPainWithSlideBarLayout_vue_vue_type_style_index_0_id_7daee766_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pain-container[data-v-7daee766]{display:flex;height:100%;width:100%;max-width:none;padding-right:0;padding-left:0;margin-right:unset;margin-left:unset}.left-pain[data-v-7daee766]{overflow:hidden;text-align:left;resize:both;width:250px}.right-pain[data-v-7daee766]{flex-grow:1;width:0;min-width:0;overflow:hidden}.slidebar[data-v-7daee766]{width:8px;background-color:grey;cursor:col-resize}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(312);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(313);


/* harmony default export */ __webpack_exports__["a"] = (Object(_grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('flex'));

/***/ })

}]);