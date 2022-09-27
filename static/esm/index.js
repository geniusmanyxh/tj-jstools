function e(e="",t){let n="参数不能为空！";throw e&&(n=e+n),t&&(n=t),console.error(n),Error(n)}const t=function(t){const n=String(t).toLocaleLowerCase();return function(l){return 0===arguments.length&&e(`is${t}方法的`),typeof l===n}},n=t("Boolean"),l=t("Number"),o=t("String"),r=t("Undefined"),i=t("Symbol"),u=t("Bigint");function s(t,n){return function(l){0===arguments.length&&e(`is${t}方法的`);let o="number"==typeof l;return o&&Number[`is${n}`](l)}}function c(t){0===arguments.length&&e("isFloat方法的");let n="number"==typeof t,l=String(t).indexOf(".")+1;return n&&l>0}function a(t){0===arguments.length&&e("isInfinite方法的");let n="number"==typeof t;return n&&!Number.isFinite(t)}const f=s("Int","Integer"),p=s("Finite","Finite"),h=s("NaN","NaN"),g="[object Object]",b="[object Array]",d="[object Date]",y="[object Function]";function j(t,n){return function(l){0===arguments.length&&e(`is${t}方法的`);let o=Object.prototype.toString.call(l);return o===n}}const T=j("Null","[object Null]"),O=j("Array",b),m=j("Object",g),U=j("Date",d),I=j("Function",y);let v=["string","bigint","boolean","symbol","undefined","function"];function N(e){if(0===arguments.length)return console.warn("getType方法没有接收到参数,返回的类型为undefined"),"undefined";let t="string",n=typeof e,l=v.includes(n);return l?t=n:"number"===n?f(e)?t="int":c(e)?t="float":h(e)?t="NaN":a(e)&&(t="infinite"):"object"===n&&(T(e)?t="null":m(e)?t="object":O(e)?t="array":I(e)?t="function":U(e)&&(t="date")),t}function R(t){O(t)||e("","getArrayAllType方法接收的参数应该是一个数组");let n=[];if(arguments.length>0&&t.length>0)for(let e=0;e<t.length;e++){let l=t[e];n.push(N(l))}return n}function x(t,n){O(t)||e("","getArrayTypeDetail方法接收的参数应该是一个数组");let l=[];if(arguments.length>0){let e=[],o=[];for(let l=0;l<t.length;l++){let r=l,i=t[l],u=N(i);o.push({index:r,value:i,type:u}),n&&(("number"===n&&["int","float"].includes(u)||n===u)&&e.push({index:r,value:i,type:u}))}l=n?[...e]:[...o]}return l}function w(t){m(t)||e("","getObjectAllType方法接收的参数应该是一个对象");let n=[];if(arguments.length>0)for(const e in t)if(Object.hasOwnProperty.call(t,e)){let l=t[e];n.push(N(l))}return n}function V(t,n){m(t)||e("","getObjectTypeDetail方法接收的参数应该是一个对象");let l=[];if(arguments.length>0){let e=[],o=[];for(const l in t)if(Object.hasOwnProperty.call(t,l)){let r=t[l],i=N(r);o.push({key:l,value:r,type:i}),n&&("number"===n&&["int","float"].includes(i)||n===i)&&e.push({key:l,value:r,type:i})}else;l=n?[...e]:[...o]}return l}var S,A;const F={splitType:k,URLSearchParamsType:function(e){let t=e.split("?")[1];const n=new URLSearchParams(t);return Object.fromEntries(n.entries())},RegExpType:function(e){let t={};return e.replace(/(\w+|[\u4e00-\u9fa5]+)=(\w+|[\u4e00-\u9fa5]+)/gi,((e,n,l)=>(t[n]=l,""))),t}},C={noneType:e=>e,decodeURIType:decodeURI,decodeURIComponentType:decodeURIComponent},E={noneType:e=>e,encodeURIType:encodeURI,encodeURIComponent:encodeURIComponent},P={url:null===(S=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===S?void 0:S.href,hashValue:"",encodeUrlType:"noneType"},D={url:null===(A=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===A?void 0:A.search,parseUrlType:"splitType",decodeUrlType:"noneType"};function L(e,t){let n={},l=D,o="",r="";if("string"==typeof arguments[0]?o=arguments[0]:"object"==typeof arguments[0]&&(l=Object.assign(Object.assign({},D),arguments[0])),"object"==typeof arguments[1]&&(l=Object.assign(Object.assign({},D),arguments[1])),r=C[l.decodeUrlType](l.url),r.includes("?")){let e=r.split("?");e[1].includes("#")&&(r="?"+e[1].substring(0,e[1].lastIndexOf("#")))}return n=F[l.parseUrlType](r),o?n[o]:n}function $(t,n){0===arguments.length&&e("converParamsToUrl方法的");let l="",o=[],r=P;if(n&&(r=Object.assign(Object.assign({},r),n)),"[object Object]"===Object.prototype.toString.call(t)?Object.entries(t).forEach((([e,t])=>{let n=e+"="+E[r.encodeUrlType](t);o.push(n)})):console.warn("拼接ur的参数格式必须是一个对象类型的数据！"),r.url.includes("?")){let e=r.url.split("?");if(console.log(e),e[1].includes("#")&&(l=e[0]+"?"+e[1].substring(0,e[1].lastIndexOf("#")),r.hashValue.trim()||(r.hashValue=e[1].substring(e[1].lastIndexOf("#")))),o.length>0){const n=k(l),o=Object.assign(Object.assign({},n),t),i=[];Object.entries(o).forEach((([e,t])=>{let n=e+"="+E[r.encodeUrlType](t);i.push(n)})),console.log(i),l=e[0]+"?"+i.join("&")+r.hashValue}else l=r.url+r.hashValue}else r.url.includes("#")&&(r.hashValue.trim()||(r.hashValue=r.url.substring(r.url.lastIndexOf("#"))),r.url=r.url.substring(0,r.url.lastIndexOf("#"))),l=o.length>0?r.url+"?"+o.join("&")+r.hashValue:r.url+r.hashValue;return l}function k(e){let t=e.split("?")[1],n={};if(!t)return n;let l=t.split("&");for(let e=0,t=l.length;e<t;e++){let t=l[e].split("=");n[t[0]]=t[1]}return n}export{$ as converParamsToUrl,R as getArrayAllType,x as getArrayTypeDetail,w as getObjectAllType,V as getObjectTypeDetail,N as getType,L as getUrlParams,O as isArray,u as isBigint,n as isBoolean,U as isDate,p as isFinite,c as isFloat,I as isFunction,a as isInfinite,f as isInt,h as isNaN,T as isNull,l as isNumber,m as isObject,o as isString,i as isSymbol,r as isUndefined};
//# sourceMappingURL=index.js.map