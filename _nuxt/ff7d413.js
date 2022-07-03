(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(578);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__(579);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__(580);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__(581);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__(582);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__(583);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__(584);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__(585);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__(586);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__(587);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__(588);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__(589);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__(590);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__(591);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__(592);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__(593);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__(594);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.delete-all.js
var esnext_map_delete_all = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.every.js
var esnext_map_every = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.filter.js
var esnext_map_filter = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find.js
var esnext_map_find = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find-key.js
var esnext_map_find_key = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.includes.js
var esnext_map_includes = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.key-of.js
var esnext_map_key_of = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-keys.js
var esnext_map_map_keys = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-values.js
var esnext_map_map_values = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.merge.js
var esnext_map_merge = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.reduce.js
var esnext_map_reduce = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.some.js
var esnext_map_some = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.update.js
var esnext_map_update = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTreeview/VTreeview.sass
var VTreeview = __webpack_require__(973);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/registrable/index.js
var registrable = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTreeview/VTreeviewNode.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






// Components

 // Mixins


 // Utils



var baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], Object(registrable["a" /* inject */])('treeview'));
var VTreeviewNodeProps = {
  activatable: Boolean,
  activeClass: {
    type: String,
    default: 'v-treeview-node--active'
  },
  color: {
    type: String,
    default: 'primary'
  },
  disablePerNode: Boolean,
  expandIcon: {
    type: String,
    default: '$subgroup'
  },
  indeterminateIcon: {
    type: String,
    default: '$checkboxIndeterminate'
  },
  itemChildren: {
    type: String,
    default: 'children'
  },
  itemDisabled: {
    type: String,
    default: 'disabled'
  },
  itemKey: {
    type: String,
    default: 'id'
  },
  itemText: {
    type: String,
    default: 'name'
  },
  loadChildren: Function,
  loadingIcon: {
    type: String,
    default: '$loading'
  },
  offIcon: {
    type: String,
    default: '$checkboxOff'
  },
  onIcon: {
    type: String,
    default: '$checkboxOn'
  },
  openOnClick: Boolean,
  rounded: Boolean,
  selectable: Boolean,
  selectedColor: {
    type: String,
    default: 'accent'
  },
  shaped: Boolean,
  transition: Boolean,
  selectionType: {
    type: String,
    default: 'leaf',
    validator: function validator(v) {
      return ['leaf', 'independent'].includes(v);
    }
  }
};
/* @vue/component */

