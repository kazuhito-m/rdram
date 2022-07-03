(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104,10],{

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layouttest_vue_vue_type_style_index_0_id_875c7ada_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(984);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layouttest_vue_vue_type_style_index_0_id_875c7ada_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layouttest_vue_vue_type_style_index_0_id_875c7ada_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".diagram-canvas[data-v-875c7ada]{width:1024px;height:768px;background-color:#00f;margin:0;border-radius:5px;filter:drop-shadow(10px 10px 10px rgba(0,0,0,.6));position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/layouttest.vue?vue&type=template&id=875c7ada&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('link',{attrs:{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"}}),_vm._v(" "),_c('v-icon',[_vm._v("$vuetify.icons.company")]),_vm._v(" "),_c('v-icon',[_vm._v("mdi-office-building-outline")]),_vm._v(" "),_c('div',{staticClass:"mdi mdi-office-building-outline",attrs:{"id":"companyIcon"}}),_vm._v(" "),_c('div',{staticStyle:{"font-family":"'Material Design Icons'"},attrs:{"id":"test_name"}}),_vm._v(" "),_c('v-menu',{attrs:{"bottom":"","origin":"center center","transition":"scale-transition"}},[_c('v-list',_vm._l((Object.keys(_vm.LINE_TYPE)),function(lineType){return _c('v-list-item',{key:lineType,on:{"click":function($event){return _vm.changeLintType(lineType)}}},[_c('v-list-item-title',[_vm._v(_vm._s(lineType))])],1)}),1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onCrickSiri}},[_vm._v("尻")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onCrickZoom}},[_vm._v("ズム")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onClickRouter}},[_vm._v("router")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onClickStore}},[_vm._v("store")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onClickVersion}},[_vm._v("version")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onClickModalDialogTest}},[_vm._v("Modal Dialog Test")]),_vm._v(" "),_c('Confirm',{ref:"confirm"}),_vm._v(" "),_c('v-btn',{attrs:{"color":"normal","dark":""},on:{"click":_vm.onClickUserArrengeDialog}},[_vm._v("図/アイコンの名前の重複 Dialog Test")]),_vm._v(" "),_c('UserArrengeWhenNameConfrictDialog',{ref:"userArrangeDialog"}),_vm._v(" "),_c('v-card-text',[_c('v-row',[_c('v-col',[_c('v-slider',{attrs:{"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline","max":"300","min":"20"},on:{"click:append":_vm.zoomIn,"click:prepend":_vm.zoomOut},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('v-text-field',{staticClass:"mt-0 pt-0",staticStyle:{"width":"60px","float":"righat"},attrs:{"type":"number"},model:{value:(_vm.slider),callback:function ($$v) {_vm.slider=$$v},expression:"slider"}})]},proxy:true}]),model:{value:(_vm.slider),callback:function ($$v) {_vm.slider=_vm._n($$v)},expression:"slider"}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"diagram-canvas",attrs:{"id":"canvas01"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/layouttest.vue?vue&type=template&id=875c7ada&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(29);

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

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.anchor.js
var es_string_anchor = __webpack_require__(577);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-integer.js
var es_number_is_integer = __webpack_require__(961);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(870);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widget.js
var widget = __webpack_require__(912);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/draggable.js
var draggable = __webpack_require__(914);

// EXTERNAL MODULE: ./node_modules/jquery-ui/ui/widgets/droppable.js
var droppable = __webpack_require__(916);

// EXTERNAL MODULE: ./node_modules/draw2d/dist/draw2d.js
var draw2d = __webpack_require__(815);
var draw2d_default = /*#__PURE__*/__webpack_require__.n(draw2d);

// EXTERNAL MODULE: ./src/draw2d/custom/TopLeftLocator.ts
var TopLeftLocator = __webpack_require__(821);

// EXTERNAL MODULE: ./src/components/debug/Confirm.vue + 4 modules
var Confirm = __webpack_require__(987);

// EXTERNAL MODULE: ./src/components/diagrams/import/arrange/UserArrengeWhenNameConfrictDialog.vue + 4 modules
var UserArrengeWhenNameConfrictDialog = __webpack_require__(554);

// EXTERNAL MODULE: ./src/domain/diagram/import/userarrange/UserArrangeOfImportDiagram.ts
var UserArrangeOfImportDiagram = __webpack_require__(163);

// EXTERNAL MODULE: ./src/domain/diagram/import/conflictname/ConflictNameBehavior.ts
var ConflictNameBehavior = __webpack_require__(117);

// EXTERNAL MODULE: ./src/domain/diagram/import/userarrange/BehaviorWhenNameConflict.ts
var BehaviorWhenNameConflict = __webpack_require__(54);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts + 1 modules
var ResourceType = __webpack_require__(3);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/Rdra20DiagramType.ts
var Rdra20DiagramType = __webpack_require__(34);

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
  }, {
    key: "onClickModalDialogTest",
    value: function () {
      var _onClickModalDialogTest = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var confirm, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("onClickModalDialogTest までは来ている。");
                confirm = this.$refs.confirm;
                _context.next = 4;
                return confirm.open("モーダルダイアログを表示するテスト", "どうですか？", {
                  color: 'green',
                  width: 400
                });

              case 4:
                result = _context.sent;
                console.log("ダイアログを表示して終わったとこまで。", result);
                alert(result);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onClickModalDialogTest() {
        return _onClickModalDialogTest.apply(this, arguments);
      }

      return onClickModalDialogTest;
    }()
  }, {
    key: "onClickUserArrengeDialog",
    value: function () {
      var _onClickUserArrengeDialog = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var arrange, dialog, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                arrange = new UserArrangeOfImportDiagram["a" /* default */]("元の図の名前(親側)", new ConflictNameBehavior["a" /* default */](BehaviorWhenNameConflict["a" /* BehaviorWhenNameConflict */].別名, "元の図の名前(子側)", "", 1, Rdra20DiagramType["a" /* default */].システムコンテキスト図.id), // ConflictNameBehavior.empty(),
                [new ConflictNameBehavior["a" /* default */](BehaviorWhenNameConflict["a" /* BehaviorWhenNameConflict */].既存, "元のアイコンの名前(1)", "", 1, ResourceType["a" /* default */].システム.id), new ConflictNameBehavior["a" /* default */](BehaviorWhenNameConflict["a" /* BehaviorWhenNameConflict */].置換, "元のアイコンの名前(2)", "", 2, ResourceType["a" /* default */].建物.id), new ConflictNameBehavior["a" /* default */](BehaviorWhenNameConflict["a" /* BehaviorWhenNameConflict */].別名, "元のアイコンの名前(3)", "", 3, ResourceType["a" /* default */].サービス.id)]);
                dialog = this.$refs.userArrangeDialog;
                _context2.next = 4;
                return dialog.show(arrange);

              case 4:
                result = _context2.sent;
                console.log(result);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onClickUserArrengeDialog() {
        return _onClickUserArrengeDialog.apply(this, arguments);
      }

      return onClickUserArrengeDialog;
    }()
  }]);

  return default_1;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Watch"])("slider")], layouttestvue_type_script_lang_ts_default_1.prototype, "onChangeSliderValue", null);

layouttestvue_type_script_lang_ts_default_1 = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    Confirm: Confirm["default"],
    UserArrengeWhenNameConfrictDialog: UserArrengeWhenNameConfrictDialog["default"]
  }
})], layouttestvue_type_script_lang_ts_default_1);
/* harmony default export */ var layouttestvue_type_script_lang_ts_ = (layouttestvue_type_script_lang_ts_default_1);
// CONCATENATED MODULE: ./src/pages/layouttest.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_layouttestvue_type_script_lang_ts_ = (layouttestvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/pages/layouttest.vue?vue&type=style&index=0&id=875c7ada&scoped=true&lang=css&
var layouttestvue_type_style_index_0_id_875c7ada_scoped_true_lang_css_ = __webpack_require__(1001);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(786);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(800);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(328);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(803);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.js
var VSlider = __webpack_require__(920);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(88);

