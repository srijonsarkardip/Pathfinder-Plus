(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],h=0,p=[];h<r.length;h++)s=r[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"525a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Menus",{attrs:{refresh:"",debug:"",context:t.dynamicContextMenu}}),n("Watcher",{attrs:{property:"app.selection.length",interval:200},model:{value:t.selectionLength,callback:function(e){t.selectionLength=e},expression:"selectionLength"}}),n("Panel",{attrs:{"script-path":"./host/[appName]"},on:{mouseenter:function(e){t.inside=!0},mouseleave:function(e){t.inside=!1},resize:function(e){return t.size.width=e.width}}},[n("Wrapper",[t.notMini&&this.showAnno?n("Anno",{staticStyle:{height:"16px","white-space":"nowrap"},attrs:{size:"10px",color:"var(--color-"+(this.hasAnno?"default":"scrollbar-arrow")+")"}},[t._v(t._s(t.anno))]):t._e(),t.isGridDisplay?n("Grid",{attrs:{template:t.dynamicGridTemplate}},t._l(t.dynamicButtonList,(function(e,a){return n("Button",{key:a,attrs:{disabled:!t.canUsePathfinder},on:{clickevt:function(n){return t.clickHandler(e,n)},mouseenter:function(n){t.currentTool=e.icon},mouseleave:function(e){t.currentTool=null}}},[n("Icons",{attrs:{name:e.icon}})],1)})),1):n("Button-Group",t._l(t.dynamicButtonList,(function(e,a){return n("Button",{key:a,attrs:{width:"30px",flat:"",disabled:!t.canUsePathfinder},on:{clickevt:function(n){return t.clickHandler(e,n)},mouseenter:function(n){t.currentTool=e.icon},mouseleave:function(e){t.currentTool=null}}},[n("Icons",{attrs:{name:e.icon}})],1)})),1),t._e()],1)],1)],1)},o=[],s=(n("99af"),n("4160"),n("a15b"),n("d81d"),n("b64b"),n("ac1f"),n("1276"),n("159b"),n("96cf"),n("1da1")),r=n("a779"),c=(n("2e38"),{components:{Icons:n("c5a6").default,Preview:n("e6c4").default},computed:{hasAnno:function(){return this.showAnno&&this.currentTool&&this.currentTool.length},anno:function(){return this.currentTool?this.capitalizePhrase(this.currentTool):"None"},canUsePathfinder:function(){return this.selectionLength>1||!this.useResponsiveToolbar},notMini:function(){return this.size.width>70},dynamicGridTemplate:function(){return this.size.width<88?"1fr":this.size.width<128?"1fr 1fr":"1fr 1fr 1fr"},dynamicContextMenu:function(){return[{label:"Show annotation",checkable:!0,checked:this.showAnno,callback:this.assignShowAnno},{label:"Responsive UI",checkable:!0,checked:this.useResponsiveToolbar,callback:this.assignResponsiveUI},{label:"Extra functions",checkable:!0,checked:this.hasExtraFuncs,callback:this.assignExtras},{label:"Retain selection",checkable:!0,checked:this.combSelection,callback:this.assignCombSelection},{label:"Live preview",checkable:!0,enabled:!1,checked:!1,callback:this.assignPreview}]},prefs:function(){return{useResponsiveToolbar:this.useResponsiveToolbar,enablePreview:this.enablePreview,combSelection:this.combSelection,hasExtraFuncs:this.hasExtraFuncs,showAnno:this.showAnno}},dynamicButtonList:function(){if(this.hasExtraFuncs){var t=[].concat(this.extraFuncs,this.list);return[].concat(t,this.extraList)}return this.list}},mounted:function(){this.reset(),this.getPrefs()},data:function(){return{currentTool:"",useResponsiveToolbar:!0,selectionLength:0,showAnno:!0,hasExtraFuncs:!0,combSelection:!0,isGridDisplay:null,enablePreview:!1,isAlt:!1,inside:!1,size:{width:window.innerWidth,height:window.innerHeight},extraFuncs:[{icon:"compound path",code:'app.executeMenuCommand("compoundPath")'},{icon:"clipping mask"}],extraList:[{icon:"hard mix",code:'app.executeMenuCommand("Live Pathfinder Hard Mix")'},{icon:"soft mix",code:'app.executeMenuCommand("Live Pathfinder Soft Mix")'}],list:[{icon:"unite"},{icon:"minus front"},{icon:"intersect"},{icon:"exclude"},{icon:"divide"},{icon:"trim"},{icon:"merge"},{icon:"crop"},{icon:"outline"},{icon:"minus back"}]}},watch:{"size.width":function(t){this.isGridDisplay=t<160},prefs:{handler:function(t){this.setPrefs(t)},deep:!0},currentTool:function(t){}},methods:{copyAction:function(t){var e=t[0].split("\r\n"),n="";e.forEach((function(t,a){n+='"'.concat(t,'"').concat(a<e.length-1?" +\r\n":"")})),Object(r["C"])(n)},reset:function(){this.currentTool=null,this.isGridDisplay=window.innerWidth<150},assignShowAnno:function(t,e,n){this.showAnno=n},assignResponsiveUI:function(t,e,n){this.useResponsiveToolbar=n},assignCombSelection:function(t,e,n){this.combSelection=n},assignExtras:function(t,e,n){this.hasExtraFuncs=n},assignPreview:function(t,e,n){this.enablePreview=n},clickHandler:function(t,e){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=n.prefs,t.code){a.next=12;break}if(o=t.icon,/(minus\sfront|unite|intersect|exclude)/i.test(o)&&e.altKey&&(o+="-alt"),!(n.selectionLength>1)){a.next=10;break}return a.next=7,Object(r["D"])("executeAction('".concat(o,"', '").concat(JSON.stringify(i),"')"));case 7:a.sent,a.next=10;break;case 10:a.next=15;break;case 12:return a.next=14,Object(r["D"])(t.code);case 14:a.sent;case 15:case"end":return a.stop()}}),a)})))()},setPrefs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t||(t=this.prefs),window.localStorage.setItem("pathfinder",JSON.stringify(t))},getPrefs:function(){var t=this,e=window.localStorage.getItem("pathfinder");e=e?JSON.parse(e):this.prefs,Object.keys(e).forEach((function(n){t[n]=e[n]}))},capitalizePhrase:function(t){function e(t){return t[0].toUpperCase()+t.substring(1)}return t.length?/\s/.test(t)?t.split(" ").map((function(t){return e(t)})).join(" "):e(t):""}}}),l=c,u=(n("034f"),n("2877")),h=Object(u["a"])(l,i,o,!1,null,null,null),p=h.exports,d=n("6787");a["a"].config.productionTip=!1,a["a"].component("Anno",r["b"]),a["a"].component("Alert",r["a"]),a["a"].component("Button-Group",r["d"]),a["a"].component("Button",r["c"]),a["a"].component("Col",r["e"]),a["a"].component("Divider",r["g"]),a["a"].component("Dropdown",r["h"]),a["a"].component("Dropzone",r["i"]),a["a"].component("File-Input",r["j"]),a["a"].component("File-Picker",r["k"]),a["a"].component("Color-Picker",r["f"]),a["a"].component("Fold",r["l"]),a["a"].component("Footer",r["m"]),a["a"].component("Grid",r["n"]),a["a"].component("Icon",r["o"]),a["a"].component("Input-Scroll",r["q"]),a["a"].component("Input",r["p"]),a["a"].component("Link",r["r"]),a["a"].component("Menus",r["s"]),a["a"].component("Panel-Info",r["u"]),a["a"].component("Panel",r["t"]),a["a"].component("Row",r["v"]),a["a"].component("Select",r["w"]),a["a"].component("Tabs",r["x"]),a["a"].component("TextArea",r["y"]),a["a"].component("Toggle",r["z"]),a["a"].component("Watcher",r["A"]),a["a"].component("Wrapper",r["B"]),a["a"].use(d["b"]),new a["a"]({render:function(t){return t(p)}}).$mount("#app")},"6af3":function(t,e,n){},"773a":function(t,e,n){"use strict";var a=n("525a"),i=n.n(a);i.a},"85ec":function(t,e,n){},"9b0f":function(t,e){t.exports=require("fs")},a32b:function(t,e){t.exports=require("path")},c5a6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-wrapper"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"19",height:"19"}},["unite"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M22,8.4V20.6A1.4,1.4,0,0,1,20.6,22H8.4A1.4,1.4,0,0,1,7,20.6V17H3.4A1.4,1.4,0,0,1,2,15.6V3.4A1.4,1.4,0,0,1,3.4,2H15.6A1.4,1.4,0,0,1,17,3.4V7h3.6A1.4,1.4,0,0,1,22,8.4Z"}})]):"minus front"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M20.6,7H17V3.4A1.4,1.4,0,0,0,15.6,2H3.4A1.4,1.4,0,0,0,2,3.4V15.6A1.4,1.4,0,0,0,3.4,17H7v3.6A1.4,1.4,0,0,0,8.4,22H20.6A1.4,1.4,0,0,0,22,20.6V8.4A1.4,1.4,0,0,0,20.6,7ZM21,21H8V8H21Z"}})]):"intersect"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M20.6,7H17V3.4A1.4,1.4,0,0,0,15.6,2H3.4A1.4,1.4,0,0,0,2,3.4V15.6A1.4,1.4,0,0,0,3.4,17H7v3.6A1.4,1.4,0,0,0,8.4,22H20.6A1.4,1.4,0,0,0,22,20.6V8.4A1.4,1.4,0,0,0,20.6,7ZM7,8.4V16H3V3H16V7H8.4A1.4,1.4,0,0,0,7,8.4ZM21,21H8V17h7.6A1.4,1.4,0,0,0,17,15.6V8h4Z"}})]):"exclude"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M15.6,2H3.4A1.4,1.4,0,0,0,2,3.4V15.6A1.4,1.4,0,0,0,3.4,17H15.6A1.4,1.4,0,0,0,17,15.6V3.4A1.4,1.4,0,0,0,15.6,2ZM16,16H8V8h8Z"}}),n("path",{staticClass:"default-icon",attrs:{d:"M22,8.4V20.6A1.4,1.4,0,0,1,20.6,22H8.4A1.4,1.4,0,0,1,7,20.6V17h8.6A1.4,1.4,0,0,0,17,15.6V7h3.6A1.4,1.4,0,0,1,22,8.4Z"}})]):"divide"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M17,3.4V7H8.4A1.4,1.4,0,0,0,7,8.4V17H3.4A1.4,1.4,0,0,1,2,15.6V3.4A1.4,1.4,0,0,1,3.4,2H15.6A1.4,1.4,0,0,1,17,3.4Z"}}),n("rect",{staticClass:"default-icon",attrs:{x:"8",y:"8",width:"8",height:"8"}}),n("path",{staticClass:"default-icon",attrs:{d:"M22,8.4V20.6A1.4,1.4,0,0,1,20.6,22H8.4A1.4,1.4,0,0,1,7,20.6V17h8.6A1.4,1.4,0,0,0,17,15.6V7h3.6A1.4,1.4,0,0,1,22,8.4Z"}}),n("rect",{staticClass:"default-icon",attrs:{x:"8",y:"8",width:"8",height:"8"}})]):"trim"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M17,3.4V7H8.4A1.4,1.4,0,0,0,7,8.4V17H3.4A1.4,1.4,0,0,1,2,15.6V3.4A1.4,1.4,0,0,1,3.4,2H15.6A1.4,1.4,0,0,1,17,3.4Z"}}),n("path",{staticClass:"default-icon",attrs:{d:"M22,8.4V20.6A1.4,1.4,0,0,1,20.6,22H8.4A1.4,1.4,0,0,1,7,20.6V17H8V8h9V7h3.6A1.4,1.4,0,0,1,22,8.4Z"}})]):"merge"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M22,8.4V20.6A1.4,1.4,0,0,1,20.6,22H8.4A1.4,1.4,0,0,1,7,20.6V17H8V8H7.07A1.09,1.09,0,0,0,7,8.4V17H3.4A1.4,1.4,0,0,1,2,15.6V3.4A1.4,1.4,0,0,1,3.4,2H15.6A1.4,1.4,0,0,1,17,3.4V7h3.6A1.4,1.4,0,0,1,22,8.4Z"}})]):"crop"==t.name?n("g",[n("path",{staticClass:"faded-icon",attrs:{d:"M15.6,2H3.4A1.4,1.4,0,0,0,2,3.4V15.6A1.4,1.4,0,0,0,3.4,17H7V16H3V3H16V7h1V3.4A1.4,1.4,0,0,0,15.6,2Z"}}),n("rect",{attrs:{x:"8",y:"8",width:"8",height:"8"}}),n("path",{staticClass:"default-icon",attrs:{d:"M20.6,7H17V8h4V21H8V17H7v3.6A1.4,1.4,0,0,0,8.4,22H20.6A1.4,1.4,0,0,0,22,20.6V8.4A1.4,1.4,0,0,0,20.6,7Z"}}),n("rect",{staticClass:"default-icon",attrs:{x:"8",y:"8",width:"8",height:"8"}})]):"outline"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M16,16H8v1h7.6A1.4,1.4,0,0,0,17,15.6V8H16ZM15.6,2H3.4A1.4,1.4,0,0,0,2,3.4V15.6A1.4,1.4,0,0,0,3.4,17H7V16H3V3H16V7h1V3.4A1.4,1.4,0,0,0,15.6,2Z"}}),n("path",{staticClass:"default-icon",attrs:{d:"M16,7V8H8v8H7V8.4A1.4,1.4,0,0,1,8.4,7Z"}}),n("path",{staticClass:"default-icon",attrs:{d:"M20.6,7H17V8h4V21H8V17H7v3.6A1.4,1.4,0,0,0,8.4,22H20.6A1.4,1.4,0,0,0,22,20.6V8.4A1.4,1.4,0,0,0,20.6,7ZM8,8h8V7H8.4A1.4,1.4,0,0,0,7,8.4V16H8Z"}}),n("path",{staticClass:"default-icon",attrs:{d:"M17,8v7.6A1.4,1.4,0,0,1,15.6,17H8V16h8V8Z"}})]):"minus back"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M20.6,7H17V3.4A1.4,1.4,0,0,0,15.6,2H3.4A1.4,1.4,0,0,0,2,3.4V15.6A1.4,1.4,0,0,0,3.4,17H7v3.6A1.4,1.4,0,0,0,8.4,22H20.6A1.4,1.4,0,0,0,22,20.6V8.4A1.4,1.4,0,0,0,20.6,7ZM16,16H3V3H16Z"}})]):"clipping mask"==t.name?n("path",{staticClass:"default-icon",attrs:{d:"M16,6.29V2H2V16H6.27c.06.21.12.42.19.63l1-.33c0-.1-.07-.2-.1-.3H16V7.32l.3.1.33-1Q16.34,6.37,16,6.29Zm-1-.2A8.26,8.26,0,0,0,14,6a8,8,0,0,0-8,8,8.14,8.14,0,0,0,.06,1H3V3H15ZM14.94,22l-.11-1a7,7,0,0,0,1.82-.46l.37.93A8.13,8.13,0,0,1,14.94,22Zm-2.14,0a7.65,7.65,0,0,1-2.06-.61l.41-.91a6.66,6.66,0,0,0,1.8.53Zm6.09-1.55-.61-.79a7,7,0,0,0,1.32-1.34l.8.61A7.77,7.77,0,0,1,18.89,20.38Zm-10-.19a8.09,8.09,0,0,1-1.46-1.58L8.28,18a7,7,0,0,0,1.28,1.39ZM21.46,17l-.93-.37A7.14,7.14,0,0,0,21,14.8l1,.1A8.31,8.31,0,0,1,21.46,17Zm-.52-4.07a7,7,0,0,0-.55-1.8l.91-.42a7.89,7.89,0,0,1,.62,2.06ZM19.39,9.53A6.93,6.93,0,0,0,18,8.27l.57-.83a8.06,8.06,0,0,1,1.58,1.45Z",transform:"translate(-2 -2)"}}):"compound path"==t.name?n("g",[n("path",{staticClass:"default-icon",attrs:{d:"M16,6.39V2.77A.76.76,0,0,0,15.23,2H2.77A.76.76,0,0,0,2,2.77V15.23a.76.76,0,0,0,.77.77H6.39A7.92,7.92,0,1,0,16,6.39ZM14.08,21a6.92,6.92,0,0,1-6.65-5,5.55,5.55,0,0,1-.21-1H3V3H15V7.22a5.55,5.55,0,0,1,1,.21A6.92,6.92,0,0,1,14.08,21Z",transform:"translate(-2 -2)"}})]):"hard mix"==t.name?n("g",[n("path",{staticClass:"red-icon",attrs:{d:"M17,3.4V7H8.4A1.4,1.4,0,0,0,7,8.4V17H3.4A1.4,1.4,0,0,1,2,15.6V3.4A1.4,1.4,0,0,1,3.4,2H15.6A1.4,1.4,0,0,1,17,3.4Z",transform:"translate(-2 -2)"}}),n("rect",{staticClass:"default-icon",attrs:{x:"6",y:"6",width:"8",height:"8"}}),n("path",{staticClass:"blue-icon",attrs:{d:"M22,8.4V20.6A1.4,1.4,0,0,1,20.6,22H8.4A1.4,1.4,0,0,1,7,20.6V17h8.6A1.4,1.4,0,0,0,17,15.6V7h3.6A1.4,1.4,0,0,1,22,8.4Z",transform:"translate(-2 -2)"}}),n("rect",{attrs:{x:"6",y:"6",width:"8",height:"8"}})]):"soft mix"==t.name?n("g",[n("path",{staticClass:"red-icon",attrs:{d:"M17,3.4V7H8.4A1.4,1.4,0,0,0,7,8.4V17H3.4A1.4,1.4,0,0,1,2,15.6V3.4A1.4,1.4,0,0,1,3.4,2H15.6A1.4,1.4,0,0,1,17,3.4Z",transform:"translate(-2 -2)"}}),n("rect",{staticClass:"default-icon",attrs:{x:"6",y:"6",width:"8",height:"8"}}),n("path",{staticClass:"blue-icon",attrs:{d:"M22,8.4V20.6A1.4,1.4,0,0,1,20.6,22H8.4A1.4,1.4,0,0,1,7,20.6V17h8.6A1.4,1.4,0,0,0,17,15.6V7h3.6A1.4,1.4,0,0,1,22,8.4Z",transform:"translate(-2 -2)"}}),n("rect",{staticClass:"purple-icon",attrs:{x:"6",y:"6",width:"8",height:"8"}})]):t._e()])])},i=[],o={props:{name:{type:String,default:"unite"}}},s=o,r=(n("f08a"),n("2877")),c=Object(r["a"])(s,a,i,!1,null,"5feb67db",null);e["default"]=c.exports},e6c4:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-wrapper"},[n("Dropzone",{attrs:{"auto-read":"","pure-svg":""},on:{read:t.testDrop}}),t.tempSVG&&t.tempSVG.length?n("runtime-template-compiler",{attrs:{template:t.tempSVG}}):t._e()],1)},i=[],o=(n("ac1f"),n("5319"),n("2e38"),n("a779"),n("6787")),s=(n("9b0f"),{props:{mode:{type:String,default:""},inside:{type:Boolean,default:!1}},data:function(){return{tempSVG:""}},components:{RuntimeTemplateCompiler:o["a"]},computed:{hasPreview:function(){return this.mode.length}},methods:{testDrop:function(t){this.tempSVG=t.replace(/\<!--.*--\>\s/,""),console.log(this.tempSVG)}}}),r=s,c=(n("773a"),n("2877")),l=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=l.exports},f08a:function(t,e,n){"use strict";var a=n("6af3"),i=n.n(a);i.a}});
//# sourceMappingURL=app.559eb7fe.js.map