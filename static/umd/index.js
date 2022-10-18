!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)._tj={})}(this,(function(e){"use strict";function t(e="",t){let n="参数不能为空！";throw e&&(n=e+n),t&&(n=t),console.error(n),Error(n)}const n=function(e){const n=String(e).toLocaleLowerCase();return function(i){return 0===arguments.length&&t(`is${e}方法的`),typeof i===n}};function i(e){if(0===arguments.length&&t("isJson方法的"),"string"==typeof e)try{let t=JSON.parse(e);return!("object"!=typeof t||!t)}catch(t){return console.log("error："+e+"!!!"+t),!1}return!1}const l=n("Boolean"),r=n("Number"),o=n("String"),s=n("Undefined"),c=n("Symbol"),u=n("Bigint");function a(e,n){return function(i){0===arguments.length&&t(`is${e}方法的`);let l="number"==typeof i;return l&&Number[`is${n}`](i)}}function f(e){0===arguments.length&&t("isFloat方法的");let n="number"==typeof e,i=String(e).indexOf(".")+1;return n&&i>0}function p(e){0===arguments.length&&t("isInfinite方法的");let n="number"==typeof e;return n&&!Number.isFinite(e)}const h=a("Int","Integer"),d=a("Finite","Finite"),g=a("NaN","NaN"),b="[object Object]",m="[object Array]",y="[object Date]",T="[object Function]";function x(e,n){return function(i){0===arguments.length&&t(`is${e}方法的`);let l=Object.prototype.toString.call(i);return l===n}}const j=x("Null","[object Null]"),v=x("Array",m),O=x("Object",b),w=x("Date",y),k=x("Function",T);let S=["string","bigint","boolean","symbol","undefined","function"];function F(e){if(0===arguments.length)return console.warn("getType方法没有接收到参数,返回的类型为undefined"),"undefined";let t="string",n=typeof e,i=S.includes(n);return i?t=n:"number"===n?h(e)?t="int":f(e)?t="float":g(e)?t="NaN":p(e)&&(t="infinite"):"object"===n&&(j(e)?t="null":O(e)?t="object":v(e)?t="array":k(e)?t="function":w(e)&&(t="date")),t}var E,I;const U={splitType:A,URLSearchParamsType:function(e){let t=e.split("?")[1];const n=new URLSearchParams(t);return Object.fromEntries(n.entries())},RegExpType:function(e){let t={};return e.replace(/(\w+|[\u4e00-\u9fa5]+)=(\w+|[\u4e00-\u9fa5]+)/gi,((e,n,i)=>(t[n]=i,""))),t}
/*! js-cookie v3.0.1 | MIT */},N={noneType:e=>e,decodeURIType:decodeURI,decodeURIComponentType:decodeURIComponent},C={noneType:e=>e,encodeURIType:encodeURI,encodeURIComponent:encodeURIComponent},R={url:null===(E=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===E?void 0:E.href,hashValue:"",encodeUrlType:"noneType"},_={url:null===(I=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===I?void 0:I.search,parseUrlType:"splitType",decodeUrlType:"noneType"};function A(e){let t=e.split("?")[1],n={};if(!t)return n;let i=t.split("&");for(let e=0,t=i.length;e<t;e++){let t=i[e].split("=");n[t[0]]=t[1]}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}var B=function e(t,n){function i(e,i,l){if("undefined"!=typeof document){"number"==typeof(l=D({},n,l)).expires&&(l.expires=new Date(Date.now()+864e5*l.expires)),l.expires&&(l.expires=l.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var o in l)l[o]&&(r+="; "+o,!0!==l[o]&&(r+="="+l[o].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+r}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],i={},l=0;l<n.length;l++){var r=n[l].split("="),o=r.slice(1).join("=");try{var s=decodeURIComponent(r[0]);if(i[s]=t.read(o,s),e===s)break}catch(e){}}return e?i[e]:i}},remove:function(e,t){i(e,"",D({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,D({},this.attributes,t))},withConverter:function(t){return e(D({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const P={cookie:B,local:null===globalThis||void 0===globalThis?void 0:globalThis.localStorage,session:null===globalThis||void 0===globalThis?void 0:globalThis.sessionStorage},J={ms:1,s:1e3,min:6e4,h:36e5,d:864e5,w:6048e5,m:2592e6,y:31536e6},V=["expires","path","domain","secure","sameSite"],q=["prefix","suffix","linkSign","expireTime","unitTime","expires","path","domain","secure","sameSite"];class z{constructor(e,t){if(this.prefix="",this.suffix="",this.linkSign=".",this.expireTime=-1,this.unitTime="ms",this.path="/",this.secure=!1,this.sameSite="Lax",!e||"cookie"!==e&&"local"!==e&&"session"!==e)throw Error("实例类型值类型是字符串类型，且值只能为 cookie或local或session");this.instanceType=e,t&&O(t)&&Object.entries(t).forEach((([e,t])=>{this[e]=t}))}setFun(e,t,n){if(0===arguments.length)return;if(!o(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let i={};for(let e=0;e<q.length;e++)i[q[e]]=this[q[e]];s(n)||(i=Object.assign(Object.assign({},i),n));e=M({key:e,prefix:i.prefix,linkSign:i.linkSign,suffix:i.suffix});const l=i.expireTime*J[i.unitTime]+(new Date).getTime();if(console.log("time",l),o(t)||(t=t?JSON.stringify(t):"undefined"),"cookie"===this.instanceType){l>0&&(i.expires=new Date(l));let n={};V.forEach((e=>{s(i[e])||(n[e]=i[e])})),B.set(e,t,n)}else{const n={_tj_value:t,_tj_expireTime:l};P[this.instanceType].setItem(e,encodeURIComponent(JSON.stringify(n)))}}getFun(e,t){if(0===arguments.length)return;if(!o(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let n={};for(let e=0;e<q.length;e++)n[q[e]]=this[q[e]];s(t)||(n=Object.assign(Object.assign({},n),t));let l;if(e=M({key:e,prefix:n.prefix,linkSign:n.linkSign,suffix:n.suffix}),"cookie"===this.instanceType){const t=B.get(e);o(t)&&(i(t)&&(l=JSON.parse(t)),l=t)}else{const t=P[this.instanceType];let n=decodeURIComponent(t.getItem(e));if(o(n))if(i(n)){let e=Date.now();const t=JSON.parse(n);t&&t._tj_expireTime&&t._tj_expireTime>e&&(l=t._tj_value&&i(t._tj_value)?JSON.parse(t._tj_value):t._tj_value)}else l=n}return l}delFun(e,t){if(0===arguments.length)return;if(!o(e)||!e.trim())throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");let n={};for(let e=0;e<q.length;e++)n[q[e]]=this[q[e]];s(t)||(n=Object.assign(Object.assign({},n),t));if(e=M({key:e,prefix:n.prefix,linkSign:n.linkSign,suffix:n.suffix}),"cookie"===this.instanceType){let t={};V.forEach((e=>{s(n[e])||(t[e]=n[e])})),0===Object.keys(t).length?B.remove(e):B.remove(e,t)}else{P[this.instanceType].removeItem(e)}}existFun(e,t){let n;return n=t?this.getFun(e,t):this.getFun(e),!!n}allKey(e){var t,n,i;const l=[],r=[],o=[];if("cookie"===this.instanceType){const e=Object.keys(B.get());r.push(...e)}else{const e=P[this.instanceType],t=Object.keys(e);r.push(...t)}if(e&&O(e)){const o=Object.keys(e).length,s=null!==(t=e.prefix)&&void 0!==t?t:this.prefix,c=null!==(n=e.linkSign)&&void 0!==n?n:this.linkSign,u=null!==(i=e.suffix)&&void 0!==i?i:this.suffix;o>=3?r.forEach((e=>{e.includes(s+c)&&e.includes(c+u)&&l.push(e)})):o>=2?e.prefix&&e.suffix&&!e.linkSign?r.forEach((e=>{e.includes(s+c)&&e.includes(c+u)&&l.push(e)})):e.prefix&&e.linkSign&&!e.suffix?r.forEach((e=>{e.includes(s+c)&&l.push(e)})):e.linkSign&&e.suffix&&!e.prefix&&r.forEach((e=>{e.includes(c+u)&&l.push(e)})):!e.prefix||e.linkSign||e.suffix?!e.linkSign||e.prefix||e.suffix?!e.suffix||e.linkSign||e.prefix||r.forEach((e=>{e.includes(u)&&l.push(e)})):r.forEach((e=>{e.includes(c)&&l.push(e)})):r.forEach((e=>{e.includes(s)&&l.push(e)}))}else l.push(...r);let s;if("cookie"===this.instanceType)s=e=>B.get(e);else{const e=P[this.instanceType];s=t=>e.getItem(t)}if(l.length>0)for(let e=0;e<l.length;e++){let t=l[e];!$(s(t))||o.push(t)}return o}clearFun(e){let t=[];if("cookie"===this.instanceType){let n={};e?(t=[...this.allKey(e)],V.forEach((t=>{s(e[t])||(n[t]=e[t])}))):t=[...this.allKey()],t.length>0&&(0===Object.keys(n).length?t.forEach((e=>B.remove(e))):t.forEach((e=>B.remove(e,n))))}else{const n=P[this.instanceType];e?(t=[...this.allKey(e)],t.length>0&&t.forEach((e=>n.removeItem(e)))):n.clear()}}}function M(e){let t="";return e.linkSign.trim()?(e.prefix.trim()&&(t+=e.prefix+e.linkSign),t+=e.key,e.suffix.trim()&&(t+=e.linkSign+e.suffix)):t=e.key.trim(),t}function $(e){let t=!0;if(o(e)){if(i(e)){const n=JSON.parse(e);n._tj_expireTime&&n._tj_expireTime<Date.now()&&(t=!1)}}else t=!1;return t}const H=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,L=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],K="undefined"==typeof window;let X={};K||(X=document);const Y=L[0];let G={requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen",fullscreenElement:"fullscreenElement",fullscreenEnabled:"fullscreenEnabled",fullscreenchange:"fullscreenchange",fullscreenerror:"fullscreenerror"};for(const e of L)if(e[1]in X)for(const[t,n]of e.entries())G[Y[t]]=n;const Q=()=>Boolean(X[G.fullscreenElement]),W=(e=X.documentElement,t={navigationUI:"auto"})=>e[G.requestFullscreen](t),Z=()=>X[G.exitFullscreen](),ee=(e,t={pidName:"pid",childName:"children",idName:"id",initPid:"0"})=>{if(!v(e))return console.warn("请传入一个数组类型的参数"),[];const n=e.length;if(n<2)return e;const i=[];for(let l=0;l<n;l++){let n={};if(e[l][t.pidName]==t.initPid){let r=ee(e,Object.assign(Object.assign({},t),{initPid:e[l][t.idName]}));r&&r.length>0&&(n[t.childName]=r),n=Object.assign(Object.assign({},e[l]),n),i.push(n)}}return i},te=(e,t="children")=>{var n;if(!v(e))return console.warn("请传入一个数组类型的参数"),[];const i=e.length;if(i<1)return e;const l=[];for(let r=0;r<i;r++){let i=Object.assign({},e[r]);delete i[t],l.push(i),e[r][t]&&(null===(n=e[r][t])||void 0===n?void 0:n.length)&&l.push(...te(e[r][t]))}return l},ne=(e,t,n,i="children")=>{if(!v(e))return void console.warn("请传入一个数组类型的参数");if(!O(t))return void console.warn("请传入一个JSON对象类型的筛选参数");const l=e.length;let r={};for(let o=0;o<l;o++){let l=!0;for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const i=t[n];e[o][n]!==i&&(l=!1)}if(l)return n&&n(e[o]),r=e[o],r;e[o][i]&&ne(e[o][i],t,n,i)}};e.DTMobile=e=>{let t="";return"string"==typeof e?H.test(e)?t=e.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):console.warn("请输入一个正确的手机号"):console.warn("请输入一个字符串格式的手机号"),t},e.charInCounts=(e,t)=>e.split(t).length-1,e.closeFull=Z,e.converParamsToUrl=function(e,n){0===arguments.length&&t("converParamsToUrl方法的");let i="",l=[],r=R;if(n&&(r=Object.assign(Object.assign({},r),n)),"[object Object]"===Object.prototype.toString.call(e)?Object.entries(e).forEach((([e,t])=>{let n=e+"="+C[r.encodeUrlType](t);l.push(n)})):console.warn("拼接ur的参数格式必须是一个对象类型的数据！"),r.url.includes("?")){let t=r.url.split("?");if(console.log(t),t[1].includes("#")&&(i=t[0]+"?"+t[1].substring(0,t[1].lastIndexOf("#")),r.hashValue.trim()||(r.hashValue=t[1].substring(t[1].lastIndexOf("#")))),l.length>0){const n=A(i),l=Object.assign(Object.assign({},n),e),o=[];Object.entries(l).forEach((([e,t])=>{let n=e+"="+C[r.encodeUrlType](t);o.push(n)})),console.log(o),i=t[0]+"?"+o.join("&")+r.hashValue}else i=r.url+r.hashValue}else r.url.includes("#")&&(r.hashValue.trim()||(r.hashValue=r.url.substring(r.url.lastIndexOf("#"))),r.url=r.url.substring(0,r.url.lastIndexOf("#"))),i=l.length>0?r.url+"?"+l.join("&")+r.hashValue:r.url+r.hashValue;return i},e.findTreeData=ne,e.formatChineseRMB=function(e){const t=new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖"),n=new Array("","拾","佰","仟"),i=new Array("","万","亿","兆"),l=new Array("角","分","毫","厘");let r="",o="",s="";if(void 0===e)return"";if((e=parseFloat(Math.abs(e).toString()))>=1e15)return"";if(0==e)return s=t[0]+"元整",s;const c=e.toString();if(-1==c.indexOf("."))r=c,o="";else{let e=c.split(".");r=e[0],o=e[1].substring(0,4)}if(parseInt(r,10)>0){let e=0,l=r.length;for(let o=0;o<l;o++){let c=r.substring(o,o+1),u=l-o-1,a=u/4,f=u%4;"0"==c?e++:(e>0&&(s+=t[0]),e=0,s+=t[parseInt(c)]+n[f]),0==f&&e<4&&(s+=i[a])}s+="元"}if(""!=o){let e=o.length;for(let n=0;n<e;n++){let e=o.substring(n,n+1);"0"!=e&&(s+=t[Number(e)]+l[n])}}return""==s?s+=t[0]+"元整":""==o&&(s+="整"),s},e.getArrayAllType=function(e){v(e)||t("","getArrayAllType方法接收的参数应该是一个数组");let n=[];if(arguments.length>0&&e.length>0)for(let t=0;t<e.length;t++){let i=e[t];n.push(F(i))}return n},e.getArrayTypeDetail=function(e,n){v(e)||t("","getArrayTypeDetail方法接收的参数应该是一个数组");let i=[];if(arguments.length>0){let t=[],l=[];for(let i=0;i<e.length;i++){let r=i,o=e[i],s=F(o);l.push({index:r,value:o,type:s}),n&&(("number"===n&&["int","float"].includes(s)||n===s)&&t.push({index:r,value:o,type:s}))}i=n?[...t]:[...l]}return i},e.getFullEl=()=>{var e;return null!==(e=X[G.fullscreenElement])&&void 0!==e?e:void 0},e.getObjectAllType=function(e){O(e)||t("","getObjectAllType方法接收的参数应该是一个对象");let n=[];if(arguments.length>0)for(const t in e)if(Object.hasOwnProperty.call(e,t)){let i=e[t];n.push(F(i))}return n},e.getObjectTypeDetail=function(e,n){O(e)||t("","getObjectTypeDetail方法接收的参数应该是一个对象");let i=[];if(arguments.length>0){let t=[],l=[];for(const i in e)if(Object.hasOwnProperty.call(e,i)){let r=e[i],o=F(r);l.push({key:i,value:r,type:o}),n&&("number"===n&&["int","float"].includes(o)||n===o)&&t.push({key:i,value:r,type:o})}else;i=n?[...t]:[...l]}return i},e.getType=F,e.getUrlParams=function(e,t){let n={},i=_,l="",r="";if("string"==typeof arguments[0]?l=arguments[0]:"object"==typeof arguments[0]&&(i=Object.assign(Object.assign({},_),arguments[0])),"object"==typeof arguments[1]&&(i=Object.assign(Object.assign({},_),arguments[1])),r=N[i.decodeUrlType](i.url),r.includes("?")){let e=r.split("?");e[1].includes("#")&&(r="?"+e[1].substring(0,e[1].lastIndexOf("#")))}return n=U[i.parseUrlType](r),l?n[l]:n},e.isArray=v,e.isBigint=u,e.isBoolean=l,e.isDate=w,e.isFinite=d,e.isFloat=f,e.isFull=Q,e.isFullEnabled=()=>Boolean(X[G.fullscreenEnabled]),e.isFunction=k,e.isInfinite=p,e.isInt=h,e.isJson=i,e.isNaN=g,e.isNull=j,e.isNumber=r,e.isObject=O,e.isString=o,e.isSymbol=c,e.isUndefined=s,e.newStorage=function(e,t){return new z(e,t)},e.openFull=W,e.scrollBackTop=(e=.1,t=20)=>{let n,i;"undefined"!=typeof window&&(n=window),"undefined"!=typeof document&&(i=document),n.scrollX;const l=n.scrollY||0;let r=i.documentElement.scrollTop||i.body.scrollTop;if("number"==typeof e?e<=0?e=.1:e>1&&(e=1):e=.1,"number"!=typeof t&&(t=20),console.log(l),l>0){let n=Math.ceil(l*e),o=setInterval((function(){r-=n,r<=0&&clearInterval(o),i.documentElement.scrollTop=i.body.scrollTop=r}),t)}},e.scrollProgressBar=()=>{let e,t,n=0;"undefined"!=typeof window&&(e=window),"undefined"!=typeof document&&(t=document);let i=e.innerHeight||t.documentElement.clientHeight||t.body.clientHeight,l=t.documentElement.offsetHeight||t.body.offsetHeight,r=t.documentElement.scrollTop||t.body.scrollTop;if(i<l){let e=i/l*i;if(0===r)n=0;else{let t=Math.ceil(r+e/i*l);n=parseInt((t/l*100).toFixed(0))}}else n=0;return n},e.toTreeData=ee,e.toggleFull=(e=X.documentElement,t={navigationUI:"auto"})=>Q()?Z():W(e,t),e.treeToFlat=te,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
