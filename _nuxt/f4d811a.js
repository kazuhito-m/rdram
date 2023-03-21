(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93,87,88,89],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".treeview-container[data-v-86a40ca0]{min-height:0;height:100%;width:100%;overflow:auto}.right-click-area[data-v-86a40ca0]{-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/tree/DiagramsTreePane.vue?vue&type=template&id=86a40ca0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"treeview-container"},[_c('v-treeview',{attrs:{"items":_vm.treeItems,"active":_vm.treeActiveItemIds,"open":_vm.treeOpenItemIds,"item-key":"id","activatable":"","open-on-click":"","transition":"","dark":"","dense":""},on:{"update:active":[function($event){_vm.treeActiveItemIds=$event},_vm.onClickTreeItem],"update:open":function($event){_vm.treeOpenItemIds=$event}},scopedSlots:_vm._u([{key:"label",fn:function(ref){
var item = ref.item;
return [_c('div',{staticClass:"right-click-area",attrs:{"data-item-id":item.id},on:{"contextmenu":function($event){$event.preventDefault();return _vm.onRightClickTreeItem.apply(null, arguments)}}},[(item.iconKey)?_c('v-icon',[_vm._v(_vm._s(item.iconKey))]):_vm._e(),_vm._v("\n        "+_vm._s(item.name)+"\n      ")],1)]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/main/tree/DiagramsTreePane.vue?vue&type=template&id=86a40ca0&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(78);

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

// EXTERNAL MODULE: ./src/components/main/model/ViewOrFoldersTemplate.ts
var ViewOrFoldersTemplate = __webpack_require__(971);

// EXTERNAL MODULE: ./src/components/main/model/ViewOrFolders.ts
var ViewOrFolders = __webpack_require__(963);

// EXTERNAL MODULE: ./src/components/main/model/ViewOrFolder.ts + 1 modules
var ViewOrFolder = __webpack_require__(940);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/tree/DiagramsTreePane.vue?vue&type=script&lang=ts&














function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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




var DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(DiagramsTreePane, _Vue);
  var _super = _createSuper(DiagramsTreePane);
  function DiagramsTreePane() {
    var _this;
    Object(classCallCheck["a" /* default */])(this, DiagramsTreePane);
    _this = _super.apply(this, arguments);
    _this.treeItems = [];
    _this.treeActiveItemIds = [];
    _this.treeOpenItemIds = [];
    _this.tree = new ViewOrFolders["default"]([]);
    return _this;
  }
  // emits
  Object(createClass["a" /* default */])(DiagramsTreePane, [{
    key: "onOpenDiagram",
    value: function onOpenDiagram(_treeItem) {}
  }, {
    key: "onDeleteDiagram",
    value: function onDeleteDiagram(_diagramId) {}
    /// click
  }, {
    key: "onRightClick",
    value: function onRightClick(_item, _x, _y) {}
    // this vue lyfecycle event.
  }, {
    key: "created",
    value: function created() {
      var product = this.repository.getCurrentProduct();
      if (!product) return;
      var tree = ViewOrFoldersTemplate["default"].build(product.diagrams);
      this.treeItems = tree.values;
      this.treeOpenItemIds.push(ViewOrFolder["default"].RDRAM20_FOLDER.id);
      this.tree = tree;
    }
    // component events.
  }, {
    key: "onClickTreeItem",
    value: function onClickTreeItem(treeItemIdText) {
      if (treeItemIdText === '') return;
      var diagramId = parseInt(treeItemIdText, 10);
      this.openDiagramEditorTabOf(diagramId);
    }
  }, {
    key: "onRightClickTreeItem",
    value: function onRightClickTreeItem(event) {
      var item = this.treeItemByClickEventOf(event);
      if (!item) return;
      this.onRightClick(item, event.x, event.y);
    }
    // public method
  }, {
    key: "activeItemAndFolderOpen",
    value: function activeItemAndFolderOpen(diagramId) {
      if (!this.findAndReflectDiagramToTreeOf(diagramId)) return;
      this.activeTreeItemOf(diagramId);
      this.openParentTreeItem(diagramId);
    }
  }, {
    key: "openDiagramEditorTabOf",
    value: function openDiagramEditorTabOf(diagramId) {
      var clickedItem = this.tree.findOf(diagramId);
      if (!clickedItem) return;
      this.onOpenDiagram(clickedItem);
    }
  }, {
    key: "reflectTreeAndTabOf",
    value: function reflectTreeAndTabOf(diagrams) {
      var _iterator = _createForOfIteratorHelper(diagrams),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var diagram = _step.value;
          var item = this.tree.findOf(diagram.id);
          if (item) item.name = diagram.name;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "clearSelected",
    value: function clearSelected() {
      this.treeActiveItemIds.splice(0);
    }
  }, {
    key: "addDiagramView",
    value: function addDiagramView(diagram) {
      this.tree.addOf(diagram);
      this.activeTreeItemOf(diagram.id);
      this.openParentTreeItem(diagram.id);
    }
  }, {
    key: "removeDiagramView",
    value: function removeDiagramView(diagramId) {
      this.onDeleteDiagram(diagramId);
      this.tree.removeOf(diagramId);
    }
  }, {
    key: "openAll",
    value: function openAll() {
      var _this2 = this;
      this.treeOpenItemIds.splice(0);
      ViewOrFoldersTemplate["default"].allFolderIds().forEach(function (id) {
        return _this2.treeOpenItemIds.push(id);
      });
    }
  }, {
    key: "closeAll",
    value: function closeAll() {
      this.treeOpenItemIds.splice(0);
    }
    // private method
  }, {
    key: "activeTreeItemOf",
    value: function activeTreeItemOf(treeItemId) {
      this.clearSelected();
      this.treeActiveItemIds.push(treeItemId);
    }
  }, {
    key: "openParentTreeItem",
    value: function openParentTreeItem(treeItemId) {
      var parentTreeItem = this.tree.findParentFolderOf(treeItemId);
      if (!parentTreeItem) return;
      var parentId = parentTreeItem.id;
      this.reAddValueOnArray(parentId, this.treeOpenItemIds);
      this.openParentTreeItem(parentId);
    }
  }, {
    key: "reAddValueOnArray",
    value: function reAddValueOnArray(value, values) {
      var existsIndex = values.indexOf(value);
      if (existsIndex >= 0) values.splice(existsIndex, 1);
      values.push(value);
    }
  }, {
    key: "findAndReflectDiagramToTreeOf",
    value: function findAndReflectDiagramToTreeOf(diagramId) {
      var _a;
      var existsItem = this.tree.findOf(diagramId);
      if (existsItem) return true;
      var diagram = (_a = this.repository.getCurrentProduct()) === null || _a === void 0 ? void 0 : _a.diagrams.of(diagramId);
      if (!diagram) return false;
      this.addDiagramView(diagram);
      return true;
    }
  }, {
    key: "treeItemByClickEventOf",
    value: function treeItemByClickEventOf(event) {
      if (!event.target) return null;
      var element = event.target;
      var data = element.getAttribute('data-item-id');
      if (!data) return null;
      var itemId = parseInt(data, 10);
      if (itemId <= 0) return null;
      return this.tree.findOf(itemId);
    }
  }]);
  return DiagramsTreePane;
}(nuxt_property_decorator_umd["Vue"]);
__decorate([Object(nuxt_property_decorator_umd["Inject"])()], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane.prototype, "repository", void 0);
__decorate([Object(nuxt_property_decorator_umd["Emit"])('onOpenDiagram')], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane.prototype, "onOpenDiagram", null);
__decorate([Object(nuxt_property_decorator_umd["Emit"])('onDeleteDiagram')], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane.prototype, "onDeleteDiagram", null);
__decorate([Object(nuxt_property_decorator_umd["Emit"])('onRightClick')], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane.prototype, "onRightClick", null);
DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane = __decorate([nuxt_property_decorator_umd["Component"]], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane);
/* harmony default export */ var DiagramsTreePanevue_type_script_lang_ts_ = (DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane);
// CONCATENATED MODULE: ./src/components/main/tree/DiagramsTreePane.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tree_DiagramsTreePanevue_type_script_lang_ts_ = (DiagramsTreePanevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/main/tree/DiagramsTreePane.vue?vue&type=style&index=0&id=86a40ca0&scoped=true&lang=css&
var DiagramsTreePanevue_type_style_index_0_id_86a40ca0_scoped_true_lang_css_ = __webpack_require__(999);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(339);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTreeview/VTreeview.js + 2 modules
var VTreeview = __webpack_require__(1039);

// CONCATENATED MODULE: ./src/components/main/tree/DiagramsTreePane.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tree_DiagramsTreePanevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "86a40ca0",
  null
  
)

