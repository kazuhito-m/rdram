(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasContentResource; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(147);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * 「内容」付きリソース。
 */

var HasContentResource = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(HasContentResource, _Resource);

  var _super = _createSuper(HasContentResource);

  function HasContentResource(resourceId, resouceTypeId, name, description, content) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, HasContentResource);

    _this = _super.call(this, resourceId, resouceTypeId, name, description);
    _this.content = content;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(HasContentResource, [{
    key: "withContent",
    value: function withContent(content) {
      var clone = this.clone();
      clone.content = content;
      return clone;
    }
  }, {
    key: "renewDefaultName",
    value: function renewDefaultName(seq) {
      var type = this.type;
      var newName = type.name + this.zeroPadding(seq, 2);
      return this.withName(newName);
    }
  }, {
    key: "zeroPadding",
    value: function zeroPadding(value, point) {
      return ('0'.repeat(point) + value).slice(-1 * point);
    }
  }]);

  return HasContentResource;
}(_Resource__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


HasContentResource.CONTENT_MAX_LENGTH = 512;

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Resources_Resources; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(18);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(76);

// EXTERNAL MODULE: ./src/domain/resource/ResourceFactory.ts
var ResourceFactory = __webpack_require__(195);

// EXTERNAL MODULE: ./src/domain/relation/RouterType.ts
var RouterType = __webpack_require__(160);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(2);

// CONCATENATED MODULE: ./src/domain/relation/RelationWithResources.ts





var RelationWithResources_RelationWithResources = /*#__PURE__*/function () {
  function RelationWithResources(id, fromResource, toResource, routerType, midpoints) {
    Object(classCallCheck["a" /* default */])(this, RelationWithResources);

    this.id = id;
    this.fromResource = fromResource;
    this.toResource = toResource;
    this.routerType = routerType;
    this.midpoints = midpoints;
  }

  Object(createClass["a" /* default */])(RelationWithResources, [{
    key: "isFlowRelation",
    value: function isFlowRelation() {
      return this.betweenBothFromTo(ResourceType["a" /* default */].アクティビティ) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].アクティビティ, ResourceType["a" /* default */].始点終点) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].状態, ResourceType["a" /* default */].ユースケース) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].状態, ResourceType["a" /* default */].始点終点) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].状態グループ, ResourceType["a" /* default */].ユースケース) || this.betweenRevercibleFromTo(ResourceType["a" /* default */].状態グループ, ResourceType["a" /* default */].始点終点);
    }
    /**
     * from/to両方共「同一タイプのリソース」か。
     */

  }, {
    key: "betweenBothFromTo",
    value: function betweenBothFromTo(resourceType) {
      return resourceType.equals(this.fromType) && resourceType.equals(this.toType);
    }
    /**
     * from/to問わず「2つのタイプのリソース」か。
     */

  }, {
    key: "betweenRevercibleFromTo",
    value: function betweenRevercibleFromTo(typeOne, typeTwo) {
      return typeOne.equals(this.fromType) && typeTwo.equals(this.toType) || typeTwo.equals(this.fromType) && typeOne.equals(this.toType);
    }
  }, {
    key: "existsType",
    value: function existsType(resourceType) {
      return resourceType.equals(this.fromType) || resourceType.equals(this.toType);
    }
  }, {
    key: "fromType",
    get: function get() {
      return this.fromResource.type;
    }
  }, {
    key: "toType",
    get: function get() {
      return this.toResource.type;
    }
  }], [{
    key: "of",
    value: function of(relation, fromResource, toResource) {
      return new RelationWithResources(relation.id, fromResource, toResource, RouterType["a" /* default */].ofId(relation.routerTypeId), relation.midpoints);
    }
  }]);

  return RelationWithResources;
}();


// CONCATENATED MODULE: ./src/domain/resource/Resources.ts

















var Resources_Resources = /*#__PURE__*/function () {
  function Resources(values) {
    Object(classCallCheck["a" /* default */])(this, Resources);

    this.values = values;
  }

  Object(createClass["a" /* default */])(Resources, [{
    key: "createResourceOf",
    value: function createResourceOf(name, resourceType, resourceId) {
      var factory = new ResourceFactory["a" /* default */]();
      return factory.create(name, resourceType, resourceId, this);
    }
  }, {
    key: "prototypeResourceOf",
    value: function prototypeResourceOf(resourceType) {
      return this.createResourceOf("", resourceType, Resource["a" /* default */].YET_NUMBERING_ID);
    }
  }, {
    key: "existsIdOf",
    value: function existsIdOf(resourceId) {
      return this.values.some(function (resource) {
        return resource.resourceId === resourceId;
      });
    }
  }, {
    key: "existsSomeName",
    value: function existsSomeName(name, type) {
      return this.values.filter(function (resource) {
        return resource.name === name;
      }).some(function (resource) {
        return resource.type.equals(type);
      });
    }
  }, {
    key: "of",
    value: function of(resourceId) {
      return this.values.find(function (resource) {
        return resource.resourceId === resourceId;
      });
    }
  }, {
    key: "findOf",
    value: function findOf(resourceIds) {
      var founds = this.values.filter(function (resource) {
        return resourceIds.includes(resource.resourceId);
      });
      return new Resources(founds);
    }
  }, {
    key: "typesOf",
    value: function typesOf() {
      for (var _len = arguments.length, resourceTypes = new Array(_len), _key = 0; _key < _len; _key++) {
        resourceTypes[_key] = arguments[_key];
      }

      var newValues = this.values.filter(function (r) {
        return resourceTypes.includes(r.type);
      });
      return new Resources(newValues);
    }
  }, {
    key: "typeOf",
    value: function typeOf(resourceType) {
      return this.typesOf(resourceType);
    }
  }, {
    key: "add",
    value: function add(resource) {
      var newValues = Array.from(this.values);
      newValues.push(resource);
      return new Resources(newValues);
    }
  }, {
    key: "remove",
    value: function remove(resource) {
      var newValues = this.values.filter(function (r) {
        return r.resourceId !== resource.resourceId;
      });
      return new Resources(newValues);
    }
  }, {
    key: "meage",
    value: function meage(resource) {
      var newValues = this.values.map(function (p) {
        return p.resourceId === resource.resourceId ? resource : p;
      });
      if (newValues.every(function (p) {
        return p !== resource;
      })) newValues.push(resource);
      return new Resources(newValues);
    }
  }, {
    key: "relationWithResourcesOf",
    value: function relationWithResourcesOf(relation) {
      var fromResource = this.of(relation.fromResourceId);
      var toResource = this.of(relation.toResourceId);
      if (!fromResource || !toResource) return null;
      return RelationWithResources_RelationWithResources.of(relation, fromResource, toResource);
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.values.forEach(func);
    }
  }, {
    key: "map",
    value: function map(func) {
      return this.values.map(func);
    }
  }, {
    key: "filter",
    value: function filter(func) {
      return this.values.filter(func);
    }
  }, {
    key: "length",
    get: function get() {
      return this.values.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.length === 0;
    }
  }, {
    key: "last",
    value: function last() {
      return this.values[this.length - 1];
    }
  }, {
    key: "first",
    value: function first() {
      return this.values[0];
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Resources([]);
    }
  }, {
    key: "empty",
    value: function empty() {
      return new Resources([]);
    }
  }]);

  return Resources;
}();



/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartOrEndPoint; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(147);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「始点」または「終点」。
 */

var StartOrEndPoint = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(StartOrEndPoint, _Resource);

  var _super = _createSuper(StartOrEndPoint);

  function StartOrEndPoint(resourceId, name, description, deletable) {
    var _this;

    var startPoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, StartOrEndPoint);

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].始点終点.id, name, description);
    _this.deletable = deletable;
    _this.startPoint = startPoint;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(StartOrEndPoint, [{
    key: "renewDefaultName",
    value: function renewDefaultName(seq) {
      var newName = '終点' + this.zeroPadding(seq, 2);
      return this.withName(newName);
    }
  }, {
    key: "zeroPadding",
    value: function zeroPadding(value, point) {
      return ('0'.repeat(point) + value).slice(-1 * point);
    }
  }]);

  return StartOrEndPoint;
}(_Resource__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);



/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=template&id=21b96a13&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"dark":""}},[(_vm.error.statusCode === 404)?_c('h1',[_vm._v("\n    "+_vm._s(_vm.pageNotFound)+"\n  ")]):_c('h1',[_vm._v("\n    "+_vm._s(_vm.otherError)+"\n  ")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("\n    Home page\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=template&id=21b96a13&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=script&lang=ts&







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



var errorvue_type_script_lang_ts_default_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(default_1, _Vue);

  var _super = _createSuper(default_1);

  function default_1() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, default_1);

    _this = _super.apply(this, arguments);
    _this.layout = 'empty';
    _this.pageNotFound = '404 Not Found';
    _this.otherError = 'An error occurred';
    _this.error = {
      type: Object,
      default: null,
      statusCode: 0
    };
    return _this;
  }

  Object(createClass["a" /* default */])(default_1, [{
    key: "head",
    value: function head() {
      var title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
      return {
        title: title
      };
    }
  }]);

  return default_1;
}(nuxt_property_decorator_umd["Vue"]);

errorvue_type_script_lang_ts_default_1 = __decorate([nuxt_property_decorator_umd["Component"]], errorvue_type_script_lang_ts_default_1);
/* harmony default export */ var errorvue_type_script_lang_ts_ = (errorvue_type_script_lang_ts_default_1);
// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_errorvue_type_script_lang_ts_ = (errorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/layouts/error.vue?vue&type=style&index=0&id=21b96a13&scoped=true&lang=css&
var errorvue_type_style_index_0_id_21b96a13_scoped_true_lang_css_ = __webpack_require__(583);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(726);

// CONCATENATED MODULE: ./src/layouts/error.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "21b96a13",
  null
  
)

/* harmony default export */ var error = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VApp: VApp["a" /* default */]})


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableTypeCondition; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 表形式の条件。
 */

var TableTypeCondition = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TableTypeCondition, _Resource);

  var _super = _createSuper(TableTypeCondition);

  function TableTypeCondition(resourceId, name, description, leftVariationId, topVariationId, values) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, TableTypeCondition);

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].表形式の条件.id, name, description);
    _this.leftVariationId = leftVariationId;
    _this.topVariationId = topVariationId;
    _this.values = values;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(TableTypeCondition, [{
    key: "withValues",
    value: function withValues(newValues) {
      var resource = this.clone();
      resource.values = newValues;
      return resource;
    }
  }, {
    key: "valuesOf",
    value: function valuesOf() {
      return this.values.concat();
    }
  }]);

  return TableTypeCondition;
}(_Resource__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


TableTypeCondition.NOTHING_VARIATION_ID = 0;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);






var RouterType = /*#__PURE__*/function () {
  // static SKETCH = new RouterType(5, 'スケッチ');
  function RouterType(id, name) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RouterType);

    this.id = id;
    this.name = name;
    RouterType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RouterType, [{
    key: "equals",
    value: function equals(other) {
      return this.id === other.id;
    }
  }], [{
    key: "values",
    value: function values() {
      return RouterType.vs;
    }
  }, {
    key: "ofId",
    value: function ofId(id) {
      return this.vs.find(function (item) {
        return item.id === id;
      });
    }
  }]);

  return RouterType;
}();


RouterType.vs = [];
RouterType.DIRECT = new RouterType(1, '直線');
RouterType.MANHATTAN = new RouterType(2, 'マンハッタン');
RouterType.CIRCUIT = new RouterType(3, 'サーキット');
RouterType.SPLINE = new RouterType(4, 'スプライン');

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Status; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var Status = /*#__PURE__*/function () {
  function Status(currentProductId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Status);

    this.currentProductId = currentProductId;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Status, null, [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Status("");
    }
  }]);

  return Status;
}();



/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(102);
/* harmony import */ var _Purpose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(203);
/* harmony import */ var _Requirement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(237);
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(238);
/* harmony import */ var _Scenario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(239);
/* harmony import */ var _StartOrEndPoint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(114);
/* harmony import */ var _Variation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(200);
/* harmony import */ var _Condition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(199);
/* harmony import */ var _TableTypeCondition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(137);















var ResourceFactory = /*#__PURE__*/function () {
  function ResourceFactory() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ResourceFactory);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ResourceFactory, [{
    key: "create",
    value: function create(name, resourceType, newResourceId, nowResouces) {
      var resource = this.createEmptyResoruce(name, resourceType, newResourceId);
      if (resource instanceof _HasContentResource__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]) return this.setDefaultName(resource, nowResouces);
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].始点終点.equals(resourceType)) return this.setDefaultNameForEndPoint(resource, nowResouces);
      return resource;
    }
  }, {
    key: "createEmptyResoruce",
    value: function createEmptyResoruce(name, resourceType, newResourceId) {
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].目的.equals(resourceType)) return new _Purpose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"](newResourceId, name, "", "");
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].要求.equals(resourceType)) return new _Request__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"](newResourceId, name, "", "");
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].要件.equals(resourceType)) return new _Requirement__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"](newResourceId, name, "", "");
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].シナリオ.equals(resourceType)) return new _Scenario__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"](newResourceId, name, "", "");
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].始点終点.equals(resourceType)) return new _StartOrEndPoint__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"](newResourceId, name, "", true);
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].バリエーション.equals(resourceType)) return new _Variation__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](newResourceId, name, "", ["", ""]);
      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].条件.equals(resourceType)) return new _Condition__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](newResourceId, "", "", "");

      if (_ResourceType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].表形式の条件.equals(resourceType)) {
        return new _TableTypeCondition__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"](newResourceId, "", "", _TableTypeCondition__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].NOTHING_VARIATION_ID, _TableTypeCondition__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].NOTHING_VARIATION_ID, [["対象の項目", "上バリエ1", "上バリエ2"], ["左バリエ1", "", ""], ["左バリエ2", "", ""]]);
      }

      return new _Resource__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](newResourceId, resourceType.id, name, "");
    }
  }, {
    key: "setDefaultName",
    value: function setDefaultName(resource, nowResouces) {
      var r = resource;
      if (r.name.length > 0) return r;
      var i = 1;

      do {
        r = r.renewDefaultName(i++);
      } while (nowResouces.existsSomeName(r.name, r.type));

      return r;
    }
  }, {
    key: "setDefaultNameForEndPoint",
    value: function setDefaultNameForEndPoint(resource, nowResouces) {
      var r = resource;
      if (r.name.length > 0) return r;
      var i = 2;

      do {
        r = r.renewDefaultName(i++);
      } while (nowResouces.existsSomeName(r.name, r.type));

      return r;
    }
  }]);

  return ResourceFactory;
}();



/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Condition; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 条件(名前が付けられた条件)。
 */

var Condition = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Condition, _Resource);

  var _super = _createSuper(Condition);

  function Condition(resourceId, name, description, value) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Condition);

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].条件.id, name, description);
    _this.value = value;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Condition, [{
    key: "withValue",
    value: function withValue(newValue) {
      var resource = this.clone();
      resource.value = newValue.trim();
      return resource;
    }
  }]);

  return Condition;
}(_Resource__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);


Condition.CONDITION_VALUE_MAX_LENGTH = 128;

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);






var ResourceType = /*#__PURE__*/function () {
  function ResourceType(id, name, iconKey) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ResourceType);

    this.id = id;
    this.name = name;
    this.iconKey = iconKey;
    ResourceType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ResourceType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return other.id === this.id;
    }
  }], [{
    key: "values",
    value: function values() {
      return ResourceType.vs;
    }
  }, {
    key: "ofId",
    value: function ofId(id) {
      return this.vs.find(function (item) {
        return item.id === id;
      });
    }
  }]);

  return ResourceType;
}();


ResourceType.vs = [];
ResourceType.システム = new ResourceType(1, 'システム', 'mdi-desktop-mac-dashboard');
ResourceType.自社システム = new ResourceType(2, '自社システム', 'mdi-desktop-tower-monitor');
ResourceType.外部システム = new ResourceType(3, '外部システム', 'mdi-server');
ResourceType.目的 = new ResourceType(4, '目的', 'mdi-bullseye-arrow');
ResourceType.アクター = new ResourceType(5, 'アクター', 'mdi-account');
ResourceType.要求 = new ResourceType(6, '要求', 'mdi-hand-heart-outline');
ResourceType.要件 = new ResourceType(7, '要件', 'mdi-handshake-outline');
ResourceType.業務 = new ResourceType(8, '業務', 'mdi-cog-outline');
ResourceType.商品 = new ResourceType(9, '商品', 'mdi-package-variant-closed');
ResourceType.住宅 = new ResourceType(10, '住宅', 'mdi-home-variant');
ResourceType.契約 = new ResourceType(11, '契約', 'mdi-file-key-outline');
ResourceType.サービス = new ResourceType(12, 'サービス', 'mdi-room-service-outline');
ResourceType.組織 = new ResourceType(13, '組織', 'mdi-sitemap');
ResourceType.会社 = new ResourceType(14, '会社', 'mdi-office-building-outline');
ResourceType.在庫 = new ResourceType(15, '在庫', 'mdi-stack-exchange');
ResourceType.配送 = new ResourceType(16, '配送', 'mdi-truck-outline');
ResourceType.条件 = new ResourceType(17, '条件', 'mdi-call-split');
ResourceType.利用シーン = new ResourceType(25, '利用シーン', 'mdi-video-account');
ResourceType.シナリオ = new ResourceType(32, 'シナリオ', 'mdi-script-text-outline');
ResourceType.ユースケース = new ResourceType(23, 'ユースケース', 'mdi-alpha-u-circle-outline');
ResourceType.情報 = new ResourceType(18, '情報', 'mdi-text-box-outline');
ResourceType.情報グループ = new ResourceType(19, '情報グループ', 'mdi-text-box-multiple-outline');
ResourceType.画面 = new ResourceType(20, '画面', 'mdi-application');
ResourceType.アクティビティ = new ResourceType(21, 'アクティビティ', 'mdi-alpha-a-box-outline');
ResourceType.イベント = new ResourceType(22, 'イベント', 'mdi-lightning-bolt');
ResourceType.ビジネスユースケース = new ResourceType(24, 'ビジネスユースケース', 'mdi-alpha-b-circle-outline');
ResourceType.タイマー = new ResourceType(26, 'タイマー', 'mdi-alarm');
ResourceType.状態 = new ResourceType(27, '状態', 'mdi-circle-slice-4');
ResourceType.状態グループ = new ResourceType(28, '状態グループ', 'mdi-circle-slice-4');
ResourceType.バリエーション = new ResourceType(29, 'バリエーション', 'mdi-lock-pattern');
ResourceType.表形式の条件 = new ResourceType(30, '表形式の条件', 'mdi-table');
ResourceType.項目説明 = new ResourceType(31, '項目説明', '');
ResourceType.スライド = new ResourceType(32, 'スライド', 'mdi-presentation');
ResourceType.説明 = new ResourceType(101, '説明', 'mdi-comment-outline');
ResourceType.始点終点 = new ResourceType(102, '始点・終点', 'mdi-source-commit-start');
ResourceType.遷移 = new ResourceType(801, '遷移', ''); // 資料にあったが…これはなんだろう？

ResourceType.Webサービス = new ResourceType(901, 'Webサービス', 'mdi-cloud-download-outline');
ResourceType.通帳 = new ResourceType(902, '通帳', 'mdi-badge-account-horizontal-outline');
ResourceType.データベース = new ResourceType(903, 'データベース', 'mdi-database');
ResourceType.機器 = new ResourceType(904, '機器', 'mdi-chip');
ResourceType.決済 = new ResourceType(905, '決済', 'mdi-cash-register');
ResourceType.背景 = new ResourceType(906, '背景', 'mdi-wallpaper');
ResourceType.お金 = new ResourceType(907, 'お金', 'mdi-cash-100');

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Variation; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * バリエーション。
 */

var Variation = /*#__PURE__*/function (_Resource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Variation, _Resource);

  var _super = _createSuper(Variation);

  function Variation(resourceId, name, description, values) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Variation);

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].バリエーション.id, name, description);
    _this.values = values;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Variation, [{
    key: "withValues",
    value: function withValues(newValues) {
      var resource = this.clone();
      resource.values = newValues;
      return resource;
    }
  }, {
    key: "valuesOf",
    value: function valuesOf() {
      return this.values.concat();
    }
  }]);

  return Variation;
}(_Resource__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


Variation.CONDITION_VALUE_MAX_LENGTH = 128;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Purpose; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(102);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「目的」リソース。
 */

var Purpose = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Purpose, _HasContentResource);

  var _super = _createSuper(Purpose);

  function Purpose(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Purpose);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].目的.id, name, description, content);
  }

  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Purpose);
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithTimestampFileName; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_6__);








var WithTimestampFileName = /*#__PURE__*/function () {
  function WithTimestampFileName(name, extension) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, WithTimestampFileName);

    this.name = name;
    this.extension = extension;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(WithTimestampFileName, [{
    key: "toString",
    value: function toString() {
      var namePart = this.name.replace(" ", "-").replace("　", "＿");
      var ymdhms = moment_moment__WEBPACK_IMPORTED_MODULE_6___default()().format("YYYYMMDDHHmmss");
      return "".concat(namePart, "-").concat(ymdhms, ".").concat(this.extension);
    }
  }]);

  return WithTimestampFileName;
}();



