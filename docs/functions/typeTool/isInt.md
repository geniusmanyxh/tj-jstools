---
title: 类型判断
titleTemplate: isInt
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个整型(`int`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isInt } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isInt: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isInt(5) // true
  const res2:boolean = isInt(5.00) // true
  const res3:boolean = isInt(5.01) // false
```
::: tip
`isInt`方法是采用`Number.isInteger()`方法实现的，所以对于`5.00、6.00等等`此类特殊的小数，
所以`isInt`方法判断这样特殊的数据得到的结果是`true`
:::
## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::