var VTreeviewNode = baseMixins.extend().extend({
  name: 'v-treeview-node',
  inject: {
    treeview: {
      default: null
    }
  },
  props: _objectSpread({
    level: Number,
    item: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    parentIsDisabled: Boolean
  }, VTreeviewNodeProps),
  data: function data() {
    return {
      hasLoaded: false,
      isActive: false,
      isIndeterminate: false,
      isLoading: false,
      isOpen: false,
      isSelected: false
    };
  },
  computed: {
    disabled: function disabled() {
      return Object(helpers["o" /* getObjectValueByPath */])(this.item, this.itemDisabled) || !this.disablePerNode && this.parentIsDisabled && this.selectionType === 'leaf';
    },
    key: function key() {
      return Object(helpers["o" /* getObjectValueByPath */])(this.item, this.itemKey);
    },
    children: function children() {
      var _this = this;

      var children = Object(helpers["o" /* getObjectValueByPath */])(this.item, this.itemChildren);
      return children && children.filter(function (child) {
        return !_this.treeview.isExcluded(Object(helpers["o" /* getObjectValueByPath */])(child, _this.itemKey));
      });
    },
    text: function text() {
      return Object(helpers["o" /* getObjectValueByPath */])(this.item, this.itemText);
    },
    scopedProps: function scopedProps() {
      return {
        item: this.item,
        leaf: !this.children,
        selected: this.isSelected,
        indeterminate: this.isIndeterminate,
        active: this.isActive,
        open: this.isOpen
      };
    },
    computedIcon: function computedIcon() {
      if (this.isIndeterminate) return this.indeterminateIcon;else if (this.isSelected) return this.onIcon;else return this.offIcon;
    },
    hasChildren: function hasChildren() {
      return !!this.children && (!!this.children.length || !!this.loadChildren);
    }
  },
  created: function created() {
    this.treeview.register(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.treeview.unregister(this);
  },
  methods: {
    checkChildren: function checkChildren() {
      var _this2 = this;

      return new Promise(function (resolve) {
        // TODO: Potential issue with always trying
        // to load children if response is empty?
        if (!_this2.children || _this2.children.length || !_this2.loadChildren || _this2.hasLoaded) return resolve();
        _this2.isLoading = true;
        resolve(_this2.loadChildren(_this2.item));
      }).then(function () {
        _this2.isLoading = false;
        _this2.hasLoaded = true;
      });
    },
    open: function open() {
      this.isOpen = !this.isOpen;
      this.treeview.updateOpen(this.key, this.isOpen);
      this.treeview.emitOpen();
    },
    genLabel: function genLabel() {
      var children = [];
      if (this.$scopedSlots.label) children.push(this.$scopedSlots.label(this.scopedProps));else children.push(this.text);
      return this.$createElement('div', {
        slot: 'label',
        staticClass: 'v-treeview-node__label'
      }, children);
    },
    genPrependSlot: function genPrependSlot() {
      if (!this.$scopedSlots.prepend) return null;
      return this.$createElement('div', {
        staticClass: 'v-treeview-node__prepend'
      }, this.$scopedSlots.prepend(this.scopedProps));
    },
    genAppendSlot: function genAppendSlot() {
      if (!this.$scopedSlots.append) return null;
      return this.$createElement('div', {
        staticClass: 'v-treeview-node__append'
      }, this.$scopedSlots.append(this.scopedProps));
    },
    genContent: function genContent() {
      var children = [this.genPrependSlot(), this.genLabel(), this.genAppendSlot()];
      return this.$createElement('div', {
        staticClass: 'v-treeview-node__content'
      }, children);
    },
    genToggle: function genToggle() {
      var _this3 = this;

      return this.$createElement(VIcon["a" /* default */], {
        staticClass: 'v-treeview-node__toggle',
        class: {
          'v-treeview-node__toggle--open': this.isOpen,
          'v-treeview-node__toggle--loading': this.isLoading
        },
        slot: 'prepend',
        on: {
          click: function click(e) {
            e.stopPropagation();
            if (_this3.isLoading) return;

            _this3.checkChildren().then(function () {
              return _this3.open();
            });
          }
        }
      }, [this.isLoading ? this.loadingIcon : this.expandIcon]);
    },
    genCheckbox: function genCheckbox() {
      var _this4 = this;

      return this.$createElement(VIcon["a" /* default */], {
        staticClass: 'v-treeview-node__checkbox',
        props: {
          color: this.isSelected || this.isIndeterminate ? this.selectedColor : undefined,
          disabled: this.disabled
        },
        on: {
          click: function click(e) {
            e.stopPropagation();
            if (_this4.isLoading) return;

            _this4.checkChildren().then(function () {
              // We nextTick here so that items watch in VTreeview has a chance to run first
              _this4.$nextTick(function () {
                _this4.isSelected = !_this4.isSelected;
                _this4.isIndeterminate = false;

                _this4.treeview.updateSelected(_this4.key, _this4.isSelected);

                _this4.treeview.emitSelected();
              });
            });
          }
        }
      }, [this.computedIcon]);
    },
    genLevel: function genLevel(level) {
      var _this5 = this;

      return Object(helpers["i" /* createRange */])(level).map(function () {
        return _this5.$createElement('div', {
          staticClass: 'v-treeview-node__level'
        });
      });
    },
    genNode: function genNode() {
      var _this6 = this;

      var children = [this.genContent()];
      if (this.selectable) children.unshift(this.genCheckbox());

      if (this.hasChildren) {
        children.unshift(this.genToggle());
      } else {
        children.unshift.apply(children, Object(toConsumableArray["a" /* default */])(this.genLevel(1)));
      }

      children.unshift.apply(children, Object(toConsumableArray["a" /* default */])(this.genLevel(this.level)));
      return this.$createElement('div', this.setTextColor(this.isActive && this.color, {
        staticClass: 'v-treeview-node__root',
        class: Object(defineProperty["a" /* default */])({}, this.activeClass, this.isActive),
        on: {
          click: function click() {
            if (_this6.openOnClick && _this6.hasChildren) {
              _this6.checkChildren().then(_this6.open);
            } else if (_this6.activatable && !_this6.disabled) {
              _this6.isActive = !_this6.isActive;

              _this6.treeview.updateActive(_this6.key, _this6.isActive);

              _this6.treeview.emitActive();
            }
          }
        }
      }), children);
    },
    genChild: function genChild(item, parentIsDisabled) {
      return this.$createElement(VTreeviewNode, {
        key: Object(helpers["o" /* getObjectValueByPath */])(item, this.itemKey),
        props: {
          activatable: this.activatable,
          activeClass: this.activeClass,
          item: item,
          selectable: this.selectable,
          selectedColor: this.selectedColor,
          color: this.color,
          disablePerNode: this.disablePerNode,
          expandIcon: this.expandIcon,
          indeterminateIcon: this.indeterminateIcon,
          offIcon: this.offIcon,
          onIcon: this.onIcon,
          loadingIcon: this.loadingIcon,
          itemKey: this.itemKey,
          itemText: this.itemText,
          itemDisabled: this.itemDisabled,
          itemChildren: this.itemChildren,
          loadChildren: this.loadChildren,
          transition: this.transition,
          openOnClick: this.openOnClick,
          rounded: this.rounded,
          shaped: this.shaped,
          level: this.level + 1,
          selectionType: this.selectionType,
          parentIsDisabled: parentIsDisabled
        },
        scopedSlots: this.$scopedSlots
      });
    },
    genChildrenWrapper: function genChildrenWrapper() {
      var _this7 = this;

      if (!this.isOpen || !this.children) return null;
      var children = [this.children.map(function (c) {
        return _this7.genChild(c, _this7.disabled);
      })];
      return this.$createElement('div', {
        staticClass: 'v-treeview-node__children'
      }, children);
    },
    genTransition: function genTransition() {
      return this.$createElement(transitions["a" /* VExpandTransition */], [this.genChildrenWrapper()]);
    }
  },
  render: function render(h) {
    var children = [this.genNode()];
    if (this.transition) children.push(this.genTransition());else children.push(this.genChildrenWrapper());
    return h('div', {
      staticClass: 'v-treeview-node',
      class: {
        'v-treeview-node--leaf': !this.hasChildren,
        'v-treeview-node--click': this.openOnClick,
        'v-treeview-node--disabled': this.disabled,
        'v-treeview-node--rounded': this.rounded,
        'v-treeview-node--shaped': this.shaped,
        'v-treeview-node--selected': this.isSelected
      },
      attrs: {
        'aria-expanded': String(this.isOpen)
      }
    }, children);
  }
});
/* harmony default export */ var VTreeview_VTreeviewNode = (VTreeviewNode);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTreeview/util/filterTreeItems.js

function filterTreeItem(item, search, textKey) {
  var text = Object(helpers["o" /* getObjectValueByPath */])(item, textKey);
  return text.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
}
function filterTreeItems(filter, item, search, idKey, textKey, childrenKey, excluded) {
  if (filter(item, search, textKey)) {
    return true;
  }

  var children = Object(helpers["o" /* getObjectValueByPath */])(item, childrenKey);

  if (children) {
    var match = false;

    for (var i = 0; i < children.length; i++) {
      if (filterTreeItems(filter, children[i], search, idKey, textKey, childrenKey, excluded)) {
        match = true;
      }
    }

    if (match) return true;
  }

  excluded.add(Object(helpers["o" /* getObjectValueByPath */])(item, idKey));
  return false;
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTreeview/VTreeview.js












function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










































function VTreeview_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function VTreeview_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? VTreeview_ownKeys(Object(source), !0).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : VTreeview_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Styles
 // Components

 // Mixins


 // Utils





/* harmony default export */ var VTreeview_VTreeview = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(Object(registrable["b" /* provide */])('treeview'), themeable["a" /* default */]
/* @vue/component */
).extend({
  name: 'v-treeview',
  provide: function provide() {
    return {
      treeview: this
    };
  },
  props: VTreeview_objectSpread({
    active: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dense: Boolean,
    disabled: Boolean,
    filter: Function,
    hoverable: Boolean,
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    multipleActive: Boolean,
    open: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    openAll: Boolean,
    returnObject: {
      type: Boolean,
      default: false
    },
    search: String,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }, VTreeviewNodeProps),
  data: function data() {
    return {
      level: -1,
      activeCache: new Set(),
      nodes: {},
      openCache: new Set(),
      selectedCache: new Set()
    };
  },
  computed: {
    excludedItems: function excludedItems() {
      var excluded = new Set();
      if (!this.search) return excluded;

      for (var i = 0; i < this.items.length; i++) {
        filterTreeItems(this.filter || filterTreeItem, this.items[i], this.search, this.itemKey, this.itemText, this.itemChildren, excluded);
      }

      return excluded;
    }
  },
  watch: {
    items: {
      handler: function handler() {
        var _this = this;

        var oldKeys = Object.keys(this.nodes).map(function (k) {
          return Object(helpers["o" /* getObjectValueByPath */])(_this.nodes[k].item, _this.itemKey);
        });
        var newKeys = this.getKeys(this.items);
        var diff = Object(helpers["c" /* arrayDiff */])(newKeys, oldKeys); // We only want to do stuff if items have changed

        if (!diff.length && newKeys.length < oldKeys.length) return; // If nodes are removed we need to clear them from this.nodes

        diff.forEach(function (k) {
          return delete _this.nodes[k];
        });

        var oldSelectedCache = Object(toConsumableArray["a" /* default */])(this.selectedCache);

        this.selectedCache = new Set();
        this.activeCache = new Set();
        this.openCache = new Set();
        this.buildTree(this.items); // Only emit selected if selection has changed
        // as a result of items changing. This fixes a
        // potential double emit when selecting a node
        // with dynamic children

        if (!Object(helpers["k" /* deepEqual */])(oldSelectedCache, Object(toConsumableArray["a" /* default */])(this.selectedCache))) this.emitSelected();
      },
      deep: true
    },
    active: function active(value) {
      this.handleNodeCacheWatcher(value, this.activeCache, this.updateActive, this.emitActive);
    },
    value: function value(_value) {
      this.handleNodeCacheWatcher(_value, this.selectedCache, this.updateSelected, this.emitSelected);
    },
    open: function open(value) {
      this.handleNodeCacheWatcher(value, this.openCache, this.updateOpen, this.emitOpen);
    }
  },
  created: function created() {
    var _this2 = this;

    var getValue = function getValue(key) {
      return _this2.returnObject ? Object(helpers["o" /* getObjectValueByPath */])(key, _this2.itemKey) : key;
    };

    this.buildTree(this.items);

    var _iterator = _createForOfIteratorHelper(this.value.map(getValue)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        this.updateSelected(value, true, true);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(this.active.map(getValue)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var active = _step2.value;
        this.updateActive(active, true);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    // Save the developer from themselves
    if (this.$slots.prepend || this.$slots.append) {
      Object(console["c" /* consoleWarn */])('The prepend and append slots require a slot-scope attribute', this);
    }

    if (this.openAll) {
      this.updateAll(true);
    } else {
      this.open.forEach(function (key) {
        return _this3.updateOpen(_this3.returnObject ? Object(helpers["o" /* getObjectValueByPath */])(key, _this3.itemKey) : key, true);
      });
      this.emitOpen();
    }
  },
  methods: {
    /** @public */
    updateAll: function updateAll(value) {
      var _this4 = this;

      Object.keys(this.nodes).forEach(function (key) {
        return _this4.updateOpen(Object(helpers["o" /* getObjectValueByPath */])(_this4.nodes[key].item, _this4.itemKey), value);
      });
      this.emitOpen();
    },
    getKeys: function getKeys(items) {
      var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      for (var i = 0; i < items.length; i++) {
        var key = Object(helpers["o" /* getObjectValueByPath */])(items[i], this.itemKey);
        keys.push(key);
        var children = Object(helpers["o" /* getObjectValueByPath */])(items[i], this.itemChildren);

        if (children) {
          keys.push.apply(keys, Object(toConsumableArray["a" /* default */])(this.getKeys(children)));
        }
      }

      return keys;
    },
    buildTree: function buildTree(items) {
      var _this5 = this;

      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      for (var i = 0; i < items.length; i++) {
        var _getObjectValueByPath;

        var item = items[i];
        var key = Object(helpers["o" /* getObjectValueByPath */])(item, this.itemKey);
        var children = (_getObjectValueByPath = Object(helpers["o" /* getObjectValueByPath */])(item, this.itemChildren)) != null ? _getObjectValueByPath : [];
        var oldNode = this.nodes.hasOwnProperty(key) ? this.nodes[key] : {
          isSelected: false,
          isIndeterminate: false,
          isActive: false,
          isOpen: false,
          vnode: null
        };
        var node = {
          vnode: oldNode.vnode,
          parent: parent,
          children: children.map(function (c) {
            return Object(helpers["o" /* getObjectValueByPath */])(c, _this5.itemKey);
          }),
          item: item
        };
        this.buildTree(children, key); // This fixed bug with dynamic children resetting selected parent state

        if (this.selectionType !== 'independent' && parent !== null && !this.nodes.hasOwnProperty(key) && this.nodes.hasOwnProperty(parent)) {
          node.isSelected = this.nodes[parent].isSelected;
        } else {
          node.isSelected = oldNode.isSelected;
          node.isIndeterminate = oldNode.isIndeterminate;
        }

        node.isActive = oldNode.isActive;
        node.isOpen = oldNode.isOpen;
        this.nodes[key] = node;

        if (children.length && this.selectionType !== 'independent') {
          var _this$calculateState = this.calculateState(key, this.nodes),
              isSelected = _this$calculateState.isSelected,
              isIndeterminate = _this$calculateState.isIndeterminate;

          node.isSelected = isSelected;
          node.isIndeterminate = isIndeterminate;
        } // Don't forget to rebuild cache


        if (this.nodes[key].isSelected && (this.selectionType === 'independent' || node.children.length === 0)) this.selectedCache.add(key);
        if (this.nodes[key].isActive) this.activeCache.add(key);
        if (this.nodes[key].isOpen) this.openCache.add(key);
        this.updateVnodeState(key);
      }
    },
    calculateState: function calculateState(node, state) {
      var children = state[node].children;
      var counts = children.reduce(function (counts, child) {
        counts[0] += +Boolean(state[child].isSelected);
        counts[1] += +Boolean(state[child].isIndeterminate);
        return counts;
      }, [0, 0]);
      var isSelected = !!children.length && counts[0] === children.length;
      var isIndeterminate = !isSelected && (counts[0] > 0 || counts[1] > 0);
      return {
        isSelected: isSelected,
        isIndeterminate: isIndeterminate
      };
    },
    emitOpen: function emitOpen() {
      this.emitNodeCache('update:open', this.openCache);
    },
    emitSelected: function emitSelected() {
      this.emitNodeCache('input', this.selectedCache);
    },
    emitActive: function emitActive() {
      this.emitNodeCache('update:active', this.activeCache);
    },
    emitNodeCache: function emitNodeCache(event, cache) {
      var _this6 = this;

      this.$emit(event, this.returnObject ? Object(toConsumableArray["a" /* default */])(cache).map(function (key) {
        return _this6.nodes[key].item;
      }) : Object(toConsumableArray["a" /* default */])(cache));
    },
    handleNodeCacheWatcher: function handleNodeCacheWatcher(value, cache, updateFn, emitFn) {
      var _this7 = this;

      value = this.returnObject ? value.map(function (v) {
        return Object(helpers["o" /* getObjectValueByPath */])(v, _this7.itemKey);
      }) : value;

      var old = Object(toConsumableArray["a" /* default */])(cache);

      if (Object(helpers["k" /* deepEqual */])(old, value)) return;
      old.forEach(function (key) {
        return updateFn(key, false);
      });
      value.forEach(function (key) {
        return updateFn(key, true);
      });
      emitFn();
    },
    getDescendants: function getDescendants(key) {
      var _descendants;

      var descendants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var children = this.nodes[key].children;

      (_descendants = descendants).push.apply(_descendants, Object(toConsumableArray["a" /* default */])(children));

      for (var i = 0; i < children.length; i++) {
        descendants = this.getDescendants(children[i], descendants);
      }

      return descendants;
    },
    getParents: function getParents(key) {
      var parent = this.nodes[key].parent;
      var parents = [];

      while (parent !== null) {
        parents.push(parent);
        parent = this.nodes[parent].parent;
      }

      return parents;
    },
    register: function register(node) {
      var key = Object(helpers["o" /* getObjectValueByPath */])(node.item, this.itemKey);
      this.nodes[key].vnode = node;
      this.updateVnodeState(key);
    },
    unregister: function unregister(node) {
      var key = Object(helpers["o" /* getObjectValueByPath */])(node.item, this.itemKey);
      if (this.nodes[key]) this.nodes[key].vnode = null;
    },
    isParent: function isParent(key) {
      return this.nodes[key].children && this.nodes[key].children.length;
    },
    updateActive: function updateActive(key, isActive) {
      var _this8 = this;

      if (!this.nodes.hasOwnProperty(key)) return;

      if (!this.multipleActive) {
        this.activeCache.forEach(function (active) {
          _this8.nodes[active].isActive = false;

          _this8.updateVnodeState(active);

          _this8.activeCache.delete(active);
        });
      }

      var node = this.nodes[key];
      if (!node) return;
      if (isActive) this.activeCache.add(key);else this.activeCache.delete(key);
      node.isActive = isActive;
      this.updateVnodeState(key);
    },
    updateSelected: function updateSelected(key, isSelected) {
      var isForced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!this.nodes.hasOwnProperty(key)) return;
      var changed = new Map();

      if (this.selectionType !== 'independent') {
        var _iterator3 = _createForOfIteratorHelper(this.getDescendants(key)),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var descendant = _step3.value;

            if (!Object(helpers["o" /* getObjectValueByPath */])(this.nodes[descendant].item, this.itemDisabled) || isForced) {
              this.nodes[descendant].isSelected = isSelected;
              this.nodes[descendant].isIndeterminate = false;
              changed.set(descendant, isSelected);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        var calculated = this.calculateState(key, this.nodes);
        this.nodes[key].isSelected = isSelected;
        this.nodes[key].isIndeterminate = calculated.isIndeterminate;
        changed.set(key, isSelected);

        var _iterator4 = _createForOfIteratorHelper(this.getParents(key)),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var parent = _step4.value;

            var _calculated = this.calculateState(parent, this.nodes);

            this.nodes[parent].isSelected = _calculated.isSelected;
            this.nodes[parent].isIndeterminate = _calculated.isIndeterminate;
            changed.set(parent, _calculated.isSelected);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else {
        this.nodes[key].isSelected = isSelected;
        this.nodes[key].isIndeterminate = false;
        changed.set(key, isSelected);
      }

      var _iterator5 = _createForOfIteratorHelper(changed.entries()),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = Object(slicedToArray["a" /* default */])(_step5.value, 2),
              _key = _step5$value[0],
              value = _step5$value[1];

          this.updateVnodeState(_key);
          if (this.selectionType === 'leaf' && this.isParent(_key)) continue;
          value === true ? this.selectedCache.add(_key) : this.selectedCache.delete(_key);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },
    updateOpen: function updateOpen(key, isOpen) {
      var _this9 = this;

      if (!this.nodes.hasOwnProperty(key)) return;
      var node = this.nodes[key];
      var children = Object(helpers["o" /* getObjectValueByPath */])(node.item, this.itemChildren);

      if (children && !children.length && node.vnode && !node.vnode.hasLoaded) {
        node.vnode.checkChildren().then(function () {
          return _this9.updateOpen(key, isOpen);
        });
      } else if (children && children.length) {
        node.isOpen = isOpen;
        node.isOpen ? this.openCache.add(key) : this.openCache.delete(key);
        this.updateVnodeState(key);
      }
    },
    updateVnodeState: function updateVnodeState(key) {
      var node = this.nodes[key];

      if (node && node.vnode) {
        node.vnode.isSelected = node.isSelected;
        node.vnode.isIndeterminate = node.isIndeterminate;
        node.vnode.isActive = node.isActive;
        node.vnode.isOpen = node.isOpen;
      }
    },
    isExcluded: function isExcluded(key) {
      return !!this.search && this.excludedItems.has(key);
    }
  },
  render: function render(h) {
    var _this10 = this;

    var children = this.items.length ? this.items.filter(function (item) {
      return !_this10.isExcluded(Object(helpers["o" /* getObjectValueByPath */])(item, _this10.itemKey));
    }).map(function (item) {
      var genChild = VTreeview_VTreeviewNode.options.methods.genChild.bind(_this10);
      return genChild(item, _this10.disabled || Object(helpers["o" /* getObjectValueByPath */])(item, _this10.itemDisabled));
    })
    /* istanbul ignore next */
    : this.$slots.default; // TODO: remove type annotation with TS 3.2

    return h('div', {
      staticClass: 'v-treeview',
      class: VTreeview_objectSpread({
        'v-treeview--hoverable': this.hoverable,
        'v-treeview--dense': this.dense
      }, this.themeClasses)
    }, children);
  }
}));

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(974);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(28).default
var update = add("811c37a6", content, true, {"sourceMap":false});

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-treeview{color:rgba(0,0,0,.87)}.theme--light.v-treeview--hoverable .v-treeview-node__root:hover:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root:hover:before{opacity:.04}.theme--light.v-treeview--hoverable .v-treeview-node__root--active:before,.theme--light.v-treeview--hoverable .v-treeview-node__root--active:hover:before,.theme--light.v-treeview--hoverable .v-treeview-node__root:focus:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:hover:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root:focus:before{opacity:.12}.theme--light.v-treeview--hoverable .v-treeview-node__root--active:focus:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:focus:before{opacity:.16}.theme--light.v-treeview .v-treeview-node__root.v-treeview-node--active:before,.theme--light.v-treeview .v-treeview-node__root.v-treeview-node--active:hover:before{opacity:.12}.theme--light.v-treeview .v-treeview-node__root.v-treeview-node--active:focus:before{opacity:.16}.theme--light.v-treeview .v-treeview-node--disabled>.v-treeview-node__root>.v-treeview-node__content{color:rgba(0,0,0,.38)!important}.theme--dark.v-treeview{color:#fff}.theme--dark.v-treeview--hoverable .v-treeview-node__root:hover:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root:hover:before{opacity:.08}.theme--dark.v-treeview--hoverable .v-treeview-node__root--active:before,.theme--dark.v-treeview--hoverable .v-treeview-node__root--active:hover:before,.theme--dark.v-treeview--hoverable .v-treeview-node__root:focus:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:hover:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root:focus:before{opacity:.24}.theme--dark.v-treeview--hoverable .v-treeview-node__root--active:focus:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:focus:before{opacity:.32}.theme--dark.v-treeview .v-treeview-node__root.v-treeview-node--active:before,.theme--dark.v-treeview .v-treeview-node__root.v-treeview-node--active:hover:before{opacity:.24}.theme--dark.v-treeview .v-treeview-node__root.v-treeview-node--active:focus:before{opacity:.32}.theme--dark.v-treeview .v-treeview-node--disabled>.v-treeview-node__root>.v-treeview-node__content{color:hsla(0,0%,100%,.5)!important}.v-treeview-node.v-treeview-node--shaped .v-treeview-node__root,.v-treeview-node.v-treeview-node--shaped .v-treeview-node__root:before{border-bottom-right-radius:24px!important;border-top-right-radius:24px!important}.v-treeview-node.v-treeview-node--shaped .v-treeview-node__root{margin-top:8px;margin-bottom:8px}.v-treeview-node.v-treeview-node--rounded .v-treeview-node__root,.v-treeview-node.v-treeview-node--rounded .v-treeview-node__root:before{border-radius:24px!important}.v-treeview-node.v-treeview-node--rounded .v-treeview-node__root{margin-top:8px;margin-bottom:8px}.v-treeview-node--click>.v-treeview-node__root,.v-treeview-node--click>.v-treeview-node__root>.v-treeview-node__content>*{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-treeview-node.v-treeview-node--active .v-treeview-node__content .v-icon{color:inherit}.v-treeview-node__root{display:flex;align-items:center;min-height:48px;padding-left:8px;padding-right:8px;position:relative}.v-treeview-node__root:before{background-color:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-treeview-node__root:after{content:\"\";font-size:0;min-height:inherit}.v-treeview-node__children{transition:all .2s cubic-bezier(0,0,.2,1)}.v-treeview--dense .v-treeview-node__root{min-height:40px}.v-treeview--dense.v-treeview-node--shaped .v-treeview-node__root,.v-treeview--dense.v-treeview-node--shaped .v-treeview-node__root:before{border-bottom-right-radius:20px!important;border-top-right-radius:20px!important}.v-treeview--dense.v-treeview-node--shaped .v-treeview-node__root{margin-top:8px;margin-bottom:8px}.v-treeview--dense.v-treeview-node--rounded .v-treeview-node__root,.v-treeview--dense.v-treeview-node--rounded .v-treeview-node__root:before{border-radius:20px!important}.v-treeview--dense.v-treeview-node--rounded .v-treeview-node__root{margin-top:8px;margin-bottom:8px}.v-treeview-node__checkbox{width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-treeview-node__checkbox{margin-left:6px}.v-application--is-rtl .v-treeview-node__checkbox{margin-right:6px}.v-treeview-node__toggle{width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-treeview-node__toggle--loading{-webkit-animation:progress-circular-rotate 1s linear infinite;animation:progress-circular-rotate 1s linear infinite}.v-application--is-ltr .v-treeview-node__toggle{transform:rotate(-90deg)}.v-application--is-ltr .v-treeview-node__toggle--open{transform:none}.v-application--is-rtl .v-treeview-node__toggle{transform:rotate(90deg)}.v-application--is-rtl .v-treeview-node__toggle--open{transform:none}.v-treeview-node__prepend{min-width:24px}.v-application--is-ltr .v-treeview-node__prepend{margin-right:6px}.v-application--is-rtl .v-treeview-node__prepend{margin-left:6px}.v-treeview-node__append{min-width:24px}.v-application--is-ltr .v-treeview-node__append{margin-left:6px}.v-application--is-rtl .v-treeview-node__append{margin-right:6px}.v-treeview-node__level{width:24px}.v-treeview-node__label{flex:1;font-size:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-treeview-node__content{align-items:center;display:flex;flex-basis:0%;flex-grow:1;flex-shrink:0;min-width:0}.v-treeview-node__content .v-btn{flex-grow:0!important;flex-shrink:1!important}.v-application--is-ltr .v-treeview-node__content{margin-left:6px}.v-application--is-rtl .v-treeview-node__content{margin-right:6px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

}]);