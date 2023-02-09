(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Resources_Resources; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(83);

// EXTERNAL MODULE: ./src/domain/resource/ResourceFactory.ts
var ResourceFactory = __webpack_require__(237);

// EXTERNAL MODULE: ./src/domain/relation/RouterType.ts
var RouterType = __webpack_require__(213);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts + 1 modules
var ResourceType = __webpack_require__(3);

// CONCATENATED MODULE: ./src/domain/relation/RelationWithResources.ts





var RelationWithResources_RelationWithResources = /*#__PURE__*/function () {
  function RelationWithResources(source, fromResource, toResource, routerType) {
    Object(classCallCheck["a" /* default */])(this, RelationWithResources);

    this.source = source;
    this.fromResource = fromResource;
    this.toResource = toResource;
    this.routerType = routerType;
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
    key: "existsAnyTypes",
    value: function existsAnyTypes() {
      for (var _len = arguments.length, resourceTypes = new Array(_len), _key = 0; _key < _len; _key++) {
        resourceTypes[_key] = arguments[_key];
      }

      for (var _i = 0, _resourceTypes = resourceTypes; _i < _resourceTypes.length; _i++) {
        var type = _resourceTypes[_i];
        if (this.existsType(type)) return true;
      }

      return false;
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
      return new RelationWithResources(relation, fromResource, toResource, RouterType["a" /* default */].ofId(relation.routerTypeId));
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
    key: "existsSameOf",
    value: function existsSameOf(resource) {
      return this.values.some(function (r) {
        return r.sameOf(resource);
      });
    }
  }, {
    key: "existsSameTypeAndName",
    value: function existsSameTypeAndName(name, resourceType) {
      return this.values.some(function (d) {
        return d.name === name && d.type.equals(resourceType);
      });
    }
  }, {
    key: "getSameOf",
    value: function getSameOf(resource) {
      return this.values.find(function (r) {
        return r.sameOf(resource);
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
    key: "mergeByIdOf",
    value: function mergeByIdOf(resource) {
      var newValues = this.values.map(function (r) {
        return r.resourceId === resource.resourceId ? resource : r;
      });
      if (newValues.every(function (p) {
        return p !== resource;
      })) newValues.push(resource);
      return new Resources(newValues);
    }
  }, {
    key: "mergeBySameOf",
    value: function mergeBySameOf(resource) {
      var newValues = this.values.map(function (r) {
        return r.sameOf(resource) ? resource : r;
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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartOrEndPoint; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(193);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3);













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

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].始点終点.id, name, description);
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
  }, {
    key: "clone",
    value: function clone() {
      return new StartOrEndPoint(this.resourceId, this.name, this.description, this.deletable, this.startPoint);
    }
  }]);

  return StartOrEndPoint;
}(_Resource__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);



/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasContentResource; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(193);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83);











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

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConflictNameBehavior; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);





var ConflictNameBehavior = /*#__PURE__*/function () {
  function ConflictNameBehavior(behavior, sourceName, destinationName, sourceId, sourceType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ConflictNameBehavior);

    this.behavior = behavior;
    this.sourceName = sourceName;
    this.destinationName = destinationName;
    this.sourceId = sourceId;
    this.sourceType = sourceType;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ConflictNameBehavior, [{
    key: "isNotAriasNameOfBehavior",
    value: function isNotAriasNameOfBehavior() {
      return this.behavior !== _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_3__[/* BehaviorWhenNameConflict */ "a"].別名;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.sourceName.length === 0 && this.destinationName.length === 0;
    }
  }, {
    key: "with",
    value: function _with(behavior) {
      var destinationName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return new ConflictNameBehavior(behavior, this.sourceName, destinationName, this.sourceId, this.sourceType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(sourceName, sourceId, sourceType) {
      var behavior = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_3__[/* BehaviorWhenNameConflict */ "a"].既存;
      return new ConflictNameBehavior(behavior, sourceName, "", sourceId, sourceType);
    }
  }, {
    key: "prototypeDiagramOf",
    value: function prototypeDiagramOf(diagram) {
      return this.prototypeOf(diagram.name, diagram.id, diagram.type.id, _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_3__[/* BehaviorWhenNameConflict */ "a"].置換);
    }
  }, {
    key: "prototypeResourceOf",
    value: function prototypeResourceOf(resouce) {
      return this.prototypeOf(resouce.name, resouce.resourceId, resouce.type.id, _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_3__[/* BehaviorWhenNameConflict */ "a"].既存);
    }
  }, {
    key: "empty",
    value: function empty() {
      return this.prototypeOf("", 0, 1, _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_3__[/* BehaviorWhenNameConflict */ "a"].既存);
    }
  }]);

  return ConflictNameBehavior;
}();



/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableTypeCondition; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3);













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

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].表形式の条件.id, name, description);
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
  }, {
    key: "clone",
    value: function clone() {
      return new TableTypeCondition(this.resourceId, this.name, this.description, this.leftVariationId, this.topVariationId, this.values);
    }
  }]);

  return TableTypeCondition;
}(_Resource__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


TableTypeCondition.NOTHING_VARIATION_ID = 0;

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=template&id=21b96a13&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"dark":""}},[(_vm.error.statusCode === 404)?_c('h1',[_vm._v("\n    "+_vm._s(_vm.pageNotFound)+"\n  ")]):_c('h1',[_vm._v("\n    "+_vm._s(_vm.otherError)+"\n  ")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("\n    Home page\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=template&id=21b96a13&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

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
var errorvue_type_style_index_0_id_21b96a13_scoped_true_lang_css_ = __webpack_require__(656);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(820);

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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserArrangeOfImportDiagram; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _domain_diagram_import_conflictname_ConflictNameBehavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(120);





var UserArrangeOfImportDiagram = /*#__PURE__*/function () {
  function UserArrangeOfImportDiagram(sourceDiagramName, conflictDiagramName, conflictResourceNames, diagramType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, UserArrangeOfImportDiagram);

    this.sourceDiagramName = sourceDiagramName;
    this.conflictDiagramName = conflictDiagramName;
    this.conflictResourceNames = conflictResourceNames;
    this.diagramType = diagramType;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(UserArrangeOfImportDiagram, [{
    key: "withDiagramName",
    value: function withDiagramName(diagramNamesOfColided) {
      return new UserArrangeOfImportDiagram(this.sourceDiagramName, diagramNamesOfColided, this.conflictResourceNames, this.diagramType);
    }
  }, {
    key: "withResourceNames",
    value: function withResourceNames(resourceNamesOfColided) {
      return new UserArrangeOfImportDiagram(this.sourceDiagramName, this.conflictDiagramName, resourceNamesOfColided, this.diagramType);
    }
  }, {
    key: "isColidedDiagramName",
    value: function isColidedDiagramName() {
      return !this.conflictDiagramName.isEmpty();
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.isColidedDiagramName() && this.conflictResourceNames.length === 0;
    }
  }], [{
    key: "empty",
    value: function empty() {
      return new UserArrangeOfImportDiagram("", _domain_diagram_import_conflictname_ConflictNameBehavior__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].empty(), [], _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].システムコンテキスト図);
    }
  }]);

  return UserArrangeOfImportDiagram;
}();



/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Condition; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3);












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

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].条件.id, name, description);
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
  }, {
    key: "clone",
    value: function clone() {
      return new Condition(this.resourceId, this.name, this.description, this.value);
    }
  }]);

  return Condition;
}(_Resource__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);


Condition.CONDITION_VALUE_MAX_LENGTH = 128;

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Variation; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3);













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

    _this = _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].バリエーション.id, name, description);
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
  }, {
    key: "clone",
    value: function clone() {
      return new Variation(this.resourceId, this.name, this.description, this.values);
    }
  }]);

  return Variation;
}(_Resource__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


Variation.CONDITION_VALUE_MAX_LENGTH = 128;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagram; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _type_DiagramTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(250);
/* harmony import */ var _domain_relation_Relations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(277);
/* harmony import */ var _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(279);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





















var Diagram = /*#__PURE__*/function () {
  function Diagram(id, typeId, name, relations, // TODO Relationsに置き換えたい
  placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Diagram);

    this.id = id;
    this.typeId = typeId;
    this.name = name;
    this.relations = relations;
    this.placements = placements;
    this.width = width;
    this.height = height;
    this.canvasGuideType = canvasGuideType;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Diagram, [{
    key: "relationable",
    value: function relationable(relationPlus) {
      var relations = this.allRelations();
      var message = this.relationableLocalRuleOnDiagramOf(relationPlus);
      if (message !== "") return message;

      if (relationPlus.fromType.equals(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"].始点終点)) {
        var startPoint = relationPlus.fromResource;

        if (startPoint.startPoint) {
          if (relations.existsFromResource(startPoint)) {
            return "始点からは一つの関連しか引けません。";
          }
        }
      }

      return "";
    }
  }, {
    key: "relationableLocalRuleOnDiagramOf",
    value: function relationableLocalRuleOnDiagramOf(relationPlus) {
      var relation = relationPlus.source;
      var relations = this.allRelations();
      return relations.existsOrReversivle(relation) ? "すでに関連が存在します。" : "";
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      var type = resource.type;
      if (this.ngType(type)) return null;
      return new _domain_diagram_placement_Placement__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"](left, top, type.defaultWidth, type.defaultHeight, resource.resourceId, false);
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
    key: "reIdOf",
    value: function reIdOf(newId) {
      return this.cloneWith(newId, this.name);
    }
  }, {
    key: "renameOf",
    value: function renameOf(newName) {
      return this.cloneWith(this.id, newName);
    }
  }, {
    key: "replaceRelations",
    value: function replaceRelations(relations) {
      return this.renew(this.id, this.typeId, this.name, relations, this.placements, this.width, this.height, this.canvasGuideType);
    }
  }, {
    key: "replacePlacement",
    value: function replacePlacement(placements) {
      return this.renew(this.id, this.typeId, this.name, this.relations, placements, this.width, this.height, this.canvasGuideType);
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
  }, {
    key: "replaceOf",
    value: function replaceOf(srcResource, destResource) {
      var srcId = srcResource.resourceId;
      var destId = destResource.resourceId;
      var placements = this.placements.map(function (p) {
        return p.resourceId === srcId ? p.withResourceOf(destResource) : p;
      });
      var relations = this.relations.map(function (r) {
        return r.fromResourceId === srcId ? r.withFrom(destId) : r;
      }).map(function (r) {
        return r.toResourceId === srcId ? r.withTo(destId) : r;
      });
      return this.replacePlacement(placements).replaceRelations(relations);
    }
  }, {
    key: "modifyRelationOf",
    value: function modifyRelationOf(relation) {
      var newRelations = this.relations.map(function (r) {
        return r.id === relation.id ? relation : r;
      });
      return this.replaceRelations(newRelations);
    }
  }, {
    key: "addRelation",
    value: function addRelation(relation) {
      var newValues = Array.from(this.relations);
      newValues.push(relation);
      return this.replaceRelations(newValues);
    }
  }, {
    key: "addPlacement",
    value: function addPlacement(placement) {
      var newValues = Array.from(this.placements);
      newValues.push(placement);
      return this.replacePlacement(newValues);
    }
  }, {
    key: "sameOf",
    value: function sameOf(other) {
      return this.type.equals(other.type) && this.name === other.name;
    }
  }, {
    key: "existsSameOf",
    value: function existsSameOf(relation) {
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
    key: "existsResourceOnPlacementOf",
    value: function existsResourceOnPlacementOf(resourceId) {
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
      return _type_DiagramTypes__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].byId(this.typeId);
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
      return new _domain_relation_Relations__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"](this.relations.slice());
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      return this.renew(this.id, this.typeId, this.name, this.relations, this.placements, width, height, this.canvasGuideType);
    }
  }, {
    key: "cloneWith",
    value: function cloneWith(newDiagramId, newName) {
      return this.renew(newDiagramId, this.typeId, newName, this.relations.map(function (relation) {
        return relation.clone();
      }), this.placements.map(function (placement) {
        return placement.clone();
      }), this.width, this.height, this.canvasGuideType);
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
      return this.renew(this.id, this.typeId, this.name, this.relations.filter(function (r) {
        return !r.isRelatedTo(resourceId);
      }), this.placements.filter(function (p) {
        return p.resourceId !== resourceId;
      }), this.width, this.height, this.canvasGuideType);
    }
  }]);

  return Diagram;
}();


Diagram.NAME_MAX_LENGTH = 128;
Diagram.MAX_WIDTH = 7680;
Diagram.MAX_HEIGHT = 4320;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Product_Product; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(37);

// EXTERNAL MODULE: ./src/domain/setting/UserSettings.ts
var UserSettings = __webpack_require__(276);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(108);

// EXTERNAL MODULE: ./src/domain/world/Uuid.ts
var Uuid = __webpack_require__(360);

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
var Diagrams = __webpack_require__(242);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts + 1 modules
var ResourceType = __webpack_require__(3);

// EXTERNAL MODULE: ./src/domain/resource/ResourceFactory.ts
var ResourceFactory = __webpack_require__(237);

// EXTERNAL MODULE: ./src/domain/resource/StartOrEndPoint.ts
var StartOrEndPoint = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.delete-all.js
var esnext_map_delete_all = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.every.js
var esnext_map_every = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.filter.js
var esnext_map_filter = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find.js
var esnext_map_find = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find-key.js
var esnext_map_find_key = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.includes.js
var esnext_map_includes = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.key-of.js
var esnext_map_key_of = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-keys.js
var esnext_map_map_keys = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-values.js
var esnext_map_map_values = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.merge.js
var esnext_map_merge = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.reduce.js
var esnext_map_reduce = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.some.js
var esnext_map_some = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.update.js
var esnext_map_update = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/Rdra20DiagramType.ts
var Rdra20DiagramType = __webpack_require__(33);

// CONCATENATED MODULE: ./src/domain/diagram/correspond/CorrespondResourceTypes.ts






















/**
 * 図対応するリソースタイプの定義を責務とするクラス。
 * <p/>
 * 図とリソースの静的な関係の定義を司る。
 */

var CorrespondResourceTypes_CorrespondResourceTypes = /*#__PURE__*/function () {
  function CorrespondResourceTypes() {
    Object(classCallCheck["a" /* default */])(this, CorrespondResourceTypes);
  }

  Object(createClass["a" /* default */])(CorrespondResourceTypes, [{
    key: "correspondingDiagramTypesOf",
    value: function correspondingDiagramTypesOf(resourceType) {
      var result = CorrespondResourceTypes.MAP.get(resourceType.id);
      if (!result) return [];
      return result.slice();
    }
  }, {
    key: "hasCorrespondingDiagramTypeOf",
    value: function hasCorrespondingDiagramTypeOf(resourceType) {
      return this.correspondingDiagramTypesOf(resourceType).length > 0;
    }
  }]);

  return CorrespondResourceTypes;
}();


CorrespondResourceTypes_CorrespondResourceTypes.MAP = new Map([[ResourceType["a" /* default */].業務.id, [Rdra20DiagramType["a" /* default */].ビジネスユースケース図]], [ResourceType["a" /* default */].ビジネスユースケース.id, [Rdra20DiagramType["a" /* default */].ユースケース複合図, Rdra20DiagramType["a" /* default */].利用シーン図]]]);
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
      if (!diagram) return "指定された図がありません。";
      var relationPlus = this.resources.relationWithResourcesOf(relation);
      if (!relationPlus) return "対応するリソースがありません。";
      return diagram.relationable(relationPlus);
    }
  }, {
    key: "meageDiagramsByIdOf",
    value: function meageDiagramsByIdOf(newDiagrams) {
      var initialDiagrams = this.diagrams;
      var mergedDiagrams = newDiagrams.reduce(function (diagrams, diagram) {
        return diagrams.mergeByIdOf(diagram);
      }, initialDiagrams);
      return this.withDiagrams(mergedDiagrams);
    }
  }, {
    key: "meageDiagramByIdOf",
    value: function meageDiagramByIdOf(newDiagram) {
      return this.meageDiagramsByIdOf([newDiagram]);
    }
  }, {
    key: "meageResourceOf",
    value: function meageResourceOf(newResource) {
      var newResources = this.resources.mergeByIdOf(newResource);
      return this.withResources(newResources);
    }
  }, {
    key: "removeOf",
    value: function removeOf(resource) {
      return new Product(this.updateAt, this.id, this.name, this.userSettings, this.diagrams.removeResouceOf(resource), this.resources.remove(resource), this.resourceIdSequence);
    }
  }, {
    key: "withDiagrams",
    value: function withDiagrams(newDiagrams) {
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
    key: "mergeDiagramWhenSameOf",
    value: function mergeDiagramWhenSameOf(diagram) {
      var diagrams = this.diagrams.mergeWhenSameOf(diagram);
      return this.withDiagrams(diagrams);
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
      return this.withDiagrams(addedDiagrams);
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
  }, {
    key: "relateDiagramsOf",
    value: function relateDiagramsOf(resource) {
      var _this$diagrams;

      var diagramTypes = Product.correspondingDiagramTypesOf(resource);
      return (_this$diagrams = this.diagrams).typesOf.apply(_this$diagrams, Object(toConsumableArray["a" /* default */])(diagramTypes)).findByNameOf(resource.name);
    }
  }, {
    key: "diagramsOfResourceRelate",
    value: function diagramsOfResourceRelate(resourceId) {
      var resource = this.resources.of(resourceId);
      if (!resource) return Diagrams["a" /* default */].empty();
      return this.relateDiagramsOf(resource);
    } // utility methods.

  }], [{
    key: "correspondingDiagramTypesOf",
    value: function correspondingDiagramTypesOf(resource) {
      return this.corespondResDic().correspondingDiagramTypesOf(resource.type);
    }
  }, {
    key: "hasCorrespondingDiagramTypeOf",
    value: function hasCorrespondingDiagramTypeOf(resource) {
      return this.corespondResDic().hasCorrespondingDiagramTypeOf(resource.type);
    }
  }, {
    key: "corespondResDic",
    value: function corespondResDic() {
      return new CorrespondResourceTypes_CorrespondResourceTypes();
    } // factory methods

  }, {
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Purpose; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(115);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「目的」リソース。
 */

var Purpose = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Purpose, _HasContentResource);

  var _super = _createSuper(Purpose);

  function Purpose(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Purpose);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].目的.id, name, description, content);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Purpose, [{
    key: "clone",
    value: function clone() {
      return new Purpose(this.resourceId, this.name, this.description, this.content);
    }
  }]);

  return Purpose;
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDiagramType; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _domain_diagram_type_DiagramType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(198);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var CustomDiagramType = /*#__PURE__*/function (_DiagramType) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(CustomDiagramType, _DiagramType);

  var _super = _createSuper(CustomDiagramType);

  function CustomDiagramType(id, name, iconKey) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, CustomDiagramType);

    return _super.call(this, id, name, iconKey);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(CustomDiagramType, [{
    key: "sameTypeIdOf",
    value: function sameTypeIdOf(typeId) {
      return typeId > 1000;
    }
  }], [{
    key: "as",
    value: function as(type) {
      return CustomDiagramType.フリースタイル図.sameTypeIdOf(type.id);
    }
  }]);

  return CustomDiagramType;
}(_domain_diagram_type_DiagramType__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);


CustomDiagramType.フリースタイル図 = new CustomDiagramType(1001, 'フリースタイル図', "mdi-all-inclusive-box");

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Requirement; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(115);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「要件」リソース。
 */

var Requirement = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Requirement, _HasContentResource);

  var _super = _createSuper(Requirement);

  function Requirement(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Requirement);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].要件.id, name, description, content);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Requirement, [{
    key: "clone",
    value: function clone() {
      return new Requirement(this.resourceId, this.name, this.description, this.content);
    }
  }]);

  return Requirement;
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(115);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「要求」リソース。
 */

var Request = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Request, _HasContentResource);

  var _super = _createSuper(Request);

  function Request(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Request);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].要求.id, name, description, content);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Request, [{
    key: "clone",
    value: function clone() {
      return new Request(this.resourceId, this.name, this.description, this.content);
    }
  }]);

  return Request;
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scenario; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(115);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 「シナリオ」リソース。
 */

var Scenario = /*#__PURE__*/function (_HasContentResource) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Scenario, _HasContentResource);

  var _super = _createSuper(Scenario);

  function Scenario(resourceId, name, description, content) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Scenario);

    return _super.call(this, resourceId, _ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].シナリオ.id, name, description, content);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Scenario, [{
    key: "clone",
    value: function clone() {
      return new Scenario(this.resourceId, this.name, this.description, this.content);
    }
  }]);

  return Scenario;
}(_HasContentResource__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);




var DiagramType = /*#__PURE__*/function () {
  function DiagramType(id, name, iconKey) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DiagramType);

    this.id = id;
    this.name = name;
    this.iconKey = iconKey;
    DiagramType.ALL.push(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DiagramType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return other.id === this.id;
    }
  }]);

  return DiagramType;
}();


DiagramType.ALL = [];

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RdramProductExportFileName; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(230);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _domain_client_export_RdramExportFileName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(206);













function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var RdramProductExportFileName = /*#__PURE__*/function (_RdramExportFileName) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RdramProductExportFileName, _RdramExportFileName);

  var _super = _createSuper(RdramProductExportFileName);

  function RdramProductExportFileName(productName) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, RdramProductExportFileName);

    return _super.call(this, "product-".concat(productName));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(RdramProductExportFileName, null, [{
    key: "isApplicableOf",
    value: function isApplicableOf(fileName) {
      var pattern = new RdramProductExportFileName(".*").toString().replace(/-/g, '\\-').replace(/-[0-9]+\./, '-[0-9]+\\.');
      var hitTest = new RegExp(pattern);
      return hitTest.test(fileName);
    }
  }, {
    key: "of",
    value: function of(product) {
      return new RdramProductExportFileName(product.name);
    }
  }]);

  return RdramProductExportFileName;
}(_domain_client_export_RdramExportFileName__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


RdramProductExportFileName.TYPE_DESCRIPTION = "RDRAM product exported file (json)";

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RdramExportFileName; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _domain_client_WithTimestampFileName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(249);








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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RdramDiagramExportFileName; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(230);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _domain_client_export_RdramExportFileName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(206);













function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var RdramDiagramExportFileName = /*#__PURE__*/function (_RdramExportFileName) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RdramDiagramExportFileName, _RdramExportFileName);

  var _super = _createSuper(RdramDiagramExportFileName);

  function RdramDiagramExportFileName(diagramName) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, RdramDiagramExportFileName);

    return _super.call(this, "diagram-".concat(diagramName));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(RdramDiagramExportFileName, null, [{
    key: "isApplicableOf",
    value: function isApplicableOf(fileName) {
      var pattern = new RdramDiagramExportFileName(".*").toString().replace(/-/g, '\\-').replace(/-[0-9]+\./, '-[0-9]+\\.');
      var hitTest = new RegExp(pattern);
      return hitTest.test(fileName);
    }
  }, {
    key: "of",
    value: function of(diagram) {
      return new RdramDiagramExportFileName(diagram.name);
    }
  }]);

  return RdramDiagramExportFileName;
}(_domain_client_export_RdramExportFileName__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


RdramDiagramExportFileName.TYPE_DESCRIPTION = "RDRAM diagram exported file (json)";

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RdramLocalStorageExportFileName; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(230);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_client_export_RdramExportFileName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(206);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var RdramLocalStorageExportFileName = /*#__PURE__*/function (_RdramExportFileName) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RdramLocalStorageExportFileName, _RdramExportFileName);

  var _super = _createSuper(RdramLocalStorageExportFileName);

  function RdramLocalStorageExportFileName() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, RdramLocalStorageExportFileName);

    return _super.call(this, "localstorage-backup");
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(RdramLocalStorageExportFileName, null, [{
    key: "isApplicableOf",
    value: function isApplicableOf(fileName) {
      var pattern = new RdramLocalStorageExportFileName().toString().replace(/-/g, '\\-').replace(/-[0-9]+\./, '-[0-9]+\\.');
      var hitTest = new RegExp(pattern);
      return hitTest.test(fileName);
    }
  }]);

  return RdramLocalStorageExportFileName;
}(_domain_client_export_RdramExportFileName__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);


RdramLocalStorageExportFileName.TYPE_DESCRIPTION = "RDRAM LocalStorage exported file (json)";

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterType; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
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

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var _HasContentResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(115);
/* harmony import */ var _Purpose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(177);
/* harmony import */ var _Requirement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(195);
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(196);
/* harmony import */ var _Scenario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(197);
/* harmony import */ var _StartOrEndPoint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(112);
/* harmony import */ var _Variation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(173);
/* harmony import */ var _Condition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(172);
/* harmony import */ var _TableTypeCondition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(135);















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
      } while (nowResouces.existsSameOf(r));

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
      } while (nowResouces.existsSameOf(r));

      return r;
    }
  }]);

  return ResourceFactory;
}();



/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Diagrams_Diagrams; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.delete-all.js
var esnext_map_delete_all = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.every.js
var esnext_map_every = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.filter.js
var esnext_map_filter = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find.js
var esnext_map_find = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find-key.js
var esnext_map_find_key = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.includes.js
var esnext_map_includes = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.key-of.js
var esnext_map_key_of = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-keys.js
var esnext_map_map_keys = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-values.js
var esnext_map_map_values = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.merge.js
var esnext_map_merge = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.reduce.js
var esnext_map_reduce = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.some.js
var esnext_map_some = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.update.js
var esnext_map_update = __webpack_require__(162);

// EXTERNAL MODULE: ./src/domain/diagram/type/DiagramTypes.ts
var DiagramTypes = __webpack_require__(250);

