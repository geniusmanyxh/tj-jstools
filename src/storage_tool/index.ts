import Cookies from "js-cookie";
import { isUndefined, isJson, isString } from "../type_tool/basic";
import { isObject } from "../type_tool/objDel";

type UnitTimeType = "ms" | "s" | "min" | "h" | "d" | "w" | "m" | "y";
type IFormatUnitTime = {
  [key in UnitTimeType]: number;
};
type StorageType = "cookie" | "local" | "session";

type StorageInstanceType = {
  [key in StorageType]: Cookies.CookiesStatic | Storage;
};

interface IComStorageBasicProp {
  prefix?: string;
  suffix?: string;
  linkSign?: string;
}

interface IComStorageSetProp extends IComStorageBasicProp {
  // isReset?: boolean
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
interface jointParamsType {
  key: string;
  prefix: string;
  suffix: string;
  linkSign: string;
}

interface IComStorageFun {
  setFun(
    key: string,
    value: any,
    options?: IComStorageSetProp | IComCookieBasicProp
  ): void;
  getFun(
    key: string,
    options?: IComStorageBasicProp | IComCookieBasicProp
  ): any;
  delFun(
    key: string,
    options?: IComStorageBasicProp | IComCookieBasicProp
  ): void;
  existFun(
    key: string,
    options?: IComStorageBasicProp | IComCookieBasicProp
  ): boolean;
  allKey(options?: IComStorageBasicProp | IComCookieBasicProp): string[];
  clearFun(options?: IComStorageBasicProp | IComCookieBasicProp): void;
}

const StorageTypeInstance: StorageInstanceType = {
  cookie: Cookies as Cookies.CookiesStatic,
  local: globalThis?.localStorage as Storage,
  session: globalThis?.sessionStorage as Storage,
};

const FormatUnitTime: IFormatUnitTime = {
  ms: 1,
  s: 1000,
  min: 60 * 1000,
  h: 60 * 60 * 1000,
  d: 864e5,
  w: 7 * 864e5,
  m: 30 * 864e5,
  y: 365 * 864e5,
};
const OptionsCookieProp = ["expires", "path", "domain", "secure", "sameSite"];
const OptionsDefaultProp = [
  "prefix",
  "suffix",
  "linkSign",
  // 'isReset',
  "expireTime",
  "unitTime",
  "expires",
  "path",
  "domain",
  "secure",
  "sameSite",
];

class ComStorage implements IComStorageFun {
  private instanceType: StorageType | undefined;
  private prefix = "";
  private suffix = "";
  private linkSign = ".";
  // private isReset: boolean = true
  private expireTime = -1;
  private unitTime: UnitTimeType = "ms";

  private expires: number | Date | undefined;
  private path: string | undefined = "/";
  private domain: string | undefined;
  private secure: boolean | undefined = false;
  private sameSite:
    | "strict"
    | "Strict"
    | "lax"
    | "Lax"
    | "none"
    | "None"
    | undefined = "Lax";

