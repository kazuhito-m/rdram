(window.webpackJsonp=window.webpackJsonp||[]).push([[48,69],{683:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return n}));var r=o(5),n=function t(area){Object(r.a)(this,t),this.area=area}},784:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return h}));var r=o(5),n=o(6),c=o(232),d=o.n(c),l=o(3),w=o(683),h=function(){function t(){Object(r.a)(this,t)}return Object(n.a)(t,[{key:"resourceType",value:function(){return l.a.始点終点}},{key:"generate",value:function(t,e,o){var r=String(t.resourceId),n=new d.a.shape.basic.Rectangle({id:r,x:t.x,y:t.y,width:40,height:20,bgColor:"none",alpha:0,stroke:0});return n.setResizeable(!1),e.startPoint?this.decorateStartPint(n):this.decorateEndPoint(n),n.setUserData(new w.default(!1)),n}},{key:"decorateStartPint",value:function(t){var e=new d.a.shape.basic.Circle({bgColor:"#000000"});e.setWidth(20),t.add(e,new d.a.layout.locator.CenterLocator);var o=new d.a.OutputPort;t.addPort(o,new d.a.layout.locator.BottomLocator)}},{key:"decorateEndPoint",value:function(t){var e=new d.a.shape.basic.Circle({bgColor:"none",stroke:2});e.setWidth(20),t.add(e,new d.a.layout.locator.CenterLocator);var o=new d.a.shape.basic.Circle({bgColor:"#000000",stroke:1});o.setWidth(12),t.add(o,new d.a.layout.locator.CenterLocator);var r=new d.a.InputPort;t.addPort(r,new d.a.layout.locator.TopLocator)}}]),t}()}}]);