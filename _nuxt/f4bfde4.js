(window.webpackJsonp=window.webpackJsonp||[]).push([[36,66,69],{683:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n(5),o=function t(area){Object(r.a)(this,t),this.area=area}},687:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=n(5),o=n(6),c=(n(22),n(494),n(232)),f=n.n(c),l=n(683),d=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"generate",value:function(t,e,n){var r=String(t.resourceId),o=new f.a.shape.basic.Label({x:t.x,y:t.y,fontFamily:n.fontFamily,text:n.charactor,fontSize:40,stroke:0,padding:0,bgColor:"#FFFFFF",resizable:!1,alpha:1,id:r}),c=new f.a.shape.basic.Label({text:e.name,stroke:0,padding:0,resizable:!1,selectable:!1});o.createPort("hybrid",new f.a.layout.locator.CenterLocator);var d=o.getPorts().last(),h=new f.a.layout.anchor.ChopboxConnectionAnchor(o);return d.setConnectionAnchor(h),o.add(c,new f.a.layout.locator.BottomLocator),o.setUserData(new l.default(!1)),o}}]),t}()},780:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));n(31);var r=n(5),o=n(6),c=n(10),f=n(9),l=n(7),d=n(687),h=n(3);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"resourceType",value:function(){return h.a.住宅}}]),n}(d.default)}}]);