// EXTERNAL MODULE: ./src/domain/relation/Relations.ts
var Relations = __webpack_require__(277);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/businesscontext/BusinessContextDiagram.ts
var BusinessContextDiagram = __webpack_require__(278);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/businessusecase/BusinessUseCaseDiagram.ts
var BusinessUseCaseDiagram = __webpack_require__(280);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/informationmodel/InformationModelDiagram.ts
var InformationModelDiagram = __webpack_require__(281);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/statemodel/StateModelDiagram.ts
var StateModelDiagram = __webpack_require__(282);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/systemcontext/SystemContextDiagram.ts
var SystemContextDiagram = __webpack_require__(283);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/usagescene/UsageSceneDiagram.ts
var UsageSceneDiagram = __webpack_require__(284);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/businessflow/BusinessFlowDiagram.ts
var BusinessFlowDiagram = __webpack_require__(285);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/usecasecomposite/UseCaseCompositeDiagram.ts
var UseCaseCompositeDiagram = __webpack_require__(286);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/variationandcondition/VariationAndConditionDiagram.ts
var VariationAndConditionDiagram = __webpack_require__(287);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/requrestmodel/RequestModelDiagram.ts
var RequestModelDiagram = __webpack_require__(288);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/Rdra20DiagramType.ts
var Rdra20DiagramType = __webpack_require__(33);

// EXTERNAL MODULE: ./src/domain/diagram/custom/freestyle/FreestyleDiagram.ts + 1 modules
var FreestyleDiagram = __webpack_require__(298);

// EXTERNAL MODULE: ./src/domain/diagram/custom/CustomDiagramType.ts
var CustomDiagramType = __webpack_require__(178);

// CONCATENATED MODULE: ./src/domain/diagram/DiagramFactory.ts
















var DiagramFactory_DiagramFactory = /*#__PURE__*/function () {
  function DiagramFactory(resources) {
    Object(classCallCheck["a" /* default */])(this, DiagramFactory);

    this.resources = resources;
  }

  Object(createClass["a" /* default */])(DiagramFactory, [{
    key: "create",
    value: function create(newDiagramId, name, diagramType) {
      // Rdram2.0
      if (Rdra20DiagramType["a" /* default */].システムコンテキスト図.equals(diagramType)) return SystemContextDiagram["a" /* default */].prototypeOf(newDiagramId, name, this.resources);
      if (Rdra20DiagramType["a" /* default */].要求モデル図.equals(diagramType)) return RequestModelDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (Rdra20DiagramType["a" /* default */].ビジネスコンテキスト図.equals(diagramType)) return BusinessContextDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (Rdra20DiagramType["a" /* default */].ビジネスユースケース図.equals(diagramType)) return BusinessUseCaseDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (Rdra20DiagramType["a" /* default */].業務フロー図.equals(diagramType)) return BusinessFlowDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (Rdra20DiagramType["a" /* default */].利用シーン図.equals(diagramType)) return UsageSceneDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (Rdra20DiagramType["a" /* default */].情報モデル図.equals(diagramType)) return InformationModelDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (Rdra20DiagramType["a" /* default */].状態モデル図.equals(diagramType)) return StateModelDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (Rdra20DiagramType["a" /* default */].ユースケース複合図.equals(diagramType)) return UseCaseCompositeDiagram["a" /* default */].prototypeOf(newDiagramId, name);
      if (Rdra20DiagramType["a" /* default */].バリエーション条件.equals(diagramType)) return VariationAndConditionDiagram["a" /* default */].prototypeOf(newDiagramId, name); // カスタム

      if (CustomDiagramType["a" /* default */].フリースタイル図.equals(diagramType)) return FreestyleDiagram["a" /* default */].prototypeOf(newDiagramId, name); // それ以外(未定義なものが来た時)

      throw new Error("タイプに対応する図が見つからなかった。");
    }
  }]);

  return DiagramFactory;
}();


// CONCATENATED MODULE: ./src/domain/diagram/Diagrams.ts
































var Diagrams_Diagrams = /*#__PURE__*/function () {
  function Diagrams(values) {
    Object(classCallCheck["a" /* default */])(this, Diagrams);

    this.values = values;
  } // with or part modify.


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
    } // exists or counts.

  }, {
    key: "existsSameTypeAndName",
    value: function existsSameTypeAndName(name, diagramType) {
      return this.values.some(function (d) {
        return d.name === name && d.type.equals(diagramType);
      });
    }
  }, {
    key: "existsSameOf",
    value: function existsSameOf(diagram) {
      return !!this.sameOf(diagram);
    }
  }, {
    key: "existsIdOf",
    value: function existsIdOf(diagramId) {
      return !!this.of(diagramId);
    } // search methods.

  }, {
    key: "of",
    value: function of(diagramId) {
      return this.values.find(function (diagram) {
        return diagram.id === diagramId;
      });
    }
  }, {
    key: "sameOf",
    value: function sameOf(diagram) {
      return this.values.find(function (d) {
        return d.sameOf(diagram);
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
    key: "findByNameOf",
    value: function findByNameOf(name) {
      var diagrams = this.values.filter(function (diagram) {
        return diagram.name === name;
      });
      return new Diagrams(diagrams);
    }
  }, {
    key: "using",
    value: function using(resource) {
      var values = this.values.filter(function (diagram) {
        return diagram.usingOf(resource);
      });
      return new Diagrams(values);
    } // modify and return method.

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
    key: "mergeByIdOf",
    value: function mergeByIdOf(diagram) {
      return this.remove(diagram).add(diagram);
    }
  }, {
    key: "mergeWhenSameOf",
    value: function mergeWhenSameOf(diagram) {
      var sameDiagram = this.sameOf(diagram);
      var newId = sameDiagram ? sameDiagram.id : this.generateDiagramId();
      var reIdDiagram = diagram.reIdOf(newId);
      return this.mergeByIdOf(reIdDiagram);
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
    } // lambda function.

  }, {
    key: "forEach",
    value: function forEach(func) {
      this.values.forEach(func);
    }
  }, {
    key: "map",
    value: function map(callbackfn) {
      return this.values.map(callbackfn);
    } // factory methods.

  }, {
    key: "last",
    value: // get methods.
    function last() {
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
  }, {
    key: "groupOfType",
    value: function groupOfType() {
      var map = new Map();
      DiagramTypes["a" /* default */].ALL_TYPES.forEach(function (type) {
        return map.set(type, []);
      });
      this.values.forEach(function (d) {
        var _a;

        return (_a = map.get(d.type)) === null || _a === void 0 ? void 0 : _a.push(d);
      });
      return map;
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
  }], [{
    key: "empty",
    value: function empty() {
      return new Diagrams([]);
    }
  }, {
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Diagrams([]);
    }
  }]);

  return Diagrams;
}();



/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithTimestampFileName; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
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

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramTypes; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DiagramType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(198);
/* harmony import */ var _domain_diagram_custom_CustomDiagramType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(178);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);









var DiagramTypes = /*#__PURE__*/function () {
  function DiagramTypes() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DiagramTypes);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DiagramTypes, null, [{
    key: "record",
    value: function record(type) {
      DiagramTypes.ALL_TYPES.push(type);
    }
  }, {
    key: "byId",
    value: function byId(typeId) {
      return this.ALL_TYPES.find(function (t) {
        return t.id === typeId;
      });
    }
  }]);

  return DiagramTypes;
}();


DiagramTypes.ALL_TYPES = _DiagramType__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].ALL;
DiagramTypes.RDRA20_TYPES = DiagramTypes.ALL_TYPES.filter(function (t) {
  return _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].システムコンテキスト図.sameTypeIdOf(t.id);
});
DiagramTypes.CUSTOM_TYPES = DiagramTypes.ALL_TYPES.filter(function (t) {
  return _domain_diagram_custom_CustomDiagramType__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].フリースタイル図.sameTypeIdOf(t.id);
});

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettings; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relations; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(149);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(150);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(151);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(152);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(153);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(154);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(155);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(156);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(157);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(158);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(159);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(160);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(161);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(162);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(114);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(302);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(39);
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

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessContextDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var BusinessContextDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(BusinessContextDiagram, _Rdra20Diagram);

  var _super = _createSuper(BusinessContextDiagram);

  function BusinessContextDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, BusinessContextDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessContextDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].業務, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].商品, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].建物, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].契約, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].サービス, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].組織, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].会社, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].自社システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].情報];
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new BusinessContextDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new BusinessContextDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].ビジネスコンテキスト図.id, name.trim(), [], [], 1024, 768, _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__[/* CanvasGuideType */ "a"].NOTHING);
    }
  }]);

  return BusinessContextDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Placement; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



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
    key: "withResourceIdOf",
    value: function withResourceIdOf(resourceId) {
      return new Placement(this.x, this.y, this.width, this.height, resourceId, this.alias);
    }
  }, {
    key: "withResourceOf",
    value: function withResourceOf(resource) {
      return this.withResourceIdOf(resource.resourceId);
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

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessUseCaseDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var BusinessUseCaseDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(BusinessUseCaseDiagram, _Rdra20Diagram);

  var _super = _createSuper(BusinessUseCaseDiagram);

  function BusinessUseCaseDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, BusinessUseCaseDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessUseCaseDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].ビジネスユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].商品, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].建物, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].契約, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].サービス, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].組織, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].会社, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].自社システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].情報, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].条件, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].表形式の条件];
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new BusinessUseCaseDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new BusinessUseCaseDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].ビジネスユースケース図.id, name.trim(), [], [], 1024, 768, _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__[/* CanvasGuideType */ "a"].NOTHING);
    }
  }]);

  return BusinessUseCaseDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationModelDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var InformationModelDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(InformationModelDiagram, _Rdra20Diagram);

  var _super = _createSuper(InformationModelDiagram);

  function InformationModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, InformationModelDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(InformationModelDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].情報, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].情報グループ];
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new InformationModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new InformationModelDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].情報モデル図.id, name.trim(), [], [], 1024, 768, _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__[/* CanvasGuideType */ "a"].NOTHING);
    }
  }]);

  return InformationModelDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateModelDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var StateModelDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(StateModelDiagram, _Rdra20Diagram);

  var _super = _createSuper(StateModelDiagram);

  function StateModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, StateModelDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(StateModelDiagram, [{
    key: "relationableLocalRuleOnDiagramOf",
    value: function relationableLocalRuleOnDiagramOf(relationPlus) {
      var relations = this.allRelations();
      var relation = relationPlus.source;
      if (relations.exists(relation)) return "すでに関連が存在します。";

      if (relationPlus.existsType(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].始点終点)) {
        if (!relationPlus.existsAnyTypes(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].状態, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].状態グループ)) {
          return "そのアイコン種類の間に関連は引けません。";
        }
      }

      if (relationPlus.existsAnyTypes(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].状態, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].状態グループ)) {
        if (!relationPlus.existsAnyTypes(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].始点終点)) {
          return "そのアイコン種類の間に関連は引けません。";
        }
      }

      return "";
    }
  }, {
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].状態, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].状態グループ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].始点終点];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      var placement = Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(StateModelDiagram.prototype), "createPlacement", this).call(this, resource, left, top);

      if (!placement || !_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].ユースケース.equals(resource.type)) return placement;
      return placement.resize(120, 40);
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new StateModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new StateModelDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].状態モデル図.id, name.trim(), [], [], 768, 1024, _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_9__[/* CanvasGuideType */ "a"].GRID);
    }
  }]);

  return StateModelDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);



/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemContextDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var SystemContextDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(SystemContextDiagram, _Rdra20Diagram);

  var _super = _createSuper(SystemContextDiagram);

  function SystemContextDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, SystemContextDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SystemContextDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].目的, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].自社システム];
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new SystemContextDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name, resources) {
      var diagram = new SystemContextDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].システムコンテキスト図.id, name.trim(), [], [], 1024, 768, _CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__[/* CanvasGuideType */ "a"].NOTHING); // 特殊処理、Resource種が「システム」で、かつ「ひとつだけ」なら予め足してしまう。

      var resoucesOfSystem = resources.typeOf(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].システム);
      if (resoucesOfSystem.length !== 1) return diagram;
      var system = resoucesOfSystem.last();
      var placement = diagram.createPlacementAtCenter(system);
      if (!placement) return diagram;
      var modified = diagram.addPlacement(placement);
      return modified;
    }
  }]);

  return SystemContextDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsageSceneDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var UsageSceneDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UsageSceneDiagram, _Rdra20Diagram);

  var _super = _createSuper(UsageSceneDiagram);

  function UsageSceneDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, UsageSceneDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UsageSceneDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].利用シーン, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].シナリオ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].アクター];
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new UsageSceneDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new UsageSceneDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].利用シーン図.id, name.trim(), [], [], 1024, 768, _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__[/* CanvasGuideType */ "a"].NOTHING);
    }
  }]);

  return UsageSceneDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessFlowDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var BusinessFlowDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(BusinessFlowDiagram, _Rdra20Diagram);

  var _super = _createSuper(BusinessFlowDiagram);

  function BusinessFlowDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, BusinessFlowDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BusinessFlowDiagram, [{
    key: "relationableLocalRuleOnDiagramOf",
    value: function relationableLocalRuleOnDiagramOf(relationPlus) {
      if (relationPlus.existsType(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].始点終点)) {
        if (!relationPlus.existsType(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].アクティビティ)) {
          return "そのアイコン種類の間に関連は引けません。";
        }
      }

      var relations = this.allRelations();

      if (relationPlus.betweenBothFromTo(_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].アクティビティ)) {
        if (relations.existsBothReversivle(relationPlus.source)) {
          return "すでに関連が存在します。";
        }
      }

      return "";
    }
  }, {
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].アクティビティ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].始点終点];
    }
  }, {
    key: "createPlacement",
    value: function createPlacement(resource, left, top) {
      var placement = Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(BusinessFlowDiagram.prototype), "createPlacement", this).call(this, resource, left, top);

      if (!placement || !_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].アクター.equals(resource.type)) return placement;
      return placement.resize(280, 700);
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new BusinessFlowDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new BusinessFlowDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].業務フロー図.id, name.trim(), [], [], 768, 1024, _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_9__[/* CanvasGuideType */ "a"].GRID);
    }
  }]);

  return BusinessFlowDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);



/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseCaseCompositeDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var UseCaseCompositeDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UseCaseCompositeDiagram, _Rdra20Diagram);

  var _super = _createSuper(UseCaseCompositeDiagram);

  function UseCaseCompositeDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, UseCaseCompositeDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UseCaseCompositeDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].アクティビティ, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].ユースケース, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].情報, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].画面, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].イベント, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].タイマー, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].バリエーション, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].条件, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].表形式の条件, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].外部システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].自社システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].システム, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].建物];
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new UseCaseCompositeDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new UseCaseCompositeDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].ユースケース複合図.id, name.trim(), [], [], 1024, 768, _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__[/* CanvasGuideType */ "a"].NOTHING);
    }
  }]);

  return UseCaseCompositeDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariationAndConditionDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var VariationAndConditionDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VariationAndConditionDiagram, _Rdra20Diagram);

  var _super = _createSuper(VariationAndConditionDiagram);

  function VariationAndConditionDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, VariationAndConditionDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VariationAndConditionDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].バリエーション, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].条件, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].表形式の条件];
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new VariationAndConditionDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new VariationAndConditionDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].バリエーション条件.id, name.trim(), [], [], 1024, 768, _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__[/* CanvasGuideType */ "a"].NOTHING);
    }
  }]);

  return VariationAndConditionDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestModelDiagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var _domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var RequestModelDiagram = /*#__PURE__*/function (_Rdra20Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(RequestModelDiagram, _Rdra20Diagram);

  var _super = _createSuper(RequestModelDiagram);

  function RequestModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, RequestModelDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RequestModelDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return [_domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].アクター, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].要求, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].要件];
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new RequestModelDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new RequestModelDiagram(newDiagramId, _domain_diagram_rdra20_Rdra20DiagramType__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].要求モデル図.id, name.trim(), [], [], 1024, 768, _domain_diagram_CanvasGuideType__WEBPACK_IMPORTED_MODULE_8__[/* CanvasGuideType */ "a"].NOTHING);
    }
  }]);

  return RequestModelDiagram;
}(_domain_diagram_rdra20_Rdra20Diagram__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ FreestyleDiagram_FreestyleDiagram; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(40);

// EXTERNAL MODULE: ./src/domain/diagram/CanvasGuideType.ts
var CanvasGuideType = __webpack_require__(66);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts + 1 modules
var ResourceType = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var esm_get = __webpack_require__(132);

// EXTERNAL MODULE: ./src/domain/diagram/Diagram.ts
var Diagram = __webpack_require__(174);

// CONCATENATED MODULE: ./src/domain/diagram/custom/CustomDiagram.ts









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var CustomDiagram_CustomDiagram = /*#__PURE__*/function (_Diagram) {
  Object(inherits["a" /* default */])(CustomDiagram, _Diagram);

  var _super = _createSuper(CustomDiagram);

  function CustomDiagram() {
    Object(classCallCheck["a" /* default */])(this, CustomDiagram);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(CustomDiagram, [{
    key: "type",
    get: function get() {
      return Object(esm_get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(CustomDiagram.prototype), "type", this);
    }
  }]);

  return CustomDiagram;
}(Diagram["a" /* default */]);


// EXTERNAL MODULE: ./src/domain/diagram/custom/CustomDiagramType.ts
var CustomDiagramType = __webpack_require__(178);

// CONCATENATED MODULE: ./src/domain/diagram/custom/freestyle/FreestyleDiagram.ts











function FreestyleDiagram_createSuper(Derived) { var hasNativeReflectConstruct = FreestyleDiagram_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function FreestyleDiagram_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var FreestyleDiagram_FreestyleDiagram = /*#__PURE__*/function (_CustomDiagram) {
  Object(inherits["a" /* default */])(FreestyleDiagram, _CustomDiagram);

  var _super = FreestyleDiagram_createSuper(FreestyleDiagram);

  function FreestyleDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType) {
    Object(classCallCheck["a" /* default */])(this, FreestyleDiagram);

    return _super.call(this, id, typeId, name, relations, placements, width, height, canvasGuideType);
  }

  Object(createClass["a" /* default */])(FreestyleDiagram, [{
    key: "availableResourceTypes",
    value: function availableResourceTypes() {
      return ResourceType["a" /* default */].values().filter(function (type) {
        return !type.equals(ResourceType["a" /* default */].始点終点);
      });
    }
  }, {
    key: "renew",
    value: function renew(id, typeId, name, relations, placements, width, height, canvasGuideType) {
      return new FreestyleDiagram(id, typeId, name, relations, placements, width, height, canvasGuideType);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf(newDiagramId, name) {
      return new FreestyleDiagram(newDiagramId, CustomDiagramType["a" /* default */].フリースタイル図.id, name.trim(), [], [], 1024, 768, CanvasGuideType["a" /* CanvasGuideType */].NOTHING);
    }
  }]);

  return FreestyleDiagram;
}(CustomDiagram_CustomDiagram);



/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ResourceType_ResourceType; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// CONCATENATED MODULE: ./src/domain/resource/IconShape.ts
var IconShape;

(function (IconShape) {
  IconShape[IconShape["\u30B7\u30F3\u30D7\u30EB"] = 0] = "\u30B7\u30F3\u30D7\u30EB";
  IconShape[IconShape["\u7BC4\u56F2"] = 1] = "\u7BC4\u56F2";
  IconShape[IconShape["\u30B5\u30FC\u30AF\u30EB"] = 2] = "\u30B5\u30FC\u30AF\u30EB";
  IconShape[IconShape["\u8868\u5F62\u5F0F"] = 3] = "\u8868\u5F62\u5F0F";
  IconShape[IconShape["\u8A18\u8FF0"] = 4] = "\u8A18\u8FF0";
  IconShape[IconShape["\u305D\u306E\u4ED6\u30AB\u30B9\u30BF\u30E0"] = 5] = "\u305D\u306E\u4ED6\u30AB\u30B9\u30BF\u30E0";
})(IconShape || (IconShape = {}));
// CONCATENATED MODULE: ./src/domain/resource/ResourceType.ts







var ResourceType_ResourceType = /*#__PURE__*/function () {
  function ResourceType(id, name, iconKey, defaultWidth, defaultHeight, iconShapes) {
    Object(classCallCheck["a" /* default */])(this, ResourceType);

    this.id = id;
    this.name = name;
    this.iconKey = iconKey;
    this.defaultWidth = defaultWidth;
    this.defaultHeight = defaultHeight;
    this.iconShapes = iconShapes;
    ResourceType.ALL.push(this);
  }

  Object(createClass["a" /* default */])(ResourceType, [{
    key: "equals",
    value: function equals(other) {
      if (!other) return false;
      return other.id === this.id;
    }
  }], [{
    key: "values",
    value: function values() {
      return ResourceType.ALL;
    }
  }, {
    key: "ofId",
    value: function ofId(id) {
      return this.ALL.find(function (item) {
        return item.id === id;
      });
    }
  }]);

  return ResourceType;
}();


ResourceType_ResourceType.ALL = [];
ResourceType_ResourceType.システム = of(1, 'システム', 'mdi-monitor-dashboard', 350, 75, [IconShape.その他カスタム]);
ResourceType_ResourceType.自社システム = of(2, '自社システム', 'mdi-desktop-tower-monitor');
ResourceType_ResourceType.外部システム = of(3, '外部システム', 'mdi-server');
ResourceType_ResourceType.目的 = of(4, '目的', 'mdi-bullseye-arrow', 0, 0, [IconShape.記述]);
ResourceType_ResourceType.アクター = of(5, 'アクター', 'mdi-account', 0, 0, [IconShape.シンプル, IconShape.その他カスタム]);
ResourceType_ResourceType.要求 = of(6, '要求', 'mdi-hand-heart-outline', 200, 37, [IconShape.記述]);
ResourceType_ResourceType.要件 = of(7, '要件', 'mdi-handshake-outline', 200, 37, [IconShape.記述]);
ResourceType_ResourceType.業務 = of(8, '業務', 'mdi-cog-outline', 105, 35, [IconShape.サークル]);
ResourceType_ResourceType.商品 = of(9, '商品', 'mdi-package-variant-closed');
ResourceType_ResourceType.建物 = of(10, '建物', 'mdi-home-variant');
ResourceType_ResourceType.契約 = of(11, '契約', 'mdi-file-key-outline');
ResourceType_ResourceType.サービス = of(12, 'サービス', 'mdi-room-service-outline');
ResourceType_ResourceType.組織 = of(13, '組織', 'mdi-sitemap', 80, 35, [IconShape.範囲]);
ResourceType_ResourceType.会社 = of(14, '会社', 'mdi-office-building-outline', 80, 35, [IconShape.範囲]);
ResourceType_ResourceType.在庫 = of(15, '在庫', 'mdi-stack-exchange', 0, 0, [IconShape.範囲]);
ResourceType_ResourceType.配送 = of(16, '配送', 'mdi-truck-outline');
ResourceType_ResourceType.利用シーン = of(25, '利用シーン', 'mdi-video-account');
ResourceType_ResourceType.シナリオ = of(32, 'シナリオ', 'mdi-script-text-outline', 300, 75, [IconShape.記述]);
ResourceType_ResourceType.ユースケース = of(23, 'ユースケース', 'mdi-alpha-u-circle-outline', 105, 35, [IconShape.サークル]);
ResourceType_ResourceType.情報 = of(18, '情報', 'mdi-text-box-outline');
ResourceType_ResourceType.情報グループ = of(19, '情報グループ', 'mdi-text-box-multiple-outline', 80, 35, [IconShape.範囲]);
ResourceType_ResourceType.画面 = of(20, '画面', 'mdi-application');
ResourceType_ResourceType.アクティビティ = of(21, 'アクティビティ', 'mdi-alpha-a-box-outline', 0, 0, [IconShape.シンプル, IconShape.その他カスタム]);
ResourceType_ResourceType.イベント = of(22, 'イベント', 'mdi-lightning-bolt');
ResourceType_ResourceType.ビジネスユースケース = of(24, 'ビジネスユースケース', 'mdi-alpha-b-circle-outline', 105, 35, [IconShape.サークル]);
ResourceType_ResourceType.タイマー = of(26, 'タイマー', 'mdi-clock-outline');
ResourceType_ResourceType.状態 = of(27, '状態', 'mdi-circle-slice-4', 160, 40, [IconShape.サークル]);
ResourceType_ResourceType.状態グループ = of(28, '状態グループ', 'mdi-circle-slice-4', 200, 120, [IconShape.範囲]);
ResourceType_ResourceType.条件 = of(17, '条件', 'mdi-call-split', 0, 0, [IconShape.表形式, IconShape.シンプル]);
ResourceType_ResourceType.表形式の条件 = of(30, '表形式の条件', 'mdi-table', 0, 0, [IconShape.表形式, IconShape.シンプル]);
ResourceType_ResourceType.バリエーション = of(29, 'バリエーション', 'mdi-lock-pattern', 0, 0, [IconShape.表形式, IconShape.シンプル]); // static 項目説明 = of(31, '項目説明', '');

ResourceType_ResourceType.スライド = of(33, 'スライド', 'mdi-presentation');
ResourceType_ResourceType.説明ノート = of(101, '説明・ノート', 'mdi-comment-outline', 0, 0, [IconShape.記述]);
ResourceType_ResourceType.始点終点 = of(102, '始点・終点', 'mdi-source-commit-start', 0, 0, [IconShape.その他カスタム]); // static 遷移 = of(801, '遷移', ''); // 資料にあったが…これはなんだろう？

ResourceType_ResourceType.Webサービス = of(901, 'Webサービス', 'mdi-cloud-download-outline');
ResourceType_ResourceType.通帳 = of(902, '通帳', 'mdi-badge-account-horizontal-outline');
ResourceType_ResourceType.データベース = of(903, 'データベース', 'mdi-database');
ResourceType_ResourceType.機器 = of(904, '機器', 'mdi-chip');
ResourceType_ResourceType.決済 = of(905, '決済', 'mdi-cash-register');
ResourceType_ResourceType.背景 = of(906, '背景', 'mdi-wallpaper');
ResourceType_ResourceType.お金 = of(907, 'お金', 'mdi-cash-100');

function of(id, name, iconKey) {
  var defaultWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var defaultHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var iconShapes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [IconShape.シンプル];
  return new ResourceType_ResourceType(id, name, iconKey, defaultWidth, defaultHeight, iconShapes);
}

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rdra20DiagramType; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _type_DiagramType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(198);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Rdra20DiagramType = /*#__PURE__*/function (_DiagramType) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Rdra20DiagramType, _DiagramType);

  var _super = _createSuper(Rdra20DiagramType);

  function Rdra20DiagramType(id, name, iconKey) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Rdra20DiagramType);

    return _super.call(this, id, name, iconKey);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Rdra20DiagramType, [{
    key: "sameTypeIdOf",
    value: function sameTypeIdOf(typeId) {
      return typeId > 0 && typeId <= 1000;
    }
  }]);

  return Rdra20DiagramType;
}(_type_DiagramType__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);


