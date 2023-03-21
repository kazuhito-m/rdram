(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

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

/***/ })

}]);