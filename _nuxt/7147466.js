(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventGist; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(248);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);




/**
 * drow2dのCommandから抽出した「処理に必要なモノ(要約)」。
 */
var EventGist = /*#__PURE__*/function () {
  function EventGist(rootCommand, eventType, figure,
  // rootイベントの場合はundifinedになる可能性が在る。
  source, target, connection) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, EventGist);
    this.rootCommand = rootCommand;
    this.eventType = eventType;
    this.figure = figure;
    this.source = source;
    this.target = target;
    this.connection = connection;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(EventGist, [{
    key: "existsIdWhenConnectPorts",
    value: function existsIdWhenConnectPorts() {
      var srcResourceId = this.sourceResouceId();
      var distResourceId = this.targetResouceId();
      return !!srcResourceId && !!distResourceId;
    }
  }, {
    key: "sourceResouceId",
    value: function sourceResouceId() {
      var _a;
      return this.searchPortId((_a = this.source) === null || _a === void 0 ? void 0 : _a.getParent());
    }
  }, {
    key: "targetResouceId",
    value: function targetResouceId() {
      var _a;
      return this.searchPortId((_a = this.target) === null || _a === void 0 ? void 0 : _a.getParent());
    }
  }, {
    key: "searchPortId",
    value: function searchPortId(target) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!target) return undefined;
      if (this.isNumeric(target.getId())) return parseInt(target.getId(), 10);
      if (depth > 1) return undefined; // 一つ上の親Figureまでidを追う。
      return this.searchPortId(target.getParent(), depth + 1);
    }
  }, {
    key: "isNumeric",
    value: function isNumeric(value) {
      return !!value.match(/^[0-9]+$/) && !isNaN(parseInt(value));
    }
  }], [{
    key: "of",
    value: function of(targetCommand, rootCommand) {
      return new EventGist(rootCommand, targetCommand.getLabel(), targetCommand.figure, targetCommand.source, targetCommand.target, targetCommand.connection);
    }
  }]);
  return EventGist;
}();


/***/ })

}]);