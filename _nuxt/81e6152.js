(window.webpackJsonp=window.webpackJsonp||[]).push([[53,68,69],{683:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n(5),o=function t(area){Object(r.a)(this,t),this.area=area}},686:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(7);function o(t,e,n){return o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var base=function(object,t){for(;!Object.prototype.hasOwnProperty.call(object,t)&&null!==(object=Object(r.a)(object)););return object}(t,e);if(base){var desc=Object.getOwnPropertyDescriptor(base,e);return desc.get?desc.get.call(n):desc.value}},o(t,e,n||t)}},709:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var r=n(5),o=n(6),c=(n(22),n(494),n(232)),l=n.n(c),f=n(683),h=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"generate",value:function(t,e,n){var r=String(t.resourceId),o=new l.a.shape.basic.Oval({x:t.x,y:t.y,color:"#000000",bgColor:"#FFFFFF",alpha:1,width:t.width,height:t.height,radius:0,stroke:0,selectable:!0,resizable:!0,padding:0,id:r}),c=new l.a.shape.basic.Label({text:e.name,stroke:0,padding:0,alpha:1,bold:!0}),h=new l.a.shape.basic.Label({fontFamily:n.fontFamily,text:n.charactor,fontSize:25,stroke:0,padding:0,bgColor:"none",alpha:1});o.add(c,new l.a.layout.locator.CenterLocator),o.add(h,new l.a.layout.locator.XYAbsPortLocator({x:-14,y:-17})),o.createPort("hybrid",new l.a.layout.locator.CenterLocator);var d=o.getPorts().last(),y=new l.a.layout.anchor.FanConnectionAnchor(o);return d.setConnectionAnchor(y),o.setUserData(new f.default(!1)),o}}]),t}()},801:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));n(31);var r=n(5),o=n(6),c=n(686),l=n(10),f=n(9),h=n(7),d=(n(14),n(494),n(232)),y=n.n(d),v=n(3);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t){Object(l.a)(n,t);var e=w(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"resourceType",value:function(){return v.a.ユースケース}},{key:"generate",value:function(t,e,r){var o=Object(c.a)(Object(h.a)(n.prototype),"generate",this).call(this,t,e,r);o.setBackgroundColor("#FFFFAF"),o.getOutputPorts().asArray().forEach((function(t){return o.removePort(t)})),o.createPort("input",new y.a.layout.locator.TopLocator),o.createPort("output",new y.a.layout.locator.BottomLocator);var l=new y.a.layout.anchor.ChopboxConnectionAnchor(o);return o.getOutputPorts().last().setConnectionAnchor(l),o}}]),n}(n(709).default)}}]);