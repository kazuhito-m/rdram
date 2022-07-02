(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83,82,84,85,88],{

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ViewOrFolder_ViewOrFolder; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(39);

// CONCATENATED MODULE: ./src/domain/basic/Range.ts



var Range_Range = /*#__PURE__*/function () {
  function Range(start, end) {
    Object(classCallCheck["a" /* default */])(this, Range);

    this.start = start;
    this.end = end;
  }

  Object(createClass["a" /* default */])(Range, [{
    key: "in",
    value: function _in(value) {
      return this.start <= value && this.end > value;
    }
  }, {
    key: "startTo",
    value: function startTo(value) {
      return this.start + value;
    }
  }, {
    key: "nextTo",
    value: function nextTo(end) {
      return new Range(this.end, end);
    }
  }], [{
    key: "of",
    value: function of(start, end) {
      var values = [start, end];
      return new Range(Math.min.apply(Math, values), Math.max.apply(Math, values));
    }
  }]);

  return Range;
}();


// EXTERNAL MODULE: ./src/domain/diagram/type/DiagramTypes.ts
var DiagramTypes = __webpack_require__(172);

// CONCATENATED MODULE: ./src/components/main/model/ViewOrFolder.ts








var ViewOrFolder_ViewOrFolder = /*#__PURE__*/function () {
  function ViewOrFolder(id, name, // TODO イミュータブルで行けるようにしたい
  children, disabled, folder) {
    var iconKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
    var iconCaption = arguments.length > 6 ? arguments[6] : undefined;

    Object(classCallCheck["a" /* default */])(this, ViewOrFolder);

    this.id = id;
    this.name = name;
    this.children = children;
    this.disabled = disabled;
    this.folder = folder;
    this.iconKey = iconKey;
    this.iconCaption = iconCaption;
  }

  Object(createClass["a" /* default */])(ViewOrFolder, [{
    key: "isDiagram",
    value: function isDiagram() {
      return ViewOrFolder.DIAGRAM_IDS.in(this.id);
    }
  }, {
    key: "isAnalysis",
    value: function isAnalysis() {
      return ViewOrFolder.ANALYSIS_IDS.in(this.id);
    }
  }, {
    key: "isRdra20DiagramTypeFolder",
    value: function isRdra20DiagramTypeFolder() {
      return ViewOrFolder.RDRA20_TYPE_IDS.in(this.id);
    }
  }, {
    key: "isCustomDiagramTypeFolder",
    value: function isCustomDiagramTypeFolder() {
      return ViewOrFolder.CUSTOM_TYPE_IDS.in(this.id);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.equals(ViewOrFolder.EMPTY);
    }
  }, {
    key: "rdra20DiagramType",
    value: function rdra20DiagramType() {
      var range = ViewOrFolder.RDRA20_TYPE_IDS;
      if (!range.in(this.id)) throw new Error("図フォルダじゃないのにType取得を呼びだした。");
      return DiagramTypes["a" /* default */].byId(this.id - range.start);
    }
  }, {
    key: "customDiagramType",
    value: function customDiagramType() {
      var range = ViewOrFolder.CUSTOM_TYPE_IDS;
      if (!range.in(this.id)) throw new Error("図フォルダじゃないのにType取得を呼びだした。");
      return DiagramTypes["a" /* default */].byId(this.id - range.start);
    }
  }, {
    key: "diagramType",
    value: function diagramType() {
      return this.isCustomDiagramTypeFolder() ? this.customDiagramType() : this.rdra20DiagramType();
    }
  }, {
    key: "equals",
    value: function equals(value) {
      return this.id === value.id;
    }
  }, {
    key: "with",
    value: function _with() {
      for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
      }

      return new ViewOrFolder(this.id, this.name, children, this.disabled, this.folder, this.iconKey, this.iconCaption);
    }
  }, {
    key: "clone",
    value: function clone() {
      var newChildren = this.children.map(function (i) {
        return i.clone();
      });
      return this.with.apply(this, Object(toConsumableArray["a" /* default */])(newChildren));
    }
  }], [{
    key: "rdra20DiagramTypeFolderOf",
    value: function rdra20DiagramTypeFolderOf(type) {
      return of(this.RDRA20_TYPE_IDS.startTo(type.id), type.name, true);
    }
  }, {
    key: "diagramOf",
    value: function diagramOf(diagram) {
      var type = diagram.type;
      return of(diagram.id, diagram.name, false, type.iconKey, type.name);
    }
  }, {
    key: "customDiagramTypeFolderOf",
    value: function customDiagramTypeFolderOf(type) {
      return of(this.CUSTOM_TYPE_IDS.startTo(type.id), type.name, true);
    }
  }]);

  return ViewOrFolder;
}();