/* harmony default export */ var tree_DiagramsTreePane = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VIcon: VIcon["a" /* default */],VTreeview: VTreeview["a" /* default */]})


/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ViewOrFolder_ViewOrFolder; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(37);

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
var DiagramTypes = __webpack_require__(251);

// CONCATENATED MODULE: ./src/components/main/model/ViewOrFolder.ts







var ViewOrFolder_ViewOrFolder = /*#__PURE__*/function () {
  function ViewOrFolder(id, name,
  // TODO イミュータブルで行けるようにしたい
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

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewOrFolders; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(215);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(245);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(150);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(151);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(152);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(153);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(154);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(155);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(156);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(157);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(158);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(159);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(160);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(161);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(162);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(163);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _ViewOrFolder__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(940);
/* harmony import */ var _domain_diagram_custom_CustomDiagramType__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(179);








function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
























var ViewOrFolders = /*#__PURE__*/function () {
  function ViewOrFolders(values) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, ViewOrFolders);
    this.values = values;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ViewOrFolders, [{
    key: "addOf",
    value: function addOf(diagram) {
      var fodlers = _domain_diagram_custom_CustomDiagramType__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"].as(diagram.type) ? this.customDiagramFolders() : this.rdra20DiagramFolders();
      var folder = fodlers.find(function (f) {
        return f.diagramType().equals(diagram.type);
      });
      if (!folder) return;
      var items = folder.children;
      if (items.length === 1 && items[0].equals(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_30__["default"].EMPTY)) items.splice(0);
      var item = _ViewOrFolder__WEBPACK_IMPORTED_MODULE_30__["default"].diagramOf(diagram);
      items.push(item);
    }
  }, {
    key: "removeOf",
    value: function removeOf(id) {
      var _this = this;
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.values;
      var index = items.findIndex(function (item) {
        return item.id === id;
      });
      if (index < 0) return items.some(function (item) {
        return _this.removeOf(id, item.children);
      });
      items.splice(index, 1);
      if (items.length === 0) items.push(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_30__["default"].EMPTY);
      return true;
    }
  }, {
    key: "findOf",
    value: function findOf(id) {
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.values;
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (item.id === id) return item;
          var found = this.findOf(id, item.children);
          if (found) return found;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "uniqueAll",
    value: function uniqueAll() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.values;
      var uniqueMap = new Map();
      var _iterator2 = _createForOfIteratorHelper(items),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;
          uniqueMap.set(i.id, i);
          var _iterator3 = _createForOfIteratorHelper(this.uniqueAll(i.children)),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var j = _step3.value;
              uniqueMap.set(j.id, j);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return Array.from(uniqueMap.values());
    }
  }, {
    key: "rdra20DiagramFolders",
    value: function rdra20DiagramFolders() {
      var rdra20 = this.findOf(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_30__["default"].RDRAM20_FOLDER.id);
      if (!rdra20) return [];
      return rdra20.children;
    }
  }, {
    key: "customDiagramFolders",
    value: function customDiagramFolders() {
      var custom = this.findOf(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_30__["default"].CUSTOM_FOLDER.id);
      if (!custom) return [];
      return custom.children;
    }
  }, {
    key: "rdra20Folder",
    value: function rdra20Folder() {
      return this.findOf(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_30__["default"].RDRAM20_FOLDER.id);
    }
  }, {
    key: "findParentFolderOf",
    value: function findParentFolderOf(id) {
      var folders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.values;
      var _iterator4 = _createForOfIteratorHelper(folders),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;
          var childFound = item.children.some(function (child) {
            return child.id === id;
          });
          if (childFound) return item;
          var found = this.findParentFolderOf(id, item.children);
          if (found) return found;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return undefined;
    }
  }, {
    key: "clone",
    value: function clone() {
      var values = this.values.map(function (i) {
        return i.clone();
      });
      return new ViewOrFolders(values);
    }
  }]);
  return ViewOrFolders;
}();


/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewOrFoldersTemplate; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(215);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(246);
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(247);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(940);
/* harmony import */ var _ViewOrFolders__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(963);
/* harmony import */ var _domain_diagram_type_DiagramTypes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(251);











var _ViewOrFolder$RDRAM, _ViewOrFolder$CUSTOM_;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












