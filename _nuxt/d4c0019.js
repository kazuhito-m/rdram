(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopLeftLocator; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(235);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * draw2dのToLocatorが「上に付くが、横位置は真ん中に固定」なので、
 * 「上について横位置は左端」というロケータが欲しくて、自力で実装したもの。
 */

var TopLeftLocator = /*#__PURE__*/function (_draw2d$layout$locato) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TopLeftLocator, _draw2d$layout$locato);

  var _super = _createSuper(TopLeftLocator);

  function TopLeftLocator(attr, setter, getter) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, TopLeftLocator);

    _this = _super.call(this, attr, setter, getter);
    _this.NAME = 'draw2d.layout.locator.TopLeftLocator';
    _this.padding = 0;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(TopLeftLocator, [{
    key: "relocate",
    value: function relocate(index, target) {
      var targetBoundingBox = target.getBoundingBox();
      var y = 0;
      if (!(target instanceof draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.Port)) y = -targetBoundingBox.h - 2;
      target.setPosition(0, y);
    }
  }]);

  return TopLeftLocator;
}(draw2d__WEBPACK_IMPORTED_MODULE_6___default.a.layout.locator.TopLocator);



/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(886);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(27).default
var update = add("10726184", content, true, {"sourceMap":false});

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layouttest_vue_vue_type_style_index_0_id_5591b8a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(847);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layouttest_vue_vue_type_style_index_0_id_5591b8a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layouttest_vue_vue_type_style_index_0_id_5591b8a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".diagram-canvas[data-v-5591b8a4]{width:1024px;height:768px;background-color:#00f;margin:0;border-radius:5px;filter:drop-shadow(10px 10px 10px rgba(0,0,0,.6));position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/layouttest.vue?vue&type=template&id=5591b8a4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('link',{attrs:{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"}}),_vm._v(" "),_c('v-icon',[_vm._v("$vuetify.icons.company")]),_vm._v(" "),_c('v-icon',[_vm._v("mdi-office-building-outline")]),_vm._v(" "),_c('div',{staticClass:"mdi mdi-office-building-outline",attrs:{"id":"companyIcon"}}),_vm._v(" "),_c('div',{staticStyle:{"font-family":"'Material Design Icons'"},attrs:{"id":"test_name"}}),_vm._v(" "),_c('v-menu',{attrs:{"bottom":"","origin":"center center","transition":"scale-transition"}},[_c('v-list',_vm._l((Object.keys(_vm.LINE_TYPE)),function(lineType){return _c('v-list-item',{key:lineType,on:{"click":function($event){return _vm.changeLintType(lineType)}}},[_c('v-list-item-title',[_vm._v(_vm._s(lineType))])],1)}),1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onCrickSiri}},[_vm._v("尻")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onCrickZoom}},[_vm._v("ズム")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onClickRouter}},[_vm._v("router")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onClickStore}},[_vm._v("store")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onClickVersion}},[_vm._v("version")]),_vm._v(" "),_c('v-card-text',[_c('v-row',[_c('v-col',[_c('v-slider',{attrs:{"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline","max":"300","min":"20"},on:{"click:append":_vm.zoomIn,"click:prepend":_vm.zoomOut},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('v-text-field',{staticClass:"mt-0 pt-0",staticStyle:{"width":"60px","float":"righat"},attrs:{"type":"number"},model:{value:(_vm.slider),callback:function ($$v) {_vm.slider=$$v},expression:"slider"}})]},proxy:true}]),model:{value:(_vm.slider),callback:function ($$v) {_vm.slider=_vm._n($$v)},expression:"slider"}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"diagram-canvas",attrs:{"id":"canvas01"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/layouttest.vue?vue&type=template&id=5591b8a4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.anchor.js
var es_string_anchor = __webpack_require__(496);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-integer.js
var es_number_is_integer = __webpack_require__(817);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widget.js
var widget = __webpack_require__(746);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/draggable.js
var draggable = __webpack_require__(749);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/droppable.js
var droppable = __webpack_require__(751);

// EXTERNAL MODULE: ./node_modules/draw2d/dist/draw2d.js
var draw2d = __webpack_require__(235);
var draw2d_default = /*#__PURE__*/__webpack_require__.n(draw2d);

// EXTERNAL MODULE: ./src/draw2d/custom/TopLeftLocator.ts
var TopLeftLocator = __webpack_require__(690);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/layouttest.vue?vue&type=script&lang=ts&








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var layouttestvue_type_script_lang_ts_default_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(default_1, _Vue);

  var _super = _createSuper(default_1);

  function default_1() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, default_1);

    _this = _super.apply(this, arguments);
    _this.slider = 100;
    _this.LINE_TYPE = {
      // InteractiveManhattan(操作ポイント付きマンハッタン)があるので、普通のはイラんかな。
      // "draw2d.layout.connection.ManhattanConnectionRouter": new draw2d.layout.connection.ManhattanConnectionRouter(),
      // 角付きマンハッタン…はわかりにくいから要らんかな。
      // "draw2d.layout.connection.ManhattanBridgedConnectionRouter": new draw2d.layout.connection.ManhattanBridgedConnectionRouter(),
      "draw2d.layout.connection.InteractiveManhattanConnectionRouter": new draw2d_default.a.layout.connection.InteractiveManhattanConnectionRouter(),
      "draw2d.layout.connection.CircuitConnectionRouter": new draw2d_default.a.layout.connection.CircuitConnectionRouter(),
      "draw2d.layout.connection.DirectRouter": new draw2d_default.a.layout.connection.DirectRouter(),
      "draw2d.layout.connection.SplineConnectionRouter": new draw2d_default.a.layout.connection.SplineConnectionRouter(),
      // なんかバグる
      // "draw2d.layout.connection.MazeConnectionRouter": new draw2d.layout.connection.MazeConnectionRouter(),
      "draw2d.layout.connection.SketchConnectionRouter": new draw2d_default.a.layout.connection.SketchConnectionRouter()
    };
    return _this;
  }

  Object(createClass["a" /* default */])(default_1, [{
    key: "mounted",
    value: function mounted() {
      this.showCanvas();
      this.fixCanvasPosition();
      this.writeIconByCharCode();
    }
  }, {
    key: "showCanvas",
    value: function showCanvas() {
      var canvas = new draw2d_default.a.Canvas("canvas01"); // ポートをカーソルの近くのものしか見せないモード。

      canvas.installEditPolicy(new draw2d_default.a.policy.canvas.CoronaDecorationPolicy()); // 未指定のときのデフォルトが20、マイナス値かポリシー削除で非表示に

      canvas.installEditPolicy(new draw2d_default.a.policy.canvas.ShowGridEditPolicy(-1));
      canvas.installEditPolicy(new draw2d_default.a.policy.canvas.ExtendedKeyboardPolicy());
      var commandStack = canvas.getCommandStack();
      this.addCommandEventListner(commandStack);
      this.addSampleObjects(canvas);
      this.canvas = canvas;
      this.setSliderZoomNumgber();
    }
  }, {
    key: "addCommandEventListner",
    value: function addCommandEventListner(commandStack) {
      commandStack.addEventListener(function (event) {
        // http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/api/draw2d.command.CommandStackEvent
        var command = event.getCommand();
        console.log("execute commnad! " + event.action + ", " + command.getLabel());
        console.log(event);

        if (event.isPostChangeEvent()) {
          //&& command.canExecute()
          command.cancel(); // if (confirm("この処理をそのまま適用して良いですか？")) return;
          // command.undo();
        }
      });
    }
    /**
     * どーしても、draw2dがsvg作るときに”position: absolute"をしてしまうので、削除する。
     */

  }, {
    key: "fixCanvasPosition",
    value: function fixCanvasPosition() {
      var _a;

      var svg = (_a = document.getElementById("canvas01")) === null || _a === void 0 ? void 0 : _a.firstChild;
      svg.style.removeProperty("position");
    }
  }, {
    key: "addSampleObjects",
    value: function addSampleObjects(canvas) {
      this.wakuOnly(canvas);
      this.groupingApproach(canvas);
      this.layoutApproach(canvas);
      this.structuredApproach2(canvas);
      this.structuredApproach2Dash(canvas);
      this.startPointCircle(canvas);
      this.endPointCircle(canvas);
      this.circleAndIcon(canvas);
      this.conneectIcons(canvas);
      this.addStartEndTest(canvas);
      this.sampleContainer(canvas);
      console.log(canvas);
    }
  }, {
    key: "writeIconByCharCode",
    value: function writeIconByCharCode() {
      var div = document.getElementById("test_name");
      if (!div) return;
      div.innerHTML = "\uDB85\uDD1F";
    }
    /**
     * Rectangleでは「透過にすると、枠線まで透過される」ので、中身透明な枠を作ることが出来ない。
     * そこでStackLayoutに「透明のRectangle」を入れ、代用する。
     */

  }, {
    key: "wakuOnly",
    value: function wakuOnly(canvas) {
      var onlyBordar = new draw2d_default.a.shape.layout.StackLayout();
      var dummyRect = new draw2d_default.a.shape.basic.Rectangle({
        alpha: 0
      });
      onlyBordar.add(dummyRect);
      onlyBordar.setStroke(2);
      onlyBordar.resizable = true;
      onlyBordar.radius = 5;
      onlyBordar.stroke = 3;
      onlyBordar.width = 75;
      onlyBordar.height = 75;
      onlyBordar.color = new draw2d_default.a.util.Color(255, 0, 0); // onlyBordar.bgColor = new draw2d.util.Color(0,255,0); // これも一応出来る(意味ないが)

      canvas.add(onlyBordar, 50, 100);
    }
  }, {
    key: "groupingApproach",
    value: function groupingApproach(canvas) {
      var resourceId = 1;
      var resourceName = "グルーピングアプローチで作られた場合、ここに名前が出ますよ！";
      var left = 200;
      var top = 20; // icon のTag(v-icon)から、フォントと文字を類推。

      var iconTag = document.getElementById("companyIcon");
      var style = window.getComputedStyle(iconTag, "::before");
      var padding = 0;
      var id = "".concat(resourceId, "-0");
      var waku = new draw2d_default.a.shape.basic.Rectangle({
        x: left,
        y: top + 27,
        bgColor: "#FFFFFF",
        alpha: 0.6,
        width: 75,
        height: 75,
        radius: 5,
        stroke: 3,
        selectable: true,
        resizable: true,
        color: "#000000",
        padding: padding,
        id: id
      });
      canvas.add(waku);
      var createdWaku = canvas.getFigure(id);
      var id1 = "".concat(resourceId, "-1");
      var icon = new draw2d_default.a.shape.basic.Label({
        x: left,
        y: top,
        fontFamily: style.fontFamily,
        text: style.content.replace(/"/g, ""),
        fontSize: 25,
        stroke: 0,
        padding: padding,
        bgColor: "#FFFFFF",
        alpha: 1,
        id: id1
      });
      this.createStandardIconPort(icon);
      var id2 = "".concat(resourceId, "-2");
      var name = new draw2d_default.a.shape.basic.Label({
        // x: left,
        // y: top,
        text: resourceName,
        stroke: 0,
        padding: padding,
        resizable: false,
        selectable: false,
        id: id2
      });
      icon.add(name, new draw2d_default.a.layout.locator.RightLocator());
      canvas.add(icon);
      var createdIcon = canvas.getFigure(icon.id);
      var groupItems = new draw2d_default.a.util.ArrayList();
      groupItems.id = resourceId;
      groupItems.add(createdWaku);
      groupItems.add(createdIcon);
      groupItems.resizable = true;
      var groupCommand = new draw2d_default.a.command.CommandGroup(canvas, groupItems);
      canvas.getCommandStack().execute(groupCommand);
      var figures = canvas.getFigures();
      var group = figures.find(function (f) {
        return f.getCssClass() === "draw2d_shape_composite_Group";
      });
      if (!group) return; // 下のほうほうでリサイズ可能にしても、グッシャグシャにバグる。
      // group.setResizeable(true);
      // group.resizeable = true;
      // 自力でグループ作っても、上のようにならない。
      // const group = new draw2d.shape.composite.Group();
      // group.add(createdWaku, new draw2d.layout.locator.XYAbsPortLocator(0, 26));
      // group.add(createdIcon, new draw2d.layout.locator.XYAbsPortLocator(20, 20));
      // group.width = createdWaku.lastAppliedAttributes.width;
      // group.height = createdWaku.lastAppliedAttributes.height + 26;
      // canvas.add(group);
      // const createdGroup = canvas.getFigure(group.id);
      // createdGroup.resizable = true;
    }
  }, {
    key: "layoutApproach",
    value: function layoutApproach(canvas) {
      var resourceId = 1;
      var resourceName = "構造化アプローチ(Layout利用編)";
      var left = 20;
      var top = 20; // ---- icon作成 ----
      // icon のTag(v-icon)から、フォントと文字を類推。

      var iconTag = document.getElementById("companyIcon");
      var style = window.getComputedStyle(iconTag, "::before");
      var padding = 0;
      var id = resourceId + 2000000;
      var waku = new draw2d_default.a.shape.basic.Rectangle({
        x: left,
        y: top,
        bgColor: "#FFFFFF",
        alpha: 0.6,
        width: 75,
        height: 75,
        radius: 5,
        stroke: 3,
        // grow: true,
        selectable: true,
        resizable: true,
        color: "#000000",
        padding: padding
      });
      var icon = new draw2d_default.a.shape.basic.Label({
        width: 20,
        height: 30,
        fontFamily: style.fontFamily,
        text: style.content.replace(/"/g, ""),
        fontSize: 25,
        stroke: 0,
        padding: padding,
        bgColor: "#FFFFFF",
        alpha: 1 // opacityと一緒

      });
      this.createStandardIconPort(icon);
      var name = new draw2d_default.a.shape.basic.Label({
        text: resourceName,
        stroke: 0,
        padding: padding,
        resizable: false,
        selectable: false
      });
      var hContainer = new draw2d_default.a.shape.layout.HorizontalLayout();
      hContainer.add(icon);
      hContainer.add(name);
      hContainer.setStroke(0);
      waku.add(hContainer, new draw2d_default.a.layout.locator.TopLocator());
      canvas.add(waku);
      var createdWaku = canvas.getFigure(id);
    }
  }, {
    key: "structuredApproach2",
    value: function structuredApproach2(canvas) {
      var resourceId = 1;
      var resourceName = "構造化アプローチ(Locatorとadd利用編)";
      var left = 500;
      var top = 500; // ---- icon作成 ----
      // icon のTag(v-icon)から、フォントと文字を類推。

      var iconTag = document.getElementById("companyIcon");
      var style = window.getComputedStyle(iconTag, "::before");
      var padding = 0;
      var id = resourceId + 4000000;
      var waku = new draw2d_default.a.shape.basic.Rectangle({
        x: left,
        y: top,
        bgColor: "#FFFFFF",
        alpha: 0.6,
        width: 75,
        height: 75,
        radius: 5,
        stroke: 3,
        selectable: true,
        resizable: true,
        color: "#000000",
        padding: padding
      });
      var icon = new draw2d_default.a.shape.basic.Label({
        fontFamily: style.fontFamily,
        text: style.content.replace(/"/g, ""),
        fontSize: 25,
        stroke: 0,
        padding: padding,
        bgColor: "#FFFFFF",
        alpha: 1 // opacityと一緒

      });
      this.createStandardIconPort(icon);
      var name = new draw2d_default.a.shape.basic.Label({
        text: resourceName,
        stroke: 0,
        padding: padding,
        resizable: false,
        selectable: false
      });
      waku.add(icon, new draw2d_default.a.layout.locator.XYAbsPortLocator({
        x: 2,
        y: 4
      }));
      waku.add(name, new draw2d_default.a.layout.locator.TopLocator()); // ↑狙ったのは「枠の中で、左上からの一定の位置をキープ」である…が左に張り付いてうんともすんともいわない。
      // XYRelPortLocator -40)だと反応するし、マイナスで枠外にも行くことから、バグのように感じられる。
      // …しかし”PortLocator"だからなぁ。
      //
      // と思ったが、仕様の違いで「{ x: 2, y: 4 }指定でなければ有効にならない」でした。
      // https://github.com/freegroup/draw2d/blob/master/src/layout/locator/XYAbsPortLocator.js#L36
      // …てか「仕様を合わせたほうが良い」くね？やっぱバグっぽい。

      canvas.add(waku);
      var createdWaku = canvas.getFigure(id);
    }
  }, {
    key: "structuredApproach2Dash",
    value: function structuredApproach2Dash(canvas) {
      var resourceId = 1;
      var resourceName = "構造化アプローチ(Locatorとadd利用編の自力拡張版)";
      var left = 500;
      var top = 250; // ---- icon作成 ----
      // icon のTag(v-icon)から、フォントと文字を類推。

      var iconTag = document.getElementById("companyIcon");
      var style = window.getComputedStyle(iconTag, "::before");
      var padding = 0;
      var id = resourceId + 6000000;
      var waku = new draw2d_default.a.shape.basic.Rectangle({
        x: left,
        y: top,
        // 以下2つで、透明化AND頃合いの色になる
        bgColor: "none",
        color: "#666666",
        alpha: 1,
        width: 75,
        height: 75,
        radius: 5,
        stroke: 3,
        selectable: true,
        resizable: true,
        padding: padding,
        id: id
      });
      var icon = new draw2d_default.a.shape.basic.Label({
        fontFamily: style.fontFamily,
        text: style.content.replace(/"/g, ""),
        fontSize: 25,
        stroke: 0,
        padding: padding,
        bgColor: "#FFFFFF",
        alpha: 1 // opacityと一緒

      }); // this.createStandardIconPort(icon);

      var name = new draw2d_default.a.shape.basic.Label({
        text: resourceName,
        stroke: 0,
        padding: padding,
        resizable: false,
        selectable: false
      });
      waku.createPort("hybrid", new draw2d_default.a.layout.locator.XYAbsPortLocator({
        x: 12,
        y: -14
      }));
      icon.add(name, new draw2d_default.a.layout.locator.XYRelPortLocator({
        x: 95,
        y: 23
      }));
      waku.add(icon, new TopLeftLocator["a" /* default */]()); // 無かったものを地力で作った

      canvas.add(waku);
      var createdWaku = canvas.getFigure(id);
      createdWaku.on("resize", function (emitter) {
        console.log("resized. figure:" + emitter.getId());
      });
      createdWaku.on("move", function (emitter) {
        console.log("move. figure:" + emitter.getId());
      });
    }
    /**
     * アイコンにポートを作成する。
     *
     * アイコンは「真ん中」かつ「汎用」かつ「線の方向なし」で
     */

  }, {
    key: "createStandardIconPort",
    value: function createStandardIconPort(icon) {
      // 「中央」だと、「線がいつも下から出る」ので、うーん…(飢えから出て欲しい)
      icon.createPort("hybrid", new draw2d_default.a.layout.locator.CenterLocator()); // icon.createPort("hybrid", new draw2d.layout.locator.TopLocator());
    }
  }, {
    key: "changeLintType",
    value: function changeLintType(lineType) {
      var connectionRouter = this.LINE_TYPE[lineType];
      this.canvas.getLines().each(function (i, line) {
        return line.setRouter(connectionRouter);
      });
      this.canvas.getLines().each(function (i, line) {
        console.log(line);
        console.log(line.router);
        if (!line.router) return;
        console.log("name:" + line.router.NAME);
      });
    }
  }, {
    key: "conneectIcons",
    value: function conneectIcons(canvas) {
      var src = canvas.getFigure(6000001);
      console.log(src);
      var start = src.hybridPorts.data[0];
      console.log(start);
      console.log("↑はプロパティ的にはあるはずなのに…。"); // TODO もう片方

      var connection = new draw2d_default.a.Connection();
      connection.setStroke(2);
      connection.setOutlineStroke(1);
      connection.setOutlineColor("#303030");
      connection.setRouter(null);
      connection.setColor("#91B93E");
      connection.setSource(start); // connection.setTarget(end.getInputPort(0));

      canvas.add(connection);
    }
    /**
     * 丸とトップアイコンなスタンダード系を模索
     */

  }, {
    key: "circleAndIcon",
    value: function circleAndIcon(canvas) {
      var id = 7000001; // icon のTag(v-icon)から、フォントと文字を類推。

      var iconTag = document.getElementById("companyIcon");
      var style = window.getComputedStyle(iconTag, "::before");
      var waku = new draw2d_default.a.shape.basic.Oval({
        x: 50,
        y: 300,
        bgColor: "#99DDFF",
        alpha: 1,
        width: 105,
        height: 40,
        radius: 0,
        stroke: 0,
        selectable: true,
        resizable: true,
        color: "#000000",
        padding: 0,
        id: id
      });
      var moji = new draw2d_default.a.shape.basic.Label({
        text: "鉢文字基本かな灘",
        stroke: 0,
        padding: 0,
        alpha: 1,
        bold: true
      });
      var icon = new draw2d_default.a.shape.basic.Label({
        fontFamily: style.fontFamily,
        text: style.content.replace(/"/g, ""),
        fontSize: 25,
        stroke: 0,
        padding: 0,
        bgColor: "#FFFFFF",
        alpha: 1
      });
      waku.add(moji, new draw2d_default.a.layout.locator.CenterLocator());
      waku.add(icon, new draw2d_default.a.layout.locator.XYAbsPortLocator({
        x: -14,
        y: -17
      }));
      waku.createPort("hybrid", new draw2d_default.a.layout.locator.CenterLocator());
      canvas.add(waku);
    }
  }, {
    key: "startPointCircle",
    value: function startPointCircle(canvas) {
      var id = 114514;
      var bg = new draw2d_default.a.shape.basic.Rectangle({
        stroke: 0,
        padding: 0,
        alpha: 0.5,
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
      waku.addPort(outputPort, new draw2d_default.a.layout.locator.CenterLocator()); // waku.createPort("output");
      // const outputPort = waku.getPorts().last();

      var anchor = new draw2d_default.a.layout.anchor.ChopboxConnectionAnchor(waku);
      var port = outputPort;
      port.setConnectionAnchor(anchor);
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
        alpha: 0.5,
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
        resizable: false,
        id: id
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
      var inputPort = new draw2d_default.a.InputPort();
      var anchor = new draw2d_default.a.layout.anchor.ChopboxConnectionAnchor(center);
      var port = inputPort;
      port.setConnectionAnchor(anchor);
      center.addPort(inputPort, new draw2d_default.a.layout.locator.CenterLocator());
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
    key: "addStartEndTest",
    value: function addStartEndTest(canvas) {
      var start = new draw2d_default.a.shape.node.Start({
        x: 50,
        y: 450
      });
      var end = new draw2d_default.a.shape.node.End({
        x: 230,
        y: 450
      });
      canvas.add(start);
      canvas.add(end);
    }
  }, {
    key: "sampleContainer",
    value: function sampleContainer(canvas) {
      var label1 = new draw2d_default.a.shape.basic.Label({
        text: "[0,1] with long long long long label",
        fontColor: "#00AF00"
      });
      var label2 = new draw2d_default.a.shape.basic.Label({
        text: "[1,1] padding:10",
        fontColor: "#00AF00"
      });
      var label3 = new draw2d_default.a.shape.basic.Label({
        text: "[2,1] align:right",
        fontColor: "#00AF00"
      });
      var label4 = new draw2d_default.a.shape.basic.Label({
        text: "[3,1] resize:true",
        resizeable: true,
        fontColor: "#00AF00"
      });
      var container = new draw2d_default.a.shape.layout.TableLayout();
      container.addRow.apply(container, ["[0,0]", label1, "[0,2] align:center"]);
      container.addRow.apply(container, ["[1,0] valign:bottom", label2, "[1,2] long long long label"]);
      container.addRow.apply(container, ["[2,0]", label3, "[2,2]"]);
      container.addRow.apply(container, ["[3,0]", label4, "[3,2]"]);
      var cells = ["a", "b", "c"];
      container.addRow.apply(container, cells);
      var numbers = [];

      for (var i = 0; i < 3; i++) {
        numbers.push(i + "");
      }

      container.addRow.apply(container, numbers);
      container.setPadding(0);
      container.setCellPadding(1, 1, 10);
      container.setCellAlign(0, 2, "center");
      container.setCellAlign(2, 1, "right");
      container.setCellVerticalAlign(1, 0, "bottom");
      canvas.add(container, 500, 350);
    }
  }, {
    key: "onCrickSiri",
    value: function onCrickSiri() {}
  }, {
    key: "onCrickZoom",
    value: function onCrickZoom() {
      alert(this.canvas.getZoom());
    }
  }, {
    key: "onChangeInputZoom",
    value: function onChangeInputZoom(e) {
      console.log(e);
    }
  }, {
    key: "setSliderZoomNumgber",
    value: function setSliderZoomNumgber() {
      this.canvasZoomToSlider(this.canvas.getZoom());
      this.canvas.on("zoom", this.onZoomChangeFromCanvas);
    }
  }, {
    key: "canvasZoomToSlider",
    value: function canvasZoomToSlider(zoom) {
      // alert(zoom);
      this.slider = 100 / zoom;
    }
  }, {
    key: "onChangeSliderValue",
    value: function onChangeSliderValue(e) {
      var _this2 = this;

      console.log(e);
      console.log(new Date(), this.slider);

      if (Number.isInteger(this.slider)) {
        var base = Number(this.slider);
        isNaN;
        var fix = base;
        if (base < 20) fix = 20;
        if (base > 300) fix = 300;

        if (base != fix) {
          this.$nextTick(function () {
            _this2.slider = fix;
          });
          return false;
        }

        var zoom = 100 / fix;
        console.log(zoom);
        this.canvas.setZoom(zoom, false);
        return true;
      }
    }
  }, {
    key: "onZoomChangeFromCanvas",
    value: function onZoomChangeFromCanvas(emitterFigure, zoomData) {
      console.log(emitterFigure);
      console.log(zoomData.value); // if (zoomData && Number.isNaN(zoomData.value))

      this.canvasZoomToSlider(zoomData.value);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      this.slider = this.slider - 50 || 20;
    }
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      this.slider = this.slider + 50 || 300;
    }
  }, {
    key: "onClickRouter",
    value: function onClickRouter() {
      console.log(this.$router);
    }
  }, {
    key: "onClickStore",
    value: function onClickStore() {
      console.log(this.$store);
    }
  }, {
    key: "onClickVersion",
    value: function onClickVersion() {
      var _a, _b;

      var head = (_b = (_a = this.$store) === null || _a === void 0 ? void 0 : _a.app) === null || _b === void 0 ? void 0 : _b.head;
      alert(head.selfVersion);
    }
  }]);

  return default_1;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Watch"])("slider")], layouttestvue_type_script_lang_ts_default_1.prototype, "onChangeSliderValue", null);

layouttestvue_type_script_lang_ts_default_1 = __decorate([nuxt_property_decorator_umd["Component"]], layouttestvue_type_script_lang_ts_default_1);
/* harmony default export */ var layouttestvue_type_script_lang_ts_ = (layouttestvue_type_script_lang_ts_default_1);
// CONCATENATED MODULE: ./src/pages/layouttest.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_layouttestvue_type_script_lang_ts_ = (layouttestvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/pages/layouttest.vue?vue&type=style&index=0&id=5591b8a4&scoped=true&lang=css&
var layouttestvue_type_style_index_0_id_5591b8a4_scoped_true_lang_css_ = __webpack_require__(885);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(80);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(787);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 1 modules
var VMenu = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(788);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.js
var VSlider = __webpack_require__(844);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(125);

// CONCATENATED MODULE: ./src/pages/layouttest.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_layouttestvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "5591b8a4",
  null
  
)

/* harmony default export */ var layouttest = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */












installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCardText: VCard["c" /* VCardText */],VCol: VCol["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VRow: VRow["a" /* default */],VSlider: VSlider["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

}]);