ViewOrFolder_ViewOrFolder.RDRAM20_FOLDER = of(-1, "RDRA 2.0", true);
ViewOrFolder_ViewOrFolder.CUSTOM_FOLDER = of(-2, "カスタム", true);
ViewOrFolder_ViewOrFolder.ANALYSIS_FOLDER = of(-3, "分析", true);
ViewOrFolder_ViewOrFolder.ICON_LIST = of(3000000000000001, "アイコン一覧", false, "mdi-format-list-bulleted-type", '分析:アイコン一覧');
ViewOrFolder_ViewOrFolder.SCREEN_TRANSITION = of(3000000000000002, "画面遷移", false, "mdi-file-tree-outline", '分析:画面遷移');
ViewOrFolder_ViewOrFolder.EMPTY = new ViewOrFolder_ViewOrFolder(0, "(空)", [], true, false, "", "");
ViewOrFolder_ViewOrFolder.TOP_FOLDER_IDS = Range_Range.of(-3, 0);
ViewOrFolder_ViewOrFolder.DIAGRAM_IDS = ViewOrFolder_ViewOrFolder.TOP_FOLDER_IDS.nextTo(1000000000000000);
ViewOrFolder_ViewOrFolder.RDRA20_TYPE_IDS = ViewOrFolder_ViewOrFolder.DIAGRAM_IDS.nextTo(2000000000000000);
ViewOrFolder_ViewOrFolder.CUSTOM_TYPE_IDS = ViewOrFolder_ViewOrFolder.RDRA20_TYPE_IDS.nextTo(3000000000000000);
ViewOrFolder_ViewOrFolder.ANALYSIS_IDS = ViewOrFolder_ViewOrFolder.CUSTOM_TYPE_IDS.nextTo(4000000000000000);

function of(id, name) {
  var folder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var iconKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var iconCaption = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  return new ViewOrFolder_ViewOrFolder(id, name, [], false, folder, iconKey, iconCaption);
}

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Prompts; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(168);
/* harmony import */ var _presentation_MessageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(350);






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

/***/ 966:
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
var es_array_splice = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

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


/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/menu/DiagramOrTypeMenu.vue?vue&type=template&id=0844621c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-list',{attrs:{"dence":""}},[(_vm.isFolder)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuAddDiagram}},[_c('v-list-item-title',[_vm._v("図の追加...")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuEditDiagramProperties}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" の設定...")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuCopyDiagram}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" のコピー...")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuRemoveDiagram}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" の削除")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickMenuExportDiagram}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" のエクスポート")])],1):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/main/menu/DiagramOrTypeMenu.vue?vue&type=template&id=0844621c&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/main/Prompts.ts
var Prompts = __webpack_require__(945);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/menu/DiagramOrTypeMenu.vue?vue&type=script&lang=ts&








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




var DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(DiagramOrTypeMenu, _Vue);

  var _super = _createSuper(DiagramOrTypeMenu);

  function DiagramOrTypeMenu() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DiagramOrTypeMenu);

    _this = _super.apply(this, arguments);
    _this.prompts = new Prompts["default"]();
    return _this;
  }

  Object(createClass["a" /* default */])(DiagramOrTypeMenu, [{
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
      var item = this.item;
      var diagramType = item.isCustomDiagramTypeFolder() ? item.customDiagramType() : item.rdra20DiagramType();
      var diagram = this.addDiagram(diagramType);
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
      var item = this.item;
      return item.isRdra20DiagramTypeFolder() || item.isCustomDiagramTypeFolder();
    }
  }, {
    key: "isDiagram",
    get: function get() {
      return this.item.isDiagram();
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

  return DiagramOrTypeMenu;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu.prototype, "repository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu.prototype, "diagramExportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Prop"])()], DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu.prototype, "item", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onAddedDiagram')], DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu.prototype, "onAddedDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onRemovedDiagram')], DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu.prototype, "onRemovedDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onOpendDiagramPropertiesEditor')], DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu.prototype, "onOpendDiagramPropertiesEditor", null);

DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu = __decorate([nuxt_property_decorator_umd["Component"]], DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu);
/* harmony default export */ var DiagramOrTypeMenuvue_type_script_lang_ts_ = (DiagramOrTypeMenuvue_type_script_lang_ts_DiagramOrTypeMenu);
// CONCATENATED MODULE: ./src/components/main/menu/DiagramOrTypeMenu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var menu_DiagramOrTypeMenuvue_type_script_lang_ts_ = (DiagramOrTypeMenuvue_type_script_lang_ts_); 
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