Rdra20DiagramType.システムコンテキスト図 = new Rdra20DiagramType(1, 'システムコンテキスト図', "mdi-alpha-s-box");
Rdra20DiagramType.要求モデル図 = new Rdra20DiagramType(2, '要求モデル図', "mdi-alpha-r-box");
Rdra20DiagramType.ビジネスコンテキスト図 = new Rdra20DiagramType(3, 'ビジネスコンテキスト図', "mdi-alpha-c-box");
Rdra20DiagramType.ビジネスユースケース図 = new Rdra20DiagramType(4, 'ビジネスユースケース図', "mdi-alpha-u-box");
Rdra20DiagramType.業務フロー図 = new Rdra20DiagramType(11, '業務フロー図', "mdi-clipboard-flow");
Rdra20DiagramType.利用シーン図 = new Rdra20DiagramType(12, '利用シーン図', "mdi-video-image");
Rdra20DiagramType.情報モデル図 = new Rdra20DiagramType(5, '情報モデル図', "mdi-axis-arrow-info");
Rdra20DiagramType.状態モデル図 = new Rdra20DiagramType(6, '状態モデル図', "mdi-state-machine");
Rdra20DiagramType.ユースケース複合図 = new Rdra20DiagramType(7, 'ユースケース複合図', "mdi-set-none");
Rdra20DiagramType.バリエーション条件 = new Rdra20DiagramType(8, 'バリエーション・条件', "mdi-vector-combine");

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/product/ProductSelectorDialog.vue?vue&type=template&id=848ffdc8&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"data-opend":_vm.onOpen(),"persistent":"","max-width":"600"},model:{value:(_vm.visibleProductSelectorDialog),callback:function ($$v) {_vm.visibleProductSelectorDialog=$$v},expression:"visibleProductSelectorDialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-account-switch-outline")]),_vm._v(" プロダクト切替え\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("編集対象となるプロダクトを選択してください。")]),_vm._v(" "),_c('v-card-actions',[_c('v-select',{attrs:{"items":_vm.productsList(),"item-text":"name","label":"Product","return-object":""},model:{value:(_vm.selectedProduct),callback:function ($$v) {_vm.selectedProduct=$$v},expression:"selectedProduct"}}),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"primary"},on:{"click":_vm.onClickAddProduct}},[_vm._v("追加")])],1),_vm._v(" "),_c('v-card-actions',[(_vm.cancelable)?_c('v-btn',{attrs:{"text":"","disabled":!_vm.selectedProduct,"color":"blue darken-1"},on:{"click":_vm.onClickExportProduct}},[_vm._v("\n        エクスポート\n      ")]):_vm._e(),_vm._v(" "),(_vm.cancelable)?_c('v-btn',{attrs:{"text":"","disabled":_vm.isSelectedCurrentProduct(),"color":"red darken-1"},on:{"click":_vm.onClickRemoveProduct}},[_vm._v("\n        削除\n      ")]):_vm._e(),_vm._v(" "),_c('v-spacer'),_vm._v(" "),(_vm.cancelable)?_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]):_vm._e(),_vm._v(" "),_c('v-btn',{attrs:{"text":"","disabled":!_vm.selectedProduct,"color":"green darken-1"},on:{"click":_vm.onClickOpenProduct}},[_vm._v("\n        プロダクトを開く\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/product/ProductSelectorDialog.vue?vue&type=template&id=848ffdc8&scoped=true&lang=html&

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

// EXTERNAL MODULE: ./src/presentation/MessageBox.ts
var MessageBox = __webpack_require__(363);

// EXTERNAL MODULE: ./src/domain/product/Product.ts + 2 modules
var Product = __webpack_require__(176);

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
      var storage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!storage) return "";
      if (!this.products) this.products = storage.products;
      if (this.selectedProduct) return "";
      var product = storage.currentProduct();
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

        var exists = (_a = _this2.products) === null || _a === void 0 ? void 0 : _a.existsSameNameOf(inputText);
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

      var storage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!storage) return;
      var added = storage.merge(product);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.register(added);
    }
  }, {
    key: "saveRemoveProduct",
    value: function saveRemoveProduct(product) {
      var _a, _b;

      var storage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!storage) return;
      var added = storage.removeOf(product);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.register(added);
    }
  }, {
    key: "saveCurrentProduct",
    value: function saveCurrentProduct() {
      var _a, _b;

      if (this.isSelectedCurrentProduct()) return false;
      var storage = (_a = this.repository) === null || _a === void 0 ? void 0 : _a.get();
      if (!storage || !this.selectedProduct) return false;
      var changed = storage.changeCurrent(this.selectedProduct);
      (_b = this.repository) === null || _b === void 0 ? void 0 : _b.register(changed);
      return true;
    }
  }, {
    key: "downloadProductExportFile",
    value: function downloadProductExportFile() {
      var product = this.selectedProduct;
      if (!product) return true;
      return this.productExportService.downloadExportFileOnClient(product.id);
    }
  }]);

  return ProductSelectorDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "repository", void 0);

__decorate([Object(lib["Inject"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "productExportService", void 0);

__decorate([Object(lib["Prop"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "visibleProductSelectorDialog", void 0);

__decorate([Object(lib["Prop"])()], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "cancelable", void 0);

__decorate([Object(lib["Emit"])("onClose")], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog.prototype, "onClose", null);

ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog = __decorate([lib["Component"]], ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog);
/* harmony default export */ var ProductSelectorDialogvue_type_script_lang_ts_ = (ProductSelectorDialogvue_type_script_lang_ts_ProductSelectorDialog);
// CONCATENATED MODULE: ./src/components/product/ProductSelectorDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var product_ProductSelectorDialogvue_type_script_lang_ts_ = (ProductSelectorDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 7 modules
var VSelect = __webpack_require__(835);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// CONCATENATED MODULE: ./src/components/product/ProductSelectorDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductSelectorDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "848ffdc8",
  null
  
)

/* harmony default export */ var product_ProductSelectorDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VSelect: VSelect["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/product/import/ProductImportDialog.vue?vue&type=template&id=9fc1b548&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"data-opend":_vm.onOpen(),"persistent":"","max-width":"600"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-import")]),_vm._v(" プロダクトのインポート\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("インポートする対象のファイルを指定してください。")]),_vm._v(" "),_c('v-card-actions',[_c('v-file-input',{attrs:{"disabled":_vm.progressEnable,"rules":[_vm.preValidate],"label":_vm.fileTypeDescription,"accept":"application/json","truncate-length":"50"},on:{"update:error":_vm.onChangeErrorState},model:{value:(_vm.selectedFile),callback:function ($$v) {_vm.selectedFile=$$v},expression:"selectedFile"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-container',{attrs:{"fluid":""}},[_c('v-row',[_c('v-col',[_c('v-progress-linear',{attrs:{"value":"15","disabled":!_vm.progressEnable},model:{value:(_vm.progressPercentage),callback:function ($$v) {_vm.progressPercentage=$$v},expression:"progressPercentage"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-textarea',{ref:"progressLogsTextarea",attrs:{"disabled":!_vm.progressEnable,"label":"インポート状況","readonly":"","outlined":"","no-resize":""},on:{"input":_vm.onChangeProgressLogs},model:{value:(_vm.progressLogs),callback:function ($$v) {_vm.progressLogs=$$v},expression:"progressLogs"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal","disabled":_vm.progressEnable},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"green darken-1","disabled":_vm.notImportable()},on:{"click":_vm.onClickImportProduct}},[_vm._v("\n        実行\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/product/import/ProductImportDialog.vue?vue&type=template&id=9fc1b548&scoped=true&lang=html&

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
var runtime = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/product/import/ProductImportMessageConverter.ts
var ProductImportMessageConverter = __webpack_require__(573);

// EXTERNAL MODULE: ./src/domain/product/import/ProductImportError.ts
var ProductImportError = __webpack_require__(62);

// EXTERNAL MODULE: ./src/domain/product/export/RdramProductExportFileName.ts
var RdramProductExportFileName = __webpack_require__(205);

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
    _this.opend = false;
    _this.selectedFile = null;
    _this.preValidateError = false;
    _this.progressEnable = false;
    _this.progressPercentage = 0;
    _this.progressLogs = " ";
    _this.importedProductIds = [];
    _this.fileTypeDescription = RdramProductExportFileName["a" /* default */].TYPE_DESCRIPTION;
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
      if (!this.visible || this.opend) return;
      this.clearAllState();
      this.opend = true;
    }
  }, {
    key: "preValidate",
    value: function () {
      var _preValidate = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var service, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = this.productImportService;
                this.clearProgressArea();
                _context.next = 4;
                return service.validateOf(file);

              case 4:
                result = _context.sent;

                if (!(result === ProductImportError["a" /* ProductImportError */].なし)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", true);

              case 7:
                return _context.abrupt("return", this.messageConverter.errorMessageOf(result));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function preValidate(_x) {
        return _preValidate.apply(this, arguments);
      }

      return preValidate;
    }()
  }, {
    key: "onClickImportProduct",
    value: function () {
      var _onClickImportProduct = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.changeEnableProgressArea(true);
                _context2.next = 3;
                return this.doImport();

              case 3:
                this.changeEnableProgressArea(false);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
    key: "clearAllState",
    value: function clearAllState() {
      this.selectedFile = null;
      this.preValidateError = false;
      this.importedProductIds.length = 0;
      this.clearProgressArea();
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

      this.opend = false;
      if (!((_a = this.productImportService) === null || _a === void 0 ? void 0 : _a.hitCurrentProductOf(this.importedProductIds))) return;
      alert("現在開いているプロダクトがインポートにより書き換えられました。\nプロダクトを開きなおします。");
      location.reload();
    }
  }, {
    key: "doImport",
    value: function () {
      var _doImport = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var service, imported;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                service = this.productImportService;
                _context3.next = 3;
                return service.importOf(this.selectedFile, this.notifyProgress, this.confirmeProductName);

              case 3:
                imported = _context3.sent;
                if (imported) this.importedProductIds.push(imported.id);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
      return newName === null ? "" : newName;
    }
  }, {
    key: "notifyProgress",
    value: function notifyProgress(event) {
      var _a;

      this.progressPercentage = event.percentage();
      var message = (_a = this.messageConverter) === null || _a === void 0 ? void 0 : _a.makeMessage(event);
      this.appendPrograssLogs(message);
    }
  }, {
    key: "appendPrograssLogs",
    value: function appendPrograssLogs(message) {
      if (message && message.length === 0) return;
      if (this.progressLogs.trim().length === 0) this.progressLogs = "";else this.progressLogs += "\n";
      this.progressLogs += message;
      this.$nextTick(function () {
        return console.log("UI\u304C\u5909\u66F4\u3055\u308C\u305F\u306F\u305A\u3002message:".concat(message));
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
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(822);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(823);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(825);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(826);

// CONCATENATED MODULE: ./src/components/product/import/ProductImportDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  import_ProductImportDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "9fc1b548",
  null
  
)

/* harmony default export */ var import_ProductImportDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */















installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VFileInput: VFileInput["a" /* default */],VIcon: VIcon["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Behavior; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);






var Behavior = /*#__PURE__*/Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function Behavior(value, name, description) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Behavior);

  this.value = value;
  this.name = name;
  this.description = description;
});



/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserArrangeVM; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _IconNameArrangeVM__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(578);
/* harmony import */ var _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52);
/* harmony import */ var _domain_diagram_import_userarrange_UserArrangeOfImportDiagram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(169);
/* harmony import */ var _domain_diagram_import_conflictname_ConflictNameBehavior__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(120);
/* harmony import */ var _domain_product_Product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(176);













var UserArrangeVM = /*#__PURE__*/function () {
  function UserArrangeVM(srcDiagramName, destDiagramName, _behavior, isConfrictDiagramName, sourceId, diagramType, iconNames, product) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, UserArrangeVM);

    this.srcDiagramName = srcDiagramName;
    this.destDiagramName = destDiagramName;
    this._behavior = _behavior;
    this.isConfrictDiagramName = isConfrictDiagramName;
    this.sourceId = sourceId;
    this.diagramType = diagramType;
    this.iconNames = iconNames;
    this.product = product;
    this.validated = false;
    this.diagramNameMaxLength = 128;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(UserArrangeVM, [{
    key: "isNotAriasNameOfBehavior",
    value: function isNotAriasNameOfBehavior() {
      return this._behavior !== _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_8__[/* BehaviorWhenNameConflict */ "a"].別名;
    }
  }, {
    key: "toDomain",
    value: function toDomain() {
      return new _domain_diagram_import_userarrange_UserArrangeOfImportDiagram__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"](this.srcDiagramName, new _domain_diagram_import_conflictname_ConflictNameBehavior__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"](this._behavior, this.isConfrictDiagramName ? this.srcDiagramName : "", this.destDiagramName, this.sourceId, this.diagramType.id), this.iconNames.map(function (i) {
        return i.toDomain();
      }), this.diagramType);
    } // validation methods

  }, {
    key: "validate",
    value: function validate() {
      return this.validateDialogName(this.destDiagramName) === true && this.iconNames.every(function (i) {
        return i.validateIconName() === true;
      });
    }
  }, {
    key: "validateDialogName",
    value: function validateDialogName(value) {
      if (this.isNotAriasNameOfBehavior()) return true;
      if (value.trim().length === 0) return "別名を入力してください。";
      if (value.length > this.diagramNameMaxLength) return "".concat(this.diagramNameMaxLength, "\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      if (value.trim() === this.srcDiagramName) return "\u300C\u5143\u306E\u540D\u524D\u300D\u306F\u6307\u5B9A\u3067\u304D\u307E\u305B\u3093\u3002";
      var diagrams = this.product.diagrams;
      if (diagrams.existsSameTypeAndName(this.destDiagramName, this.diagramType)) return "同種同名が既に存在します。";
      return true;
    }
  }, {
    key: "validateoConfrictResourceOf",
    value: function validateoConfrictResourceOf(iconName) {
      if (this.confrictResourceDestName(iconName)) return "他の別名と重複しています。";
      var resources = this.product.resources;
      if (resources.existsSameTypeAndName(iconName.destName, iconName.resourceType)) return "同種同名が既にに存在します。";
      return true;
    }
  }, {
    key: "confrictResourceDestName",
    value: function confrictResourceDestName(iconName) {
      return this.iconNames.filter(function (n) {
        return n.equals(iconName);
      }).length > 1;
    } // properties

  }, {
    key: "behavior",
    get: function get() {
      return this._behavior;
    },
    set: function set(value) {
      if (value !== _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_8__[/* BehaviorWhenNameConflict */ "a"].別名) this.destDiagramName = "";
      this._behavior = value;
    } // factory methods

  }], [{
    key: "of",
    value: function of(userArrange, product) {
      var result = new UserArrangeVM(userArrange.sourceDiagramName, userArrange.conflictDiagramName.destinationName, userArrange.conflictDiagramName.behavior, userArrange.isColidedDiagramName(), userArrange.conflictDiagramName.sourceId, userArrange.diagramType, [], product);
      userArrange.conflictResourceNames.map(function (r) {
        return _IconNameArrangeVM__WEBPACK_IMPORTED_MODULE_7__["default"].of(r, result);
      }).forEach(function (iconName) {
        return result.iconNames.push(iconName);
      });
      return result;
    }
  }, {
    key: "empty",
    value: function empty() {
      return UserArrangeVM.of(_domain_diagram_import_userarrange_UserArrangeOfImportDiagram__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].empty(), _domain_product_Product__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].prototypeOf(""));
    }
  }]);

  return UserArrangeVM;
}();



/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relation; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RouterType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(213);






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
      return this.withFromTo(this.toResourceId, this.fromResourceId);
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
    key: "withFrom",
    value: function withFrom(fromResourceId) {
      return this.withFromTo(fromResourceId, this.toResourceId);
    }
  }, {
    key: "withTo",
    value: function withTo(toResourceId) {
      return this.withFromTo(this.fromResourceId, toResourceId);
    }
  }, {
    key: "withFromTo",
    value: function withFromTo(fromResourceId, toResourceId) {
      return new Relation(this.id, fromResourceId, toResourceId, this.routerTypeId, this.tipAllow, this.meaning, this.midpoints);
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

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uuid; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(114);
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

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading.vue?vue&type=template&id=33361991&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loading)?_c('v-overlay',[_c('v-progress-circular',{attrs:{"size":"140","width":"14","indeterminate":""}})],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=template&id=33361991&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

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
    key: "onChangeVisible",
    value: function onChangeVisible() {
      if (this.loading) {
        this.startTime = performance.now();
        console.log("Loading\u8868\u793A\u958B\u59CB\u3002".concat(new Date()));
        return;
      }

      var time = performance.now() - this.startTime;
      console.log("Loading\u8868\u793A\u7D42\u4E86\u3002".concat(new Date(), " \u8868\u793A\u6642\u9593:").concat(time.toFixed(3), " ms"));
      this.startTime = 0;
    }
  }, {
    key: "start",
    value: function start() {
      this.loading = true;
    }
  }, {
    key: "finish",
    value: function finish() {
      this.loading = false;
    }
  }]);

  return Loading;
}(lib["Vue"]);

__decorate([Object(lib["Watch"])('loading')], Loadingvue_type_script_lang_ts_Loading.prototype, "onChangeVisible", null);

Loadingvue_type_script_lang_ts_Loading = __decorate([lib["Component"]], Loadingvue_type_script_lang_ts_Loading);
/* harmony default export */ var Loadingvue_type_script_lang_ts_ = (Loadingvue_type_script_lang_ts_Loading);
// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Loadingvue_type_script_lang_ts_ = (Loadingvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Loading.vue?vue&type=style&index=0&lang=scss&
var Loadingvue_type_style_index_0_lang_scss_ = __webpack_require__(660);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(333);

// CONCATENATED MODULE: ./src/components/Loading.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadingvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_Loading = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VOverlay: VOverlay["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */]})


/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBox; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
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

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(657);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("75e846b2", content, true, {"sourceMap":false});

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(661);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("7c36c53e", content, true, {"sourceMap":false});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BehaviorWhenNameConflict; });
var BehaviorWhenNameConflict;

(function (BehaviorWhenNameConflict) {
  BehaviorWhenNameConflict[BehaviorWhenNameConflict["\u65E2\u5B58"] = 0] = "\u65E2\u5B58";
  BehaviorWhenNameConflict[BehaviorWhenNameConflict["\u7F6E\u63DB"] = 1] = "\u7F6E\u63DB";
  BehaviorWhenNameConflict[BehaviorWhenNameConflict["\u5225\u540D"] = 2] = "\u5225\u540D";
})(BehaviorWhenNameConflict || (BehaviorWhenNameConflict = {}));

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramImportProgressStep; });
var DiagramImportProgressStep;

(function (DiagramImportProgressStep) {
  DiagramImportProgressStep[DiagramImportProgressStep["\u30A8\u30E9\u30FC"] = -2] = "\u30A8\u30E9\u30FC";
  DiagramImportProgressStep[DiagramImportProgressStep["\u5931\u6557"] = -1] = "\u5931\u6557";
  DiagramImportProgressStep[DiagramImportProgressStep["\u30AD\u30E3\u30F3\u30BB\u30EB"] = 0] = "\u30AD\u30E3\u30F3\u30BB\u30EB";
  DiagramImportProgressStep[DiagramImportProgressStep["\u958B\u59CB"] = 1] = "\u958B\u59CB";
  DiagramImportProgressStep[DiagramImportProgressStep["\u30D5\u30A1\u30A4\u30EB\u8AAD\u307F\u8FBC\u307F"] = 2] = "\u30D5\u30A1\u30A4\u30EB\u8AAD\u307F\u8FBC\u307F";
  DiagramImportProgressStep[DiagramImportProgressStep["\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF"] = 3] = "\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF";
  DiagramImportProgressStep[DiagramImportProgressStep["\u30E6\u30FC\u30B6\u30FC\u30A2\u30EC\u30F3\u30B8"] = 4] = "\u30E6\u30FC\u30B6\u30FC\u30A2\u30EC\u30F3\u30B8";
  DiagramImportProgressStep[DiagramImportProgressStep["\u8FFD\u52A0"] = 5] = "\u8FFD\u52A0";
  DiagramImportProgressStep[DiagramImportProgressStep["\u4FDD\u5B58"] = 6] = "\u4FDD\u5B58";
  DiagramImportProgressStep[DiagramImportProgressStep["\u5B8C\u4E86"] = 7] = "\u5B8C\u4E86";
  DiagramImportProgressStep[DiagramImportProgressStep["\u6210\u529F"] = 8] = "\u6210\u529F";
})(DiagramImportProgressStep || (DiagramImportProgressStep = {}));

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(742);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("38e1e0cb", content, true, {"sourceMap":false});

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(768);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("50465592", content, true, {"sourceMap":false});

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(770);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("0883f874", content, true, {"sourceMap":false});

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/import/arrange/UserArrengeWhenNameConfrictDialog.vue?vue&type=template&id=743eb34a&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","width":"800","height":"600"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-sync-alert")]),_vm._v(" 図/アイコンの名前の重複\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n      インポートした内容に「名前の重複」がありました。どのように扱うかを指定してください。\n    ")]),_vm._v(" "),_c('v-card-text',[_c('v-row',[_c('v-col',{staticClass:"py-1",attrs:{"cols":"12","md":"12"}},[_c('v-card',{staticClass:"pa-1",attrs:{"outlined":""}},[_c('v-card-subtitle',{staticClass:"pa-0"},[_vm._v(" インポートした図 ")]),_vm._v(" "),_c('v-card-text',{staticClass:"pa-1"},[_c('v-card',{staticClass:"pa-0"},[_c('v-card-title',{staticClass:"py-0 px-2"},[_c('v-tooltip',{attrs:{"top":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-icon',_vm._g(_vm._b({},'v-icon',attrs,false),on),[_vm._v(_vm._s(_vm.vm.diagramType.iconKey))])]}}])},[_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.vm.diagramType.name))])]),_vm._v(" "),_c('v-text-field',{attrs:{"label":"図の名前","dense":"","hide-details":"","filled":"","readonly":""},model:{value:(_vm.vm.srcDiagramName),callback:function ($$v) {_vm.$set(_vm.vm, "srcDiagramName", $$v)},expression:"vm.srcDiagramName"}})],1)],1),_vm._v(" "),(_vm.vm.isConfrictDiagramName)?_c('v-card',{staticClass:"pa-0",attrs:{"outlined":""}},[_c('v-card-text',{staticClass:"py-0 px-2"},[_c('v-radio-group',{staticClass:"pa-0",attrs:{"mandatory":"","row":""},on:{"change":_vm.onChangeBehaviorRadio},model:{value:(_vm.vm.behavior),callback:function ($$v) {_vm.$set(_vm.vm, "behavior", $$v)},expression:"vm.behavior"}},[_vm._l((_vm.behaviors.behaviorsOfDiagramName),function(behavior){return _c('v-tooltip',{key:behavior.value,attrs:{"bottom":"","open-delay":_vm.tooltipOpenDelay},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-radio',_vm._g(_vm._b({attrs:{"label":behavior.name,"value":behavior.value}},'v-radio',attrs,false),on))]}}],null,true)},[_vm._v(" "),_c('span',[_vm._v(_vm._s(behavior.description))])])}),_vm._v(" "),_c('v-text-field',{attrs:{"rules":[_vm.validateDialogName],"placeholder":_vm.vm.srcDiagramName,"disabled":_vm.vm.isNotAriasNameOfBehavior(),"counter":_vm.vm.diagramNameMaxLength,"maxlength":_vm.vm.diagramNameMaxLength,"leng":"","label":"新しい名前","dense":""},model:{value:(_vm.vm.destDiagramName),callback:function ($$v) {_vm.$set(_vm.vm, "destDiagramName", $$v)},expression:"vm.destDiagramName"}})],2)],1)],1):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"py-1",attrs:{"cols":"12","md":"12"}},[_c('v-card',{staticClass:"pa-1",attrs:{"outlined":""}},[_c('v-card-subtitle',{staticClass:"pa-0"},[_vm._v("インポートしたアイコン")]),_vm._v(" "),_c('v-card-text',{staticClass:"py-0 px-2"},[_c('v-simple-table',{ref:"resultList",attrs:{"dense":"","height":"265px","fixed-header":""},scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('thead',[_c('tr',[_c('th',{staticClass:"text-right"},[_vm._v("#")]),_vm._v(" "),_c('th',{staticClass:"text-center"},[_vm._v("種")]),_vm._v(" "),_c('th',{staticClass:"text-left"},[_vm._v("アイコン名")]),_vm._v(" "),_c('th',{staticClass:"text-left"},[_vm._v("扱い")]),_vm._v(" "),_c('th',{staticClass:"text-left"},[_vm._v("新しいアイコン名")])])]),_vm._v(" "),_c('tbody',_vm._l((_vm.vm.iconNames),function(iconName,index){return _c('tr',{key:iconName.sourceId},[_c('td',{staticClass:"text-right"},[_vm._v("\n                        "+_vm._s(index + 1)+"\n                      ")]),_vm._v(" "),_c('td',{staticClass:"text-center"},[_c('v-tooltip',{attrs:{"top":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-icon',_vm._g(_vm._b({},'v-icon',attrs,false),on),[_vm._v(_vm._s(iconName.resourceType.iconKey))])]}}],null,true)},[_vm._v(" "),_c('span',[_vm._v(_vm._s(iconName.resourceType.name))])])],1),_vm._v(" "),_c('td',[_c('v-text-field',{attrs:{"label":"元の名前","dense":"","hide-details":"","filled":"","readonly":""},model:{value:(iconName.srcName),callback:function ($$v) {_vm.$set(iconName, "srcName", $$v)},expression:"iconName.srcName"}})],1),_vm._v(" "),_c('td',[_c('v-radio-group',{staticClass:"pa-0",attrs:{"mandatory":"","row":""},on:{"change":_vm.onChangeBehaviorRadio},model:{value:(iconName.behavior),callback:function ($$v) {_vm.$set(iconName, "behavior", $$v)},expression:"iconName.behavior"}},_vm._l((_vm.behaviors.behaviorsOfResourceName),function(behavior){return _c('v-tooltip',{key:behavior.value,attrs:{"bottom":"","open-delay":_vm.tooltipOpenDelay},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-radio',_vm._g(_vm._b({attrs:{"label":behavior.name,"value":behavior.value}},'v-radio',attrs,false),on))]}}],null,true)},[_vm._v(" "),_c('span',[_vm._v(_vm._s(behavior.description))])])}),1)],1),_vm._v(" "),_c('td',[_c('v-text-field',{attrs:{"rules":[_vm.validateIconName(iconName)],"disabled":iconName.isNotAriasNameOfBehavior(),"placeholder":iconName.srcName,"counter":iconName.diagramNameMaxLength,"maxlength":iconName.diagramNameMaxLength,"leng":"","dense":""},model:{value:(iconName.destName),callback:function ($$v) {_vm.$set(iconName, "destName", $$v)},expression:"iconName.destName"}})],1)])}),0)]},proxy:true}])})],1)],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClickCancel}},[_vm._v("キャンセル")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"green darken-1","disabled":!_vm.validated},on:{"click":_vm.onOkClick}},[_vm._v("\n        OK\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/import/arrange/UserArrengeWhenNameConfrictDialog.vue?vue&type=template&id=743eb34a&lang=html&

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

// EXTERNAL MODULE: ./src/components/diagrams/import/arrange/Behaviors.ts
var Behaviors = __webpack_require__(577);

// EXTERNAL MODULE: ./src/components/diagrams/import/arrange/UserArrangeVM.ts
var UserArrangeVM = __webpack_require__(348);

// EXTERNAL MODULE: ./src/domain/diagram/import/userarrange/UserArrangeOfImportDiagram.ts
var UserArrangeOfImportDiagram = __webpack_require__(169);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/import/arrange/UserArrengeWhenNameConfrictDialog.vue?vue&type=script&lang=ts&







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






var UserArrengeWhenNameConfrictDialogvue_type_script_lang_ts_UserArrengeWhenNameConfrictDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(UserArrengeWhenNameConfrictDialog, _Vue);

  var _super = _createSuper(UserArrengeWhenNameConfrictDialog);

  function UserArrengeWhenNameConfrictDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserArrengeWhenNameConfrictDialog);

    _this = _super.apply(this, arguments);
    _this.vm = UserArrangeVM["default"].empty();
    _this.validated = false;
    _this.behaviors = new Behaviors["default"]();
    _this.visible = false;
    _this.resolve = null;
    _this.reject = null;
    _this.tooltipOpenDelay = 1000;
    return _this;
  }

  Object(createClass["a" /* default */])(UserArrengeWhenNameConfrictDialog, [{
    key: "show",
    value: function show(arrange) {
      var _this2 = this;

      this.visible = true;
      this.vm = this.makeViewModelOf(arrange);
      this.validateAll();
      return new Promise(function (resolve, reject) {
        _this2.resolve = resolve;
        _this2.reject = reject;
      });
    }
  }, {
    key: "onOkClick",
    value: function onOkClick() {
      this.resolve(this.vm.toDomain());
      this.visible = false;
    }
  }, {
    key: "onClickCancel",
    value: function onClickCancel() {
      this.resolve(UserArrangeOfImportDiagram["a" /* default */].empty());
      this.visible = false;
    }
  }, {
    key: "onChangeBehaviorRadio",
    value: function onChangeBehaviorRadio() {
      var _this3 = this;

      this.$nextTick(function () {
        return _this3.validateAll();
      });
    }
  }, {
    key: "validateAll",
    value: function validateAll() {
      this.validated = this.vm.validate();
    }
  }, {
    key: "validateDialogName",
    value: function validateDialogName(value) {
      var result = this.vm.validateDialogName(value);
      this.validateAll();
      return result;
    }
  }, {
    key: "validateIconName",
    value: function validateIconName(iconName) {
      var result = iconName.validateIconName();
      this.validateAll();
      return result;
    }
  }, {
    key: "makeViewModelOf",
    value: function makeViewModelOf(arrange) {
      var product = this.repository.getCurrentProduct();
      return UserArrangeVM["default"].of(arrange, product);
    }
  }]);

  return UserArrengeWhenNameConfrictDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], UserArrengeWhenNameConfrictDialogvue_type_script_lang_ts_UserArrengeWhenNameConfrictDialog.prototype, "repository", void 0);

