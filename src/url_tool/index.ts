import { paramsNullError } from '../common/paramUtils'
interface IParamsType {
  [key: string]: string
}

type parseUrlType = 'splitType' | 'URLSearchParamsType' | 'RegExpType'
type decodeUrlType = 'noneType' | 'decodeURIType' | 'decodeURIComponentType'
type encodeUrlType = 'noneType' | 'encodeURIType' | 'encodeURIComponentType'
interface IParseUrlFunction {
  [key: string]: (url: string) => IParamsType
}

const ParseUrlFunction: IParseUrlFunction = {
  splitType: getUrlParamsOfSplit,
  URLSearchParamsType: getUrlParamsOfURLSearchParams,
  RegExpType: getUrlParamsOfRegExp,
}

const DecodeUrlType = {
  noneType: (url: string) => url,
  decodeURIType: decodeURI,
  decodeURIComponentType: decodeURIComponent,
}

const EncodeUrlType = {
  noneType: (url: string) => url,
  encodeURIType: encodeURI,
  encodeURIComponent: encodeURIComponent,
}

interface IConverParamsConfig {
  url: string
  hashValue: string
  encodeUrlType: encodeUrlType
}

const ConverParamsConfig: IConverParamsConfig = {
  url: globalThis?.location?.href,
  hashValue: '',
  encodeUrlType: 'noneType',
}

interface IGetUrlParamsConfig {
  url: string
  parseUrlType: parseUrlType
  decodeUrlType: decodeUrlType
}
const config: IGetUrlParamsConfig = {
  url: globalThis?.location?.search,
  parseUrlType: 'splitType',
  decodeUrlType: 'noneType',
}
function getUrlParams(): IParamsType
function getUrlParams(key?: string): string
function getUrlParams(options?: IGetUrlParamsConfig): IParamsType
function getUrlParams(
  key?: string,
  options?: IGetUrlParamsConfig
): IParamsType | string

function getUrlParams(
  key?: unknown,
  options?: IGetUrlParamsConfig
): IParamsType | string {
  let paramsObj = {}
  let opt: IGetUrlParamsConfig = config
  let keyStr: string = ''
  let urlStr: string = ''

  if (typeof arguments[0] === 'string') {
    keyStr = arguments[0]
  } else if (typeof arguments[0] === 'object') {
    opt = { ...config, ...arguments[0] }
  }

  if (typeof arguments[1] === 'object') {
    opt = { ...config, ...arguments[1] }
  }
  urlStr = DecodeUrlType[opt.decodeUrlType](opt.url)

  if (urlStr.includes('?')) {
    let urlArr: string[] = urlStr.split('?')
    if (urlArr[1].includes('#')) {
      urlStr = '?' + urlArr[1].substring(0, urlArr[1].lastIndexOf('#'))
    }
  }
  paramsObj = ParseUrlFunction[opt.parseUrlType](urlStr)

  if (keyStr) {
    return paramsObj[keyStr]
  }

  return paramsObj
}

function converParamsToUrl(urlParams: object): string
function converParamsToUrl(
  urlParams: object,
  options?: IConverParamsConfig
): string

function converParamsToUrl(
  urlParams: object,
  options?: IConverParamsConfig
): string {
  if (arguments.length === 0) {
    paramsNullError('converParamsToUrl方法的')
  }
  let urlStr: string = ''
  let paramsArr: string[] = []
  let opt: IConverParamsConfig = ConverParamsConfig

  if (options) {
    opt = { ...opt, ...options }
  }

  if (Object.prototype.toString.call(urlParams) === '[object Object]') {
    Object.entries(urlParams).forEach(([key, value]) => {
      let param = key + '=' + EncodeUrlType[opt.encodeUrlType](value)
      paramsArr.push(param)
    })
  } else {
    console.warn('拼接ur的参数格式必须是一个对象类型的数据！')
  }

  if (opt.url.includes('?')) {
    let urlArr: string[] = opt.url.split('?')
    console.log(urlArr)
    if (urlArr[1].includes('#')) {
      urlStr =
        urlArr[0] + '?' + urlArr[1].substring(0, urlArr[1].lastIndexOf('#'))

      if (!opt.hashValue.trim()) {
        opt.hashValue = urlArr[1].substring(urlArr[1].lastIndexOf('#'))
      }
    }
    if (paramsArr.length > 0) {
      const oldParamsObj: IParamsType = getUrlParamsOfSplit(urlStr)
      const newParamsObj: IParamsType = { ...oldParamsObj, ...urlParams }
      const newParamsArr: string[] = []

      Object.entries(newParamsObj).forEach(([key, value]) => {
        let param = key + '=' + EncodeUrlType[opt.encodeUrlType](value)
        newParamsArr.push(param)
      })
      console.log(newParamsArr)
      urlStr = urlArr[0] + '?' + newParamsArr.join('&') + opt.hashValue
    } else {
      urlStr = opt.url + opt.hashValue
    }
  } else {
    if (opt.url.includes('#')) {
      if (!opt.hashValue.trim()) {
        opt.hashValue = opt.url.substring(opt.url.lastIndexOf('#'))
      }
      opt.url = opt.url.substring(0, opt.url.lastIndexOf('#'))
    }
    if (paramsArr.length > 0) {
      urlStr = opt.url + '?' + paramsArr.join('&') + opt.hashValue
    } else {
      urlStr = opt.url + opt.hashValue
    }
  }

  return urlStr
}

export { getUrlParams, converParamsToUrl }

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
