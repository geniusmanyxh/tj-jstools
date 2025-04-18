// -------------- type_tool--------------
import {
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isBigint,
  isJson,
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
  isJson,
  isInt,
  isFloat,
  isNaN,
  isFinite,
  isInfinite,
  isNull,
  isArray,
  isDate,
  isFunction,
  isObject
}

// -------------- url_tool--------------
import { getUrlParams, converParamsToUrl } from './url_tool'

export { getUrlParams, converParamsToUrl }


// -------------- storage_tool--------------
import { newStorage } from './storage_tool'

export { newStorage }


// -------------- str_tool--------------
import { charInCounts } from './str_tool/simpleStrFun'
import { DTMobile } from './str_tool/DTMoblie'
import { createRandomVerifyCode } from './str_tool/verifyCode'

export { charInCounts, DTMobile, createRandomVerifyCode }



// -------------- browser_tool--------------
import { isFull, getFullEl, isFullEnabled, openFull, closeFull, toggleFull } from './browser_tool/screen'
import { scrollProgressBar, scrollBackTop } from './browser_tool/scroll'

export { isFull, getFullEl, isFullEnabled, openFull, closeFull, toggleFull, scrollProgressBar, scrollBackTop }

// -------------- arr_tool--------------
import { toTreeData, treeToFlat, findTreeData } from './arr_tool/TreeData'

export { toTreeData, treeToFlat, findTreeData }

// -------------- num_tool--------------
import { formatChineseRMB } from './num_tool/formatChineseRMB'
import { numberThousandsFormat } from './num_tool/numberThousandsFormat'

export { formatChineseRMB , numberThousandsFormat}

// -------------- time_tool--------------
export * from './time_tool/index'