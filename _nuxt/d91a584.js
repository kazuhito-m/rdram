(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113,112],{

/***/ 820:
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

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(883);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("7bb655a6", content, true, {"sourceMap":false});

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragAndDropSlideBarId; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _presentation_DragAndDropValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(820);








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

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPaneWithSlideBarLayout_vue_vue_type_style_index_0_id_a3bb8534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(838);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPaneWithSlideBarLayout_vue_vue_type_style_index_0_id_a3bb8534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoPaneWithSlideBarLayout_vue_vue_type_style_index_0_id_a3bb8534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pane-container[data-v-a3bb8534]{display:flex;height:100%;width:100%;max-width:none;padding-right:0;padding-left:0;margin-right:unset;margin-left:unset}.left-pane[data-v-a3bb8534]{text-align:left;width:250px}.left-pane[data-v-a3bb8534],.right-pane[data-v-a3bb8534]{overflow:hidden;resize:none}.right-pane[data-v-a3bb8534]{flex-grow:1;width:0;min-width:0}.slidebar[data-v-a3bb8534]{width:8px;background-color:#404040;cursor:col-resize;transition:.25s}.slidebar[data-v-a3bb8534]:hover{background-color:#a0a0a0;transition:.25s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/twopane/TwoPaneWithSlideBarLayout.vue?vue&type=template&id=a3bb8534&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{staticClass:"text-center"},[_c('div',{ref:"paneContainer",staticClass:"pane-container",on:{"dragover":_vm.onDragOverMasterPaneSlideBar,"drop":_vm.onDropMasterPaneSlideBar}},[_c('div',{ref:"leftPane",staticClass:"left-pane"},[_vm._t("leftPane")],2),_vm._v(" "),_c('div',{staticClass:"slidebar",attrs:{"id":"slideBar","draggable":"true"},on:{"dblclick":_vm.onDoubleClickSlideBar,"dragstart":_vm.onDragStartMasterPaneSlideBar}}),_vm._v(" "),_c('div',{ref:"rightPane",staticClass:"right-pane"},[_vm._t("rightPane")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/twopane/TwoPaneWithSlideBarLayout.vue?vue&type=template&id=a3bb8534&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/twopane/DragAndDropSlideBarId.ts
var DragAndDropSlideBarId = __webpack_require__(869);

// EXTERNAL MODULE: ./src/domain/world/Uuid.ts
var Uuid = __webpack_require__(345);

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
var TwoPaneWithSlideBarLayoutvue_type_style_index_0_id_a3bb8534_scoped_true_lang_css_ = __webpack_require__(882);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VGrid/_grid.sass
var _grid = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/grid.js
var grid = __webpack_require__(344);

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


/***/ })

}]);