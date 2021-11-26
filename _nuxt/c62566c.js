(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouterTypeDraw2dConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(149);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(233);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_3__);





var RouterTypeDraw2dConverter = /*#__PURE__*/function () {
  function RouterTypeDraw2dConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RouterTypeDraw2dConverter);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RouterTypeDraw2dConverter, [{
    key: "makeRouterBy",
    value: function makeRouterBy(routerType) {
      if (!routerType) return undefined;
      if (routerType.equals(_domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].MANHATTAN)) return new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.connection.ManhattanConnectionRouter();
      if (routerType.equals(_domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].CIRCUIT)) return new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.connection.CircuitConnectionRouter();
      if (routerType.equals(_domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].SPLINE)) return new draw2d__WEBPACK_IMPORTED_MODULE_3___default.a.layout.connection.SplineConnectionRouter(); // if (routerType.equals(RouterType.SKETCH))
      //    return new draw2d.layout.connection.SketchConnectionRouter();

      return undefined;
    }
  }, {
    key: "analyzeRouterType",
    value: function analyzeRouterType(router) {
      if (!router) return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].DIRECT;
      var name = router.NAME;
      if (!name) return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].DIRECT;
      if (name === "draw2d.layout.connection.ManhattanConnectionRouter") return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].MANHATTAN;
      if (name === "draw2d.layout.connection.CircuitConnectionRouter") return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].CIRCUIT;
      if (name === "draw2d.layout.connection.SplineConnectionRouter") return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].SPLINE; // if (name === "draw2d.layout.connection.SketchConnectionRouter") return RouterType.SKETCH;

      return _domain_relation_RouterType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].DIRECT;
    }
  }]);

  return RouterTypeDraw2dConverter;
}();



/***/ })

}]);