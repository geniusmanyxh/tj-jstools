# tj-jstools 工具库
A diverse JS tool library

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/geniusmanyxh/tj-jstools/main.yml?style=plastic)&nbsp;
![npm](https://img.shields.io/npm/dw/tj-jstools?style=plastic)&nbsp;
[![codecov](https://codecov.io/gh/geniusmanyxh/tj-jstools/branch/master/graph/badge.svg?token=EXYI8985P8)](https://codecov.io/gh/geniusmanyxh/tj-jstools)&nbsp;
![NPM](https://img.shields.io/npm/l/tj-jstools?style=plastic)&nbsp;
![npm](https://img.shields.io/npm/v/tj-jstools?style=plastic)&nbsp;
![node-current](https://img.shields.io/node/v/tj-jstools?style=plastic)&nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/geniusmanyxh/tj-jstools?style=social)&nbsp;
![GitHub commit merge status](https://img.shields.io/github/commit-status/geniusmanyxh/tj-jstools/master/8dabedcffbc9f97c03ad4bed35b828a39530e0f1)&nbsp;
![GitHub language count](https://img.shields.io/github/languages/count/geniusmanyxh/tj-jstools?style=plastic)&nbsp;
![GitHub top language](https://img.shields.io/github/languages/top/geniusmanyxh/tj-jstools?style=plastic)&nbsp;
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/geniusmanyxh/tj-jstools?style=plastic)&nbsp;
![GitHub last commit](https://img.shields.io/github/last-commit/geniusmanyxh/tj-jstools?style=plastic)&nbsp;
![GitHub Release Date](https://img.shields.io/github/release-date/geniusmanyxh/tj-jstools?style=plastic)

- [官方使用文档地址：http://jstools.itbooks.work](http://jstools.itbooks.work)
- [GitHub 使用文档地址：https://geniusmanyxh.github.io/tj-jstools/](https://geniusmanyxh.github.io/tj-jstools/)

前端业务工具库

使用`TypeScript`编写有关js数据类型、浏览器信息、浏览器存储、url、字符串、数值、数组、对象等相关操作，让业务逻辑简单化。

---

[TOC]

----

## 🛠️安装

**npm方式**

```sh
npm install tj-jstools
```

**浏览器方式**

- [jsdelivr的umd格式地址](https://cdn.jsdelivr.net/npm/tj-jstools@1.2.1/static/umd/index.js)
```js
<script src="https://cdn.jsdelivr.net/npm/tj-jstools@1.3.2/static/umd/index.js"></script>
<script>
  const {_tj} = window
  console.log(_tj);
</script>
```
引入后，查看全局变量中的`window._tj`对象，里面包含了所有工具函数。

---

## 📖简单使用的Demo

#### 判断数据类型Demo

```typescript
import { isInt, isFloat, isNumber} from 'tj-jstools'

const isNumRes = isNumber(12.9); // true
const isIntRes = isInt(12.9); // false
const isFloatRes = isFloat(12.9); // true

```

当你想确定某一个变量或者值，是否和你预想的一样是可以使用以上这些数据类型判断函数。

当你想获取某一个变量或者值具体的数据类型时，你可以使用以下函数：

```typescript
import { getType, getArrayAllType, getObjectAllType} from 'tj-jstools'

const getTypeRes1 = getType(Array(1)) // array
const getTypeRes2 = getType({}) // object
const getTypeRes3 = getType() // undefined
const getTypeRes4 = getType(1/0) // infinite

// 判断数组里面的数据类型
 const arr = [true,null,undefined,1/0,5,5.01,{},[],()=>{},NaN,'']
 const arrRes = getArrayAllType(arr) 
  //['boolean', 'null', 'undefined', 'infinite', 'int', 'float','object',
  // 'array','function','NaN','string']
 
// 判断对象里面的数据类型
 const testObj = {
    a: true,
    b: null,
    c: undefined,
    d: 6,
    e: 6.01,
    f: 1/0,
    g: {},
    h: [],
    i: () => {}
  }
  const objRes = getObjectAllType(testObj)
  /*
[
  'boolean', 'null', 'undefined', 'int', 'float','infinite',
  'object',  'array', 'function'
]
  */
```

---

#### 浏览器缓存（cookie/localStorage/sessionStorage）Demo

```typescript
import { newStorage } from 'tj-jstools'
const Coptions = {
  prefix:'tj',
  linkSign: '@',
  suffix:'jstools',
  expireTime: 2,
  unitTime: 'd'
}
// 创建一个操作Cookie的实例
const CInstance = newStorage('cookie',Coptions)

//创建一个操作localStorage的实例
const LInstance = newStorage('local',Coptions)

// 创建一个操作sessionStorage的实例
const SInstance = newStorage('session',Coptions)

// 保存和获取cookie值
CInstance.setFun('test','testValue')
CInstance.getFun('test') // tj@test@jstools: testValue ; 过期时间：2天

// 保存和获取localStorage值
LInstance.setFun('test','testValue')
LInstance.getFun('test') // tj@test@jstools: testValue ; 过期时间：2天

// 保存和获取sessionStorage值
SInstance.setFun('test','testValue')
SInstance.getFun('test') // tj@test@jstools: testValue ; 过期时间：2天
```

**注意：**

- **对sessionStorage设置过期时间，其实效果不大，会随着浏览器的关闭而消亡**

- **如果cookie不设置expires，cookie 会在对话结束时过期**

- **具体操作可以查看文档：[https://geniusmanyxh.github.io/tj-jstools/](https://geniusmanyxh.github.io/tj-jstools/)**

---



## 👉各类API列表

### 数据类型篇(DataType)

| 序号 |    名称      | 功能简介                    |
| ---- | :--------------:  | --------------------------- |
| 1    |  `isBoolean` | 判断数据是否是`boolean`类型 |
| 2    |  `isString`  | 判断数据是否是`string`类型  |
| 3    |  `isNumber`  | 判断数据是否是`number`类型  |
| 4    |  `isSymbol`  | 判断数据是否是`symbol`类型  |
| 5    |  `isUndefined` | 判断数据是否是`undefined`类型  |
| 6    |  `isBigint` | 判断数据是否是`bigint`类型  |
| 7    |  `isInt` | 判断数据是否是`int`类型  |
| 8    |  `isFloat` | 判断数据是否是`float`类型  |
| 9    |  `isNaN`| 判断数据是否是`NaN`类型  |
| 10   |  `isFinite`| 判断数据是否是`finite`类型  |
| 11   |  `isNull` | 判断数据是否是`null`类型  |
| 12   |  `isArray` | 判断数据是否是`array`类型  |
| 13   |  `isDate` | 判断数据是否是`date`类型  |
| 14   |  `isFunction` | 判断数据是否是`function`类型  |
| 15   |  `isObject` | 判断数据是否是`object`类型  |
| 16   |  `getType` | 判断数据是否是`returnTypeStr`类型，并返回类型 |
| 17   |  `getArrayAllType` | 判断数组值是否是`returnTypeStr`类型，并返回类型 |
| 18   |  `getArrayTypeDetail` | 判断数组值是否是`returnTypeStr`类型，并返回类型 |
| 19   |  `getObjectAllType`| 判断对象属性是否是`returnTypeStr`类型，并返回类型 |
| 20   |  `getObjectTypeDetail`| 判断对象属性是否是`returnTypeStr`类型，并返回类型 |

### 字符串篇(String)

| 序号 |    名称       | 功能简介                    |
| ---- | :--------------: | --------------------------- |
| 1    | `charInCounts` | 计算字符串中指定字符出现的次数 |
| 2    | `DTMobile` | 手机号脱敏处理  |

### 数值篇(Number)


| 序号 |    名称     |  功能简介                    |
| ---- | :--------------: |  --------------------------- |
| 1    | `formatChineseRMB` | 数字金额转换为大写人民币汉字 |
| 2    | `numberThousandsFormat`| 数值千分位格式化处理 |

### 数组篇(Array)

| 序号 |    名称    | 功能简介                    |
| ---- | :--------------: | --------------------------- |
| 1    | `toTreeData` | 将特定数组转为树形结构 |
| 2    | `treeToFlat` | 将树形结构扁平化一维数组  |
| 3    | `findTreeData`| 查找符合条件的树形节点  |

### URL篇

| 序号 |    名称      | 功能简介                    |
| ---- | :--------------: | --------------------------- |
| 1    | `getUrlParams` | 获取url路径参数 |
| 2    | `converParamsToUrl` | 拼接参数到url路径上  |

### 浏览器篇

| 序号 |    名称      | 功能简介                    |
| ---- | :--------------: | --------------------------- |
| 1    | `isFull` | 判断当前是否全屏 |
| 2    | `getFullEl` | 获取全屏元素  |
| 3    | `isFullEnabled` | 判断当前是否支持全屏功能  |
| 4    | `openFull` | 打开全屏  |
| 5    | `closeFull` | 关闭全屏  |
| 6    | `toggleFull` | 打开或者关闭全屏  |
| 7    | `scrollBackTop`| 返回浏览器顶部  |
| 8    | `scrollProgressBar`| 计算当前页面已读内容的百分比占比  |

### 浏览器缓存篇(Cookie/LoaclStorage/SessionStorage)

| 序号 |    名称     | 功能简介                    |
| ---- | :--------------: | --------------------------- |
| 1    | `newStorage`| 生成一个可操作的浏览器缓存实例 |

**实例方法-列表**

| 序号 |    名称      | 功能简介                    |
| ---- | :--------------: | --------------------------- |
| 1    | `setFun`| 设置浏览器缓存的方法 |
| 2    | `getFun` | 获取浏览器缓存的方法 |
| 3    | `delFun`| 移除浏览器缓存的方法 |
| 4    | `existFun`| 监测浏览器缓存的方法 |
| 5    | `allkey`| 获取浏览器缓存的key值唯一标识的方法 |
| 6    | `clearFun` | 批量清除浏览器缓存的方法 |
