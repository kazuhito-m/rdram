(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/canvastest.vue?vue&type=template&id=06d92b08&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"diagram-canvas",attrs:{"id":"canvas01"}})])}]


// CONCATENATED MODULE: ./src/pages/canvastest.vue?vue&type=template&id=06d92b08&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.anchor.js
var es_string_anchor = __webpack_require__(577);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(870);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widget.js
var widget = __webpack_require__(911);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/draggable.js
var draggable = __webpack_require__(913);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/droppable.js
var droppable = __webpack_require__(915);

// EXTERNAL MODULE: ./node_modules/draw2d/dist/draw2d.js
var draw2d = __webpack_require__(815);
var draw2d_default = /*#__PURE__*/__webpack_require__.n(draw2d);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(127);

// CONCATENATED MODULE: ./src/draw2d/custom/TopAbsAndCenterLocator.ts









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * draw2dのToLocatorが「上に付くが、横位置は真ん中に固定」なので、
 * 「上について横位置は左端」というロケータが欲しくて、自力で実装したもの。
 */

var TopAbsAndCenterLocator_TopAbsAndCenterLocator = /*#__PURE__*/function (_draw2d$layout$locato) {
  Object(inherits["a" /* default */])(TopAbsAndCenterLocator, _draw2d$layout$locato);

  var _super = _createSuper(TopAbsAndCenterLocator);

  function TopAbsAndCenterLocator(attr, setter, getter) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TopAbsAndCenterLocator);

    _this = _super.call(this, attr, setter, getter);
    _this.NAME = 'draw2d.layout.locator.TopAbsAndCenterLocator';
    return _this;
  }

  Object(createClass["a" /* default */])(TopAbsAndCenterLocator, [{
    key: "relocate",
    value: function relocate(index, target) {
      var x = 0;
      var parent = target.getParent();
      if (!(target instanceof draw2d_default.a.Port)) x = (parent.getWidth() - target.getWidth()) / 2;
      this.x = x;

      Object(get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(TopAbsAndCenterLocator.prototype), "relocate", this).call(this, index, target);
    }
  }]);

  return TopAbsAndCenterLocator;
}(draw2d_default.a.layout.locator.XYAbsPortLocator);


// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/canvastest.vue?vue&type=script&lang=ts&

















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function canvastestvue_type_script_lang_ts_createSuper(Derived) { var hasNativeReflectConstruct = canvastestvue_type_script_lang_ts_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function canvastestvue_type_script_lang_ts_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var canvastestvue_type_script_lang_ts_default_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(default_1, _Vue);

  var _super = canvastestvue_type_script_lang_ts_createSuper(default_1);

  function default_1() {
    Object(classCallCheck["a" /* default */])(this, default_1);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(default_1, [{
    key: "mounted",
    value: function mounted() {
      var canvas = new draw2d_default.a.Canvas("canvas01");
      canvas.installEditPolicy(new draw2d_default.a.policy.canvas.FadeoutDecorationPolicy());
      canvas.installEditPolicy(new draw2d_default.a.policy.connection.DragConnectionCreatePolicy({
        createConnection: function createConnection() {
          // const c = new draw2d.shape.state.Connection();
          var c = new draw2d_default.a.Connection(); // c.setRouter(new draw2d.layout.connection.ManhattanConnectionRouter());

          var label = new draw2d_default.a.shape.basic.Label({
            text: "登録日付 < 本日"
          });
          label.setStroke(0); // label.setPadding(2);

          label.setPadding(0);
          label.setAlpha(0.75);
          label.setBackgroundColor("#ffffff");
          c.add(label, new draw2d_default.a.layout.locator.PolylineMidpointLocator()); // c.add(label, new draw2d.layout.locator.ParallelMidpointLocator());

          var decorator = new draw2d_default.a.decoration.connection.ArrowDecorator();
          decorator.setBackgroundColor(c.getColor());
          c.setTargetDecorator(decorator);
          return c;
        }
      }));
      canvas.installEditPolicy(new draw2d_default.a.policy.canvas.SnapToGridEditPolicy()); // const start = new draw2d.shape.node.Start({ x: 50, y: 450 });
      // const end = new draw2d.shape.node.End({ x: 230, y: 150 });
      // canvas.add(start);
      // canvas.add(end);

      for (var i = 0; i < 5; i++) {
        var y = 300;
        var x = 100;
        y += Math.floor(i / 5) * 200;
        x += i % 5 * 100;
        this.simpleLabelIcon(canvas, x, y);
      }

      this.startPointCircle(canvas);
      this.endPointCircle(canvas);
      this.laneAndIcon(canvas, 300, 100);
      this.laneAndIcon(canvas, 650, 100);
    }
  }, {
    key: "startPointCircle",
    value: function startPointCircle(canvas) {
      var id = 114514;
      var bg = new draw2d_default.a.shape.basic.Rectangle({
        stroke: 0,
        padding: 0,
        alpha: 0.0,
        width: 40,
        height: 40
      });
      bg.setResizeable(false);
      var waku = new draw2d_default.a.shape.basic.Circle({
        bgColor: "#000000",
        alpha: 1,
        radius: 0,
        stroke: 0,
        selectable: true,
        resizable: false,
        id: id
      });
      waku.setWidth(20);
      waku.setResizeable(false);
      var outputPort = new draw2d_default.a.OutputPort();
      waku.addPort(outputPort, new draw2d_default.a.layout.locator.BottomLocator()); // const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(waku);
      // const port = outputPort as any;
      // port.setConnectionAnchor(anchor);

      waku.add(bg, new draw2d_default.a.layout.locator.XYAbsPortLocator({
        x: -10,
        y: -10
      }));
      canvas.add(waku, 500, 150);
    }
  }, {
    key: "endPointCircle",
    value: function endPointCircle(canvas) {
      var id = 11451419;
      var bg = new draw2d_default.a.shape.basic.Rectangle({
        stroke: 0,
        padding: 0,
        alpha: 0.0,
        width: 40,
        height: 40
      });
      bg.setResizeable(false);
      var waku = new draw2d_default.a.shape.basic.Circle({
        bgColor: "none",
        alpha: 1,
        radius: 0,
        stroke: 2,
        selectable: true,
        resizable: false
      });
      waku.setWidth(21);
      waku.setResizeable(false);
      var center = new draw2d_default.a.shape.basic.Circle({
        bgColor: "#000000",
        alpha: 1,
        radius: 0,
        stroke: 0,
        selectable: false,
        resizable: false,
        id: id
      });
      center.setWidth(13);
      center.setResizeable(false);
      var inputPort = new draw2d_default.a.InputPort(); // const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(center);
      // const port = inputPort as any;
      // port.setConnectionAnchor(anchor);

      center.addPort(inputPort, new draw2d_default.a.layout.locator.TopLocator());
      center.add(waku, new draw2d_default.a.layout.locator.XYAbsPortLocator({
        x: -4,
        y: -4
      }));
      center.add(bg, new draw2d_default.a.layout.locator.XYAbsPortLocator({
        x: -13,
        y: -13
      }));
      canvas.add(center, 600, 150);
    }
  }, {
    key: "simpleLabelIcon",
    value: function simpleLabelIcon(canvas, x, y) {
      var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charactor = alpha.charAt(Math.floor(Math.random() * alpha.length));
      var icon = new draw2d_default.a.shape.basic.Label({
        x: x,
        y: y,
        text: charactor,
        width: 50,
        fontSize: 40,
        stroke: 1,
        padding: 0,
        bgColor: "#FFFFFF",
        resizable: false,
        alpha: 1 // opacityと一緒

      });
      var name = new draw2d_default.a.shape.basic.Label({
        text: "ここに タイトルが入ります",
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      icon.createPort("input", new draw2d_default.a.layout.locator.TopLocator());
      icon.createPort("output", new draw2d_default.a.layout.locator.BottomLocator());
      var anchor = new draw2d_default.a.layout.anchor.ChopboxConnectionAnchor(icon);
      var port = icon.getOutputPorts().last();
      port.setConnectionAnchor(anchor); // const port2 = icon.getInputPorts().last() as any;
      // console.log(port2);
      // port2.setConnectionAnchor(anchor);

      icon.add(name, new draw2d_default.a.layout.locator.BottomLocator());
      canvas.add(icon);
    }
  }, {
    key: "laneAndIcon",
    value: function laneAndIcon(canvas, x, y) {
      var icon = new draw2d_default.a.shape.basic.Label({
        text: "類",
        fontSize: 30,
        stroke: 0,
        padding: 0,
        bgColor: "#FFFFFF",
        resizable: false,
        alpha: 1 // opacityと一緒

      });
      var name = new draw2d_default.a.shape.basic.Label({
        text: "ここに タイトルが入ります",
        stroke: 0,
        padding: 0,
        resizable: false,
        selectable: false
      });
      var waku = new draw2d_default.a.shape.basic.Rectangle({
        x: x,
        y: y,
        width: 280,
        height: 700,
        minWidth: 100,
        minHeight: 60,
        bgColor: "none",
        color: "#000000",
        alpha: 1,
        stroke: 2,
        zOrder: 100
      });
      var topBox = new draw2d_default.a.shape.basic.Rectangle({
        width: 280,
        height: 60,
        bgColor: "none",
        color: "#000000",
        alpha: 1,
        stroke: 1
      });
      waku.on("resize", function (selfFigure) {
        selfFigure.getChildren().data.forEach(function (i) {
          return i.setWidth(selfFigure.getWidth());
        });
      });
      icon.add(name, new draw2d_default.a.layout.locator.BottomLocator());
      waku.add(icon, new TopAbsAndCenterLocator_TopAbsAndCenterLocator({
        y: 5
      }));
      waku.add(topBox, new draw2d_default.a.layout.locator.XYAbsPortLocator(0, 0));
      canvas.add(waku);
      var added = canvas.getFigures().last(); // const lastZOrder: Figure = canvas
      //   .getFigures()
      //   .asArray()
      //   // .forEach((i: Figure) => console.log(i.getZOrder()));
      //   // .filter((i: Figure) => i !== added)
      //   .reduce(
      //     (l: Figure, r: Figure) =>
      //       l.getZOrder !== undefined && Math.max(l.getZOrder(), r.getZOrder())
      //   );

      var lastZOrder = null;

      var _iterator = _createForOfIteratorHelper(canvas.getFigures().asArray()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var figure = _step.value;
          if (figure.getId() === added.getId()) continue;

          if (!lastZOrder) {
            lastZOrder = figure;
            continue;
          }

          if (lastZOrder.getZOrder() < figure.getZOrder()) continue;
          lastZOrder = figure;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!lastZOrder) return;
      added.toFront(lastZOrder); // lastZOrder.toBack(added);
      // canvas.add(line2);
    }
  }]);

  return default_1;
}(nuxt_property_decorator_umd["Vue"]);

canvastestvue_type_script_lang_ts_default_1 = __decorate([nuxt_property_decorator_umd["Component"]], canvastestvue_type_script_lang_ts_default_1);
/* harmony default export */ var canvastestvue_type_script_lang_ts_ = (canvastestvue_type_script_lang_ts_default_1);
// CONCATENATED MODULE: ./src/pages/canvastest.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_canvastestvue_type_script_lang_ts_ = (canvastestvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/pages/canvastest.vue?vue&type=style&index=0&id=06d92b08&scoped=true&lang=css&
var canvastestvue_type_style_index_0_id_06d92b08_scoped_true_lang_css_ = __webpack_require__(998);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// CONCATENATED MODULE: ./src/pages/canvastest.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_canvastestvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "06d92b08",
  null
  
)

/* harmony default export */ var canvastest = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(999);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("e09c10e4", content, true, {"sourceMap":false});

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvastest_vue_vue_type_style_index_0_id_06d92b08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(982);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvastest_vue_vue_type_style_index_0_id_06d92b08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvastest_vue_vue_type_style_index_0_id_06d92b08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".diagram-canvas[data-v-06d92b08]{width:1024px;height:1024px;background-color:#fff;margin:0;border-radius:5px;filter:drop-shadow(10px 10px 10px rgba(0,0,0,.6));position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

}]);