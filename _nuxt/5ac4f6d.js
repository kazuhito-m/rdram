(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26,24],{

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericDeleteShapeEvents; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FigureAnalyzer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(820);








var GenericDeleteShapeEvents = /*#__PURE__*/function () {
  function GenericDeleteShapeEvents() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenericDeleteShapeEvents);

    this.eventGists = [];
    this.figureAnalyzer = new _FigureAnalyzer__WEBPACK_IMPORTED_MODULE_6__["default"]();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GenericDeleteShapeEvents, [{
    key: "eventType",
    value: function eventType() {
      return "Delete Shape";
    }
  }, {
    key: "prototype",
    value: function prototype() {
      return new GenericDeleteShapeEvents();
    }
  }, {
    key: "validate",
    value: function validate(diagram, _product, view) {
      // TODO なんども連打される問題について
      // ひょっとして「Rootじゃなく、子イベントを叩いてる」からかな？
      var resourceIds = this.figureAnalyzer.analyzeResourceIds(this.validTargetFigures());
      if (view.confirmResourceDelete(resourceIds, diagram)) return true;
      var rootCommand = this.eventGists[0].rootCommand;
      rootCommand.undo();
      return false;
    }
  }, {
    key: "apply",
    value: function apply(diagram, _product, _view) {
      // 対象のFigure
      var validTargetFigures = this.validTargetFigures(); // Iconと線に分ける

      var resourceIds = this.figureAnalyzer.analyzeResourceIds(validTargetFigures);
      var relationIds = this.figureAnalyzer.analizeRelationIds(validTargetFigures);
      console.log("\u6D88\u3059\u4F4D\u7F6E:".concat(resourceIds.join()));
      console.log("\u6D88\u3059\u7DDA:".concat(relationIds.join()));
      return diagram.removeResourcesOf(resourceIds).removeRelationsOf(relationIds);
    }
  }, {
    key: "validTargetFigures",
    value: function validTargetFigures() {
      return this.eventGists.map(function (eventGist) {
        return eventGist.figure;
      }).filter(function (figure) {
        return typeof figure !== 'undefined';
      }).map(function (figure) {
        return figure;
      });
    }
  }]);

  return GenericDeleteShapeEvents;
}();



/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FigureAnalyzer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(325);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);








var FigureAnalyzer = /*#__PURE__*/function () {
  function FigureAnalyzer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, FigureAnalyzer);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(FigureAnalyzer, [{
    key: "isConnection",
    value: function isConnection(figure) {
      if (!figure) return false;
      var id = figure.getId();
      if (!id) return false;
      return !id.search(/^[0-9]+$/);
    }
  }, {
    key: "analyzeResourceId",
    value: function analyzeResourceId(figure) {
      if (this.isConnection(figure)) return null;
      return parseInt(figure === null || figure === void 0 ? void 0 : figure.getId(), 10);
    }
  }, {
    key: "analyzeResourceIds",
    value: function analyzeResourceIds(figures) {
      var _this = this;

      return figures.filter(function (figure) {
        return _this.isConnection(figure);
      }).map(function (figure) {
        return parseInt(figure.getId(), 10);
      });
    }
  }, {
    key: "analizeRelationIds",
    value: function analizeRelationIds(figures) {
      var _this2 = this;

      return figures.filter(function (figure) {
        return !_this2.isConnection(figure);
      }).map(function (figure) {
        return figure.getId();
      });
    }
  }]);

  return FigureAnalyzer;
}();



/***/ })

}]);