(window.webpackJsonp=window.webpackJsonp||[]).push([[55,66,69],{683:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n(5),o=function t(area){Object(r.a)(this,t),this.area=area}},686:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(7);function o(t,e,n){return o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var base=function(object,t){for(;!Object.prototype.hasOwnProperty.call(object,t)&&null!==(object=Object(r.a)(object)););return object}(t,e);if(base){var desc=Object.getOwnPropertyDescriptor(base,e);return desc.get?desc.get.call(n):desc.value}},o(t,e,n||t)}},687:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=n(5),o=n(6),c=(n(22),n(494),n(232)),l=n.n(c),f=n(683),d=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"generate",value:function(t,e,n){var r=String(t.resourceId),o=new l.a.shape.basic.Label({x:t.x,y:t.y,fontFamily:n.fontFamily,text:n.charactor,fontSize:40,stroke:0,padding:0,bgColor:"#FFFFFF",resizable:!1,alpha:1,id:r}),c=new l.a.shape.basic.Label({text:e.name,stroke:0,padding:0,resizable:!1,selectable:!1});o.createPort("hybrid",new l.a.layout.locator.CenterLocator);var d=o.getPorts().last(),y=new l.a.layout.anchor.ChopboxConnectionAnchor(o);return d.setConnectionAnchor(y),o.add(c,new l.a.layout.locator.BottomLocator),o.setUserData(new f.default(!1)),o}}]),t}()},688:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));n(31);var r=n(5),o=n(6),c=n(10),l=n(9),f=n(7),d=n(232),y=n.n(d);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t){Object(c.a)(n,t);var e=h(n);function n(t,o,c){var l;return Object(r.a)(this,n),(l=e.call(this,t,o,c)).NAME="draw2d.layout.locator.TopLeftLocator",l.padding=0,l}return Object(o.a)(n,[{key:"relocate",value:function(t,e){var n=e.getBoundingBox(),r=0;e instanceof y.a.Port||(r=-n.h-2),e.setPosition(0,r)}}]),n}(y.a.layout.locator.TopLocator)},804:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));n(31),n(48),n(25),n(54),n(43),n(17),n(66),n(80),n(42);var r=n(5),o=n(6),c=n(686),l=n(10),f=n(9),d=n(7),y=(n(22),n(494),n(232)),h=n.n(y),v=n(687),F=n(683),w=n(3),O=n(688);function j(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var k=function(t){Object(l.a)(n,t);var e=R(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"resourceType",value:function(){return w.a.バリエーション}},{key:"generate",value:function(t,e,r){return t.alias?Object(c.a)(Object(d.a)(n.prototype),"generate",this).call(this,t,e,r):this.generateVariationTable(t,e,r)}},{key:"generateVariationTable",value:function(t,e,n){var r=String(t.resourceId),label=new h.a.shape.basic.Label({text:e.name});label.setResizeable(!0),label.setFontColor("#FFFFFF"),label.setBold(!0),label.setStroke(2),label.setColor("#FFFFFF"),label.setPadding(2),label.setBackgroundColor("#F69747");var o=new h.a.shape.layout.TableLayout({id:r,x:t.x,y:t.y,padding:1,stroke:1});o.addRow(label);var c,i=0,l=j(e.valuesOf());try{for(l.s();!(c=l.n()).done;){var f=c.value,d=new h.a.shape.basic.Label({text:f});d.setResizeable(!0),d.setPadding(2),d.setStroke(2),d.setColor("#FFFFFF"),d.setBackgroundColor(i%2?"#FDF0EA":"#FEDBD2"),o.addRow(d),i++}}catch(t){l.e(t)}finally{l.f()}var y=new h.a.shape.basic.Label({fontFamily:n.fontFamily,text:n.charactor,fontSize:30,stroke:0,padding:0,bgColor:"none",alpha:1}),v=new h.a.shape.basic.Label({text:e.name,stroke:0,padding:0,resizable:!1,selectable:!1});y.add(v,new h.a.layout.locator.XYRelPortLocator({x:105,y:27})),o.add(y,new O.a),o.createPort("hybrid",new h.a.layout.locator.CenterLocator);var w=o.getPorts().last(),m=new h.a.layout.anchor.FanConnectionAnchor(o);return w.setConnectionAnchor(m),o.setUserData(new F.default(!1)),o}}]),n}(v.default)}}]);