function e(e="",t){let n="参数不能为空！";throw e&&(n=e+n),t&&(n=t),console.error(n),Error(n)}const t=function(t){const n=String(t).toLocaleLowerCase();return function(i){return 0===arguments.length&&e(`is${t}方法的`),typeof i===n}},n=t("Boolean"),i=t("Number"),r=t("String"),l=t("Undefined"),o=t("Symbol"),u=t("Bigint");function c(t,n){return function(i){0===arguments.length&&e(`is${t}方法的`);let r="number"==typeof i;return r&&Number[`is${n}`](i)}}function s(t){0===arguments.length&&e("isFloat方法的");let n="number"==typeof t,i=String(t).indexOf(".")+1;return n&&i>0}function f(t){0===arguments.length&&e("isInfinite方法的");let n="number"==typeof t;return n&&!Number.isFinite(t)}const a=c("Int","Integer"),y=c("Finite","Finite"),g=c("NaN","NaN"),b="[object Object]",p="[object Array]",h="[object Date]",d="[object Function]";function j(t,n){return function(i){0===arguments.length&&e(`is${t}方法的`);let r=Object.prototype.toString.call(i);return r===n}}const N=j("Null","[object Null]"),m=j("Array",p),O=j("Object",b),A=j("Date",h),T=j("Function",d);let F=["string","bigint","boolean","symbol","undefined","function"];function D(e){if(0===arguments.length)return console.warn("getType方法没有接收到参数,返回的类型为undefined"),"undefined";let t="string",n=typeof e,i=F.includes(n);return i?t=n:"number"===n?a(e)?t="int":s(e)?t="float":g(e)?t="NaN":y(e)?t="finite":f(e)&&(t="infinite"):"object"===n&&(N(e)?t="null":O(e)?t="object":m(e)?t="array":T(e)?t="function":A(e)&&(t="date")),t}const S={getType:D,getArrayAllType:function(t){m(t)||e("","getArrayAllType方法接收的参数应该是一个数组");let n=[];if(arguments.length>0&&t.length>0)for(let e=0;e<t.length;e++){let i=t[e];n.push(D(i))}return n},getArrayTypeDetail:function(t,n){m(t)||e("","getArrayTypeDetail方法接收的参数应该是一个数组");let i=[];if(arguments.length>0){let e=[],r=[];for(let i=0;i<t.length;i++){let l=i,o=t[i],u=D(o);r.push({index:l,value:o,type:u}),n&&(("number"===n&&["int","float"].includes(u)||n===u)&&e.push({index:l,value:o,type:u}))}i=n?[...e]:[...r]}return i},getObjectAllType:function(t){O(t)||e("","getObjectAllType方法接收的参数应该是一个对象");let n=[];if(arguments.length>0)for(const e in t)if(Object.hasOwnProperty.call(t,e)){let i=t[e];n.push(D(i))}return n},getObjectTypeDetail:function(t,n){O(t)||e("","getObjectTypeDetail方法接收的参数应该是一个对象");let i=[];if(arguments.length>0){let e=[],r=[];for(const i in t)if(Object.hasOwnProperty.call(t,i)){let l=t[i],o=D(l);r.push({key:i,value:l,type:o}),n&&("number"===n&&["int","float"].includes(o)||n===o)&&e.push({key:i,value:l,type:o})}else;i=n?[...e]:[...r]}return i},isBoolean:n,isNumber:i,isString:r,isSymbol:o,isUndefined:l,isBigint:u,isInt:a,isFloat:s,isNaN:g,isFinite:y,isInfinite:f,isNull:N,isArray:m,isDate:A,isFunction:T,isObject:O};export{S as tjType};
//# sourceMappingURL=index.js.map