UserArrengeWhenNameConfrictDialogvue_type_script_lang_ts_UserArrengeWhenNameConfrictDialog = __decorate([lib["Component"]], UserArrengeWhenNameConfrictDialogvue_type_script_lang_ts_UserArrengeWhenNameConfrictDialog);
/* harmony default export */ var UserArrengeWhenNameConfrictDialogvue_type_script_lang_ts_ = (UserArrengeWhenNameConfrictDialogvue_type_script_lang_ts_UserArrengeWhenNameConfrictDialog);
// CONCATENATED MODULE: ./src/components/diagrams/import/arrange/UserArrengeWhenNameConfrictDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var arrange_UserArrengeWhenNameConfrictDialogvue_type_script_lang_ts_ = (UserArrengeWhenNameConfrictDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/diagrams/import/arrange/UserArrengeWhenNameConfrictDialog.vue?vue&type=style&index=0&lang=css&
var UserArrengeWhenNameConfrictDialogvue_type_style_index_0_lang_css_ = __webpack_require__(741);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(822);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
var VRadio = __webpack_require__(827);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
var VRadioGroup = __webpack_require__(828);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(825);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js
var VSimpleTable = __webpack_require__(829);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(830);

// CONCATENATED MODULE: ./src/components/diagrams/import/arrange/UserArrengeWhenNameConfrictDialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  arrange_UserArrengeWhenNameConfrictDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var arrange_UserArrengeWhenNameConfrictDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */

















installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VRadio: VRadio["a" /* default */],VRadioGroup: VRadioGroup["a" /* default */],VRow: VRow["a" /* default */],VSimpleTable: VSimpleTable["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextField: VTextField["a" /* default */],VTooltip: VTooltip["a" /* default */]})


/***/ }),

/***/ 57:
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

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductImportMessageConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _ProductImportErrorMessageConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(574);
/* harmony import */ var _domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);





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
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].保存] = "LocalStorageへの保存。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].完了] = "完了。";
      m[_domain_product_import_ProductImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* ProductImportProgressStep */ "a"].成功] = "インポートが成功しました。";
      return m;
    }
  }]);

  return ProductImportMessageConverter;
}();


ProductImportMessageConverter.MESSAGE_DIC = ProductImportMessageConverter.initMap();

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductImportErrorMessageConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);




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
      m[_domain_product_import_ProductImportError__WEBPACK_IMPORTED_MODULE_2__[/* ProductImportError */ "a"].形式or構造が不正] = "形式が不正です。内容が読み取れない形式です。";
      return m;
    }
  }]);

  return ProductImportErrorMessageConverter;
}();


ProductImportErrorMessageConverter.MESSAGE_DIC = ProductImportErrorMessageConverter.initMap();

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiagramImportMessageConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _DiagramImportErrorMessageConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(576);
/* harmony import */ var _domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);





var DiagramImportMessageConverter = /*#__PURE__*/function () {
  function DiagramImportMessageConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DiagramImportMessageConverter);

    this.errorMessageConverter = new _DiagramImportErrorMessageConverter__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DiagramImportMessageConverter, [{
    key: "makeMessage",
    value: function makeMessage(event) {
      var main = DiagramImportMessageConverter.MESSAGE_DIC[event.step];
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
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].失敗] = "インポートが失敗しました。";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].エラー] = "エラー : ";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].キャンセル] = "インポートがキャンセルされました。";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].開始] = "インポートを開始します。";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].ファイル読み込み] = "ファイルの読み込み。";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].ユーザーアレンジ] = "ユーザーによる名前重複時の扱い受付。";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].形式チェック] = "ファイル内容・形式のチェック。";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].追加] = "プロダクトの追加・置き換え。";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].保存] = "図への保存。";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].完了] = "完了。";
      m[_domain_diagram_import_progress_DiagramImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* DiagramImportProgressStep */ "a"].成功] = "インポートが成功しました。";
      return m;
    }
  }]);

  return DiagramImportMessageConverter;
}();


DiagramImportMessageConverter.MESSAGE_DIC = DiagramImportMessageConverter.initMap();

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiagramImportErrorMessageConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _domain_diagram_import_progress_DiagramImportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);




var DiagramImportErrorMessageConverter = /*#__PURE__*/function () {
  function DiagramImportErrorMessageConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DiagramImportErrorMessageConverter);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DiagramImportErrorMessageConverter, [{
    key: "messageOf",
    value: function messageOf(error) {
      return DiagramImportErrorMessageConverter.MESSAGE_DIC[error];
    }
  }], [{
    key: "initMap",
    value: function initMap() {
      var m = {};
      m[_domain_diagram_import_progress_DiagramImportError__WEBPACK_IMPORTED_MODULE_2__[/* DiagramImportError */ "a"].なし] = "";
      m[_domain_diagram_import_progress_DiagramImportError__WEBPACK_IMPORTED_MODULE_2__[/* DiagramImportError */ "a"].予期せぬエラー] = "予期せぬエラーが発生しました。";
      m[_domain_diagram_import_progress_DiagramImportError__WEBPACK_IMPORTED_MODULE_2__[/* DiagramImportError */ "a"].ファイル名不正] = "RDRAMシステムからエクスポートされたものではないファイル名です。";
      m[_domain_diagram_import_progress_DiagramImportError__WEBPACK_IMPORTED_MODULE_2__[/* DiagramImportError */ "a"].サイズ超過] = "ファイルが大きすぎます。";
      m[_domain_diagram_import_progress_DiagramImportError__WEBPACK_IMPORTED_MODULE_2__[/* DiagramImportError */ "a"].非JSON形式] = "ファイル形式がRDRAMシステムのプロダクトエクスポートファイルではありません。";
      m[_domain_diagram_import_progress_DiagramImportError__WEBPACK_IMPORTED_MODULE_2__[/* DiagramImportError */ "a"].読込失敗] = "ローカルファイルの読み込みに失敗しました。";
      m[_domain_diagram_import_progress_DiagramImportError__WEBPACK_IMPORTED_MODULE_2__[/* DiagramImportError */ "a"].形式or構造が不正] = "形式が不正です。内容が読み取れない形式です。";
      return m;
    }
  }]);

  return DiagramImportErrorMessageConverter;
}();


DiagramImportErrorMessageConverter.MESSAGE_DIC = DiagramImportErrorMessageConverter.initMap();

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Behaviors; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(303);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Behavior__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(347);
/* harmony import */ var _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52);









var Behaviors = /*#__PURE__*/function () {
  function Behaviors() {
    var _this = this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Behaviors);

    this.behaviorsOfDiagramName = Object.values(_domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__[/* BehaviorWhenNameConflict */ "a"]).filter(function (value) {
      return typeof value !== 'string';
    }).map(function (value) {
      return value;
    }).filter(function (value) {
      return value !== _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__[/* BehaviorWhenNameConflict */ "a"].既存;
    }).map(function (value) {
      return new _Behavior__WEBPACK_IMPORTED_MODULE_6__["default"](value, _this.nameOf(value), _this.descriptionOfDiagramNameOf(value));
    });
    this.behaviorsOfResourceName = Object.values(_domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__[/* BehaviorWhenNameConflict */ "a"]).filter(function (value) {
      return typeof value !== 'string';
    }).map(function (value) {
      return value;
    }).map(function (value) {
      return new _Behavior__WEBPACK_IMPORTED_MODULE_6__["default"](value, _this.nameOf(value), _this.descriptionOfResourceNameOf(value));
    });
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Behaviors, [{
    key: "descriptionOfDiagramNameOf",
    value: function descriptionOfDiagramNameOf(value) {
      if (value === _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__[/* BehaviorWhenNameConflict */ "a"].置換) return "既にある「同名の図」をインポート内容で上書き・置き換えます。";
      if (value === _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__[/* BehaviorWhenNameConflict */ "a"].別名) return "入力した「新しい名前」でインポート内容の図を作成します。";
      return "";
    }
  }, {
    key: "descriptionOfResourceNameOf",
    value: function descriptionOfResourceNameOf(value) {
      if (value === _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__[/* BehaviorWhenNameConflict */ "a"].既存) return "インポートした図のアイコンは使わず、既にある「同名のアイコン」を使います。";
      if (value === _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__[/* BehaviorWhenNameConflict */ "a"].置換) return "既にある「同名のアイコン」をインポート内容で上書き・置き換えます。";
      if (value === _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__[/* BehaviorWhenNameConflict */ "a"].別名) return "入力した「新しい名前」でインポート内容のアイコンを作成します。";
      return "";
    }
  }, {
    key: "nameOf",
    value: function nameOf(value) {
      return _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_7__[/* BehaviorWhenNameConflict */ "a"][value];
    }
  }]);

  return Behaviors;
}();



/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconNameArrangeVM; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _domain_diagram_import_conflictname_ConflictNameBehavior__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);
/* harmony import */ var _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);







var IconNameArrangeVM = /*#__PURE__*/function () {
  function IconNameArrangeVM(srcName, destName, _behavior, sourceId, resourceType, parent) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, IconNameArrangeVM);

    this.srcName = srcName;
    this.destName = destName;
    this._behavior = _behavior;
    this.sourceId = sourceId;
    this.resourceType = resourceType;
    this.parent = parent;
    this.diagramNameMaxLength = 128;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(IconNameArrangeVM, [{
    key: "isNotAriasNameOfBehavior",
    value: function isNotAriasNameOfBehavior() {
      return this._behavior !== _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_3__[/* BehaviorWhenNameConflict */ "a"].別名;
    }
  }, {
    key: "toDomain",
    value: function toDomain() {
      return new _domain_diagram_import_conflictname_ConflictNameBehavior__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](this._behavior, this.srcName, this.destName, this.sourceId, this.resourceType.id);
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return this.destName === other.destName && this.resourceType.equals(other.resourceType);
    } // validation methods

  }, {
    key: "validateIconName",
    value: function validateIconName() {
      var name = this.destName;
      if (this.isNotAriasNameOfBehavior()) return true;
      if (name.trim().length === 0) return "別名を入力してください。";
      if (name.length > this.diagramNameMaxLength) return "".concat(this.diagramNameMaxLength, "\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      if (name.trim() === this.srcName) return "\u300C\u5143\u306E\u540D\u524D\u300D\u306F\u6307\u5B9A\u3067\u304D\u307E\u305B\u3093\u3002";
      return this.parent.validateoConfrictResourceOf(this);
    } // properties

  }, {
    key: "behavior",
    get: function get() {
      return this._behavior;
    },
    set: function set(value) {
      if (value !== _domain_diagram_import_userarrange_BehaviorWhenNameConflict__WEBPACK_IMPORTED_MODULE_3__[/* BehaviorWhenNameConflict */ "a"].別名) this.destName = "";
      this._behavior = value;
    } // factory methods

  }], [{
    key: "of",
    value: function of(conflictIconName, parent) {
      return new IconNameArrangeVM(conflictIconName.sourceName, conflictIconName.destinationName, conflictIconName.behavior, conflictIconName.sourceId, _domain_resource_ResourceType__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].ofId(conflictIconName.sourceType), parent);
    }
  }]);

  return IconNameArrangeVM;
}();



/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorageImportMessageConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _LocalStorageImportErrorMessageConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var _domain_storage_import_LocalStorageImportProgressStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);





var LocalStorageImportMessageConverter = /*#__PURE__*/function () {
  function LocalStorageImportMessageConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LocalStorageImportMessageConverter);

    this.errorMessageConverter = new _LocalStorageImportErrorMessageConverter__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LocalStorageImportMessageConverter, [{
    key: "makeMessage",
    value: function makeMessage(event) {
      var main = LocalStorageImportMessageConverter.MESSAGE_DIC[event.step];
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
      m[_domain_storage_import_LocalStorageImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* LocalStorageImportProgressStep */ "a"].失敗] = "インポートが失敗しました。";
      m[_domain_storage_import_LocalStorageImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* LocalStorageImportProgressStep */ "a"].エラー] = "エラー : ";
      m[_domain_storage_import_LocalStorageImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* LocalStorageImportProgressStep */ "a"].開始] = "インポートを開始します。";
      m[_domain_storage_import_LocalStorageImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* LocalStorageImportProgressStep */ "a"].ファイル読み込み] = "ファイルの読み込み。";
      m[_domain_storage_import_LocalStorageImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* LocalStorageImportProgressStep */ "a"].形式チェック] = "ファイル内容・形式のチェック。";
      m[_domain_storage_import_LocalStorageImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* LocalStorageImportProgressStep */ "a"].保存] = "LocalStorageへの保存。";
      m[_domain_storage_import_LocalStorageImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* LocalStorageImportProgressStep */ "a"].完了] = "完了。";
      m[_domain_storage_import_LocalStorageImportProgressStep__WEBPACK_IMPORTED_MODULE_3__[/* LocalStorageImportProgressStep */ "a"].成功] = "インポートが成功しました。";
      return m;
    }
  }]);

  return LocalStorageImportMessageConverter;
}();


LocalStorageImportMessageConverter.MESSAGE_DIC = LocalStorageImportMessageConverter.initMap();

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorageImportErrorMessageConverter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _domain_storage_import_LocalStorageImportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);




var LocalStorageImportErrorMessageConverter = /*#__PURE__*/function () {
  function LocalStorageImportErrorMessageConverter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LocalStorageImportErrorMessageConverter);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LocalStorageImportErrorMessageConverter, [{
    key: "messageOf",
    value: function messageOf(error) {
      return LocalStorageImportErrorMessageConverter.MESSAGE_DIC[error];
    }
  }], [{
    key: "initMap",
    value: function initMap() {
      var m = {};
      m[_domain_storage_import_LocalStorageImportError__WEBPACK_IMPORTED_MODULE_2__[/* LocalStorageImportError */ "a"].なし] = "";
      m[_domain_storage_import_LocalStorageImportError__WEBPACK_IMPORTED_MODULE_2__[/* LocalStorageImportError */ "a"].予期せぬエラー] = "予期せぬエラーが発生しました。";
      m[_domain_storage_import_LocalStorageImportError__WEBPACK_IMPORTED_MODULE_2__[/* LocalStorageImportError */ "a"].ファイル名不正] = "RDRAMシステムからエクスポートされたものではないファイル名です。";
      m[_domain_storage_import_LocalStorageImportError__WEBPACK_IMPORTED_MODULE_2__[/* LocalStorageImportError */ "a"].サイズ超過] = "ファイルが大きすぎます。";
      m[_domain_storage_import_LocalStorageImportError__WEBPACK_IMPORTED_MODULE_2__[/* LocalStorageImportError */ "a"].非JSON形式] = "ファイル形式がRDRAMシステムのプロダクトエクスポートファイルではありません。";
      m[_domain_storage_import_LocalStorageImportError__WEBPACK_IMPORTED_MODULE_2__[/* LocalStorageImportError */ "a"].読込失敗] = "ローカルファイルの読み込みに失敗しました。";
      m[_domain_storage_import_LocalStorageImportError__WEBPACK_IMPORTED_MODULE_2__[/* LocalStorageImportError */ "a"].形式or構造が不正] = "形式が不正です。内容が読み取れない形式です。";
      return m;
    }
  }]);

  return LocalStorageImportErrorMessageConverter;
}();


