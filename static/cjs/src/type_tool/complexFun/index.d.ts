type returnTypeStr = "string" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "object" | "date" | "null" | "int" | "float" | "infinite" | "NaN";
type arrayTypeDetail = {
    index: string | number;
    value: any;
    type: returnTypeStr;
};
type objectTypeDetail = {
    key: string;
    value: any;
    type: returnTypeStr;
};
declare function getType(params: unknown): returnTypeStr;
declare function getArrayAllType(params: any[]): returnTypeStr[];
declare function getArrayTypeDetail(params: any[], selectType?: returnTypeStr | "number"): arrayTypeDetail[];
declare function getObjectAllType(params: object): returnTypeStr[];
declare function getObjectTypeDetail(params: object, selectType?: returnTypeStr | "number"): objectTypeDetail[];
export { getType, getArrayAllType, getArrayTypeDetail, getObjectAllType, getObjectTypeDetail, };
