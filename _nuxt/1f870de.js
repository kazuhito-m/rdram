(window.webpackJsonp=window.webpackJsonp||[]).push([[87,72,84],{774:function(t,e,n){"use strict";n(17),n(11),n(18),n(21);var r=n(2),o=(n(32),n(19),n(50),n(92),n(495),n(25),n(43),n(496),n(497),n(498),n(499),n(500),n(501),n(502),n(503),n(504),n(505),n(506),n(507),n(508),n(42),n(55),n(14),n(93),n(509),n(4)),c=n(72),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),j=v.reduce((function(t,e){return t["offset"+Object(l.A)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.A)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(y),offset:Object.keys(j),order:Object.keys(O)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var C=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=C.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),C.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},775:function(t,e,n){"use strict";n(17),n(11),n(18),n(21);var r=n(2),o=(n(55),n(70),n(35),n(19),n(50),n(92),n(495),n(25),n(43),n(496),n(497),n(498),n(499),n(500),n(501),n(502),n(503),n(504),n(505),n(506),n(507),n(508),n(42),n(14),n(509),n(4)),c=n(72),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function j(t,e){return v.reduce((function(n,r){return n[t+Object(l.A)(r)]=e(),n}),{})}var O=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},h=j("align",(function(){return{type:String,default:null,validator:O}})),m=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},C=j("justify",(function(){return{type:String,default:null,validator:m}})),x=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},w=j("alignContent",(function(){return{type:String,default:null,validator:x}})),M={align:Object.keys(h),justify:Object.keys(C),alignContent:Object.keys(w)},N={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=N[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},h),{},{justify:{type:String,default:null,validator:m}},C),{},{alignContent:{type:String,default:null,validator:x}},w),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],M)M[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},811:function(t,e,n){var content=n(827);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6cced5d4",content,!0,{sourceMap:!1})},812:function(t,e,n){var content=n(830);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("3432a2b0",content,!0,{sourceMap:!1})},826:function(t,e,n){"use strict";n(811)},827:function(t,e,n){var r=n(26)(!1);r.push([t.i,".nuxt-logo{height:180px}",""]),t.exports=r},828:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ny41IDEwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxNjk3ZjY7fS5jbHMtMntmaWxsOiM3YmM2ZmY7fS5jbHMtM3tmaWxsOiMxODY3YzA7fS5jbHMtNHtmaWxsOiNhZWRkZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BcnRib2FyZCA0NjwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0My43NSAwIDIzLjMxIDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNDMuNzUgNjIuNSA0My43NSAxMDAgMCAxNC41OCAyMi45MiAxNC41OCA0My43NSA2Mi41Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSI0My43NSAwIDY0LjE5IDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNjQuNTggMTQuNTggODcuNSAxNC41OCA0My43NSAxMDAgNDMuNzUgNjIuNSA2NC41OCAxNC41OCIvPjwvc3ZnPgo="},829:function(t,e,n){"use strict";n(812)},830:function(t,e,n){var r=n(26)(!1);r.push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=r},842:function(t,e,n){"use strict";n.r(e);n(826);var r=n(86),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"nuxt-logo",attrs:{viewBox:"0 0 45 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z",fill:"#00DC82"}})])}),[],!1,null,null,null);e.default=component.exports},843:function(t,e,n){"use strict";n.r(e);n(829);var r=n(86),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:n(828)}})}),[],!1,null,null,null);e.default=component.exports},895:function(t,e,n){"use strict";n.r(e);var r=n(86),o=n(79),c=n.n(o),l=n(294),f=n(264),d=n(47),v=n(774),y=n(775),j=n(674),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("v-card",{staticClass:"logo py-4 d-flex justify-center"},[n("NuxtLogo"),t._v(" "),n("VuetifyLogo")],1),t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n        Welcome to the Vuetify + Nuxt.js template (ここが変更されてたら、デプロイできてます)\n      ")]),t._v(" "),n("v-card-text",[n("p",[t._v("Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.")]),t._v(" "),n("p",[t._v("\n          For more information on Vuetify, check out the "),n("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            documentation\n          ")]),t._v(".\n        ")]),t._v(" "),n("p",[t._v("\n          If you have questions, please join the official "),n("a",{attrs:{href:"https://chat.vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer",title:"chat"}},[t._v("\n            discord\n          ")]),t._v(".\n        ")]),t._v(" "),n("p",[t._v("\n          Find a bug? Report it on the github "),n("a",{attrs:{href:"https://github.com/vuetifyjs/vuetify/issues",target:"_blank",rel:"noopener noreferrer",title:"contribute"}},[t._v("\n            issue board\n          ")]),t._v(".\n        ")]),t._v(" "),n("p",[t._v("Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.")]),t._v(" "),n("div",{staticClass:"text-xs-right"},[n("em",[n("small",[t._v("— John Leider")])])]),t._v(" "),n("hr",{staticClass:"my-3"}),t._v(" "),n("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n          Nuxt Documentation\n        ")]),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n          Nuxt GitHub\n        ")])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",nuxt:"",to:"/inspire"}},[t._v("\n          Continue\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{NuxtLogo:n(842).default,VuetifyLogo:n(843).default}),c()(component,{VBtn:l.a,VCard:f.a,VCardActions:d.a,VCardText:d.c,VCardTitle:d.d,VCol:v.a,VRow:y.a,VSpacer:j.a})}}]);