interface IParamsType {
  [key: string]: string
}

type parseUrlType = 'splitType' | 'URLSearchParamsType' | 'RegExpType'
type decodeUrlType = 'noneType' | 'decodeURIType' | 'decodeURIComponentType'
interface IParseUrlFunction {
  [key: string] : (url:string)=>IParamsType
}


const ParseUrlFunction:IParseUrlFunction = {
  splitType:getUrlParamsOfSplit,
  URLSearchParamsType:getUrlParamsOfURLSearchParams,
  RegExpType:getUrlParamsOfRegExp
}

const DecodeUrlType = {
  nodeType: (url:string) => url,
  decodeURIType:decodeURI,
  decodeURIComponentType:decodeURIComponent
}

interface IGetUrlParamsConfig {
  url: string
  parseUrlType:parseUrlType
  decodeUrlType:decodeUrlType
}
const config:IGetUrlParamsConfig = {
  url: window.location.search,
  parseUrlType: "splitType",
  decodeUrlType: "noneType"
}
function getUrlParams():IParamsType
function getUrlParams(key?:string):string
function getUrlParams(options?:IGetUrlParamsConfig):IParamsType
function getUrlParams(key?:string,options?:IGetUrlParamsConfig): IParamsType | string

function getUrlParams(key?:unknown,options?:unknown): IParamsType | string {
  let paramsObj = {}
  let opt: IGetUrlParamsConfig = config
  let keyStr: string = ''
  let urlStr: string = ''

  if (typeof arguments[0] === "string") {
    keyStr = arguments[0]
  } else if (typeof arguments[0] === "object") {
    opt = {...config,...arguments[0]}
  }
  
  if (typeof arguments[1] === "object") {
    opt = {...config,...arguments[1]}
  }
  urlStr = DecodeUrlType[opt.decodeUrlType](opt.url)
  paramsObj = ParseUrlFunction[opt.parseUrlType](urlStr)

  if (keyStr) {
    return paramsObj[keyStr]
  }

  return paramsObj
}

function converParamsToUrl(url:string,urlParams:object,hashValue:string):string {
  // var params = []
  // Object.entries(requestParams).forEach(([key, value]) => {
  //   var param = key + '=' + value
  //   params.push(param)
  // })
  // return '?' + params.join('&')
  return ''
}

export {getUrlParams,converParamsToUrl}




function getUrlParamsOfSplit(url: string): IParamsType {
  // 通过 ? 分割获取后面的参数字符串
  let urlStr = url.split('?')[1]
  // 创建空对象存储参数
  let obj = {}
  if (!urlStr) {
    return obj
  }
  // 再通过 & 将每一个参数单独分割出来
  let paramsArr = urlStr.split('&')
  for (let i = 0, len = paramsArr.length; i < len; i++) {
    // 再通过 = 将每一个参数分割为 key:value 的形式
    let arr = paramsArr[i].split('=')
    obj[arr[0]] = arr[1]
  }
  return obj
}

function getUrlParamsOfURLSearchParams(url: string): IParamsType {
  let urlStr = url.split('?')[1]
  const urlSearchParams = new URLSearchParams(urlStr)
  const result = Object.fromEntries(urlSearchParams.entries())
  return result
}

function getUrlParamsOfRegExp(url: string): IParamsType {
  // \w+ 表示匹配至少一个(数字、字母及下划线), [\u4e00-\u9fa5]+ 表示匹配至少一个中文字符
  let pattern = /(\w+|[\u4e00-\u9fa5]+)=(\w+|[\u4e00-\u9fa5]+)/gi
  let result = {}
  url.replace(pattern, ($, $1, $2) => {
    result[$1] = $2
    return ''
  })
  return result
}