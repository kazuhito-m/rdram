(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91,88,90,92,93,95],{

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

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(956);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(29).default
var update = add("cd344868", content, true, {"sourceMap":false});

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeWrapper; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(232);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(201);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(905);
/* harmony import */ var _FolderTreeFactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(914);
















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var TreeWrapper = /*#__PURE__*/function () {
  function TreeWrapper(treeItems) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this, TreeWrapper);

    this.treeItems = treeItems;
    this.factory = _FolderTreeFactory__WEBPACK_IMPORTED_MODULE_16__["default"].get();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(TreeWrapper, [{
    key: "findTreeItemById",
    value: function findTreeItemById(treeItemId) {
      var treeItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.treeItems;

      var _iterator = _createForOfIteratorHelper(treeItems),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (item.id === treeItemId) return item;
          var child = this.findTreeItemById(treeItemId, item.children);
          if (child) return child;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
  }, {
    key: "removeTreeItem",
    value: function removeTreeItem(treeItemId) {
      var _this = this;

      var treeItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.treeItems;
      var foundIndex = treeItems.findIndex(function (item) {
        return item.id === treeItemId;
      });

      if (foundIndex >= 0) {
        treeItems.splice(foundIndex, 1);
        if (treeItems.length === 0) treeItems.push(_FolderTreeFactory__WEBPACK_IMPORTED_MODULE_16__["default"].EMPTY_TREE_ITEM);
        return true;
      }

      return treeItems.some(function (item) {
        return _this.removeTreeItem(treeItemId, item.children);
      });
    }
  }, {
    key: "folderItemOf",
    value: function folderItemOf(diagramType) {
      var rdraTop = this.lookUpRdraTopItem();
      var treeItemId = this.factory.treeItemIdFrom(diagramType);
      var folderItem = rdraTop.children.find(function (i) {
        return i.id === treeItemId;
      });
      if (!folderItem) return null;
      return folderItem;
    }
  }, {
    key: "addDiagramTreeItem",
    value: function addDiagramTreeItem(diagram) {
      var folderItem = this.folderItemOf(diagram.type);
      if (!folderItem) return null;
      var children = folderItem.children;
      if (children.length === 1 && children[0] === _FolderTreeFactory__WEBPACK_IMPORTED_MODULE_16__["default"].EMPTY_TREE_ITEM) children.length = 0;
      var diagramTreeItem = this.factory.makeDiagramItem(diagram);
      children.push(diagramTreeItem);
      return diagramTreeItem;
    }
  }, {
    key: "lookUpRdraTopItem",
    value: function lookUpRdraTopItem() {
      return this.findTreeItemById(_Folder__WEBPACK_IMPORTED_MODULE_15__["default"].RDRAM20.id);
    }
  }]);

  return TreeWrapper;
}();



/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Prompts; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _presentation_MessageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(340);






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


/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramsTreePane_vue_vue_type_style_index_0_id_d2ddee40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(949);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramsTreePane_vue_vue_type_style_index_0_id_d2ddee40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiagramsTreePane_vue_vue_type_style_index_0_id_d2ddee40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(28);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".treeview-container[data-v-d2ddee40]{min-height:0;height:100%;width:100%;overflow:auto}.right-click-area[data-v-d2ddee40]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main/tree/DiagramsTreePane.vue?vue&type=template&id=d2ddee40&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"treeview-container"},[_c('v-treeview',{attrs:{"items":_vm.treeItems,"active":_vm.treeActiveItemIds,"open":_vm.treeOpenItemIds,"activatable":"","open-on-click":"","transition":"","dark":"","dense":""},on:{"update:active":[function($event){_vm.treeActiveItemIds=$event},_vm.onClickTreeItem],"update:open":function($event){_vm.treeOpenItemIds=$event}},scopedSlots:_vm._u([{key:"label",fn:function(ref){
var item = ref.item;
return [_c('div',{staticClass:"right-click-area",attrs:{"data-item-id":item.id},on:{"contextmenu":function($event){$event.preventDefault();return _vm.onRightClickTreeItem.apply(null, arguments)}}},[(item.iconKey)?_c('v-icon',[_vm._v(_vm._s(item.iconKey))]):_vm._e(),_vm._v("\n        "+_vm._s(item.name)+"\n      ")],1)]}}])}),_vm._v(" "),_c('DiagramRightClickMenu',{ref:"diagramRightClickMenu",on:{"onClickMenuAddDiagram":_vm.onClickMenuAddDiagram,"onClickMenuCopyDiagram":_vm.onClickMenuCopyDiagram,"onClickMenuRemoveDiagram":_vm.onClickMenuRemoveDiagram,"onClickMenuEditDiagramProperties":_vm.onClickMenuEditDiagramProperties,"onClickMenuExportDiagram":_vm.onClickMenuExportDiagram}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/main/tree/DiagramsTreePane.vue?vue&type=template&id=d2ddee40&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(46);

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(201);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./src/components/main/tree/DiagramRightClickMenu.vue + 4 modules
var DiagramRightClickMenu = __webpack_require__(954);

// EXTERNAL MODULE: ./src/components/main/tree/Folder.ts
var Folder = __webpack_require__(905);

// EXTERNAL MODULE: ./src/components/main/tree/TreeWrapper.ts
var TreeWrapper = __webpack_require__(952);

// EXTERNAL MODULE: ./src/components/main/tree/FolderTreeFactory.ts
var FolderTreeFactory = __webpack_require__(914);

// EXTERNAL MODULE: ./src/components/main/Prompts.ts
var Prompts = __webpack_require__(953);

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
    _this.tree = new TreeWrapper["default"](_this.treeItems);
    _this.treeFactory = FolderTreeFactory["default"].get();
    _this.prompts = new Prompts["default"]();
    return _this;
  } // emits


  Object(createClass["a" /* default */])(DiagramsTreePane, [{
    key: "onOpendDiagramPropertiesEditor",
    value: function onOpendDiagramPropertiesEditor(_diagramId) {}
  }, {
    key: "onOpenDiagram",
    value: function onOpenDiagram(_treeItem) {}
  }, {
    key: "onDeleteDiagram",
    value: function onDeleteDiagram(_diagramId) {} // this vue lyfecycle event.

  }, {
    key: "created",
    value: function created() {
      var product = this.repository.getCurrentProduct();
      if (!product) return;
      this.treeItems = this.treeFactory.buildTree(product.diagrams);
      this.treeOpenItemIds.push(Folder["default"].RDRAM20.id);
      this.tree = new TreeWrapper["default"](this.treeItems);
    } // component events.

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
      if (!event.target) return;
      var element = event.target;
      var data = element.getAttribute('data-item-id');
      if (!data) return;
      var treeItemId = parseInt(data, 10);
      if (treeItemId <= 0) return;
      var treeItem = this.tree.findTreeItemById(treeItemId);
      if (!treeItem) return;
      var menu = this.$refs.diagramRightClickMenu;
      menu.show(treeItem, event.clientX, event.clientY);
    } /// menu click events

  }, {
    key: "onClickMenuAddDiagram",
    value: function onClickMenuAddDiagram(treeItemId) {
      var item = this.tree.findTreeItemById(treeItemId);
      if (!item) return;
      var diagramType = this.treeFactory.diagramTypeFrom(item);
      if (!diagramType) return;
      var product = this.repository.getCurrentProduct();
      if (!product) return;
      var diagrams = product.diagrams;
      var name = this.prompts.promptNewDiagramName(diagramType, diagrams);
      if (!name) return;
      var modifiedProduct = product.createAndAddDiagram(name, diagramType);
      var diagram = modifiedProduct.diagrams.last();
      this.repository.registerCurrentProduct(modifiedProduct);
      this.addDiagramView(diagram);
    }
  }, {
    key: "onClickMenuCopyDiagram",
    value: function onClickMenuCopyDiagram(diagramId) {
      var diagram = this.copyDiagram(diagramId);
      if (!diagram) return;
      this.addDiagramView(diagram);
    }
  }, {
    key: "onClickMenuRemoveDiagram",
    value: function onClickMenuRemoveDiagram(diagramId) {
      if (!this.removeDiagram(diagramId)) return;
      this.onDeleteDiagram(diagramId);
      this.tree.removeTreeItem(diagramId);
    }
  }, {
    key: "onClickMenuEditDiagramProperties",
    value: function onClickMenuEditDiagramProperties(diagramId) {
      this.onOpendDiagramPropertiesEditor(diagramId);
    }
  }, {
    key: "onClickMenuExportDiagram",
    value: function onClickMenuExportDiagram(diagramId) {
      this.diagramExportService.downloadExportFileOnClient(diagramId);
    } // public method

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
      var clickedItem = this.tree.findTreeItemById(diagramId);
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
          var item = this.tree.findTreeItemById(diagram.id);
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
      this.treeActiveItemIds.splice(0, 1);
    } // private method

  }, {
    key: "activeTreeItemOf",
    value: function activeTreeItemOf(treeItemId) {
      this.treeActiveItemIds.length = 0;
      this.treeActiveItemIds.push(treeItemId);
    }
  }, {
    key: "openParentTreeItem",
    value: function openParentTreeItem(treeItemId) {
      var rdraTop = this.tree.lookUpRdraTopItem();
      var parentTreeItem = rdraTop.children.find(function (folderItem) {
        return folderItem.children.some(function (item) {
          return item.id === treeItemId;
        });
      });
      if (!parentTreeItem) return;
      var parentId = parentTreeItem.id;
      var openIds = this.treeOpenItemIds;
      if (openIds.includes(parentId)) openIds.splice(openIds.indexOf(parentId), 1);
      openIds.push(parentId);
    }
  }, {
    key: "addDiagramView",
    value: function addDiagramView(diagram) {
      this.tree.addDiagramTreeItem(diagram);
      this.activeTreeItemOf(diagram.id);
      this.openParentTreeItem(diagram.id);
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
    key: "findAndReflectDiagramToTreeOf",
    value: function findAndReflectDiagramToTreeOf(diagramId) {
      var _a;

      var existsItem = this.tree.findTreeItemById(diagramId);
      if (existsItem) return true;
      var diagram = (_a = this.repository.getCurrentProduct()) === null || _a === void 0 ? void 0 : _a.diagrams.of(diagramId);
      if (!diagram) return false;
      this.addDiagramView(diagram);
      return true;
    }
  }]);

  return DiagramsTreePane;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane.prototype, "repository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Inject"])()], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane.prototype, "diagramExportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onOpendDiagramPropertiesEditor')], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane.prototype, "onOpendDiagramPropertiesEditor", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onOpenDiagram')], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane.prototype, "onOpenDiagram", null);

