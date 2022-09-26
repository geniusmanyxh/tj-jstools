---
title: 类型判断
titleTemplate: isInfinite
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个无限数值(`infinite`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isInfinite } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isInfinite: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isInfinite(5) // false
  const res2:boolean = isInfinite(5.02) // false
  const res3:boolean = isInfinite(Infinity) // true
  const res4:boolean = isInfinite(1/0) // true
```
::: tip
`isInfinite`方法是采用`Number.isFinite()`方法实现的，与方法`isFinite`是对立的，其结果与`isFinite`方法得到的结果相反。
:::
## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::