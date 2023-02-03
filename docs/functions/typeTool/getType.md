---
title: 类型判断
titleTemplate: getType
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据的细粒度的数据类型，返回结果有以下这几种类型：`string` 、 `bigint` 、 `boolean` 、 `symbol` 、 `undefined` 、 `object` 、 `function` 、 `array` 、 `object` 、 `date` 、 `null` 、 `int` 、 `float` 、 `infinite` 、 `NaN`。

**注意：** 这里返回的类型并没有：`number` | `finite`,因为`number`类型已经被细粒度的类型细化, 而`finite`则被`int`和`float`类型代替

## 1-函数引入

```js 
  import { getType } from 'tj-jstools'
```
## 2-函数声明

```ts 
declare type returnTypeStr = 'string' | 'bigint' | 'boolean' | 'symbol' 
| 'undefined' | 'object' | 'function' | 'array' | 'object' | 'date' 
| 'null' | 'int' | 'float' | 'infinite' | 'NaN';

declare function getType(params: unknown): returnTypeStr
```

## 3-使用示例

```ts 
  const res1 = getType(Array) // function
  const res2 = getType({}) // object
  const res3 = getType(Array(1)) // array
  const res4 = getType() // undefined
  const res5 = getType(5) // int
  const res6 = getType(1/0) // infinite
```
::: tip
特别注意该方法返回的类型里面没有：`number` | `finite`; <br/>
当参数为空的时候返回的是`undefined`
:::