  constructor(
    type: StorageType,
    options?: IComStorageSetProp | IComCookieBasicProp | undefined
  ) {
    if (type && (type === "cookie" || type === "local" || type === "session")) {
      this.instanceType = type;
    } else {
      throw Error(
        "实例类型值类型是字符串类型，且值只能为 cookie或local或session"
      );
    }

    if (options && isObject(options)) {
      Object.entries(options).forEach(([key, value]) => {
        this[key] = value;
      });
    }
  }
  setFun(
    key: string,
    value: any,
    options?: IComStorageSetProp | IComCookieBasicProp | undefined
  ): void {
    if (arguments.length === 0) return;
    if (!isString(key) || !key.trim()) {
      throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");
    }

    let Config: IComStorageSetProp | IComCookieBasicProp = {};

    for (let i = 0; i < OptionsDefaultProp.length; i++) {
      Config[OptionsDefaultProp[i]] = this[OptionsDefaultProp[i]];
    }
    // console.log(Config);

    if (!isUndefined(options)) {
      Config = { ...Config, ...options };
    }

    // console.log(Config);

    const jointKeyParams: jointParamsType = {
      key,
      prefix: Config.prefix as string,
      linkSign: Config.linkSign as string,
      suffix: Config.suffix as string,
    };
    key = jointKey(jointKeyParams);

    const dataExpTime =
      (Config.expireTime as number) * FormatUnitTime[Config.unitTime as string];

    // console.log("time", dataExpTime);
    if (!isString(value)) {
      value = value ? JSON.stringify(value) : "undefined";
    }
    if (this.instanceType === "cookie") {
      if (dataExpTime > 0) {
        (Config as IComCookieBasicProp).expires = new Date(
          dataExpTime + new Date().getTime()
        );
      }
      const cookieOpt = {};
      for (const key of OptionsCookieProp) {
        if (!isUndefined(Config[key])) {
          cookieOpt[key] = Config[key];
        }
      }
      Cookies.set(key, value, cookieOpt);
      // const Instance = StorageTypeInstance['cookie'] as Cookies.CookiesStatic
      // Instance.set(key, value,cookieOpt)
    } else {
      const Instance = StorageTypeInstance[
        this.instanceType as StorageType
      ] as Storage;
      const saveData: any = { _tj_value: value };
      if (dataExpTime > 0) {
        saveData._tj_expireTime = dataExpTime + new Date().getTime();
      }

      Instance.setItem(key, encodeURIComponent(JSON.stringify(saveData)));
    }
  }
  getFun(
    key: string,
    options?: IComStorageBasicProp | IComCookieBasicProp | undefined
  ) {
    if (arguments.length === 0) return;
    if (!isString(key) || !key.trim()) {
      throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");
    }

    let Config: IComStorageBasicProp | IComCookieBasicProp = {};

    for (let i = 0; i < OptionsDefaultProp.length; i++) {
      Config[OptionsDefaultProp[i]] = this[OptionsDefaultProp[i]];
    }

    if (!isUndefined(options)) {
      Config = { ...Config, ...options };
    }
    const jointKeyParams: jointParamsType = {
      key,
      prefix: Config.prefix as string,
      linkSign: Config.linkSign as string,
      suffix: Config.suffix as string,
    };
    key = jointKey(jointKeyParams);

    let rtnData: any = undefined;

    if (this.instanceType === "cookie") {
      // const Instance = StorageTypeInstance['cookie'] as Cookies.CookiesStatic
      // const getCookieData = Instance.get(key)
      const getCookieData = Cookies.get(key);
      if (isString(getCookieData)) {
        if (isJson(getCookieData)) {
          rtnData = JSON.parse(getCookieData as string);
        }

        rtnData = getCookieData;
      }
    } else {
      const Instance = StorageTypeInstance[
        this.instanceType as StorageType
      ] as Storage;
      const tempData = Instance.getItem(key) as string;
      // console.log("tempData", tempData);
      if (isString(tempData)) {
        const tem = decodeURIComponent(tempData);
        if (isJson(tem)) {
          const nowTime = Date.now();
          const getStorageData = JSON.parse(tem);
          // console.log("getStorageData", getStorageData);
          if (getStorageData && getStorageData._tj_expireTime) {
            if (getStorageData._tj_expireTime > nowTime) {
              if (isJson(getStorageData._tj_value)) {
                rtnData = JSON.parse(getStorageData._tj_value);
              } else {
                rtnData = getStorageData._tj_value;
              }
            } else {
              rtnData = undefined;
            }
          } else {
            // 判断对象里面是否存在特殊属性
            if (getStorageData._tj_value) {
              if (isJson(getStorageData._tj_value)) {
                rtnData = JSON.parse(getStorageData._tj_value);
              } else {
                rtnData = getStorageData._tj_value;
              }
            } else {
              rtnData = getStorageData;
            }
          }
        } else {
          // 只是一个字符串
          rtnData = tem;
        }
      }
    }

    return rtnData;
  }
  delFun(
    key: string,
    options?: IComStorageBasicProp | IComCookieBasicProp | undefined
  ): void {
    if (arguments.length === 0) return;
    if (!isString(key) || !key.trim()) {
      throw Error("浏览器存储的标识必须是字符串类型,且不能为空字符串！");
    }

    let Config: IComStorageSetProp | IComCookieBasicProp = {};

    for (let i = 0; i < OptionsDefaultProp.length; i++) {
      Config[OptionsDefaultProp[i]] = this[OptionsDefaultProp[i]];
    }

    if (!isUndefined(options)) {
      Config = { ...Config, ...options };
    }

    const jointKeyParams: jointParamsType = {
      key,
      prefix: Config.prefix as string,
      linkSign: Config.linkSign as string,
      suffix: Config.suffix as string,
    };
    key = jointKey(jointKeyParams);

    if (this.instanceType === "cookie") {
      const cookieOpt = {};

      for (const key of OptionsCookieProp) {
        if (!isUndefined(Config[key])) {
          cookieOpt[key] = Config[key];
        }
      }
      // const Instance = StorageTypeInstance['cookie'] as Cookies.CookiesStatic
      if (Object.keys(cookieOpt).length === 0) {
        Cookies.remove(key);
      } else {
        Cookies.remove(key, cookieOpt);
      }
    } else {
      const Instance = StorageTypeInstance[
        this.instanceType as StorageType
      ] as Storage;
      Instance.removeItem(key);
    }
  }
  existFun(
    key: string,
    options?: IComStorageBasicProp | IComCookieBasicProp | undefined
  ): boolean {
    let rtnData: any = undefined;
    if (options) {
      rtnData = this.getFun(key, options);
    } else {
      rtnData = this.getFun(key);
    }

    return !!rtnData;
  }
  allKey(options?: IComStorageBasicProp | undefined): string[] {
    // 获取当前浏览器该类型的缓存的所有key值，组装为一个数组
    const keyArr: string[] = []; // 存储临时筛选结果的数组
    const getKeys: string[] = []; // 临时存储缓存keys的数组
    const resArr: string[] = []; // 返回有效的keys数组
    // 判断缓存类型
    if (this.instanceType === "cookie") {
      // const Instance = StorageTypeInstance['cookie'] as Cookies.CookiesStatic
      const keys = Object.keys(Cookies.get());
      getKeys.push(...keys);
    } else {
      const Instance = StorageTypeInstance[
        this.instanceType as StorageType
      ] as Storage;
      const keys = Object.keys(Instance);
      getKeys.push(...keys);
    }

    if (options && isObject(options)) {
      const plen = Object.keys(options).length;
      const pre = options.prefix ?? this.prefix;
      const lsign = options.linkSign ?? this.linkSign;
      const suf = options.suffix ?? this.suffix;

      if (plen >= 3) {
        // 3个参数 1种情况
        getKeys.forEach((val) => {
          if (val.includes(pre + lsign) && val.includes(lsign + suf)) {
            keyArr.push(val);
          }
        });
      } else if (plen >= 2) {
        // 2个参数 p+l\p+s\l+s\ 3种情况
        if (options.prefix && options.suffix && !options.linkSign) {
          getKeys.forEach((val) => {
            if (val.includes(pre + lsign) && val.includes(lsign + suf)) {
              keyArr.push(val);
            }
          });
        } else if (options.prefix && options.linkSign && !options.suffix) {
          getKeys.forEach((val) => {
            if (val.includes(pre + lsign)) {
              keyArr.push(val);
            }
          });
        } else if (options.linkSign && options.suffix && !options.prefix) {
          getKeys.forEach((val) => {
            if (val.includes(lsign + suf)) {
              keyArr.push(val);
            }
          });
        }
      } else {
        // 1个参数 p\l\s  3种情况
        if (options.prefix && !options.linkSign && !options.suffix) {
          getKeys.forEach((val) => {
            if (val.includes(pre)) {
              keyArr.push(val);
            }
          });
        } else if (options.linkSign && !options.prefix && !options.suffix) {
          getKeys.forEach((val) => {
            if (val.includes(lsign)) {
              keyArr.push(val);
            }
          });
        } else if (options.suffix && !options.linkSign && !options.prefix) {
          getKeys.forEach((val) => {
            if (val.includes(suf)) {
              keyArr.push(val);
            }
          });
        }
      }
    } else {
      keyArr.push(...getKeys);
    }

    let InsGet: Function;
    if (this.instanceType === "cookie") {
      // const Instance = StorageTypeInstance['cookie'] as Cookies.CookiesStatic
      InsGet = (key: string) => Cookies.get(key);
    } else {
      const Instance = StorageTypeInstance[
        this.instanceType as StorageType
      ] as Storage;
      InsGet = (key: string) => Instance.getItem(key);
    }

    if (keyArr.length > 0) {
      // 过滤无效的keys
      for (let i = 0; i < keyArr.length; i++) {
        const val = keyArr[i];
        // 判断缓存值的过期时间是否已经过期

        const isTrue = !getValidValue(InsGet(val));
        if (isTrue) {
          // 如果过期，则继续遍历下一个
          continue;
        } else {
          // 如果有效则添加到结果数组中
          resArr.push(val);
        }
      }
    }

    return resArr;
  }
  clearFun(
    options?: IComStorageBasicProp | IComCookieBasicProp | undefined
  ): void {
    let resArr: string[] = [];

    if (this.instanceType === "cookie") {
      // const Instance = StorageTypeInstance['cookie'] as Cookies.CookiesStatic
      const cookieOpt = {};

      if (options) {
        resArr = [...this.allKey(options)];
        OptionsCookieProp.forEach((key) => {
          if (!isUndefined(options[key])) {
            cookieOpt[key] = options[key];
          }
        });
      } else {
        resArr = [...this.allKey()];
      }
      if (resArr.length > 0) {
        if (Object.keys(cookieOpt).length === 0) {
          resArr.forEach((val) => Cookies.remove(val));
        } else {
          resArr.forEach((val) => Cookies.remove(val, cookieOpt));
        }
      }
    } else {
      const Instance = StorageTypeInstance[
        this.instanceType as StorageType
      ] as Storage;
      if (options) {
        resArr = [...this.allKey(options)];
        if (resArr.length > 0) {
          resArr.forEach((val) => Instance.removeItem(val));
        }
      } else {
        Instance.clear();
      }
    }
  }
}

// 拼接key
function jointKey(keyOpt: jointParamsType): string {
  let rtnKey = "";

  if (keyOpt.linkSign.trim()) {
    if (keyOpt.prefix.trim()) {
      rtnKey += keyOpt.prefix + keyOpt.linkSign;
    }

    rtnKey += keyOpt.key;

    if (keyOpt.suffix.trim()) {
      rtnKey += keyOpt.linkSign + keyOpt.suffix;
    }
  } else {
    rtnKey = keyOpt.key.trim();
  }

  return rtnKey;
}

// 判断存储值是否有效
function getValidValue(val: unknown): boolean {
  let rtnData = true;

  if (isString(val)) {
    if (isJson(val)) {
      const data = JSON.parse(val as string);
      if (data._tj_expireTime && data._tj_expireTime < Date.now()) {
        rtnData = false;
      }
    }
  } else {
    rtnData = false;
  }

  return rtnData;
}

function newStorage(type: StorageType, options?: IComCookieBasicProp) {
  return new ComStorage(type, options);
}

export { newStorage };
