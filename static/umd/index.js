!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)._tj={})}(this,(function(e){"use strict";function t(e="",t){let n="参数不能为空！";throw e&&(n=e+n),t&&(n=t),console.error(n),Error(n)}const n=function(e){const n=String(e).toLocaleLowerCase();return function(i){return 0===arguments.length&&t(`is${e}方法的`),typeof i===n}},i=n("Boolean"),l=n("Number"),o=n("String"),r=n("Undefined"),u=n("Symbol"),c=n("Bigint");function f(e,n){return function(i){0===arguments.length&&t(`is${e}方法的`);let l="number"==typeof i;return l&&Number[`is${n}`](i)}}function s(e){0===arguments.length&&t("isFloat方法的");let n="number"==typeof e,i=String(e).indexOf(".")+1;return n&&i>0}function a(e){0===arguments.length&&t("isInfinite方法的");let n="number"==typeof e;return n&&!Number.isFinite(e)}const y=f("Int","Integer"),p=f("Finite","Finite"),b=f("NaN","NaN"),g="[object Object]",d="[object Array]",h="[object Date]",j="[object Function]";function m(e,n){return function(i){0===arguments.length&&t(`is${e}方法的`);let l=Object.prototype.toString.call(i);return l===n}}const N=m("Null","[object Null]"),O=m("Array",d),T=m("Object",g),A=m("Date",h),F=m("Function",j);let D=["string","bigint","boolean","symbol","undefined","function"];function S(e){if(0===arguments.length)return console.warn("getType方法没有接收到参数,返回的类型为undefined"),"undefined";let t="string",n=typeof e,i=D.includes(n);return i?t=n:"number"===n?y(e)?t="int":s(e)?t="float":b(e)?t="NaN":a(e)&&(t="infinite"):"object"===n&&(N(e)?t="null":T(e)?t="object":O(e)?t="array":F(e)?t="function":A(e)&&(t="date")),t}const x={getType:S,getArrayAllType:function(e){O(e)||t("","getArrayAllType方法接收的参数应该是一个数组");let n=[];if(arguments.length>0&&e.length>0)for(let t=0;t<e.length;t++){let i=e[t];n.push(S(i))}return n},getArrayTypeDetail:function(e,n){O(e)||t("","getArrayTypeDetail方法接收的参数应该是一个数组");let i=[];if(arguments.length>0){let t=[],l=[];for(let i=0;i<e.length;i++){let o=i,r=e[i],u=S(r);l.push({index:o,value:r,type:u}),n&&(("number"===n&&["int","float"].includes(u)||n===u)&&t.push({index:o,value:r,type:u}))}i=n?[...t]:[...l]}return i},getObjectAllType:function(e){T(e)||t("","getObjectAllType方法接收的参数应该是一个对象");let n=[];if(arguments.length>0)for(const t in e)if(Object.hasOwnProperty.call(e,t)){let i=e[t];n.push(S(i))}return n},getObjectTypeDetail:function(e,n){T(e)||t("","getObjectTypeDetail方法接收的参数应该是一个对象");let i=[];if(arguments.length>0){let t=[],l=[];for(const i in e)if(Object.hasOwnProperty.call(e,i)){let o=e[i],r=S(o);l.push({key:i,value:o,type:r}),n&&("number"===n&&["int","float"].includes(r)||n===r)&&t.push({key:i,value:o,type:r})}else;i=n?[...t]:[...l]}return i},isBoolean:i,isNumber:l,isString:o,isSymbol:u,isUndefined:r,isBigint:c,isInt:y,isFloat:s,isNaN:b,isFinite:p,isInfinite:a,isNull:N,isArray:O,isDate:A,isFunction:F,isObject:T};e.tjType=x,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