var ViewOrFoldersTemplate = /*#__PURE__*/function () {
  function ViewOrFoldersTemplate() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this, ViewOrFoldersTemplate);
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(ViewOrFoldersTemplate, null, [{
    key: "filterOfIdRange",
    value: function filterOfIdRange(idRange, items) {
      return items.filter(function (item) {
        return idRange.in(item.id);
      });
    }
  }, {
    key: "build",
    value: function build(diagrams) {
      var tree = ViewOrFoldersTemplate.TREE.clone();
      var typeMap = diagrams.groupOfType();
      var diagramFodlerSets = [tree.rdra20DiagramFolders(), tree.customDiagramFolders()];
      for (var _i = 0, _diagramFodlerSets = diagramFodlerSets; _i < _diagramFodlerSets.length; _i++) {
        var diagramFolders = _diagramFodlerSets[_i];
        var _iterator = _createForOfIteratorHelper(diagramFolders),
          _step;
        try {
          var _loop = function _loop() {
            var folder = _step.value;
            var diagramsOfType = typeMap.get(folder.diagramType());
            if (!diagramsOfType || diagramsOfType.length === 0) return "continue";
            var children = folder.children;
            children.splice(0);
            diagramsOfType.map(function (d) {
              return _ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].diagramOf(d);
            }).forEach(function (vof) {
              return children.push(vof);
            });
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _ret = _loop();
            if (_ret === "continue") continue;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return tree;
    }
  }, {
    key: "idOf",
    value: function idOf(diagramType) {
      var folder = ViewOrFoldersTemplate.RDRA20_TYPE_FOLDERS.find(function (f) {
        return diagramType.equals(f.rdra20DiagramType());
      });
      return folder ? folder.id : 0;
    }
  }, {
    key: "analysisNameOf",
    value: function analysisNameOf(name) {
      return ViewOrFoldersTemplate.ANALYSIS.find(function (a) {
        return a.name === name;
      });
    }
  }, {
    key: "allFolderIds",
    value: function allFolderIds() {
      return [ViewOrFoldersTemplate.TOP_FOLDERS, ViewOrFoldersTemplate.RDRA20_TYPE_FOLDERS, ViewOrFoldersTemplate.CUSTOM_TYPE_FOLDERS].flat().map(function (item) {
        return item.id;
      });
    }
  }]);
  return ViewOrFoldersTemplate;
}();

ViewOrFoldersTemplate.TREE = new _ViewOrFolders__WEBPACK_IMPORTED_MODULE_21__["default"]([(_ViewOrFolder$RDRAM = _ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].RDRAM20_FOLDER).with.apply(_ViewOrFolder$RDRAM, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_domain_diagram_type_DiagramTypes__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].RDRA20_TYPES.map(function (type) {
  return _ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].rdra20DiagramTypeFolderOf(type);
}).map(function (vof) {
  return vof.with(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].EMPTY);
}))), (_ViewOrFolder$CUSTOM_ = _ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].CUSTOM_FOLDER).with.apply(_ViewOrFolder$CUSTOM_, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_domain_diagram_type_DiagramTypes__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].CUSTOM_TYPES.map(function (type) {
  return _ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].customDiagramTypeFolderOf(type);
}).map(function (vof) {
  return vof.with(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].EMPTY);
}))), _ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].ANALYSIS_FOLDER.with(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].ICON_LIST, _ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].SCREEN_TRANSITION)]);
ViewOrFoldersTemplate.ALL = ViewOrFoldersTemplate.TREE.uniqueAll();
ViewOrFoldersTemplate.TOP_FOLDERS = ViewOrFoldersTemplate.filterOfIdRange(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].TOP_FOLDER_IDS, ViewOrFoldersTemplate.ALL);
ViewOrFoldersTemplate.ANALYSIS = ViewOrFoldersTemplate.filterOfIdRange(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].ANALYSIS_IDS, ViewOrFoldersTemplate.ALL);
ViewOrFoldersTemplate.RDRA20_TYPE_FOLDERS = ViewOrFoldersTemplate.filterOfIdRange(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].RDRA20_TYPE_IDS, ViewOrFoldersTemplate.ALL);
ViewOrFoldersTemplate.CUSTOM_TYPE_FOLDERS = ViewOrFoldersTemplate.filterOfIdRange(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_20__["default"].CUSTOM_TYPE_IDS, ViewOrFoldersTemplate.ALL);

/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1000);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("db0f2116", content, true, {"sourceMap":false});

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramsTreePane_vue_vue_type_style_index_0_id_86a40ca0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(994);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramsTreePane_vue_vue_type_style_index_0_id_86a40ca0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramsTreePane_vue_vue_type_style_index_0_id_86a40ca0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);