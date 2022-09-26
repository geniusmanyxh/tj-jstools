---
title: 类型判断
titleTemplate: isFloat
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个浮点数(`float`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isFloat } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isFloat: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isFloat(5) // false
  const res2:boolean = isFloat(5.00) // false
  const res3:boolean = isFloat(5.01) // true
```
::: tip
值得注意的是：`isFloat`方法是先将数值转为字符串，来确定小数点的存在的，所以对于`5.00、6.00等等`此类特殊的小数，
会被转为整型`5、6`这样的数据，所以使用`isFloat`方法判断这样特殊的数据得到的结果是`false`
:::
## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::