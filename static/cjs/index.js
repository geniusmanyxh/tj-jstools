"use strict";function e(e="",t){let n="参数不能为空！";throw e&&(n=e+n),t&&(n=t),console.error(n),Error(n)}Object.defineProperty(exports,"__esModule",{value:!0});const t=function(t){const n=String(t).toLocaleLowerCase();return function(i){return 0===arguments.length&&e(`is${t}方法的`),typeof i===n}};function n(t){if(0===arguments.length&&e("isJson方法的"),"string"==typeof t)try{let e=JSON.parse(t);return!("object"!=typeof e||!e)}catch(e){return console.log("error："+t+"!!!"+e),!1}return!1}const i=t("Boolean"),r=t("Number"),s=t("String"),o=t("Undefined"),l=t("Symbol"),c=t("Bigint");function u(t,n){return function(i){0===arguments.length&&e(`is${t}方法的`);let r="number"==typeof i;return r&&Number[`is${n}`](i)}}function a(t){0===arguments.length&&e("isFloat方法的");let n="number"==typeof t,i=String(t).indexOf(".")+1;return n&&i>0}function f(t){0===arguments.length&&e("isInfinite方法的");let n="number"==typeof t;return n&&!Number.isFinite(t)}const p=u("Int","Integer"),h=u("Finite","Finite"),g=u("NaN","NaN"),d="[object Object]",y="[object Array]",x="[object Date]",b="[object Function]";function m(t,n){return function(i){0===arguments.length&&e(`is${t}方法的`);let r=Object.prototype.toString.call(i);return r===n}}const j=m("Null","[object Null]"),T=m("Array",y),O=m("Object",d),v=m("Date",x),k=m("Function",b);let S=["string","bigint","boolean","symbol","undefined","function"];function I(e){if(0===arguments.length)return console.warn("getType方法没有接收到参数,返回的类型为undefined"),"undefined";let t="string",n=typeof e,i=S.includes(n);return i?t=n:"number"===n?p(e)?t="int":a(e)?t="float":g(e)?t="NaN":f(e)&&(t="infinite"):"object"===n&&(j(e)?t="null":O(e)?t="object":T(e)?t="array":k(e)?t="function":v(e)&&(t="date")),t}var U,w;const E={splitType:R,URLSearchParamsType:function(e){let t=e.split("?")[1];const n=new URLSearchParams(t);return Object.fromEntries(n.entries())},RegExpType:function(e){let t={};return e.replace(/(\w+|[\u4e00-\u9fa5]+)=(\w+|[\u4e00-\u9fa5]+)/gi,((e,n,i)=>(t[n]=i,""))),t}
/*! js-cookie v3.0.1 | MIT */},N={noneType:e=>e,decodeURIType:decodeURI,decodeURIComponentType:decodeURIComponent},_={noneType:e=>e,encodeURIType:encodeURI,encodeURIComponent:encodeURIComponent},C={url:null===(U=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===U?void 0:U.href,hashValue:"",encodeUrlType:"noneType"},F={url:null===(w=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===w?void 0:w.search,parseUrlType:"splitType",decodeUrlType:"noneType"};function R(e){let t=e.split("?")[1],n={};if(!t)return n;let i=t.split("&");for(let e=0,t=i.length;e<t;e++){let t=i[e].split("=");n[t[0]]=t[1]}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}var A=function e(t,n){function i(e,i,r){if("undefined"!=typeof document){"number"==typeof(r=D({},n,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var o in r)r[o]&&(s+="; "+o,!0!==r[o]&&(s+="="+r[o].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+s}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],i={},r=0;r<n.length;r++){var s=n[r].split("="),o=s.slice(1).join("=");try{var l=decodeURIComponent(s[0]);if(i[l]=t.read(o,l),e===l)break}catch(e){}}return e?i[e]:i}},remove:function(e,t){i(e,"",D({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,D({},this.attributes,t))},withConverter:function(t){return e(D({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const J={cookie:A,local:localStorage,session:sessionStorage},V={ms:1,s:1e3,min:6e4,h:36e5,d:864e5,w:6048e5,m:2592e6,y:31536e6},B=["expires","path","domain","secure","sameSite"],P=["prefix","suffix","linkSign","expireTime","unitTime","expires","path","domain","secure","sameSite"];class L{constructor(e,t){if(this.prefix="",this.suffix="",this.linkSign=".",this.expireTime=-1,this.unitTime="ms",this.path="/",this.secure=!1,this.sameSite="Lax",!e||"cookie"!==e&&"local"!==e&&"session"!==e)throw Error("实例类型值类型是字符串类型，且值只能为 cookie或local或session");this.instanceType=e,t&&O(t)&&Object.entries(t).forEach((([e,t])=>{this[e]=t}))}setFun(e,t,n){if(0===arguments.length)return;if(!s(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let i={};for(let e=0;e<P.length;e++)i[P[e]]=this[P[e]];o(n)||(i=Object.assign(Object.assign({},i),n));e=K({key:e,prefix:i.prefix,linkSign:i.linkSign,suffix:i.suffix});const r=i.expireTime*V[i.unitTime]+(new Date).getTime();if(console.log("time",r),s(t)||(t=t?JSON.stringify(t):"undefined"),"cookie"===this.instanceType){r>0&&(i.expires=new Date(r));let n={};B.forEach((e=>{o(i[e])||(n[e]=i[e])})),A.set(e,t,n)}else{const n={_tj_value:t,_tj_expireTime:r};J[this.instanceType].setItem(e,encodeURIComponent(JSON.stringify(n)))}}getFun(e,t){if(0===arguments.length)return;if(!s(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let i={};for(let e=0;e<P.length;e++)i[P[e]]=this[P[e]];o(t)||(i=Object.assign(Object.assign({},i),t));let r;if(e=K({key:e,prefix:i.prefix,linkSign:i.linkSign,suffix:i.suffix}),"cookie"===this.instanceType){const t=A.get(e);s(t)&&(n(t)&&(r=JSON.parse(t)),r=t)}else{const t=J[this.instanceType];let i=decodeURIComponent(t.getItem(e));if(s(i))if(n(i)){let e=Date.now();const t=JSON.parse(i);t&&t._tj_expireTime&&t._tj_expireTime>e&&(r=t._tj_value&&n(t._tj_value)?JSON.parse(t._tj_value):t._tj_value)}else r=i}return r}delFun(e,t){if(0===arguments.length)return;if(!s(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let n={};for(let e=0;e<P.length;e++)n[P[e]]=this[P[e]];o(t)||(n=Object.assign(Object.assign({},n),t));if(e=K({key:e,prefix:n.prefix,linkSign:n.linkSign,suffix:n.suffix}),"cookie"===this.instanceType){let t={};B.forEach((e=>{o(n[e])||(t[e]=n[e])})),0===Object.keys(t).length?A.remove(e):A.remove(e,t)}else{J[this.instanceType].removeItem(e)}}existFun(e,t){let n;return n=t?this.getFun(e,t):this.getFun(e),!!n}allKey(e){var t,n,i;const r=[],s=[],o=[];if("cookie"===this.instanceType){const e=Object.keys(A.get());s.push(...e)}else{const e=J[this.instanceType],t=Object.keys(e);s.push(...t)}if(e&&O(e)){const o=Object.keys(e).length,l=null!==(t=e.prefix)&&void 0!==t?t:this.prefix,c=null!==(n=e.linkSign)&&void 0!==n?n:this.linkSign,u=null!==(i=e.suffix)&&void 0!==i?i:this.suffix;o>=3?s.forEach((e=>{e.includes(l+c)&&e.includes(c+u)&&r.push(e)})):o>=2?e.prefix&&e.suffix&&!e.linkSign?s.forEach((e=>{e.includes(l+c)&&e.includes(c+u)&&r.push(e)})):e.prefix&&e.linkSign&&!e.suffix?s.forEach((e=>{e.includes(l+c)&&r.push(e)})):e.linkSign&&e.suffix&&!e.prefix&&s.forEach((e=>{e.includes(c+u)&&r.push(e)})):!e.prefix||e.linkSign||e.suffix?!e.linkSign||e.prefix||e.suffix?!e.suffix||e.linkSign||e.prefix||s.forEach((e=>{e.includes(u)&&r.push(e)})):s.forEach((e=>{e.includes(c)&&r.push(e)})):s.forEach((e=>{e.includes(l)&&r.push(e)}))}else r.push(...s);let l;if("cookie"===this.instanceType)l=e=>A.get(e);else{const e=J[this.instanceType];l=t=>e.getItem(t)}if(r.length>0)for(let e=0;e<r.length;e++){let t=r[e];!$(l(t))||o.push(t)}return o}clearFun(e){let t=[];if("cookie"===this.instanceType){let n={};e?(t=[...this.allKey(e)],B.forEach((t=>{o(e[t])||(n[t]=e[t])}))):t=[...this.allKey()],t.length>0&&(0===Object.keys(n).length?t.forEach((e=>A.remove(e))):t.forEach((e=>A.remove(e,n))))}else{const n=J[this.instanceType];e?(t=[...this.allKey(e)],t.length>0&&t.forEach((e=>n.removeItem(e)))):n.clear()}}}function K(e){let t="";return e.linkSign.trim()?(e.prefix.trim()&&(t+=e.prefix+e.linkSign),t+=e.key,e.suffix.trim()&&(t+=e.linkSign+e.suffix)):t=e.key.trim(),t}function $(e){let t=!0;if(s(e)){if(n(e)){const n=JSON.parse(e);n._tj_expireTime&&n._tj_expireTime<Date.now()&&(t=!1)}}else t=!1;return t}exports.charInCounts=(e,t)=>e.split(t).length-1,exports.converParamsToUrl=function(t,n){0===arguments.length&&e("converParamsToUrl方法的");let i="",r=[],s=C;if(n&&(s=Object.assign(Object.assign({},s),n)),"[object Object]"===Object.prototype.toString.call(t)?Object.entries(t).forEach((([e,t])=>{let n=e+"="+_[s.encodeUrlType](t);r.push(n)})):console.warn("拼接ur的参数格式必须是一个对象类型的数据！"),s.url.includes("?")){let e=s.url.split("?");if(console.log(e),e[1].includes("#")&&(i=e[0]+"?"+e[1].substring(0,e[1].lastIndexOf("#")),s.hashValue.trim()||(s.hashValue=e[1].substring(e[1].lastIndexOf("#")))),r.length>0){const n=R(i),r=Object.assign(Object.assign({},n),t),o=[];Object.entries(r).forEach((([e,t])=>{let n=e+"="+_[s.encodeUrlType](t);o.push(n)})),console.log(o),i=e[0]+"?"+o.join("&")+s.hashValue}else i=s.url+s.hashValue}else s.url.includes("#")&&(s.hashValue.trim()||(s.hashValue=s.url.substring(s.url.lastIndexOf("#"))),s.url=s.url.substring(0,s.url.lastIndexOf("#"))),i=r.length>0?s.url+"?"+r.join("&")+s.hashValue:s.url+s.hashValue;return i},exports.getArrayAllType=function(t){T(t)||e("","getArrayAllType方法接收的参数应该是一个数组");let n=[];if(arguments.length>0&&t.length>0)for(let e=0;e<t.length;e++){let i=t[e];n.push(I(i))}return n},exports.getArrayTypeDetail=function(t,n){T(t)||e("","getArrayTypeDetail方法接收的参数应该是一个数组");let i=[];if(arguments.length>0){let e=[],r=[];for(let i=0;i<t.length;i++){let s=i,o=t[i],l=I(o);r.push({index:s,value:o,type:l}),n&&(("number"===n&&["int","float"].includes(l)||n===l)&&e.push({index:s,value:o,type:l}))}i=n?[...e]:[...r]}return i},exports.getObjectAllType=function(t){O(t)||e("","getObjectAllType方法接收的参数应该是一个对象");let n=[];if(arguments.length>0)for(const e in t)if(Object.hasOwnProperty.call(t,e)){let i=t[e];n.push(I(i))}return n},exports.getObjectTypeDetail=function(t,n){O(t)||e("","getObjectTypeDetail方法接收的参数应该是一个对象");let i=[];if(arguments.length>0){let e=[],r=[];for(const i in t)if(Object.hasOwnProperty.call(t,i)){let s=t[i],o=I(s);r.push({key:i,value:s,type:o}),n&&("number"===n&&["int","float"].includes(o)||n===o)&&e.push({key:i,value:s,type:o})}else;i=n?[...e]:[...r]}return i},exports.getType=I,exports.getUrlParams=function(e,t){let n={},i=F,r="",s="";if("string"==typeof arguments[0]?r=arguments[0]:"object"==typeof arguments[0]&&(i=Object.assign(Object.assign({},F),arguments[0])),"object"==typeof arguments[1]&&(i=Object.assign(Object.assign({},F),arguments[1])),s=N[i.decodeUrlType](i.url),s.includes("?")){let e=s.split("?");e[1].includes("#")&&(s="?"+e[1].substring(0,e[1].lastIndexOf("#")))}return n=E[i.parseUrlType](s),r?n[r]:n},exports.isArray=T,exports.isBigint=c,exports.isBoolean=i,exports.isDate=v,exports.isFinite=h,exports.isFloat=a,exports.isFunction=k,exports.isInfinite=f,exports.isInt=p,exports.isJson=n,exports.isNaN=g,exports.isNull=j,exports.isNumber=r,exports.isObject=O,exports.isString=s,exports.isSymbol=l,exports.isUndefined=o,exports.newStorage=function(e,t){return new L(e,t)};
//# sourceMappingURL=index.js.map