// CONCATENATED MODULE: ./src/components/main/menu/DiagramOrTypeMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  menu_DiagramOrTypeMenuvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "0844621c",
  null
  
)

/* harmony default export */ var menu_DiagramOrTypeMenu = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */]})


/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/menu/ItemRightClickMenu.vue?vue&type=template&id=0581d8cb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-menu',{attrs:{"value":_vm.visible,"position-x":_vm.positionX,"position-y":_vm.positionY,"close-on-click":"","close-on-content-click":"","offset-x":"","rounded":""},on:{"input":_vm.close}},[(_vm.tabClick && _vm.openTabs.length > 1)?_c('TabClickMenu',{attrs:{"item":_vm.item,"openTabs":_vm.openTabs}}):_vm._e(),_vm._v(" "),_c('DiagramOrTypeMenu',{attrs:{"item":_vm.item},on:{"onAddedDiagram":_vm.onAddedDiagram,"onRemovedDiagram":_vm.onRemovedDiagram,"onOpendDiagramPropertiesEditor":_vm.onOpendDiagramPropertiesEditor}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/main/menu/ItemRightClickMenu.vue?vue&type=template&id=0581d8cb&scoped=true&

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

// EXTERNAL MODULE: ./src/components/main/menu/TabClickMenu.vue + 4 modules
var TabClickMenu = __webpack_require__(966);

// EXTERNAL MODULE: ./src/components/main/menu/DiagramOrTypeMenu.vue + 4 modules
var DiagramOrTypeMenu = __webpack_require__(967);

// EXTERNAL MODULE: ./src/components/main/model/ViewOrFolder.ts + 1 modules
var ViewOrFolder = __webpack_require__(909);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/menu/ItemRightClickMenu.vue?vue&type=script&lang=ts&







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






var ItemRightClickMenuvue_type_script_lang_ts_ItemRightClickMenu = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(ItemRightClickMenu, _Vue);

  var _super = _createSuper(ItemRightClickMenu);

  function ItemRightClickMenu() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ItemRightClickMenu);

    _this = _super.apply(this, arguments);
    _this.visible = false;
    _this.positionX = 0;
    _this.positionY = 0;
    _this.tabClick = false;
    _this.item = ViewOrFolder["default"].EMPTY;
    return _this;
  }

  Object(createClass["a" /* default */])(ItemRightClickMenu, [{
    key: "onAddedDiagram",
    value: function onAddedDiagram(_diagram) {}
  }, {
    key: "onRemovedDiagram",
    value: function onRemovedDiagram(_diagramId) {}
  }, {
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(_diagramId) {} // public method

  }, {
    key: "show",
    value: function show(item, x, y, tabClick) {
      this.positionX = x;
      this.positionY = y;
      this.tabClick = tabClick;
      console.log('openTabs:', this.openTabs);
      this.item = item;
      this.visible = true;
    }
  }, {
    key: "close",
    value: function close() {
      this.visible = false;
    }
  }]);

  return ItemRightClickMenu;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Prop"])({
  required: true
})], ItemRightClickMenuvue_type_script_lang_ts_ItemRightClickMenu.prototype, "openTabs", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onAddedDiagram')], ItemRightClickMenuvue_type_script_lang_ts_ItemRightClickMenu.prototype, "onAddedDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onRemovedDiagram')], ItemRightClickMenuvue_type_script_lang_ts_ItemRightClickMenu.prototype, "onRemovedDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onOpendDiagramPropertiesEditor')], ItemRightClickMenuvue_type_script_lang_ts_ItemRightClickMenu.prototype, "onOpendDiagramPropertiesEditor", null);

ItemRightClickMenuvue_type_script_lang_ts_ItemRightClickMenu = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    TabClickMenu: TabClickMenu["default"],
    DiagramOrTypeMenu: DiagramOrTypeMenu["default"]
  }
})], ItemRightClickMenuvue_type_script_lang_ts_ItemRightClickMenu);
/* harmony default export */ var ItemRightClickMenuvue_type_script_lang_ts_ = (ItemRightClickMenuvue_type_script_lang_ts_ItemRightClickMenu);
// CONCATENATED MODULE: ./src/components/main/menu/ItemRightClickMenu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var menu_ItemRightClickMenuvue_type_script_lang_ts_ = (ItemRightClickMenuvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(328);

// CONCATENATED MODULE: ./src/components/main/menu/ItemRightClickMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  menu_ItemRightClickMenuvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "0581d8cb",
  null
  
)

/* harmony default export */ var menu_ItemRightClickMenu = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VMenu: VMenu["a" /* default */]})


/***/ })

}]);