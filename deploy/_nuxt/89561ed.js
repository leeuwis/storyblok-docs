(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{205:function(t,e,n){var content=n(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("618626cf",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";n(205)},251:function(t,e,n){var o=n(36)(!1);o.push([t.i,'.main-navigation{position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;padding:10px 5px 10px 25px;margin:10px;font-size:inherit;display:inline-block;border:1px solid #efefef;background:#f5f6f7;color:#4c555a}@media screen and (min-width:1320px){.main-navigation{display:none}}.main-navigation-label{position:relative;display:inline-block}.main-navigation-label:before{content:"";position:absolute;top:50%;transform:translateY(-50%);left:15px;width:1em;height:.125em;border-width:1px;border-top:.375em double #dde4e8;border-bottom:.125em solid #dde4e8;z-index:1}',""]),t.exports=o},257:function(t,e,n){"use strict";n.r(e);n(50);var o={data:function(){return{activeMenuPath:this.$store.state.activeMenuPath}},methods:{methodByContentPath:function(t){return void 0===t?{}:this.$store.state.sections[t.replace(this.$store.getters.originLanguagePath,"")]},path:function(t){if(void 0===this.methodByContentPath(t.contentPath))throw new Error("File ".concat(t.contentPath," not found."));return this.methodByContentPath(t.contentPath).path},navigate:function(){this.$store.state.activeMenuPath=this.methodByContentPath(this.activeMenuPath).path,window.location.hash="#"+this.$store.state.activeMenuPath},title:function(t){var e=this.methodByContentPath(t.contentPath);return e.attributes.sidebarTitle||e.attributes.title}},watch:{"$store.state.activeMenuPath":function(t){this.activeMenuPath=this.$store.state.activeMenuPath}}},r=(n(250),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"main-navigation-label"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.activeMenuPath,expression:"activeMenuPath"}],staticClass:"main-navigation",attrs:{"aria-label":"Main Navigation",name:"main-navigation"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.activeMenuPath=e.target.multiple?n:n[0]},t.navigate]}},t._l(t.$store.state.menu,(function(e){return n("optgroup",{key:e.category,attrs:{label:e.category}},[t._l(e.items,(function(e){return[n("option",{key:t.path(e),domProps:{value:t.path(e)}},[t._v(t._s(t.title(e)))]),t._v(" "),t._l(e.children,(function(e){return n("option",{key:t.path(e),domProps:{value:t.path(e)}},[t._v(t._s(t.title(e)))])}))]}))],2)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);