/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStrage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _domain_strage_Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _domain_product_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(235);





var LocalStrage = /*#__PURE__*/function () {
  function LocalStrage(updateAt, status, products) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LocalStrage);

    this.updateAt = updateAt;
    this.status = status;
    this.products = products;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LocalStrage, [{
    key: "renewTimeStamp",
    value: function renewTimeStamp() {
      return new LocalStrage(new Date(), this.status, this.products);
    }
  }, {
    key: "currentProduct",
    value: function currentProduct() {
      return this.products.of(this.status.currentProductId);
    }
  }, {
    key: "isCurrentProduct",
    value: function isCurrentProduct(product) {
      return this.status.currentProductId === product.id;
    }
  }, {
    key: "merge",
    value: function merge(product) {
      var newProducts = this.products.merge(product);
      return this.with(newProducts);
    }
  }, {
    key: "mergeByProductName",
    value: function mergeByProductName(product) {
      var newProducts = this.products.mergeByProductName(product);
      return this.with(newProducts);
    }
  }, {
    key: "removeOf",
    value: function removeOf(product) {
      var newProducts = this.products.removeOf(product);
      return this.with(newProducts);
    }
  }, {
    key: "changeCurrent",
    value: function changeCurrent(product) {
      return new LocalStrage(this.updateAt, new _domain_strage_Status__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](product.id), this.products.merge(product));
    }
  }, {
    key: "with",
    value: function _with(mearged) {
      return new LocalStrage(this.updateAt, this.status, mearged);
    }
  }, {
    key: "existsProductNameOf",
    value: function existsProductNameOf(name) {
      return this.products.existsSomeName(name);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new LocalStrage(new Date(), _domain_strage_Status__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].prototypeOf(), _domain_product_Products__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].prototypeOf());
    }
  }]);

  return LocalStrage;
}();



/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Products; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(162);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__);















var Products = /*#__PURE__*/function () {
  function Products(values) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Products);

    this.values = values;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Products, [{
    key: "existsSomeName",
    value: function existsSomeName(name) {
      return this.values.map(function (product) {
        return product.name;
      }).includes(name);
    }
  }, {
    key: "of",
    value: function of(productId) {
      return this.values.find(function (product) {
        return product.id === productId;
      });
    }
  }, {
    key: "merge",
    value: function merge(product) {
      var newValues = Array.from(this.values);
      var index = newValues.findIndex(function (p) {
        return p.id === product.id;
      });
      if (index < 0) newValues.push(product);else newValues[index] = product;
      return new Products(newValues);
    }
  }, {
    key: "mergeByProductName",
    value: function mergeByProductName(product) {
      var sameNameProduct = this.values.find(function (p) {
        return p.name === product.name;
      });
      var mergeProduct = product;
      if (sameNameProduct) mergeProduct = product.replaceId(sameNameProduct.id);else if (this.of(product.id)) mergeProduct = product.renewId();
      return this.merge(mergeProduct);
    }
  }, {
    key: "removeOf",
    value: function removeOf(product) {
      var newValues = this.values.filter(function (p) {
        return p.id !== product.id;
      });
      return new Products(newValues);
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.values.forEach(func);
    }
  }, {
    key: "list",
    value: function list() {
      var result = Array.from(this.values);
      return result;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.values.length <= 0;
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Products([]);
    }
  }]);

  return Products;
}();



/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettings; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var UserSettings = /*#__PURE__*/function () {
  function UserSettings(autoSave, darkMode) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, UserSettings);

    this.autoSave = autoSave;
    this.darkMode = darkMode;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(UserSettings, null, [{
    key: "create",
    value: function create() {
      return new UserSettings(true, true);
    }
  }]);

  return UserSettings;
}();



/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Requirement; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(102);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「要件」リソース。
 */

var Requirement = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Requirement, _HasContentResource);

  var _super = _createSuper(Requirement);

  function Requirement(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Requirement);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].要件.id, name, description, content);
  }

  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Requirement);
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(102);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「要求」リソース。
 */

var Request = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Request, _HasContentResource);

  var _super = _createSuper(Request);

  function Request(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Request);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].要求.id, name, description, content);
  }

  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Request);
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scenario; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(102);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「シナリオ」リソース。
 */

var Scenario = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Scenario, _HasContentResource);

  var _super = _createSuper(Scenario);

  function Scenario(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Scenario);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].シナリオ.id, name, description, content);
  }

  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Scenario);
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relations; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(163);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(164);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(165);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(166);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(168);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(170);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(171);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(172);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(173);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(174);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(175);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(176);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(370);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_32__);









function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



























var Relations = /*#__PURE__*/function () {
  function Relations(values) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, Relations);

    this.values = values;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Relations, [{
    key: "length",
    get: function get() {
      return this.values.length;
    }
  }, {
    key: "exists",
    value: function exists(relation) {
      return this.values.some(function (i) {
        return i.equalRoute(relation);
      });
    }
  }, {
    key: "existsFromResource",
    value: function existsFromResource(resource) {
      return this.values.some(function (i) {
        return i.fromResourceId === resource.resourceId;
      });
    }
    /**
     * ルートが逆も含め(f->t,t->f のどちらか)在る場合。
     */

  }, {
    key: "existsOrReversivle",
    value: function existsOrReversivle(relation) {
      return this.values.some(function (i) {
        return i.equalRouteReversivle(relation);
      });
    }
    /**
     * ルートが両方(f->t,t->f の2つとも)在る場合。
     */

  }, {
    key: "existsBothReversivle",
    value: function existsBothReversivle(relation) {
      var rs = this.values;
      var reverse = relation.reverse();
      return rs.some(function (i) {
        return i.equalRoute(relation);
      }) && rs.some(function (i) {
        return i.equalRoute(reverse);
      });
    }
  }, {
    key: "isUsedOf",
    value: function isUsedOf(resource) {
      return this.values.some(function (i) {
        return i.isRelatedTo(resource.resourceId);
      });
    }
  }, {
    key: "of",
    value: function of(relationId) {
      return this.values.find(function (Relation) {
        return Relation.id === relationId;
      });
    }
  }, {
    key: "add",
    value: function add(relation) {
      var newValues = Array.from(this.values);
      newValues.push(relation);
      return new Relations(newValues);
    }
  }, {
    key: "remove",
    value: function remove(relation) {
      var newValues = this.values.filter(function (value) {
        return value.id !== relation.id;
      });
      return new Relations(newValues);
    }
  }, {
    key: "meage",
    value: function meage(relation) {
      if (this.values.some(function (d) {
        return d.id === relation.id;
      })) {
        var _newValues = this.values.map(function (d) {
          return d.id === relation.id ? relation : d;
        });

        return new Relations(_newValues);
      }

      var newValues = Array.from(this.values);
      newValues.push(relation);
      return new Relations(newValues);
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.values.forEach(func);
    }
  }, {
    key: "map",
    value: function map(func) {
      return this.values.map(func);
    }
  }, {
    key: "filter",
    value: function filter(func) {
      return this.values.filter(func);
    }
  }, {
    key: "last",
    value: function last() {
      return this.values[this.values.length - 1];
    }
  }, {
    key: "uniqueIgnoreDirection",
    value: function uniqueIgnoreDirection() {
      var dic = new Map();

      var _iterator = _createForOfIteratorHelper(this.values),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var relation = _step.value;
          var key = this.makeKeyIgnoreDirectionOf(relation);
          dic.set(key, relation);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var relations = Array.from(dic.values());
      return new Relations(relations);
    }
  }, {
    key: "makeKeyIgnoreDirectionOf",
    value: function makeKeyIgnoreDirectionOf(relation) {
      return [relation.fromResourceId, relation.toResourceId].sort().join(":");
    }
  }, {
    key: "onlyFromRelatedOf",
    value: function onlyFromRelatedOf(resource) {
      var resourceId = resource.resourceId;
      return this.values.filter(function (relation) {
        return relation.fromResourceId === resourceId;
      });
    }
  }, {
    key: "onlyRelatedOf",
    value: function onlyRelatedOf(resource) {
      var resourceId = resource.resourceId;
      return this.values.filter(function (relation) {
        return relation.isRelatedTo(resourceId);
      });
    }
  }, {
    key: "concat",
    value: function concat(relations) {
      return new Relations(this.values.concat(relations.values));
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Relations([]);
    }
  }, {
    key: "empty",
    value: function empty() {
      return new Relations([]);
    }
  }]);

  return Relations;
}();



/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessContextDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var BusinessContextDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessContextDiagram, _Diagram);

  var _super = _createSuper(BusinessContextDiagram);

  function BusinessContextDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, BusinessContextDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(BusinessContextDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].業務, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].商品, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].住宅, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].契約, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].サービス, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].組織, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].会社, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].自社システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].情報];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].組織.equals(resType) || _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].会社.equals(resType)) {
        width = 80;
        height = 35;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].業務.equals(resType)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new BusinessContextDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new BusinessContextDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new BusinessContextDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new BusinessContextDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new BusinessContextDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new BusinessContextDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new BusinessContextDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ビジネスコンテキスト図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].なし.id);
    }
  }]);

  return BusinessContextDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessUseCaseDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var BusinessUseCaseDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessUseCaseDiagram, _Diagram);

  var _super = _createSuper(BusinessUseCaseDiagram);

  function BusinessUseCaseDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, BusinessUseCaseDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(BusinessUseCaseDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ビジネスユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].商品, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].住宅, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].契約, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].サービス, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].組織, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].会社, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].自社システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].情報, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].条件];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].組織.equals(resType) || _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].会社.equals(resType)) {
        width = 80;
        height = 35;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ビジネスユースケース.equals(resType)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new BusinessUseCaseDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new BusinessUseCaseDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new BusinessUseCaseDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new BusinessUseCaseDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new BusinessUseCaseDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new BusinessUseCaseDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new BusinessUseCaseDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ビジネスユースケース図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].なし.id);
    }
  }]);

  return BusinessUseCaseDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationModelDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var InformationModelDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(InformationModelDiagram, _Diagram);

  var _super = _createSuper(InformationModelDiagram);

  function InformationModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, InformationModelDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(InformationModelDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].情報, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].情報グループ];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].情報グループ.equals(resType)) {
        width = 80;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new InformationModelDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new InformationModelDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new InformationModelDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new InformationModelDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new InformationModelDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new InformationModelDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new InformationModelDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].情報モデル図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].なし.id);
    }
  }]);

  return InformationModelDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateModelDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var StateModelDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(StateModelDiagram, _Diagram);

  var _super = _createSuper(StateModelDiagram);

  function StateModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, StateModelDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(StateModelDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].状態, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].状態グループ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].始点終点];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ユースケース.equals(resType)) {
        width = 120;
        height = 40;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].状態.equals(resType)) {
        width = 160;
        height = 40;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].状態グループ.equals(resType)) {
        width = 200;
        height = 120;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new StateModelDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new StateModelDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new StateModelDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new StateModelDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new StateModelDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new StateModelDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new StateModelDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].状態モデル図.id, name.trim(), [], [], 768, 1024, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].グリッド.id);
    }
  }]);

  return StateModelDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemContextDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var SystemContextDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SystemContextDiagram, _Diagram);

  var _super = _createSuper(SystemContextDiagram);

  function SystemContextDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, SystemContextDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(SystemContextDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].目的, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].自社システム];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].システム.equals(resType)) {
        width = 350;
        height = 75;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new SystemContextDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new SystemContextDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new SystemContextDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new SystemContextDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new SystemContextDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new SystemContextDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name, resources) {
      var diagram = new SystemContextDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].システムコンテキスト図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].なし.id); // 特殊処理、Resource種が「システム」で、かつ「ひとつだけ」なら予め足してしまう。

      var resoucesOfSystem = resources.typeOf(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].システム);
      if (resoucesOfSystem.length !== 1) return diagram;
      var system = resoucesOfSystem.last();
      var placement = diagram.createPlacementAtCenter(system);
      if (!placement) return diagram;
      var modified = diagram.addPlacement(placement);
      return modified;
    }
  }]);

  return SystemContextDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestModelDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var RequestModelDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RequestModelDiagram, _Diagram);

  var _super = _createSuper(RequestModelDiagram);

  function RequestModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, RequestModelDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(RequestModelDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].要求, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].要件];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].要求.equals(resType) || _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].要件.equals(resType)) {
        width = 200;
        height = 37;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new RequestModelDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new RequestModelDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new RequestModelDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new RequestModelDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new RequestModelDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new RequestModelDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new RequestModelDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].要求モデル図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].なし.id);
    }
  }]);

  return RequestModelDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsageSceneDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var UsageSceneDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UsageSceneDiagram, _Diagram);

  var _super = _createSuper(UsageSceneDiagram);

  function UsageSceneDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, UsageSceneDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(UsageSceneDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].利用シーン, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].シナリオ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクター];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].シナリオ.equals(resType)) {
        width = 350;
        height = 75;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ユースケース.equals(resType)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new UsageSceneDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new UsageSceneDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new UsageSceneDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new UsageSceneDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new UsageSceneDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new UsageSceneDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new UsageSceneDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].利用シーン図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].なし.id);
    }
  }]);

  return UsageSceneDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessFlowDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var BusinessFlowDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessFlowDiagram, _Diagram);

  var _super = _createSuper(BusinessFlowDiagram);

  function BusinessFlowDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, BusinessFlowDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(BusinessFlowDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクティビティ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].始点終点];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;
      var resType = resource.type;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクター.equals(resType)) {
        width = 280;
        height = 700;
      }

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ユースケース.equals(resType)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, width, height, resource.resourceId);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new BusinessFlowDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new BusinessFlowDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new BusinessFlowDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new BusinessFlowDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new BusinessFlowDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new BusinessFlowDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new BusinessFlowDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].業務フロー図.id, name.trim(), [], [], 768, 1024, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].グリッド.id);
    }
  }]);

  return BusinessFlowDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseCaseCompositeDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var UseCaseCompositeDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UseCaseCompositeDiagram, _Diagram);

  var _super = _createSuper(UseCaseCompositeDiagram);

  function UseCaseCompositeDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, UseCaseCompositeDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(UseCaseCompositeDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].アクティビティ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].情報, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].画面, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].イベント, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].バリエーション, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].条件, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].表形式の条件, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].住宅];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      var width = 0;
      var height = 0;

      if (_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].ユースケース.equals(resource.type)) {
        width = 105;
        height = 35;
      }

      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, width, height, resource.resourceId, false);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new UseCaseCompositeDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new UseCaseCompositeDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new UseCaseCompositeDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new UseCaseCompositeDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new UseCaseCompositeDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new UseCaseCompositeDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new UseCaseCompositeDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].ユースケース複合図.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].なし.id);
    }
  }]);

  return UseCaseCompositeDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariationAndConditionDiagram; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var VariationAndConditionDiagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VariationAndConditionDiagram, _Diagram);

  var _super = _createSuper(VariationAndConditionDiagram);

  function VariationAndConditionDiagram(id, typeId, name, relations, placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, VariationAndConditionDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideTypeId);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(VariationAndConditionDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].バリエーション, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].条件, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].表形式の条件];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      if (this.ngType(resource.type)) return null;
      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](left, top, 0, 0, resource.resourceId, false);
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new VariationAndConditionDiagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return new VariationAndConditionDiagram(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return new VariationAndConditionDiagram(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new VariationAndConditionDiagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new VariationAndConditionDiagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new VariationAndConditionDiagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new VariationAndConditionDiagram(newDiagramId, _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].バリエーション条件.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_15__["default"].なし.id);
    }
  }]);

  return VariationAndConditionDiagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RdramExportFile; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var RdramExportFile = /*#__PURE__*/function () {
  function RdramExportFile(json, clientFileName) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RdramExportFile);

    this.json = json;
    this.clientFileName = clientFileName;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RdramExportFile, [{
    key: "contentType",
    get: function get() {
      return "text/json";
    }
  }, {
    key: "contents",
    get: function get() {
      return this.json;
    }
  }]);

  return RdramExportFile;
}();



/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RdramExportFileName; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _domain_client_WithTimestampFileName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(204);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var RdramExportFileName = /*#__PURE__*/function (_WithTimestampFileNam) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(RdramExportFileName, _WithTimestampFileNam);

  var _super = _createSuper(RdramExportFileName);

  function RdramExportFileName(name) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, RdramExportFileName);

    return _super.call(this, "rdram-".concat(name), "json");
  }

  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(RdramExportFileName);
}(_domain_client_WithTimestampFileName__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Serializer_Serializer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(72);

// EXTERNAL MODULE: ./src/domain/strage/LocalStrage.ts
var LocalStrage = __webpack_require__(234);

// EXTERNAL MODULE: ./src/domain/setting/UserSettings.ts
var UserSettings = __webpack_require__(236);

// EXTERNAL MODULE: ./src/domain/product/Product.ts + 1 modules
var Product = __webpack_require__(263);

// EXTERNAL MODULE: ./src/domain/product/Products.ts
var Products = __webpack_require__(235);

// EXTERNAL MODULE: ./src/domain/strage/Status.ts
var Status = __webpack_require__(194);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(109);

// EXTERNAL MODULE: ./src/domain/diagram/Diagrams.ts + 1 modules
var Diagrams = __webpack_require__(264);

// EXTERNAL MODULE: ./src/domain/diagram/Diagram.ts
var Diagram = __webpack_require__(54);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(76);

// EXTERNAL MODULE: ./src/domain/resource/Purpose.ts
var Purpose = __webpack_require__(203);

// EXTERNAL MODULE: ./src/domain/resource/Request.ts
var Request = __webpack_require__(238);

// EXTERNAL MODULE: ./src/domain/resource/Requirement.ts
var Requirement = __webpack_require__(237);

// EXTERNAL MODULE: ./src/domain/diagram/placement/Placement.ts
var Placement = __webpack_require__(57);

// CONCATENATED MODULE: ./src/domain/relation/Midpoint.ts



var Midpoint_Midpoint = /*#__PURE__*/function () {
  function Midpoint(id, left, top) {
    Object(classCallCheck["a" /* default */])(this, Midpoint);

    this.id = id;
    this.left = left;
    this.top = top;
  }

  Object(createClass["a" /* default */])(Midpoint, [{
    key: "clone",
    value: function clone() {
      return new Midpoint(this.id, this.left, this.top);
    }
  }]);

  return Midpoint;
}();


// EXTERNAL MODULE: ./src/domain/relation/Relation.ts
var Relation = __webpack_require__(319);

// EXTERNAL MODULE: ./src/domain/resource/Scenario.ts
var Scenario = __webpack_require__(239);

// EXTERNAL MODULE: ./src/domain/resource/StartOrEndPoint.ts
var StartOrEndPoint = __webpack_require__(114);

// EXTERNAL MODULE: ./src/domain/diagram/systemcontext/SystemContextDiagram.ts
var SystemContextDiagram = __webpack_require__(245);

// EXTERNAL MODULE: ./src/domain/diagram/businesscontext/BusinessContextDiagram.ts
var BusinessContextDiagram = __webpack_require__(241);

// EXTERNAL MODULE: ./src/domain/diagram/informationmodel/InformationModelDiagram.ts
var InformationModelDiagram = __webpack_require__(243);

// EXTERNAL MODULE: ./src/domain/diagram/statemodel/StateModelDiagram.ts
var StateModelDiagram = __webpack_require__(244);

// EXTERNAL MODULE: ./src/domain/diagram/requrestmodel/RequestModelDiagram.ts
var RequestModelDiagram = __webpack_require__(246);

// EXTERNAL MODULE: ./src/domain/diagram/businessusecase/BusinessUseCaseDiagram.ts
var BusinessUseCaseDiagram = __webpack_require__(242);

// EXTERNAL MODULE: ./src/domain/diagram/businessflow/BusinessFlowDiagram.ts
var BusinessFlowDiagram = __webpack_require__(248);

// EXTERNAL MODULE: ./src/domain/diagram/usagescene/UsageSceneDiagram.ts
var UsageSceneDiagram = __webpack_require__(247);

// EXTERNAL MODULE: ./src/domain/diagram/usecasecomposite/UseCaseCompositeDiagram.ts
var UseCaseCompositeDiagram = __webpack_require__(249);

// EXTERNAL MODULE: ./src/domain/diagram/variationandcondition/VariationAndConditionDiagram.ts
var VariationAndConditionDiagram = __webpack_require__(250);

// EXTERNAL MODULE: ./src/domain/resource/Variation.ts
var Variation = __webpack_require__(200);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(199);

// EXTERNAL MODULE: ./src/domain/resource/TableTypeCondition.ts
var TableTypeCondition = __webpack_require__(137);

// CONCATENATED MODULE: ./src/domain/Serializer.ts







































var Serializer_Serializer = /*#__PURE__*/function () {
  function Serializer() {
    Object(classCallCheck["a" /* default */])(this, Serializer);

    /** シリアライズで復元する可能性のあるクラスのコンストラクタ。 */
    this.constructors = [LocalStrage["a" /* default */], UserSettings["a" /* default */], Products["a" /* default */], Product["a" /* default */], Date, Status["a" /* default */], Resources["a" /* default */], Resource["a" /* default */], Purpose["a" /* default */], Request["a" /* default */], Requirement["a" /* default */], Scenario["a" /* default */], StartOrEndPoint["a" /* default */], Variation["a" /* default */], Condition["a" /* default */], TableTypeCondition["a" /* default */], Diagrams["a" /* default */], Diagram["a" /* default */], Placement["a" /* default */], Midpoint_Midpoint, Relation["a" /* default */], BusinessContextDiagram["a" /* default */], InformationModelDiagram["a" /* default */], StateModelDiagram["a" /* default */], SystemContextDiagram["a" /* default */], RequestModelDiagram["a" /* default */], BusinessUseCaseDiagram["a" /* default */], BusinessFlowDiagram["a" /* default */], UsageSceneDiagram["a" /* default */], UseCaseCompositeDiagram["a" /* default */], VariationAndConditionDiagram["a" /* default */]];
  }

  Object(createClass["a" /* default */])(Serializer, [{
    key: "cloningOf",
    value: function cloningOf(source) {
      return this.deserialize(this.serialize(source));
    }
  }, {
    key: "serialize",
    value: function serialize(target) {
      this.addClassNameProperty(target); // TODO 元のオブジェクトを上書きまくるのでなんとかしたい

      return JSON.stringify(target, null, 4);
    }
  }, {
    key: "deserialize",
    value: function deserialize(json) {
      var obj = JSON.parse(json);
      return this.toClassInstance(obj);
    }
  }, {
    key: "addClassNameProperty",
    value: function addClassNameProperty(value) {
      var _this = this;

      if (Object(esm_typeof["a" /* default */])(value) !== "object") return;

      if (Array.isArray(value)) {
        value.forEach(function (i) {
          return _this.addClassNameProperty(i);
        });
        return;
      }

      value.__CLASS_NAME = value.constructor.name;

      for (var key in value) {
        if (this.hasProperty(value, key)) {
          this.addClassNameProperty(value[key]);
        }
      }
    }
  }, {
    key: "toClassInstance",
    value: function toClassInstance(value) {
      var _this2 = this;

      if (Object(esm_typeof["a" /* default */])(value) !== "object") return value;
      if (Array.isArray(value)) return value.map(function (i) {
        return _this2.toClassInstance(i);
      });
      if (!value.__CLASS_NAME) return value;
      if (value.__CLASS_NAME === "Object") return value;
      var obj = this.createInstanceOf(value.__CLASS_NAME);
      if (!obj) return obj;

      for (var key in value) {
        if (this.hasProperty(value, key)) {
          var inValue = value[key];
          obj[key] = this.toClassInstance(inValue);
        }
      }

      return obj;
    }
  }, {
    key: "createInstanceOf",
    value: function createInstanceOf(className) {
      var FoundCons = this.constructors.find(function (cons) {
        return className === cons.name;
      });
      if (!FoundCons) return null;
      return new FoundCons();
    }
  }, {
    key: "hasProperty",
    value: function hasProperty(value, key) {
      return !!value && Object.prototype.hasOwnProperty.call(value, key);
    }
  }]);

  return Serializer;
}();



/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Product_Product; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(31);

// EXTERNAL MODULE: ./src/domain/setting/UserSettings.ts
var UserSettings = __webpack_require__(236);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(109);

// EXTERNAL MODULE: ./src/domain/world/Uuid.ts
var Uuid = __webpack_require__(323);

// CONCATENATED MODULE: ./src/domain/product/ProductIdentifier.ts




var ProductIdentifier_ProductIdentifier = /*#__PURE__*/function () {
  function ProductIdentifier(value) {
    Object(classCallCheck["a" /* default */])(this, ProductIdentifier);

    this.value = value;
  }

  Object(createClass["a" /* default */])(ProductIdentifier, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }], [{
    key: "ganerate",
    value: function ganerate() {
      var uuid = Uuid["a" /* default */].generate();
      return new ProductIdentifier(uuid);
    }
  }]);

  return ProductIdentifier;
}();


