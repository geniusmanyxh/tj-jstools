---
title: 类型判断
titleTemplate: isFinite
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个有限数值(`finite`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isFinite } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isFinite: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isFinite(5) // true
  const res2:boolean = isFinite(5.02) // true
  const res3:boolean = isFinite(Infinity) // false
  const res4:boolean = isFinite(1/0) // false
```
::: tip
`isFinite`方法是采用`Number.isFinite()`方法实现的，所以`isFinite`方法判断`Infinity关键字、1/0无穷数`的数据得到的结果是`false`
:::
## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::