LocalStorageImportErrorMessageConverter.MESSAGE_DIC = LocalStorageImportErrorMessageConverter.initMap();

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=template&id=b55c13f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"dark":""}},[_c('v-navigation-drawer',{attrs:{"clipped":"","fixed":"","app":"","stateless":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',_vm._l((_vm.items),function(item,i){return _c('v-list-item',{key:i,attrs:{"to":item.to,"router":"","exact":""}},[_c('v-list-item-action',[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.title))])],1)],1)}),1)],1),_vm._v(" "),_c('v-app-bar',{attrs:{"clipped-left":"","fixed":"","app":""}},[_c('v-toolbar-title',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('TweetButton'),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.rightDrawer = !_vm.rightDrawer}}},[_c('v-icon',[_vm._v("mdi-menu")])],1)],1),_vm._v(" "),_c('v-main',[_c('v-container',[_c('Nuxt')],1)],1),_vm._v(" "),_c('v-navigation-drawer',{attrs:{"right":_vm.right,"temporary":"","fixed":"","width":"320"},model:{value:(_vm.rightDrawer),callback:function ($$v) {_vm.rightDrawer=$$v},expression:"rightDrawer"}},[_c('v-list',[_c('v-list-item',{nativeOn:{"click":function($event){_vm.right = !_vm.right}}},[_c('v-list-item-action',[_c('v-icon',{attrs:{"light":""}},[_vm._v("mdi-repeat")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("システムメニュー")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onChangeProduct}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-account-switch-outline")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("プロダクト切替え...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickImportProduct}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-import")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("プロダクトのインポート...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickImportDiagram}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-file-import")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("図のインポート...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickImportLocalStorage}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-file-replace")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("LocalStorageのインポート...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickDestryLocalStorage}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-delete-forever")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("LocalStorageの破棄...")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"link":""},on:{"click":_vm.onClickExportOfTangoRdraFile}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-alpha-t-circle")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v("tango/rdra形式エクスポート...")])],1)],1)],1),_vm._v(" "),_c('v-footer',{attrs:{"app":""}},[_c('span',[_c('span',{on:{"click":function($event){_vm.drawer = !_vm.drawer}}},[_vm._v("©")]),_vm._v(" "+_vm._s(new Date().getFullYear())+"\n      "),_c('a',{staticClass:"no-efect-link",attrs:{"target":"_new","href":"https://kazuhito-m.github.io/rdram"}},[_vm._v("rdram")])]),_vm._v(" "),_c('a',{staticClass:"auther-link",attrs:{"target":"_new","href":"https://twitter.com/kazuhito_m"}},[_c('v-icon',[_vm._v("mdi-twitter")]),_vm._v("kazuhito_m\n    ")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('a',{staticClass:"no-efect-link",attrs:{"target":"_new","href":"https://twitter.com/intent/tweet?url=https%3A%2F%2Fkazuhito-m.github.io%2Frdram&hashtags=rdram"}},[_c('v-icon',[_vm._v("mdi-share")])],1),_vm._v(" "),_c('a',{staticClass:"no-efect-link",attrs:{"target":"_new","href":"https://github.com/kazuhito-m/rdram/releases"}},[_vm._v("ver. "+_vm._s(_vm.selfVersion))])],1),_vm._v(" "),_c('ProductSelectorDialog',{attrs:{"visibleProductSelectorDialog":_vm.visibleProductSelector,"cancelable":_vm.productSelectorCancelable},on:{"onClose":_vm.onCloseChangeProduct}}),_vm._v(" "),_c('ProductImportDialog',{attrs:{"visible":_vm.visibleProductImportDialog},on:{"onClose":_vm.onCloseProductImportDialog}}),_vm._v(" "),_c('DiagramImportDialog',{attrs:{"visible":_vm.visibleDiagramImportDialog},on:{"onClose":_vm.onCloseDiagramImportDialog}}),_vm._v(" "),_c('LocalStorageInitializeDialog',{attrs:{"visible":_vm.visibleApplicationInitializationDialog},on:{"onClose":_vm.onCloseApplicationInitializationDialog}}),_vm._v(" "),_c('LocalStorageImportDialog',{attrs:{"visible":_vm.visibleLocalStorageImportDialog},on:{"onClose":_vm.onCloseLocalStorageImportDialog}}),_vm._v(" "),_c('LocalStorageDestroyDialog',{attrs:{"visible":_vm.visibleLocalStorageDestroyDialog},on:{"onClose":_vm.onCloseLocalStorageDestroyDialog}}),_vm._v(" "),_c('TangoRdraFileExportDialog',{attrs:{"visible":_vm.visibleExportTangoRdraFileDialog},on:{"onClose":_vm.onCloseTangoRdraFileExportDialog}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=template&id=b55c13f6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30);

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

// EXTERNAL MODULE: ./src/components/other/sosial/TweetButton.vue + 4 modules
var TweetButton = __webpack_require__(585);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(60);

// CONCATENATED MODULE: ./src/domain/storage/Status.ts



var Status_Status = /*#__PURE__*/function () {
  function Status(currentProductId) {
    Object(classCallCheck["a" /* default */])(this, Status);

    this.currentProductId = currentProductId;
  }

  Object(createClass["a" /* default */])(Status, null, [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Status("");
    }
  }]);

  return Status;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// CONCATENATED MODULE: ./src/domain/product/Products.ts















var Products_Products = /*#__PURE__*/function () {
  function Products(values) {
    Object(classCallCheck["a" /* default */])(this, Products);

    this.values = values;
  }

  Object(createClass["a" /* default */])(Products, [{
    key: "existsSameNameOf",
    value: function existsSameNameOf(name) {
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
    key: "length",
    value: function length() {
      return this.values.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.length() <= 0;
    }
  }, {
    key: "first",
    value: function first() {
      return this.values[0];
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new Products([]);
    }
  }]);

  return Products;
}();


// CONCATENATED MODULE: ./src/domain/storage/LocalStorage.ts








var LocalStorage_LocalStorage = /*#__PURE__*/function () {
  function LocalStorage(updateAt, status, products) {
    Object(classCallCheck["a" /* default */])(this, LocalStorage);

    this.updateAt = updateAt;
    this.status = status;
    this.products = products;
  }

  Object(createClass["a" /* default */])(LocalStorage, [{
    key: "renewTimeStamp",
    value: function renewTimeStamp() {
      return new LocalStorage(new Date(), this.status, this.products);
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
      return new LocalStorage(this.updateAt, new Status_Status(product.id), this.products.merge(product));
    }
  }, {
    key: "with",
    value: function _with(mearged) {
      return new LocalStorage(this.updateAt, this.status, mearged);
    }
  }, {
    key: "existsProductNameOf",
    value: function existsProductNameOf(name) {
      return this.products.existsSameNameOf(name);
    }
  }, {
    key: "isSelectedProduct",
    value: function isSelectedProduct() {
      var currentProductId = this.status.currentProductId;
      if (!currentProductId) return false;
      return this.products.list().map(function (product) {
        return product.id;
      }).includes(currentProductId);
    }
  }], [{
    key: "prototypeOf",
    value: function prototypeOf() {
      return new LocalStorage(new Date(), Status_Status.prototypeOf(), Products_Products.prototypeOf());
    }
  }]);

  return LocalStorage;
}();


// EXTERNAL MODULE: ./src/domain/setting/UserSettings.ts
var UserSettings = __webpack_require__(276);

// EXTERNAL MODULE: ./src/domain/product/Product.ts + 2 modules
var Product = __webpack_require__(176);

// EXTERNAL MODULE: ./src/domain/resource/Resources.ts + 1 modules
var Resources = __webpack_require__(108);

// EXTERNAL MODULE: ./src/domain/diagram/Diagrams.ts + 1 modules
var Diagrams = __webpack_require__(242);

// EXTERNAL MODULE: ./src/domain/diagram/Diagram.ts
var Diagram = __webpack_require__(174);

// EXTERNAL MODULE: ./src/domain/resource/Resource.ts
var Resource = __webpack_require__(83);

// EXTERNAL MODULE: ./src/domain/resource/Purpose.ts
var Purpose = __webpack_require__(177);

// EXTERNAL MODULE: ./src/domain/resource/Request.ts
var Request = __webpack_require__(196);

// EXTERNAL MODULE: ./src/domain/resource/Requirement.ts
var Requirement = __webpack_require__(195);

// EXTERNAL MODULE: ./src/domain/diagram/placement/Placement.ts
var Placement = __webpack_require__(279);

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
var Relation = __webpack_require__(353);

// EXTERNAL MODULE: ./src/domain/resource/Scenario.ts
var Scenario = __webpack_require__(197);

// EXTERNAL MODULE: ./src/domain/resource/StartOrEndPoint.ts
var StartOrEndPoint = __webpack_require__(112);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/systemcontext/SystemContextDiagram.ts
var SystemContextDiagram = __webpack_require__(283);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/businesscontext/BusinessContextDiagram.ts
var BusinessContextDiagram = __webpack_require__(278);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/informationmodel/InformationModelDiagram.ts
var InformationModelDiagram = __webpack_require__(281);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/statemodel/StateModelDiagram.ts
var StateModelDiagram = __webpack_require__(282);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/requrestmodel/RequestModelDiagram.ts
var RequestModelDiagram = __webpack_require__(288);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/businessusecase/BusinessUseCaseDiagram.ts
var BusinessUseCaseDiagram = __webpack_require__(280);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/businessflow/BusinessFlowDiagram.ts
var BusinessFlowDiagram = __webpack_require__(285);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/usagescene/UsageSceneDiagram.ts
var UsageSceneDiagram = __webpack_require__(284);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/usecasecomposite/UseCaseCompositeDiagram.ts
var UseCaseCompositeDiagram = __webpack_require__(286);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/variationandcondition/VariationAndConditionDiagram.ts
var VariationAndConditionDiagram = __webpack_require__(287);

// EXTERNAL MODULE: ./src/domain/diagram/custom/freestyle/FreestyleDiagram.ts + 1 modules
var FreestyleDiagram = __webpack_require__(298);

// EXTERNAL MODULE: ./src/domain/resource/Variation.ts
var Variation = __webpack_require__(173);

// EXTERNAL MODULE: ./src/domain/resource/Condition.ts
var Condition = __webpack_require__(172);

// EXTERNAL MODULE: ./src/domain/resource/TableTypeCondition.ts
var TableTypeCondition = __webpack_require__(135);

// CONCATENATED MODULE: ./src/domain/diagram/export/ExportedDiagram.ts



var ExportedDiagram_ExportedDiagram = /*#__PURE__*/Object(createClass["a" /* default */])(function ExportedDiagram(diagram, useResources) {
  Object(classCallCheck["a" /* default */])(this, ExportedDiagram);

  this.diagram = diagram;
  this.useResources = useResources;
});


// CONCATENATED MODULE: ./src/domain/Serializer.ts









































var Serializer_Serializer = /*#__PURE__*/function () {
  function Serializer() {
    Object(classCallCheck["a" /* default */])(this, Serializer);

    /** シリアライズで復元する可能性のあるクラスのコンストラクタ。 */
    this.constructors = [LocalStorage_LocalStorage, UserSettings["a" /* default */], Products_Products, Product["a" /* default */], Date, Status_Status, Resources["a" /* default */], Resource["a" /* default */], Purpose["a" /* default */], Request["a" /* default */], Requirement["a" /* default */], Scenario["a" /* default */], StartOrEndPoint["a" /* default */], Variation["a" /* default */], Condition["a" /* default */], TableTypeCondition["a" /* default */], Diagrams["a" /* default */], Diagram["a" /* default */], Placement["a" /* default */], Midpoint_Midpoint, Relation["a" /* default */], BusinessContextDiagram["a" /* default */], InformationModelDiagram["a" /* default */], StateModelDiagram["a" /* default */], SystemContextDiagram["a" /* default */], RequestModelDiagram["a" /* default */], BusinessUseCaseDiagram["a" /* default */], BusinessFlowDiagram["a" /* default */], UsageSceneDiagram["a" /* default */], UseCaseCompositeDiagram["a" /* default */], VariationAndConditionDiagram["a" /* default */], ExportedDiagram_ExportedDiagram, FreestyleDiagram["a" /* default */]];
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


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(40);

// CONCATENATED MODULE: ./src/domain/product/import/ImportedProduct.ts





var ImportedProduct_ImportedProduct = /*#__PURE__*/function () {
  function ImportedProduct(value) {
    Object(classCallCheck["a" /* default */])(this, ImportedProduct);

    this.value = value;
  }

  Object(createClass["a" /* default */])(ImportedProduct, [{
    key: "checkOfLogicalStructure",
    value: function checkOfLogicalStructure() {
      var p = this.value;

      try {
        return !!p.id && !!p.updateAt && p.name.trim().length > 0 && !!p.resourceIdSequence && p.resources.length >= 0 && p.diagrams.length >= 0;
      } catch (e) {
        return false;
      }
    }
  }]);

  return ImportedProduct;
}();


// CONCATENATED MODULE: ./src/domain/storage/import/ImportedLocalStorage.ts



var ImportedLocalStorage_ImportedLocalStorage = /*#__PURE__*/function () {
  function ImportedLocalStorage(value) {
    Object(classCallCheck["a" /* default */])(this, ImportedLocalStorage);

    this.value = value;
  }

  Object(createClass["a" /* default */])(ImportedLocalStorage, [{
    key: "checkOfLogicalStructure",
    value: function checkOfLogicalStructure() {
      var s = this.value;
      if (!s) return false;
      if (!s.updateAt || !s.status || !s.status.currentProductId || !s.products) return false;

      try {
        return s.products.length() >= 0;
      } catch (e) {
        return false;
      }
    }
  }]);

  return ImportedLocalStorage;
}();


// CONCATENATED MODULE: ./src/infrastructure/storage/StorageDatasource.ts









var StorageDatasource_StorageDatasource = /*#__PURE__*/function () {
  function StorageDatasource() {
    Object(classCallCheck["a" /* default */])(this, StorageDatasource);

    this.serializer = new Serializer_Serializer();
  }

  Object(createClass["a" /* default */])(StorageDatasource, [{
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
      localStorage.removeItem(StorageDatasource.STRAGE_ID);
    }
  }, {
    key: "defaultStructure",
    value: function defaultStructure() {
      return LocalStorage_LocalStorage.prototypeOf();
    }
  }, {
    key: "getJsonText",
    value: function getJsonText() {
      return localStorage.getItem(StorageDatasource.STRAGE_ID);
    }
  }, {
    key: "get",
    value: function get() {
      var startTime = performance.now();
      var textData = this.getJsonText();
      if (!textData) return null;
      var storage = this.serializer.deserialize(textData); // console.log('get :    ' + textData);

      console.log(storage);
      var ms = performance.now() - startTime;
      console.log("StorageDatasource.get(),      ".concat(new Blob([textData]).size, " byte\u53D6\u5F97\u3002").concat(ms.toFixed(3), " ms")); // alert('get: ' + textData);

      return storage;
    }
  }, {
    key: "getProductJsonTextOf",
    value: function getProductJsonTextOf(productId) {
      var storage = this.get();
      var product = storage === null || storage === void 0 ? void 0 : storage.products.of(productId);
      if (!product) return null;
      return this.serializer.serialize(product);
    }
  }, {
    key: "getDiagramJsonTextOf",
    value: function getDiagramJsonTextOf(exportedDiagram) {
      return this.serializer.serialize(exportedDiagram);
    }
  }, {
    key: "register",
    value: function register(storage) {
      var startTime = performance.now();
      var target = storage.renewTimeStamp();
      var jsonText = this.serializer.serialize(target);
      localStorage.setItem(StorageDatasource.STRAGE_ID, jsonText);
      var ms = performance.now() - startTime;
      console.log('register: ' + jsonText);
      console.log(target);
      console.log("StorageDatasource.register(), ".concat(new Blob([jsonText]).size, " byte\u4FDD\u5B58\u3002").concat(ms.toFixed(3), " ms")); // alert('reg: ' + jsonText);
    }
  }, {
    key: "getCurrentProduct",
    value: function getCurrentProduct() {
      var storage = this.get();
      if (!storage) return undefined;
      return storage.currentProduct();
    }
  }, {
    key: "registerCurrentProduct",
    value: function registerCurrentProduct(product) {
      var storage = this.get();
      if (!storage) return;
      var renewProduct = product.renewTimeStamp();
      var changed = storage.changeCurrent(renewProduct);
      var mearged = storage.products.merge(renewProduct);
      changed = changed.with(mearged);
      this.register(changed);
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.removeItem(StorageDatasource.STRAGE_ID);
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
      var imported = this.serializer.deserialize(jsonText);
      return new ImportedProduct_ImportedProduct(imported);
    }
  }, {
    key: "createLocalStorageByJsonOf",
    value: function createLocalStorageByJsonOf(jsonText) {
      var imported = this.serializer.deserialize(jsonText);
      return new ImportedLocalStorage_ImportedLocalStorage(imported);
    }
  }, {
    key: "createDiagramByJsonOf",
    value: function createDiagramByJsonOf(jsonText) {
      return this.serializer.deserialize(jsonText);
    }
  }]);

  return StorageDatasource;
}();


StorageDatasource_StorageDatasource.STRAGE_ID = 'rdram-storage';
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(679);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(405);

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
var ProductSelectorDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./src/components/product/import/ProductImportDialog.vue + 4 modules
var ProductImportDialog = __webpack_require__(343);

// EXTERNAL MODULE: ./src/components/diagrams/import/DiagramImportDialog.vue + 4 modules
var DiagramImportDialog = __webpack_require__(586);

// EXTERNAL MODULE: ./src/components/localstorage/import/LocalStorageImportDialog.vue + 4 modules
var LocalStorageImportDialog = __webpack_require__(587);

// EXTERNAL MODULE: ./src/components/localstorage/LocalStorageInitializeDialog.vue + 4 modules
var LocalStorageInitializeDialog = __webpack_require__(588);

// EXTERNAL MODULE: ./src/components/localstorage/LocalStorageDestroyDialog.vue + 4 modules
var LocalStorageDestroyDialog = __webpack_require__(589);

// EXTERNAL MODULE: ./src/components/tangordra/TangoRdraFileExportDialog.vue + 4 modules
var TangoRdraFileExportDialog = __webpack_require__(590);

// EXTERNAL MODULE: ./src/domain/storage/export/RdramLocalStorageExportFileName.ts
var RdramLocalStorageExportFileName = __webpack_require__(208);

// CONCATENATED MODULE: ./src/domain/client/export/RdramExportFile.ts



var RdramExportFile_RdramExportFile = /*#__PURE__*/function () {
  function RdramExportFile(json, clientFileName) {
    Object(classCallCheck["a" /* default */])(this, RdramExportFile);

    this.json = json;
    this.clientFileName = clientFileName;
  }

  Object(createClass["a" /* default */])(RdramExportFile, [{
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


// CONCATENATED MODULE: ./src/application/service/storage/export/LocalStorageExportService.ts





var LocalStorageExportService_LocalStorageExportService = /*#__PURE__*/function () {
  function LocalStorageExportService(storageRepository, clientDownloadRepository) {
    Object(classCallCheck["a" /* default */])(this, LocalStorageExportService);

    this.storageRepository = storageRepository;
    this.clientDownloadRepository = clientDownloadRepository;
  }

  Object(createClass["a" /* default */])(LocalStorageExportService, [{
    key: "downloadExportFileOnClient",
    value: function downloadExportFileOnClient() {
      var file = this.makeExportFile();
      if (!file) return false;
      this.downloadOnClientOf(file);
      return true;
    }
  }, {
    key: "makeExportFile",
    value: function makeExportFile() {
      var json = this.storageRepository.getJsonText();
      if (!json) return null;
      return new RdramExportFile_RdramExportFile(json, new RdramLocalStorageExportFileName["a" /* default */]());
    }
  }, {
    key: "downloadOnClientOf",
    value: function downloadOnClientOf(file) {
      this.clientDownloadRepository.register(file);
    }
  }, {
    key: "destroyLocalStorage",
    value: function destroyLocalStorage() {
      this.storageRepository.destroy();
    }
  }]);

  return LocalStorageExportService;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(88);

// EXTERNAL MODULE: ./src/domain/storage/import/LocalStorageImportProgressStep.ts
var LocalStorageImportProgressStep = __webpack_require__(75);

// EXTERNAL MODULE: ./src/domain/storage/import/LocalStorageImportError.ts
var LocalStorageImportError = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(35);

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


// CONCATENATED MODULE: ./src/domain/storage/import/LocalStorageImportProgressEvent.ts






var LocalStorageImportProgressEvent_LocalStorageImportProgressEvent = /*#__PURE__*/function () {
  function LocalStorageImportProgressEvent(step, error, optionalMessage) {
    Object(classCallCheck["a" /* default */])(this, LocalStorageImportProgressEvent);

    this.step = step;
    this.error = error;
    this.optionalMessage = optionalMessage;
  }

  Object(createClass["a" /* default */])(LocalStorageImportProgressEvent, [{
    key: "isError",
    value: function isError() {
      return this.error !== LocalStorageImportError["a" /* LocalStorageImportError */].なし;
    }
  }, {
    key: "stepNumber",
    value: function stepNumber() {
      return this.step;
    }
  }, {
    key: "percentage",
    value: function percentage() {
      var stepNubmer = this.stepNumber();
      if (stepNubmer <= 0) return 0;
      var endStep = EnumAnalyzer_EnumAnalyzer.muxNumberValueOf(LocalStorageImportProgressStep["a" /* LocalStorageImportProgressStep */]);
      return stepNubmer / endStep * 100;
    }
  }]);

  return LocalStorageImportProgressEvent;
}();


// CONCATENATED MODULE: ./src/application/service/storage/import/LocalStorageImportService.ts










var LocalStorageImportService_LocalStorageImportService = /*#__PURE__*/function () {
  function LocalStorageImportService(storageRepository, fileSystemRepository) {
    Object(classCallCheck["a" /* default */])(this, LocalStorageImportService);

    this.storageRepository = storageRepository;
    this.fileSystemRepository = fileSystemRepository;
  }

  Object(createClass["a" /* default */])(LocalStorageImportService, [{
    key: "importOf",
    value: function () {
      var _importOf = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, notifyProgress) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                notifyProgress(this.raise(LocalStorageImportProgressStep["a" /* LocalStorageImportProgressStep */].開始, "", file));
                _context.prev = 1;
                _context.next = 4;
                return this.doImport(file, notifyProgress);

              case 4:
                result = _context.sent;

                if (!result) {
                  _context.next = 8;
                  break;
                }

                notifyProgress(this.raise(LocalStorageImportProgressStep["a" /* LocalStorageImportProgressStep */].成功, "", file));
                return _context.abrupt("return", result);

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                notifyProgress(this.raiseError(LocalStorageImportError["a" /* LocalStorageImportError */].予期せぬエラー, "\n  ".concat(_context.t0)));

              case 13:
                notifyProgress(this.raise(LocalStorageImportProgressStep["a" /* LocalStorageImportProgressStep */].失敗, "", file));
                return _context.abrupt("return", null);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function importOf(_x, _x2) {
        return _importOf.apply(this, arguments);
      }

      return importOf;
    }()
  }, {
    key: "doImport",
    value: function () {
      var _doImport = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file, notifyProgress) {
        var result, jsonText, maybeStrage, storage;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                notifyProgress(this.raise(LocalStorageImportProgressStep["a" /* LocalStorageImportProgressStep */].ファイル読み込み));
                _context2.next = 3;
                return this.validateOf(file);

              case 3:
                result = _context2.sent;

                if (!(result !== LocalStorageImportError["a" /* LocalStorageImportError */].なし)) {
                  _context2.next = 7;
                  break;
                }

                notifyProgress(this.raiseError(result));
                return _context2.abrupt("return", null);

              case 7:
                _context2.next = 9;
                return this.fileSystemRepository.readFile(file);

              case 9:
                jsonText = _context2.sent;
                maybeStrage = this.storageRepository.createLocalStorageByJsonOf(jsonText);
                notifyProgress(this.raise(LocalStorageImportProgressStep["a" /* LocalStorageImportProgressStep */].形式チェック));

                if (maybeStrage.checkOfLogicalStructure()) {
                  _context2.next = 15;
                  break;
                }

                notifyProgress(this.raiseError(LocalStorageImportError["a" /* LocalStorageImportError */].形式or構造が不正));
                return _context2.abrupt("return", null);

              case 15:
                notifyProgress(this.raise(LocalStorageImportProgressStep["a" /* LocalStorageImportProgressStep */].保存));
                storage = maybeStrage.value;
                this.storageRepository.register(storage);
                notifyProgress(this.raise(LocalStorageImportProgressStep["a" /* LocalStorageImportProgressStep */].完了, "\u7F6E\u304D\u63DB\u3048\u305FLocalStrage\u306F \"".concat(storage.updateAt, "\" \u5F53\u6642\u306B\u51FA\u529B\u3055\u308C\u305F\u3082\u306E\u3067\u3059\u3002")));
                return _context2.abrupt("return", storage);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function doImport(_x3, _x4) {
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
      return new LocalStorageImportProgressEvent_LocalStorageImportProgressEvent(step, LocalStorageImportError["a" /* LocalStorageImportError */].なし, message + fileCaption);
    }
  }, {
    key: "raiseError",
    value: function raiseError(error) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return new LocalStorageImportProgressEvent_LocalStorageImportProgressEvent(LocalStorageImportProgressStep["a" /* LocalStorageImportProgressStep */].エラー, error, message);
    }
  }, {
    key: "validateOf",
    value: function () {
      var _validateOf = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(file) {
        var MAX_MB, text, isJson;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                MAX_MB = 100 * 1024 * 1024;

                if (file) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", LocalStorageImportError["a" /* LocalStorageImportError */].なし);

              case 3:
                if (RdramLocalStorageExportFileName["a" /* default */].isApplicableOf(file.name)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", LocalStorageImportError["a" /* LocalStorageImportError */].ファイル名不正);

              case 5:
                if (!(file.size > MAX_MB)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", LocalStorageImportError["a" /* LocalStorageImportError */].サイズ超過);

              case 7:
                _context3.next = 9;
                return this.fileSystemRepository.readFile(file);

              case 9:
                text = _context3.sent;

                if (!(text === null)) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return", LocalStorageImportError["a" /* LocalStorageImportError */].読込失敗);

              case 12:
                _context3.next = 14;
                return this.fileSystemRepository.isJsonFile(file);

              case 14:
                isJson = _context3.sent;

                if (isJson) {
                  _context3.next = 17;
                  break;
                }

                return _context3.abrupt("return", LocalStorageImportError["a" /* LocalStorageImportError */].非JSON形式);

              case 17:
                return _context3.abrupt("return", LocalStorageImportError["a" /* LocalStorageImportError */].なし);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function validateOf(_x5) {
        return _validateOf.apply(this, arguments);
      }

      return validateOf;
    }()
  }]);

  return LocalStorageImportService;
}();


// EXTERNAL MODULE: ./src/domain/product/export/RdramProductExportFileName.ts
var RdramProductExportFileName = __webpack_require__(205);

// CONCATENATED MODULE: ./src/application/service/product/export/ProductExportService.ts





var ProductExportService_ProductExportService = /*#__PURE__*/function () {
  function ProductExportService(storageRepository, clientDownloadRepository) {
    Object(classCallCheck["a" /* default */])(this, ProductExportService);

    this.storageRepository = storageRepository;
    this.clientDownloadRepository = clientDownloadRepository;
  }

  Object(createClass["a" /* default */])(ProductExportService, [{
    key: "downloadExportFileOnClient",
    value: function downloadExportFileOnClient(productId) {
      var file = this.makeExportFileOf(productId);
      if (!file) return false;
      this.clientDownloadRepository.register(file);
      return true;
    }
  }, {
    key: "makeExportFileOf",
    value: function makeExportFileOf(productId) {
      var storage = this.storageRepository.get();
      var product = storage === null || storage === void 0 ? void 0 : storage.products.of(productId);
      if (!product) return null;
      var productJson = this.storageRepository.getProductJsonTextOf(productId);
      if (!productJson) return null;
      var fileName = RdramProductExportFileName["a" /* default */].of(product);
      return new RdramExportFile_RdramExportFile(productJson, fileName);
    }
  }]);

  return ProductExportService;
}();


// EXTERNAL MODULE: ./src/domain/product/import/ProductImportProgressStep.ts
var ProductImportProgressStep = __webpack_require__(57);

// EXTERNAL MODULE: ./src/domain/product/import/ProductImportError.ts
var ProductImportError = __webpack_require__(62);

// CONCATENATED MODULE: ./src/domain/product/import/ProductImportProgressEvent.ts






var ProductImportProgressEvent_ProductImportProgressEvent = /*#__PURE__*/function () {
  function ProductImportProgressEvent(step, error, optionalMessage) {
    Object(classCallCheck["a" /* default */])(this, ProductImportProgressEvent);

    this.step = step;
    this.error = error;
    this.optionalMessage = optionalMessage;
  }

  Object(createClass["a" /* default */])(ProductImportProgressEvent, [{
    key: "isError",
    value: function isError() {
      return this.error !== ProductImportError["a" /* ProductImportError */].なし;
    }
  }, {
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
  function ProductImportService(storageRepository, fileSystemRepository) {
    Object(classCallCheck["a" /* default */])(this, ProductImportService);

    this.storageRepository = storageRepository;
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
        var result, jsonText, maybeProduct, storage, fixedProduct, updatedStorage;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].ファイル読み込み));
                _context2.next = 3;
                return this.validateOf(file);

              case 3:
                result = _context2.sent;

                if (!(result !== ProductImportError["a" /* ProductImportError */].なし)) {
                  _context2.next = 7;
                  break;
                }

                notifyProgress(this.raiseError(result));
                return _context2.abrupt("return", null);

              case 7:
                _context2.next = 9;
                return this.fileSystemRepository.readFile(file);

              case 9:
                jsonText = _context2.sent;
                maybeProduct = this.storageRepository.createProductByJsonOf(jsonText);
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].形式チェック));

                if (maybeProduct.checkOfLogicalStructure()) {
                  _context2.next = 15;
                  break;
                }

                notifyProgress(this.raiseError(ProductImportError["a" /* ProductImportError */].形式or構造が不正));
                return _context2.abrupt("return", null);

              case 15:
                storage = this.storageRepository.get();
                fixedProduct = this.fixDuplicateNameOf(maybeProduct, confirmeProductName, storage);

                if (!(fixedProduct === null)) {
                  _context2.next = 20;
                  break;
                }

                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].キャンセル));
                return _context2.abrupt("return", null);

              case 20:
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].追加));
                updatedStorage = storage.mergeByProductName(fixedProduct);
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].保存));
                this.storageRepository.register(updatedStorage);
                notifyProgress(this.raise(ProductImportProgressStep["a" /* ProductImportProgressStep */].完了, "product name: \"".concat(fixedProduct.name, "\"")));
                return _context2.abrupt("return", fixedProduct);

              case 26:
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
    key: "fixDuplicateNameOf",
    value: function fixDuplicateNameOf(maybeProduct, confirmeProductName, storage) {
      var product = maybeProduct.value;
      if (!storage.existsProductNameOf(product.name)) return product;
      var newName = confirmeProductName(product.name).trim();
      if (newName === "") return null;
      return product.renameOf(newName);
    }
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
    value: function () {
      var _validateOf = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(file) {
        var MAX_MB, text, isJson;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                MAX_MB = 100 * 1024 * 1024;

                if (file) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", ProductImportError["a" /* ProductImportError */].なし);

              case 3:
                if (RdramProductExportFileName["a" /* default */].isApplicableOf(file.name)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", ProductImportError["a" /* ProductImportError */].ファイル名不正);

              case 5:
                if (!(file.size > MAX_MB)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", ProductImportError["a" /* ProductImportError */].サイズ超過);

              case 7:
                _context3.next = 9;
                return this.fileSystemRepository.readFile(file);

              case 9:
                text = _context3.sent;

                if (!(text === null)) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return", ProductImportError["a" /* ProductImportError */].読込失敗);

              case 12:
                _context3.next = 14;
                return this.fileSystemRepository.isJsonFile(file);

              case 14:
                isJson = _context3.sent;

                if (isJson) {
                  _context3.next = 17;
                  break;
                }

                return _context3.abrupt("return", ProductImportError["a" /* ProductImportError */].非JSON形式);

              case 17:
                return _context3.abrupt("return", ProductImportError["a" /* ProductImportError */].なし);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function validateOf(_x7) {
        return _validateOf.apply(this, arguments);
      }

      return validateOf;
    }()
  }, {
    key: "hitCurrentProductOf",
    value: function hitCurrentProductOf(productIds) {
      var currentProduct = this.storageRepository.getCurrentProduct();
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
                return _context.abrupt("return", json !== null);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", false);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
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
        var maybeText, text;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (file) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", null);

              case 2:
                _context2.next = 4;
                return this.readFile(file);

              case 4:
                maybeText = _context2.sent;

                if (maybeText) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", null);

              case 7:
                text = maybeText;

                if (!(text.trim().length === 0)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", null);

              case 10:
                return _context2.abrupt("return", JSON.parse(maybeText));

              case 11:
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


// EXTERNAL MODULE: ./node_modules/yaml/browser/index.js + 63 modules
var browser = __webpack_require__(583);

// EXTERNAL MODULE: ./src/domain/client/WithTimestampFileName.ts
var WithTimestampFileName = __webpack_require__(249);

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
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.delete-all.js
var esnext_map_delete_all = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.every.js
var esnext_map_every = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.filter.js
var esnext_map_filter = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find.js
var esnext_map_find = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find-key.js
var esnext_map_find_key = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.includes.js
var esnext_map_includes = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.key-of.js
var esnext_map_key_of = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-keys.js
var esnext_map_map_keys = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-values.js
var esnext_map_map_values = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.merge.js
var esnext_map_merge = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.reduce.js
var esnext_map_reduce = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.some.js
var esnext_map_some = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.update.js
var esnext_map_update = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(593);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__(594);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__(595);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__(596);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__(597);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__(598);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__(599);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__(600);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__(601);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__(602);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__(603);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__(604);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__(605);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__(606);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__(607);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__(608);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__(609);

// EXTERNAL MODULE: ./src/domain/resource/ResourceType.ts + 1 modules
var ResourceType = __webpack_require__(3);

// EXTERNAL MODULE: ./src/domain/diagram/rdra20/Rdra20DiagramType.ts
var Rdra20DiagramType = __webpack_require__(33);

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
      return product.diagrams.typeOf(Rdra20DiagramType["a" /* default */].状態モデル図).map(function (diagram) {
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


// CONCATENATED MODULE: ./src/domain/tangordra/export/partmaker/BusinessesPartMaker.ts










var BusinessesPartMaker_BusinessesPartMaker = /*#__PURE__*/function () {
  function BusinessesPartMaker() {
    Object(classCallCheck["a" /* default */])(this, BusinessesPartMaker);
  }

  Object(createClass["a" /* default */])(BusinessesPartMaker, [{
    key: "make",
    value: function make(product) {
      var _this = this;

      return product.diagrams.typeOf(Rdra20DiagramType["a" /* default */].ビジネスユースケース図).map(function (diagram) {
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
      var ucDiagram = product.diagrams.typeOf(Rdra20DiagramType["a" /* default */].ユースケース複合図).nameOf(buc.name);
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
      var maybeRelatedResources = product.diagrams.typeOf(Rdra20DiagramType["a" /* default */].ユースケース複合図).allRelations().uniqueIgnoreDirection().filter(function (relation) {
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
  function TangoRdraFileService(storageRepository) {
    Object(classCallCheck["a" /* default */])(this, TangoRdraFileService);

    this.storageRepository = storageRepository;
  }

  Object(createClass["a" /* default */])(TangoRdraFileService, [{
    key: "generateExportFile",
    value: function generateExportFile() {
      var currentProduct = this.storageRepository.getCurrentProduct();
      if (!currentProduct) return TangoRdraExportFile_TangoRdraExportFile.empty();
      var yaml = this.generateTangoRdraOf(currentProduct);
      return new TangoRdraExportFile_TangoRdraExportFile(yaml, currentProduct.name);
    }
  }, {
    key: "generateTangoRdraOf",
    value: function generateTangoRdraOf(producet) {
      var converter = new ProductToTangoRdraConverter_ProductToTangoRdraConverter();
      var tangoRdra = converter.convert(producet);
      return browser["a" /* default */].stringify(tangoRdra);
    }
  }, {
    key: "currentProductName",
    value: function currentProductName() {
      var currentProduct = this.storageRepository.getCurrentProduct();
      return currentProduct === null || currentProduct === void 0 ? void 0 : currentProduct.name;
    }
  }]);

  return TangoRdraFileService;
}();


// EXTERNAL MODULE: ./src/domain/diagram/export/RdramDiagramExportFileName.ts
var RdramDiagramExportFileName = __webpack_require__(207);

// CONCATENATED MODULE: ./src/application/service/diagram/export/DiagramExportService.ts











var DiagramExportService_DiagramExportService = /*#__PURE__*/function () {
  function DiagramExportService(storageRepository, clientDownloadRepository) {
    Object(classCallCheck["a" /* default */])(this, DiagramExportService);

    this.storageRepository = storageRepository;
    this.clientDownloadRepository = clientDownloadRepository;
  }

  Object(createClass["a" /* default */])(DiagramExportService, [{
    key: "downloadExportFileOnClient",
    value: function downloadExportFileOnClient(diagramId) {
      var file = this.makeExportFileOf(diagramId);
      if (!file) return false;
      this.clientDownloadRepository.register(file);
      return true;
    }
  }, {
    key: "makeExportFileOf",
    value: function makeExportFileOf(diagramId) {
      var storage = this.storageRepository.get();
      var product = storage === null || storage === void 0 ? void 0 : storage.currentProduct();
      if (!product) return null;
      var diagram = product.diagrams.of(diagramId);
      if (!diagram) return null;
      var exported = this.makeExportDiagram(diagram, product);
      var diagramJson = this.storageRepository.getDiagramJsonTextOf(exported);
      if (!diagramJson) return null;
      var fileName = RdramDiagramExportFileName["a" /* default */].of(diagram);
      return new RdramExportFile_RdramExportFile(diagramJson, fileName);
    }
  }, {
    key: "makeExportDiagram",
    value: function makeExportDiagram(diagram, product) {
      var useResourceIds = diagram.placements.map(function (placement) {
        return placement.resourceId;
      });
      var useResources = product.resources.filter(function (resource) {
        return useResourceIds.includes(resource.resourceId);
      });
      return new ExportedDiagram_ExportedDiagram(diagram, useResources);
    }
  }]);

  return DiagramExportService;
}();


// EXTERNAL MODULE: ./src/domain/diagram/import/progress/DiagramImportProgressStep.ts
var DiagramImportProgressStep = __webpack_require__(54);

// EXTERNAL MODULE: ./src/domain/diagram/import/progress/DiagramImportError.ts
var DiagramImportError = __webpack_require__(63);

// CONCATENATED MODULE: ./src/domain/diagram/import/progress/DiagramImportProgressEvent.ts






var DiagramImportProgressEvent_DiagramImportProgressEvent = /*#__PURE__*/function () {
  function DiagramImportProgressEvent(step, error, optionalMessage) {
    Object(classCallCheck["a" /* default */])(this, DiagramImportProgressEvent);

    this.step = step;
    this.error = error;
    this.optionalMessage = optionalMessage;
  }

  Object(createClass["a" /* default */])(DiagramImportProgressEvent, [{
    key: "isError",
    value: function isError() {
      return this.error !== DiagramImportError["a" /* DiagramImportError */].なし;
    }
  }, {
    key: "stepNumber",
    value: function stepNumber() {
      return this.step;
    }
  }, {
    key: "percentage",
    value: function percentage() {
      var stepNubmer = this.stepNumber();
      if (stepNubmer <= 0) return 0;
      var endStep = EnumAnalyzer_EnumAnalyzer.muxNumberValueOf(DiagramImportProgressStep["a" /* DiagramImportProgressStep */]);
      return stepNubmer / endStep * 100;
    }
  }]);

  return DiagramImportProgressEvent;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(302);

// CONCATENATED MODULE: ./src/domain/diagram/import/ImportDiagramCandidate.ts





/**
 * 図のインポート候補。
 * <p>
 * インポート中の「中間状態」として、何度か書き換えられる。
 */
var ImportDiagramCandidate_ImportDiagramCandidate = /*#__PURE__*/function () {
  function ImportDiagramCandidate(diagram, useResources) {
    Object(classCallCheck["a" /* default */])(this, ImportDiagramCandidate);

    this.diagram = diagram;
    this.useResources = useResources;
  }
  /**
   * 一度「自身のシステムに無いResourceId群」にするため、すべてのResorceIdを正負反転する。
   */


  Object(createClass["a" /* default */])(ImportDiagramCandidate, [{
    key: "replaceUniqueResourceIds",
    value: function replaceUniqueResourceIds() {
      var diagram = this.diagram;
      var placements = diagram.placements.map(function (p) {
        return p.withResourceIdOf(-p.resourceId);
      });
      var relations = diagram.allRelations().map(function (r) {
        return r.withFrom(-r.fromResourceId).withTo(-r.toResourceId);
      });
      var newDiaglam = diagram.replacePlacement(placements).replaceRelations(relations);
      var newResources = this.useResources.map(function (r) {
        return r.renewId(-r.resourceId);
      });
      return new ImportDiagramCandidate(newDiaglam, newResources);
    }
  }, {
    key: "mergeOf",
    value: function mergeOf(product) {
      var modifiedProduct = product;
      var fixedDiagram = this.diagram;
      var fixedResources = this.useResources.map(function (r) {
        if (r.resourceId > 0) return r;
        var reIdResource = r.renewId(modifiedProduct.resourceIdSequence);
        modifiedProduct = modifiedProduct.moveNextResourceIdSequence();
        fixedDiagram = fixedDiagram.replaceOf(r, reIdResource);
        return reIdResource;
      }).reduce(function (resources, resouce) {
        return resources.mergeByIdOf(resouce);
      }, modifiedProduct.resources);
      return modifiedProduct.withResources(fixedResources).mergeDiagramWhenSameOf(fixedDiagram);
    }
  }, {
    key: "diagramType",
    get: function get() {
      return this.diagram.type;
    }
  }]);

  return ImportDiagramCandidate;
}();


// CONCATENATED MODULE: ./src/domain/resource/import/MaybeImportResource.ts



function MaybeImportResource_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = MaybeImportResource_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function MaybeImportResource_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MaybeImportResource_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MaybeImportResource_arrayLikeToArray(o, minLen); }

function MaybeImportResource_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




















var MaybeImportResource_MaybeImportResource = /*#__PURE__*/function () {
  function MaybeImportResource(value) {
    Object(classCallCheck["a" /* default */])(this, MaybeImportResource);

    this.value = value;
  }

  Object(createClass["a" /* default */])(MaybeImportResource, [{
    key: "checkOfLogicalStructure",
    value: function checkOfLogicalStructure() {
      var r = this.value;

      try {
        if (!this.validate()) return false;
        if (r instanceof Condition["a" /* default */] && !this.validateCondition(r)) return false;
        if (r instanceof Purpose["a" /* default */] && !this.validateHasContent(r)) return false;
        if (r instanceof Request["a" /* default */] && !this.validateHasContent(r)) return false;
        if (r instanceof Requirement["a" /* default */] && !this.validateHasContent(r)) return false;
        if (r instanceof Scenario["a" /* default */] && !this.validateHasContent(r)) return false;
        if (r instanceof StartOrEndPoint["a" /* default */] && !this.validateStartOrEndPoint(r)) return false;
        if (r instanceof TableTypeCondition["a" /* default */] && !this.validateTableTypeCondition(r)) return false;
        if (r instanceof Variation["a" /* default */] && !this.validateVariation(r)) return false;
        return true;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      var r = this.value;
      return r.resourceId > 0 && r.type.name.length > 0 && r.name.length > 0 && r.description.length >= 0 && (r.deletable === true || r.deletable === false);
    }
  }, {
    key: "validateCondition",
    value: function validateCondition(c) {
      return c.value.length > 0;
    }
  }, {
    key: "validateHasContent",
    value: function validateHasContent(h) {
      return h.content.length > 0;
    }
  }, {
    key: "validateStartOrEndPoint",
    value: function validateStartOrEndPoint(s) {
      return s.startPoint === true || s.startPoint === false;
    }
  }, {
    key: "validateTableTypeCondition",
    value: function validateTableTypeCondition(t) {
      var valid = t.leftVariationId > 0 && t.topVariationId > 0;
      if (!valid) return false;

      var _iterator = MaybeImportResource_createForOfIteratorHelper(t.valuesOf()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var values = _step.value;

          var _iterator2 = MaybeImportResource_createForOfIteratorHelper(values),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var value = _step2.value;
              if (value.length <= 0) return false;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }, {
    key: "validateVariation",
    value: function validateVariation(v) {
      var _iterator3 = MaybeImportResource_createForOfIteratorHelper(v.valuesOf()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var value = _step3.value;
          if (value.length <= 0) return false;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return true;
    }
  }, {
    key: "resourceId",
    value: function resourceId() {
      return this.value.resourceId;
    }
  }]);

  return MaybeImportResource;
}();


// CONCATENATED MODULE: ./src/domain/relation/import/MaybeImportRelation.ts




var MaybeImportRelation_MaybeImportRelation = /*#__PURE__*/function () {
  function MaybeImportRelation(value) {
    Object(classCallCheck["a" /* default */])(this, MaybeImportRelation);

    this.value = value;
  }

  Object(createClass["a" /* default */])(MaybeImportRelation, [{
    key: "validate",
    value: function validate() {
      var r = this.value;
      if (!r) return false;

      try {
        return r.id.length > 0 && r.fromResourceId > 0 && r.toResourceId > 0 && r.routerType.name.length > 0 && (r.tipAllow === true || r.tipAllow === false) && r.meaning.length >= 0 && r.midpoints.length >= 0;
      } catch (e) {
        return false;
      }
    }
  }]);

  return MaybeImportRelation;
}();


// CONCATENATED MODULE: ./src/domain/diagram/placement/import/MaybeImportPlacement.ts



var MaybeImportPlacement_MaybeImportPlacement = /*#__PURE__*/function () {
  function MaybeImportPlacement(value) {
    Object(classCallCheck["a" /* default */])(this, MaybeImportPlacement);

    this.value = value;
  }

  Object(createClass["a" /* default */])(MaybeImportPlacement, [{
    key: "validate",
    value: function validate() {
      var p = this.value;
      if (!p) return false;

      try {
        return p.x >= 0 && p.y >= 0 && p.width >= 0 && p.height >= 0 && p.resourceId > 0 && (p.alias === true || p.alias === false);
      } catch (e) {
        return false;
      }
    }
  }]);

  return MaybeImportPlacement;
}();


// CONCATENATED MODULE: ./src/domain/diagram/import/MaybeImportDiagram.ts














var MaybeImportDiagram_MaybeImportDiagram = /*#__PURE__*/function () {
  function MaybeImportDiagram(diagram, resources) {
    Object(classCallCheck["a" /* default */])(this, MaybeImportDiagram);

    this.diagram = diagram;
    this.resources = resources;
  }

  Object(createClass["a" /* default */])(MaybeImportDiagram, [{
    key: "checkOfLogicalStructure",
    value: function checkOfLogicalStructure() {
      var d = this.diagram;

      try {
        return this.validate() && d.allRelations().map(function (r) {
          return new MaybeImportRelation_MaybeImportRelation(r);
        }).every(function (ir) {
          return ir.validate();
        }) && d.placements.map(function (p) {
          return new MaybeImportPlacement_MaybeImportPlacement(p);
        }).every(function (ip) {
          return ip.validate();
        }) && this.checkOfLogicalResources() && this.checkOfLogicalRelations();
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      var d = this.diagram;
      return d.id > 0 && d.type.id > 0 && d.name.length > 0 && d.allRelations().length >= 0 && d.placements.length >= 0 && d.width > 0 && d.height > 0 && d.canvasGuideType > 0;
    }
  }, {
    key: "checkOfLogicalResources",
    value: function checkOfLogicalResources() {
      var resourcesIsLogical = this.resources.every(function (resource) {
        return resource.checkOfLogicalStructure();
      });
      if (!resourcesIsLogical) return false;
      var idsOnDiagram = this.diagram.placements.map(function (placement) {
        return placement.resourceId;
      });
      var useIds = this.resources.map(function (use) {
        return use.resourceId();
      });
      return this.equalArrays(idsOnDiagram, useIds);
    }
  }, {
    key: "equalArrays",
    value: function equalArrays(left, right) {
      if (left.length !== right.length) return false;
      var sortedL = this.sort(left);
      var sortedR = this.sort(right);

      for (var i = 0; i < sortedL.length; i++) {
        if (sortedL[i] !== sortedR[i]) return false;
      }

      return true;
    }
  }, {
    key: "sort",
    value: function sort(numbers) {
      return numbers.slice().sort(function (l, r) {
        return l - r;
      });
    }
  }, {
    key: "checkOfLogicalRelations",
    value: function checkOfLogicalRelations() {
      var useIds = this.resources.map(function (use) {
        return use.resourceId();
      });
      return this.diagram.allRelations().map(function (r) {
        return r;
      }).every(function (r) {
        return useIds.includes(r.fromResourceId) && useIds.includes(r.toResourceId);
      });
    }
  }, {
    key: "toCandidate",
    value: function toCandidate() {
      var useResources = this.resources.map(function (maybeResource) {
        return maybeResource.value;
      });
      var candidate = new ImportDiagramCandidate_ImportDiagramCandidate(this.diagram, useResources);
      return candidate.replaceUniqueResourceIds();
    }
  }], [{
    key: "of",
    value: function of(exportedDiagram) {
      if (!exportedDiagram || !exportedDiagram.diagram || !exportedDiagram.useResources) return null;
      var importedResouces = exportedDiagram.useResources.map(function (r) {
        return new MaybeImportResource_MaybeImportResource(r);
      });
      return new MaybeImportDiagram(exportedDiagram.diagram, importedResouces);
    }
  }]);

  return MaybeImportDiagram;
}();


// EXTERNAL MODULE: ./src/domain/diagram/import/conflictname/ConflictNameBehavior.ts
var ConflictNameBehavior = __webpack_require__(120);

// EXTERNAL MODULE: ./src/domain/diagram/import/userarrange/UserArrangeOfImportDiagram.ts
var UserArrangeOfImportDiagram = __webpack_require__(169);

// CONCATENATED MODULE: ./src/domain/diagram/import/conflictname/NameConflictAnalyzer.ts








/**
 * 既存のプロダクトとインポートしようとしている図・リソースで
 * 「名前の衝突」の解析責務を持つクラス。
 */

var NameConflictAnalyzer_NameConflictAnalyzer = /*#__PURE__*/function () {
  function NameConflictAnalyzer() {
    Object(classCallCheck["a" /* default */])(this, NameConflictAnalyzer);
  }

  Object(createClass["a" /* default */])(NameConflictAnalyzer, [{
    key: "analyzeOf",
    value: function analyzeOf(candidate, product) {
      var diagram = candidate.diagram;
      var existsDiagram = product.diagrams.existsSameOf(diagram);
      var colidedName = existsDiagram ? ConflictNameBehavior["a" /* default */].prototypeDiagramOf(diagram) : ConflictNameBehavior["a" /* default */].empty();
      var allResources = product.resources;
      var sameResources = candidate.useResources.filter(function (r) {
        return allResources.existsSameOf(r);
      }).map(function (r) {
        return ConflictNameBehavior["a" /* default */].prototypeResourceOf(r);
      });
      return new UserArrangeOfImportDiagram["a" /* default */](diagram.name, colidedName, sameResources, diagram.type);
    }
  }]);

  return NameConflictAnalyzer;
}();


// EXTERNAL MODULE: ./src/domain/diagram/import/userarrange/BehaviorWhenNameConflict.ts
var BehaviorWhenNameConflict = __webpack_require__(52);

// CONCATENATED MODULE: ./src/domain/diagram/import/userarrange/ImportDiagramArranger.ts














function ImportDiagramArranger_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = ImportDiagramArranger_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function ImportDiagramArranger_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ImportDiagramArranger_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ImportDiagramArranger_arrayLikeToArray(o, minLen); }

function ImportDiagramArranger_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * 名前が重複した場合「ユーザーの指定」を受けて、
 * インポートの中間状態(候補)をアレンジする責務を持つクラス。
 */

var ImportDiagramArranger_ImportDiagramArranger = /*#__PURE__*/function () {
  function ImportDiagramArranger() {
    Object(classCallCheck["a" /* default */])(this, ImportDiagramArranger);
  }

  Object(createClass["a" /* default */])(ImportDiagramArranger, [{
    key: "arrangeOf",
    value: function arrangeOf(userArrange, candidate, product) {
      var diagram = candidate.diagram;
      var resources = new Resources["a" /* default */](candidate.useResources);

      var _iterator = ImportDiagramArranger_createForOfIteratorHelper(userArrange.conflictResourceNames),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var colidedResourceName = _step.value;
          var targetResouce = resources.of(colidedResourceName.sourceId);
          var sameResource = product.resources.getSameOf(targetResouce);
          var behavior = colidedResourceName.behavior;

          if (behavior === BehaviorWhenNameConflict["a" /* BehaviorWhenNameConflict */].既存) {
            resources = resources.remove(targetResouce);
            diagram = diagram.replaceOf(targetResouce, sameResource);
          }

          if (behavior === BehaviorWhenNameConflict["a" /* BehaviorWhenNameConflict */].置換) {
            var replacedIdResource = targetResouce.renewId(sameResource.resourceId);
            resources = resources.mergeBySameOf(replacedIdResource);
            diagram = diagram.replaceOf(targetResouce, replacedIdResource);
          }

          if (behavior === BehaviorWhenNameConflict["a" /* BehaviorWhenNameConflict */].別名) {
            var renamedResource = targetResouce.withName(colidedResourceName.destinationName);
            resources = resources.mergeByIdOf(renamedResource);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var conflictDiagramName = userArrange.conflictDiagramName;

      if (!conflictDiagramName.isEmpty()) {
        if (conflictDiagramName.behavior === BehaviorWhenNameConflict["a" /* BehaviorWhenNameConflict */].既存) return null; // 入力からは入ってこない前提。「既存」というなら「Importしない」と同義。

        if (conflictDiagramName.behavior === BehaviorWhenNameConflict["a" /* BehaviorWhenNameConflict */].別名) diagram = diagram.renameOf(conflictDiagramName.destinationName);
      }

      return new ImportDiagramCandidate_ImportDiagramCandidate(diagram, resources.map(function (r) {
        return r;
      }));
    }
  }]);

  return ImportDiagramArranger;
}();


// CONCATENATED MODULE: ./src/application/service/diagram/import/DiagramImportService.ts













var DiagramImportService_DiagramImportService = /*#__PURE__*/function () {
  function DiagramImportService(storageRepository, fileSystemRepository) {
    Object(classCallCheck["a" /* default */])(this, DiagramImportService);

    this.storageRepository = storageRepository;
    this.fileSystemRepository = fileSystemRepository;
  }

  Object(createClass["a" /* default */])(DiagramImportService, [{
    key: "importOf",
    value: function () {
      var _importOf = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, notifyProgress, confirmeUserArrange) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].開始, "", file));
                _context.prev = 1;
                _context.next = 4;
                return this.doImport(file, notifyProgress, confirmeUserArrange);

              case 4:
                result = _context.sent;

                if (!result) {
                  _context.next = 8;
                  break;
                }

                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].成功, "", file));
                return _context.abrupt("return", result);

              case 8:
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.log("予期せぬエラー", _context.t0);
                notifyProgress(this.raiseError(DiagramImportError["a" /* DiagramImportError */].予期せぬエラー, "\n  ".concat(_context.t0)));

              case 14:
                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].失敗, "", file));
                return _context.abrupt("return", null);

              case 16:
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
      var _doImport = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file, notifyProgress, confirmeUserArrange) {
        var result, jsonText, exported, maybeImport, product, importCandidate, arrangedImport, updatedProduct, importedDiagram;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].ファイル読み込み));
                _context2.next = 3;
                return this.validateOf(file);

              case 3:
                result = _context2.sent;

                if (!(result !== DiagramImportError["a" /* DiagramImportError */].なし)) {
                  _context2.next = 7;
                  break;
                }

                notifyProgress(this.raiseError(result));
                return _context2.abrupt("return", null);

              case 7:
                _context2.next = 9;
                return this.fileSystemRepository.readFile(file);

              case 9:
                jsonText = _context2.sent;
                exported = this.storageRepository.createDiagramByJsonOf(jsonText);
                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].形式チェック));
                maybeImport = MaybeImportDiagram_MaybeImportDiagram.of(exported);

                if (!(!maybeImport || !maybeImport.checkOfLogicalStructure())) {
                  _context2.next = 16;
                  break;
                }

                notifyProgress(this.raiseError(DiagramImportError["a" /* DiagramImportError */].形式or構造が不正));
                return _context2.abrupt("return", null);

              case 16:
                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].ユーザーアレンジ));
                product = this.storageRepository.getCurrentProduct();
                importCandidate = maybeImport.toCandidate();
                _context2.next = 21;
                return this.reflectUserArrangeOf(importCandidate, confirmeUserArrange, product);

              case 21:
                arrangedImport = _context2.sent;

                if (arrangedImport) {
                  _context2.next = 25;
                  break;
                }

                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].キャンセル));
                return _context2.abrupt("return", null);

              case 25:
                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].追加));
                updatedProduct = arrangedImport.mergeOf(product);
                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].保存));
                this.storageRepository.registerCurrentProduct(updatedProduct);
                importedDiagram = updatedProduct.diagrams.sameOf(arrangedImport.diagram);
                notifyProgress(this.raise(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].完了, "Diagram name: \"".concat(importedDiagram.name, "\"")));
                return _context2.abrupt("return", importedDiagram);

              case 32:
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
    key: "reflectUserArrangeOf",
    value: function () {
      var _reflectUserArrangeOf = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(candidate, confirmeUserArrange, product) {
        var analyzer, confrictNames, userArrange, arranger;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                analyzer = new NameConflictAnalyzer_NameConflictAnalyzer();
                confrictNames = analyzer.analyzeOf(candidate, product);

                if (!confrictNames.isEmpty()) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", candidate);

              case 4:
                _context3.next = 6;
                return confirmeUserArrange(confrictNames);

              case 6:
                userArrange = _context3.sent;

                if (!userArrange.isEmpty()) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", null);

              case 9:
                arranger = new ImportDiagramArranger_ImportDiagramArranger();
                return _context3.abrupt("return", arranger.arrangeOf(userArrange, candidate, product));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function reflectUserArrangeOf(_x7, _x8, _x9) {
        return _reflectUserArrangeOf.apply(this, arguments);
      }

      return reflectUserArrangeOf;
    }()
  }, {
    key: "raise",
    value: function raise(step) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var file = arguments.length > 2 ? arguments[2] : undefined;
      var fileCaption = file ? "file: \"".concat(file.name, "\"") : "";
      return new DiagramImportProgressEvent_DiagramImportProgressEvent(step, DiagramImportError["a" /* DiagramImportError */].なし, message + fileCaption);
    }
  }, {
    key: "raiseError",
    value: function raiseError(error) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return new DiagramImportProgressEvent_DiagramImportProgressEvent(DiagramImportProgressStep["a" /* DiagramImportProgressStep */].エラー, error, message);
    }
  }, {
    key: "validateOf",
    value: function () {
      var _validateOf = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(file) {
        var MAX_MB, text, isJson;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                MAX_MB = 100 * 1024 * 1024;

                if (file) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", DiagramImportError["a" /* DiagramImportError */].なし);

              case 3:
                if (RdramDiagramExportFileName["a" /* default */].isApplicableOf(file.name)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", DiagramImportError["a" /* DiagramImportError */].ファイル名不正);

              case 5:
                if (!(file.size > MAX_MB)) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", DiagramImportError["a" /* DiagramImportError */].サイズ超過);

              case 7:
                _context4.next = 9;
                return this.fileSystemRepository.readFile(file);

              case 9:
                text = _context4.sent;

                if (!(text === null)) {
                  _context4.next = 12;
                  break;
                }

                return _context4.abrupt("return", DiagramImportError["a" /* DiagramImportError */].読込失敗);

              case 12:
                _context4.next = 14;
                return this.fileSystemRepository.isJsonFile(file);

              case 14:
                isJson = _context4.sent;

                if (isJson) {
                  _context4.next = 17;
                  break;
                }

                return _context4.abrupt("return", DiagramImportError["a" /* DiagramImportError */].非JSON形式);

              case 17:
                return _context4.abrupt("return", DiagramImportError["a" /* DiagramImportError */].なし);

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function validateOf(_x10) {
        return _validateOf.apply(this, arguments);
      }

      return validateOf;
    }()
  }]);

  return DiagramImportService;
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
    _this.drawer = false;
    _this.right = true;
    _this.rightDrawer = false;
    _this.title = 'RDRA-M';
    _this.selfVersion = "";
    _this.items = [{
      icon: 'mdi-apps',
      title: '図の一覧',
      to: '/'
    }, {
      icon: 'mdi-chart-bubble',
      title: 'draw2dのテスト',
      to: '/layouttest'
    }, {
      icon: 'mdi-chart-bubble',
      title: 'canbasのテスト',
      to: '/canvastest'
    }]; // DI difinitions.

    _this.repository = new StorageDatasource_StorageDatasource();
    _this.clientDownloadRepository = new ClientDownloadTransfar_ClientDownloadTransfar();
    _this.fileSystemRepository = new FileSystemDatasource_FileSystemDatasouce();
    _this.localStorageExportService = new LocalStorageExportService_LocalStorageExportService(_this.repository, _this.clientDownloadRepository);
    _this.localStorageImportService = new LocalStorageImportService_LocalStorageImportService(_this.repository, _this.fileSystemRepository);
    _this.productExportService = new ProductExportService_ProductExportService(_this.repository, _this.clientDownloadRepository);
    _this.productImportService = new ProductImportService_ProductImportService(_this.repository, _this.fileSystemRepository);
    _this.diagramExportService = new DiagramExportService_DiagramExportService(_this.repository, _this.clientDownloadRepository);
    _this.diagramImportService = new DiagramImportService_DiagramImportService(_this.repository, _this.fileSystemRepository);
    _this.tangoRdraFileService = new TangoRdraFileService_TangoRdraFileService(_this.repository); // this classs property & functions.

    _this.visibleApplicationInitializationDialog = false;
    _this.visibleProductSelector = false;
    _this.productSelectorCancelable = false;
    _this.visibleProductImportDialog = false;
    _this.visibleDiagramImportDialog = false;
    _this.visibleLocalStorageImportDialog = false;
    _this.visibleLocalStorageDestroyDialog = false;
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
      var storage = this.repository.get();
      if (!storage || storage.isSelectedProduct()) return false;
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
    key: "onClickImportDiagram",
    value: function onClickImportDiagram() {
      this.visibleDiagramImportDialog = true;
      this.rightDrawer = false;
    }
  }, {
    key: "onCloseDiagramImportDialog",
    value: function onCloseDiagramImportDialog() {
      this.visibleDiagramImportDialog = false;
    }
  }, {
    key: "onClickImportLocalStorage",
    value: function onClickImportLocalStorage() {
      this.visibleLocalStorageImportDialog = true;
      this.rightDrawer = false;
    }
  }, {
    key: "onCloseLocalStorageImportDialog",
    value: function onCloseLocalStorageImportDialog() {
      this.visibleLocalStorageImportDialog = false;
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
    key: "onClickDestryLocalStorage",
    value: function onClickDestryLocalStorage() {
      this.visibleLocalStorageDestroyDialog = true;
      this.rightDrawer = false;
    }
  }, {
    key: "onCloseLocalStorageDestroyDialog",
    value: function onCloseLocalStorageDestroyDialog() {
      this.visibleLocalStorageDestroyDialog = false;
    }
  }]);

  return default_1;
}(nuxt_property_decorator_umd["Vue"]);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "repository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "clientDownloadRepository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "fileSystemRepository", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "localStorageExportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "localStorageImportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "productExportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "productImportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "diagramExportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "diagramImportService", void 0);