// EXTERNAL MODULE: ./src/domain/diagram/Diagrams.ts + 1 modules
var Diagrams = __webpack_require__(264);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(2);

// EXTERNAL MODULE: ./src/domain/resource/ResourceFactory.ts
var ResourceFactory = __webpack_require__(195);

// EXTERNAL MODULE: ./src/domain/resource/StartOrEndPoint.ts
var StartOrEndPoint = __webpack_require__(114);

// CONCATENATED MODULE: ./src/domain/product/Product.ts














var Product_Product = /*#__PURE__*/function () {
  function Product(updateAt, id, name, userSettings, diagrams, resources, resourceIdSequence) {
    Object(classCallCheck["a" /* default */])(this, Product);

    this.updateAt = updateAt;
    this.id = id;
    this.name = name;
    this.userSettings = userSettings;
    this.diagrams = diagrams;
    this.resources = resources;
    this.resourceIdSequence = resourceIdSequence;
  }

  Object(createClass["a" /* default */])(Product, [{
    key: "relationable",
    value: function relationable(relation, diagramId) {
      var diagram = this.diagrams.of(diagramId);
      if (!diagram) return "指定されたダイアグラムがありません。";
      var relationPlus = this.resources.relationWithResourcesOf(relation);
      if (!relationPlus) return "対応するリソースがありません。";
      var relations = diagram.allRelations(); // TODO Diagram側にこれをつけたい。

      if (relations.exists(relation)) return "すでに関連が存在します。";

      if (relationPlus.fromType.equals(ResourceType["a" /* default */].始点終点)) {
        var startPoint = relationPlus.fromResource;

        if (startPoint.startPoint) {
          if (relations.existsFromResource(startPoint)) {
            return "始点からは一つの関連しか引けません。";
          }
        }
      }

      if (relationPlus.existsType(ResourceType["a" /* default */].始点終点)) {
        if (!relationPlus.existsType(ResourceType["a" /* default */].アクティビティ) && !relationPlus.existsType(ResourceType["a" /* default */].状態) && !relationPlus.existsType(ResourceType["a" /* default */].状態グループ)) {
          return "そのアイコン種類の間に関連は引けません。";
        }
      }

      if (relationPlus.betweenBothFromTo(ResourceType["a" /* default */].アクティビティ)) {
        if (relations.existsBothReversivle(relation)) return "すでに関連が存在します。";
        return "";
      }

      if (relationPlus.existsType(ResourceType["a" /* default */].状態) || relationPlus.existsType(ResourceType["a" /* default */].状態グループ)) {
        if (!relationPlus.existsType(ResourceType["a" /* default */].ユースケース) && !relationPlus.existsType(ResourceType["a" /* default */].始点終点)) {
          return "そのアイコン種類の間に関連は引けません。";
        }

        return "";
      }

      if (relations.existsOrReversivle(relation)) return "すでに関連が存在します。";
      return "";
    }
  }, {
    key: "replaceOf",
    value: function replaceOf(newDiagram) {
      return this.with(this.diagrams.meage(newDiagram));
    }
  }, {
    key: "removeOf",
    value: function removeOf(resource) {
      return new Product(this.updateAt, this.id, this.name, this.userSettings, this.diagrams.removeResouceOf(resource), this.resources.remove(resource), this.resourceIdSequence);
    }
  }, {
    key: "with",
    value: function _with(newDiagrams) {
      return new Product(this.updateAt, this.id, this.name, this.userSettings, newDiagrams, this.resources, this.resourceIdSequence);
    }
  }, {
    key: "withResources",
    value: function withResources(newResources) {
      return new Product(this.updateAt, this.id, this.name, this.userSettings, this.diagrams, newResources, this.resourceIdSequence);
    }
  }, {
    key: "renewTimeStamp",
    value: function renewTimeStamp() {
      return new Product(new Date(), this.id, this.name, this.userSettings, this.diagrams, this.resources, this.resourceIdSequence);
    }
  }, {
    key: "moveNextResourceIdSequence",
    value: function moveNextResourceIdSequence() {
      return new Product(this.updateAt, this.id, this.name, this.userSettings, this.diagrams, this.resources, this.resourceIdSequence + 1);
    }
  }, {
    key: "replaceId",
    value: function replaceId(newProductId) {
      return new Product(this.updateAt, newProductId, this.name, this.userSettings, this.diagrams, this.resources, this.resourceIdSequence);
    }
  }, {
    key: "renewId",
    value: function renewId() {
      var newId = ProductIdentifier_ProductIdentifier.ganerate().toString();
      return this.replaceId(newId);
    }
  }, {
    key: "renameOf",
    value: function renameOf(newName) {
      return new Product(new Date(), this.id, newName, this.userSettings, this.diagrams, this.resources, this.resourceIdSequence);
    }
  }, {
    key: "createAndAddResource",
    value: function createAndAddResource() {
      var factory = new ResourceFactory["a" /* default */]();
      var addedResources = this.resources.add(factory.create(this.name, ResourceType["a" /* default */].システム, 1, this.resources)).add(new StartOrEndPoint["a" /* default */](2, "始点", "", true)).add(new StartOrEndPoint["a" /* default */](3, "終点", "", false));
      return this.withResources(addedResources);
    }
  }, {
    key: "createAndAddDiagram",
    value: function createAndAddDiagram(name, diagramType) {
      var diagrams = this.diagrams;
      var diagram = diagrams.createNewDiagram(name, diagramType, this.resources);
      var addedDiagrams = diagrams.add(diagram);
      return this.with(addedDiagrams);
    }
  }, {
    key: "lastCreatdResource",
    value: function lastCreatdResource() {
      return this.resources.last();
    }
  }, {
    key: "isFlowRelation",
    value: function isFlowRelation(relation) {
      var relationPlus = this.resources.relationWithResourcesOf(relation);
      if (!relationPlus) return false;
      return relationPlus.isFlowRelation();
    } // get or filter methods

  }, {
    key: "useResourcesOf",
    value: function useResourcesOf(diagram) {
      var useRecourceIds = diagram.placements.map(function (placement) {
        return placement.resourceId;
      });
      return this.resources.findOf(useRecourceIds);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newName) {
      // 特殊処理。プロダクトに最初からあるリソースは、ここで作る。
      var factory = new ResourceFactory["a" /* default */]();
      var resources = [factory.create(newName, ResourceType["a" /* default */].システム, 1, Resources["a" /* default */].empty()), new StartOrEndPoint["a" /* default */](2, "始点", "", false, true), new StartOrEndPoint["a" /* default */](3, "終点", "", false, false)];
      return new Product(new Date(), ProductIdentifier_ProductIdentifier.ganerate().toString(), newName, UserSettings["a" /* default */].create(), Diagrams["a" /* default */].empty(), new Resources["a" /* default */](resources), 4);
    }
  }]);

  return Product;
}();



/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Diagrams_Diagrams; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(38);

// EXTERNAL MODULE: ./src/domain/relation/Relations.ts
var Relations = __webpack_require__(240);

// EXTERNAL MODULE: ./src/domain/diagram/Diagram.ts
var Diagram = __webpack_require__(54);

// EXTERNAL MODULE: ./src/domain/diagram/DiagramType.ts
var DiagramType = __webpack_require__(32);

// EXTERNAL MODULE: ./src/domain/diagram/businesscontext/BusinessContextDiagram.ts
var BusinessContextDiagram = __webpack_require__(241);

// EXTERNAL MODULE: ./src/domain/diagram/businessusecase/BusinessUseCaseDiagram.ts
var BusinessUseCaseDiagram = __webpack_require__(242);

// EXTERNAL MODULE: ./src/domain/diagram/informationmodel/InformationModelDiagram.ts
var InformationModelDiagram = __webpack_require__(243);

// EXTERNAL MODULE: ./src/domain/diagram/statemodel/StateModelDiagram.ts
var StateModelDiagram = __webpack_require__(244);

// EXTERNAL MODULE: ./src/domain/diagram/systemcontext/SystemContextDiagram.ts
var SystemContextDiagram = __webpack_require__(245);

// EXTERNAL MODULE: ./src/domain/diagram/requrestmodel/RequestModelDiagram.ts
var RequestModelDiagram = __webpack_require__(246);

// EXTERNAL MODULE: ./src/domain/diagram/usagescene/UsageSceneDiagram.ts
var UsageSceneDiagram = __webpack_require__(247);

// EXTERNAL MODULE: ./src/domain/diagram/businessflow/BusinessFlowDiagram.ts
var BusinessFlowDiagram = __webpack_require__(248);

// EXTERNAL MODULE: ./src/domain/diagram/usecasecomposite/UseCaseCompositeDiagram.ts
var UseCaseCompositeDiagram = __webpack_require__(249);

// EXTERNAL MODULE: ./src/domain/diagram/variationandcondition/VariationAndConditionDiagram.ts
var VariationAndConditionDiagram = __webpack_require__(250);

// CONCATENATED MODULE: ./src/domain/diagram/DiagramFactory.ts















var DiagramFactory_DiagramFactory = /*#__PURE__*/function () {
  function DiagramFactory(resources) {
    Object(classCallCheck["a" /* default */])(this, DiagramFactory);

    this.resources = resources;
  }

  Object(createClass["a" /* default */])(DiagramFactory, [{
    key: "create",
    value: function create(newDiagramId, name, diagramType) {
      if (DiagramType["a" /* default */].システムコンテキスト図.equals(diagramType)) return SystemContextDiagram["a" /* default */].prototypeOf(newDiagramId, name, this.resources);
      if (DiagramType["a" /* default */].要求モデル図.equals(diagramType)) return RequestModelDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].ビジネスコンテキスト図.equals(diagramType)) return BusinessContextDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].ビジネスユースケース図.equals(diagramType)) return BusinessUseCaseDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].業務フロー図.equals(diagramType)) return BusinessFlowDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].利用シーン図.equals(diagramType)) return UsageSceneDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].情報モデル図.equals(diagramType)) return InformationModelDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].状態モデル図.equals(diagramType)) return StateModelDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].ユースケース複合図.equals(diagramType)) return UseCaseCompositeDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (DiagramType["a" /* default */].バリエーション条件.equals(diagramType)) return VariationAndConditionDiagram["a" /* default */].prototypeOf(newDiagramId, name); // それ以外(未定義なものが来た時)

      return Diagram["a" /* default */].genericPrototypeOf(newDiagramId, name, diagramType, this.resources);
    }
  }]);

  return DiagramFactory;
}();


// CONCATENATED MODULE: ./src/domain/diagram/Diagrams.ts

















var Diagrams_Diagrams = /*#__PURE__*/function () {
  function Diagrams(values) {
    Object(classCallCheck["a" /* default */])(this, Diagrams);

    this.values = values;
  }

  Object(createClass["a" /* default */])(Diagrams, [{
    key: "createNewDiagram",
    value: function createNewDiagram(name, diagramType, resources) {
      var newDiagramId = this.generateDiagramId();
      var factory = new DiagramFactory_DiagramFactory(resources);
      return factory.create(newDiagramId, name, diagramType);
    }
  }, {
    key: "generateDiagramId",
    value: function generateDiagramId() {
      return this.values.map(function (d) {
        return d.id;
      }).reduce(function (l, r) {
        return Math.max(l, r);
      }, 0) + 1;
    }
  }, {
    key: "countOfUsingOf",
    value: function countOfUsingOf(resource) {
      return this.values.filter(function (diagram) {
        return diagram.usingOf(resource);
      }).length;
    }
  }, {
    key: "existsSomeName",
    value: function existsSomeName(name, diagramType) {
      return this.values.some(function (d) {
        return d.name === name && d.type.equals(diagramType);
      });
    }
  }, {
    key: "of",
    value: function of(diagramId) {
      return this.values.find(function (diagram) {
        return diagram.id === diagramId;
      });
    }
  }, {
    key: "nameOf",
    value: function nameOf(name) {
      return this.values.find(function (diagram) {
        return diagram.name === name;
      });
    }
  }, {
    key: "add",
    value: function add(diagram) {
      var newValues = Array.from(this.values);
      newValues.push(diagram);
      return new Diagrams(newValues);
    }
  }, {
    key: "remove",
    value: function remove(diagram) {
      var newValues = this.values.filter(function (value) {
        return value.id !== diagram.id;
      });
      return new Diagrams(newValues);
    }
  }, {
    key: "meage",
    value: function meage(diagram) {
      if (this.values.some(function (d) {
        return d.id === diagram.id;
      })) {
        var _newValues = this.values.map(function (d) {
          return d.id === diagram.id ? diagram : d;
        });

        return new Diagrams(_newValues);
      }

      var newValues = Array.from(this.values);
      newValues.push(diagram);
      return new Diagrams(newValues);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var newValues = this.values.map(function (diagram) {
        return diagram.removeResouceOf(resource);
      });
      return new Diagrams(newValues);
    }
  }, {
    key: "typesOf",
    value: function typesOf() {
      for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
        types[_key] = arguments[_key];
      }

      var filterd = this.values.filter(function (diagram) {
        return types.includes(diagram.type);
      });
      return new Diagrams(filterd);
    }
  }, {
    key: "typeOf",
    value: function typeOf(type) {
      return this.typesOf(type);
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.values.forEach(func);
    }
  }, {
    key: "map",
    value: function map(callbackfn) {
      return this.values.map(callbackfn);
    }
  }, {
    key: "eixistsSomeName",
    value: function eixistsSomeName(diagram) {
      return this.values.filter(function (d) {
        return d.id !== diagram.id;
      }).map(function (i) {
        console.log(i.id, i.name);
        return i;
      }).some(function (d) {
        return d.name === diagram.name;
      });
    }
  }, {
    key: "last",
    value: function last() {
      return this.values[this.values.length - 1];
    }
  }, {
    key: "allRelations",
    value: function allRelations() {
      return this.values.map(function (diaglam) {
        return diaglam.allRelations();
      }).reduce(function (left, right) {
        return left.concat(right);
      }, Relations["a" /* default */].empty());
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Diagrams([]);
    }
  }, {
    key: "empty",
    value: function empty() {
      return new Diagrams([]);
    }
  }]);

  return Diagrams;
}();



