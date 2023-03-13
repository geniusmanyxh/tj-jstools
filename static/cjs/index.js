"use strict";function e(e="",t){let n="参数不能为空！";throw e&&(n=e+n),t&&(n=t),console.error(n),Error(n)}Object.defineProperty(exports,"__esModule",{value:!0});const t=function(t){const n=String(t).toLocaleLowerCase();return function(r){return 0===arguments.length&&e(`is${t}方法的`),typeof r===n}};function n(t){if(0===arguments.length&&e("isJson方法的"),"string"==typeof t)try{const e=JSON.parse(t);return!("object"!=typeof e||!e)}catch(e){return console.log("error："+t+"!!!"+e),!1}return!1}const r=t("Boolean"),i=t("Number"),o=t("String"),s=t("Undefined"),l=t("Symbol"),c=t("Bigint");function u(t,n){return function(r){0===arguments.length&&e(`is${t}方法的`);const i="number"==typeof r;return i&&Number[`is${n}`](r)}}function a(t){0===arguments.length&&e("isFloat方法的");const n="number"==typeof t,r=String(t).indexOf(".")+1;return n&&r>0}function f(t){0===arguments.length&&e("isInfinite方法的");const n="number"==typeof t;return n&&!Number.isFinite(t)&&!Number.isNaN(t)}const p=u("Int","Integer"),h=u("Finite","Finite"),d=u("NaN","NaN"),g="[object Object]",m="[object Array]",b="[object Date]",x="[object Function]";function y(t,n){return function(r){0===arguments.length&&e(`is${t}方法的`);const i=Object.prototype.toString.call(r);return i===n}}const T=y("Null","[object Null]"),j=y("Array",m),O=y("Object",g),v=y("Date",b),S=y("Function",x),w=["string","bigint","boolean","symbol","undefined","function"];function k(e){if(0===arguments.length)return console.warn("getType方法没有接收到参数,返回的类型为undefined"),"undefined";let t="string";const n=typeof e,r=w.includes(n);return r?t=n:"number"===n?p(e)?t="int":a(e)?t="float":d(e)?t="NaN":f(e)&&(t="infinite"):"object"===n&&(T(e)?t="null":O(e)?t="object":j(e)?t="array":S(e)?t="function":v(e)&&(t="date")),t}var F,E;const I={splitType:_,URLSearchParamsType:function(e){const t=e.split("?")[1],n=new URLSearchParams(t);return Object.fromEntries(n.entries())},RegExpType:function(e){const t={};return e.replace(/(\w+|[\u4e00-\u9fa5]+)=(\w+|[\u4e00-\u9fa5]+)/gi,((e,n,r)=>(t[n]=r,""))),t}
/*! js-cookie v3.0.1 | MIT */},N={noneType:e=>e,decodeURIType:decodeURI,decodeURIComponentType:decodeURIComponent},U={noneType:e=>e,encodeURIType:encodeURI,encodeURIComponent:encodeURIComponent},C={url:null===(F=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===F?void 0:F.href,hashValue:"",encodeUrlType:"noneType"},R={url:null===(E=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===E?void 0:E.search,parseUrlType:"splitType",decodeUrlType:"noneType"};function _(e){const t=e.split("?")[1],n={};if(!t)return n;const r=t.split("&");for(let e=0,t=r.length;e<t;e++){const t=r[e].split("=");n[t[0]]=t[1]}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var A=function e(t,n){function r(e,r,i){if("undefined"!=typeof document){"number"==typeof(i=D({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var s in i)i[s]&&(o+="; "+s,!0!==i[s]&&(o+="="+i[s].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+o}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},i=0;i<n.length;i++){var o=n[i].split("="),s=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(r[l]=t.read(s,l),e===l)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){r(e,"",D({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,D({},this.attributes,t))},withConverter:function(t){return e(D({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const B={cookie:A,local:null===globalThis||void 0===globalThis?void 0:globalThis.localStorage,session:null===globalThis||void 0===globalThis?void 0:globalThis.sessionStorage},P={ms:1,s:1e3,min:6e4,h:36e5,d:864e5,w:6048e5,m:2592e6,y:31536e6},J=["expires","path","domain","secure","sameSite"],M=["prefix","suffix","linkSign","expireTime","unitTime","expires","path","domain","secure","sameSite"];class V{constructor(e,t){if(this.prefix="",this.suffix="",this.linkSign=".",this.expireTime=-1,this.unitTime="ms",this.path="/",this.secure=!1,this.sameSite="Lax",!e||"cookie"!==e&&"local"!==e&&"session"!==e)throw Error("实例类型值类型是字符串类型，且值只能为 cookie或local或session");this.instanceType=e,t&&O(t)&&Object.entries(t).forEach((([e,t])=>{this[e]=t}))}setFun(e,t,n){if(0===arguments.length)return;if(!o(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let r={};for(let e=0;e<M.length;e++)r[M[e]]=this[M[e]];console.log(r),s(n)||(r=Object.assign(Object.assign({},r),n)),console.log(r);e=L({key:e,prefix:r.prefix,linkSign:r.linkSign,suffix:r.suffix});const i=r.expireTime*P[r.unitTime];if(o(t)||(t=t?JSON.stringify(t):"undefined"),"cookie"===this.instanceType){i>0&&(r.expires=new Date(i+(new Date).getTime()));const n={};J.forEach((e=>{s(r[e])||(n[e]=r[e])})),A.set(e,t,n)}else{const n=B[this.instanceType],r={_tj_value:t};i>0&&(r._tj_expireTime=i+(new Date).getTime()),n.setItem(e,encodeURIComponent(JSON.stringify(r)))}}getFun(e,t){if(0===arguments.length)return;if(!o(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let r={};for(let e=0;e<M.length;e++)r[M[e]]=this[M[e]];s(t)||(r=Object.assign(Object.assign({},r),t));let i;if(e=L({key:e,prefix:r.prefix,linkSign:r.linkSign,suffix:r.suffix}),"cookie"===this.instanceType){const t=A.get(e);o(t)&&(n(t)&&(i=JSON.parse(t)),i=t)}else{const t=B[this.instanceType],r=decodeURIComponent(t.getItem(e));if(o(r)&&"undefined"!==r&&"null"!==r)if(n(r)){const e=Date.now(),t=JSON.parse(r);if(!t||!t._tj_expireTime){let e=t._tj_value;return"undefined"!==e?JSON.parse(e):e}i=t._tj_expireTime>e?t._tj_value&&n(t._tj_value)?JSON.parse(t._tj_value):t._tj_value:void 0}else i=r}return i}delFun(e,t){if(0===arguments.length)return;if(!o(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let n={};for(let e=0;e<M.length;e++)n[M[e]]=this[M[e]];s(t)||(n=Object.assign(Object.assign({},n),t));if(e=L({key:e,prefix:n.prefix,linkSign:n.linkSign,suffix:n.suffix}),"cookie"===this.instanceType){const t={};J.forEach((e=>{s(n[e])||(t[e]=n[e])})),0===Object.keys(t).length?A.remove(e):A.remove(e,t)}else{B[this.instanceType].removeItem(e)}}existFun(e,t){let n;return n=t?this.getFun(e,t):this.getFun(e),!!n}allKey(e){var t,n,r;const i=[],o=[],s=[];if("cookie"===this.instanceType){const e=Object.keys(A.get());o.push(...e)}else{const e=B[this.instanceType],t=Object.keys(e);o.push(...t)}if(e&&O(e)){const s=Object.keys(e).length,l=null!==(t=e.prefix)&&void 0!==t?t:this.prefix,c=null!==(n=e.linkSign)&&void 0!==n?n:this.linkSign,u=null!==(r=e.suffix)&&void 0!==r?r:this.suffix;s>=3?o.forEach((e=>{e.includes(l+c)&&e.includes(c+u)&&i.push(e)})):s>=2?e.prefix&&e.suffix&&!e.linkSign?o.forEach((e=>{e.includes(l+c)&&e.includes(c+u)&&i.push(e)})):e.prefix&&e.linkSign&&!e.suffix?o.forEach((e=>{e.includes(l+c)&&i.push(e)})):e.linkSign&&e.suffix&&!e.prefix&&o.forEach((e=>{e.includes(c+u)&&i.push(e)})):!e.prefix||e.linkSign||e.suffix?!e.linkSign||e.prefix||e.suffix?!e.suffix||e.linkSign||e.prefix||o.forEach((e=>{e.includes(u)&&i.push(e)})):o.forEach((e=>{e.includes(c)&&i.push(e)})):o.forEach((e=>{e.includes(l)&&i.push(e)}))}else i.push(...o);let l;if("cookie"===this.instanceType)l=e=>A.get(e);else{const e=B[this.instanceType];l=t=>e.getItem(t)}if(i.length>0)for(let e=0;e<i.length;e++){const t=i[e];!$(l(t))||s.push(t)}return s}clearFun(e){let t=[];if("cookie"===this.instanceType){const n={};e?(t=[...this.allKey(e)],J.forEach((t=>{s(e[t])||(n[t]=e[t])}))):t=[...this.allKey()],t.length>0&&(0===Object.keys(n).length?t.forEach((e=>A.remove(e))):t.forEach((e=>A.remove(e,n))))}else{const n=B[this.instanceType];e?(t=[...this.allKey(e)],t.length>0&&t.forEach((e=>n.removeItem(e)))):n.clear()}}}function L(e){let t="";return e.linkSign.trim()?(e.prefix.trim()&&(t+=e.prefix+e.linkSign),t+=e.key,e.suffix.trim()&&(t+=e.linkSign+e.suffix)):t=e.key.trim(),t}function $(e){let t=!0;if(o(e)){if(n(e)){const n=JSON.parse(e);n._tj_expireTime&&n._tj_expireTime<Date.now()&&(t=!1)}}else t=!1;return t}const q=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,z=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],H="undefined"==typeof window;let K={};H||(K=document);const X=z[0],Y={requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen",fullscreenElement:"fullscreenElement",fullscreenEnabled:"fullscreenEnabled",fullscreenchange:"fullscreenchange",fullscreenerror:"fullscreenerror"};for(const e of z)if(e[1]in K)for(const[t,n]of e.entries())Y[X[t]]=n;const G=()=>Boolean(K[Y.fullscreenElement]),Q=(e=K.documentElement,t={navigationUI:"auto"})=>e[Y.requestFullscreen](t),W=()=>K[Y.exitFullscreen](),Z=(e,t={pidName:"pid",childName:"children",idName:"id",initPid:"0"})=>{if(!j(e))return console.warn("请传入一个数组类型的参数"),[];const n=e.length;if(n<2)return e;const r=[];for(let i=0;i<n;i++){let n={};if(e[i][t.pidName]==t.initPid){const o=Z(e,Object.assign(Object.assign({},t),{initPid:e[i][t.idName]}));o&&o.length>0&&(n[t.childName]=o),n=Object.assign(Object.assign({},e[i]),n),r.push(n)}}return r},ee=(e,t="children")=>{var n;if(!j(e))return console.warn("请传入一个数组类型的参数"),[];const r=e.length;if(r<1)return e;const i=[];for(let o=0;o<r;o++){const r=Object.assign({},e[o]);delete r[t],i.push(r),e[o][t]&&(null===(n=e[o][t])||void 0===n?void 0:n.length)&&i.push(...ee(e[o][t]))}return i},te=(e,t,n,r="children")=>{if(!j(e))return void console.warn("请传入一个数组类型的参数");if(!O(t))return void console.warn("请传入一个JSON对象类型的筛选参数");const i=e.length;let o={};for(let s=0;s<i;s++){let i=!0;for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const r=t[n];e[s][n]!==r&&(i=!1)}if(i)return n&&n(e[s]),o=e[s],o;e[s][r]&&te(e[s][r],t,n,r)}};exports.DTMobile=e=>{let t="";return"string"==typeof e?q.test(e)?t=e.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):console.warn("请输入一个正确的手机号"):console.warn("请输入一个字符串格式的手机号"),t},exports.charInCounts=(e,t)=>e.split(t).length-1,exports.closeFull=W,exports.converParamsToUrl=function(t,n){0===arguments.length&&e("converParamsToUrl方法的");let r="";const i=[];let o=C;if(n&&(o=Object.assign(Object.assign({},o),n)),"[object Object]"===Object.prototype.toString.call(t)?Object.entries(t).forEach((([e,t])=>{const n=e+"="+U[o.encodeUrlType](t);i.push(n)})):console.warn("拼接ur的参数格式必须是一个对象类型的数据！"),o.url.includes("?")){const e=o.url.split("?");if(console.log(e),e[1].includes("#")&&(r=e[0]+"?"+e[1].substring(0,e[1].lastIndexOf("#")),o.hashValue.trim()||(o.hashValue=e[1].substring(e[1].lastIndexOf("#")))),i.length>0){const n=_(r),i=Object.assign(Object.assign({},n),t),s=[];Object.entries(i).forEach((([e,t])=>{const n=e+"="+U[o.encodeUrlType](t);s.push(n)})),console.log(s),r=e[0]+"?"+s.join("&")+o.hashValue}else r=o.url+o.hashValue}else o.url.includes("#")&&(o.hashValue.trim()||(o.hashValue=o.url.substring(o.url.lastIndexOf("#"))),o.url=o.url.substring(0,o.url.lastIndexOf("#"))),r=i.length>0?o.url+"?"+i.join("&")+o.hashValue:o.url+o.hashValue;return r},exports.createRandomVerifyCode=(e=4,t)=>{let n="",r=4,i=10,o=[];const s="ABCDEFGHIJKLMNOPQRSTUVWXYZ",l="0123456789";r=e&&"number"==typeof e?e:4,t?("[object Array]"===Object.prototype.toString.call(t)?t.length>0?t.forEach((e=>{o="n"===e?o.concat(l.split("")):"s"===e?o.concat(s.toLocaleLowerCase().split("")):o.concat(s.split(""))})):o=o.concat(l.split("")):o="n"===t?o.concat(l.split("")):"s"===t?o.concat(s.toLocaleLowerCase().split("")):o.concat(s.split("")),i=o.length):o=o.concat(l.split(""));for(let e=0;e<r;e++){const e=Math.floor(Math.random()*i);n+=o[e]}return n},exports.findTreeData=te,exports.formatChineseRMB=function(e){const t=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=["","拾","佰","仟"],r=["","万","亿","兆"],i=["角","分","毫","厘"];let o="",s="",l="";if(void 0===e)return"";if((e=parseFloat(Math.abs(e).toString()))>=1e15)return"";if(0==e)return l=t[0]+"元整",l;const c=e.toString();if(-1==c.indexOf("."))o=c,s="";else{const e=c.split(".");o=e[0],s=e[1].substring(0,4)}if(parseInt(o,10)>0){let e=0;const i=o.length;for(let s=0;s<i;s++){const c=o.substring(s,s+1),u=i-s-1,a=u/4,f=u%4;"0"==c?e++:(e>0&&(l+=t[0]),e=0,l+=t[parseInt(c)]+n[f]),0==f&&e<4&&(l+=r[a])}l+="元"}if(""!=s){const e=s.length;for(let n=0;n<e;n++){const e=s.substring(n,n+1);"0"!=e&&(l+=t[Number(e)]+i[n])}}return""==l?l+=t[0]+"元整":""==s&&(l+="整"),l},exports.getArrayAllType=function(t){j(t)||e("","getArrayAllType方法接收的参数应该是一个数组");const n=[];if(arguments.length>0&&t.length>0)for(let e=0;e<t.length;e++){const r=t[e];n.push(k(r))}return n},exports.getArrayTypeDetail=function(t,n){j(t)||e("","getArrayTypeDetail方法接收的参数应该是一个数组");let r=[];if(arguments.length>0){const e=[],i=[];for(let r=0;r<t.length;r++){const o=r,s=t[r],l=k(s);i.push({index:o,value:s,type:l}),n&&(("number"===n&&["int","float"].includes(l)||n===l)&&e.push({index:o,value:s,type:l}))}r=n?[...e]:[...i]}return r},exports.getFullEl=()=>{var e;return null!==(e=K[Y.fullscreenElement])&&void 0!==e?e:void 0},exports.getObjectAllType=function(t){O(t)||e("","getObjectAllType方法接收的参数应该是一个对象");const n=[];if(arguments.length>0)for(const e in t)if(Object.hasOwnProperty.call(t,e)){const r=t[e];n.push(k(r))}return n},exports.getObjectTypeDetail=function(t,n){O(t)||e("","getObjectTypeDetail方法接收的参数应该是一个对象");let r=[];if(arguments.length>0){const e=[],i=[];for(const r in t)if(Object.hasOwnProperty.call(t,r)){const o=t[r],s=k(o);i.push({key:r,value:o,type:s}),n&&("number"===n&&["int","float"].includes(s)||n===s)&&e.push({key:r,value:o,type:s})}else;r=n?[...e]:[...i]}return r},exports.getType=k,exports.getUrlParams=function(e,t){let n={},r=R,i="",o="";if("string"==typeof arguments[0]?i=arguments[0]:"object"==typeof arguments[0]&&(r=Object.assign(Object.assign({},R),arguments[0])),"object"==typeof arguments[1]&&(r=Object.assign(Object.assign({},R),arguments[1])),o=N[r.decodeUrlType](r.url),o.includes("?")){const e=o.split("?");e[1].includes("#")&&(o="?"+e[1].substring(0,e[1].lastIndexOf("#")))}return n=I[r.parseUrlType](o),i?n[i]:n},exports.isArray=j,exports.isBigint=c,exports.isBoolean=r,exports.isDate=v,exports.isFinite=h,exports.isFloat=a,exports.isFull=G,exports.isFullEnabled=()=>Boolean(K[Y.fullscreenEnabled]),exports.isFunction=S,exports.isInfinite=f,exports.isInt=p,exports.isJson=n,exports.isNaN=d,exports.isNull=T,exports.isNumber=i,exports.isObject=O,exports.isString=o,exports.isSymbol=l,exports.isUndefined=s,exports.newStorage=function(e,t){return new V(e,t)},exports.numberThousandsFormat=function(e,t=-1){if("number"!=typeof e)return;let n,r=e,i="";do{const e=r%1e3;r/=1e3,n=~~e,i=(r>=1?`${n}`.padStart(3,"0"):n)+(i?","+i:"")}while(r>=1);let o="";o+=t>=0?e.toFixed(t):e;const s=o.indexOf(".");return s>=0&&(i+=o.substring(s)),i},exports.openFull=Q,exports.scrollBackTop=(e=.1,t=20)=>{let n,r;"undefined"!=typeof window&&(n=window),"undefined"!=typeof document&&(r=document),n.scrollX;const i=n.scrollY||0;let o=r.documentElement.scrollTop||r.body.scrollTop;if("number"==typeof e?e<=0?e=.1:e>1&&(e=1):e=.1,"number"!=typeof t&&(t=20),console.log(i),i>0){const n=Math.ceil(i*e),s=setInterval((function(){o-=n,o<=0&&clearInterval(s),r.documentElement.scrollTop=r.body.scrollTop=o}),t)}},exports.scrollProgressBar=()=>{let e,t,n=0;"undefined"!=typeof window&&(e=window),"undefined"!=typeof document&&(t=document);const r=e.innerHeight||t.documentElement.clientHeight||t.body.clientHeight,i=t.documentElement.offsetHeight||t.body.offsetHeight,o=t.documentElement.scrollTop||t.body.scrollTop;if(r<i){const e=r/i*r;if(0===o)n=0;else{const t=Math.ceil(o+e/r*i);n=parseInt((t/i*100).toFixed(0))}}else n=0;return n},exports.toTreeData=Z,exports.toggleFull=(e=K.documentElement,t={navigationUI:"auto"})=>G()?W():Q(e,t),exports.treeToFlat=ee;
