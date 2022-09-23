interface IParamsType {
    [key: string]: string;
}
declare type parseUrlType = 'splitType' | 'URLSearchParamsType' | 'RegExpType';
declare type decodeUrlType = 'nodeType' | 'decodeURIType' | 'decodeURIComponentType';
interface IGetUrlParamsConfig {
    url: string;
    parseUrlType: parseUrlType;
    decodeUrlType: decodeUrlType;
}
declare function getUrlParams(): IParamsType;
declare function getUrlParams(key?: string): string;
declare function getUrlParams(options?: IGetUrlParamsConfig): IParamsType;
declare function getUrlParams(key?: string, options?: IGetUrlParamsConfig): IParamsType | string;
export { getUrlParams };