// CONCATENATED MODULE: ./src/pages/layouttest.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_layouttestvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "875c7ada",
  null
  
)

/* harmony default export */ var layouttest = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */












installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCardText: VCard["c" /* VCardText */],VCol: VCol["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VRow: VRow["a" /* default */],VSlider: VSlider["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopLeftLocator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(815);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_7__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * draw2dのToLocatorが「上に付くが、横位置は真ん中に固定」なので、
 * 「上について横位置は左端」というロケータが欲しくて、自力で実装したもの。
 */

var TopLeftLocator = /*#__PURE__*/function (_draw2d$layout$locato) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TopLeftLocator, _draw2d$layout$locato);

  var _super = _createSuper(TopLeftLocator);

  function TopLeftLocator(attr, setter, getter) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, TopLeftLocator);

    _this = _super.call(this, attr, setter, getter);
    _this.NAME = 'draw2d.layout.locator.TopLeftLocator';
    _this.padding = 0;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TopLeftLocator, [{
    key: "relocate",
    value: function relocate(_index, target) {
      var targetBoundingBox = target.getBoundingBox();
      var y = 0;
      if (!(target instanceof draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.Port)) y = -targetBoundingBox.h - 2;
      target.setPosition(0, y);
    }
  }]);

  return TopLeftLocator;
}(draw2d__WEBPACK_IMPORTED_MODULE_7___default.a.layout.locator.TopLocator);



