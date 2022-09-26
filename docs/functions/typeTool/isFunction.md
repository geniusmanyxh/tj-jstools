---
title: 类型判断
titleTemplate: isFunction
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个函数(`function`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isFunction } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isFunction: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isFunction(Array) // true
  const res2:boolean = isFunction(()=>{}) // false
  const res3:boolean = isFunction(Array(1)) // false
```
::: tip
`isFunction`方法是采用`Object.prototype.toString.call(value)`方法实现的。
:::
## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::