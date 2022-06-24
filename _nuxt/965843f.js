(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93,92],{

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

/***/ })

}]);