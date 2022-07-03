(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89,87,88],{

/***/ 912:
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
var DiagramTypes = __webpack_require__(242);

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

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewOrFolders; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(205);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(236);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(146);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(147);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(148);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(149);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(150);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(151);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(152);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(153);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(154);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(155);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(156);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(157);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(237);
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(238);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _ViewOrFolder__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(912);
/* harmony import */ var _domain_diagram_custom_CustomDiagramType__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(172);









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
      var fodlers = _domain_diagram_custom_CustomDiagramType__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"].as(diagram.type) ? this.customDiagramFolders() : this.rdra20DiagramFolders();
      var folder = fodlers.find(function (f) {
        return f.diagramType().equals(diagram.type);
      });
      if (!folder) return;
      var items = folder.children;
      if (items.length === 1 && items[0].equals(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_32__["default"].EMPTY)) items.splice(0);
      var item = _ViewOrFolder__WEBPACK_IMPORTED_MODULE_32__["default"].diagramOf(diagram);
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
      if (items.length === 0) items.push(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_32__["default"].EMPTY);
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
      var rdra20 = this.findOf(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_32__["default"].RDRAM20_FOLDER.id);
      if (!rdra20) return [];
      return rdra20.children;
    }
  }, {
    key: "customDiagramFolders",
    value: function customDiagramFolders() {
      var custom = this.findOf(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_32__["default"].CUSTOM_FOLDER.id);
      if (!custom) return [];
      return custom.children;
    }
  }, {
    key: "rdra20Folder",
    value: function rdra20Folder() {
      return this.findOf(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_32__["default"].RDRAM20_FOLDER.id);
    }
  }, {
    key: "findParentFolderOf",
    value: function findParentFolderOf(id) {
      return [this.rdra20DiagramFolders(), this.customDiagramFolders()].flat().find(function (folder) {
        return folder.children.some(function (item) {
          return item.id === id;
        });
      });
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

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewOrFoldersTemplate; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(205);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(912);
/* harmony import */ var _ViewOrFolders__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(935);
/* harmony import */ var _domain_diagram_type_DiagramTypes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(242);












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
              return _ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].diagramOf(d);
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
  }]);

  return ViewOrFoldersTemplate;
}();


ViewOrFoldersTemplate.TREE = new _ViewOrFolders__WEBPACK_IMPORTED_MODULE_19__["default"]([(_ViewOrFolder$RDRAM = _ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].RDRAM20_FOLDER).with.apply(_ViewOrFolder$RDRAM, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_domain_diagram_type_DiagramTypes__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"].RDRA20_TYPES.map(function (type) {
  return _ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].rdra20DiagramTypeFolderOf(type);
}).map(function (vof) {
  return vof.with(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].EMPTY);
}))), (_ViewOrFolder$CUSTOM_ = _ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].CUSTOM_FOLDER).with.apply(_ViewOrFolder$CUSTOM_, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_domain_diagram_type_DiagramTypes__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"].CUSTOM_TYPES.map(function (type) {
  return _ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].customDiagramTypeFolderOf(type);
}).map(function (vof) {
  return vof.with(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].EMPTY);
}))), _ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].ANALYSIS_FOLDER.with(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].ICON_LIST, _ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].SCREEN_TRANSITION)]);
ViewOrFoldersTemplate.ALL = ViewOrFoldersTemplate.TREE.uniqueAll();
ViewOrFoldersTemplate.TOP_FOLDERS = ViewOrFoldersTemplate.filterOfIdRange(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].TOP_FOLDER_IDS, ViewOrFoldersTemplate.ALL);
ViewOrFoldersTemplate.ANALYSIS = ViewOrFoldersTemplate.filterOfIdRange(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].ANALYSIS_IDS, ViewOrFoldersTemplate.ALL);
ViewOrFoldersTemplate.RDRA20_TYPE_FOLDERS = ViewOrFoldersTemplate.filterOfIdRange(_ViewOrFolder__WEBPACK_IMPORTED_MODULE_18__["default"].RDRA20_TYPE_IDS, ViewOrFoldersTemplate.ALL);

/***/ })

}]);