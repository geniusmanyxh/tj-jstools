import { paramsNullError } from '../../common/paramUtils'

const isBasicType = function isType(type: string) {
  const params = String(type).toLocaleLowerCase()
  return function basicType(value: unknown): boolean {
    if (arguments.length === 0) {
      paramsNullError(`is${type}方法的`)
    }

    return typeof value === params
  }
}
function isJson(value: unknown): boolean {
  if (arguments.length === 0) {
    paramsNullError(`isJson方法的`)
  }
  if (typeof value === 'string') {
    try {
      let obj = JSON.parse(value)
      if (typeof obj == 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      console.log('error：' + value + '!!!' + e)
      return false
    }
  }
  return false
}
const isBoolean = isBasicType('Boolean')
const isNumber = isBasicType('Number')
const isString = isBasicType('String')
const isUndefined = isBasicType('Undefined')
const isSymbol = isBasicType('Symbol')
const isBigint = isBasicType('Bigint')
export { isBoolean, isNumber, isString, isUndefined, isSymbol, isBigint, isJson }
