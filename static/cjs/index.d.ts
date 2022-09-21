import { isFloat, isInfinite } from './type_tool/numDel';
import { getType, getArrayAllType, getArrayTypeDetail, getObjectAllType, getObjectTypeDetail } from './type_tool/complexFun';
declare const tjType: {
    getType: typeof getType;
    getArrayAllType: typeof getArrayAllType;
    getArrayTypeDetail: typeof getArrayTypeDetail;
    getObjectAllType: typeof getObjectAllType;
    getObjectTypeDetail: typeof getObjectTypeDetail;
    isBoolean: (value: unknown) => boolean;
    isNumber: (value: unknown) => boolean;
    isString: (value: unknown) => boolean;
    isSymbol: (value: unknown) => boolean;
    isUndefined: (value: unknown) => boolean;
    isBigint: (value: unknown) => boolean;
    isInt: (value: unknown) => boolean;
    isFloat: typeof isFloat;
    isNaN: (value: unknown) => boolean;
    isFinite: (value: unknown) => boolean;
    isInfinite: typeof isInfinite;
    isNull: (value: unknown) => boolean;
    isArray: (value: unknown) => boolean;
    isDate: (value: unknown) => boolean;
    isFunction: (value: unknown) => boolean;
    isObject: (value: unknown) => boolean;
};
export { tjType };
