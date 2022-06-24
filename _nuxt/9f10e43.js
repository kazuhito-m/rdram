(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90,92,93],{

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Folder; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);




var Folder = /*#__PURE__*/function () {
  function Folder(id, name) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Folder);

    this.id = id;
    this.name = name;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Folder, [{
    key: "equals",
    value: function equals(folder) {
      return this.id === folder.id;
    }
  }], [{
    key: "of",
    value: function of(id, name) {
      return new Folder(id, name);
    }
  }]);

  return Folder;
}();


Folder.RDRAM20 = Folder.of(-1, "RDRA 2.0");
Folder.CUSTOM = Folder.of(-2, "カスタム");
Folder.ANALYZE = Folder.of(-3, "分析");
Folder.EMPTY = Folder.of(0, "(空)");
Folder.TOP_FOLDERS = [Folder.RDRAM20, Folder.CUSTOM, Folder.ANALYZE];

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FolderTreeFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(905);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32);










var FolderTreeFactory = /*#__PURE__*/function () {
  function FolderTreeFactory() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, FolderTreeFactory);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(FolderTreeFactory, [{
    key: "buildTree",
    value: function buildTree(diagrams) {
      var _this = this;

      return _Folder__WEBPACK_IMPORTED_MODULE_7__["default"].TOP_FOLDERS.map(function (f) {
        return _this.makeTreeTopFolder(f, diagrams);
      });
    }
  }, {
    key: "makeTreeTopFolder",
    value: function makeTreeTopFolder(folder, diagrams) {
      var item = this.makeItem(folder);
      item.children = folder.equals(_Folder__WEBPACK_IMPORTED_MODULE_7__["default"].RDRAM20) ? this.makeTreeRdram20Folders(diagrams) : [FolderTreeFactory.EMPTY_TREE_ITEM];
      return item;
    }
  }, {
    key: "makeTreeRdram20Folders",
    value: function makeTreeRdram20Folders(diagrams) {
      var _this2 = this;

      var typeMap = diagrams.groupOfType();
      return _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].values().map(function (type) {
        return _this2.makeDiagramFolderOfGroupingType(type, typeMap);
      });
    }
  }, {
    key: "makeDiagramFolderOfGroupingType",
    value: function makeDiagramFolderOfGroupingType(type, typeMap) {
      var _this3 = this;

      var _a;

      var folder = _Folder__WEBPACK_IMPORTED_MODULE_7__["default"].of(type.id + FolderTreeFactory.DIAGRAM_FOLDER_ID_MASK, type.name);
      var folderItem = this.makeItem(folder);
      folderItem.children = (_a = typeMap.get(type)) === null || _a === void 0 ? void 0 : _a.map(function (d) {
        return _this3.makeDiagramItem(d);
      }).filter(function (d) {
        return d;
      }).map(function (d) {
        return d;
      });
      if (folderItem.children.length === 0) folderItem.children = [FolderTreeFactory.EMPTY_TREE_ITEM];
      return folderItem;
    }
  }, {
    key: "makeItem",
    value: function makeItem(folder) {
      var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return {
        id: folder.id,
        name: folder.name,
        children: [],
        disabled: disabled,
        iconKey: '',
        iconCaption: ''
      };
    }
  }, {
    key: "makeDiagramItem",
    value: function makeDiagramItem(diagram) {
      var type = diagram.type;
      return {
        id: diagram.id,
        name: diagram.name,
        children: [],
        disabled: false,
        iconKey: type.iconKey,
        iconCaption: type.name
      };
    }
  }, {
    key: "diagramTypeFrom",
    value: function diagramTypeFrom(treeItem) {
      var typeId = treeItem.id - FolderTreeFactory.DIAGRAM_FOLDER_ID_MASK;
      return _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].ofId(typeId);
    }
  }, {
    key: "treeItemIdFrom",
    value: function treeItemIdFrom(diagramType) {
      return diagramType.id + FolderTreeFactory.DIAGRAM_FOLDER_ID_MASK;
    }
  }, {
    key: "isDiagramTypeFolder",
    value: function isDiagramTypeFolder(treeItem) {
      return treeItem.id > FolderTreeFactory.DIAGRAM_FOLDER_ID_MASK;
    }
  }], [{
    key: "get",
    value: function get() {
      return new FolderTreeFactory();
    }
  }]);

  return FolderTreeFactory;
}();


