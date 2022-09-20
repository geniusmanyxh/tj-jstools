import { paramsNullError } from '../../common/paramUtils'

const objTypeMap = { 
  nullT:'[object Null]',
  ObjectT:'[object Object]',
  ArrayT:'[object Array]',
  DateT:'[object Date]',
  FunctionT:'[object Function]',
}
 

function isObjType(name:string,type:string) {

  return function (value:unknown):boolean {
    if (arguments.length === 0) {
      paramsNullError(`is${name}方法的`)
    } 
    let pType = Object.prototype.toString.call(value)    
    return pType === type
  }
}

const isNull = isObjType('Null',objTypeMap.nullT)
const isArray = isObjType('Array',objTypeMap.ArrayT)
const isObject = isObjType('Object',objTypeMap.ObjectT)
const isDate = isObjType('Date',objTypeMap.DateT)
const isFunction = isObjType('Function',objTypeMap.FunctionT)

export {isNull,isArray,isDate,isFunction,isObject}

