---
title: 浏览器缓存实例方法
titleTemplate: setFun
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 一个可以设置的浏览器缓存(`localStorage`、`sessionStorage`、`Cookie`)的实例方法，该方法无返回值。

**参数：**

- `key: string(任意非空字符串)`
- `value: any`
- `options:{prefix:'pre',...}`

**注意：** 如果`value`为`undefined`、`null`这种特殊类型，会转换为字符串：`'undefined'`、`'null'`

## 1-创建缓存实例

```js
  import { newStorage } from 'tj-jstools'
  const Instance = newStorage('cookie',{prefix:'',...})
  // or
  const Instance = newStorage('local',{prefix:'',...})
  // or
  const Instance = newStorage('session',{prefix:'',...})
```

## 2-具体使用

### 2.1-简单使用

这里不使用配置参数，默认使用初始化配置属性值

```ts
Instance.setFun('key', { obj: 'test setFun' })
// key:{obj:'test setFun'}
```

对于非`string`类别的数据来说，其值是经过`JSON.stringify`转换以及`encodeURIComponent`编码处理的.

**详情参见：**

- [JSON.stringify](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [encodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

### 2.2-设置前缀(prefix)

```ts
const setOptions = { prefix: 'tj' }
Instance.setFun('key', { obj: 'test setFun' }, setOptions)
// tj.key:{obj:'test setFun'}
```

对于 prefix 配置属性,指的是给 key 值追加`前缀`以及`连接符号`,默认的连接符号：`.`

### 2.3-设置连接符号(linkSign)

```ts
const setOptions = { prefix: 'tj', linkSign: '@' }
Instance.setFun('key', { obj: 'test setFun' }, setOptions)
// tj@key:{obj:'test setFun'}
```

对于连接符号来说，前缀或者后缀不能为空，否则连接符号无效

### 2.4-设置后缀(suffix)

```ts
const setOptions = { prefix: 'tj', linkSign: '@', suffix: 'jstools' }
Instance.setFun('key', { obj: 'test setFun' }, setOptions)
// tj@key@jstools:{obj:'test setFun'}
```

### 2.5-设置过期时间(expireTime)

```ts
const setOptions = {
  prefix: 'tj',
  linkSign: '@',
  suffix: 'jstools',
  expireTime: 2000,
}
Instance.setFun('key', { obj: 'test setFun' }, setOptions)
// tj@key@jstools:{obj:'test setFun'}
```

这里的`expireTime:2000`代表的意思是 2000ms(2 秒)后缓存失效，因为默认的时间单位就是毫秒：`ms`

### 2.6-设置时间单位(unitTime)

```ts
const setOptions = {
  prefix: 'tj',
  linkSign: '@',
  suffix: 'jstools',
  expireTime: 2,
  unitTime: 'h',
}
Instance.setFun('key', { obj: 'test setFun' }, setOptions)
// tj@key@jstools:{obj:'test setFun'}
```

这里的`expireTime:2,unitTime:'h'`代表的含义是 2 小时候缓存失效，因为这里的时间单位是`h`,覆盖了初始化的单位`ms`

## 3-对于Cookie的配置拓展
由于本库对于cookie的操作依赖了`js-cookie`依赖，可以根据需求添加对应的配置属性：`['expires','path','domain','secure', 'sameSite',]`

```ts
const setOptions = {
  prefix: 'tj',
  linkSign: '@',
  suffix: 'jstools',
  expireTime: 2,
  unitTime: 'h',
  path:'/dist',
  secure:true
  expires: 1000
}
Instance.setFun('key', { obj: 'test setFun' }, setOptions)
// tj@key@jstools:{obj:'test setFun'}
```

::: warning 特别注意：expires属性的权重
  在本工具中expireTime的权重高于expires, 如果同时设置了两个属性的话只有expireTime的值会生效，
  所有请在二者选择其中一个使用。

  另外在js-cookie中，expires为数字的时候代表的具体的天数
  ```ts
  const setOptions = {expires:5} 
  // 这里代表cookie值的有效期是5天
  ```
  如果你想设置少于一天的有效期的话需要以下这样

  ```ts
  const expires = new Date(new Date().getTime() + 15*60*1000)
  const setOptions = {expires} 
  // 这里代表cookie值的有效期是15分钟
  ```
:::

**详情参见**
- [具体参见`js-cookie`库文档](https://github.com/js-cookie/js-cookie#readme)
- [辅助参见MDN:`Document.cookie`地址](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie#%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%A1%86%E6%9E%B6%EF%BC%9A%E4%B8%80%E4%B8%AA%E5%AE%8C%E6%95%B4%E6%94%AF%E6%8C%81_unicode_%E7%9A%84_cookie_%E8%AF%BB%E5%8F%96%E5%86%99%E5%85%A5%E5%99%A8)