__decorate([Object(nuxt_property_decorator_umd["Provide"])()], defaultvue_type_script_lang_ts_default_1.prototype, "tangoRdraFileService", void 0);

defaultvue_type_script_lang_ts_default_1 = __decorate([Object(nuxt_property_decorator_umd["Component"])({
  components: {
    TweetButton: TweetButton["default"],
    ProductSelectorDialog: ProductSelectorDialog["default"],
    ProductImportDialog: ProductImportDialog["default"],
    DiagramImportDialog: DiagramImportDialog["default"],
    LocalStorageInitializeDialog: LocalStorageInitializeDialog["default"],
    LocalStorageImportDialog: LocalStorageImportDialog["default"],
    LocalStorageDestroyDialog: LocalStorageDestroyDialog["default"],
    TangoRdraFileExportDialog: TangoRdraFileExportDialog["default"]
  }
})], defaultvue_type_script_lang_ts_default_1);
/* harmony default export */ var defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_default_1);
// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/layouts/default.vue?vue&type=style&index=0&id=b55c13f6&scoped=true&lang=css&
var defaultvue_type_style_index_0_id_b55c13f6_scoped_true_lang_css_ = __webpack_require__(767);

// EXTERNAL MODULE: ./src/layouts/default.vue?vue&type=style&index=1&lang=css&
var defaultvue_type_style_index_1_lang_css_ = __webpack_require__(769);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(820);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js + 2 modules
var VAppBar = __webpack_require__(836);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(823);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFooter/VFooter.js
var VFooter = __webpack_require__(832);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(339);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var components_VList = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(833);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js
var VNavigationDrawer = __webpack_require__(834);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(354);

