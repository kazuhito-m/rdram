(window.webpackJsonp=window.webpackJsonp||[]).push([[67,69],{683:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var o=n(5),r=function t(area){Object(o.a)(this,t),this.area=area}},688:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));n(31);var o=n(5),r=n(6),c=n(10),l=n(9),f=n(7),d=n(232),h=n.n(d);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t){Object(c.a)(n,t);var e=y(n);function n(t,r,c){var l;return Object(o.a)(this,n),(l=e.call(this,t,r,c)).NAME="draw2d.layout.locator.TopLeftLocator",l.padding=0,l}return Object(r.a)(n,[{key:"relocate",value:function(t,e){var n=e.getBoundingBox(),o=0;e instanceof h.a.Port||(o=-n.h-2),e.setPosition(0,o)}}]),n}(h.a.layout.locator.TopLocator)},771:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var o=n(5),r=n(6),c=(n(22),n(494),n(232)),l=n.n(c),f=n(688),d=n(683),h=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"generate",value:function(t,e,n){var o=String(t.resourceId),r=e,text=new l.a.shape.node.Hub({x:t.x,y:t.y,color:"#888888",bgColor:"#FFFFFF",alpha:1,radius:17,stroke:2,lineStroke:2,resizable:!0,padding:0,bold:!0,text:r.content,id:o});text.setWidth(t.width),text.setHeight(t.height);var c=new l.a.shape.basic.Label({fontFamily:n.fontFamily,text:n.charactor,fontSize:30,stroke:0,padding:0,bgColor:"#FFFFFF",alpha:1}),h=new l.a.shape.basic.Label({text:e.name,stroke:0,padding:0,resizable:!1,selectable:!1});c.add(h,new l.a.layout.locator.XYRelPortLocator({x:105,y:27})),text.add(c,new f.a),text.createPort("hybrid",new l.a.layout.locator.CenterLocator);var y=text.getPorts().last(),v=new l.a.layout.anchor.ChopboxConnectionAnchor(text);return y.setConnectionAnchor(v),text.setUserData(new d.default(!1)),text}}]),t}()}}]);