/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/product/ProductSelectorDialog.vue?vue&type=template&id=6c628cd2&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"data-opend":_vm.onOpen(),"persistent":"","max-width":"600"},model:{value:(_vm.visibleProductSelectorDialog),callback:function ($$v) {_vm.visibleProductSelectorDialog=$$v},expression:"visibleProductSelectorDialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-account-switch-outline")]),_vm._v(" プロダクト切替え\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("編集対象となるプロダクトを選択してください。")]),_vm._v(" "),_c('v-card-actions',[_c('v-select',{attrs:{"items":_vm.productsList(),"item-text":"name","label":"Product","return-object":""},model:{value:(_vm.selectedProduct),callback:function ($$v) {_vm.selectedProduct=$$v},expression:"selectedProduct"}}),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"primary"},on:{"click":_vm.onClickAddProduct}},[_vm._v("追加")])],1),_vm._v(" "),_c('v-card-actions',[(_vm.cancelable)?_c('v-btn',{attrs:{"text":"","disabled":!_vm.selectedProduct,"color":"blue darken-1"},on:{"click":_vm.onClickExportProduct}},[_vm._v("\n        エクスポート\n      ")]):_vm._e(),_vm._v(" "),(_vm.cancelable)?_c('v-btn',{attrs:{"text":"","disabled":_vm.isSelectedCurrentProduct(),"color":"red darken-1"},on:{"click":_vm.onClickRemoveProduct}},[_vm._v("\n        削除\n      ")]):_vm._e(),_vm._v(" "),_c('v-spacer'),_vm._v(" "),(_vm.cancelable)?_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]):_vm._e(),_vm._v(" "),_c('v-btn',{attrs:{"text":"","disabled":!_vm.selectedProduct,"color":"green darken-1"},on:{"click":_vm.onClickOpenProduct}},[_vm._v("\n        プロダクトを開く\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/product/ProductSelectorDialog.vue?vue&type=template&id=6c628cd2&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(33);

// EXTERNAL MODULE: ./src/presentation/MessageBox.ts
var MessageBox = __webpack_require__(374);

// EXTERNAL MODULE: ./src/domain/product/Product.ts + 1 modules
var Product = __webpack_require__(263);

// EXTERNAL MODULE: ./src/domain/client/export/RdramExportFile.ts
var RdramExportFile = __webpack_require__(251);

// EXTERNAL MODULE: ./src/domain/client/export/RdramExportFileName.ts
var RdramExportFileName = __webpack_require__(252);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/product/ProductSelectorDialog.vue?vue&type=script&lang=ts&








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







var ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(ProductSelectorDialog, _Vue);

  var _super = _createSuper(ProductSelectorDialog);

  function ProductSelectorDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ProductSelectorDialog);

    _this = _super.apply(this, arguments);
    _this.cancelable = false;
    _this.selectedProduct = null;
    _this.currentProduct = null;
    _this.products = null;
    return _this;
  }

  Object(createClass["a" /* default */])(ProductSelectorDialog, [{
    key: "onOpen",
    value: function onOpen() {
      var _a;

      if (!this.visibleProductSelectorDialog) return "";
      var strage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!strage) return "";
      if (!this.products) this.products = strage.products;
      if (this.selectedProduct) return "";
      var product = strage.currentProduct();
      if (!product) return "";
      this.currentProduct = product;
      this.selectedProduct = this.currentProduct;
      return "";
    }
  }, {
    key: "productsList",
    value: function productsList() {
      if (!this.products) return [];
      return this.products.list();
    }
  }, {
    key: "onClickAddProduct",
    value: function onClickAddProduct() {
      var _this2 = this;

      var _a;

      var messageBox = new MessageBox["a" /* default */]();
      var message = "追加するプロダクトの名前を入力してください。";
      var name = messageBox.promptWith255Limit(message, "", function (inputText) {
        var _a;

        var exists = (_a = _this2.products) === null || _a === void 0 ? void 0 : _a.existsSomeName(inputText);
        if (exists) alert("既に同一のプロダクト名が在ります。");
        return !exists;
      });
      if (!name) return;
      var product = Product["a" /* default */].prototypeOf(name);
      var products = (_a = this.products) === null || _a === void 0 ? void 0 : _a.merge(product);
      if (!products) return;
      this.products = products;
      this.selectedProduct = product;
      this.saveAddProduct(product);
    }
  }, {
    key: "onClickOpenProduct",
    value: function onClickOpenProduct() {
      var changeCurrent = this.saveCurrentProduct();

      if (!changeCurrent) {
        this.onClose();
        return;
      }

      location.reload();
    }
  }, {
    key: "onClickExportProduct",
    value: function onClickExportProduct() {
      if (this.downloadProductExportFile()) return;
      alert("プロダクトのエクスポートダウンロードファイルの作成に失敗しました。");
    }
  }, {
    key: "onClickRemoveProduct",
    value: function onClickRemoveProduct() {
      var _a;

      var removeTarget = this.selectedProduct;
      if (!removeTarget) return;

      if (!this.downloadProductExportFile()) {
        alert("プロダクトのエクスポートダウンロードファイルの作成に失敗しました。削除を取りやめます。");
        return;
      }

      this.saveRemoveProduct(removeTarget);
      var products = (_a = this.products) === null || _a === void 0 ? void 0 : _a.removeOf(removeTarget);
      if (!products) return;
      this.products = products;
      this.selectedProduct = null;
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.selectedProduct = null;
      this.currentProduct = null;
      this.products = null;
    }
  }, {
    key: "isSelectedCurrentProduct",
    value: function isSelectedCurrentProduct() {
      if (!(this.currentProduct && this.selectedProduct)) return false;
      return this.currentProduct.id === this.selectedProduct.id;
    }
  }, {
    key: "saveAddProduct",
    value: function saveAddProduct(product) {
      var _a, _b;

      var strage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!strage) return;
      var added = strage.merge(product);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.register(added);
    }
  }, {
    key: "saveRemoveProduct",
    value: function saveRemoveProduct(product) {
      var _a, _b;

      var strage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!strage) return;
      var added = strage.removeOf(product);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.register(added);
    }
  }, {
    key: "saveCurrentProduct",
    value: function saveCurrentProduct() {
      var _a, _b;

      if (this.isSelectedCurrentProduct()) return false;
      var strage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!strage || !this.selectedProduct) return false;
      var changed = strage.changeCurrent(this.selectedProduct);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.register(changed);
      return true;
    }
  }, {
    key: "downloadProductExportFile",
    value: function downloadProductExportFile() {
      var _a;

      var product = this.selectedProduct;
      if (!product) return true;
      var productJson = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.getProductJsonTextOf(product.id);
      if (!productJson) return false;
      var fileName = new RdramExportFileName["a" /* default */]("product-".concat(product.name));
      var file = new RdramExportFile["a" /* default */](productJson, fileName);
      this.clientDownloadRepository.register(file);
      return true;
    }
  }]);

  return ProductSelectorDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "repository", void 0);

__decorate([Object(lib["Inject"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "clientDownloadRepository", void 0);

__decorate([Object(lib["Prop"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "visibleProductSelectorDialog", void 0);

__decorate([Object(lib["Prop"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "cancelable", void 0);

__decorate([Object(lib["Emit"])("onClose")], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "onClose", null);

ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog = __decorate([lib["Component"]], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog);
/* harmony default export */ var ProductSelectorDialogvue_type_script_lang_ts_ = (ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog);
// CONCATENATED MODULE: ./src/components/product/ProductSelectorDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var product_ProductSelectorDialogvue_type_script_lang_ts_ = (ProductSelectorDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(715);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 7 modules
var VSelect = __webpack_require__(737);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(727);

// CONCATENATED MODULE: ./src/components/product/ProductSelectorDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductSelectorDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "6c628cd2",
  null
  
)

/* harmony default export */ var product_ProductSelectorDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VSelect: VSelect["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/product/import/ProductImportDialog.vue?vue&type=template&id=612c6e00&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"data-opend":_vm.onOpen(),"persistent":"","max-width":"600"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-import")]),_vm._v(" プロダクトのインポート\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("インポートする対象のファイルを指定してください。")]),_vm._v(" "),_c('v-card-actions',[_c('v-file-input',{attrs:{"disabled":_vm.progressEnable,"rules":[_vm.preValidate],"label":"RDRAM product exported file (json)","accept":"application/json","truncate-length":"50"},on:{"update:error":_vm.onChangeErrorState},model:{value:(_vm.selectedFile),callback:function ($$v) {_vm.selectedFile=$$v},expression:"selectedFile"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-container',{attrs:{"fluid":""}},[_c('v-row',[_c('v-col',[_c('v-progress-linear',{attrs:{"value":"15","disabled":!_vm.progressEnable},model:{value:(_vm.progressPercentage),callback:function ($$v) {_vm.progressPercentage=$$v},expression:"progressPercentage"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-textarea',{ref:"progressLogsTextarea",attrs:{"disabled":!_vm.progressEnable,"label":"インポート状況","readonly":"","outlined":"","no-resize":""},on:{"input":_vm.onChangeProgressLogs},model:{value:(_vm.progressLogs),callback:function ($$v) {_vm.progressLogs=$$v},expression:"progressLogs"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal","disabled":_vm.progressEnable},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"green darken-1","disabled":_vm.notImportable()},on:{"click":_vm.onClickImportProduct}},[_vm._v("\n        実行\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/product/import/ProductImportDialog.vue?vue&type=template&id=612c6e00&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(33);

// EXTERNAL MODULE: ./src/components/product/import/ProductImportMessageConverter.ts
var ProductImportMessageConverter = __webpack_require__(525);

// EXTERNAL MODULE: ./src/domain/product/import/ProductImportError.ts
var ProductImportError = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/product/import/ProductImportDialog.vue?vue&type=script&lang=ts&










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





var ProductImportDialogvue_type_script_lang_ts_ProductImportDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(ProductImportDialog, _Vue);

  var _super = _createSuper(ProductImportDialog);

  function ProductImportDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ProductImportDialog);

    _this = _super.apply(this, arguments);
    _this.messageConverter = new ProductImportMessageConverter["default"]();
    _this.selectedFile = null;
    _this.preValidateError = false;
    _this.progressEnable = false;
    _this.progressPercentage = 0;
    _this.progressLogs = " ";
    _this.importedProductIds = [];
    return _this;
  }

  Object(createClass["a" /* default */])(ProductImportDialog, [{
    key: "onChangeProgressLogs",
    value: function onChangeProgressLogs() {
      var ta = this.progressLogsTextarea;
      ta.value = this.progressLogs; // FIXME ライフサイクルを無視してHTMLElementに二重で設定してるのでやめたい。

      ta.scrollTop = ta.scrollHeight;
    }
  }, {
    key: "progressLogsTextarea",
    get: function get() {
      var vuePart = this.$refs.progressLogsTextarea;
      return vuePart.$el.querySelector('textarea');
    }
  }, {
    key: "onOpen",
    value: function onOpen() {
      if (!this.visible) return "";
      return "";
    }
  }, {
    key: "preValidate",
    value: function preValidate(file) {
      var service = this.productImportService;
      this.clearProgressArea();
      var result = service.validateOf(file);
      if (result === ProductImportError["a" /* ProductImportError */].なし) return true;
      return this.messageConverter.errorMessageOf(result);
    }
  }, {
    key: "onClickImportProduct",
    value: function () {
      var _onClickImportProduct = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.changeEnableProgressArea(true);
                _context.next = 3;
                return this.doImport();

              case 3:
                this.changeEnableProgressArea(false);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onClickImportProduct() {
        return _onClickImportProduct.apply(this, arguments);
      }

      return onClickImportProduct;
    }()
  }, {
    key: "changeEnableProgressArea",
    value: function changeEnableProgressArea(enable) {
      if (enable) this.clearProgressArea();
      this.progressEnable = enable;
    }
  }, {
    key: "clearProgressArea",
    value: function clearProgressArea() {
      this.progressPercentage = 0;
      this.progressLogs = " ";
    }
  }, {
    key: "onChangeErrorState",
    value: function onChangeErrorState(error) {
      this.preValidateError = error;
    }
  }, {
    key: "notImportable",
    value: function notImportable() {
      return this.preValidateError || !this.selectedFile || this.progressEnable;
    }
  }, {
    key: "onClose",
    value: function onClose() {
      var _a;

      if ((_a = this.productImportService) === null || _a === void 0 ? void 0 : _a.hitCurrentProductOf(this.importedProductIds)) {
        alert("現在開いているプロダクトがインポートにより書き換えられました。\nプロダクトを開きなおします。");
        location.reload();
      }

      this.selectedFile = null;
      this.preValidateError = false;
      this.importedProductIds.length = 0;
      this.clearProgressArea();
    }
  }, {
    key: "doImport",
    value: function () {
      var _doImport = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var service, imported;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                service = this.productImportService;
                _context2.next = 3;
                return service.importOf(this.selectedFile, this.notifyProgress, this.confirmeProductName);

              case 3:
                imported = _context2.sent;
                if (imported) this.importedProductIds.push(imported.id);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function doImport() {
        return _doImport.apply(this, arguments);
      }

      return doImport;
    }()
  }, {
    key: "confirmeProductName",
    value: function confirmeProductName(originalProductName) {
      var message = "既に同一の名前のプロダクトが存在します。名前を変えてインポートしますか？\n\n";
      message += "名前を変更する場合は入力して下さい。\n";
      message += "変更がなければ既存のプロダクトを上書きして保存します。";
      var newName = prompt(message, originalProductName);
      if (newName === null) return "";
      return newName;
    }
  }, {
    key: "notifyProgress",
    value: function notifyProgress(event) {
      var _a;

      this.progressPercentage = event.percentage();
      var message = (_a = this.messageConverter) === null || _a === void 0 ? void 0 : _a.makeMessage(event);
      if (message && message.length === 0) return;
      if (this.progressLogs.trim().length === 0) this.progressLogs = "";else this.progressLogs += "\n";
      this.progressLogs += message;
      this.$nextTick(function () {
        return console.log("UI\u304C\u5909\u66F4\u3055\u308C\u305F\u306F\u305A\u3002progress:".concat(event.percentage(), "%, message:").concat(message));
      });
    }
  }]);

  return ProductImportDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], ProductImportDialogvue_type_script_lang_ts_ProductImportDialog.prototype, "productImportService", void 0);

__decorate([Object(lib["Prop"])()], ProductImportDialogvue_type_script_lang_ts_ProductImportDialog.prototype, "visible", void 0);

__decorate([Object(lib["Watch"])('progressLogs')], ProductImportDialogvue_type_script_lang_ts_ProductImportDialog.prototype, "onChangeProgressLogs", null);

__decorate([Object(lib["Emit"])("onClose")], ProductImportDialogvue_type_script_lang_ts_ProductImportDialog.prototype, "onClose", null);

ProductImportDialogvue_type_script_lang_ts_ProductImportDialog = __decorate([lib["Component"]], ProductImportDialogvue_type_script_lang_ts_ProductImportDialog);
/* harmony default export */ var ProductImportDialogvue_type_script_lang_ts_ = (ProductImportDialogvue_type_script_lang_ts_ProductImportDialog);
// CONCATENATED MODULE: ./src/components/product/import/ProductImportDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var import_ProductImportDialogvue_type_script_lang_ts_ = (ProductImportDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(728);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(729);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(715);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(730);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(302);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(731);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(727);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(732);

// CONCATENATED MODULE: ./src/components/product/import/ProductImportDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  import_ProductImportDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "612c6e00",
  null
  
)

/* harmony default export */ var import_ProductImportDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */















installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VFileInput: VFileInput["a" /* default */],VIcon: VIcon["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LocalStrageInitializeDialog.vue?vue&type=template&id=76ebce2a&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"500"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("LocalStrageの初期化")]),_vm._v(" "),_c('v-card-text',[_vm._v("LocalStrageが初期化されていません。"),_c('br'),_vm._v("このWebアプリケーションは、ブラウザ固有のストレージ(LocalStarage)を使用します。"),_c('br'),_vm._v("LocalStrageを初期化し、データを保存してよろしいですか。")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":_vm.onClickAcceptUseLocalStrage}},[_vm._v("許可する")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LocalStrageInitializeDialog.vue?vue&type=template&id=76ebce2a&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LocalStrageInitializeDialog.vue?vue&type=script&lang=ts&







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



var LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(LocalStrageInitializeDialog, _Vue);

  var _super = _createSuper(LocalStrageInitializeDialog);

  function LocalStrageInitializeDialog() {
    Object(classCallCheck["a" /* default */])(this, LocalStrageInitializeDialog);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(LocalStrageInitializeDialog, [{
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "onClickAcceptUseLocalStrage",
    value: function onClickAcceptUseLocalStrage() {
      var _a;

      (_a = this.repository) === null || _a === void 0 ? void 0 : _a.initialize();
      this.onClose();
    }
  }]);

  return LocalStrageInitializeDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog.prototype, "repository", void 0);

__decorate([Object(lib["Prop"])()], LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog.prototype, "visible", void 0);

__decorate([Object(lib["Emit"])("onClose")], LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog.prototype, "onClose", null);

LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog = __decorate([lib["Component"]], LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog);
/* harmony default export */ var LocalStrageInitializeDialogvue_type_script_lang_ts_ = (LocalStrageInitializeDialogvue_type_script_lang_ts_LocalStrageInitializeDialog);
// CONCATENATED MODULE: ./src/components/LocalStrageInitializeDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LocalStrageInitializeDialogvue_type_script_lang_ts_ = (LocalStrageInitializeDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(715);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(727);

// CONCATENATED MODULE: ./src/components/LocalStrageInitializeDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LocalStrageInitializeDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "76ebce2a",
  null
  
)

/* harmony default export */ var components_LocalStrageInitializeDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relation; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RouterType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(160);






var Relation = /*#__PURE__*/function () {
  function Relation(id, fromResourceId, toResourceId, routerTypeId, tipAllow, meaning, midpoints) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Relation);

    this.id = id;
    this.fromResourceId = fromResourceId;
    this.toResourceId = toResourceId;
    this.routerTypeId = routerTypeId;
    this.tipAllow = tipAllow;
    this.meaning = meaning;
    this.midpoints = midpoints;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Relation, [{
    key: "routerType",
    get: function get() {
      return _RouterType__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].ofId(this.routerTypeId);
    }
  }, {
    key: "reverse",
    value: function reverse() {
      return new Relation(this.id, this.toResourceId, this.fromResourceId, this.routerTypeId, this.tipAllow, this.meaning, this.midpoints);
    }
  }, {
    key: "otherSideOf",
    value: function otherSideOf(resourceId) {
      if (!this.isRelatedTo(resourceId)) return 0;
      return this.fromResourceId === resourceId ? this.toResourceId : this.fromResourceId;
    }
  }, {
    key: "isRelatedTo",
    value: function isRelatedTo(resourceId) {
      return this.fromResourceId === resourceId || this.toResourceId === resourceId;
    }
  }, {
    key: "equalRoute",
    value: function equalRoute(other) {
      return this.fromResourceId === other.fromResourceId && this.toResourceId === other.toResourceId;
    }
  }, {
    key: "equalRouteReversivle",
    value: function equalRouteReversivle(other) {
      return this.equalRoute(other) || this.reverse().equalRoute(other);
    }
  }, {
    key: "changeMeaning",
    value: function changeMeaning(meaning) {
      return this.with(meaning, this.routerType, this.tipAllow);
    }
  }, {
    key: "changeRouter",
    value: function changeRouter(routerType) {
      return this.with(this.meaning, routerType, this.tipAllow);
    }
  }, {
    key: "changeTipAllow",
    value: function changeTipAllow(value) {
      return this.with(this.meaning, this.routerType, value);
    }
  }, {
    key: "with",
    value: function _with(meaning, routerType, tipAllow) {
      return new Relation(this.id, this.fromResourceId, this.toResourceId, routerType.id, tipAllow, meaning.trim(), this.midpoints);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Relation(this.id, this.fromResourceId, this.toResourceId, this.routerTypeId, this.tipAllow, this.meaning, this.midpoints.map(function (midpoint) {
        return midpoint.clone();
      }));
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(id, fromResourceId, toResourceId) {
      return new Relation(id, fromResourceId, toResourceId, _RouterType__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].DIRECT.id, false, "", []);
    }
  }]);

  return Relation;
}();


Relation.MEANING_MAX_LENGTH = 64;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);






var DiagramType = /*#__PURE__*/function () {
  function DiagramType(id, name, iconKey) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DiagramType);

    this.id = id;
    this.name = name;
    this.iconKey = iconKey;
    DiagramType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DiagramType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return other.id === this.id;
    }
  }], [{
    key: "values",
    value: function values() {
      return DiagramType.vs;
    }
  }, {
    key: "ofId",
    value: function ofId(id) {
      return this.vs.find(function (item) {
        return item.id === id;
      });
    }
  }]);

  return DiagramType;
}();


DiagramType.vs = [];
DiagramType.システムコンテキスト図 = new DiagramType(1, 'システムコンテキスト図', "mdi-alpha-s-box");
DiagramType.要求モデル図 = new DiagramType(2, '要求モデル図', "mdi-alpha-r-box");
DiagramType.ビジネスコンテキスト図 = new DiagramType(3, 'ビジネスコンテキスト図', "mdi-alpha-c-box");
DiagramType.ビジネスユースケース図 = new DiagramType(4, 'ビジネスユースケース図', "mdi-alpha-u-box");
DiagramType.業務フロー図 = new DiagramType(11, '業務フロー図', "mdi-clipboard-flow");
DiagramType.利用シーン図 = new DiagramType(12, '利用シーン図', "mdi-video-image");
DiagramType.情報モデル図 = new DiagramType(5, '情報モデル図', "mdi-axis-arrow-info");
DiagramType.状態モデル図 = new DiagramType(6, '状態モデル図', "mdi-state-machine");
DiagramType.ユースケース複合図 = new DiagramType(7, 'ユースケース複合図', "mdi-set-none");
DiagramType.バリエーション条件 = new DiagramType(8, 'バリエーション・条件', "mdi-vector-combine");

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uuid; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);








var Uuid = /*#__PURE__*/function () {
  function Uuid() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Uuid);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Uuid, null, [{
    key: "generate",
    value: function generate() {
      // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js  
      // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";  
      var chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");

      for (var i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
          case "x":
            chars[i] = Math.floor(Math.random() * 16).toString(16);
            break;

          case "y":
            chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
            break;
        }
      }

      return chars.join("");
    }
  }]);

  return Uuid;
}();



/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(584);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("75e846b2", content, true, {"sourceMap":false});

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBox; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);




var MessageBox = /*#__PURE__*/function () {
  function MessageBox() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MessageBox);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MessageBox, [{
    key: "prompt",
    value: function prompt(message, defaultText, validation) {
      var result = this.promptWithTrim(message, defaultText);
      if (!validation) return result;

      while (!validation(result)) {
        result = this.promptWithTrim(message, result);
      }

      return result;
    }
  }, {
    key: "promptWith255Limit",
    value: function promptWith255Limit(message, defaultText, validation) {
      return this.prompt(message, defaultText, function (inputText) {
        if (inputText.length > 255) {
          alert("255文字以内で入力してください。");
          return false;
        }

        return validation(inputText);
      });
    }
  }, {
    key: "promptWithTrim",
    value: function promptWithTrim(message, defaultText) {
      var inputText = prompt(message, defaultText);
      var trimed = inputText ? inputText.trim() : "";
      return trimed;
    }
  }]);

  return MessageBox;
}();



/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(674);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("a36b36ec", content, true, {"sourceMap":false});

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(676);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("0883f874", content, true, {"sourceMap":false});

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductImportMessageConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _ProductImportErrorMessageConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(526);
/* harmony import */ var _domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);





var ProductImportMessageConverter = /*#__PURE__*/function () {
  function ProductImportMessageConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ProductImportMessageConverter);

    this.errorMessageConverter = new _ProductImportErrorMessageConverter__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ProductImportMessageConverter, [{
    key: "makeMessage",
    value: function makeMessage(event) {
      var main = ProductImportMessageConverter.MESSAGE_DIC[event.step];
      var error = this.errorMessageOf(event.error);
      return main + error + event.optionalMessage;
    }
  }, {
    key: "errorMessageOf",
    value: function errorMessageOf(error) {
      return this.errorMessageConverter.messageOf(error);
    }
  }], [{
    key: "initMap",
    value: function initMap() {
      var m = {};
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].失敗] = "インポートが失敗しました。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].エラー] = "エラー : ";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].キャンセル] = "インポートがキャンセルされました。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].開始] = "インポートを開始します。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].ファイル読み込み] = "ファイルの読み込み。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].形式チェック] = "ファイル内容・形式のチェック。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].追加] = "プロダクトの追加・置き換え。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].保存] = "LocalStrageへの保存。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].完了] = "完了。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].成功] = "インポートが成功しました。";
      return m;
    }
  }]);

  return ProductImportMessageConverter;
}();


