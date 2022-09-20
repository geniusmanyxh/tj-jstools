"use strict";function r(r="",e){let o="参数不能为空！";throw r&&(o=r+o),e&&(o=e),console.error(o),Error(o)}const e=function(e){return function(o){return 0===arguments.length&&r(`${o}方法的`),typeof o===e}},o=e("boolean"),t=e("number"),n=e("string");var u={tjType:Object.freeze({__proto__:null,isBoolean:o,isNumber:t,isString:n})};module.exports=u;
//# sourceMappingURL=index.js.map
