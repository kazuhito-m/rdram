(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95,92,93],{

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



/***/ })

}]);