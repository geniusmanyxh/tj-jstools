declare const _default: {
    isNumber: <T>(value: T) => boolean;
    isBoolean: <T>(value: T) => boolean;
    isNull: <T>(value: T) => boolean;
    isString: <T>(value: T) => boolean;
    isObject: <T>(value: T) => boolean;
    isUndefined: <T>(value: T) => boolean;
    isFunction: <T>(value: T) => boolean;
    isArray: <T>(value: T) => boolean;
    isDate: <T>(value: T) => boolean;
    isError: <T>(value: T) => boolean;
    isRegExp: <T>(value: T) => boolean;
    isSymbol: <T>(value: T) => boolean;
    isMath: <T>(value: T) => boolean;
    isJson: <T>(value: T) => boolean;
    _: {};
    getTypes: <T_1>(value: T_1 | T_1[]) => string[];
};
export default _default;
