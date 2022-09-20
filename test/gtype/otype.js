"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {};
const isType = function isType(type) {
    const params = String(type).toLocaleLowerCase();
    return function specificType(value) {
        const judgeType = `[object ${params}]`;
        const resultType = obj.toString.call(value).toLocaleLowerCase();
        return judgeType === resultType;
    };
};
const isNumber = isType('Number');
const isBoolean = isType('Boolean');
const isString = isType('String');
const isNull = isType('Null');
const isObject = isType('Object');
const isUndefined = isType('Undefined');
const isFunction = isType('Function');
const isArray = isType('Array');
const isDate = isType('Date');
const isError = isType('Error');
const isRegExp = isType('Function');
const isSymbol = isType('Symbol');
const isMath = isType('Math');
const isJson = isType('Json');
const getTypes = function getTypes(value) {
    // 判断是否是数组
    if (isArray(value)) {
        return value.map((item) => {
            const execRes = /\s+([a-zA-Z]+)/gi.exec(obj.toString.call(item));
            const firstWorld = execRes[0].trim().toLocaleLowerCase();
            return firstWorld;
        });
    }
    const result = getTypes([value]);
    return result;
};
const _ = {};
const allTypes = [
    'Number',
    'Boolean',
    'String',
    'Null',
    'Object',
    'Undefined',
    'Function',
    'Array',
    'Date',
    'Error',
    'Function',
    'Symbol',
    'Math',
    'Json'
];
let i = 0;
for (; i < allTypes.length; i += 1) {
    const iden = allTypes[i];
    const field = `is${iden}`;
    if (!Reflect.has(_, field)) {
        Object.defineProperty(_, `is${iden}`, {
            value: isType(iden),
            enumerable: false,
            writable: false
        });
    }
}
exports.default = {
    isNumber,
    isBoolean,
    isNull,
    isString,
    isObject,
    isUndefined,
    isFunction,
    isArray,
    isDate,
    isError,
    isRegExp,
    isSymbol,
    isMath,
    isJson,
    _,
    getTypes
};
//# sourceMappingURL=otype.js.map