/**
 * @description 封装一个关于数据类型的工具类
 * @author 天界程序员
 * @Date 2022-06-24
 */

//  "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" |
//  "object" | "date" | "null" |
//  "int" | "float" | "infinite" | "NaN"

export const GTypeTools = (() => {
  // 定义一个typeof可以直接判断出来的单一类型数组
  let simpleTypeArr = [
    'string',
    'bigint',
    'boolean',
    'symbol',
    'undefined',
    'function',
  ]

  let complexTypeArr = ['number', 'object']

  let numberTypeArr = ['int', 'float', 'infinite', 'NaN']

  let objectTypeArr = [
    '[object Null]',
    '[object Object]',
    '[object Array]',
    '[object Date]',
    '[object Function]',
  ]

  /**
   * @description 判断一个number类型的具体类型值
   * @param {number} params
   * @returns "int" | "float" | "infinite" | "NaN" | ""
   */
  function JudeNumberAccurateType(params) {
    let resStr = ''

    if (is_int(params)) {
      resStr = 'int'
    }

    if (is_float(params)) {
      resStr = 'float'
    }

    if (is_Finite(params)) {
      resStr = 'infinite'
    }

    if (is_NaN(params)) {
      resStr = 'NaN'
    }

    return resStr
  }

  /**
   * @description 判断一个object类型的具体类型值
   * @param {object} params
   * @returns "null" | "object" | "array" | "date" | "function"
   */
  function JudeObjectAccurateType(params) {
    let objTypeStr = Object.prototype.toString.call(params)

    let rtnType =
      objTypeStr === objectTypeArr[0]
        ? 'null'
        : objTypeStr === objectTypeArr[1]
        ? 'object'
        : objTypeStr === objectTypeArr[2]
        ? 'array'
        : objTypeStr === objectTypeArr[3]
        ? 'date'
        : objTypeStr === objectTypeArr[4]
        ? 'function'
        : 'object'

    return rtnType
  }

  /**
   * @description 判断参数到底是一个什么确切的类型
   * @param {any} params 
   * @returns "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" |
     "object" | "date" | "null" |  "int" | "float" | "infinite" | "NaN"
   */
  function judeParamAccurateType(params) {
    let rtnType = ''
    let typeStr = typeof params
    let typeFlag = simpleTypeArr.includes(typeStr)

    if (typeFlag) {
      rtnType = typeStr
    } else {
      if (typeStr === 'number') {
        let numTypeStr = JudeNumberAccurateType(params)
        if (numberTypeArr.includes(numTypeStr)) {
          rtnType = numTypeStr
        }
      } else if (typeStr === 'object') {
        rtnType = JudeObjectAccurateType(params)
      }
    }

    return rtnType
  }

  // 判断一个对象的所有属性是否都是同一种类型
  // 判断一个数组的所有值是否都是同一种类型
  /**
   * @description 判断一个数组中所有值一一对应的都是什么类型的值
   * @param {array} params
   * @returns ["type"...]
   */
  function getArraySubscriptType(params) {
    let resArr = []
    if (arguments.length > 0) {
      let flag1 = is_array(params)
      let flag2 = is_empty_array(params)

      if (flag1 && !flag2) {
        for (let i = 0; i < params.length; i++) {
          let val = params[i]
          resArr.push(judeParamAccurateType(val))
        }
      }
    }

    return resArr
  }

  /**
   * @description 判断一个数组中所有值一一对应的都是什么类型的值
   * @param {array} params 传入你想要获取的参数类型的数组
   * @param {string} dataType 可选参数，传入你想要获取的参数类型
   * @returns [{key:key,value:value,type:type}]
   */
  function getArraySubscriptTypeDetail(params, dataType) {
    let resArr = []
    if (arguments.length > 0) {
      let flag1 = is_array(params)
      let flag2 = is_empty_array(params)
      let dType = is_string(dataType)
      let selectArr = []
      let allArr = []

      if (flag1 && !flag2) {
        for (let i = 0; i < params.length; i++) {
          let index = i
          let value = params[i]
          let type = judeParamAccurateType(value)

          allArr.push({ index, value, type })

          if (dType && dataType === type) {
            selectArr.push({ index, value, type })
            continue
          }
        }

        if (dType) {
          resArr = [...selectArr]
        } else {
          resArr = [...allArr]
        }
      }
    }

    return resArr
  }

  /**
   * @description 返回对应类型的的数组下标数组
   * @param {Array} params 要筛选的数组
   * @param {string} type 类型
   * @returns 返回一个index值数组
   */
  function getArraySubscriptTypeIndexs(params, type) {
    let resArr = []

    if (arguments.length > 1) {
      let temArr = getArraySubscriptTypeDetail(params, type)
      temArr.forEach((item) => {
        resArr.push(item.index)
      })
    }

    return resArr
  }

  /**
   * @description 判断一个对象中所有属性一一对应的都是什么类型,并组装为一个数组返回
   * @param {object} params
   * @returns ["type"...]
   */
  function getObjOfPropertyType(params) {
    let resArr = []
    if (arguments.length > 0) {
      let flag1 = is_object(params)
      let flag2 = is_empty_object(params)
      if (flag1 && !flag2) {
        for (const key in params) {
          if (Object.hasOwnProperty.call(params, key)) {
            let val = params[key]
            resArr.push(judeParamAccurateType(val))
          }
        }
      }
    }

    return resArr
  }

  /**
   * @description 判断一个对象中所有属性一一对应的都是什么类型,并组装为一个数组对象,
   * @param {Object} params 传入你想要获取的参数类型的对象
   * @param {String} dataType 传入你想要获取的参数类型
   * @returns [{key:key,value:value,type:type}]
   */
  function getObjPropertyTypeDetail(params, dataType) {

    let resArr = []
    if (arguments.length > 0) {
     
      let flag1 = is_object(params)
      let flag2 = is_empty_object(params)
      let dType = is_string(dataType)
      let selectArr = []
      let allArr = []

      if (flag1 && !flag2) {
        for (const key in params) {
          
          if (Object.hasOwnProperty.call(params, key)) {
            let value = params[key]
            let type = judeParamAccurateType(value)

            allArr.push({ key, value, type })

            if (dType && dataType === type) {
              selectArr.push({ key, value, type })
              continue
            }
          }
        }
       
        if (dType) {
          resArr = [...selectArr]
        } else {
          resArr = [...allArr]
        }
      }
    }
   
    return resArr
  }

  /**
   * @description 返回对应类型的的对象属性的key值数组
   * @param {Object} params 要筛选的对象
   * @param {string} type 类型
   * @returns 返回一个key值数组
   */
  function getObjPropertyTypeKeys(params,type) {
    
    let resArr = []

    if (arguments.length > 1) {
      let temArr = getObjPropertyTypeDetail(params, type)
    
      temArr.forEach((item) => {
        
        resArr.push(item.key)
      })
    }

    return resArr
  }

  /**
   * @description 判断参数类型是否是一个empty object (空对象)
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_empty_object(params) {
    let flag = false
    if (arguments.length > 0) {
      flag = is_object(params)
      if (flag && Object.keys(params).length === 0) {
        flag = true
      } else {
        flag = false
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个empty array (空数组)
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_empty_array(params) {
    let flag = false
    if (arguments.length > 0) {
      flag = is_array(params)

      if (flag && params.length === 0) {
        flag = true
      } else {
        flag = false
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个array
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_array(params) {
    let flag = false
    if (arguments.length > 0) {
      let pType = Object.prototype.toString.call(params)
      if (pType === '[object Array]') {
        flag = true
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个function
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_function(params) {
    let flag = false
    if (arguments.length > 0) {
      let pType = Object.prototype.toString.call(params)
      if (pType === '[object Function]') {
        flag = true
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个object
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_object(params) {
    let flag = false
    if (arguments.length > 0) {
      let pType = Object.prototype.toString.call(params)
      if (pType === '[object Object]') {
        flag = true
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个null
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_null(params) {
    let flag = false
    if (arguments.length > 0) {
      let pType = Object.prototype.toString.call(params)
      if (pType === '[object Null]') {
        flag = true
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个undefined
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_undefined(params) {
    let flag = typeof params === 'undefined'
    return flag
  }

  /**
   * @description 判断参数类型是否是一个symbol
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_symbol(params) {
    let flag = typeof params === 'symbol'
    return flag
  }

  /**
   * @description 判断参数类型是否是一个boolean
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_boolean(params) {
    let flag = typeof params === 'boolean'
    return flag
  }

  /**
   * @description 判断参数类型是否是一个bigint
   * @param {any} params
   * @returns 是：true  | 否：false
   */
  function is_bigInt(params) {
    let flag = typeof params === 'bigint'
    return flag
  }

  /**
   * @description 判断参数类型是否是一个float
   * @param {any} params
   * @returns  是：true  | 否：false
   */
  function is_float(params) {
    let flag = false
    if (arguments.length > 0) {
      flag = is_number(params)
      if (flag) {
        let y = String(params).indexOf('.') + 1 // 获取小数点后的个数
        // let count = String(params).length - y // 获取小数点的位置

        if (y > 0) {
          flag = true
          // console.log('这个数字是小数，有' + count + '位小数')
        } else {
          flag = false
        }
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个int
   * @param {any} params
   * @returns  是：true  | 否：false
   */
  function is_int(params) {
    // 判断是否传入了参数
    let flag = false
    if (arguments.length > 0) {
      flag = is_number(params)
      if (flag && Number.isInteger(params)) {
        flag = true
      } else {
        flag = false
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个finite
   * @param {any} params
   * @returns  是：true  | 否：false
   */
  function is_Finite(params) {
    // 判断是否传入了参数
    let flag = false
    if (arguments.length > 0) {
      flag = is_number(params)
      if (flag && !Number.isFinite(params)) {
        flag = true
      } else {
        flag = false
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个NaN
   * @param {Any} params
   * @returns 是：true  | 否：false
   */
  function is_NaN(params) {
    // 判断是否传入了参数
    let flag = false
    if (arguments.length > 0) {
      flag = is_number(params)
      if (flag && Number.isNaN(params)) {
        flag = true
      } else {
        flag = false
      }
    }

    return flag
  }

  /**
   * @description 判断参数类型是否是一个number
   * @param {Any} params
   * @returns 是：true  | 否：false
   */
  function is_number(params) {
    let flag = typeof params === 'number'
    return flag
  }

  /**
   * @description 判断参数类型是否是一个string
   * @param {Any} params 参数
   * @returns 是：true  | 否：false
   */
  function is_string(params) {
    let flag = typeof params === 'string'
    return flag
  }

  /**
   * @description 根据你传入的纯函数名称或者自定义函数，来对参数进行操作
   * @param {function | string} fn 
   * @param {any} data 
   * @returns 一般返回fn 的返回结果
   */
  function matchType(fn, data) {
    let type = judeParamAccurateType(fn)
    if (type === 'function') {
      return fn.apply(globalThis, [data])
    } else if (type === 'string') {
      let funArr =  getObjPropertyTypeKeys(this,'function')
     
      if (funArr.includes(fn)) {
        return this[fn].apply(globalThis, [data])
      } else {
        throw Error('未找到该方法，请重试或者自定义函数')
      }
    } else {
      throw Error('请传入一个方法名称，或者使用自定义函数')
    }
  }

  // ============================================类型转换=================================================

  /**
   * @description 将参数转换为字符串类型
   * @param {any} params 
   * @returns 返回一个字符串
   */
  function transformTypeString(params) {
    let rtnStr = ''

    if (arguments.length > 0) {
      let pType = judeParamAccurateType(params)

      if (pType === 'string') {
        return params
      } else if (pType === 'array') {
        return params.map(String)
      } else if (pType === 'object') {
        let obj = {}
        for (const key in params) {
          if (Object.hasOwnProperty.call(params, key)) {
            obj[key] = String(params[key])
          }
        }

        return obj
      } else {
        return String(params)
      }
    }

    return rtnStr
  }

  // function transformTypeNumber(params) {}

  // function transformTypeBigint(params) {}

  // function transformTypeBoolean(params) {}

  return {
    getType: judeParamAccurateType,
    getArrayTypes: getArraySubscriptType,
    getObjectTypes: getObjOfPropertyType,
    getArrayTypeIndexs: getArraySubscriptTypeIndexs,
    getObjectTypeKeys: getObjPropertyTypeKeys,
    getArrayTypesDetail: getArraySubscriptTypeDetail,
    getObjectTypesDetail: getObjPropertyTypeDetail,
    isString: is_string,
    isNumber: is_number,
    isNaN: is_NaN,
    isInfinite: is_Finite,
    isInt: is_int,
    isFloat: is_float,
    isBigInt: is_bigInt,
    isBoolean: is_boolean,
    isSymbol: is_symbol,
    isUndefined: is_undefined,
    isNull: is_null,
    isObject: is_object,
    isFunction: is_function,
    isArray: is_array,
    isEmptyArray: is_empty_array,
    isEmptyObject: is_empty_object,

    toString:transformTypeString,
    matchType,
  }
})()

