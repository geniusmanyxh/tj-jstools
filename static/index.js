!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)._tj=n()}(this,(function(){"use strict";function e(e="",n){let o="参数不能为空！";throw e&&(o=e+o),n&&(o=n),console.error(o),Error(o)}const n=function(n){return function(o){return 0===arguments.length&&e(`${o}方法的`),typeof o===n}},o=n("boolean"),t=n("number"),r=n("string");return{tjType:Object.freeze({__proto__:null,isBoolean:o,isNumber:t,isString:r})}}));
//# sourceMappingURL=index.js.map
