
function paramsNullError (prefix:string = '',customTxt?:string) {
  let deaInfo = '参数不能为空！'
  if (prefix) {
    deaInfo = prefix + deaInfo
  }
  if (customTxt) {
    deaInfo = customTxt
  }
  console.error(deaInfo)
  throw Error(deaInfo)
}

export {paramsNullError}