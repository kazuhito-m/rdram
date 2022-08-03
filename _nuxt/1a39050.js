(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draw2dCanvasGuideType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(816);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);







var Draw2dCanvasGuideType = /*#__PURE__*/function () {
  function Draw2dCanvasGuideType(type, iconKey, caption, canvasPolicy) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Draw2dCanvasGuideType);

    this.type = type;
    this.iconKey = iconKey;
    this.caption = caption;
    this.canvasPolicy = canvasPolicy;
    Draw2dCanvasGuideType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Draw2dCanvasGuideType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return (other === null || other === void 0 ? void 0 : other.iconKey) === this.iconKey;
    }
  }], [{
    key: "values",
    value: function values() {
      return Draw2dCanvasGuideType.vs;
    }
  }, {
    key: "of",
    value: function of(type) {
      var found = this.vs.find(function (item) {
        return item.type === type;
      });
      if (found) return found;
      return Draw2dCanvasGuideType.なし;
    }
  }, {
    key: "ofIconKey",
    value: function ofIconKey(iconKey) {
      var found = this.vs.find(function (item) {
        return item.iconKey === iconKey;
      });
      if (found) return found;
      return Draw2dCanvasGuideType.なし;
    }
  }]);

  return Draw2dCanvasGuideType;
}();


Draw2dCanvasGuideType.vs = [];
Draw2dCanvasGuideType.なし = new Draw2dCanvasGuideType(_domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_5__[/* CanvasGuideType */ "a"].NOTHING, "mdi-grid-off", "なし(白地)", null);
Draw2dCanvasGuideType.グリッド = new Draw2dCanvasGuideType(_domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_5__[/* CanvasGuideType */ "a"].GRID, "mdi-grid", "グリッド(方眼・格子状)", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.policy.canvas.SnapToGridEditPolicy());
Draw2dCanvasGuideType.ジオメトリ = new Draw2dCanvasGuideType(_domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_5__[/* CanvasGuideType */ "a"].GEOMETRY, "mdi-crop", "ジオメトリ(他アイコン位置をガイド)", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.policy.canvas.SnapToGeometryEditPolicy());

/***/ })

}]);