(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-f9b568d0":"883a9443","chunk-8aff909a":"affe27b4","chunk-e556cc1c":"92115674"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-f9b568d0":1,"chunk-8aff909a":1,"chunk-e556cc1c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-f9b568d0":"c037b0dc","chunk-8aff909a":"6871d6fb","chunk-e556cc1c":"7bd365b8"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],l.parentNode.removeChild(l),n(u)},l.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"50fc":function(e,t,n){"use strict";n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"k",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"o",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"j",(function(){return h})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return b})),n.d(t,"i",(function(){return g})),n.d(t,"l",(function(){return y})),n.d(t,"g",(function(){return k}));var r=n("bc3a"),a=n.n(r);function o(e){var t=a.a.create({baseURL:"http://47.93.253.240:10805/api",timeout:5e4});return t(e)}function u(e){return o({url:"/admin/login",method:"GET",params:e})}function i(e){return o({url:"/admin/logout",method:"GET",params:e})}function c(e){return o({url:"/admin/setPhoneNumber",method:"POST",data:e})}function s(e){return o({url:"/admin/setPassword",method:"POST",data:e})}function d(e){return o({url:"/admin/tag/mission",method:"GET",params:e})}function f(e){return o({url:"/admin/tag/question",method:"GET",params:e})}function l(e){return o({url:"/admin/question/delete/tag",method:"POST",data:e})}function m(e){return o({url:"/admin/question/add/tag",method:"POST",data:e})}function p(e){return o({url:"/admin/answer/add",method:"POST",data:e})}function h(e){return o({url:"/admin/question/tagByQuestion",method:"GET",params:e})}function v(e){return o({url:"/user/question/get/answer",method:"GET",params:e})}function b(e){return o({url:"/user/question/get/commit",method:"GET",params:e})}function g(e){return o({url:"/admin/question/solved",method:"GET",params:e})}function y(e){return o({url:"/admin/question/unsolved",method:"GET",params:e})}function k(e){return o({url:"/user/image/byQuestion",method:"GET",params:e})}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u={name:"App",components:{},data:function(){return{}}},i=u,c=n("2877"),s=Object(c["a"])(i,a,o,!1,null,null,null),d=s.exports,f=(n("d3b7"),n("8c4f")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{staticStyle:{"margin-top":"5%"}},[n("v-row",[n("v-col",{attrs:{cols:"3"}}),n("v-col",{attrs:{cols:"6"}},[n("v-card",[n("v-card-title",[n("div",{staticClass:"card-title-element"},[e._v("登录")])]),n("v-card-text",[n("div",{staticStyle:{margin:"10%"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{label:"用户名",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),n("v-text-field",{attrs:{label:"密码",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("div",[e.isSubmit?n("v-btn",{attrs:{rounded:"",block:"",dark:""},on:{click:e.login}},[e._v("登录")]):n("v-btn",{attrs:{rounded:"",block:"",disabled:""}},[e._v("登录")])],1),n("v-divider")],1)],1)])],1)],1),n("v-col",{attrs:{cols:"3"}})],1)],1)],1)},m=[],p=(n("b0c0"),n("50fc")),h=n("f3e4"),v={name:"Login",data:function(){return{form:{name:"",password:""}}},methods:{login:function(){var e=this;Object(p["m"])(this.form).then((function(t){if(1===t.data.ErrorCode)alert("密码或账号错误");else{var n=t.data.data;Object(h["e"])(n.token,n.id,n.PhoneNumber,n.is_lb,e.form.name),e.$router.push({name:"Home"})}}))}},computed:{isSubmit:function(){for(var e in this.form){var t=this.form[e];if(void 0===t||""===t||null==t)return!1}return!0}}},b=v,g=(n("7577"),n("6544")),y=n.n(g),k=n("8336"),w=n("b0af"),T=n("99d9"),E=n("62ad"),O=n("a523"),P=n("ce7e"),L=n("4bd4"),S=n("0fd9"),j=n("8654"),_=Object(c["a"])(b,l,m,!1,null,"db20d21e",null),x=_.exports;y()(_,{VBtn:k["a"],VCard:w["a"],VCardText:T["a"],VCardTitle:T["b"],VCol:E["a"],VContainer:O["a"],VDivider:P["a"],VForm:L["a"],VRow:S["a"],VTextField:j["a"]}),r["default"].use(f["a"]);var C=[{path:"/login",component:x,name:"Login"},{path:"/home",component:function(){return Promise.all([n.e("chunk-f9b568d0"),n.e("chunk-e556cc1c")]).then(n.bind(null,"bb51"))},name:"Home"},{path:"/message",component:function(){return Promise.all([n.e("chunk-f9b568d0"),n.e("chunk-8aff909a")]).then(n.bind(null,"8e2a"))},name:"Message"}],q=new f["a"]({routes:C,mode:"history"});q.beforeEach((function(e,t,n){"/login"===e.path&&n(),Object(h["c"])().token?"/home"===e.path||"/message"===e.path?n():n({path:"/home"}):n({path:"/login"})}));var N=q,G=n("2f62"),V={state:{tagsList:[]},mutations:{setTagsList:function(e,t){e.tagsList=t}},getters:{tagsList:function(e){return e.tagsList}}},B=V;r["default"].use(G["a"]);var A=new G["a"].Store({modules:{admin:B}}),$=n("f309");r["default"].use($["a"]);var M=new $["a"]({}),I=n("bc3a"),D=n.n(I),F=n("a7fe"),H=n.n(F),J=n("5c96"),Q=n.n(J),R=(n("0fae"),n("b881")),U=n.n(R);n("a753"),n("14e1"),n("8096");r["default"].use(U.a),r["default"].use(H.a,D.a),r["default"].use(Q.a),r["default"].config.productionTip=!1,new r["default"]({router:N,store:A,vuetify:M,render:function(e){return e(d)}}).$mount("#app")},7577:function(e,t,n){"use strict";var r=n("b308"),a=n.n(r);a.a},b308:function(e,t,n){},f3e4:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n("a78e"),a=n.n(r);function o(e,t,n,r,o){a.a.set("userToken",e),a.a.set("userId",t),a.a.set("phoneNumber",n),a.a.set("isLB",r),a.a.set("name",o)}function u(){a.a.remove("userToken"),a.a.remove("userId"),a.a.remove("phoneNumber"),a.a.remove("isLB"),a.a.remove("name")}function i(){return{id:a.a.get("userId"),token:a.a.get("userToken"),phoneNumber:a.a.get("phoneNumber"),isLB:a.a.get("isLB"),name:a.a.get("name")}}function c(e){a.a.set("tagList",e)}function s(){return a.a.get("tagList")}}});
//# sourceMappingURL=app.57db3b54.js.map