__decorate([Object(nuxt_property_decorator_umd["Emit"])('onDeleteDiagram')], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane.prototype, "onDeleteDiagram", null);

DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    DiagramRightClickMenu: DiagramRightClickMenu["default"]
  }
})], DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane);
/* harmony default export */ var DiagramsTreePanevue_type_script_lang_ts_ = (DiagramsTreePanevue_type_script_lang_ts_DiagramsTreePane);
// CONCATENATED MODULE: ./src/components/main/tree/DiagramsTreePane.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tree_DiagramsTreePanevue_type_script_lang_ts_ = (DiagramsTreePanevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/main/tree/DiagramsTreePane.vue?vue&type=style&index=0&id=d2ddee40&scoped=true&lang=css&
var DiagramsTreePanevue_type_style_index_0_id_d2ddee40_scoped_true_lang_css_ = __webpack_require__(955);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(61);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(318);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTreeview/VTreeview.js + 2 modules
var VTreeview = __webpack_require__(994);

// CONCATENATED MODULE: ./src/components/main/tree/DiagramsTreePane.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tree_DiagramsTreePanevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "d2ddee40",
  null
  
)

/* harmony default export */ var tree_DiagramsTreePane = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VIcon: VIcon["a" /* default */],VTreeview: VTreeview["a" /* default */]})


/***/ })

}]);