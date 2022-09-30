---
title: 浏览器缓存实例方法
titleTemplate: delFun
---
# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】


**功能：** 一个可以移除的浏览器缓存(`localStorage`、`sessionStorage`、`Cookie`)的实例方法，该方法无返回值

**参数：**

- `key: string(任意非空字符串)`
- `options:{prefix:'pre',...}`


## 1-创建缓存实例

```js
  import { newStorage } from 'tj-jstools'
  const Instance = newStorage('cookie',{prefix:'',...})
  // or
  const Instance = newStorage('local',{prefix:'',...})
  // or
  const Instance = newStorage('session',{prefix:'',...})
```

## 2-设置缓存测试值

```json
 "key": "test",
 "tj.key1":"test prefix",
 "tj@key2": "test linkSign",
 "tj@key3@tool": "test suffix"
```
## 3-具体使用
这里假设实例的配置属性全是初始值，未被更改。使用方法与getFun|existFun一致，只不过对于cookie可以额外的配置属性

### 3.1-简单使用
```ts
Instance.delFun('key')
Instance.getFun('key')
// undefined
```
### 3.2-移除特定前缀key对应的缓存
```ts
Instance.delFun('key1',{prefix:'tj'})
Instance.getFun('key1',{prefix:'tj'})
// undefined
```
### 3.3-移除特定连接符号key对应的缓存
```ts
Instance.delFun('key2',{prefix:'tj',linkSign:'@'})
Instance.getFun('key2',{prefix:'tj',linkSign:'@'})
// undefined
```
::: warning 
对于连接符号来说，需要前缀或者后缀的支持，如果二者都为空，则连接符号则是无效的值
:::

### 3.4-移除特定后缀key对应的缓存
```ts
Instance.delFun('key3',{prefix:'tj',linkSign:'@',suffix:'tool'})
Instance.getFun('key3',{prefix:'tj',linkSign:'@',suffix:'tool'})
// undefined
```

### 3.5-对于有特定的配置的实例如何移除一个普通的key值对应的缓存

```ts
const Instance = newStorage('local',{prefix:'tj',linkSign:'@',suffix:'tool'})

```
对于以上初始化的实例，我们只能移除到对应的`"tj@key3@tool": "test suffix"`这样一个测试案例。

如何去移除`"key": "test"`这样一个前缀后缀都没有的测试案例呢？

我们可以可以自定义配置参数来实现
```ts
Instance.delFun('key',{prefix:'',suffix:''})
Instance.getFun('key',{prefix:'',suffix:''})
// undefined
```
我们可以通过配置参数来实现各种各样的筛选功能。

## 4-对于Cookie的配置拓展
可以配置属性移除特定的cookie缓存

**详情参见**
- [具体参见`js-cookie`库文档](https://github.com/js-cookie/js-cookie#readme)
- [辅助参见MDN:`Document.cookie`地址](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie#%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%A1%86%E6%9E%B6%EF%BC%9A%E4%B8%80%E4%B8%AA%E5%AE%8C%E6%95%B4%E6%94%AF%E6%8C%81_unicode_%E7%9A%84_cookie_%E8%AF%BB%E5%8F%96%E5%86%99%E5%85%A5%E5%99%A8)