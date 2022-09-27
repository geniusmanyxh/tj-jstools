---
title: URL操作
titleTemplate: converParamsToUrl
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 将参数拼接到url地址上，并组合为一个字符串数据格式返回。

**返回对象：** `string`

## 1-函数引入

```js 
  import { converParamsToUrl } from 'tj-jstools'
```
## 2-函数声明

```ts 
declare type encodeUrlType  = 'noneType' | 'encodeURIType' | 'encodeURIComponentType';
interface IConverParamsConfig {
    url: string;
    hashValue: string;
    encodeUrlType: encodeUrlType;
}

declare function converParamsToUrl(urlParams:object):string
declare function converParamsToUrl(urlParams:object,options?:IConverParamsConfig):string
```

## 3-使用示例
我这里将URL地址分为3个部分 <br/>
URL地址：1、（域名+api路径）—— 2、(携带参数) —— 3、(哈希值) <br/>
URL示例（默认当前地址栏）：<br/> `https://jstools.itbooks.work/functions?tool=urlTool&fun=getUrlParams#code`

### 示例1：converParamsToUrl(urlParams:object)
```ts 
  const testUrlParams = {
    tool: 'newUrltool',
    name: 'tj'
  }
  const res1:IParamsType = converParamsToUrl(testUrlParams) 
// 这里新的参数tool=newUrltool 替换了原来的 tool=urlTool  且原来的哈希值也被保留了下来
// https://jstools.itbooks.work/functions?tool=newUrltool&fun=getUrlParams&name=tj#code
```
在以上示例中，新的参数`tool=newUrltool` 替换了原来的 `tool=urlTool`  且原来的`哈希值(#code)`也被保留了下来

**注意： 当`url`原有的参数和新的参数的`key`值重复的时候，会被新的参数代替，如果没有配置新的`哈希值(hash)`，旧的哈希值会被保留**

::: tip
当没有在`options`参数里面配置`url`地址时，默认取值：`window.location.href` <br/>

参考MDN地址：[window.location.href](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/href)
:::

### 示例2：converParamsToUrl(urlParams:object,options?:IConverParamsConfig)

```ts 
  const testUrlParams = {
    tool: 'newUrltool',
    name: 'tj',
    city: '重庆'
  }
  const res2:string = converParamsToUrl(testUrlParams,{hashValue:'#address',encodeUrlType:'encodeURIComponentType'})
  // https://jstools.itbooks.work/functions?tool=newUrltool&fun=getUrlParams&name=tj&city=%E9%87%8D%E5%BA%86#address
```
在以上示例中，新的参数`tool=newUrltool` 替换了原来的 `tool=urlTool`, 且原来的`哈希值(#code)`也被`#address`替换了。
另外，因为出现了中文，我们这里配置了url加密方式：`encodeURIComponent`,对中文进行加密


## 4-OPTIONS配置详解
```ts
const ConverParamsConfig: IConverParamsConfig = {
  url: globalThis?.location?.href, // url地址
  hashValue: '', // 哈希值
  encodeUrlType: 'noneType', // 加密方式
}
```
**【url】**
- 默认值：浏览器当前地址[window.location.href](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/href)
- 可以自定义配置该参数

**【hashValue】** 哈希值
- URL 片段标识符，参考MDN地址：[hash](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash)
- 如果没有配置，原来有哈希值则保留；如果配置了新的，则新增或者替换原来的哈希值


**【encodeUrlType】** 编码参数的方式
- noneType：  默认不编码
- encodeURIType： 使用[encodeURI](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)方法编码
- encodeURIComponentType： 使用[encodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)方法编码
