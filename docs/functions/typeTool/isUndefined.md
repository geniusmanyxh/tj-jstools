---
title: 类型判断
titleTemplate: isUndefined
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个未定义(`undefined`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isUndefined } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isUndefined: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isUndefined(5) // false
  const res2:boolean = isUndefined(null) // false
  const res3:boolean = isUndefined('') // false
  const res4:boolean = isUndefined(undefined) // true
```
::: tip
`isUndefined` 方法采用的是`typeof`关键字实现的,所以对于`null`、`空字符串('')`得到的结果是`false`
:::
## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::