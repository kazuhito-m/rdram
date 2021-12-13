(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ProductImportMessageConverter_ProductImportMessageConverter; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// CONCATENATED MODULE: ./src/domain/product/import/ProductImportProgressStep.ts
var ProductImportProgressStep;

(function (ProductImportProgressStep) {
  ProductImportProgressStep[ProductImportProgressStep["\u5931\u6557"] = -1] = "\u5931\u6557";
  ProductImportProgressStep[ProductImportProgressStep["\u30AD\u30E3\u30F3\u30BB\u30EB"] = 0] = "\u30AD\u30E3\u30F3\u30BB\u30EB";
  ProductImportProgressStep[ProductImportProgressStep["\u958B\u59CB"] = 1] = "\u958B\u59CB";
  ProductImportProgressStep[ProductImportProgressStep["\u30D5\u30A1\u30A4\u30EB\u8AAD\u307F\u8FBC\u307F"] = 2] = "\u30D5\u30A1\u30A4\u30EB\u8AAD\u307F\u8FBC\u307F";
  ProductImportProgressStep[ProductImportProgressStep["\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF"] = 3] = "\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF";
  ProductImportProgressStep[ProductImportProgressStep["\u8FFD\u52A0"] = 4] = "\u8FFD\u52A0";
  ProductImportProgressStep[ProductImportProgressStep["\u4FDD\u5B58"] = 5] = "\u4FDD\u5B58";
  ProductImportProgressStep[ProductImportProgressStep["\u5B8C\u4E86"] = 6] = "\u5B8C\u4E86";
})(ProductImportProgressStep || (ProductImportProgressStep = {}));
// CONCATENATED MODULE: ./src/components/product/import/ProductImportMessageConverter.ts




var ProductImportMessageConverter_ProductImportMessageConverter = /*#__PURE__*/function () {
  function ProductImportMessageConverter() {
    Object(classCallCheck["a" /* default */])(this, ProductImportMessageConverter);
  }

  Object(createClass["a" /* default */])(ProductImportMessageConverter, [{
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
      m[ProductImportProgressStep.失敗] = "インポートが失敗しました。";
      m[ProductImportProgressStep.キャンセル] = "インポートがキャンセルされました。";
      m[ProductImportProgressStep.開始] = "インポートを開始します。";
      m[ProductImportProgressStep.ファイル読み込み] = "ファイルの読み込み。";
      m[ProductImportProgressStep.形式チェック] = "ファイル内容・形式のチェック。";
      m[ProductImportProgressStep.追加] = "プロダクトの追加・置き換え。";
      m[ProductImportProgressStep.保存] = "LocalStrageへの保存。";
      m[ProductImportProgressStep.完了] = "インポートが成功しました。";
      return m;
    }
  }]);

  return ProductImportMessageConverter;
}();


ProductImportMessageConverter_ProductImportMessageConverter.MESSAGE_DIC = ProductImportMessageConverter_ProductImportMessageConverter.initMap();

/***/ })

}]);