---
title: 类型判断
titleTemplate: getArrayTypeDetail
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数组的细粒度的数据类型，返回结果有以下这几种类型组成的一个数组详细结果：`string` 、 `bigint` 、 `boolean` 、 `symbol` 、 `undefined` 、 `object` 、 `function` 、 `array` 、 `object` 、 `date` 、 `null` 、 `int` 、 `float` 、 `infinite` 、 `NaN`。

**返回数组：** `[{
  index: 0 ;
  value: 'hello';
  type: 'string';
}...]`

**注意：** 这里返回的类型并没有：`number` | `finite`,因为`number`类型已经被细粒度的类型细化, 而`finite`则被`int`和`float`类型代替

## 1-函数引入

```js 
  import { getArrayTypeDetail } from 'tj-jstools'
```
## 2-函数声明

```ts 
declare type returnTypeStr = 'string' | 'bigint' | 'boolean' | 'symbol' 
| 'undefined' | 'object' | 'function' | 'array' | 'object' | 'date' 
| 'null' | 'int' | 'float' | 'infinite' | 'NaN';

declare type arrayTypeDetail = {
    index: string | number;
    value: any;
    type: returnTypeStr;
};

declare function getArrayTypeDetail(params: any[], selectType?: returnTypeStr | 'number'): arrayTypeDetail[];
```

## 3-使用示例

```ts 
  const testArr:any[] = [true,null,undefined,1/0,5,5.01,{},[],()=>{},NaN,'']
  const res1:arrayTypeDetail[] = getArrayTypeDetail(testArr) 
  /*
[
  { index: 0, value: true, type: 'boolean' },
  { index: 1, value: null, type: 'null' },
  { index: 2, value: undefined, type: 'undefined' },
  { index: 3, value: Infinity, type: 'infinite' },
  { index: 4, value: 5, type: 'int' },
  { index: 5, value: 5.01, type: 'float' },
  { index: 6, value: {}, type: 'object' },
  { index: 7, value: [], type: 'array' },
  { index: 8, value: [Function (anonymous)], type: 'function' },
  { index: 9, value: NaN, type: 'NaN' },
  { index: 10, value: '', type: 'string' }
]
  */
```
::: tip
特别注意该方法返回的类型里面没有：`number` | `finite`; <br/>
该方法接收的必须是一个数组类型的参数，且参数不能为空！
:::

**第二个参数可以筛选返回的类型**

```ts 
  const testArr:any[] = [true,null,undefined,1/0,5,5.01,{},[],()=>{},NaN,'']
  const res1:arrayTypeDetail[] = getArrayTypeDetail(testArr,'infinite') 
  /*
[ { index: 3, value: Infinity, type: 'infinite' } ]
  */
```

::: details 第二个参数是`number`时注意：
当二个参数是`number`时，返回的数据类型只有：`int` 和 `float` 类型的数据
```ts 
  const testArr:any[] = [true,null,undefined,1/0,5,5.01,{},[],()=>{},NaN,'']
  const res1:arrayTypeDetail[] = getArrayTypeDetail(testArr,'number') 
  /*
[
  { index: 4, value: 5, type: 'int' },
  { index: 5, value: 5.01, type: 'float' }
]
  */
```
:::


