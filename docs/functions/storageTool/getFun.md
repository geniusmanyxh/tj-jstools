---
title: 浏览器缓存实例方法
titleTemplate: getFun
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 一个可以获取的浏览器缓存(`localStorage`、`sessionStorage`、`Cookie`)的实例方法

**参数：**

- `key: string(任意非空字符串)`
- `options:{prefix:'pre',...}`

**注意：** 如果缓存没有对应的 key，返回的是`undefined`

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
这里假设实例的配置属性全是初始值，未被更改。
### 3.1-简单使用
```ts
Instance.getFun('key')
// key:test
```
### 3.2-获取特定前缀key对应的缓存
```ts
Instance.getFun('key1',{prefix:'tj'})
// tj.key1: test prefix
```
### 3.3-获取特定连接符号key对应的缓存
```ts
Instance.getFun('key1',{prefix:'tj',linkSign:'@'})
// undefined

Instance.getFun('key2',{prefix:'tj',linkSign:'@'})
// tj@key2: test linkSign
```
::: warning 
对于连接符号来说，需要前缀或者后缀的支持，如果二者都为空，则连接符号则是无效的值
:::

### 3.4-获取特定后缀key对应的缓存
```ts
Instance.getFun('key1',{prefix:'tj',linkSign:'@',suffix:'tool'})
// undefined

Instance.getFun('key3',{prefix:'tj',linkSign:'@',suffix:'tool'})
// tj@key3@tool: test suffix
```

### 3.5-对于有特定的配置的实例如何获取一个普通的key值对应的缓存

```ts
const Instance = newStorage('local',{prefix:'tj',linkSign:'@',suffix:'tool'})

```
对于以上初始化的实例，我们只能获取到对应的`"tj@key3@tool": "test suffix"`这样一个测试案例。

如何去获取`"key": "test"`这样一个前缀后缀都没有的测试案例呢？

我们可以可以自定义配置参数来实现
```ts
Instance.getFun('key',{prefix:'',suffix:''})
// key: test
```
我们可以通过配置参数来实现各种各样的筛选功能。

::: warning 对于过期的缓存
对于过期的缓存，该方法返回的都是`undefined`.
:::