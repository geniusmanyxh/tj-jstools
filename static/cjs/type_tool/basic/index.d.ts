declare function isJson(value: unknown): boolean;
declare const isBoolean: (value: unknown) => boolean;
declare const isNumber: (value: unknown) => boolean;
declare const isString: (value: unknown) => boolean;
declare const isUndefined: (value: unknown) => boolean;
declare const isSymbol: (value: unknown) => boolean;
declare const isBigint: (value: unknown) => boolean;
export { isBoolean, isNumber, isString, isUndefined, isSymbol, isBigint, isJson };
