(window.webpackJsonp=window.webpackJsonp||[]).push([[23,21],{702:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var r=t(5),o=t(6),c=(t(98),t(36),t(11),t(737)),l=function(){function e(){Object(r.a)(this,e),this.eventGists=[],this.figureAnalyzer=new c.default}return Object(o.a)(e,[{key:"eventType",value:function(){return"Delete Shape"}},{key:"prototype",value:function(){return new e}},{key:"validate",value:function(e,n,view){var t=this.figureAnalyzer.analyzeResourceIds(this.validTargetFigures());return!!view.confirmResourceDelete(t,e)||(this.eventGists[0].rootCommand.undo(),!1)}},{key:"apply",value:function(e,n,view){var t=this.validTargetFigures(),r=this.figureAnalyzer.analyzeResourceIds(t),o=this.figureAnalyzer.analizeRelationIds(t);return console.log("消す位置:".concat(r.join())),console.log("消す線:".concat(o.join())),e.removeResourcesOf(r).removeRelationsOf(o)}},{key:"validTargetFigures",value:function(){return this.eventGists.map((function(e){return e.figure})).filter((function(figure){return void 0!==figure})).map((function(figure){return figure}))}}]),e}()},737:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var r=t(5),o=t(6),c=(t(50),t(284),t(36),t(11),function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"isConnection",value:function(figure){if(!figure)return!1;var e=figure.getId();return!!e&&!e.search(/^[0-9]+$/)}},{key:"analyzeResourceId",value:function(figure){return this.isConnection(figure)?null:parseInt(null==figure?void 0:figure.getId(),10)}},{key:"analyzeResourceIds",value:function(e){var n=this;return e.filter((function(figure){return n.isConnection(figure)})).map((function(figure){return parseInt(figure.getId(),10)}))}},{key:"analizeRelationIds",value:function(e){var n=this;return e.filter((function(figure){return!n.isConnection(figure)})).map((function(figure){return figure.getId()}))}}]),e}())}}]);