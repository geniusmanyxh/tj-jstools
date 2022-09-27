interface IParamsType {
    [key: string]: string;
}
declare type parseUrlType = 'splitType' | 'URLSearchParamsType' | 'RegExpType';
declare type decodeUrlType = 'noneType' | 'decodeURIType' | 'decodeURIComponentType';
declare type encodeUrlType = 'noneType' | 'encodeURIType' | 'encodeURIComponentType';
interface IConverParamsConfig {
    url: string;
    hashValue: string;
    encodeUrlType: encodeUrlType;
}
interface IGetUrlParamsConfig {
    url: string;
    parseUrlType: parseUrlType;
    decodeUrlType: decodeUrlType;
}
declare function getUrlParams(): IParamsType;
declare function getUrlParams(key?: string): string;
declare function getUrlParams(options?: IGetUrlParamsConfig): IParamsType;
declare function getUrlParams(key?: string, options?: IGetUrlParamsConfig): IParamsType | string;
declare function converParamsToUrl(urlParams: object): string;
declare function converParamsToUrl(urlParams: object, options?: IConverParamsConfig): string;
export { getUrlParams, converParamsToUrl };
