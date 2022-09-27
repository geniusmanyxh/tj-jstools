---
title: 类型判断
titleTemplate: getArrayAllType
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数组里面下标值对应的细粒度的数据类型，返回结果有以下这几种类型组成的一个数组：`string` 、 `bigint` 、 `boolean` 、 `symbol` 、 `undefined` 、 `object` 、 `function` 、 `array` 、 `object` 、 `date` 、 `null` 、 `int` 、 `float` 、 `infinite` 、 `NaN`。

**返回数组：** `string[] | Array<returnTypeStr>`

**注意：** 这里返回的类型并没有：`number` | `finite`,因为`number`类型已经被细粒度的类型细化, 而`finite`则被`int`和`float`类型代替

## 1-函数引入

```js 
  import { getArrayAllType } from 'tj-jstools'
```
## 2-函数声明

```ts 
declare type returnTypeStr = 'string' | 'bigint' | 'boolean' | 'symbol' 
| 'undefined' | 'object' | 'function' | 'array' | 'object' | 'date' 
| 'null' | 'int' | 'float' | 'infinite' | 'NaN';

declare function getArrayAllType(params: any[]): returnTypeStr[];
```

## 3-使用示例

```ts 
  const arr:any[] = [true,null,undefined,1/0,5,5.01,{},[],()=>{},NaN,'']
  const res1:returnTypeStr[] = getArrayAllType(arr) 
  //['boolean', 'null', 'undefined', 'infinite', 'int', 'float','object',
  // 'array','function','NaN','string']

```
::: tip
特别注意该方法返回的类型数组里面没有：`number` | `finite`;<br/>
:::

::: danger ERROR
该方法的参数是一个数组,且不能为空,否则将抛出错误

```js
Uncaught Error: getXXXX方法的参数不能为空！
```
:::