FolderTreeFactory.EMPTY_TREE_ITEM = FolderTreeFactory.get().makeItem(_Folder__WEBPACK_IMPORTED_MODULE_7__["default"].EMPTY, true);
FolderTreeFactory.DIAGRAM_FOLDER_ID_MASK = 1000000;

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/tree/DiagramRightClickMenu.vue?vue&type=template&id=55a942a9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-menu',{attrs:{"value":_vm.visible,"position-x":_vm.positionX,"position-y":_vm.positionY,"close-on-click":"","close-on-content-click":"","offset-x":"","rounded":""},on:{"input":_vm.close}},[_c('v-list',[(_vm.isFolder)?_c('v-list-item',{attrs:{"link":""},on:{"click":function($event){return _vm.onClickMenuAddDiagram(_vm.diagramId)}}},[_c('v-list-item-title',[_vm._v("図の追加...")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":function($event){return _vm.onClickMenuCopyDiagram(_vm.diagramId)}}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" のコピー...")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":function($event){return _vm.onClickMenuRemoveDiagram(_vm.diagramId)}}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" の削除")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":function($event){return _vm.onClickMenuEditDiagramProperties(_vm.diagramId)}}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" の設定...")])],1):_vm._e(),_vm._v(" "),(_vm.isDiagram)?_c('v-list-item',{attrs:{"link":""},on:{"click":function($event){return _vm.onClickMenuExportDiagram(_vm.diagramId)}}},[_c('v-list-item-title',[_vm._v(_vm._s(_vm.diagramName)+" のエクスポート")])],1):_vm._e()],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/main/tree/DiagramRightClickMenu.vue?vue&type=template&id=55a942a9&scoped=true&

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

// EXTERNAL MODULE: ./src/components/main/tree/FolderTreeFactory.ts
var FolderTreeFactory = __webpack_require__(914);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/tree/DiagramRightClickMenu.vue?vue&type=script&lang=ts&








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




var DiagramRightClickMenuvue_type_script_lang_ts_DiagramRightClickMenu = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(DiagramRightClickMenu, _Vue);

  var _super = _createSuper(DiagramRightClickMenu);

  function DiagramRightClickMenu() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DiagramRightClickMenu);

    _this = _super.apply(this, arguments);
    _this.visible = false;
    _this.positionX = 0;
    _this.positionY = 0;
    _this.diagramId = 0;
    _this.diagramName = '';
    _this.isFolder = false;
    _this.isDiagram = false;
    return _this;
  }

  Object(createClass["a" /* default */])(DiagramRightClickMenu, [{
    key: "onClickMenuAddDiagram",
    value: function onClickMenuAddDiagram(_diagramId) {
      this.close();
    }
  }, {
    key: "onClickMenuCopyDiagram",
    value: function onClickMenuCopyDiagram(_diagramId) {
      this.close();
    }
  }, {
    key: "onClickMenuRemoveDiagram",
    value: function onClickMenuRemoveDiagram(_diagramId) {
      this.close();
    }
  }, {
    key: "onClickMenuEditDiagramProperties",
    value: function onClickMenuEditDiagramProperties(_diagramId) {
      this.close();
    }
  }, {
    key: "onClickMenuExportDiagram",
    value: function onClickMenuExportDiagram(_diagramId) {
      this.close();
    } // public method

  }, {
    key: "show",
    value: function show(treeItem, x, y) {
      this.isFolder = FolderTreeFactory["default"].get().isDiagramTypeFolder(treeItem);
      this.isDiagram = !this.isFolder;
      this.diagramId = treeItem.id;
      this.diagramName = treeItem.name;
      this.positionX = x;
      this.positionY = y;
      this.visible = true;
    }
  }, {
    key: "close",
    value: function close() {
      this.visible = false;
    }
  }]);

  return DiagramRightClickMenu;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onClickMenuAddDiagram')], DiagramRightClickMenuvue_type_script_lang_ts_DiagramRightClickMenu.prototype, "onClickMenuAddDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onClickMenuCopyDiagram')], DiagramRightClickMenuvue_type_script_lang_ts_DiagramRightClickMenu.prototype, "onClickMenuCopyDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onClickMenuRemoveDiagram')], DiagramRightClickMenuvue_type_script_lang_ts_DiagramRightClickMenu.prototype, "onClickMenuRemoveDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onClickMenuEditDiagramProperties')], DiagramRightClickMenuvue_type_script_lang_ts_DiagramRightClickMenu.prototype, "onClickMenuEditDiagramProperties", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onClickMenuExportDiagram')], DiagramRightClickMenuvue_type_script_lang_ts_DiagramRightClickMenu.prototype, "onClickMenuExportDiagram", null);

DiagramRightClickMenuvue_type_script_lang_ts_DiagramRightClickMenu = __decorate([nuxt_property_decorator_umd["Component"]], DiagramRightClickMenuvue_type_script_lang_ts_DiagramRightClickMenu);
/* harmony default export */ var DiagramRightClickMenuvue_type_script_lang_ts_ = (DiagramRightClickMenuvue_type_script_lang_ts_DiagramRightClickMenu);
// CONCATENATED MODULE: ./src/components/main/tree/DiagramRightClickMenu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tree_DiagramRightClickMenuvue_type_script_lang_ts_ = (DiagramRightClickMenuvue_type_script_lang_ts_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(321);

// CONCATENATED MODULE: ./src/components/main/tree/DiagramRightClickMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tree_DiagramRightClickMenuvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "55a942a9",
  null
  
)

/* harmony default export */ var tree_DiagramRightClickMenu = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMenu: VMenu["a" /* default */]})


/***/ })

}]);