/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(852);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("c1d8e262", content, true, {"sourceMap":false});

/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-slider .v-slider__thumb,.theme--light.v-slider .v-slider__track-background,.theme--light.v-slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--dark.v-slider .v-slider__thumb,.theme--dark.v-slider .v-slider__track-background,.theme--dark.v-slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.v-slider{cursor:default;display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;padding:0;width:100%;display:none}.v-slider__track-container{position:absolute;border-radius:0}.v-slider__thumb-container,.v-slider__track-background,.v-slider__track-fill{position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container{outline:none;top:50%}.v-slider__thumb-container:hover .v-slider__thumb:before{transform:scale(1)}.v-slider__thumb{width:12px;height:12px;left:-6px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb,.v-slider__thumb:before{position:absolute;border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb:before{content:\"\";color:inherit;width:36px;height:36px;background:currentColor;opacity:.3;left:-12px;top:-12px;transform:scale(.1);pointer-events:none}.v-slider__thumb:after{content:\"\";width:42px;height:42px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.v-slider__tick,.v-slider__ticks-container{position:absolute}.v-slider__tick{opacity:0;background-color:rgba(0,0,0,.5);transition:.3s cubic-bezier(.25,.8,.5,1);border-radius:0}.v-slider__tick--filled{background-color:hsla(0,0%,100%,.5)}.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label{transform:none}.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(100%)}.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label{transform:none}.v-slider__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.v-slider__thumb-label-container{top:0}.v-slider__thumb-label,.v-slider__thumb-label-container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--horizontal{min-height:32px;margin-left:8px;margin-right:8px}.v-slider--horizontal .v-slider__track-container{width:100%;height:2px;left:0;top:50%;transform:translateY(-50%)}.v-slider--horizontal .v-slider__track-background,.v-slider--horizontal .v-slider__track-fill{height:100%}.v-slider--horizontal .v-slider__ticks-container{left:0;height:2px;width:100%}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(100%)}.v-slider--horizontal .v-slider__tick .v-slider__tick-label{top:8px}.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(-50%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(50%)}.v-slider--horizontal .v-slider__thumb-label{transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)}.v-slider--horizontal .v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider--vertical{min-height:150px;margin-top:12px;margin-bottom:12px}.v-slider--vertical .v-slider__track-container{height:100%;width:2px;left:50%;top:0;transform:translateX(-50%)}.v-slider--vertical .v-slider__track-background,.v-slider--vertical .v-slider__track-fill{width:100%}.v-slider--vertical .v-slider__thumb-container{left:50%}.v-slider--vertical .v-slider__ticks-container{top:0;width:2px;height:100%;left:50%;transform:translateX(-50%)}.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);left:12px}.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);right:12px}.v-slider--vertical .v-slider__thumb-label>*{transform:rotate(-135deg)}.v-slider__thumb-container--focused .v-slider__thumb:before{transform:scale(1)}.v-slider--active .v-slider__tick{opacity:1}.v-slider__thumb-container--active .v-slider__thumb:before{transform:scale(1.5)!important}.v-slider--disabled{pointer-events:none}.v-slider--disabled .v-slider__thumb{width:8px;height:8px;left:-4px}.v-slider--disabled .v-slider__thumb:before{display:none}.v-slider__ticks-container--always-show .v-slider__tick{opacity:1}.v-input__slider.v-input--is-readonly>.v-input__control{pointer-events:none}.v-application--is-ltr .v-input__slider .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label,.v-application--is-rtl .v-input__slider .v-input__slot .v-label{margin-right:0;margin-left:12px}.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-input__slider--vertical{align-items:center}.v-application--is-ltr .v-input__slider--vertical{flex-direction:column-reverse}.v-application--is-rtl .v-input__slider--vertical{flex-direction:column}.v-input__slider--vertical .v-input__append-outer,.v-input__slider--vertical .v-input__prepend-outer,.v-input__slider--vertical .v-input__slot{margin:0}.v-input__slider--vertical .v-messages{display:none}.v-input--has-state .v-slider__track-background{opacity:.4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(290);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(851);
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(141);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(13);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(207);
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(129);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











 // Components


 // Mixins


 // Directives

 // Helpers



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"])(_VInput__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], _mixins_loadable__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-slider',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"]
  },
  mixins: [_mixins_loadable__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]],
  props: {
    disabled: Boolean,
    inverseLabel: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    thumbColor: String,
    thumbLabel: {
      type: [Boolean, String],
      default: undefined,
      validator: function validator(v) {
        return typeof v === 'boolean' || v === 'always';
      }
    },
    thumbSize: {
      type: [Number, String],
      default: 32
    },
    tickLabels: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    ticks: {
      type: [Boolean, String],
      default: false,
      validator: function validator(v) {
        return typeof v === 'boolean' || v === 'always';
      }
    },
    tickSize: {
      type: [Number, String],
      default: 2
    },
    trackColor: String,
    trackFillColor: String,
    value: [Number, String],
    vertical: Boolean
  },
  data: function data() {
    return {
      app: null,
      oldValue: null,
      thumbPressed: false,
      mouseTimeout: -1,
      isFocused: false,
      isActive: false,
      noClick: false,
      startOffset: 0
    };
  },
  computed: {
    classes: function classes() {
      return _objectSpread(_objectSpread({}, _VInput__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].options.computed.classes.call(this)), {}, {
        'v-input__slider': true,
        'v-input__slider--vertical': this.vertical,
        'v-input__slider--inverse-label': this.inverseLabel
      });
    },
    internalValue: {
      get: function get() {
        return this.lazyValue;
      },
      set: function set(val) {
        val = isNaN(val) ? this.minValue : val; // Round value to ensure the
        // entire slider range can
        // be selected with step

        var value = this.roundValue(Math.min(Math.max(val, this.minValue), this.maxValue));
        if (value === this.lazyValue) return;
        this.lazyValue = value;
        this.$emit('input', value);
      }
    },
    trackTransition: function trackTransition() {
      return this.thumbPressed ? this.showTicks || this.stepNumeric ? '0.1s cubic-bezier(0.25, 0.8, 0.5, 1)' : 'none' : '';
    },
    minValue: function minValue() {
      return parseFloat(this.min);
    },
    maxValue: function maxValue() {
      return parseFloat(this.max);
    },
    stepNumeric: function stepNumeric() {
      return this.step > 0 ? parseFloat(this.step) : 0;
    },
    inputWidth: function inputWidth() {
      var inputWidth = (this.roundValue(this.internalValue) - this.minValue) / (this.maxValue - this.minValue) * 100;
      return isNaN(inputWidth) ? 0 : inputWidth;
    },
    trackFillStyles: function trackFillStyles() {
      var _ref;

      var startDir = this.vertical ? 'bottom' : 'left';
      var endDir = this.vertical ? 'top' : 'right';
      var valueDir = this.vertical ? 'height' : 'width';
      var start = this.$vuetify.rtl ? 'auto' : '0';
      var end = this.$vuetify.rtl ? '0' : 'auto';
      var value = this.isDisabled ? "calc(".concat(this.inputWidth, "% - 10px)") : "".concat(this.inputWidth, "%");
      return _ref = {
        transition: this.trackTransition
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, startDir, start), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, endDir, end), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, valueDir, value), _ref;
    },
    trackStyles: function trackStyles() {
      var _ref2;

      var startDir = this.vertical ? this.$vuetify.rtl ? 'bottom' : 'top' : this.$vuetify.rtl ? 'left' : 'right';
      var endDir = this.vertical ? 'height' : 'width';
      var start = '0px';
      var end = this.isDisabled ? "calc(".concat(100 - this.inputWidth, "% - 10px)") : "calc(".concat(100 - this.inputWidth, "%)");
      return _ref2 = {
        transition: this.trackTransition
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, startDir, start), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, endDir, end), _ref2;
    },
    showTicks: function showTicks() {
      return this.tickLabels.length > 0 || !!(!this.isDisabled && this.stepNumeric && this.ticks);
    },
    numTicks: function numTicks() {
      return Math.ceil((this.maxValue - this.minValue) / this.stepNumeric);
    },
    showThumbLabel: function showThumbLabel() {
      return !this.isDisabled && !!(this.thumbLabel || this.$scopedSlots['thumb-label']);
    },
    computedTrackColor: function computedTrackColor() {
      if (this.isDisabled) return undefined;
      if (this.trackColor) return this.trackColor;
      if (this.isDark) return this.validationState;
      return this.validationState || 'primary lighten-3';
    },
    computedTrackFillColor: function computedTrackFillColor() {
      if (this.isDisabled) return undefined;
      if (this.trackFillColor) return this.trackFillColor;
      return this.validationState || this.computedColor;
    },
    computedThumbColor: function computedThumbColor() {
      if (this.thumbColor) return this.thumbColor;
      return this.validationState || this.computedColor;
    }
  },
  watch: {
    min: function min(val) {
      var parsed = parseFloat(val);
      parsed > this.internalValue && this.$emit('input', parsed);
    },
    max: function max(val) {
      var parsed = parseFloat(val);
      parsed < this.internalValue && this.$emit('input', parsed);
    },
    value: {
      handler: function handler(v) {
        this.internalValue = v;
      }
    }
  },
  // If done in as immediate in
  // value watcher, causes issues
  // with vue-test-utils
  beforeMount: function beforeMount() {
    this.internalValue = this.value;
  },
  mounted: function mounted() {
    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || Object(_util_console__WEBPACK_IMPORTED_MODULE_24__[/* consoleWarn */ "c"])('Missing v-app or a non-body wrapping element with the [data-app] attribute', this);
  },
  methods: {
    genDefaultSlot: function genDefaultSlot() {
      var children = [this.genLabel()];
      var slider = this.genSlider();
      this.inverseLabel ? children.unshift(slider) : children.push(slider);
      children.push(this.genProgress());
      return children;
    },
    genSlider: function genSlider() {
      return this.$createElement('div', {
        class: _objectSpread({
          'v-slider': true,
          'v-slider--horizontal': !this.vertical,
          'v-slider--vertical': this.vertical,
          'v-slider--focused': this.isFocused,
          'v-slider--active': this.isActive,
          'v-slider--disabled': this.isDisabled,
          'v-slider--readonly': this.isReadonly
        }, this.themeClasses),
        directives: [{
          name: 'click-outside',
          value: this.onBlur
        }],
        on: {
          click: this.onSliderClick,
          mousedown: this.onSliderMouseDown,
          touchstart: this.onSliderMouseDown
        }
      }, this.genChildren());
    },
    genChildren: function genChildren() {
      return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isActive, this.isFocused, this.onFocus, this.onBlur)];
    },
    genInput: function genInput() {
      return this.$createElement('input', {
        attrs: _objectSpread({
          value: this.internalValue,
          id: this.computedId,
          disabled: true,
          readonly: true,
          tabindex: -1
        }, this.$attrs)
      });
    },
    genTrackContainer: function genTrackContainer() {
      var children = [this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
        staticClass: 'v-slider__track-background',
        style: this.trackStyles
      })), this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
        staticClass: 'v-slider__track-fill',
        style: this.trackFillStyles
      }))];
      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        ref: 'track'
      }, children);
    },
    genSteps: function genSteps() {
      var _this = this;

      if (!this.step || !this.showTicks) return null;
      var tickSize = parseFloat(this.tickSize);
      var range = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* createRange */ "i"])(this.numTicks + 1);
      var direction = this.vertical ? 'bottom' : this.$vuetify.rtl ? 'right' : 'left';
      var offsetDirection = this.vertical ? this.$vuetify.rtl ? 'left' : 'right' : 'top';
      if (this.vertical) range.reverse();
      var ticks = range.map(function (index) {
        var _style;

        var children = [];

        if (_this.tickLabels[index]) {
          children.push(_this.$createElement('div', {
            staticClass: 'v-slider__tick-label'
          }, _this.tickLabels[index]));
        }

        var width = index * (100 / _this.numTicks);
        var filled = _this.$vuetify.rtl ? 100 - _this.inputWidth < width : width < _this.inputWidth;
        return _this.$createElement('span', {
          key: index,
          staticClass: 'v-slider__tick',
          class: {
            'v-slider__tick--filled': filled
          },
          style: (_style = {
            width: "".concat(tickSize, "px"),
            height: "".concat(tickSize, "px")
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_style, direction, "calc(".concat(width, "% - ").concat(tickSize / 2, "px)")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_style, offsetDirection, "calc(50% - ".concat(tickSize / 2, "px)")), _style)
        }, children);
      });
      return this.$createElement('div', {
        staticClass: 'v-slider__ticks-container',
        class: {
          'v-slider__ticks-container--always-show': this.ticks === 'always' || this.tickLabels.length > 0
        }
      }, ticks);
    },
    genThumbContainer: function genThumbContainer(value, valueWidth, isActive, isFocused, onFocus, onBlur) {
      var ref = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'thumb';
      var children = [this.genThumb()];
      var thumbLabelContent = this.genThumbLabelContent(value);
      this.showThumbLabel && children.push(this.genThumbLabel(thumbLabelContent));
      return this.$createElement('div', this.setTextColor(this.computedThumbColor, {
        ref: ref,
        key: ref,
        staticClass: 'v-slider__thumb-container',
        class: {
          'v-slider__thumb-container--active': isActive,
          'v-slider__thumb-container--focused': isFocused,
          'v-slider__thumb-container--show-label': this.showThumbLabel
        },
        style: this.getThumbContainerStyles(valueWidth),
        attrs: {
          role: 'slider',
          tabindex: this.isDisabled ? -1 : this.$attrs.tabindex ? this.$attrs.tabindex : 0,
          'aria-label': this.$attrs['aria-label'] || this.label,
          'aria-valuemin': this.min,
          'aria-valuemax': this.max,
          'aria-valuenow': this.internalValue,
          'aria-readonly': String(this.isReadonly),
          'aria-orientation': this.vertical ? 'vertical' : 'horizontal'
        },
        on: {
          focus: onFocus,
          blur: onBlur,
          keydown: this.onKeyDown
        }
      }), children);
    },
    genThumbLabelContent: function genThumbLabelContent(value) {
      return this.$scopedSlots['thumb-label'] ? this.$scopedSlots['thumb-label']({
        value: value
      }) : [this.$createElement('span', [String(value)])];
    },
    genThumbLabel: function genThumbLabel(content) {
      var size = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* convertToUnit */ "h"])(this.thumbSize);
      var transform = this.vertical ? "translateY(20%) translateY(".concat(Number(this.thumbSize) / 3 - 1, "px) translateX(55%) rotate(135deg)") : "translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_19__[/* VScaleTransition */ "d"], {
        props: {
          origin: 'bottom center'
        }
      }, [this.$createElement('div', {
        staticClass: 'v-slider__thumb-label-container',
        directives: [{
          name: 'show',
          value: this.isFocused || this.isActive || this.thumbLabel === 'always'
        }]
      }, [this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb-label',
        style: {
          height: size,
          width: size,
          transform: transform
        }
      }), [this.$createElement('div', content)])])]);
    },
    genThumb: function genThumb() {
      return this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb'
      }));
    },
    getThumbContainerStyles: function getThumbContainerStyles(width) {
      var direction = this.vertical ? 'top' : 'left';
      var value = this.$vuetify.rtl ? 100 - width : width;
      value = this.vertical ? 100 - value : value;
      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
        transition: this.trackTransition
      }, direction, "".concat(value, "%"));
    },
    onSliderMouseDown: function onSliderMouseDown(e) {
      var _this2 = this;

      var _e$target;

      e.preventDefault();
      this.oldValue = this.internalValue;
      this.isActive = true;

      if ((_e$target = e.target) != null && _e$target.matches('.v-slider__thumb-container, .v-slider__thumb-container *')) {
        this.thumbPressed = true;
        var domRect = e.target.getBoundingClientRect();
        var touch = 'touches' in e ? e.touches[0] : e;
        this.startOffset = this.vertical ? touch.clientY - (domRect.top + domRect.height / 2) : touch.clientX - (domRect.left + domRect.width / 2);
      } else {
        this.startOffset = 0;
        window.clearTimeout(this.mouseTimeout);
        this.mouseTimeout = window.setTimeout(function () {
          _this2.thumbPressed = true;
        }, 300);
      }

      var mouseUpOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* passiveSupported */ "z"] ? {
        passive: true,
        capture: true
      } : true;
      var mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* passiveSupported */ "z"] ? {
        passive: true
      } : false;
      var isTouchEvent = ('touches' in e);
      this.onMouseMove(e);
      this.app.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', this.onMouseMove, mouseMoveOptions);
      Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* addOnceEventListener */ "a"])(this.app, isTouchEvent ? 'touchend' : 'mouseup', this.onSliderMouseUp, mouseUpOptions);
      this.$emit('start', this.internalValue);
    },
    onSliderMouseUp: function onSliderMouseUp(e) {
      e.stopPropagation();
      window.clearTimeout(this.mouseTimeout);
      this.thumbPressed = false;
      var mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* passiveSupported */ "z"] ? {
        passive: true
      } : false;
      this.app.removeEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
      this.app.removeEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
      this.$emit('mouseup', e);
      this.$emit('end', this.internalValue);

      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* deepEqual */ "k"])(this.oldValue, this.internalValue)) {
        this.$emit('change', this.internalValue);
        this.noClick = true;
      }

      this.isActive = false;
    },
    onMouseMove: function onMouseMove(e) {
      if (e.type === 'mousemove') {
        this.thumbPressed = true;
      }

      this.internalValue = this.parseMouseMove(e);
    },
    onKeyDown: function onKeyDown(e) {
      if (!this.isInteractive) return;
      var value = this.parseKeyDown(e, this.internalValue);
      if (value == null || value < this.minValue || value > this.maxValue) return;
      this.internalValue = value;
      this.$emit('change', value);
    },
    onSliderClick: function onSliderClick(e) {
      if (this.noClick) {
        this.noClick = false;
        return;
      }

      var thumb = this.$refs.thumb;
      thumb.focus();
      this.onMouseMove(e);
      this.$emit('change', this.internalValue);
    },
    onBlur: function onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    onFocus: function onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    parseMouseMove: function parseMouseMove(e) {
      var start = this.vertical ? 'top' : 'left';
      var length = this.vertical ? 'height' : 'width';
      var click = this.vertical ? 'clientY' : 'clientX';

      var _this$$refs$track$get = this.$refs.track.getBoundingClientRect(),
          trackStart = _this$$refs$track$get[start],
          trackLength = _this$$refs$track$get[length];

      var clickOffset = 'touches' in e ? e.touches[0][click] : e[click]; // It is possible for left to be NaN, force to number

      var clickPos = Math.min(Math.max((clickOffset - trackStart - this.startOffset) / trackLength, 0), 1) || 0;
      if (this.vertical) clickPos = 1 - clickPos;
      if (this.$vuetify.rtl) clickPos = 1 - clickPos;
      return parseFloat(this.min) + clickPos * (this.maxValue - this.minValue);
    },
    parseKeyDown: function parseKeyDown(e, value) {
      if (!this.isInteractive) return;
      var pageup = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].pageup,
          pagedown = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].pagedown,
          end = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].end,
          home = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].home,
          left = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].left,
          right = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].right,
          down = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].down,
          up = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].up;
      if (![pageup, pagedown, end, home, left, right, down, up].includes(e.keyCode)) return;
      e.preventDefault();
      var step = this.stepNumeric || 1;
      var steps = (this.maxValue - this.minValue) / step;

      if ([left, right, down, up].includes(e.keyCode)) {
        var increase = this.$vuetify.rtl ? [left, up] : [right, up];
        var direction = increase.includes(e.keyCode) ? 1 : -1;
        var multiplier = e.shiftKey ? 3 : e.ctrlKey ? 2 : 1;
        value = value + direction * step * multiplier;
      } else if (e.keyCode === home) {
        value = this.minValue;
      } else if (e.keyCode === end) {
        value = this.maxValue;
      } else {
        var _direction = e.keyCode === pagedown ? 1 : -1;

        value = value - _direction * step * (steps > 100 ? steps / 10 : 10);
      }

      return value;
    },
    roundValue: function roundValue(value) {
      if (!this.stepNumeric) return value; // Format input value using the same number
      // of decimals places as in the step prop

      var trimmedStep = this.step.toString().trim();
      var decimals = trimmedStep.indexOf('.') > -1 ? trimmedStep.length - trimmedStep.indexOf('.') - 1 : 0;
      var offset = this.minValue % this.stepNumeric;
      var newValue = Math.round((value - offset) / this.stepNumeric) * this.stepNumeric + offset;
      return parseFloat(Math.min(newValue, this.maxValue).toFixed(decimals));
    }
  }
}));

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var isIntegralNumber = __webpack_require__(962);

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isIntegralNumber
});


