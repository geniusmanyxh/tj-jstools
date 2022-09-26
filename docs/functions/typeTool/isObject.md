---
title: 类型判断
titleTemplate: isObject
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个对象(`object`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isObject } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isObject: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isObject({}) // true
  const res2:boolean = isObject(Array(2)) // false
  const res3:boolean = isObject([]) // false
```
::: tip
`isObject`方法是采用`Object.prototype.toString.call(value)`方法实现的。
:::
## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::