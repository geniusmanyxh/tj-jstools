// import * as tjType from './type_tool'
// export default {tjType}
import {
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isBigint,
} from './type_tool/basic'
import { isFloat, isInt, isFinite, isNaN, isInfinite } from './type_tool/numDel'
import { isNull, isArray, isDate, isFunction, isObject } from './type_tool/objDel'
import {getType, getArrayAllType, getArrayTypeDetail} from './type_tool/complexFun'

const tjType = {
  getType,
  getArrayAllType,
  getArrayTypeDetail,
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

export {tjType} 


