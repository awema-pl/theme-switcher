/**
 * Bundle of AWEMA theme-switcher transpiled and polyfilled
 * Generated: 2019-06-26 16:11:10
 * Version: 1.1.0
 */

!function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),n=t(function(t){var e=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=e)}),r=(n.version,function(t){return"object"==typeof t?null!==t:"function"==typeof t}),o=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t},i=function(t){try{return!!t()}catch(t){return!0}},c=!i(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),u=e.document,a=r(u)&&r(u.createElement),s=function(t){return a?u.createElement(t):{}},f=!c&&!i(function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}),l=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")},p=Object.defineProperty,d={f:c?Object.defineProperty:function(t,e,n){if(o(t),e=l(e,!0),o(n),f)try{return p(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},h=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},m=c?function(t,e,n){return d.f(t,e,h(1,n))}:function(t,e,n){return t[e]=n,t},_={}.hasOwnProperty,v=function(t,e){return _.call(t,e)},g=0,y=Math.random(),E=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++g+y).toString(36))},b=t(function(t){var r=E("src"),o=Function.toString,i=(""+o).split("toString");n.inspectSource=function(t){return o.call(t)},(t.exports=function(t,n,o,c){var u="function"==typeof o;u&&(v(o,"name")||m(o,"name",n)),t[n]!==o&&(u&&(v(o,r)||m(o,r,t[n]?""+t[n]:i.join(String(n)))),t===e?t[n]=o:c?t[n]?t[n]=o:m(t,n,o):(delete t[n],m(t,n,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[r]||o.call(this)})}),w=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},k=function(t,r,o){var i,c,u,a,s=t&k.F,f=t&k.G,l=t&k.S,p=t&k.P,d=t&k.B,h=f?e:l?e[r]||(e[r]={}):(e[r]||{}).prototype,_=f?n:n[r]||(n[r]={}),v=_.prototype||(_.prototype={});for(i in f&&(o=r),o)u=((c=!s&&h&&void 0!==h[i])?h:o)[i],a=d&&c?w(u,e):p&&"function"==typeof u?w(Function.call,u):u,h&&b(h,i,u,t&k.U),_[i]!=u&&m(_,i,a),p&&v[i]!=u&&(v[i]=u)};e.core=n,k.F=1,k.G=2,k.S=4,k.P=8,k.B=16,k.W=32,k.U=64,k.R=128;var S=k,O={}.toString,C=function(t){return O.call(t).slice(8,-1)},N=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==C(t)?t.split(""):Object(t)},T=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},I=function(t){return N(T(t))},A=Math.ceil,D=Math.floor,x=function(t){return isNaN(t=+t)?0:(t>0?D:A)(t)},j=Math.min,F=Math.max,P=Math.min,R=function(t){return function(e,n,r){var o,i,c=I(e),u=(o=c.length)>0?j(x(o),9007199254740991):0,a=function(t,e){return(t=x(t))<0?F(t+e,0):P(t,e)}(r,u);if(t&&n!=n){for(;u>a;)if((i=c[a++])!=i)return!0}else for(;u>a;a++)if((t||a in c)&&c[a]===n)return t||a||0;return!t&&-1}},M=t(function(t){var r=e["__core-js_shared__"]||(e["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),U=t(function(t){var n=M("wks"),r=e.Symbol,o="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=o&&r[t]||(o?r:E)("Symbol."+t))}).store=n}),W=U("unscopables"),$=Array.prototype;null==$[W]&&m($,W,{});var V=R(!0);S(S.P,"Array",{includes:function(t){return V(this,t,arguments.length>1?arguments[1]:void 0)}}),function(t){$[W][t]=!0}("includes");var L=U("match"),B=function(t,e,n){if(r(o=e)&&(void 0!==(i=o[L])?i:"RegExp"==C(o)))throw TypeError("String#"+n+" doesn't accept regex!");var o,i;return String(T(t))},G=U("match");S(S.P+S.F*function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[G]=!1,!"/./"[t](e)}catch(t){}}return!0}("includes"),"String",{includes:function(t){return!!~B(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}});var H={f:{}.propertyIsEnumerable},X=Object.getOwnPropertyDescriptor,J={f:c?X:function(t,e){if(t=I(t),e=l(e,!0),f)try{return X(t,e)}catch(t){}if(v(t,e))return h(!H.f.call(t,e),t[e])}},z=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},Q={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=w(Function.call,J.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return z(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:z}.set,Y=M("keys"),q=function(t){return Y[t]||(Y[t]=E(t))},Z=R(!1),K=q("IE_PROTO"),tt=function(t,e){var n,r=I(t),o=0,i=[];for(n in r)n!=K&&v(r,n)&&i.push(n);for(;e.length>o;)v(r,n=e[o++])&&(~Z(i,n)||i.push(n));return i},et="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),nt=et.concat("length","prototype"),rt={f:Object.getOwnPropertyNames||function(t){return tt(t,nt)}},ot="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",it="["+ot+"]",ct=RegExp("^"+it+it+"*"),ut=RegExp(it+it+"*$"),at=function(t,e,n){var r={},o=i(function(){return!!ot[t]()||"​"!="​"[t]()}),c=r[t]=o?e(st):ot[t];n&&(r[n]=c),S(S.P+S.F*o,"String",r)},st=at.trim=function(t,e){return t=String(T(t)),1&e&&(t=t.replace(ct,"")),2&e&&(t=t.replace(ut,"")),t},ft=at,lt=Object.keys||function(t){return tt(t,et)},pt=c?Object.defineProperties:function(t,e){o(t);for(var n,r=lt(e),i=r.length,c=0;i>c;)d.f(t,n=r[c++],e[n]);return t},dt=e.document,ht=dt&&dt.documentElement,mt=q("IE_PROTO"),_t=function(){},vt=function(){var t,e=s("iframe"),n=et.length;for(e.style.display="none",ht.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),vt=t.F;n--;)delete vt.prototype[et[n]];return vt()},gt=Object.create||function(t,e){var n;return null!==t?(_t.prototype=o(t),n=new _t,_t.prototype=null,n[mt]=t):n=vt(),void 0===e?n:pt(n,e)},yt=rt.f,Et=J.f,bt=d.f,wt=ft.trim,kt=e.Number,St=kt,Ot=kt.prototype,Ct="Number"==C(gt(Ot)),Nt="trim"in String.prototype,Tt=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,i=(e=Nt?e.trim():wt(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var c,u=e.slice(2),a=0,s=u.length;a<s;a++)if((c=u.charCodeAt(a))<48||c>o)return NaN;return parseInt(u,r)}}return+e};if(!kt(" 0o1")||!kt("0b1")||kt("+0x1")){kt=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof kt&&(Ct?i(function(){Ot.valueOf.call(n)}):"Number"!=C(n))?function(t,e,n){var o,i=e.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&r(o)&&Q&&Q(t,o),t}(new St(Tt(e)),n,kt):Tt(e)};for(var It,At=c?yt(St):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Dt=0;At.length>Dt;Dt++)v(St,It=At[Dt])&&!v(kt,It)&&bt(kt,It,Et(St,It));kt.prototype=Ot,Ot.constructor=kt,b(e,"Number",kt)}var xt={name:"theme-switcher",inheritAttrs:!1,data:function(){return{oldValue:null,isDark:this.AWEMA._themeDark}},watch:{isDark:function(t){AWEMA._themeDark=t,this.$emit("input",t),this.oldValue=null}},methods:{inputClick:function(){this.oldValue===this.isDark&&this.toggleTheme()},toggleTheme:function(){this.isDark=this.isDark?0:1},checkTheme:function(){this.isDark!==this.AWEMA._themeDark&&(this.isDark=this.AWEMA._themeDark)}},mounted:function(){AWEMA.on("theme.change",this.checkTheme)},beforeDestroy:function(){AWEMA.off("theme.change",this.checkTheme)}};const jt=xt;xt.__file="theme-switcher.vue";var Ft=function(t,e,n,r,o,i,c,u,a,s){"function"==typeof c&&(a=u,u=c,c=!1);const f="function"==typeof n?n.options:n;let l;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,a(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=l):e&&(l=c?function(){e.call(this,s(this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),l)if(f.functional){const t=f.render;f.render=function(e,n){return l.call(n),t(e,n)}}else{const t=f.beforeCreate;f.beforeCreate=t?[].concat(t,l):[l]}return n}({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["theme-switcher",{"is-active":t.isDark}]},[n("div",{staticClass:"theme-switcher__switcher"},[n("input",t._b({directives:[{name:"model",rawName:"v-model.number",value:t.isDark,expression:"isDark",modifiers:{number:!0}}],staticClass:"theme-switcher__input",attrs:{type:"range",min:"0",max:"1"},domProps:{value:t.isDark},on:{mousedown:function(e){t.oldValue=t.isDark},click:t.inputClick,__r:function(e){t.isDark=t._n(e.target.value)},blur:function(e){t.$forceUpdate()}}},"input",t.$attrs,!1))]),t._v(" "),n("div",{staticClass:"theme-switcher__label",on:{click:function(e){return e.target!==e.currentTarget?null:t.toggleTheme(e)}}},[t._t("default",[t._v("\n            "+t._s(t.$lang.THEME_SWITCHER_DEFAULT)+"\n        ")],{isDark:t.isDark})],2)])},staticRenderFns:[]},void 0,jt,void 0,!1,void 0,void 0,void 0);var Pt={installed:!1,install:function(t){this.installed||(this.installed=!0,t.component("theme-switcher",Ft))}},Rt=t(function(t,e){var n;n=function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}return function e(n){function r(e,o,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=t({path:"/"},r.defaults,i)).expires){var u=new Date;u.setMilliseconds(u.getMilliseconds()+864e5*i.expires),i.expires=u}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(o),/^[\{\[]/.test(c)&&(o=c)}catch(t){}o=n.write?n.write(o,e):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var a="";for(var s in i)i[s]&&(a+="; "+s,!0!==i[s]&&(a+="="+i[s]));return document.cookie=e+"="+o+a}e||(c={});for(var f=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,p=0;p<f.length;p++){var d=f[p].split("="),h=d.slice(1).join("=");this.json||'"'!==h.charAt(0)||(h=h.slice(1,-1));try{var m=d[0].replace(l,decodeURIComponent);if(h=n.read?n.read(h,m):n(h,m)||h.replace(l,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(t){}if(e===m){c=h;break}e||(c[m]=h)}catch(t){}}return c}}return r.set=r,r.get=function(t){return r.call(r,t)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(e,n){r(e,"",t(n,{expires:-1}))},r.withConverter=e,r}(function(){})},t.exports=n()});function Mt(t,e){var n=function(t){return document.querySelector('meta[name="'.concat(t,'"]'))}(t);n?n.content=e:function(t,e){var n=document.createElement("META");n.name=t,n.content=e,document.head.appendChild(n)}(t,e)}var Ut=AWEMA_CONFIG.theme||{},Wt=Ut.domain;function $t(t){if(t?document.documentElement.setAttribute("data-dark",!0):document.documentElement.removeAttribute("data-dark"),Ut.metaColor){var e=Ut.metaColor[t?"dark":"light"];Mt("theme-color",e),Mt("msapplication-navbutton-color",e)}Rt.set("theme_dark",t,{expires:365,domain:Wt})}var Vt=window.matchMedia("(prefers-color-scheme: dark)");function Lt(){return Number(Rt.get("theme_dark")||Vt.matches)}var Bt={THEME_SWITCHER_DEFAULT:"Theme dark"};$t(Lt()||Ut.isDark&&Number(Ut.isDark)||0);var Gt={install:function(t){t.lang=Bt,t._themeMQL=Vt,t._themeMQL.addListener(function(e){t._themeDark=Number(e.matches)}),Object.defineProperty(t,"_themeDark",{get:function(){return Lt()},set:function(e){(e=Number(e))!==Lt()&&[0,1].includes(e)&&($t(e),t.emit("theme.change",e))}}),Vue.use(Pt)}};window&&"AWEMA"in window?AWEMA.use(Gt):(window.__awema_plugins_stack__=window.__awema_plugins_stack__||[],window.__awema_plugins_stack__.push(Gt))}();
