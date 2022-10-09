import {REP_MOBILE} from '../../common/RegExpMap'

/**
 * @description 手机号脱敏处理(Desensitization treatment mobile)
 * @param [strng] mobile 
 * @returns[string] 返回处理后的手机号
 */
const DTMobile = (mobile:string):string => {
  let rtnStr:string = ''
  if (typeof mobile === "string") {
    if (REP_MOBILE.test(mobile)) {
      rtnStr = mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
    } else {
      console.warn('请输入一个正确的手机号')
    }
  } else {
    console.warn('请输入一个字符串格式的手机号')
  }
  return rtnStr
}

export {DTMobile}