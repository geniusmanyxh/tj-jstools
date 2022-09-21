import {
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isBigint,
} from './basic'
import { isFloat, isInt, isFinite, isNaN, isInfinite } from './numDel'
import { isNull, isArray, isDate, isFunction, isObject } from './objDel'
import {getType, getArrayAllType, getArrayTypeDetail, getObjectAllType, getObjectTypeDetail} from './complexFun'

export {
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
