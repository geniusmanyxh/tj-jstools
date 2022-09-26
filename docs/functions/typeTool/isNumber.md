---
title: 类型判断
titleTemplate: isNumber
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个数值(`number`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isNumber } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isNumber: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isNumber(5) // int ===> true
  const res2:boolean = isNumber(NaN) // NaN ===> true
  const res3:boolean = isNumber(5.02) // float ===> true
  const res4:boolean = isNumber(1/0) // infinte ===> true
  const res5:boolean = isNumber('hello jstool') // string ===> false
```
::: tip
`isNumber` 方法采用的是`typeof`关键字实现的,所以并未对 `NaN、float、int、infinite` 类型的数据细分,
该四类数据类型使用 `isNumber` 方法得到的结果都是 `true`
:::

## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::