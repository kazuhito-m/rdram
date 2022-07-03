(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ 962:
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



/***/ })

}]);