import {paramsNullError} from '../../common/paramUtils'

const isBasicType = function isType(type: string) {
  // const params = String(type).toLocaleLowerCase()
  return function basicType<T>(value: T): boolean {
    if (arguments.length === 0) {
      paramsNullError(`${value}方法的`)
    }

    return typeof value === type
  }
}

const isBoolean = isBasicType('boolean')
const isNumber = isBasicType('number')
const isString = isBasicType('string')
const isUndefined = isBasicType('undefined')
const isSymbol = isBasicType('symbol')
export {
  isBoolean,
  isNumber,
  isString,
  isUndefined,
  isSymbol
}