ProductImportMessageConverter.MESSAGE_DIC = ProductImportMessageConverter.initMap();

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductImportErrorMessageConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);




var ProductImportErrorMessageConverter = /*#__PURE__*/function () {
  function ProductImportErrorMessageConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ProductImportErrorMessageConverter);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ProductImportErrorMessageConverter, [{
    key: "messageOf",
    value: function messageOf(error) {
      return ProductImportErrorMessageConverter.MESSAGE_DIC[error];
    }
  }], [{
    key: "initMap",
    value: function initMap() {
      var m = {};
      m[_domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportError */ "a"].なし] = "";
      m[_domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportError */ "a"].予期せぬエラー] = "予期せぬエラーが発生しました。";
      m[_domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportError */ "a"].ファイル名不正] = "RDRAMシステムからエクスポートされたものではないファイル名です。";
      m[_domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportError */ "a"].サイズ超過] = "ファイルが大きすぎます。";
      m[_domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportError */ "a"].非JSON形式] = "ファイル形式がRDRAMシステムのプロダクトエクスポートファイルではありません。";
      m[_domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportError */ "a"].読込失敗] = "ローカルファイルの読み込みに失敗しました。";
      m[_domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportError */ "a"].プロダクト名不明] = "形式が不正です。プロダクト名が設定されていません。";
      return m;
    }
  }]);

  return ProductImportErrorMessageConverter;
}();


ProductImportErrorMessageConverter.MESSAGE_DIC = ProductImportErrorMessageConverter.initMap();

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=template&id=f704e534&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"dark":""}},[_c('v-navigation-drawer',{attrs:{"mini-variant":_vm.miniVariant,"clipped":_vm.clipped,"fixed":"","app":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',_vm._l((_vm.items),function(item,i){return _c('v-list-item',{key:i,attrs:{"to":item.to,"router":"","exact":""}},[_c('v-list-item-action',[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',{domProps:{"textContent":_vm._s(item.title)}})],1)],1)}),1)],1),_vm._v(" "),_c('v-app-bar',{attrs:{"clipped-left":_vm.clipped,"fixed":"","app":""}},[_c('v-app-bar-nav-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer = !_vm.drawer}}}),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.miniVariant = !_vm.miniVariant}}},[_c('v-icon',[_vm._v("mdi-"+_vm._s(("chevron-" + (_vm.miniVariant ? 'right' : 'left'))))])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.clipped = !_vm.clipped}}},[_c('v-icon',[_vm._v("mdi-application")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.fixed = !_vm.fixed}}},[_c('v-icon',[_vm._v("mdi-minus")])],1),_vm._v(" "),_c('v-toolbar-title',{domProps:{"textContent":_vm._s(_vm.title)}}),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.rightDrawer = !_vm.rightDrawer}}},[_c('v-icon',[_vm._v("mdi-menu")])],1)],1),_vm._v(" "),_c('v-main',[_c('v-container',[_c('Nuxt')],1)],1),_vm._v(" "),_c('v-navigation-drawer',{attrs:{"right":_vm.right,"temporary":"","fixed":"","width":"320"},model:{value:(_vm.rightDrawer),callback:function ($$v) {_vm.rightDrawer=$$v},expression:"rightDrawer"}},[_c('v-list',[_c('v-list-item',{nativeOn:{"click":function($event){_vm.right = !_vm.right}}},[_c('v-list-item-action',[_c('v-icon',{attrs:{"light":""}},[_vm._v("mdi-repeat")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("システムメニュー")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onChangeProduct}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-account-switch-outline")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("プロダクト切替え...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickImportProduct}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-import")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("プロダクトのインポート...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickDestryLocalStrage}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-delete-forever")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("LocalStrageの破棄...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickExportOfTangoRdraFile}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-alpha-t-circle")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("tango/rdra形式エクスポート...")])],1)],1)],1),_vm._v(" "),_c('v-footer',{attrs:{"absolute":!_vm.fixed,"app":""}},[_c('span',[_vm._v("\n      © "+_vm._s(new Date().getFullYear())+"\n      "),_c('a',{staticClass:"no-efect-link",attrs:{"target":"_new","href":"https://kazuhito-m.github.io/rdram"}},[_vm._v("rdram")])]),_vm._v(" "),_c('a',{staticClass:"auther-link",attrs:{"target":"_new","href":"https://twitter.com/kazuhito_m"}},[_c('v-icon',[_vm._v("mdi-twitter")]),_vm._v("kazuhito_m\n    ")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('a',{staticClass:"no-efect-link",attrs:{"target":"_new","href":"https://twitter.com/intent/tweet?url=https%3A%2F%2Fkazuhito-m.github.io%2Frdram&hashtags=rdram"}},[_c('v-icon',[_vm._v("mdi-share")])],1),_vm._v(" "),_c('a',{staticClass:"no-efect-link",attrs:{"target":"_new","href":"https://github.com/kazuhito-m/rdram/releases"}},[_vm._v("ver. "+_vm._s(_vm.selfVersion))])],1),_vm._v(" "),_c('ProductSelectorDialog',{attrs:{"visibleProductSelectorDialog":_vm.visibleProductSelector,"cancelable":_vm.productSelectorCancelable},on:{"onClose":_vm.onCloseChangeProduct}}),_vm._v(" "),_c('ProductImportDialog',{attrs:{"visible":_vm.visibleProductImportDialog},on:{"onClose":_vm.onCloseProductImportDialog}}),_vm._v(" "),_c('LocalStrageInitializeDialog',{attrs:{"visible":_vm.visibleApplicationInitializationDialog},on:{"onClose":_vm.onCloseApplicationInitializationDialog}}),_vm._v(" "),_c('TangoRdraFileExportDialog',{attrs:{"visible":_vm.visibleExportTangoRdraFileDialog},on:{"onClose":_vm.onCloseTangoRdraFileExportDialog}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=template&id=f704e534&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(268);

// EXTERNAL MODULE: ./src/domain/Serializer.ts + 1 modules
var Serializer = __webpack_require__(262);

// EXTERNAL MODULE: ./src/domain/strage/LocalStrage.ts
var LocalStrage = __webpack_require__(234);

// CONCATENATED MODULE: ./src/infrastructure/strage/StrageDatasource.ts







var StrageDatasource_StrageDatasource = /*#__PURE__*/function () {
  function StrageDatasource() {
    Object(classCallCheck["a" /* default */])(this, StrageDatasource);

    this.serializer = new Serializer["a" /* default */]();
  }

  Object(createClass["a" /* default */])(StrageDatasource, [{
    key: "isInitialized",
    value: function isInitialized() {
      // this.clear();
      var data = this.get();
      if (data) return true;
      return false;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var initialData = this.defaultStructure();
      this.register(initialData);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      localStorage.removeItem(StrageDatasource.STRAGE_ID);
    }
  }, {
    key: "defaultStructure",
    value: function defaultStructure() {
      return LocalStrage["a" /* default */].prototypeOf();
    }
  }, {
    key: "getJsonText",
    value: function getJsonText() {
      return localStorage.getItem(StrageDatasource.STRAGE_ID);
    }
  }, {
    key: "get",
    value: function get() {
      var startTime = performance.now();
      var textData = this.getJsonText();
      if (!textData) return null;
      var strage = this.serializer.deserialize(textData); // console.log('get :    ' + textData);

      console.log(strage);
      var ms = performance.now() - startTime;
      console.log("StrageDatasource.get(),      ".concat(new Blob([textData]).size, " byte\u53D6\u5F97\u3002").concat(ms.toFixed(3), " ms")); // alert('get: ' + textData);

      return strage;
    }
  }, {
    key: "getProductJsonTextOf",
    value: function getProductJsonTextOf(productId) {
      var strage = this.get();
      var product = strage === null || strage === void 0 ? void 0 : strage.products.of(productId);
      if (!product) return null;
      return this.serializer.serialize(product);
    }
  }, {
    key: "register",
    value: function register(strage) {
      var startTime = performance.now();
      var target = strage.renewTimeStamp();
      var jsonText = this.serializer.serialize(target);
      localStorage.setItem(StrageDatasource.STRAGE_ID, jsonText);
      var ms = performance.now() - startTime;
      console.log('register: ' + jsonText);
      console.log(target);
      console.log("StrageDatasource.register(), ".concat(new Blob([jsonText]).size, " byte\u4FDD\u5B58\u3002").concat(ms.toFixed(3), " ms")); // alert('reg: ' + jsonText);
    }
  }, {
    key: "getCurrentProduct",
    value: function getCurrentProduct() {
      var strage = this.get();
      if (!strage) return undefined;
      return strage.currentProduct();
    }
  }, {
    key: "registerCurrentProduct",
    value: function registerCurrentProduct(product) {
      var strage = this.get();
      if (!strage) return;
      var renewProduct = product.renewTimeStamp();
      var changed = strage.changeCurrent(renewProduct);
      var mearged = strage.products.merge(renewProduct);
      changed = changed.with(mearged);
      this.register(changed);
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.removeItem(StrageDatasource.STRAGE_ID);
    }
  }, {
    key: "generateResourceId",
    value: function generateResourceId() {
      var product = this.getCurrentProduct();
      if (!product) return 1;
      var updated = product.moveNextResourceIdSequence();
      this.registerCurrentProduct(updated);
      return updated.resourceIdSequence;
    }
  }, {
    key: "createProductByJsonOf",
    value: function createProductByJsonOf(jsonText) {
      return this.serializer.deserialize(jsonText);
    }
  }]);

  return StrageDatasource;
}();


StrageDatasource_StrageDatasource.STRAGE_ID = 'rdram-strage';
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(603);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(293);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(73);

// CONCATENATED MODULE: ./src/infrastructure/client/ClientDownloadTransfar.ts









var ClientDownloadTransfar_ClientDownloadTransfar = /*#__PURE__*/function () {
  function ClientDownloadTransfar() {
    Object(classCallCheck["a" /* default */])(this, ClientDownloadTransfar);
  }

  Object(createClass["a" /* default */])(ClientDownloadTransfar, [{
    key: "register",
    value: function register(file) {
      var blob = new Blob([file.contents], {
        type: file.contentType
      });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = file.clientFileName.toString();
      link.click();
      return true;
    }
  }, {
    key: "registerBase64PngImage",
    value: function registerBase64PngImage(encoded64PngText, clientFileName) {
      var link = document.createElement("a");
      link.href = encoded64PngText;
      link.download = clientFileName.toString();
      link.click();
      return true;
    }
  }]);

  return ClientDownloadTransfar;
}();


// EXTERNAL MODULE: ./src/components/product/ProductSelectorDialog.vue + 4 modules
var ProductSelectorDialog = __webpack_require__(308);

// EXTERNAL MODULE: ./src/components/product/import/ProductImportDialog.vue + 4 modules
var ProductImportDialog = __webpack_require__(309);

// EXTERNAL MODULE: ./src/components/LocalStrageInitializeDialog.vue + 4 modules
var LocalStrageInitializeDialog = __webpack_require__(310);

// EXTERNAL MODULE: ./src/components/LocalStrageDestroyDialog.vue + 4 modules
var LocalStrageDestroyDialog = __webpack_require__(532);

// EXTERNAL MODULE: ./src/components/tangordra/TangoRdraFileExportDialog.vue + 4 modules
var TangoRdraFileExportDialog = __webpack_require__(533);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(105);

// EXTERNAL MODULE: ./src/domain/product/import/ProductImportProgressStep.ts
var ProductImportProgressStep = __webpack_require__(55);

// EXTERNAL MODULE: ./src/domain/product/import/ProductImportError.ts
var ProductImportError = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(12);

// CONCATENATED MODULE: ./src/domain/basic/enum/EnumAnalyzer.ts









var EnumAnalyzer_EnumAnalyzer = /*#__PURE__*/function () {
  function EnumAnalyzer() {
    Object(classCallCheck["a" /* default */])(this, EnumAnalyzer);
  }

  Object(createClass["a" /* default */])(EnumAnalyzer, null, [{
    key: "enumLengthOf",
    value: function enumLengthOf(enumType) {
      return Object.keys(enumType).map(function (value, _) {
        return value;
      }).map(function (value) {
        return Number(isNaN(Number(value)));
      }).reduce(function (base, current) {
        return base + current;
      }, 0);
    }
  }, {
    key: "muxNumberValueOf",
    value: function muxNumberValueOf(numberEnumType) {
      return Object.keys(numberEnumType).map(function (value, _) {
        return value;
      }).filter(function (value) {
        return EnumAnalyzer.isNumber(value);
      }).map(function (value) {
        return Number(value);
      }).reduce(function (base, current) {
        return Math.max(base, current);
      });
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== null && value !== '' && !isNaN(Number(value.toString()));
    }
  }]);

  return EnumAnalyzer;
}();


// CONCATENATED MODULE: ./src/domain/product/import/ProductImportProgressEvent.ts





var ProductImportProgressEvent_ProductImportProgressEvent = /*#__PURE__*/function () {
  function ProductImportProgressEvent(step, error, optionalMessage) {
    Object(classCallCheck["a" /* default */])(this, ProductImportProgressEvent);

    this.step = step;
    this.error = error;
    this.optionalMessage = optionalMessage;
  }

  Object(createClass["a" /* default */])(ProductImportProgressEvent, [{
    key: "stepNumber",
    value: function stepNumber() {
      return this.step;
    }
  }, {
    key: "percentage",
    value: function percentage() {
      var stepNubmer = this.stepNumber();
      if (stepNubmer <= 0) return 0;
      var endStep = EnumAnalyzer_EnumAnalyzer.muxNumberValueOf(ProductImportProgressStep["a" /* ProductImportProgressStep */]);
      return stepNubmer / endStep * 100;
    }
  }]);

  return ProductImportProgressEvent;
}();


// CONCATENATED MODULE: ./src/application/service/product/import/ProductImportService.ts













var ProductImportService_ProductImportService = /*#__PURE__*/function () {
  function ProductImportService(strageRepository, fileSystemRepository) {
    Object(classCallCheck["a" /* default */])(this, ProductImportService);

    this.strageRepository = strageRepository;
    this.fileSystemRepository = fileSystemRepository;
  }

  Object(createClass["a" /* default */])(ProductImportService, [{
    key: "importOf",
    value: function () {
      var _importOf = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, notifyProgress, confirmeProductName) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].開始, "", file));
                _context.prev = 1;
                _context.next = 4;
                return this.doImport(file, notifyProgress, confirmeProductName);

              case 4:
                result = _context.sent;

                if (!result) {
                  _context.next = 8;
                  break;
                }

                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].成功, "", file));
                return _context.abrupt("return", result);

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                notifyProgress(this.raiseError(ProductImportError["a" /* ProductImportError */].予期せぬエラー, "\n  ".concat(_context.t0)));

              case 13:
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].失敗, "", file));
                return _context.abrupt("return", null);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function importOf(_x, _x2, _x3) {
        return _importOf.apply(this, arguments);
      }

      return importOf;
    }()
  }, {
    key: "doImport",
    value: function () {
      var _doImport = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file, notifyProgress, confirmeProductName) {
        var result, json, jsonText, product, strage, newName, updatedStrage;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].ファイル読み込み));
                result = this.validateOf(file);

                if (!(result !== ProductImportError["a" /* ProductImportError */].なし)) {
                  _context2.next = 5;
                  break;
                }

                notifyProgress(this.raiseError(result));
                return _context2.abrupt("return", null);

              case 5:
                _context2.next = 7;
                return this.fileSystemRepository.readFile(file);

              case 7:
                json = _context2.sent;

                if (!(json === null)) {
                  _context2.next = 11;
                  break;
                }

                notifyProgress(this.raiseError(ProductImportError["a" /* ProductImportError */].読込失敗));
                return _context2.abrupt("return", null);

              case 11:
                jsonText = json;
                product = this.strageRepository.createProductByJsonOf(jsonText);
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].形式チェック));

                if (!(product.name.trim().length === 0)) {
                  _context2.next = 17;
                  break;
                }

                notifyProgress(this.raiseError(ProductImportError["a" /* ProductImportError */].プロダクト名不明));
                return _context2.abrupt("return", null);

              case 17:
                strage = this.strageRepository.get();

                if (!strage.existsProductNameOf(product.name)) {
                  _context2.next = 24;
                  break;
                }

                newName = confirmeProductName(product.name);

                if (!(newName === "")) {
                  _context2.next = 23;
                  break;
                }

                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].キャンセル));
                return _context2.abrupt("return", null);

              case 23:
                product = product.renameOf(newName.trim());

              case 24:
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].追加));
                updatedStrage = strage.mergeByProductName(product);
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].保存));
                this.strageRepository.register(updatedStrage);
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].完了, "product name: \"".concat(product.name, "\"")));
                return _context2.abrupt("return", product);

              case 30:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function doImport(_x4, _x5, _x6) {
        return _doImport.apply(this, arguments);
      }

      return doImport;
    }()
  }, {
    key: "raise",
    value: function raise(step) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var file = arguments.length > 2 ? arguments[2] : undefined;
      var fileCaption = file ? "file: \"".concat(file.name, "\"") : "";
      return new ProductImportProgressEvent_ProductImportProgressEvent(step, ProductImportError["a" /* ProductImportError */].なし, message + fileCaption);
    }
  }, {
    key: "raiseError",
    value: function raiseError(error) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return new ProductImportProgressEvent_ProductImportProgressEvent(ProductImportProgressStep["a" /* ProductImportProgressStep */].エラー, error, message);
    }
  }, {
    key: "validateOf",
    value: function validateOf(file) {
      var MAX_MB = 100 * 1024 * 1024;
      var NAME_PATTERN = /^rdram-product-.*\.json$/;
      if (!file) return ProductImportError["a" /* ProductImportError */].なし;
      if (!NAME_PATTERN.test(file.name)) return ProductImportError["a" /* ProductImportError */].ファイル名不正;
      if (file.size > MAX_MB) return ProductImportError["a" /* ProductImportError */].サイズ超過;
      if (!this.fileSystemRepository.isJsonFile(file)) return ProductImportError["a" /* ProductImportError */].非JSON形式;
      return ProductImportError["a" /* ProductImportError */].なし;
    }
  }, {
    key: "hitCurrentProductOf",
    value: function hitCurrentProductOf(productIds) {
      var currentProduct = this.strageRepository.getCurrentProduct();
      if (!currentProduct) return false;
      return productIds.includes(currentProduct.id);
    }
  }]);

  return ProductImportService;
}();


// CONCATENATED MODULE: ./src/infrastructure/filesystem/FileSystemDatasource.ts






var FileSystemDatasource_FileSystemDatasouce = /*#__PURE__*/function () {
  function FileSystemDatasouce() {
    Object(classCallCheck["a" /* default */])(this, FileSystemDatasouce);
  }

  Object(createClass["a" /* default */])(FileSystemDatasouce, [{
    key: "readFile",
    value: function readFile(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();

        reader.onload = function (res) {
          if (!res.target) return;
          resolve(res.target.result);
        };

        reader.onerror = function (err) {
          return reject(err);
        };

        reader.readAsText(file);
      });
    }
  }, {
    key: "isJsonFile",
    value: function () {
      var _isJsonFile = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.parseJson(file);

              case 3:
                json = _context.sent;

                if (json) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", false);

              case 6:
                return _context.abrupt("return", true);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", false);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function isJsonFile(_x) {
        return _isJsonFile.apply(this, arguments);
      }

      return isJsonFile;
    }()
  }, {
    key: "parseJson",
    value: function () {
      var _parseJson = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
        var text;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.readFile(file);

              case 2:
                text = _context2.sent;

                if (text) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", null);

              case 5:
                return _context2.abrupt("return", JSON.parse(text));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function parseJson(_x2) {
        return _parseJson.apply(this, arguments);
      }

      return parseJson;
    }()
  }]);

  return FileSystemDatasouce;
}();


// EXTERNAL MODULE: ./node_modules/yaml/browser/index.js
var browser = __webpack_require__(527);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./src/domain/client/WithTimestampFileName.ts
var WithTimestampFileName = __webpack_require__(204);

// CONCATENATED MODULE: ./src/domain/tangordra/export/file/TangoRdraExportFileName.ts








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var TangoRdraExportFileName_TangoRdraExportFileName = /*#__PURE__*/function (_RdramDownloadFileNam) {
  Object(inherits["a" /* default */])(TangoRdraExportFileName, _RdramDownloadFileNam);

  var _super = _createSuper(TangoRdraExportFileName);

  function TangoRdraExportFileName(productName) {
    Object(classCallCheck["a" /* default */])(this, TangoRdraExportFileName);

    return _super.call(this, "tangordra-".concat(productName), "yml");
  }

  return Object(createClass["a" /* default */])(TangoRdraExportFileName);
}(WithTimestampFileName["a" /* default */]);