/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(76);

var floor = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es-x/no-number-isinteger -- safe
module.exports = Number.isInteger || function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1002);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("f80ba1de", content, true, {"sourceMap":false});

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/debug/Confirm.vue?vue&type=template&id=56a7a44a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"max-width":_vm.options.width},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.cancel.apply(null, arguments)}},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-toolbar',{attrs:{"dark":"","color":_vm.options.color,"dense":"","flat":""}},[_c('v-toolbar-title',{staticClass:"white--text"},[_vm._v(_vm._s(_vm.title))])],1),_vm._v(" "),_c('v-card-text',{directives:[{name:"show",rawName:"v-show",value:(!!_vm.message),expression:"!!message"}]},[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),_c('v-card-actions',{staticClass:"pt-0"},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary darken-1"},nativeOn:{"click":function($event){return _vm.agree.apply(null, arguments)}}},[_vm._v(" Yes ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"grey"},nativeOn:{"click":function($event){return _vm.cancel.apply(null, arguments)}}},[_vm._v("Cancel")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/debug/Confirm.vue?vue&type=template&id=56a7a44a&

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/debug/Confirm.vue?vue&type=script&lang=ts&







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



var Confirmvue_type_script_lang_ts_Confirm = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(Confirm, _Vue);

  var _super = _createSuper(Confirm);

  function Confirm() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Confirm);

    _this = _super.apply(this, arguments);
    _this.dialog = false;
    _this.resolve = null;
    _this.reject = null;
    _this.message = null;
    _this.title = null;
    _this.options = {
      color: 'primary',
      width: 290
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Confirm, [{
    key: "open",
    value: function open(title, message, options) {
      var _this2 = this;

      this.dialog = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise(function (resolve, reject) {
        _this2.resolve = resolve;
        _this2.reject = reject;
      });
    }
  }, {
    key: "agree",
    value: function agree() {
      this.resolve(true);
      this.dialog = false;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.resolve(false);
      this.dialog = false;
    }
  }]);

  return Confirm;
}(lib["Vue"]);

Confirmvue_type_script_lang_ts_Confirm = __decorate([lib["Component"]], Confirmvue_type_script_lang_ts_Confirm);
/* harmony default export */ var Confirmvue_type_script_lang_ts_ = (Confirmvue_type_script_lang_ts_Confirm);
// CONCATENATED MODULE: ./src/components/debug/Confirm.vue?vue&type=script&lang=ts&
 /* harmony default export */ var debug_Confirmvue_type_script_lang_ts_ = (Confirmvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(60);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(786);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(785);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(799);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(341);

// CONCATENATED MODULE: ./src/components/debug/Confirm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  debug_Confirmvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var debug_Confirm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VDialog: VDialog["a" /* default */],VSpacer: VSpacer["a" /* default */],VToolbar: VToolbar["a" /* default */],VToolbarTitle: components_VToolbar["a" /* VToolbarTitle */]})


/***/ })

}]);