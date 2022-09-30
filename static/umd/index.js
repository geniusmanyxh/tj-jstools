!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)._tj={})}(this,(function(e){"use strict";function t(e="",t){let n="参数不能为空！";throw e&&(n=e+n),t&&(n=t),console.error(n),Error(n)}const n=function(e){const n=String(e).toLocaleLowerCase();return function(i){return 0===arguments.length&&t(`is${e}方法的`),typeof i===n}};function i(e){if(0===arguments.length&&t("isJson方法的"),"string"==typeof e)try{let t=JSON.parse(e);return!("object"!=typeof t||!t)}catch(t){return console.log("error："+e+"!!!"+t),!1}return!1}const r=n("Boolean"),s=n("Number"),o=n("String"),l=n("Undefined"),c=n("Symbol"),u=n("Bigint");function a(e,n){return function(i){0===arguments.length&&t(`is${e}方法的`);let r="number"==typeof i;return r&&Number[`is${n}`](i)}}function f(e){0===arguments.length&&t("isFloat方法的");let n="number"==typeof e,i=String(e).indexOf(".")+1;return n&&i>0}function p(e){0===arguments.length&&t("isInfinite方法的");let n="number"==typeof e;return n&&!Number.isFinite(e)}const h=a("Int","Integer"),g=a("Finite","Finite"),d=a("NaN","NaN"),y="[object Object]",b="[object Array]",m="[object Date]",x="[object Function]";function j(e,n){return function(i){0===arguments.length&&t(`is${e}方法的`);let r=Object.prototype.toString.call(i);return r===n}}const T=j("Null","[object Null]"),O=j("Array",b),v=j("Object",y),k=j("Date",m),S=j("Function",x);let I=["string","bigint","boolean","symbol","undefined","function"];function U(e){if(0===arguments.length)return console.warn("getType方法没有接收到参数,返回的类型为undefined"),"undefined";let t="string",n=typeof e,i=I.includes(n);return i?t=n:"number"===n?h(e)?t="int":f(e)?t="float":d(e)?t="NaN":p(e)&&(t="infinite"):"object"===n&&(T(e)?t="null":v(e)?t="object":O(e)?t="array":S(e)?t="function":k(e)&&(t="date")),t}var w,E;const _={splitType:D,URLSearchParamsType:function(e){let t=e.split("?")[1];const n=new URLSearchParams(t);return Object.fromEntries(n.entries())},RegExpType:function(e){let t={};return e.replace(/(\w+|[\u4e00-\u9fa5]+)=(\w+|[\u4e00-\u9fa5]+)/gi,((e,n,i)=>(t[n]=i,""))),t}
/*! js-cookie v3.0.1 | MIT */},N={noneType:e=>e,decodeURIType:decodeURI,decodeURIComponentType:decodeURIComponent},C={noneType:e=>e,encodeURIType:encodeURI,encodeURIComponent:encodeURIComponent},R={url:null===(w=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===w?void 0:w.href,hashValue:"",encodeUrlType:"noneType"},F={url:null===(E=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===E?void 0:E.search,parseUrlType:"splitType",decodeUrlType:"noneType"};function D(e){let t=e.split("?")[1],n={};if(!t)return n;let i=t.split("&");for(let e=0,t=i.length;e<t;e++){let t=i[e].split("=");n[t[0]]=t[1]}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}var J=function e(t,n){function i(e,i,r){if("undefined"!=typeof document){"number"==typeof(r=A({},n,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var o in r)r[o]&&(s+="; "+o,!0!==r[o]&&(s+="="+r[o].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+s}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],i={},r=0;r<n.length;r++){var s=n[r].split("="),o=s.slice(1).join("=");try{var l=decodeURIComponent(s[0]);if(i[l]=t.read(o,l),e===l)break}catch(e){}}return e?i[e]:i}},remove:function(e,t){i(e,"",A({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,A({},this.attributes,t))},withConverter:function(t){return e(A({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const V={cookie:J,local:localStorage,session:sessionStorage},B={ms:1,s:1e3,min:6e4,h:36e5,d:864e5,w:6048e5,m:2592e6,y:31536e6},P=["expires","path","domain","secure","sameSite"],L=["prefix","suffix","linkSign","expireTime","unitTime","expires","path","domain","secure","sameSite"];class K{constructor(e,t){if(this.prefix="",this.suffix="",this.linkSign=".",this.expireTime=-1,this.unitTime="ms",this.path="/",this.secure=!1,this.sameSite="Lax",!e||"cookie"!==e&&"local"!==e&&"session"!==e)throw Error("实例类型值类型是字符串类型，且值只能为 cookie或local或session");this.instanceType=e,t&&v(t)&&Object.entries(t).forEach((([e,t])=>{this[e]=t}))}setFun(e,t,n){if(0===arguments.length)return;if(!o(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let i={};for(let e=0;e<L.length;e++)i[L[e]]=this[L[e]];l(n)||(i=Object.assign(Object.assign({},i),n));e=$({key:e,prefix:i.prefix,linkSign:i.linkSign,suffix:i.suffix});const r=i.expireTime*B[i.unitTime]+(new Date).getTime();if(console.log("time",r),o(t)||(t=JSON.stringify(t)),"cookie"===this.instanceType){r>0&&(i.expires=new Date(r));let n={};P.forEach((e=>{l(i[e])||(n[e]=i[e])})),console.log(n),J.set(e,t,n)}else{const n={_tj_value:t,_tj_expireTime:r};V[this.instanceType].setItem(e,encodeURIComponent(JSON.stringify(n)))}}getFun(e,t){if(0===arguments.length)return;if(!o(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let n={};for(let e=0;e<L.length;e++)n[L[e]]=this[L[e]];l(t)||(n=Object.assign(Object.assign({},n),t));let r;if(e=$({key:e,prefix:n.prefix,linkSign:n.linkSign,suffix:n.suffix}),"cookie"===this.instanceType){const t=J.get(e);o(t)&&(i(t)&&(r=JSON.parse(t)),r=t)}else{let t=V[this.instanceType].getItem(e);if(o(t)){if(i(t)){let e=Date.now();const n=JSON.parse(decodeURIComponent(t));n&&n._tj_expireTime&&n._tj_expireTime>e&&(r=n._tj_value&&i(n._tj_value)?JSON.parse(n._tj_value):n._tj_value)}r=decodeURIComponent(t)}}return r}delFun(e,t){if(0===arguments.length)return;if(!o(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let n={};for(let e=0;e<L.length;e++)n[L[e]]=this[L[e]];l(t)||(n=Object.assign(Object.assign({},n),t));if(e=$({key:e,prefix:n.prefix,linkSign:n.linkSign,suffix:n.suffix}),"cookie"===this.instanceType){let t={};P.forEach((e=>{l(n[e])||(t[e]=n[e])})),0===Object.keys(t).length?J.remove(e):J.remove(e,t)}else{V[this.instanceType].removeItem(e)}}existFun(e,t){let n;return n=t?this.getFun(e,t):this.getFun(e),!!n}allKey(e){var t,n,i;const r=[],s=[],o=[];if("cookie"===this.instanceType){const e=Object.keys(J.get());s.push(...e)}else{const e=V[this.instanceType],t=Object.keys(e);s.push(...t)}if(e&&v(e)){const o=Object.keys(e).length,l=null!==(t=e.prefix)&&void 0!==t?t:this.prefix,c=null!==(n=e.linkSign)&&void 0!==n?n:this.linkSign,u=null!==(i=e.suffix)&&void 0!==i?i:this.suffix;o>=3?s.forEach((e=>{e.includes(l+c)&&e.includes(c+u)&&r.push(e)})):o>=2?e.prefix&&e.suffix&&!e.linkSign?s.forEach((e=>{e.includes(l+c)&&e.includes(c+u)&&r.push(e)})):e.prefix&&e.linkSign&&!e.suffix?s.forEach((e=>{e.includes(l+c)&&r.push(e)})):e.linkSign&&e.suffix&&!e.prefix&&s.forEach((e=>{e.includes(c+u)&&r.push(e)})):!e.prefix||e.linkSign||e.suffix?!e.linkSign||e.prefix||e.suffix?!e.suffix||e.linkSign||e.prefix||s.forEach((e=>{e.includes(u)&&r.push(e)})):s.forEach((e=>{e.includes(c)&&r.push(e)})):s.forEach((e=>{e.includes(l)&&r.push(e)}))}else r.push(...s);let l;if("cookie"===this.instanceType)l=J.get;else{l=V[this.instanceType].getItem}if(r.length>0)for(let e=0;e<r.length;e++){let t=r[e];!z(l(t))||o.push(t)}return o}clearFun(e){let t=[];if("cookie"===this.instanceType){let n={};e?(t=[...this.allKey(e)],P.forEach((t=>{l(e[t])||(n[t]=e[t])}))):t=[...this.allKey()],t.length>0&&(0===Object.keys(n).length?t.forEach((e=>J.remove(e))):t.forEach((e=>J.remove(e,n))))}else{const n=V[this.instanceType];e?(t=[...this.allKey(e)],t.length>0&&t.forEach((e=>n.removeItem(e)))):n.clear()}}}function $(e){let t="";return e.linkSign.trim()?(e.prefix.trim()&&(t+=e.prefix+e.linkSign),t+=e.key,e.suffix.trim()&&(t+=e.linkSign+e.suffix)):t=e.key.trim(),t}function z(e){let t=!0;if(o(e)){if(i(e)){const n=JSON.parse(e);n._tj_expireTime&&n._tj_expireTime<Date.now()&&(t=!1)}}else t=!1;return t}e.charInCounts=(e,t)=>e.split(t).length-1,e.converParamsToUrl=function(e,n){0===arguments.length&&t("converParamsToUrl方法的");let i="",r=[],s=R;if(n&&(s=Object.assign(Object.assign({},s),n)),"[object Object]"===Object.prototype.toString.call(e)?Object.entries(e).forEach((([e,t])=>{let n=e+"="+C[s.encodeUrlType](t);r.push(n)})):console.warn("拼接ur的参数格式必须是一个对象类型的数据！"),s.url.includes("?")){let t=s.url.split("?");if(console.log(t),t[1].includes("#")&&(i=t[0]+"?"+t[1].substring(0,t[1].lastIndexOf("#")),s.hashValue.trim()||(s.hashValue=t[1].substring(t[1].lastIndexOf("#")))),r.length>0){const n=D(i),r=Object.assign(Object.assign({},n),e),o=[];Object.entries(r).forEach((([e,t])=>{let n=e+"="+C[s.encodeUrlType](t);o.push(n)})),console.log(o),i=t[0]+"?"+o.join("&")+s.hashValue}else i=s.url+s.hashValue}else s.url.includes("#")&&(s.hashValue.trim()||(s.hashValue=s.url.substring(s.url.lastIndexOf("#"))),s.url=s.url.substring(0,s.url.lastIndexOf("#"))),i=r.length>0?s.url+"?"+r.join("&")+s.hashValue:s.url+s.hashValue;return i},e.getArrayAllType=function(e){O(e)||t("","getArrayAllType方法接收的参数应该是一个数组");let n=[];if(arguments.length>0&&e.length>0)for(let t=0;t<e.length;t++){let i=e[t];n.push(U(i))}return n},e.getArrayTypeDetail=function(e,n){O(e)||t("","getArrayTypeDetail方法接收的参数应该是一个数组");let i=[];if(arguments.length>0){let t=[],r=[];for(let i=0;i<e.length;i++){let s=i,o=e[i],l=U(o);r.push({index:s,value:o,type:l}),n&&(("number"===n&&["int","float"].includes(l)||n===l)&&t.push({index:s,value:o,type:l}))}i=n?[...t]:[...r]}return i},e.getObjectAllType=function(e){v(e)||t("","getObjectAllType方法接收的参数应该是一个对象");let n=[];if(arguments.length>0)for(const t in e)if(Object.hasOwnProperty.call(e,t)){let i=e[t];n.push(U(i))}return n},e.getObjectTypeDetail=function(e,n){v(e)||t("","getObjectTypeDetail方法接收的参数应该是一个对象");let i=[];if(arguments.length>0){let t=[],r=[];for(const i in e)if(Object.hasOwnProperty.call(e,i)){let s=e[i],o=U(s);r.push({key:i,value:s,type:o}),n&&("number"===n&&["int","float"].includes(o)||n===o)&&t.push({key:i,value:s,type:o})}else;i=n?[...t]:[...r]}return i},e.getType=U,e.getUrlParams=function(e,t){let n={},i=F,r="",s="";if("string"==typeof arguments[0]?r=arguments[0]:"object"==typeof arguments[0]&&(i=Object.assign(Object.assign({},F),arguments[0])),"object"==typeof arguments[1]&&(i=Object.assign(Object.assign({},F),arguments[1])),s=N[i.decodeUrlType](i.url),s.includes("?")){let e=s.split("?");e[1].includes("#")&&(s="?"+e[1].substring(0,e[1].lastIndexOf("#")))}return n=_[i.parseUrlType](s),r?n[r]:n},e.isArray=O,e.isBigint=u,e.isBoolean=r,e.isDate=k,e.isFinite=g,e.isFloat=f,e.isFunction=S,e.isInfinite=p,e.isInt=h,e.isJson=i,e.isNaN=d,e.isNull=T,e.isNumber=s,e.isObject=v,e.isString=o,e.isSymbol=c,e.isUndefined=l,e.newStorage=function(e,t){return new K(e,t)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