// CONCATENATED MODULE: ./src/domain/tangordra/export/file/TangoRdraExportFile.ts




var TangoRdraExportFile_TangoRdraExportFile = /*#__PURE__*/function () {
  function TangoRdraExportFile(yaml, productName) {
    Object(classCallCheck["a" /* default */])(this, TangoRdraExportFile);

    this.yaml = yaml;
    this.productName = productName;
  }

  Object(createClass["a" /* default */])(TangoRdraExportFile, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.yaml === "";
    }
  }, {
    key: "clientFileName",
    get: function get() {
      return new TangoRdraExportFileName_TangoRdraExportFileName(this.productName);
    }
  }, {
    key: "contentType",
    get: function get() {
      return "application/x-yaml";
    }
  }, {
    key: "contents",
    get: function get() {
      return this.yaml;
    }
  }], [{
    key: "empty",
    value: function empty() {
      return new TangoRdraExportFile("", "");
    }
  }]);

  return TangoRdraExportFile;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.delete-all.js
var esnext_map_delete_all = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.every.js
var esnext_map_every = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.filter.js
var esnext_map_filter = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find.js
var esnext_map_find = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find-key.js
var esnext_map_find_key = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.includes.js
var esnext_map_includes = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.key-of.js
var esnext_map_key_of = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-keys.js
var esnext_map_map_keys = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-values.js
var esnext_map_map_values = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.merge.js
var esnext_map_merge = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.reduce.js
var esnext_map_reduce = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.some.js
var esnext_map_some = __webpack_require__(175);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.update.js
var esnext_map_update = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(535);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__(536);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__(537);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__(538);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__(539);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__(540);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__(541);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__(542);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__(543);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__(544);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__(545);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__(546);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__(547);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__(548);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__(549);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__(550);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__(551);

// EXTERNAL MODULE: ./src/domain/diagram/DiagramType.ts
var DiagramType = __webpack_require__(32);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts
var ResourceType = __webpack_require__(2);

// CONCATENATED MODULE: ./src/domain/tangordra/export/partmaker/StatusPartMaker.ts








function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











































var StatusPartMaker_StatusPartMaker = /*#__PURE__*/function () {
  function StatusPartMaker() {
    Object(classCallCheck["a" /* default */])(this, StatusPartMaker);
  }

  Object(createClass["a" /* default */])(StatusPartMaker, [{
    key: "make",
    value: function make(product) {
      var _this = this;

      var allResources = product.resources;
      var states = allResources.typeOf(ResourceType["a" /* default */].状態);
      var usecases = allResources.typeOf(ResourceType["a" /* default */].ユースケース);
      return product.diagrams.typeOf(DiagramType["a" /* default */].状態モデル図).map(function (diagram) {
        return _this.makeStateGroup(diagram, states, usecases);
      }).filter(function (stateGroup) {
        return stateGroup.value.length > 0;
      });
    }
  }, {
    key: "makeStateGroup",
    value: function makeStateGroup(diagram, states, usecases) {
      var _this2 = this;

      var resultStatus = [];
      var remainRelations = new Map();
      diagram.allRelations().forEach(function (r) {
        return remainRelations.set(r.id, r);
      });
      var stateResourceIdsOfFromOnlyUnique = Array.from(remainRelations.values()).map(function (r) {
        return r.fromResourceId;
      }).filter(function (fromId) {
        return states.existsIdOf(fromId);
      }).reduce(function (uniqueSet, fromId) {
        return uniqueSet.add(fromId);
      }, new Set());

      var _iterator = _createForOfIteratorHelper(stateResourceIdsOfFromOnlyUnique),
          _step;

      try {
        var _loop = function _loop() {
          var stateResourceId = _step.value;
          var relationsOfConnectUsecase = Array.from(remainRelations.values()).filter(function (r) {
            return r.fromResourceId === stateResourceId;
          });
          relationsOfConnectUsecase.forEach(function (r) {
            return remainRelations.delete(r.id);
          });
          var usecaseResourceIds = relationsOfConnectUsecase.map(function (r) {
            return r.toResourceId;
          }).filter(function (toResoureId) {
            return usecases.existsIdOf(toResoureId);
          });
          if (usecaseResourceIds.length === 0) return "continue";
          var state = states.of(stateResourceId);
          var oneState = {
            name: state === null || state === void 0 ? void 0 : state.name,
            usecase: usecaseResourceIds.map(function (resourceId) {
              return _this2.makeUseCase(resourceId, remainRelations, usecases, states);
            })
          };
          resultStatus.push(oneState);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(remainRelations.values()),
          _step2;

      try {
        var _loop2 = function _loop2() {
          var remainRelation = _step2.value;
          if (!usecases.existsIdOf(remainRelation.fromResourceId)) return "continue";
          var fromStateResouceIds = diagram.allRelations().map(function (r) {
            return r;
          }).filter(function (r) {
            return r.toResourceId === remainRelation.fromResourceId;
          }).map(function (r) {
            return r.fromResourceId;
          });
          if (fromStateResouceIds.length === 0) return "continue";
          var state = states.of(fromStateResouceIds[0]);
          var oneState = {
            name: state === null || state === void 0 ? void 0 : state.name,
            usecase: [_this2.makeUseCase(remainRelation.fromResourceId, remainRelations, usecases, states)]
          };
          resultStatus.push(oneState);
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _ret2 = _loop2();

          if (_ret2 === "continue") continue;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.findNonRelationStatus(diagram, states).forEach(function (state) {
        return resultStatus.push(state);
      });
      var result = {
        group: diagram.name,
        value: resultStatus
      };
      return result;
    }
  }, {
    key: "makeUseCase",
    value: function makeUseCase(useCaseResourceId, remainRelations, usecases, states) {
      var _a, _b;

      var result = {
        name: (_a = usecases.of(useCaseResourceId)) === null || _a === void 0 ? void 0 : _a.name
      };
      var relationsOfConnectState = Array.from(remainRelations.values()).filter(function (r) {
        return r.fromResourceId === useCaseResourceId;
      });

      var _iterator3 = _createForOfIteratorHelper(relationsOfConnectState),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var relation = _step3.value;
          remainRelations.delete(relation.id);
          if (!states.existsIdOf(relation.toResourceId)) continue;
          var stateName = (_b = states.of(relation.toResourceId)) === null || _b === void 0 ? void 0 : _b.name;
          if (!stateName) continue;
          result.next_state = stateName;
          break;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return result;
    }
  }, {
    key: "findNonRelationStatus",
    value: function findNonRelationStatus(diagram, status) {
      var allRelations = diagram.allRelations();
      return diagram.placements.map(function (placement) {
        return placement.resourceId;
      }).filter(function (resourceId) {
        return status.existsIdOf(resourceId);
      }).map(function (resourceId) {
        return status.of(resourceId);
      }).filter(function (state) {
        return !allRelations.isUsedOf(state);
      }).map(function (state) {
        return {
          name: state === null || state === void 0 ? void 0 : state.name
        };
      });
    }
  }]);

  return StatusPartMaker;
}();


// CONCATENATED MODULE: ./src/domain/tangordra/export/partmaker/ConditionsPartMaker.ts










var ConditionsPartMaker_ConditionsPartMaker = /*#__PURE__*/function () {
  function ConditionsPartMaker() {
    Object(classCallCheck["a" /* default */])(this, ConditionsPartMaker);
  }

  Object(createClass["a" /* default */])(ConditionsPartMaker, [{
    key: "make",
    value: function make(product) {
      var _this = this;

      var allVariations = product.resources.typesOf(ResourceType["a" /* default */].バリエーション);
      return product.resources.typesOf(ResourceType["a" /* default */].条件, ResourceType["a" /* default */].表形式の条件).map(function (resource) {
        return resource;
      }).map(function (condition) {
        return _this.makeConditionTango(condition, product, allVariations);
      });
    }
  }, {
    key: "makeConditionTango",
    value: function makeConditionTango(condition, product, allVariations) {
      var result = {
        name: condition.name
      };
      var description = condition.description;
      if (condition.type === ResourceType["a" /* default */].条件) description = condition.value;
      if (description) result.descripion = description;
      var variationNames = this.makeVariationNamesRelationFrom(condition, allVariations, product);
      if (variationNames.length > 0) result.variation = variationNames;
      return result;
    }
  }, {
    key: "makeVariationNamesRelationFrom",
    value: function makeVariationNamesRelationFrom(condition, allVariations, product) {
      var otherSideResourceIds = product.diagrams.allRelations().uniqueIgnoreDirection().onlyRelatedOf(condition).map(function (relation) {
        return relation.otherSideOf(condition.resourceId);
      });
      return otherSideResourceIds.map(function (otherSideResourceId) {
        return allVariations.of(otherSideResourceId);
      }).filter(function (variation) {
        return variation;
      }).map(function (foundVariation) {
        return foundVariation === null || foundVariation === void 0 ? void 0 : foundVariation.name;
      });
    }
  }]);

  return ConditionsPartMaker;
}();


// CONCATENATED MODULE: ./src/domain/tangordra/export/partmaker/VariationsPartMaker.ts






var VariationsPartMaker_VariationsPart = /*#__PURE__*/function () {
  function VariationsPart() {
    Object(classCallCheck["a" /* default */])(this, VariationsPart);
  }

  Object(createClass["a" /* default */])(VariationsPart, [{
    key: "make",
    value: function make(product) {
      return product.resources.typesOf(ResourceType["a" /* default */].バリエーション).map(function (resource) {
        return resource;
      }).map(this.makeVariationTango);
    }
  }, {
    key: "makeVariationTango",
    value: function makeVariationTango(variation) {
      return {
        name: variation.name,
        value: variation.valuesOf()
      };
    }
  }]);

  return VariationsPart;
}();


// CONCATENATED MODULE: ./src/domain/tangordra/export/partmaker/InfomationsPartMaker.ts










var InfomationsPartMaker_InfomationsPartMaker = /*#__PURE__*/function () {
  function InfomationsPartMaker() {
    Object(classCallCheck["a" /* default */])(this, InfomationsPartMaker);
  }

  Object(createClass["a" /* default */])(InfomationsPartMaker, [{
    key: "make",
    value: function make(product) {
      var _this = this;

      var infomations = product.resources.typesOf(ResourceType["a" /* default */].情報);
      var variations = product.resources.typeOf(ResourceType["a" /* default */].バリエーション);
      return product.diagrams.map(function (diagram) {
        return _this.makeInfomationsOf(diagram, infomations, variations);
      }).filter(function (context) {
        return context.value.length > 0;
      });
    }
  }, {
    key: "makeInfomationsOf",
    value: function makeInfomationsOf(diagram, allInfomations, allVariations) {
      var _this2 = this;

      var resourceIds = diagram.placements.map(function (placement) {
        return placement.resourceId;
      });
      var foundInfomations = allInfomations.filter(function (resource) {
        return resourceIds.includes(resource.resourceId);
      });
      var values = foundInfomations.map(function (infomation) {
        return _this2.makeInfomationOf(infomation, diagram, allInfomations, allVariations);
      });
      return {
        context: diagram.name,
        value: values
      };
    }
  }, {
    key: "makeInfomationOf",
    value: function makeInfomationOf(infomation, diagram, allInformations, allVariations) {
      var result = {
        name: infomation.name
      };
      var relateds = this.makeRelatedsOf(infomation, diagram, allInformations);
      if (relateds.length > 0) result.related = relateds;
      var variation = this.makeVariationOf(infomation, diagram, allVariations);
      if (variation) result.variation = variation;
      return result;
    }
  }, {
    key: "makeRelatedsOf",
    value: function makeRelatedsOf(infomation, diagram, allInformations) {
      var relations = diagram.allRelations().onlyFromRelatedOf(infomation);
      return relations.map(function (relation) {
        return allInformations.of(relation.toResourceId);
      }).filter(function (toInfomation) {
        return toInfomation;
      }).map(function (toInfomation) {
        return toInfomation === null || toInfomation === void 0 ? void 0 : toInfomation.name;
      });
    }
  }, {
    key: "makeVariationOf",
    value: function makeVariationOf(infomation, diagram, allVariations) {
      var relationVariationNames = diagram.allRelations().onlyRelatedOf(infomation).map(function (relation) {
        return relation.otherSideOf(infomation.resourceId);
      }).map(function (pairResouceId) {
        return allVariations.of(pairResouceId);
      }).filter(function (foundVariation) {
        return foundVariation;
      }).map(function (foundVariation) {
        return foundVariation === null || foundVariation === void 0 ? void 0 : foundVariation.name;
      });
      if (relationVariationNames.length === 0) return "";
      return relationVariationNames[0];
    }
  }]);

  return InfomationsPartMaker;
}();


// CONCATENATED MODULE: ./src/domain/tangordra/export/partmaker/ActorsPartMaker.ts








var ActorsPartMaker_ActorsPartMaker = /*#__PURE__*/function () {
  function ActorsPartMaker() {
    Object(classCallCheck["a" /* default */])(this, ActorsPartMaker);
  }

  Object(createClass["a" /* default */])(ActorsPartMaker, [{
    key: "make",
    value: function make(product) {
      var _product$resources,
          _this = this;

      for (var _len = arguments.length, targetTypes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        targetTypes[_key - 1] = arguments[_key];
      }

      var actors = (_product$resources = product.resources).typesOf.apply(_product$resources, targetTypes);

      if (actors.isEmpty()) return [];
      return actors.map(function (actor) {
        return _this.convertNameOrActor(actor);
      });
    }
  }, {
    key: "convertNameOrActor",
    value: function convertNameOrActor(actor) {
      if (actor.description.trim().length === 0) return actor.name;
      return {
        name: actor.name,
        description: actor.description
      };
    }
  }]);

  return ActorsPartMaker;
}();


// CONCATENATED MODULE: ./src/domain/tangordra/export/partmaker/OverviewPartMaker.ts





var OverviewPartMaker_OverviewPartMaker = /*#__PURE__*/function () {
  function OverviewPartMaker() {
    Object(classCallCheck["a" /* default */])(this, OverviewPartMaker);
  }

  Object(createClass["a" /* default */])(OverviewPartMaker, [{
    key: "make",
    value: function make(product) {
      var overview = {};
      overview.bussiness = product.name;
      var systems = product.resources.typeOf(ResourceType["a" /* default */].システム);
      if (systems.isEmpty()) return overview;
      var primarySystem = systems.first();
      overview.system = primarySystem.name;
      return overview;
    }
  }]);

  return OverviewPartMaker;
}();


// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(109);

// CONCATENATED MODULE: ./src/domain/tangordra/export/partmaker/BusinessesPartMaker.ts










var BusinessesPartMaker_BusinessesPartMaker = /*#__PURE__*/function () {
  function BusinessesPartMaker() {
    Object(classCallCheck["a" /* default */])(this, BusinessesPartMaker);
  }

  Object(createClass["a" /* default */])(BusinessesPartMaker, [{
    key: "make",
    value: function make(product) {
      var _this = this;

      return product.diagrams.typeOf(DiagramType["a" /* default */].ビジネスユースケース図).map(function (diagram) {
        return _this.makeBusiness(diagram, product);
      });
    }
  }, {
    key: "makeBusiness",
    value: function makeBusiness(diagram, product) {
      var _this2 = this;

      var useResources = product.useResourcesOf(diagram);
      var result = {
        name: diagram.name
      };
      var actorNames = useResources.typesOf(ResourceType["a" /* default */].アクター, ResourceType["a" /* default */].自社システム, ResourceType["a" /* default */].外部システム).map(function (actor) {
        return actor.name;
      });
      if (actorNames.length > 0) result.main_actor = actorNames;
      var bucs = useResources.typeOf(ResourceType["a" /* default */].ビジネスユースケース).map(function (bucResource) {
        return _this2.makeBucs(bucResource, product);
      });
      if (bucs.length > 0) result.buc = bucs;
      return result;
    }
  }, {
    key: "makeBucs",
    value: function makeBucs(buc, product) {
      var result = {
        name: buc.name
      };
      var ucDiagram = product.diagrams.typeOf(DiagramType["a" /* default */].ユースケース複合図).nameOf(buc.name);
      if (!ucDiagram) return result;
      var activities = this.makeActivties(ucDiagram, product);
      if (activities.length > 0) result.activity = activities;
      return result;
    }
  }, {
    key: "makeActivties",
    value: function makeActivties(ucDiagram, product) {
      var _this3 = this;

      var useResources = product.useResourcesOf(ucDiagram);
      return useResources.typeOf(ResourceType["a" /* default */].アクティビティ).map(function (activity) {
        return _this3.makeActivity(activity, useResources, ucDiagram);
      });
    }
  }, {
    key: "makeActivity",
    value: function makeActivity(activity, useResources, ucDiagram) {
      var result = {
        name: activity.name
      };
      var maybeRelatedResouces = ucDiagram.allRelations().filter(function (lelation) {
        return lelation.isRelatedTo(activity.resourceId);
      }).map(function (lelation) {
        return lelation.otherSideOf(activity.resourceId);
      }).map(function (relatedResouceId) {
        return useResources.of(relatedResouceId);
      });
      var relatedResouces = new Resources["a" /* default */](maybeRelatedResouces);
      var actorNames = relatedResouces.typesOf(ResourceType["a" /* default */].アクター, ResourceType["a" /* default */].自社システム, ResourceType["a" /* default */].外部システム).map(function (actor) {
        return actor.name;
      });
      if (actorNames.length > 0) result.used_by = actorNames;
      var usecaseNames = relatedResouces.typeOf(ResourceType["a" /* default */].ユースケース).map(function (usecase) {
        return usecase.name;
      });
      if (usecaseNames.length > 0) result.usecase = usecaseNames;
      return result;
    }
  }]);

  return BusinessesPartMaker;
}();


// CONCATENATED MODULE: ./src/domain/tangordra/export/partmaker/UsecasesPartMaker.ts










var UsecasesPartMaker_UsecasesPartMaker = /*#__PURE__*/function () {
  function UsecasesPartMaker() {
    Object(classCallCheck["a" /* default */])(this, UsecasesPartMaker);
  }

  Object(createClass["a" /* default */])(UsecasesPartMaker, [{
    key: "make",
    value: function make(product) {
      var _this = this;

      var usecases = product.resources.typeOf(ResourceType["a" /* default */].ユースケース);
      var allTargetResources = product.resources.typesOf(ResourceType["a" /* default */].タイマー, ResourceType["a" /* default */].画面, ResourceType["a" /* default */].情報, ResourceType["a" /* default */].条件, ResourceType["a" /* default */].表形式の条件, ResourceType["a" /* default */].イベント);
      return usecases.map(function (usecase) {
        return _this.makeUsecase(usecase, allTargetResources, product);
      });
    }
  }, {
    key: "makeUsecase",
    value: function makeUsecase(usecase, allTargetResources, product) {
      var result = {
        name: usecase.name
      };
      var maybeRelatedResources = product.diagrams.typeOf(DiagramType["a" /* default */].ユースケース複合図).allRelations().uniqueIgnoreDirection().filter(function (relation) {
        return relation.isRelatedTo(usecase.resourceId);
      }).map(function (relation) {
        return relation.otherSideOf(usecase.resourceId);
      }).filter(function (otherSideResourceId) {
        return allTargetResources.existsIdOf(otherSideResourceId);
      }).map(function (otherSideResourceId) {
        return allTargetResources.of(otherSideResourceId);
      });
      var relatedResources = new Resources["a" /* default */](maybeRelatedResources);
      var timerNames = this.findNamesOf(relatedResources, ResourceType["a" /* default */].タイマー);
      if (timerNames.length > 0) result.timer = timerNames;
      var viewNames = this.findNamesOf(relatedResources, ResourceType["a" /* default */].画面);
      if (viewNames.length > 0) result.view = viewNames;
      var informationNames = this.findNamesOf(relatedResources, ResourceType["a" /* default */].情報);
      if (informationNames.length > 0) result.information = informationNames;
      var conditionNames = this.findNamesOf(relatedResources, ResourceType["a" /* default */].条件, ResourceType["a" /* default */].表形式の条件);
      if (conditionNames.length > 0) result.condition = conditionNames;
      var eventNames = this.findNamesOf(relatedResources, ResourceType["a" /* default */].イベント);
      if (eventNames.length > 0) result.event = eventNames;
      return result;
    }
  }, {
    key: "findNamesOf",
    value: function findNamesOf(useRecources) {
      for (var _len = arguments.length, resourceTypes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        resourceTypes[_key - 1] = arguments[_key];
      }

      return useRecources.typesOf.apply(useRecources, resourceTypes).map(function (resource) {
        return resource.name;
      });
    }
  }]);

  return UsecasesPartMaker;
}();


// CONCATENATED MODULE: ./src/domain/tangordra/export/ProductToTangoRdraConverter.ts












var ProductToTangoRdraConverter_ProductToTangoRdraConverter = /*#__PURE__*/function () {
  function ProductToTangoRdraConverter() {
    Object(classCallCheck["a" /* default */])(this, ProductToTangoRdraConverter);

    this.overviewPartMaker = new OverviewPartMaker_OverviewPartMaker();
    this.actorsPartMaker = new ActorsPartMaker_ActorsPartMaker();
    this.infomationsPartMaker = new InfomationsPartMaker_InfomationsPartMaker();
    this.variationsPartMaker = new VariationsPartMaker_VariationsPart();
    this.conditionsPartMaker = new ConditionsPartMaker_ConditionsPartMaker();
    this.statusPartMaker = new StatusPartMaker_StatusPartMaker();
    this.businessesPartMaker = new BusinessesPartMaker_BusinessesPartMaker();
    this.usecasesPartMaker = new UsecasesPartMaker_UsecasesPartMaker();
  }

  Object(createClass["a" /* default */])(ProductToTangoRdraConverter, [{
    key: "convert",
    value: function convert(product) {
      var tangoRdra = {};
      tangoRdra.overview = this.overviewPartMaker.make(product);
      var actors = this.actorsPartMaker.make(product, ResourceType["a" /* default */].アクター);
      if (actors.length > 0) tangoRdra.actor = actors;
      var externalActor = this.actorsPartMaker.make(product, ResourceType["a" /* default */].外部システム, ResourceType["a" /* default */].自社システム);
      if (externalActor.length > 0) tangoRdra.external_actor = externalActor;
      var infomations = this.infomationsPartMaker.make(product);
      if (infomations.length > 0) tangoRdra.information = infomations;
      var variations = this.variationsPartMaker.make(product);
      if (variations.length > 0) tangoRdra.variation = variations;
      var conditions = this.conditionsPartMaker.make(product);
      if (conditions.length > 0) tangoRdra.condition = conditions;
      var states = this.statusPartMaker.make(product);
      if (states.length > 0) tangoRdra.state = states;
      var businesses = this.businessesPartMaker.make(product);
      if (businesses.length > 0) tangoRdra.business = businesses;
      var usecases = this.usecasesPartMaker.make(product);
      if (usecases.length > 0) tangoRdra.usecase = usecases;
      return tangoRdra;
    }
  }]);

  return ProductToTangoRdraConverter;
}();


// CONCATENATED MODULE: ./src/application/service/tangordra/TangoRdraFileService.ts







var TangoRdraFileService_TangoRdraFileService = /*#__PURE__*/function () {
  function TangoRdraFileService(strageRepository) {
    Object(classCallCheck["a" /* default */])(this, TangoRdraFileService);

    this.strageRepository = strageRepository;
  }

  Object(createClass["a" /* default */])(TangoRdraFileService, [{
    key: "generateExportFile",
    value: function generateExportFile() {
      var currentProduct = this.strageRepository.getCurrentProduct();
      if (!currentProduct) return TangoRdraExportFile_TangoRdraExportFile.empty();
      var yaml = this.generateTangoRdraOf(currentProduct);
      return new TangoRdraExportFile_TangoRdraExportFile(yaml, currentProduct.name);
    }
  }, {
    key: "generateTangoRdraOf",
    value: function generateTangoRdraOf(producet) {
      var converter = new ProductToTangoRdraConverter_ProductToTangoRdraConverter();
      var tangoRdra = converter.convert(producet);
      return browser_default.a.stringify(tangoRdra);
    }
  }, {
    key: "currentProductName",
    value: function currentProductName() {
      var currentProduct = this.strageRepository.getCurrentProduct();
      return currentProduct === null || currentProduct === void 0 ? void 0 : currentProduct.name;
    }
  }]);

  return TangoRdraFileService;
}();


// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=script&lang=ts&








function defaultvue_type_script_lang_ts_createSuper(Derived) { var hasNativeReflectConstruct = defaultvue_type_script_lang_ts_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function defaultvue_type_script_lang_ts_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var defaultvue_type_script_lang_ts_default_1 = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(default_1, _Vue);

  var _super = defaultvue_type_script_lang_ts_createSuper(default_1);

  function default_1() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, default_1);

    _this = _super.apply(this, arguments);
    _this.clipped = false;
    _this.drawer = false;
    _this.fixed = false;
    _this.miniVariant = false;
    _this.right = true;
    _this.rightDrawer = false;
    _this.title = 'RDRA-M';
    _this.selfVersion = "";
    _this.items = [{
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/'
    }, {
      icon: 'mdi-apps',
      title: 'ダイアグラム一覧',
      to: '/diagrams'
    }, {
      icon: 'mdi-chart-bubble',
      title: 'draw2dのテスト',
      to: '/layouttest'
    }, {
      icon: 'mdi-chart-bubble',
      title: 'canbasのテスト',
      to: '/canvastest'
    }]; // DI difinitions.

    _this.repository = new StrageDatasource_StrageDatasource();
    _this.clientDownloadRepository = new ClientDownloadTransfar_ClientDownloadTransfar();
    _this.fileSystemRepository = new FileSystemDatasource_FileSystemDatasouce();
    _this.productImportService = new ProductImportService_ProductImportService(_this.repository, _this.fileSystemRepository);
    _this.tangoRdraFileService = new TangoRdraFileService_TangoRdraFileService(_this.repository); // this classs property & functions.

    _this.visibleApplicationInitializationDialog = false;
    _this.visibleProductSelector = false;
    _this.productSelectorCancelable = false;
    _this.visibleProductImportDialog = false;
    _this.visibleLocalStrageDestroyDialog = false;
    _this.visibleExportTangoRdraFileDialog = false;
    return _this;
  }

  Object(createClass["a" /* default */])(default_1, [{
    key: "created",
    value: function created() {
      var _this2 = this;

      var _a, _b;

      this.$nextTick(function () {
        _this2.$nuxt.$loading.start();

        setTimeout(function () {
          return _this2.$nuxt.$loading.finish();
        }, 500);
      });
      var head = (_b = (_a = this.$store) === null || _a === void 0 ? void 0 : _a.app) === null || _b === void 0 ? void 0 : _b.head;
      this.title = head.title;
      this.selfVersion = head.selfVersion;
      if (this.showApplicationInitialization()) return;
      if (this.showProductSelectorWhenNotSelected()) return;
      var product = this.repository.getCurrentProduct();
      this.title += " - [".concat(product === null || product === void 0 ? void 0 : product.name, "]");
    }
  }, {
    key: "showApplicationInitialization",
    value: function showApplicationInitialization() {
      if (this.repository.isInitialized()) return false;
      this.visibleApplicationInitializationDialog = true;
      return true;
    }
  }, {
    key: "onCloseApplicationInitializationDialog",
    value: function onCloseApplicationInitializationDialog() {
      this.visibleApplicationInitializationDialog = false;
      this.showProductSelectorWhenNotSelected();
    }
  }, {
    key: "showProductSelectorWhenNotSelected",
    value: function showProductSelectorWhenNotSelected() {
      var _this3 = this;

      this.visibleProductSelector = false;
      var strage = this.repository.get();
      if (!strage || strage.status.currentProductId) return false;
      this.productSelectorCancelable = false;
      this.$nextTick(function () {
        _this3.visibleProductSelector = true;
      });
      return true;
    }
  }, {
    key: "onChangeProduct",
    value: function onChangeProduct() {
      this.visibleProductSelector = false;
      this.rightDrawer = false;
      this.productSelectorCancelable = true;
      this.visibleProductSelector = true;
    }
  }, {
    key: "onCloseChangeProduct",
    value: function onCloseChangeProduct() {
      this.visibleProductSelector = false;
    }
  }, {
    key: "onClickImportProduct",
    value: function onClickImportProduct() {
      this.visibleProductImportDialog = true;
      this.rightDrawer = false;
    }
  }, {
    key: "onCloseProductImportDialog",
    value: function onCloseProductImportDialog() {
      this.visibleProductImportDialog = false;
    }
  }, {
    key: "onClickExportOfTangoRdraFile",
    value: function onClickExportOfTangoRdraFile() {
      this.visibleExportTangoRdraFileDialog = true;
      this.rightDrawer = false;
    }
  }, {
    key: "onCloseTangoRdraFileExportDialog",
    value: function onCloseTangoRdraFileExportDialog() {
      this.visibleExportTangoRdraFileDialog = false;
    }
  }, {
    key: "onClickDestryLocalStrage",
    value: function onClickDestryLocalStrage() {
      this.visibleLocalStrageDestroyDialog = true;
      this.rightDrawer = false;
    }
  }, {
    key: "onCloseLocalStrageDestroyDialog",
    value: function onCloseLocalStrageDestroyDialog() {
      this.visibleLocalStrageDestroyDialog = false;
    }
  }]);

  return default_1;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "repository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "clientDownloadRepository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "fileSystemRepository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "productImportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "tangoRdraFileService", void 0);

defaultvue_type_script_lang_ts_default_1 = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    ProductSelectorDialog: ProductSelectorDialog["default"],
    ProductImportDialog: ProductImportDialog["default"],
    LocalStrageInitializeDialog: LocalStrageInitializeDialog["default"],
    LocalStrageDestroyDialog: LocalStrageDestroyDialog["default"],
    TangoRdraFileExportDialog: TangoRdraFileExportDialog["default"]
  }
})], defaultvue_type_script_lang_ts_default_1);
/* harmony default export */ var defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_default_1);
// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/layouts/default.vue?vue&type=style&index=0&id=f704e534&scoped=true&lang=css&
var defaultvue_type_style_index_0_id_f704e534_scoped_true_lang_css_ = __webpack_require__(673);

