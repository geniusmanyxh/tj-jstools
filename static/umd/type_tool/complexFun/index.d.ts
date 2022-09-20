declare type returnTypeStr = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array' | 'object' | 'date' | 'null' | 'int' | 'float' | 'infinite' | 'finite' | 'NaN';
declare type arrayTypeDetail = {
    index: string | number;
    value: any;
    type: returnTypeStr;
};
declare function getType(params: unknown): returnTypeStr;
declare function getArrayAllType(params: any[]): returnTypeStr[];
declare function getArrayTypeDetail(params: any[], selectType?: returnTypeStr): arrayTypeDetail[];
export { getType, getArrayAllType, getArrayTypeDetail };