// CONCATENATED MODULE: ./src/layouts/default.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "b55c13f6",
  null
  
)

/* harmony default export */ var layouts_default = __webpack_exports__["a"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {ProductSelectorDialog: __webpack_require__(342).default,ProductImportDialog: __webpack_require__(343).default})


/* vuetify-loader */

















installComponents_default()(component, {VApp: VApp["a" /* default */],VAppBar: VAppBar["a" /* default */],VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */],VFooter: VFooter["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemIcon: VListItemIcon["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VMain: VMain["a" /* default */],VNavigationDrawer: VNavigationDrawer["a" /* default */],VSpacer: VSpacer["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})


/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/other/sosial/TweetButton.vue?vue&type=template&id=478a8796&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('script',[_vm._v("!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');")]),_vm._v(" "),_c('a',{staticClass:"twitter-share-button",attrs:{"href":"https://twitter.com/share","data-url":_vm.nowUrl(),"data-text":"rdram","data-size":"large","data-hashtags":"rdram"}},[_vm._v("\n        Tweet\n    ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/other/sosial/TweetButton.vue?vue&type=template&id=478a8796&lang=html&

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

// EXTERNAL MODULE: ./node_modules/nuxt-property-decorator/lib/nuxt-property-decorator.umd.js
var nuxt_property_decorator_umd = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/other/sosial/TweetButton.vue?vue&type=script&lang=ts&







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



var TweetButtonvue_type_script_lang_ts_TweetButton = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(TweetButton, _Vue);

  var _super = _createSuper(TweetButton);

  function TweetButton() {
    Object(classCallCheck["a" /* default */])(this, TweetButton);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TweetButton, [{
    key: "nowUrl",
    value: function nowUrl() {
      return window.location.href;
    }
  }]);

  return TweetButton;
}(nuxt_property_decorator_umd["Vue"]);

TweetButtonvue_type_script_lang_ts_TweetButton = __decorate([nuxt_property_decorator_umd["Component"]], TweetButtonvue_type_script_lang_ts_TweetButton);
/* harmony default export */ var TweetButtonvue_type_script_lang_ts_ = (TweetButtonvue_type_script_lang_ts_TweetButton);
// CONCATENATED MODULE: ./src/components/other/sosial/TweetButton.vue?vue&type=script&lang=ts&
 /* harmony default export */ var sosial_TweetButtonvue_type_script_lang_ts_ = (TweetButtonvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// CONCATENATED MODULE: ./src/components/other/sosial/TweetButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sosial_TweetButtonvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sosial_TweetButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/import/DiagramImportDialog.vue?vue&type=template&id=0512fcfa&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"data-opend":_vm.onOpen(),"persistent":"","max-width":"600"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-file-import")]),_vm._v(" 図のインポート\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("インポートする対象のファイルを指定してください。")]),_vm._v(" "),_c('v-card-actions',[_c('v-file-input',{attrs:{"disabled":_vm.progressEnable,"rules":[_vm.preValidate],"label":_vm.fileTypeDescription,"accept":"application/json","truncate-length":"50"},on:{"update:error":_vm.onChangeErrorState},model:{value:(_vm.selectedFile),callback:function ($$v) {_vm.selectedFile=$$v},expression:"selectedFile"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-container',{attrs:{"fluid":""}},[_c('v-row',[_c('v-col',[_c('v-progress-linear',{attrs:{"value":"15","disabled":!_vm.progressEnable},model:{value:(_vm.progressPercentage),callback:function ($$v) {_vm.progressPercentage=$$v},expression:"progressPercentage"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-textarea',{ref:"progressLogsTextarea",attrs:{"disabled":!_vm.progressEnable,"label":"インポート状況","readonly":"","outlined":"","no-resize":""},on:{"input":_vm.onChangeProgressLogs},model:{value:(_vm.progressLogs),callback:function ($$v) {_vm.progressLogs=$$v},expression:"progressLogs"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal","disabled":_vm.progressEnable},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"green darken-1","disabled":_vm.notImportable()},on:{"click":_vm.onClickImportDiagram}},[_vm._v("\n        実行\n      ")])],1)],1),_vm._v(" "),_c('UserArrengeWhenNameConfrictDialog',{ref:"userArrangeDialog"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/diagrams/import/DiagramImportDialog.vue?vue&type=template&id=0512fcfa&scoped=true&lang=html&

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
var runtime = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/diagrams/import/DiagramImportMessageConverter.ts
var DiagramImportMessageConverter = __webpack_require__(575);

// EXTERNAL MODULE: ./src/components/diagrams/import/arrange/UserArrengeWhenNameConfrictDialog.vue + 4 modules
var UserArrengeWhenNameConfrictDialog = __webpack_require__(569);

// EXTERNAL MODULE: ./src/domain/diagram/import/progress/DiagramImportError.ts
var DiagramImportError = __webpack_require__(63);

// EXTERNAL MODULE: ./src/domain/diagram/export/RdramDiagramExportFileName.ts
var RdramDiagramExportFileName = __webpack_require__(207);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/diagrams/import/DiagramImportDialog.vue?vue&type=script&lang=ts&










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







var DiagramImportDialogvue_type_script_lang_ts_DiagramImportDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(DiagramImportDialog, _Vue);

  var _super = _createSuper(DiagramImportDialog);

  function DiagramImportDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DiagramImportDialog);

    _this = _super.apply(this, arguments);
    _this.messageConverter = new DiagramImportMessageConverter["default"]();
    _this.opend = false;
    _this.selectedFile = null;
    _this.preValidateError = false;
    _this.progressEnable = false;
    _this.progressPercentage = 0;
    _this.progressLogs = " ";
    _this.imported = false;
    _this.fileTypeDescription = RdramDiagramExportFileName["a" /* default */].TYPE_DESCRIPTION;
    return _this;
  }

  Object(createClass["a" /* default */])(DiagramImportDialog, [{
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
      if (!this.visible || this.opend) return;
      this.clearAllState();
      this.opend = true;
    } // FIXME バグ。Vue的には働いていない。Vuetify+非同期でRulesが反応する手段を考える。

  }, {
    key: "preValidate",
    value: function () {
      var _preValidate = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var service, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = this.diagramImportService;
                this.clearProgressArea();
                _context.next = 4;
                return service.validateOf(file);

              case 4:
                result = _context.sent;

                if (!(result === DiagramImportError["a" /* DiagramImportError */].なし)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", true);

              case 7:
                return _context.abrupt("return", this.messageConverter.errorMessageOf(result));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function preValidate(_x) {
        return _preValidate.apply(this, arguments);
      }

      return preValidate;
    }()
  }, {
    key: "onClickImportDiagram",
    value: function () {
      var _onClickImportDiagram = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.changeEnableProgressArea(true);
                _context2.next = 3;
                return this.doImport();

              case 3:
                this.changeEnableProgressArea(false);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onClickImportDiagram() {
        return _onClickImportDiagram.apply(this, arguments);
      }

      return onClickImportDiagram;
    }()
  }, {
    key: "changeEnableProgressArea",
    value: function changeEnableProgressArea(enable) {
      if (enable) this.clearProgressArea();
      this.progressEnable = enable;
    }
  }, {
    key: "clearAllState",
    value: function clearAllState() {
      this.selectedFile = null;
      this.preValidateError = false;
      this.imported = false;
      this.clearProgressArea();
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
      this.opend = false;
      if (!this.imported) return;
      alert("現在開いているプロダクトがインポートにより書き換えられました。\nプロダクトを開きなおします。");
      location.reload();
    }
  }, {
    key: "doImport",
    value: function () {
      var _doImport = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var service, importedDiagram;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                service = this.diagramImportService;
                _context3.next = 3;
                return service.importOf(this.selectedFile, this.notifyProgress, this.confirmeUserArrange);

              case 3:
                importedDiagram = _context3.sent;
                if (importedDiagram) this.imported = true;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function doImport() {
        return _doImport.apply(this, arguments);
      }

      return doImport;
    }()
  }, {
    key: "confirmeUserArrange",
    value: function () {
      var _confirmeUserArrange = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(arrange) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!arrange.isEmpty()) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", arrange);

              case 2:
                _context4.next = 4;
                return this.showUserArrengeWhenNameConfrictDialog(arrange);

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function confirmeUserArrange(_x2) {
        return _confirmeUserArrange.apply(this, arguments);
      }

      return confirmeUserArrange;
    }()
  }, {
    key: "notifyProgress",
    value: function notifyProgress(event) {
      var _a;

      this.progressPercentage = event.percentage();
      var message = (_a = this.messageConverter) === null || _a === void 0 ? void 0 : _a.makeMessage(event);
      this.appendPrograssLogs(message);
    }
  }, {
    key: "appendPrograssLogs",
    value: function appendPrograssLogs(message) {
      if (message && message.length === 0) return;
      if (this.progressLogs.trim().length === 0) this.progressLogs = "";else this.progressLogs += "\n";
      this.progressLogs += message;
      this.$nextTick(function () {
        return console.log("UI\u304C\u5909\u66F4\u3055\u308C\u305F\u306F\u305A\u3002message:".concat(message));
      });
    }
  }, {
    key: "showUserArrengeWhenNameConfrictDialog",
    value: function () {
      var _showUserArrengeWhenNameConfrictDialog = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(arrange) {
        var dialog;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                dialog = this.$refs.userArrangeDialog;
                _context5.next = 3;
                return dialog.show(arrange);

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function showUserArrengeWhenNameConfrictDialog(_x3) {
        return _showUserArrengeWhenNameConfrictDialog.apply(this, arguments);
      }

      return showUserArrengeWhenNameConfrictDialog;
    }()
  }]);

  return DiagramImportDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], DiagramImportDialogvue_type_script_lang_ts_DiagramImportDialog.prototype, "diagramImportService", void 0);

__decorate([Object(lib["Prop"])()], DiagramImportDialogvue_type_script_lang_ts_DiagramImportDialog.prototype, "visible", void 0);

__decorate([Object(lib["Watch"])('progressLogs')], DiagramImportDialogvue_type_script_lang_ts_DiagramImportDialog.prototype, "onChangeProgressLogs", null);

__decorate([Object(lib["Emit"])("onClose")], DiagramImportDialogvue_type_script_lang_ts_DiagramImportDialog.prototype, "onClose", null);

DiagramImportDialogvue_type_script_lang_ts_DiagramImportDialog = __decorate([Object(lib["Component"])({
  components: {
    UserArrengeWhenNameConfrictDialog: UserArrengeWhenNameConfrictDialog["default"]
  }
})], DiagramImportDialogvue_type_script_lang_ts_DiagramImportDialog);
/* harmony default export */ var DiagramImportDialogvue_type_script_lang_ts_ = (DiagramImportDialogvue_type_script_lang_ts_DiagramImportDialog);
// CONCATENATED MODULE: ./src/components/diagrams/import/DiagramImportDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var import_DiagramImportDialogvue_type_script_lang_ts_ = (DiagramImportDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(822);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(823);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(825);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(826);

// CONCATENATED MODULE: ./src/components/diagrams/import/DiagramImportDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  import_DiagramImportDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "0512fcfa",
  null
  
)

/* harmony default export */ var import_DiagramImportDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */















installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VFileInput: VFileInput["a" /* default */],VIcon: VIcon["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/localstorage/import/LocalStorageImportDialog.vue?vue&type=template&id=7950d7a4&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"data-opend":_vm.onOpen(),"persistent":"","max-width":"600"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-file-replace")]),_vm._v(" LocalStorageのインポート(全データ置換)\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n      LocalStorageのデータを破棄し、"),_c('br'),_vm._v("指定した"+_vm._s(_vm.fileTypeDescription)+"の内容で置き換えます。\n    ")]),_vm._v(" "),_c('v-card-text',[_vm._v("\n      これは、"),_c('span',{staticClass:"red--text"},[_vm._v("全データの消去")]),_vm._v(" や "),_c('span',{staticClass:"red--text"},[_vm._v("システムの初期化")]),_vm._v(" と同様の操作です。"),_c('br'),_vm._v("\n      なお「実行」クリック時、安全措置として「現在のLocalStorage内容」のファイルが自動的にダウンロードされます。"),_c('br')]),_vm._v(" "),_c('v-card-text',[_vm._v("インポートする対象のファイルを指定してください。")]),_vm._v(" "),_c('v-card-actions',[_c('v-file-input',{attrs:{"disabled":_vm.progressEnable || _vm.alreadyImported,"rules":[_vm.preValidate],"label":_vm.fileTypeDescription,"accept":"application/json","truncate-length":"50"},on:{"update:error":_vm.onChangeErrorState},model:{value:(_vm.selectedFile),callback:function ($$v) {_vm.selectedFile=$$v},expression:"selectedFile"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-container',{attrs:{"fluid":""}},[_c('v-row',[_c('v-col',[_c('v-progress-linear',{attrs:{"value":"15","disabled":!_vm.progressEnable},model:{value:(_vm.progressPercentage),callback:function ($$v) {_vm.progressPercentage=$$v},expression:"progressPercentage"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-textarea',{ref:"progressLogsTextarea",attrs:{"disabled":!_vm.progressEnable,"label":"インポート状況","readonly":"","outlined":"","no-resize":""},on:{"input":_vm.onChangeProgressLogs},model:{value:(_vm.progressLogs),callback:function ($$v) {_vm.progressLogs=$$v},expression:"progressLogs"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal","disabled":_vm.progressEnable},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"green darken-1","disabled":_vm.notImportable()},on:{"click":_vm.onClickImportLocalStorage}},[_vm._v("\n        実行\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/localstorage/import/LocalStorageImportDialog.vue?vue&type=template&id=7950d7a4&scoped=true&lang=html&

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
var runtime = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/localstorage/import/LocalStorageImportMessageConverter.ts
var LocalStorageImportMessageConverter = __webpack_require__(579);

// EXTERNAL MODULE: ./src/domain/storage/import/LocalStorageImportError.ts
var LocalStorageImportError = __webpack_require__(64);

// EXTERNAL MODULE: ./src/domain/storage/export/RdramLocalStorageExportFileName.ts
var RdramLocalStorageExportFileName = __webpack_require__(208);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/localstorage/import/LocalStorageImportDialog.vue?vue&type=script&lang=ts&










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






var LocalStorageImportDialogvue_type_script_lang_ts_LocalStorageImportDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(LocalStorageImportDialog, _Vue);

  var _super = _createSuper(LocalStorageImportDialog);

  function LocalStorageImportDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LocalStorageImportDialog);

    _this = _super.apply(this, arguments);
    _this.messageConverter = new LocalStorageImportMessageConverter["default"]();
    _this.opend = false;
    _this.selectedFile = null;
    _this.preValidateError = false;
    _this.progressEnable = false;
    _this.progressPercentage = 0;
    _this.progressLogs = " ";
    _this.alreadyImported = false;
    _this.fileTypeDescription = RdramLocalStorageExportFileName["a" /* default */].TYPE_DESCRIPTION;
    return _this;
  }

  Object(createClass["a" /* default */])(LocalStorageImportDialog, [{
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
      if (!this.visible || this.opend) return;
      this.clearAllState();
      this.opend = true;
    }
  }, {
    key: "preValidate",
    value: function () {
      var _preValidate = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var service, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = this.localStorageImportService;
                this.clearProgressArea();
                _context.next = 4;
                return service.validateOf(file);

              case 4:
                result = _context.sent;

                if (!(result === LocalStorageImportError["a" /* LocalStorageImportError */].なし)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", true);

              case 7:
                return _context.abrupt("return", this.messageConverter.errorMessageOf(result));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function preValidate(_x) {
        return _preValidate.apply(this, arguments);
      }

      return preValidate;
    }()
  }, {
    key: "onClickImportLocalStorage",
    value: function () {
      var _onClickImportLocalStorage = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.changeEnableProgressArea(true);
                _context2.next = 3;
                return this.doImport();

              case 3:
                this.changeEnableProgressArea(false);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onClickImportLocalStorage() {
        return _onClickImportLocalStorage.apply(this, arguments);
      }

      return onClickImportLocalStorage;
    }()
  }, {
    key: "changeEnableProgressArea",
    value: function changeEnableProgressArea(enable) {
      if (enable) this.clearProgressArea();
      this.progressEnable = enable;
    }
  }, {
    key: "clearAllState",
    value: function clearAllState() {
      this.selectedFile = null;
      this.preValidateError = false;
      this.alreadyImported = false;
      this.clearProgressArea();
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
      return this.preValidateError || !this.selectedFile || this.progressEnable || this.alreadyImported;
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.opend = false;
      if (!this.alreadyImported) return;
      alert("LocalStrageがインポート内容で置き換えられたため、\nアプリケーションを再起動します。");
      location.reload();
    }
  }, {
    key: "doImport",
    value: function () {
      var _doImport = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _a, _b, exportFile, service, imported;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                exportFile = (_a = this.localStorageExportService) === null || _a === void 0 ? void 0 : _a.makeExportFile();

                if (exportFile) {
                  _context3.next = 4;
                  break;
                }

                this.appendProgressLogs("事前準備(バックアップファイルのデータ取得)に失敗。");
                return _context3.abrupt("return");

              case 4:
                service = this.localStorageImportService;
                _context3.next = 7;
                return service.importOf(this.selectedFile, this.notifyProgress);

              case 7:
                imported = _context3.sent;

                if (imported) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return");

              case 10:
                this.appendProgressLogs("\u30A4\u30F3\u30DD\u30FC\u30C8\u524D\u306E\u72B6\u614B\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002\n".concat(exportFile.clientFileName));
                (_b = this.localStorageExportService) === null || _b === void 0 ? void 0 : _b.downloadOnClientOf(exportFile);
                this.alreadyImported = true;

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function doImport() {
        return _doImport.apply(this, arguments);
      }

      return doImport;
    }()
  }, {
    key: "notifyProgress",
    value: function notifyProgress(event) {
      var _a;

      this.progressPercentage = event.percentage();
      var message = (_a = this.messageConverter) === null || _a === void 0 ? void 0 : _a.makeMessage(event);
      this.appendProgressLogs(message);
    }
  }, {
    key: "appendProgressLogs",
    value: function appendProgressLogs(message) {
      if (message && message.length === 0) return;
      if (this.progressLogs.trim().length === 0) this.progressLogs = "";else this.progressLogs += "\n";
      this.progressLogs += message;
      this.$nextTick(function () {
        return console.log("UI\u304C\u5909\u66F4\u3055\u308C\u305F\u306F\u305A\u3002message:".concat(message));
      });
    }
  }]);

  return LocalStorageImportDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], LocalStorageImportDialogvue_type_script_lang_ts_LocalStorageImportDialog.prototype, "localStorageImportService", void 0);

__decorate([Object(lib["Inject"])()], LocalStorageImportDialogvue_type_script_lang_ts_LocalStorageImportDialog.prototype, "localStorageExportService", void 0);

__decorate([Object(lib["Prop"])()], LocalStorageImportDialogvue_type_script_lang_ts_LocalStorageImportDialog.prototype, "visible", void 0);

__decorate([Object(lib["Watch"])('progressLogs')], LocalStorageImportDialogvue_type_script_lang_ts_LocalStorageImportDialog.prototype, "onChangeProgressLogs", null);

__decorate([Object(lib["Emit"])("onClose")], LocalStorageImportDialogvue_type_script_lang_ts_LocalStorageImportDialog.prototype, "onClose", null);

LocalStorageImportDialogvue_type_script_lang_ts_LocalStorageImportDialog = __decorate([lib["Component"]], LocalStorageImportDialogvue_type_script_lang_ts_LocalStorageImportDialog);
/* harmony default export */ var LocalStorageImportDialogvue_type_script_lang_ts_ = (LocalStorageImportDialogvue_type_script_lang_ts_LocalStorageImportDialog);
// CONCATENATED MODULE: ./src/components/localstorage/import/LocalStorageImportDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var import_LocalStorageImportDialogvue_type_script_lang_ts_ = (LocalStorageImportDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(822);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(823);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(825);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(826);

// CONCATENATED MODULE: ./src/components/localstorage/import/LocalStorageImportDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  import_LocalStorageImportDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "7950d7a4",
  null
  
)

/* harmony default export */ var import_LocalStorageImportDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */















installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VFileInput: VFileInput["a" /* default */],VIcon: VIcon["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/localstorage/LocalStorageInitializeDialog.vue?vue&type=template&id=051b6fd0&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"500"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("LocalStorageの初期化")]),_vm._v(" "),_c('v-card-text',[_vm._v("LocalStorageが初期化されていません。"),_c('br'),_vm._v("このWebアプリケーションは、ブラウザ固有のストレージ(LocalStarage)を使用します。"),_c('br'),_vm._v("LocalStorageを初期化し、データを保存してよろしいですか。")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":_vm.onClickAcceptUseLocalStorage}},[_vm._v("許可する")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/localstorage/LocalStorageInitializeDialog.vue?vue&type=template&id=051b6fd0&scoped=true&lang=html&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/localstorage/LocalStorageInitializeDialog.vue?vue&type=script&lang=ts&







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



var LocalStorageInitializeDialogvue_type_script_lang_ts_LocalStorageInitializeDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(LocalStorageInitializeDialog, _Vue);

  var _super = _createSuper(LocalStorageInitializeDialog);

  function LocalStorageInitializeDialog() {
    Object(classCallCheck["a" /* default */])(this, LocalStorageInitializeDialog);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(LocalStorageInitializeDialog, [{
    key: "onClose",
    value: function onClose() {}
  }, {
    key: "onClickAcceptUseLocalStorage",
    value: function onClickAcceptUseLocalStorage() {
      var _a;

      (_a = this.repository) === null || _a === void 0 ? void 0 : _a.initialize();
      this.onClose();
    }
  }]);

  return LocalStorageInitializeDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], LocalStorageInitializeDialogvue_type_script_lang_ts_LocalStorageInitializeDialog.prototype, "repository", void 0);

__decorate([Object(lib["Prop"])()], LocalStorageInitializeDialogvue_type_script_lang_ts_LocalStorageInitializeDialog.prototype, "visible", void 0);

__decorate([Object(lib["Emit"])("onClose")], LocalStorageInitializeDialogvue_type_script_lang_ts_LocalStorageInitializeDialog.prototype, "onClose", null);

LocalStorageInitializeDialogvue_type_script_lang_ts_LocalStorageInitializeDialog = __decorate([lib["Component"]], LocalStorageInitializeDialogvue_type_script_lang_ts_LocalStorageInitializeDialog);
/* harmony default export */ var LocalStorageInitializeDialogvue_type_script_lang_ts_ = (LocalStorageInitializeDialogvue_type_script_lang_ts_LocalStorageInitializeDialog);
// CONCATENATED MODULE: ./src/components/localstorage/LocalStorageInitializeDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var localstorage_LocalStorageInitializeDialogvue_type_script_lang_ts_ = (LocalStorageInitializeDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// CONCATENATED MODULE: ./src/components/localstorage/LocalStorageInitializeDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  localstorage_LocalStorageInitializeDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "051b6fd0",
  null
  
)