// EXTERNAL MODULE: ./src/layouts/default.vue?vue&type=style&index=1&lang=css&
var defaultvue_type_style_index_1_lang_css_ = __webpack_require__(675);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(726);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js + 2 modules
var VAppBar = __webpack_require__(738);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBarNavIcon.js
var VAppBarNavIcon = __webpack_require__(733);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(729);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFooter/VFooter.js
var VFooter = __webpack_require__(734);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(306);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(735);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js
var VNavigationDrawer = __webpack_require__(736);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(727);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(321);

// CONCATENATED MODULE: ./src/layouts/default.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "f704e534",
  null
  
)

/* harmony default export */ var layouts_default = __webpack_exports__["a"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {ProductSelectorDialog: __webpack_require__(308).default,ProductImportDialog: __webpack_require__(309).default,LocalStrageInitializeDialog: __webpack_require__(310).default})


/* vuetify-loader */


















installComponents_default()(component, {VApp: VApp["a" /* default */],VAppBar: VAppBar["a" /* default */],VAppBarNavIcon: VAppBarNavIcon["a" /* default */],VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */],VFooter: VFooter["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemIcon: VListItemIcon["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMain: VMain["a" /* default */],VNavigationDrawer: VNavigationDrawer["a" /* default */],VSpacer: VSpacer["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})


/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading.vue?vue&type=template&id=33278e8e&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loading)?_c('v-overlay',[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"64"}})],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=template&id=33278e8e&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading.vue?vue&type=script&lang=ts&








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



var Loadingvue_type_script_lang_ts_Loading = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(Loading, _Vue);

  var _super = _createSuper(Loading);

  function Loading() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Loading);

    _this = _super.apply(this, arguments);
    _this.loading = false;
    _this.startTime = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(Loading, [{
    key: "start",
    value: function start() {
      this.startTime = performance.now();
      console.log("Loading\u8868\u793A\u958B\u59CB\u3002".concat(new Date()));
      this.loading = true;
    }
  }, {
    key: "finish",
    value: function finish() {
      this.loading = false;
      var time = performance.now() - this.startTime;
      console.log("Loading\u8868\u793A\u7D42\u4E86\u3002".concat(new Date(), " \u8868\u793A\u6642\u9593:").concat(time.toFixed(3), " ms"));
      this.startTime = 0;
    }
  }]);

  return Loading;
}(lib["Vue"]);

Loadingvue_type_script_lang_ts_Loading = __decorate([lib["Component"]], Loadingvue_type_script_lang_ts_Loading);
/* harmony default export */ var Loadingvue_type_script_lang_ts_ = (Loadingvue_type_script_lang_ts_Loading);
// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Loadingvue_type_script_lang_ts_ = (Loadingvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(298);

// CONCATENATED MODULE: ./src/components/Loading.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadingvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "33278e8e",
  null
  
)

/* harmony default export */ var components_Loading = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VOverlay: VOverlay["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */]})


/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LocalStrageDestroyDialog.vue?vue&type=template&id=64a6723a&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"500"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-delete-forever")]),_vm._v(" LocalStrageの破棄\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n      LocalStrageからデータ破棄します。"),_c('br'),_vm._v("\n      これは、"),_c('span',{staticClass:"red--text"},[_vm._v("全データの消去")]),_vm._v(" や "),_c('span',{staticClass:"red--text"},[_vm._v("システムの初期化")]),_vm._v(" と同様の操作です。"),_c('br'),_vm._v("\n      なお、安全措置として「実行」をクリックした際、LocalStrageの内容のファイルが自動的にダウンロードされます。"),_c('br'),_vm._v("\n      LocalStrageを破棄してよろしいですか。\n    ")]),_vm._v(" "),_c('v-card-text',[_c('v-checkbox',{attrs:{"label":"上記内容に同意する。"},model:{value:(_vm.consent),callback:function ($$v) {_vm.consent=$$v},expression:"consent"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"text":"","color":"blue darken-1"},on:{"click":_vm.onClickExportLocalStrage}},[_vm._v("\n        LocalStrageをエクスポート\n      ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","disabled":!_vm.consent,"color":"green darken-1"},on:{"click":_vm.onClickDestroyExecute}},[_vm._v("\n          実行\n        ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LocalStrageDestroyDialog.vue?vue&type=template&id=64a6723a&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(33);

// EXTERNAL MODULE: ./src/domain/client/export/RdramExportFile.ts
var RdramExportFile = __webpack_require__(251);

// EXTERNAL MODULE: ./src/domain/client/export/RdramExportFileName.ts
var RdramExportFileName = __webpack_require__(252);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LocalStrageDestroyDialog.vue?vue&type=script&lang=ts&







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





var LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(LocalStrageDestroyDialog, _Vue);

  var _super = _createSuper(LocalStrageDestroyDialog);

  function LocalStrageDestroyDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LocalStrageDestroyDialog);

    _this = _super.apply(this, arguments);
    _this.consent = false;
    return _this;
  }

  Object(createClass["a" /* default */])(LocalStrageDestroyDialog, [{
    key: "onClose",
    value: function onClose() {
      this.consent = false;
    }
  }, {
    key: "onClickDestroyExecute",
    value: function onClickDestroyExecute() {
      var _a;

      if (!this.downloadNowLocalStrageDateFile()) {
        alert("ダウンロードファイルの作成に失敗しました。破棄処理を中段します。");
        return;
      }

      (_a = this.repository) === null || _a === void 0 ? void 0 : _a.destroy();
      location.reload();
    }
  }, {
    key: "onClickExportLocalStrage",
    value: function onClickExportLocalStrage() {
      if (this.downloadNowLocalStrageDateFile()) return;
      alert("ダウンロードファイルの作成に失敗しました。");
    }
  }, {
    key: "downloadNowLocalStrageDateFile",
    value: function downloadNowLocalStrageDateFile() {
      var _a;

      var json = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.getJsonText();
      if (!json) return false;
      var file = new RdramExportFile["a" /* default */](json, new RdramExportFileName["a" /* default */]("localstrage-backup"));
      this.clientDownloadRepository.register(file);
      return true;
    }
  }]);

  return LocalStrageDestroyDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog.prototype, "repository", void 0);

__decorate([Object(lib["Inject"])()], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog.prototype, "clientDownloadRepository", void 0);

__decorate([Object(lib["Prop"])()], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog.prototype, "visible", void 0);

__decorate([Object(lib["Emit"])("onClose")], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog.prototype, "onClose", null);

LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog = __decorate([lib["Component"]], LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog);
/* harmony default export */ var LocalStrageDestroyDialogvue_type_script_lang_ts_ = (LocalStrageDestroyDialogvue_type_script_lang_ts_LocalStrageDestroyDialog);
// CONCATENATED MODULE: ./src/components/LocalStrageDestroyDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LocalStrageDestroyDialogvue_type_script_lang_ts_ = (LocalStrageDestroyDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js + 2 modules
var VCheckbox = __webpack_require__(739);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(715);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(727);

// CONCATENATED MODULE: ./src/components/LocalStrageDestroyDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LocalStrageDestroyDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "64a6723a",
  null
  
)

/* harmony default export */ var components_LocalStrageDestroyDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCheckbox: VCheckbox["a" /* default */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tangordra/TangoRdraFileExportDialog.vue?vue&type=template&id=2a85dcb8&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"500"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-alpha-t-circle")]),_vm._v(" tango/rdra形式エクスポート\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n      現在のプロダクト"),_c('br'),_vm._v(" "),_c('div',{staticClass:"text-md-body-1",domProps:{"textContent":_vm._s(_vm.productName)}}),_vm._v(" \n      を、tango/rdra 形式のYAMLファイルに出力します。"),_c('br'),_vm._v("\n      よろしいですか。\n    ")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"green darken-1"},on:{"click":_vm.onClickDestroyExecute}},[_vm._v("\n          実行\n        ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tangordra/TangoRdraFileExportDialog.vue?vue&type=template&id=2a85dcb8&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tangordra/TangoRdraFileExportDialog.vue?vue&type=script&lang=ts&







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



var TangoRdraFileExportDialogvue_type_script_lang_ts_TangoRdraFileExportDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(TangoRdraFileExportDialog, _Vue);

  var _super = _createSuper(TangoRdraFileExportDialog);

  function TangoRdraFileExportDialog() {
    Object(classCallCheck["a" /* default */])(this, TangoRdraFileExportDialog);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TangoRdraFileExportDialog, [{
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "onClickDestroyExecute",
    value: function onClickDestroyExecute() {
      if (!this.downloadTangoRdraFile()) {
        alert('ダウンロードファイルの作成に失敗しました。処理を中断します。');
        return;
      }

      this.onClose();
    }
  }, {
    key: "downloadTangoRdraFile",
    value: function downloadTangoRdraFile() {
      var service = this.tangoRdraFileService;
      var exportFile = service.generateExportFile();
      if (exportFile.isEmpty()) return false;
      this.clientDownloadRepository.register(exportFile);
      return true;
    }
  }, {
    key: "productName",
    get: function get() {
      var service = this.tangoRdraFileService;
      return service.currentProductName();
    }
  }]);

  return TangoRdraFileExportDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], TangoRdraFileExportDialogvue_type_script_lang_ts_TangoRdraFileExportDialog.prototype, "tangoRdraFileService", void 0);

__decorate([Object(lib["Inject"])()], TangoRdraFileExportDialogvue_type_script_lang_ts_TangoRdraFileExportDialog.prototype, "clientDownloadRepository", void 0);

__decorate([Object(lib["Prop"])()], TangoRdraFileExportDialogvue_type_script_lang_ts_TangoRdraFileExportDialog.prototype, "visible", void 0);

__decorate([Object(lib["Emit"])('onClose')], TangoRdraFileExportDialogvue_type_script_lang_ts_TangoRdraFileExportDialog.prototype, "onClose", null);

TangoRdraFileExportDialogvue_type_script_lang_ts_TangoRdraFileExportDialog = __decorate([lib["Component"]], TangoRdraFileExportDialogvue_type_script_lang_ts_TangoRdraFileExportDialog);
/* harmony default export */ var TangoRdraFileExportDialogvue_type_script_lang_ts_ = (TangoRdraFileExportDialogvue_type_script_lang_ts_TangoRdraFileExportDialog);
// CONCATENATED MODULE: ./src/components/tangordra/TangoRdraFileExportDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tangordra_TangoRdraFileExportDialogvue_type_script_lang_ts_ = (TangoRdraFileExportDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(70);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(715);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(727);

// CONCATENATED MODULE: ./src/components/tangordra/TangoRdraFileExportDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tangordra_TangoRdraFileExportDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "2a85dcb8",
  null
  
)

/* harmony default export */ var tangordra_TangoRdraFileExportDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagram; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(162);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _relation_Relations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(240);
/* harmony import */ var _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(32);
/* harmony import */ var _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






















