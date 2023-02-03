declare type UnitTimeType = "ms" | "s" | "min" | "h" | "d" | "w" | "m" | "y";
declare type StorageType = "cookie" | "local" | "session";
interface IComStorageBasicProp {
    prefix?: string;
    suffix?: string;
    linkSign?: string;
}
interface IComStorageSetProp extends IComStorageBasicProp {
    expireTime?: number;
    unitTime?: UnitTimeType;
}
interface IComCookieBasicProp extends IComStorageSetProp {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined;
    [property: string]: any;
}
interface IComStorageFun {
    setFun(key: string, value: any, options?: IComStorageSetProp | IComCookieBasicProp): void;
    getFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp): any;
    delFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp): void;
    existFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp): boolean;
    allKey(options?: IComStorageBasicProp | IComCookieBasicProp): string[];
    clearFun(options?: IComStorageBasicProp | IComCookieBasicProp): void;
}
declare class ComStorage implements IComStorageFun {
    private instanceType;
    private prefix;
    private suffix;
    private linkSign;
    private expireTime;
    private unitTime;
    private expires;
    private path;
    private domain;
    private secure;
    private sameSite;
    constructor(type: StorageType, options?: IComStorageSetProp | IComCookieBasicProp | undefined);
    setFun(key: string, value: any, options?: IComStorageSetProp | IComCookieBasicProp | undefined): void;
    getFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp | undefined): any;
    delFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp | undefined): void;
    existFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp | undefined): boolean;
    allKey(options?: IComStorageBasicProp | undefined): string[];
    clearFun(options?: IComStorageBasicProp | IComCookieBasicProp | undefined): void;
}
declare function newStorage(type: StorageType, options?: IComCookieBasicProp): ComStorage;
export { newStorage };
