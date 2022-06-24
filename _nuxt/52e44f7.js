(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

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

/***/ })

}]);