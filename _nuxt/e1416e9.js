(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91,96],{

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Prompts; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _presentation_MessageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(342);






var Prompts = /*#__PURE__*/function () {
  function Prompts() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Prompts);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Prompts, [{
    key: "promptNewDiagramName",
    value: function promptNewDiagramName(diagramType, diagrams) {
      var message = "\u8FFD\u52A0\u3059\u308B ".concat(diagramType.name, " \u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      return this.promptDiagramName(message, '', diagramType, diagrams);
    }
  }, {
    key: "promptCopyDiagramName",
    value: function promptCopyDiagramName(diagram, diagrams) {
      var message = "".concat(diagram.name, " \u3092\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002") + "\u30B3\u30D4\u30FC\u5F8C\u306E ".concat(diagram.type.name, " \u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      return this.promptDiagramName(message, diagram.defaultNameWhenCopy(), diagram.type, diagrams);
    }
  }, {
    key: "promptDiagramName",
    value: function promptDiagramName(message, defaultName, diagramType, diagrams) {
      var messageBox = new _presentation_MessageBox__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]();
      var name = messageBox.prompt(message, defaultName, function (inputText) {
        if (inputText.length > _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].NAME_MAX_LENGTH) {
          alert("".concat(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].NAME_MAX_LENGTH, "\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"));
          return false;
        }

        var exists = diagrams.existsSameTypeAndName(inputText, diagramType);
        if (exists) alert("\u65E2\u306B\u540C\u540D\u306E ".concat(diagramType.name, " \u304C\u5728\u308A\u307E\u3059\u3002"));
        return !exists;
      });
      if (name) return name;
      return '';
    }
  }, {
    key: "confirmDeleteDiagramWithIcon",
    value: function confirmDeleteDiagramWithIcon(diagram) {
      var message = '指定された図は編集されています。\n(アイコンが配置されています)\n' + "".concat(diagram.name, " \u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\u3002");
      return window.confirm(message);
    }
  }]);

  return Prompts;
}();



/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/menu/Rdra20DiagramOrTypeMenu.vue?vue&type=template&id=250170aa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-list',{attrs:{"dence":""}},[(_vm.isFolder)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuAddDiagram}},[_c('v-list-item-title',[_vm._v("図の追加...")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuEditDiagramProperties}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" の設定...")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuCopyDiagram}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" のコピー...")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuRemoveDiagram}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" の削除")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuExportDiagram}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" のエクスポート")])],1):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/main/menu/Rdra20DiagramOrTypeMenu.vue?vue&type=template&id=250170aa&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/main/Prompts.ts
var Prompts = __webpack_require__(944);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/menu/Rdra20DiagramOrTypeMenu.vue?vue&type=script&lang=ts&








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




var Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(Rdra20DiagramOrTypeMenu, _Vue);

  var _super = _createSuper(Rdra20DiagramOrTypeMenu);

  function Rdra20DiagramOrTypeMenu() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Rdra20DiagramOrTypeMenu);

    _this = _super.apply(this, arguments);
    _this.prompts = new Prompts["default"]();
    return _this;
  }

  Object(createClass["a" /* default */])(Rdra20DiagramOrTypeMenu, [{
    key: "onAddedDiagram",
    value: function onAddedDiagram(_diagram) {}
  }, {
    key: "onRemovedDiagram",
    value: function onRemovedDiagram(_diagramId) {}
  }, {
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(_diagramId) {}
  }, {
    key: "onClickMenuAddDiagram",
    value: function onClickMenuAddDiagram() {
      var diagram = this.addDiagram(this.item.rdra20DiagramType());
      if (!diagram) return;
      this.onAddedDiagram(diagram);
    }
  }, {
    key: "onClickMenuCopyDiagram",
    value: function onClickMenuCopyDiagram() {
      var diagram = this.copyDiagram(this.item.id);
      if (!diagram) return;
      this.onAddedDiagram(diagram);
    }
  }, {
    key: "onClickMenuRemoveDiagram",
    value: function onClickMenuRemoveDiagram() {
      if (!this.removeDiagram(this.item.id)) return;
      this.onRemovedDiagram(this.item.id);
    }
  }, {
    key: "onClickMenuEditDiagramProperties",
    value: function onClickMenuEditDiagramProperties() {
      this.onOpendDiagramPropertiesEditor(this.item.id);
    }
  }, {
    key: "onClickMenuExportDiagram",
    value: function onClickMenuExportDiagram() {
      this.diagramExportService.downloadExportFileOnClient(this.item.id);
    }
  }, {
    key: "diagramName",
    get: function get() {
      return this.item.name;
    }
  }, {
    key: "isFolder",
    get: function get() {
      return this.item.isRdra20DiagramTypeFolder();
    }
  }, {
    key: "isDiagram",
    get: function get() {
      return this.item.isRdra20Diagram();
    } // private method

  }, {
    key: "addDiagram",
    value: function addDiagram(diagramType) {
      var product = this.repository.getCurrentProduct();
      if (!product) return null;
      var diagrams = product.diagrams;
      var name = this.prompts.promptNewDiagramName(diagramType, diagrams);
      if (!name) return null;
      var modifiedProduct = product.createAndAddDiagram(name, diagramType);
      var diagram = modifiedProduct.diagrams.last();
      this.repository.registerCurrentProduct(modifiedProduct);
      return diagram;
    }
  }, {
    key: "copyDiagram",
    value: function copyDiagram(diagramId) {
      var _this2 = this;

      var distDiagram = null;
      var result = this.modifyDiagram(diagramId, function (srcDiagram, product) {
        var diagrams = product.diagrams;

        var name = _this2.prompts.promptCopyDiagramName(srcDiagram, diagrams);

        if (!name) return null;
        distDiagram = srcDiagram.cloneWith(diagrams.generateDiagramId(), name);
        var addedDiagrams = diagrams.add(distDiagram);
        return product.withDiagrams(addedDiagrams);
      });
      return result ? distDiagram : null;
    }
  }, {
    key: "removeDiagram",
    value: function removeDiagram(diagramId) {
      var _this3 = this;

      return this.modifyDiagram(diagramId, function (diagram, product) {
        if (diagram.placements.length > 0) {
          if (!_this3.prompts.confirmDeleteDiagramWithIcon(diagram)) return null;
        }

        var removedDiagrams = product.diagrams.remove(diagram);
        return product.withDiagrams(removedDiagrams);
      });
    }
  }, {
    key: "modifyDiagram",
    value: function modifyDiagram(diagramId, func) {
      var product = this.repository.getCurrentProduct();
      if (!product) return true;
      var diagrams = product.diagrams;
      var diagram = diagrams.of(diagramId);
      if (!diagram) return true;
      var modifedProduct = func(diagram, product);
      if (!modifedProduct) return false;
      this.repository.registerCurrentProduct(modifedProduct);
      return true;
    }
  }]);

  return Rdra20DiagramOrTypeMenu;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu.prototype, "repository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu.prototype, "diagramExportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu.prototype, "item", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onAddedDiagram')], Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu.prototype, "onAddedDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onRemovedDiagram')], Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu.prototype, "onRemovedDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onOpendDiagramPropertiesEditor')], Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu.prototype, "onOpendDiagramPropertiesEditor", null);

Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu = __decorate([nuxt_property_decorator_umd["Component"]], Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu);
/* harmony default export */ var Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_ = (Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_Rdra20DiagramOrTypeMenu);
// CONCATENATED MODULE: ./src/components/main/menu/Rdra20DiagramOrTypeMenu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var menu_Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_ = (Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(61);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(222);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(105);

// CONCATENATED MODULE: ./src/components/main/menu/Rdra20DiagramOrTypeMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  menu_Rdra20DiagramOrTypeMenuvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "250170aa",
  null
  
)

/* harmony default export */ var menu_Rdra20DiagramOrTypeMenu = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */]})


/***/ })

}]);