/* harmony default export */ var localstorage_LocalStorageInitializeDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/localstorage/LocalStorageDestroyDialog.vue?vue&type=template&id=2f56b0ac&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"500"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-delete-forever")]),_vm._v(" LocalStorageの破棄\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n      LocalStorageからデータ破棄します。"),_c('br'),_vm._v("\n      これは、"),_c('span',{staticClass:"red--text"},[_vm._v("全データの消去")]),_vm._v(" や "),_c('span',{staticClass:"red--text"},[_vm._v("システムの初期化")]),_vm._v(" と同様の操作です。"),_c('br'),_vm._v("\n      なお「実行」クリック時、安全措置として「現在のLocalStorage内容」のファイルが自動的にダウンロードされます。"),_c('br'),_vm._v("\n      LocalStorageを破棄してよろしいですか。\n    ")]),_vm._v(" "),_c('v-card-text',[_c('v-checkbox',{attrs:{"label":"上記内容に同意する。"},model:{value:(_vm.consent),callback:function ($$v) {_vm.consent=$$v},expression:"consent"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"text":"","color":"blue darken-1"},on:{"click":_vm.onClickExportLocalStorage}},[_vm._v("\n        LocalStorageをエクスポート\n      ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","disabled":!_vm.consent,"color":"green darken-1"},on:{"click":_vm.onClickDestroyExecute}},[_vm._v("\n          実行\n        ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/localstorage/LocalStorageDestroyDialog.vue?vue&type=template&id=2f56b0ac&scoped=true&lang=html&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/localstorage/LocalStorageDestroyDialog.vue?vue&type=script&lang=ts&







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



var LocalStorageDestroyDialogvue_type_script_lang_ts_LocalStorageDestroyDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(LocalStorageDestroyDialog, _Vue);

  var _super = _createSuper(LocalStorageDestroyDialog);

  function LocalStorageDestroyDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LocalStorageDestroyDialog);

    _this = _super.apply(this, arguments);
    _this.consent = false;
    return _this;
  }

  Object(createClass["a" /* default */])(LocalStorageDestroyDialog, [{
    key: "onClose",
    value: function onClose() {
      this.consent = false;
    }
  }, {
    key: "onClickDestroyExecute",
    value: function onClickDestroyExecute() {
      if (!this.downloadNowLocalStorageDateFile()) {
        alert("ダウンロードファイルの作成に失敗しました。破棄処理を中断します。");
        return;
      }

      this.localStorageExportService.destroyLocalStorage();
      location.reload();
    }
  }, {
    key: "onClickExportLocalStorage",
    value: function onClickExportLocalStorage() {
      if (this.downloadNowLocalStorageDateFile()) return;
      alert("ダウンロードファイルの作成に失敗しました。");
    }
  }, {
    key: "downloadNowLocalStorageDateFile",
    value: function downloadNowLocalStorageDateFile() {
      return this.localStorageExportService.downloadExportFileOnClient();
    }
  }]);

  return LocalStorageDestroyDialog;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], LocalStorageDestroyDialogvue_type_script_lang_ts_LocalStorageDestroyDialog.prototype, "localStorageExportService", void 0);

__decorate([Object(lib["Prop"])()], LocalStorageDestroyDialogvue_type_script_lang_ts_LocalStorageDestroyDialog.prototype, "visible", void 0);

__decorate([Object(lib["Emit"])("onClose")], LocalStorageDestroyDialogvue_type_script_lang_ts_LocalStorageDestroyDialog.prototype, "onClose", null);

LocalStorageDestroyDialogvue_type_script_lang_ts_LocalStorageDestroyDialog = __decorate([lib["Component"]], LocalStorageDestroyDialogvue_type_script_lang_ts_LocalStorageDestroyDialog);
/* harmony default export */ var LocalStorageDestroyDialogvue_type_script_lang_ts_ = (LocalStorageDestroyDialogvue_type_script_lang_ts_LocalStorageDestroyDialog);
// CONCATENATED MODULE: ./src/components/localstorage/LocalStorageDestroyDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var localstorage_LocalStorageDestroyDialogvue_type_script_lang_ts_ = (LocalStorageDestroyDialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(831);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

// CONCATENATED MODULE: ./src/components/localstorage/LocalStorageDestroyDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  localstorage_LocalStorageDestroyDialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "2f56b0ac",
  null
  
)

/* harmony default export */ var localstorage_LocalStorageDestroyDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCheckbox: VCheckbox["a" /* default */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tangordra/TangoRdraFileExportDialog.vue?vue&type=template&id=2a85dcb8&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","max-width":"500"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',[_vm._v("mdi-alpha-t-circle")]),_vm._v(" tango/rdra形式エクスポート\n    ")],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n      現在のプロダクト"),_c('br'),_vm._v(" "),_c('div',{staticClass:"text-md-body-1",domProps:{"textContent":_vm._s(_vm.productName)}}),_vm._v(" \n      を、tango/rdra 形式のYAMLファイルに出力します。"),_c('br'),_vm._v("\n      よろしいですか。\n    ")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"normal"},on:{"click":_vm.onClose}},[_vm._v("\n        キャンセル\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"green darken-1"},on:{"click":_vm.onClickDestroyExecute}},[_vm._v("\n          実行\n        ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tangordra/TangoRdraFileExportDialog.vue?vue&type=template&id=2a85dcb8&scoped=true&lang=html&

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
var componentNormalizer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(58);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(821);

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

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(615);
module.exports = __webpack_require__(616);


/***/ }),

/***/ 62:
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
  ProductImportError[ProductImportError["\u5F62\u5F0For\u69CB\u9020\u304C\u4E0D\u6B63"] = 6] = "\u5F62\u5F0For\u69CB\u9020\u304C\u4E0D\u6B63";
})(ProductImportError || (ProductImportError = {}));

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramImportError; });
var DiagramImportError;

(function (DiagramImportError) {
  DiagramImportError[DiagramImportError["\u306A\u3057"] = 0] = "\u306A\u3057";
  DiagramImportError[DiagramImportError["\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC"] = 1] = "\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC";
  DiagramImportError[DiagramImportError["\u30D5\u30A1\u30A4\u30EB\u540D\u4E0D\u6B63"] = 2] = "\u30D5\u30A1\u30A4\u30EB\u540D\u4E0D\u6B63";
  DiagramImportError[DiagramImportError["\u30B5\u30A4\u30BA\u8D85\u904E"] = 3] = "\u30B5\u30A4\u30BA\u8D85\u904E";
  DiagramImportError[DiagramImportError["\u975EJSON\u5F62\u5F0F"] = 4] = "\u975EJSON\u5F62\u5F0F";
  DiagramImportError[DiagramImportError["\u8AAD\u8FBC\u5931\u6557"] = 5] = "\u8AAD\u8FBC\u5931\u6557";
  DiagramImportError[DiagramImportError["\u5F62\u5F0For\u69CB\u9020\u304C\u4E0D\u6B63"] = 6] = "\u5F62\u5F0For\u69CB\u9020\u304C\u4E0D\u6B63";
})(DiagramImportError || (DiagramImportError = {}));

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageImportError; });
var LocalStorageImportError;

(function (LocalStorageImportError) {
  LocalStorageImportError[LocalStorageImportError["\u306A\u3057"] = 0] = "\u306A\u3057";
  LocalStorageImportError[LocalStorageImportError["\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC"] = 1] = "\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC";
  LocalStorageImportError[LocalStorageImportError["\u30D5\u30A1\u30A4\u30EB\u540D\u4E0D\u6B63"] = 2] = "\u30D5\u30A1\u30A4\u30EB\u540D\u4E0D\u6B63";
  LocalStorageImportError[LocalStorageImportError["\u30B5\u30A4\u30BA\u8D85\u904E"] = 3] = "\u30B5\u30A4\u30BA\u8D85\u904E";
  LocalStorageImportError[LocalStorageImportError["\u975EJSON\u5F62\u5F0F"] = 4] = "\u975EJSON\u5F62\u5F0F";
  LocalStorageImportError[LocalStorageImportError["\u8AAD\u8FBC\u5931\u6557"] = 5] = "\u8AAD\u8FBC\u5931\u6557";
  LocalStorageImportError[LocalStorageImportError["\u5F62\u5F0For\u69CB\u9020\u304C\u4E0D\u6B63"] = 6] = "\u5F62\u5F0For\u69CB\u9020\u304C\u4E0D\u6B63";
})(LocalStorageImportError || (LocalStorageImportError = {}));

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_21b96a13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_21b96a13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_21b96a13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-21b96a13]{font-size:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasGuideType; });
var CanvasGuideType;

(function (CanvasGuideType) {
  CanvasGuideType[CanvasGuideType["NOTHING"] = 1] = "NOTHING";
  CanvasGuideType[CanvasGuideType["GRID"] = 2] = "GRID";
  CanvasGuideType[CanvasGuideType["GEOMETRY"] = 3] = "GEOMETRY";
})(CanvasGuideType || (CanvasGuideType = {}));

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_nuxtjs_vuetify_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(414);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_nuxtjs_vuetify_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_nuxtjs_vuetify_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "circle.v-progress-circular__overlay{color:green;caret-color:green;z-index:9999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 422,
	"./af.js": 422,
	"./ar": 423,
	"./ar-dz": 424,
	"./ar-dz.js": 424,
	"./ar-kw": 425,
	"./ar-kw.js": 425,
	"./ar-ly": 426,
	"./ar-ly.js": 426,
	"./ar-ma": 427,
	"./ar-ma.js": 427,
	"./ar-sa": 428,
	"./ar-sa.js": 428,
	"./ar-tn": 429,
	"./ar-tn.js": 429,
	"./ar.js": 423,
	"./az": 430,
	"./az.js": 430,
	"./be": 431,
	"./be.js": 431,
	"./bg": 432,
	"./bg.js": 432,
	"./bm": 433,
	"./bm.js": 433,
	"./bn": 434,
	"./bn-bd": 435,
	"./bn-bd.js": 435,
	"./bn.js": 434,
	"./bo": 436,
	"./bo.js": 436,
	"./br": 437,
	"./br.js": 437,
	"./bs": 438,
	"./bs.js": 438,
	"./ca": 439,
	"./ca.js": 439,
	"./cs": 440,
	"./cs.js": 440,
	"./cv": 441,
	"./cv.js": 441,
	"./cy": 442,
	"./cy.js": 442,
	"./da": 443,
	"./da.js": 443,
	"./de": 444,
	"./de-at": 445,
	"./de-at.js": 445,
	"./de-ch": 446,
	"./de-ch.js": 446,
	"./de.js": 444,
	"./dv": 447,
	"./dv.js": 447,
	"./el": 448,
	"./el.js": 448,
	"./en-au": 449,
	"./en-au.js": 449,
	"./en-ca": 450,
	"./en-ca.js": 450,
	"./en-gb": 451,
	"./en-gb.js": 451,
	"./en-ie": 452,
	"./en-ie.js": 452,
	"./en-il": 453,
	"./en-il.js": 453,
	"./en-in": 454,
	"./en-in.js": 454,
	"./en-nz": 455,
	"./en-nz.js": 455,
	"./en-sg": 456,
	"./en-sg.js": 456,
	"./eo": 457,
	"./eo.js": 457,
	"./es": 458,
	"./es-do": 459,
	"./es-do.js": 459,
	"./es-mx": 460,
	"./es-mx.js": 460,
	"./es-us": 461,
	"./es-us.js": 461,
	"./es.js": 458,
	"./et": 462,
	"./et.js": 462,
	"./eu": 463,
	"./eu.js": 463,
	"./fa": 464,
	"./fa.js": 464,
	"./fi": 465,
	"./fi.js": 465,
	"./fil": 466,
	"./fil.js": 466,
	"./fo": 467,
	"./fo.js": 467,
	"./fr": 468,
	"./fr-ca": 469,
	"./fr-ca.js": 469,
	"./fr-ch": 470,
	"./fr-ch.js": 470,
	"./fr.js": 468,
	"./fy": 471,
	"./fy.js": 471,
	"./ga": 472,
	"./ga.js": 472,
	"./gd": 473,
	"./gd.js": 473,
	"./gl": 474,
	"./gl.js": 474,
	"./gom-deva": 475,
	"./gom-deva.js": 475,
	"./gom-latn": 476,
	"./gom-latn.js": 476,
	"./gu": 477,
	"./gu.js": 477,
	"./he": 478,
	"./he.js": 478,
	"./hi": 479,
	"./hi.js": 479,
	"./hr": 480,
	"./hr.js": 480,
	"./hu": 481,
	"./hu.js": 481,
	"./hy-am": 482,
	"./hy-am.js": 482,
	"./id": 483,
	"./id.js": 483,
	"./is": 484,
	"./is.js": 484,
	"./it": 485,
	"./it-ch": 486,
	"./it-ch.js": 486,
	"./it.js": 485,
	"./ja": 487,
	"./ja.js": 487,
	"./jv": 488,
	"./jv.js": 488,
	"./ka": 489,
	"./ka.js": 489,
	"./kk": 490,
	"./kk.js": 490,
	"./km": 491,
	"./km.js": 491,
	"./kn": 492,
	"./kn.js": 492,
	"./ko": 493,
	"./ko.js": 493,
	"./ku": 494,
	"./ku.js": 494,
	"./ky": 495,
	"./ky.js": 495,
	"./lb": 496,
	"./lb.js": 496,
	"./lo": 497,
	"./lo.js": 497,
	"./lt": 498,
	"./lt.js": 498,
	"./lv": 499,
	"./lv.js": 499,
	"./me": 500,
	"./me.js": 500,
	"./mi": 501,
	"./mi.js": 501,
	"./mk": 502,
	"./mk.js": 502,
	"./ml": 503,
	"./ml.js": 503,
	"./mn": 504,
	"./mn.js": 504,
	"./mr": 505,
	"./mr.js": 505,
	"./ms": 506,
	"./ms-my": 507,
	"./ms-my.js": 507,
	"./ms.js": 506,
	"./mt": 508,
	"./mt.js": 508,
	"./my": 509,
	"./my.js": 509,
	"./nb": 510,
	"./nb.js": 510,
	"./ne": 511,
	"./ne.js": 511,
	"./nl": 512,
	"./nl-be": 513,
	"./nl-be.js": 513,
	"./nl.js": 512,
	"./nn": 514,
	"./nn.js": 514,
	"./oc-lnc": 515,
	"./oc-lnc.js": 515,
	"./pa-in": 516,
	"./pa-in.js": 516,
	"./pl": 517,
	"./pl.js": 517,
	"./pt": 518,
	"./pt-br": 519,
	"./pt-br.js": 519,
	"./pt.js": 518,
	"./ro": 520,
	"./ro.js": 520,
	"./ru": 521,
	"./ru.js": 521,
	"./sd": 522,
	"./sd.js": 522,
	"./se": 523,
	"./se.js": 523,
	"./si": 524,
	"./si.js": 524,
	"./sk": 525,
	"./sk.js": 525,
	"./sl": 526,
	"./sl.js": 526,
	"./sq": 527,
	"./sq.js": 527,
	"./sr": 528,
	"./sr-cyrl": 529,
	"./sr-cyrl.js": 529,
	"./sr.js": 528,
	"./ss": 530,
	"./ss.js": 530,
	"./sv": 531,
	"./sv.js": 531,
	"./sw": 532,
	"./sw.js": 532,
	"./ta": 533,
	"./ta.js": 533,
	"./te": 534,
	"./te.js": 534,
	"./tet": 535,
	"./tet.js": 535,
	"./tg": 536,
	"./tg.js": 536,
	"./th": 537,
	"./th.js": 537,
	"./tk": 538,
	"./tk.js": 538,
	"./tl-ph": 539,
	"./tl-ph.js": 539,
	"./tlh": 540,
	"./tlh.js": 540,
	"./tr": 541,
	"./tr.js": 541,
	"./tzl": 542,
	"./tzl.js": 542,
	"./tzm": 543,
	"./tzm-latn": 544,
	"./tzm-latn.js": 544,
	"./tzm.js": 543,
	"./ug-cn": 545,
	"./ug-cn.js": 545,
	"./uk": 546,
	"./uk.js": 546,
	"./ur": 547,
	"./ur.js": 547,
	"./uz": 548,
	"./uz-latn": 549,
	"./uz-latn.js": 549,
	"./uz.js": 548,
	"./vi": 550,
	"./vi.js": 550,
	"./x-pseudo": 551,
	"./x-pseudo.js": 551,
	"./yo": 552,
	"./yo.js": 552,
	"./zh-cn": 553,
	"./zh-cn.js": 553,
	"./zh-hk": 554,
	"./zh-hk.js": 554,
	"./zh-mo": 555,
	"./zh-mo.js": 555,
	"./zh-tw": 556,
	"./zh-tw.js": 556
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
webpackContext.id = 735;

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rdra20Diagram; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(174);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Rdra20Diagram = /*#__PURE__*/function (_Diagram) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Rdra20Diagram, _Diagram);

  var _super = _createSuper(Rdra20Diagram);

  function Rdra20Diagram() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Rdra20Diagram);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Rdra20Diagram, [{
    key: "type",
    get: function get() {
      return Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Rdra20Diagram.prototype), "type", this);
    }
  }]);

  return Rdra20Diagram;
}(_domain_diagram_Diagram__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserArrengeWhenNameConfrictDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(557);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserArrengeWhenNameConfrictDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserArrengeWhenNameConfrictDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-input--selection-controls__input{height:12px;width:12px;margin-right:4px}div.v-input--selection-controls__ripple{height:22px;width:22px;top:calc(50% - 18px)}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:8px}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding-left:4px;padding-right:4px}.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover{background-color:transparent!important}.v-messages{min-height:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageImportProgressStep; });
var LocalStorageImportProgressStep;

(function (LocalStorageImportProgressStep) {
  LocalStorageImportProgressStep[LocalStorageImportProgressStep["\u30A8\u30E9\u30FC"] = -2] = "\u30A8\u30E9\u30FC";
  LocalStorageImportProgressStep[LocalStorageImportProgressStep["\u5931\u6557"] = -1] = "\u5931\u6557";
  LocalStorageImportProgressStep[LocalStorageImportProgressStep["\u958B\u59CB"] = 0] = "\u958B\u59CB";
  LocalStorageImportProgressStep[LocalStorageImportProgressStep["\u30D5\u30A1\u30A4\u30EB\u8AAD\u307F\u8FBC\u307F"] = 1] = "\u30D5\u30A1\u30A4\u30EB\u8AAD\u307F\u8FBC\u307F";
  LocalStorageImportProgressStep[LocalStorageImportProgressStep["\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF"] = 2] = "\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF";
  LocalStorageImportProgressStep[LocalStorageImportProgressStep["\u4FDD\u5B58"] = 3] = "\u4FDD\u5B58";
  LocalStorageImportProgressStep[LocalStorageImportProgressStep["\u5B8C\u4E86"] = 4] = "\u5B8C\u4E86";
  LocalStorageImportProgressStep[LocalStorageImportProgressStep["\u6210\u529F"] = 5] = "\u6210\u529F";
})(LocalStorageImportProgressStep || (LocalStorageImportProgressStep = {}));

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_b55c13f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(559);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_b55c13f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_b55c13f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-b55c13f6]{display:flex;height:100%;width:100%;max-width:none;padding-right:0;padding-left:0;margin-right:unset;margin-left:unset;position:absolute}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(560);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{overflow-y:hidden}.auther-link{text-decoration:none}.no-efect-link,.no-efect-link:active,.no-efect-link:hover,.no-efect-link:link,.no-efect-link:visited{text-decoration:none;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(236);







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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ResourceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);







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
    key: "sameOf",
    value: function sameOf(other) {
      return this.type.equals(other.type) && this.name === other.name;
    }
  }, {
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
    key: "isNotRegister",
    value: function isNotRegister() {
      return this.resourceId <= 0;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.name.length === 0 && this.description.length === 0;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Resource(this.resourceId, this.resourceTypeId, this.name, this.description);
    }
  }], [{
    key: "empty",
    value: function empty() {
      return new Resource(0, _ResourceType__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].アクター.id, "", "");
    }
  }]);

  return Resource;
}();


Resource.YET_NUMBERING_ID = 0;
Resource.NAME_MAX_LENGTH = 128;
Resource.DESCRIPTION_MAX_LENGTH = 512;

/***/ })

},[[614,109,6,110]]]);