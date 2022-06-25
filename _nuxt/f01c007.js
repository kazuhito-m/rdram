(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/editor/template/canvas/IconToolTip.vue?vue&type=template&id=3d42ee2a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-tooltip',{attrs:{"top":"","absolute":"","z-index":"1","position-x":_vm.positionX,"position-y":_vm.positionY},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('span',[_c('div',[_vm._v("種類 : "+_vm._s(_vm.type.name))]),_vm._v(" "),(_vm.description.length > 0)?_c('div',[_vm._v("\n        備考・メモ : "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.description)}})]):_vm._e()])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/IconToolTip.vue?vue&type=template&id=3d42ee2a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
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
var componentNormalizer = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(61);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(798);

// CONCATENATED MODULE: ./src/components/diagrams/editor/template/canvas/IconToolTip.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  canvas_IconToolTipvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "3d42ee2a",
  null
  
)

/* harmony default export */ var canvas_IconToolTip = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VTooltip: VTooltip["a" /* default */]})


/***/ })

}]);