var Diagram = /*#__PURE__*/function () {
  function Diagram(id, typeId, name, relations, // TODO Relationsに置き換えたい
  placements, width, height, canvasGuideTypeId) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Diagram);

    this.id = id;
    this.typeId = typeId;
    this.name = name;
    this.relations = relations;
    this.placements = placements;
    this.width = width;
    this.height = height;
    this.canvasGuideTypeId = canvasGuideTypeId;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Diagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(_resource, _left, _top) {
      throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }
  }, {
    key: "createPlacementAtCenter",
    value: function createPlacementAtCenter(resource) {
      var newPlacement = this.createPlacement(resource, 0, 0);
      if (!newPlacement) return null;
      var x = Math.floor((this.width - newPlacement.width) / 2);
      var y = Math.floor((this.height - newPlacement.height) / 2);
      var modifiedPlacement = newPlacement.move(x, y);
      return modifiedPlacement;
    }
  }, {
    key: "placementOf",
    value: function placementOf(resourceId) {
      return this.placements.find(function (placement) {
        return placement.resourceId === resourceId;
      });
    }
  }, {
    key: "defaultNameWhenCopy",
    value: function defaultNameWhenCopy() {
      return "".concat(this.name, " \u306E\u30B3\u30D4\u30FC");
    }
  }, {
    key: "relationIdsOfDeleteTargetResouce",
    value: function relationIdsOfDeleteTargetResouce(deleteTargetResourceIds) {
      return this.relations.filter(function (relation) {
        return deleteTargetResourceIds.includes(relation.fromResourceId) || deleteTargetResourceIds.includes(relation.toResourceId);
      }).map(function (relation) {
        return relation.id;
      });
    }
  }, {
    key: "usingOf",
    value: function usingOf(resource) {
      return this.placements.some(function (Placement) {
        return Placement.resourceId === resource.resourceId;
      });
    }
  }, {
    key: "modifyPlacementOf",
    value: function modifyPlacementOf(placement) {
      var newValues = this.placements.map(function (p) {
        return p.resourceId === placement.resourceId ? placement : p;
      });
      return this.replacePlacement(newValues);
    }
  }, {
    key: "removeResourcesOf",
    value: function removeResourcesOf(resourceIds) {
      var nonDeletedPlacements = this.placements.filter(function (p) {
        return !resourceIds.includes(p.resourceId);
      });
      var nonDeletedRelations = this.relations.filter(function (r) {
        return resourceIds.every(function (id) {
          return !r.isRelatedTo(id);
        });
      });
      return this.replacePlacement(nonDeletedPlacements).replaceRelations(nonDeletedRelations);
    }
  }, {
    key: "removeRelationsOf",
    value: function removeRelationsOf(relationIds) {
      var nonDeletedRelations = this.relations.filter(function (r) {
        return !relationIds.includes(r.id);
      });
      return this.replaceRelations(nonDeletedRelations);
    }
    /**
     * FIXME ここだ「イミュータブルを破ってしまって」いる…なんとかしたい。
     */

  }, {
    key: "modifyRelationOf",
    value: function modifyRelationOf(relation) {
      var index = this.relations.findIndex(function (r) {
        return r.id === relation.id;
      });
      if (index < 0) return this;
      this.relations[index] = relation;
      return this;
    }
  }, {
    key: "addRelation",
    value: function addRelation(relation) {
      var newValues = Array.from(this.relations);
      newValues.push(relation);
      return this.replaceRelations(newValues);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(_relations) {
      throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }
  }, {
    key: "addPlacement",
    value: function addPlacement(placement) {
      var newValues = Array.from(this.placements);
      newValues.push(placement);
      return this.replacePlacement(newValues);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(_placements) {
      throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }
  }, {
    key: "existsSomeRelation",
    value: function existsSomeRelation(relation) {
      return this.relations.some(function (r) {
        return r.equalRouteReversivle(relation);
      });
    }
  }, {
    key: "relationOf",
    value: function relationOf(relationId) {
      return this.relations.find(function (r) {
        return r.id === relationId;
      });
    }
  }, {
    key: "existsStickOutPlacements",
    value: function existsStickOutPlacements() {
      var _this = this;

      return this.placements.some(function (placement) {
        return _this.isStickOut(placement);
      });
    }
  }, {
    key: "existsPlacementId",
    value: function existsPlacementId(resourceId) {
      return this.placements.some(function (placement) {
        return placement.resourceId === resourceId;
      });
    }
  }, {
    key: "isStickOut",
    value: function isStickOut(placement) {
      var p = placement;
      return p.x + p.width > this.width || p.y + p.height > this.height;
    }
  }, {
    key: "existsRelationId",
    value: function existsRelationId(relationId) {
      return this.relations.some(function (relation) {
        return relation.id === relationId;
      });
    }
  }, {
    key: "type",
    get: function get() {
      return _domain_diagram_DiagramType__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"].ofId(this.typeId);
    }
  }, {
    key: "canvasGuideType",
    get: function get() {
      return _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_21__["default"].ofId(this.canvasGuideTypeId);
    }
  }, {
    key: "ngType",
    value: function ngType(resourceType) {
      return !this.availableResourceTypes().some(function (type) {
        return type.equals(resourceType);
      });
    }
  }, {
    key: "allRelations",
    value: function allRelations() {
      return new _relation_Relations__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"](this.relations.slice());
    }
  }, {
    key: "with",
    value: function _with(name) {
      return new Diagram(this.id, this.typeId, name.trim(), this.relations, this.placements, this.width, this.height, this.canvasGuideTypeId);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return new Diagram(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideTypeId);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return new Diagram(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideTypeId);
    }
    /**
     * 現在のサイズではみ出しているものを削除。
     */

  }, {
    key: "fixStickOuts",
    value: function fixStickOuts() {
      var deletePlacements = [];
      var survivePlacements = [];

      var _iterator = _createForOfIteratorHelper(this.placements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var placement = _step.value;
          if (this.isStickOut(placement)) deletePlacements.push(placement);else survivePlacements.push(placement);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var surviveRelations = this.relations.filter(function (relation) {
        return !deletePlacements.some(function (p) {
          return relation.isRelatedTo(p.resourceId);
        });
      });
      return this.replacePlacement(survivePlacements).replaceRelations(surviveRelations);
    }
  }, {
    key: "removeResouceOf",
    value: function removeResouceOf(resource) {
      var resourceId = resource.resourceId;
      return new Diagram(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideTypeId);
    }
  }], [{
    key: "genericPrototypeOf",
    value: function genericPrototypeOf(newDiagramId, name, diagramType, _resources) {
      return new Diagram(newDiagramId, diagramType.id, name.trim(), [], [], 1024, 768, _components_diagrams_editor_toolbar_CanvasGuideType__WEBPACK_IMPORTED_MODULE_21__["default"].なし.id);
    }
  }]);

  return Diagram;
}();


Diagram.NAME_MAX_LENGTH = 128;
Diagram.MAX_WIDTH = 7680;
Diagram.MAX_HEIGHT = 4320;

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImportProgressStep; });
var ProductImportProgressStep;

(function (ProductImportProgressStep) {
  ProductImportProgressStep[ProductImportProgressStep["\u30A8\u30E9\u30FC"] = -2] = "\u30A8\u30E9\u30FC";
  ProductImportProgressStep[ProductImportProgressStep["\u5931\u6557"] = -1] = "\u5931\u6557";
  ProductImportProgressStep[ProductImportProgressStep["\u30AD\u30E3\u30F3\u30BB\u30EB"] = 0] = "\u30AD\u30E3\u30F3\u30BB\u30EB";
  ProductImportProgressStep[ProductImportProgressStep["\u958B\u59CB"] = 1] = "\u958B\u59CB";
  ProductImportProgressStep[ProductImportProgressStep["\u30D5\u30A1\u30A4\u30EB\u8AAD\u307F\u8FBC\u307F"] = 2] = "\u30D5\u30A1\u30A4\u30EB\u8AAD\u307F\u8FBC\u307F";
  ProductImportProgressStep[ProductImportProgressStep["\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF"] = 3] = "\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF";
  ProductImportProgressStep[ProductImportProgressStep["\u8FFD\u52A0"] = 4] = "\u8FFD\u52A0";
  ProductImportProgressStep[ProductImportProgressStep["\u4FDD\u5B58"] = 5] = "\u4FDD\u5B58";
  ProductImportProgressStep[ProductImportProgressStep["\u5B8C\u4E86"] = 6] = "\u5B8C\u4E86";
  ProductImportProgressStep[ProductImportProgressStep["\u6210\u529F"] = 7] = "\u6210\u529F";
})(ProductImportProgressStep || (ProductImportProgressStep = {}));

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(557);
module.exports = __webpack_require__(558);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasGuideType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(266);
/* harmony import */ var draw2d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draw2d__WEBPACK_IMPORTED_MODULE_4__);






var CanvasGuideType = /*#__PURE__*/function () {
  function CanvasGuideType(id, iconKey, caption, canvasPolicy) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CanvasGuideType);

    this.id = id;
    this.iconKey = iconKey;
    this.caption = caption;
    this.canvasPolicy = canvasPolicy;
    CanvasGuideType.vs.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CanvasGuideType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return (other === null || other === void 0 ? void 0 : other.iconKey) === this.iconKey;
    }
  }], [{
    key: "values",
    value: function values() {
      return CanvasGuideType.vs;
    }
  }, {
    key: "ofId",
    value: function ofId(id) {
      var found = this.vs.find(function (item) {
        return item.id === id;
      });
      if (found) return found;
      return CanvasGuideType.なし;
    }
  }, {
    key: "ofIconKey",
    value: function ofIconKey(iconKey) {
      var found = this.vs.find(function (item) {
        return item.iconKey === iconKey;
      });
      if (found) return found;
      return CanvasGuideType.なし;
    }
  }]);

  return CanvasGuideType;
}();


CanvasGuideType.vs = [];
CanvasGuideType.なし = new CanvasGuideType(1, "mdi-grid-off", "なし(白地)", null);
CanvasGuideType.グリッド = new CanvasGuideType(2, "mdi-grid", "グリッド(方眼・格子状)", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.policy.canvas.SnapToGridEditPolicy());
CanvasGuideType.ジオメトリ = new CanvasGuideType(3, "mdi-crop", "ジオメトリ(他アイコン位置をガイド)", new draw2d__WEBPACK_IMPORTED_MODULE_4___default.a.policy.canvas.SnapToGeometryEditPolicy());

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Placement; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var Placement = /*#__PURE__*/function () {
  function Placement(x, y, width, height, resourceId) {
    var alias = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Placement);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.resourceId = resourceId;
    this.alias = alias;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Placement, [{
    key: "resize",
    value: function resize(width, height) {
      return new Placement(this.x, this.y, width, height, this.resourceId, this.alias);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      return new Placement(x, y, this.width, this.height, this.resourceId, this.alias);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Placement(this.x, this.y, this.width, this.height, this.resourceId, this.alias);
    }
  }]);

  return Placement;
}();



/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_21b96a13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(364);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_21b96a13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_21b96a13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-21b96a13]{font-size:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 375,
	"./af.js": 375,
	"./ar": 376,
	"./ar-dz": 377,
	"./ar-dz.js": 377,
	"./ar-kw": 378,
	"./ar-kw.js": 378,
	"./ar-ly": 379,
	"./ar-ly.js": 379,
	"./ar-ma": 380,
	"./ar-ma.js": 380,
	"./ar-sa": 381,
	"./ar-sa.js": 381,
	"./ar-tn": 382,
	"./ar-tn.js": 382,
	"./ar.js": 376,
	"./az": 383,
	"./az.js": 383,
	"./be": 384,
	"./be.js": 384,
	"./bg": 385,
	"./bg.js": 385,
	"./bm": 386,
	"./bm.js": 386,
	"./bn": 387,
	"./bn-bd": 388,
	"./bn-bd.js": 388,
	"./bn.js": 387,
	"./bo": 389,
	"./bo.js": 389,
	"./br": 390,
	"./br.js": 390,
	"./bs": 391,
	"./bs.js": 391,
	"./ca": 392,
	"./ca.js": 392,
	"./cs": 393,
	"./cs.js": 393,
	"./cv": 394,
	"./cv.js": 394,
	"./cy": 395,
	"./cy.js": 395,
	"./da": 396,
	"./da.js": 396,
	"./de": 397,
	"./de-at": 398,
	"./de-at.js": 398,
	"./de-ch": 399,
	"./de-ch.js": 399,
	"./de.js": 397,
	"./dv": 400,
	"./dv.js": 400,
	"./el": 401,
	"./el.js": 401,
	"./en-au": 402,
	"./en-au.js": 402,
	"./en-ca": 403,
	"./en-ca.js": 403,
	"./en-gb": 404,
	"./en-gb.js": 404,
	"./en-ie": 405,
	"./en-ie.js": 405,
	"./en-il": 406,
	"./en-il.js": 406,
	"./en-in": 407,
	"./en-in.js": 407,
	"./en-nz": 408,
	"./en-nz.js": 408,
	"./en-sg": 409,
	"./en-sg.js": 409,
	"./eo": 410,
	"./eo.js": 410,
	"./es": 411,
	"./es-do": 412,
	"./es-do.js": 412,
	"./es-mx": 413,
	"./es-mx.js": 413,
	"./es-us": 414,
	"./es-us.js": 414,
	"./es.js": 411,
	"./et": 415,
	"./et.js": 415,
	"./eu": 416,
	"./eu.js": 416,
	"./fa": 417,
	"./fa.js": 417,
	"./fi": 418,
	"./fi.js": 418,
	"./fil": 419,
	"./fil.js": 419,
	"./fo": 420,
	"./fo.js": 420,
	"./fr": 421,
	"./fr-ca": 422,
	"./fr-ca.js": 422,
	"./fr-ch": 423,
	"./fr-ch.js": 423,
	"./fr.js": 421,
	"./fy": 424,
	"./fy.js": 424,
	"./ga": 425,
	"./ga.js": 425,
	"./gd": 426,
	"./gd.js": 426,
	"./gl": 427,
	"./gl.js": 427,
	"./gom-deva": 428,
	"./gom-deva.js": 428,
	"./gom-latn": 429,
	"./gom-latn.js": 429,
	"./gu": 430,
	"./gu.js": 430,
	"./he": 431,
	"./he.js": 431,
	"./hi": 432,
	"./hi.js": 432,
	"./hr": 433,
	"./hr.js": 433,
	"./hu": 434,
	"./hu.js": 434,
	"./hy-am": 435,
	"./hy-am.js": 435,
	"./id": 436,
	"./id.js": 436,
	"./is": 437,
	"./is.js": 437,
	"./it": 438,
	"./it-ch": 439,
	"./it-ch.js": 439,
	"./it.js": 438,
	"./ja": 440,
	"./ja.js": 440,
	"./jv": 441,
	"./jv.js": 441,
	"./ka": 442,
	"./ka.js": 442,
	"./kk": 443,
	"./kk.js": 443,
	"./km": 444,
	"./km.js": 444,
	"./kn": 445,
	"./kn.js": 445,
	"./ko": 446,
	"./ko.js": 446,
	"./ku": 447,
	"./ku.js": 447,
	"./ky": 448,
	"./ky.js": 448,
	"./lb": 449,
	"./lb.js": 449,
	"./lo": 450,
	"./lo.js": 450,
	"./lt": 451,
	"./lt.js": 451,
	"./lv": 452,
	"./lv.js": 452,
	"./me": 453,
	"./me.js": 453,
	"./mi": 454,
	"./mi.js": 454,
	"./mk": 455,
	"./mk.js": 455,
	"./ml": 456,
	"./ml.js": 456,
	"./mn": 457,
	"./mn.js": 457,
	"./mr": 458,
	"./mr.js": 458,
	"./ms": 459,
	"./ms-my": 460,
	"./ms-my.js": 460,
	"./ms.js": 459,
	"./mt": 461,
	"./mt.js": 461,
	"./my": 462,
	"./my.js": 462,
	"./nb": 463,
	"./nb.js": 463,
	"./ne": 464,
	"./ne.js": 464,
	"./nl": 465,
	"./nl-be": 466,
	"./nl-be.js": 466,
	"./nl.js": 465,
	"./nn": 467,
	"./nn.js": 467,
	"./oc-lnc": 468,
	"./oc-lnc.js": 468,
	"./pa-in": 469,
	"./pa-in.js": 469,
	"./pl": 470,
	"./pl.js": 470,
	"./pt": 471,
	"./pt-br": 472,
	"./pt-br.js": 472,
	"./pt.js": 471,
	"./ro": 473,
	"./ro.js": 473,
	"./ru": 474,
	"./ru.js": 474,
	"./sd": 475,
	"./sd.js": 475,
	"./se": 476,
	"./se.js": 476,
	"./si": 477,
	"./si.js": 477,
	"./sk": 478,
	"./sk.js": 478,
	"./sl": 479,
	"./sl.js": 479,
	"./sq": 480,
	"./sq.js": 480,
	"./sr": 481,
	"./sr-cyrl": 482,
	"./sr-cyrl.js": 482,
	"./sr.js": 481,
	"./ss": 483,
	"./ss.js": 483,
	"./sv": 484,
	"./sv.js": 484,
	"./sw": 485,
	"./sw.js": 485,
	"./ta": 486,
	"./ta.js": 486,
	"./te": 487,
	"./te.js": 487,
	"./tet": 488,
	"./tet.js": 488,
	"./tg": 489,
	"./tg.js": 489,
	"./th": 490,
	"./th.js": 490,
	"./tk": 491,
	"./tk.js": 491,
	"./tl-ph": 492,
	"./tl-ph.js": 492,
	"./tlh": 493,
	"./tlh.js": 493,
	"./tr": 494,
	"./tr.js": 494,
	"./tzl": 495,
	"./tzl.js": 495,
	"./tzm": 496,
	"./tzm-latn": 497,
	"./tzm-latn.js": 497,
	"./tzm.js": 496,
	"./ug-cn": 498,
	"./ug-cn.js": 498,
	"./uk": 499,
	"./uk.js": 499,
	"./ur": 500,
	"./ur.js": 500,
	"./uz": 501,
	"./uz-latn": 502,
	"./uz-latn.js": 502,
	"./uz.js": 501,
	"./vi": 503,
	"./vi.js": 503,
	"./x-pseudo": 504,
	"./x-pseudo.js": 504,
	"./yo": 505,
	"./yo.js": 505,
	"./zh-cn": 506,
	"./zh-cn.js": 506,
	"./zh-hk": 507,
	"./zh-hk.js": 507,
	"./zh-mo": 508,
	"./zh-mo.js": 508,
	"./zh-tw": 509,
	"./zh-tw.js": 509
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 606;

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImportError; });
var ProductImportError;

(function (ProductImportError) {
  ProductImportError[ProductImportError["\u306A\u3057"] = 0] = "\u306A\u3057";
  ProductImportError[ProductImportError["\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC"] = 1] = "\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC";
  ProductImportError[ProductImportError["\u30D5\u30A1\u30A4\u30EB\u540D\u4E0D\u6B63"] = 2] = "\u30D5\u30A1\u30A4\u30EB\u540D\u4E0D\u6B63";
  ProductImportError[ProductImportError["\u30B5\u30A4\u30BA\u8D85\u904E"] = 3] = "\u30B5\u30A4\u30BA\u8D85\u904E";
  ProductImportError[ProductImportError["\u975EJSON\u5F62\u5F0F"] = 4] = "\u975EJSON\u5F62\u5F0F";
  ProductImportError[ProductImportError["\u8AAD\u8FBC\u5931\u6557"] = 5] = "\u8AAD\u8FBC\u5931\u6557";
  ProductImportError[ProductImportError["\u30D7\u30ED\u30C0\u30AF\u30C8\u540D\u4E0D\u660E"] = 6] = "\u30D7\u30ED\u30C0\u30AF\u30C8\u540D\u4E0D\u660E";
})(ProductImportError || (ProductImportError = {}));

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_f704e534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(512);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_f704e534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_f704e534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-f704e534]{display:flex;height:100%;width:100%;max-width:none;padding-right:0;padding-left:0;margin-right:unset;margin-left:unset;position:absolute}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{overflow-y:hidden}.auther-link{text-decoration:none}.no-efect-link,.no-efect-link:active,.no-efect-link:hover,.no-efect-link:link,.no-efect-link:visited{text-decoration:none;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(193);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppricationStatus = /*#__PURE__*/function (_VuexModule) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AppricationStatus, _VuexModule);

  var _super = _createSuper(AppricationStatus);

  function AppricationStatus() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AppricationStatus);

    _this = _super.apply(this, arguments);
    _this.wheels = 2;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AppricationStatus, [{
    key: "incrWheels",
    value: function incrWheels(extra) {
      this.wheels += extra;
    }
  }, {
    key: "axles",
    get: function get() {
      return this.wheels / 2;
    }
  }]);

  return AppricationStatus;
}(vuex_module_decorators__WEBPACK_IMPORTED_MODULE_9__["VuexModule"]);

__decorate([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_9__["Mutation"]], AppricationStatus.prototype, "incrWheels", null);

AppricationStatus = __decorate([Object(vuex_module_decorators__WEBPACK_IMPORTED_MODULE_9__["Module"])({
  name: 'applicationstatus',
  stateFactory: true,
  namespaced: true
})], AppricationStatus);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _domain_Serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(262);








var Resource = /*#__PURE__*/function () {
  function Resource(resourceId, resourceTypeId, name, description) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Resource);

    this.resourceId = resourceId;
    this.resourceTypeId = resourceTypeId;
    this.name = name;
    this.description = description;
    this.deletable = true;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Resource, [{
    key: "with",
    value: function _with(name, description) {
      var clone = this.clone();
      clone.name = name;
      clone.description = description;
      return clone;
    }
  }, {
    key: "withName",
    value: function withName(name) {
      var clone = this.clone();
      clone.name = name;
      return clone;
    }
  }, {
    key: "renewId",
    value: function renewId(newResourceId) {
      var clone = this.clone();
      clone.resourceId = newResourceId;
      return clone;
    }
  }, {
    key: "type",
    get: function get() {
      return _ResourceType__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].ofId(this.resourceTypeId);
    }
  }, {
    key: "clone",
    value: function clone() {
      var serializer = new _domain_Serializer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]();
      return serializer.cloningOf(this);
    }
  }]);

  return Resource;
}();


Resource.YET_NUMBERING_ID = 0;
Resource.NAME_MAX_LENGTH = 128;
Resource.DESCRIPTION_MAX_LENGTH = 512;

/***/ })

},[[556,95,5,96]]]);