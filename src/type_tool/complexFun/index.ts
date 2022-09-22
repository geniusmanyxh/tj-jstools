import * as numT from '../numDel'
import * as objT from '../objDel'
import {paramsNullError} from '../../common/paramUtils'

type returnTypeStr =
  | 'string'
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

type arrayTypeDetail = {
  index: string | number
  value: any
  type: returnTypeStr
}

type objectTypeDetail = {
  key: string
  value: any
  type: returnTypeStr
}

// 定义一个typeof可以直接判断出来的单一类型数组
let simpleTypeArr = [
  'string',
  'bigint',
  'boolean',
  'symbol',
  'undefined',
  'function',
]

function getType(params: unknown): returnTypeStr {
  if (arguments.length === 0) {
    console.warn('getType方法没有接收到参数,返回的类型为undefined')
    return 'undefined'
  }
  let rtnStr: returnTypeStr | 'number' = 'string'
  let typeStr: returnTypeStr | 'number' = typeof params
  let typeFlag = simpleTypeArr.includes(typeStr)

  if (typeFlag) {
    rtnStr = typeStr
  } else {
    if (typeStr === 'number') {
      if (numT.isInt(params)) {
        rtnStr = 'int'
      } else if (numT.isFloat(params)) {
        rtnStr = 'float'
      } else if (numT.isNaN(params)) {
        rtnStr = 'NaN'
      } else if (numT.isInfinite(params)) {
        rtnStr = 'infinite'
      }
    } else if (typeStr === 'object') {
      if (objT.isNull(params)) {
        rtnStr = 'null'
      } else if (objT.isObject(params)) {
        rtnStr = 'object'
      } else if (objT.isArray(params)) {
        rtnStr = 'array'
      } else if (objT.isFunction(params)) {
        rtnStr = 'function'
      } else if (objT.isDate(params)) {
        rtnStr = 'date'
      }
    }
  }

  return rtnStr as returnTypeStr
}

function getArrayAllType(params: any[]): returnTypeStr[] {
  if (!objT.isArray(params)) {
    paramsNullError("","getArrayAllType方法接收的参数应该是一个数组")
  }
  let rtnArr: returnTypeStr[] = []
  if (arguments.length > 0 && params.length > 0) {
    for (let i = 0; i < params.length; i++) {
      let val = params[i]
      rtnArr.push(getType(val))
    }
  } 
  return rtnArr
}

function getArrayTypeDetail(params: any[],selectType?: returnTypeStr | 'number'): arrayTypeDetail[] {
  if (!objT.isArray(params)) {
    paramsNullError("","getArrayTypeDetail方法接收的参数应该是一个数组")
  }
  let resArr: arrayTypeDetail[] = []
  if (arguments.length > 0) {
    let selectArr: arrayTypeDetail[] = []
    let allArr: arrayTypeDetail[] = []

    for (let i = 0; i < params.length; i++) {
      let index = i
      let value = params[i]
      let type:returnTypeStr = getType(value)

      allArr.push({ index, value, type })

      if (selectType) {
        if (selectType === 'number' && (['int','float'].includes(type))) {
          selectArr.push({ index, value, type })
        } else if(selectType === type) {
          selectArr.push({ index, value, type })
        }
        continue
      }
    }

    if (selectType) {
      resArr = [...selectArr]
    } else {
      resArr = [...allArr]
    }
  }

  return resArr
}

function getObjectAllType(params: object):returnTypeStr[] {
  if (!objT.isObject(params)) {
    paramsNullError("","getObjectAllType方法接收的参数应该是一个对象")
  }
  let resArr:returnTypeStr[] = []
  if (arguments.length > 0) {

    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        let val = params[key]
        resArr.push(getType(val))
      }
    }
  }

  return resArr
}

function getObjectTypeDetail(params:object, selectType?:returnTypeStr | 'number'):objectTypeDetail[] {
  if (!objT.isObject(params)) {
    paramsNullError("","getObjectTypeDetail方法接收的参数应该是一个对象")
  }
  let resArr:objectTypeDetail[] = []
  if (arguments.length > 0) {
   
    let selectArr:objectTypeDetail[] = []
    let allArr:objectTypeDetail[] = []

    for (const key in params) {
        
      if (Object.hasOwnProperty.call(params, key)) {
        let value = params[key]
        let type = getType(value)

        allArr.push({ key, value, type })

        if (selectType) {
          if (selectType === 'number' && (['int','float'].includes(type))) {
            selectArr.push({ key, value, type })
          } else if(selectType === type) {
            selectArr.push({ key, value, type })
          }
        }
        continue
        
      }
    }
   
    if (selectType) {
      resArr = [...selectArr]
    } else {
      resArr = [...allArr]
    }
  }
 
  return resArr
}

export { getType, getArrayAllType, getArrayTypeDetail, getObjectAllType, getObjectTypeDetail }
