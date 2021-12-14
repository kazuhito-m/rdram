(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductImportMessageConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94);




var ProductImportMessageConverter = /*#__PURE__*/function () {
  function ProductImportMessageConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ProductImportMessageConverter);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ProductImportMessageConverter, [{
    key: "makeMessage",
    value: function makeMessage(event) {
      var message = ProductImportMessageConverter.MESSAGE_DIC[event.step];
      if (!message) return "";
      return message + event.optionalMessage;
    }
  }], [{
    key: "initMap",
    value: function initMap() {
      var m = {};
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportProgressStep */ "a"].失敗] = "インポートが失敗しました。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportProgressStep */ "a"].キャンセル] = "インポートがキャンセルされました。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportProgressStep */ "a"].開始] = "インポートを開始します。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportProgressStep */ "a"].ファイル読み込み] = "ファイルの読み込み。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportProgressStep */ "a"].形式チェック] = "ファイル内容・形式のチェック。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportProgressStep */ "a"].追加] = "プロダクトの追加・置き換え。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportProgressStep */ "a"].保存] = "LocalStrageへの保存。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportProgressStep */ "a"].完了] = "インポートが成功しました。";
      return m;
    }
  }]);

  return ProductImportMessageConverter;
}();


ProductImportMessageConverter.MESSAGE_DIC = ProductImportMessageConverter.initMap();

/***/ })

}]);