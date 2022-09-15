declare type returnTypeStr =  "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" |  "object" | "date" | "null" | "int" | "float" | "infinite" | "NaN";


export declare namespace GTypeTools {
  /**
   * @description 精确匹配数据类型
   * @param {any} params 需要判断类型的参数
   * @returns "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" |  "object" | "date" | "null" | "int" | "float" | "infinite" | "NaN"
   */
  function getType(
    params: any
  ):
    | 'string'
    | 'number'
    | 'bigint'
    | 'boolean'
    | 'symbol'
    | 'undefined'
    | 'object'
    | 'function'
    | 'array'
    | 'object'
    | 'date'
    | 'null'
    | 'int'
    | 'float'
    | 'infinite'
    | 'NaN'

  /**
   * @description 获取数组每个下标值的基本数据类型
   * @param {Array} arr 需要判断类型的数组
   * @returns string[] 返回字符串数组
   */
  function getArrayTypes(arr: any[]): string[]

  /**
   * @description 获取对象的属性的基本数据类型
   * @param {Object} obj 需要判断类型的对象
   * @returns string[] 返回字符串数组
   */
  function getObjectTypes(obj: object): string[]

  /**
   * @description 获取对应类型的数组索引
   * @param {Array} arr 需要判断类型的数组
   * @param {returnTypeStr} dataType 需要判断的类型
   * @returns number[] 返回一个字符串数组
   */
  function getArrayTypeIndexs(arr: any[], dataType: string): number[]

  /**
   * @description 获取对应类型的对象属性名称(key_name)
   * @param {Object} obj 需要判断类型的对象
   * @param {returnTypeStr} dataType 需要判断的类型
   * @returns string[] 返回一个字符串数组
   */
  function getObjectTypeKeys(obj: object, dataType: string): string[]

  /**
   * @description 获取或者筛选数组内的值, 并返回该值的index-value-type, 如果不传dataType，默认返回所有
   * @param {Array} arr 传入你想要获取的参数类型的数组
   * @param {returnTypeStr} dataType 可选参数，传入你想要获取的参数类型
   * @returns [{index:index,value:value,type:type}...]
   */
  function getArrayTypesDetail(arr: any[], dataType: string): string[]

  /**
   * @description 获取或者筛选对象内属性的值, 并返回该值的key-value-type, 如果不传dataType，默认返回所有
   * @param {object} obj 传入你想要获取的参数类型的对象
   * @param {returnTypeStr} dataType 可选参数，传入你想要获取的参数类型
   * @returns [{key:key,value:value,type:type}...]
   */
  function getObjectTypesDetail(obj: object, dataType: string): string[]

  /**
   * @description 判断值类型是否是一个string (字符串)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isString(params: any): boolean

  /**
   * @description 判断值类型是否是一个number (数值)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isNumber(params: any): boolean

  /**
   * @description 判断值类型是否是一个NaN (Not a Number)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isNaN(params: any): boolean

  /**
   * @description 判断值类型是否是一个infinite (无穷大)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isInfinite(params: any): boolean

  /**
   * @description 判断值类型是否是一个int (整型数)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isInt(params: any): boolean

  /**
   * @description 判断值类型是否是一个float (浮点数)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isFloat(params: any): boolean

  /**
   * @description 判断值类型是否是一个bigint (大整数)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isBigInt(params: any): boolean

  /**
   * @description 判断值类型是否是一个boolean (布尔型)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isBoolean(params: any): boolean

  /**
   * @description 判断值类型是否是一个symbol
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isSymbol(params: any): boolean

  /**
   * @description 判断值类型是否是一个undefined
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isUndefined(params: any): boolean

  /**
   * @description 判断值类型是否是一个null
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isNull(params: any): boolean

  /**
   * @description 判断值类型是否是一个object (指:{}, 非: null | function | date | class | array | other)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isObject(params: any): boolean

  /**
   * @description 判断值类型是否是一个function (函数) (指：function | class | () => )
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isFunction(params: any): boolean

  /**
   * @description 判断值类型是否是一个数组 (数组)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isArray(params: any): boolean

  /**
   * @description 判断值类型是否是一个empty array (空数组)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isEmptyArray(params: any): boolean

  /**
   * @description 判断值类型是否是一个empty object (空对象)
   * @param {any} params 传入想要判断类型的参数
   * @returns 是：true  | 否：false
   */
  function isEmptyObject(params: any): boolean

  /**
   * @description 类型转换为string (字符串)
   * @param {any} params 传入想要转换类型的参数
   * @returns string
   */
  function toString(params: any): string

  /**
   * @description 类型匹配通用函数
   * @param {returnTypeStr | Function} fn 可以是已经存在的工具函数名称，或者你自定义的函数
   * @param {any} data 传入想要判断类型的参数
   * @returns 返回你传入函数(fn)的返回值
   */
  function matchType(fn: string | Function, data: any): any
}