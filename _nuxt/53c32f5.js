(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{736:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return c}));e(48),e(25),e(22),e(54),e(43),e(17),e(66),e(80),e(42);var r=e(5),o=e(6);function f(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return l(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,f=!0,c=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return f=n.done,n},e:function(n){c=!0,o=n},f:function(){try{f||null==e.return||e.return()}finally{if(c)throw o}}}}function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=n[i];return e}var c=function(){function n(t){Object(r.a)(this,n),this.eventsOfTypes=t}return Object(o.a)(n,[{key:"validate",value:function(n,t,view){return this.eventsOfTypes.every((function(e){return e.validate(n,t,view)}))}},{key:"apply",value:function(n,t,view){var e,r=n,o=f(this.eventsOfTypes);try{for(o.s();!(e=o.n()).done;){var l=e.value.apply(r,t,view);if(null===l)return null;r=l}}catch(n){o.e(n)}finally{o.f()}return r}},{key:"isNothing",value:function(){return 0===this.eventsOfTypes.length}}],[{key:"nothing",value:function(){return new n([])}}]),n}()}}]);