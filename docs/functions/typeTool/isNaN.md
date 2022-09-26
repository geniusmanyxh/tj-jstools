---
title: 类型判断
titleTemplate: isNaN
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个NaN(`Not a Number`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isNaN } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isNaN: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isNaN(NaN) // true
  const res2:boolean = isNaN(Number('hello666')) // true
  const res3:boolean = isNaN(5.01) // false
```
::: tip
`isNaN`方法是采用`Number.NaN()`方法实现的.
:::
## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::