import {
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isBigint,
} from './type_tool/basic'
import { isFloat, isInt, isFinite, isNaN, isInfinite } from './type_tool/numDel'
import {
  isNull,
  isArray,
  isDate,
  isFunction,
  isObject,
} from './type_tool/objDel'
import {
  getType,
  getArrayAllType,
  getArrayTypeDetail,
  getObjectAllType,
  getObjectTypeDetail,
} from './type_tool/complexFun'

import { getUrlParams, converParamsToUrl } from './url_tool'

const tjUrl = {
  getUrlParams,
  converParamsToUrl,
}

const tjType = {
  getType,
  getArrayAllType,
  getArrayTypeDetail,
  getObjectAllType,
  getObjectTypeDetail,
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isBigint,
  isInt,
  isFloat,
  isNaN,
  isFinite,
  isInfinite,
  isNull,
  isArray,
  isDate,
  isFunction,
  isObject,
}

export {
  getUrlParams,
  converParamsToUrl,
  getType,
  getArrayAllType,
  getArrayTypeDetail,
  getObjectAllType,
  getObjectTypeDetail,
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isBigint,
  isInt,
  isFloat,
  isNaN,
  isFinite,
  isInfinite,
  isNull,
  isArray,
  isDate,
  isFunction,
  isObject,
}
