(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{699:function(e,n,t){var content=t(735);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(27).default)("3950c51e",content,!0,{sourceMap:!1})},734:function(e,n,t){"use strict";t(699)},735:function(e,n,t){var o=t(26)(!1);o.push([e.i,".paret-panel{overflow-x:hidden;overflow-y:auto;width:100%;height:100%}.omit-long-text{position:absolute;text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;padding:0}.ignore-padding{padding:0}.chip-container{position:absolute;text-align:left;width:100%}.v-expansion-panel-content__wrap{padding:0;flex:auto}.v-expansion-panel--next-active{padding:0}",""]),e.exports=o},739:function(e,n,t){"use strict";t.r(n);t(31);var o=t(5),r=t(6),l=t(10),c=t(9),v=t(7),d=t(20),h=(t(18),t(14),t(32),t(60),t(55),t(70),t(44));function x(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=Object(v.a)(e);if(n){var r=Object(v.a)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Object(c.a)(this,t)}}var f=function(e,n,t,desc){var o,r=arguments.length,l=r<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,t):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(r<3?o(l):r>3?o(n,t,l):o(n,t))||l);return r>3&&l&&Object.defineProperty(n,t,l),l},m=function(e){Object(l.a)(t,e);var n=x(t);function t(){var e;return Object(o.a)(this,t),(e=n.apply(this,arguments)).availableResourceTypes=[],e.paretsOpen=[],e.rightClickedResourceId=0,e.rightClickedResourceOnDiagram=!1,e.rightClickedResourceOnProduct=!1,e.rightClickedResourceX=0,e.rightClickedResourceY=0,e}return Object(r.a)(t,[{key:"onDeleteResourceOnDiagram",value:function(e){}},{key:"onDeleteResourceOnProduct",value:function(e){}},{key:"created",value:function(){var e=this,n=this.product.diagrams.of(this.diagramId);if(n){n.availableResourceTypes().forEach((function(n){return e.availableResourceTypes.push(n)}));for(var i=0;i<this.availableResourceTypes.length+1;i++)this.paretsOpen.push(i)}}},{key:"onDragStartNewCompany",value:function(e){var n;if(e.target){var text=e.target.getAttribute("data-resource-type-id");if(text){var t=parseInt(text,10);null===(n=e.dataTransfer)||void 0===n||n.setData("text","-"+t)}}}},{key:"onDragStartResource",value:function(e){var n,t=e.srcElement.getAttribute("data-resource-id");null===(n=e.dataTransfer)||void 0===n||n.setData("text",t)}},{key:"onRightClickResource",value:function(e){var n=this;e.preventDefault();var t=e.srcElement,o=t.getAttribute("data-resource-id"),r=t.parentElement;if(o=r.getAttribute("data-resource-id")){var l=Number(o),c=r.getAttribute("data-resource-on-diagram"),v=this.allResourcesOnCurrentProduct.find((function(e){return e.resourceId===l}));v&&(this.rightClickedResourceOnDiagram="true"===c,this.rightClickedResourceOnProduct=v.deletable,this.rightClickedResourceId=0,this.rightClickedResourceX=e.x,this.rightClickedResourceY=e.y,this.$nextTick((function(){n.rightClickedResourceId=l})))}}},{key:"onClickMenuDeleteResourceOnDiagram",value:function(){var e=Number(this.rightClickedResourceId);this.onDeleteResourceOnDiagram(e)}},{key:"onClickMenuDeleteResourceOnProduct",value:function(){var e=Number(this.rightClickedResourceId);this.onDeleteResourceOnProduct(e)}},{key:"filterDisplayParet",value:function(e,n,t){return!!this.product.diagrams.of(this.diagramId)&&(!!e.type.equals(n)&&!t.includes(e.resourceId))}},{key:"filterUsedList",value:function(e,n){return n.includes(e.resourceId)}},{key:"iconKeyOf",value:function(e){return e?e.type.iconKey:""}}]),t}(h.Vue);f([Object(h.Prop)({required:!0})],m.prototype,"diagramId",void 0),f([Object(h.Prop)({required:!0})],m.prototype,"allResourcesOnCurrentProduct",void 0),f([Object(h.Prop)({required:!0})],m.prototype,"usedResouceIds",void 0),f([Object(h.Prop)({required:!0})],m.prototype,"product",void 0),f([Object(h.Emit)("onDeleteResourceOnDiagram")],m.prototype,"onDeleteResourceOnDiagram",null),f([Object(h.Emit)("onDeleteResourceOnProduct")],m.prototype,"onDeleteResourceOnProduct",null);var y=m=f([h.Component],m),O=(t(734),t(86)),k=t(79),j=t.n(k),P=t(269),w=t(860),R=t(861),_=t(862),C=t(863),D=t(266),I=t(268),A=t(163),E=t(90),B=t(274),component=Object(O.a)(y,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"paret-panel"},[t("v-expansion-panels",{attrs:{multiple:"",focusable:"",dark:""},model:{value:e.paretsOpen,callback:function(n){e.paretsOpen=n},expression:"paretsOpen"}},[e._l(e.availableResourceTypes,(function(n){return t("v-expansion-panel",{key:n.id},[t("v-expansion-panel-header",[t("div",{staticClass:"omit-long-text"},[t("v-icon",{attrs:{id:n.iconKey}},[e._v(e._s(n.iconKey))]),e._v("\n        "+e._s(n.name)+"\n      ")],1)]),e._v(" "),t("v-expansion-panel-content",[t("v-list",{attrs:{dark:"",dence:""}},[t("v-list-item",[t("v-list-item-content",[t("v-list-item-title",{staticClass:"chip-container"},[t("v-chip",{attrs:{color:"primary",dark:"",outlined:"",draggable:"","data-resource-type-id":n.id},on:{dragstart:e.onDragStartNewCompany}},[t("v-icon",[e._v(e._s(n.iconKey))]),e._v("新規追加\n              ")],1)],1)],1)],1),e._v(" "),e._l(e.allResourcesOnCurrentProduct.filter((function(t){return e.filterDisplayParet(t,n,e.usedResouceIds)})),(function(o){return t("v-list-item",{key:o.resourceId},[t("v-list-item-content",[t("v-list-item-title",{staticClass:"chip-container"},[t("v-chip",{attrs:{"data-resource-id":o.resourceId,color:"primary",dark:"",draggable:""},on:{dragstart:e.onDragStartResource,contextmenu:e.onRightClickResource}},[t("v-icon",[e._v(e._s(n.iconKey))]),e._v("\n                "+e._s(o.name)+"\n              ")],1)],1)],1)],1)}))],2)],1)],1)})),e._v(" "),t("v-expansion-panel",[t("v-expansion-panel-header",[t("div",{staticClass:"omit-long-text"},[t("v-icon",[e._v("mdi-clipboard-check-multiple-outline")]),e._v("この図で使用済\n      ")],1)]),e._v(" "),t("v-expansion-panel-content",[t("v-list",{attrs:{dark:"",dence:""}},e._l(e.allResourcesOnCurrentProduct.filter((function(n){return e.filterUsedList(n,e.usedResouceIds)})),(function(n){return t("v-list-item",{key:n.id},[t("v-list-item-content",[t("v-list-item-title",{staticClass:"chip-container"},[t("v-chip",{attrs:{dark:"","data-resource-id":n.resourceId,"data-resource-on-diagram":"true"},on:{contextmenu:e.onRightClickResource}},[t("v-icon",[e._v(e._s(e.iconKeyOf(n)))]),e._v("\n                "+e._s(n.name)+"\n              ")],1)],1)],1)],1)})),1)],1)],1),e._v(" "),t("v-menu",{attrs:{value:e.rightClickedResourceId,"close-on-click":!0,"close-on-content-click":!0,"offset-x":!0,rounded:!0,"position-x":e.rightClickedResourceX,"position-y":e.rightClickedResourceY}},[t("v-list",[e.rightClickedResourceOnDiagram?t("v-list-item",{attrs:{link:""},on:{click:e.onClickMenuDeleteResourceOnDiagram}},[t("v-list-item-title",[e._v("このダイアグラムから削除")])],1):e._e(),e._v(" "),e.rightClickedResourceOnProduct?t("v-list-item",{attrs:{link:""},on:{click:e.onClickMenuDeleteResourceOnProduct}},[t("v-list-item-title",[e._v("プロダクト全体から削除")])],1):e._e()],1)],1)],2)],1)}),[],!1,null,null,null);n.default=component.exports;j()(component,{VChip:P.a,VExpansionPanel:w.a,VExpansionPanelContent:R.a,VExpansionPanelHeader:_.a,VExpansionPanels:C.a,VIcon:D.a,VList:I.a,VListItem:A.a,VListItemContent:E.a,VListItemTitle:E.b,VMenu:B.a})},824:function(e,n,t){var content=t(825);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(27).default)("48751daa",content,!0,{sourceMap:!1})},825:function(e,n,t){var o=t(26)(!1);o.push([e.i,'.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.16}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.32}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),e.exports=o},860:function(e,n,t){"use strict";t(19),t(17),t(11),t(18),t(14),t(21);var o=t(2),r=t(131),l=t(130),c=t(0),v=t(8);function d(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}n.a=Object(v.a)(Object(r.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(l.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(c.q)(this))}})},861:function(e,n,t){"use strict";var o=t(120),r=t(180),l=t(30),c=t(130),v=t(0),d=t(8),h=Object(d.a)(r.a,l.a,Object(c.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));n.a=h.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(o.a,this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(v.q)(n))])]})))}})},862:function(e,n,t){"use strict";t(19),t(17),t(11),t(18),t(14),t(21);var o=t(2),r=t(120),l=t(81),c=t(30),v=t(130),d=t(76),h=t(0),x=t(8);function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var y=Object(x.a)(c.a,Object(v.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));n.a=y.extend().extend({name:"v-expansion-panel-header",directives:{ripple:d.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(h.q)(this,"actions")||[this.$createElement(l.a,this.expandIcon)];return this.$createElement(r.c,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:m(m({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(h.q)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},863:function(e,n,t){"use strict";t(19),t(17),t(11),t(18),t(14),t(21);var o=t(2),r=(t(179),t(824),t(178)),l=t(15);function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}n.a=r.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return v(v({},r.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(l.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(l.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),o=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(o)}}})}}]);