<div style="display:flex; flex-wrap: wrap;">
 <div style="margin-top:2px;margin-left:2px;">
 <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/geniusmanyxh/tj-jstools/main.yml?style=plastic"/>&nbsp;
 </div> 

 <div style="margin-top:2px;margin-left:2px;">  <img  alt="npm" src="https://img.shields.io/npm/dw/tj-jstools?style=plastic"/>&nbsp;</div>
 <div style="margin-top:2px;margin-left:2px;"><img alt="codecov" src="https://codecov.io/gh/geniusmanyxh/tj-jstools/branch/master/graph/badge.svg?token=EXYI8985P8"/>&nbsp;</div>
 <div style="margin-top:2px;margin-left:2px;"><img alt="NPM" src="https://img.shields.io/npm/l/tj-jstools?style=plastic"/>&nbsp;</div>
 <div style="margin-top:2px;margin-left:2px;">
  <img alt="npm" src="https://img.shields.io/npm/v/tj-jstools?style=plastic"/>&nbsp;</div>
 <div style="margin-top:2px;margin-left:2px;"><img alt="node-current" src="https://img.shields.io/node/v/tj-jstools?style=plastic"/>&nbsp;</div>
 <div style="margin-top:2px;margin-left:2px;"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/geniusmanyxh/tj-jstools?style=social"/>&nbsp;</div>
 <div style="margin-top:2px;margin-left:2px;"><img alt="GitHub commit merge status" src="https://img.shields.io/github/commit-status/geniusmanyxh/tj-jstools/master/8dabedcffbc9f97c03ad4bed35b828a39530e0f1"/>&nbsp;</div>
 <div style="margin-top:2px;margin-left:2px;">  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/geniusmanyxh/tj-jstools?style=plastic"/>&nbsp;</div>
 <div style="margin-top:2px;margin-left:2px;"><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/geniusmanyxh/tj-jstools?style=plastic"/>&nbsp;</div>

  <div style="margin-top:2px;margin-left:2px;"> <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/geniusmanyxh/tj-jstools?style=plastic"/>&nbsp;</div>
  <div style="margin-top:2px;margin-left:2px;">  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/geniusmanyxh/tj-jstools?style=plastic"/>&nbsp;</div>
  <div style="margin-top:2px;margin-left:2px;"><img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/geniusmanyxh/tj-jstools?style=plastic"/></div>  
</div>


- [官方使用文档地址：http://jstools.itbooks.work](http://jstools.itbooks.work)
- [GitHub 使用文档地址：https://geniusmanyxh.github.io/tj-jstools/](https://geniusmanyxh.github.io/tj-jstools/)

---

## 快速上手

### 安装依赖

**npm方式**
```sh
npm install tj-jstools
```

**浏览器方式**
- [jsdelivr的umd格式地址](https://cdn.jsdelivr.net/npm/tj-jstools@1.3.0/static/umd/index.js)
```js
<script src="https://cdn.jsdelivr.net/npm/tj-jstools@1.3.0/static/umd/index.js"></script>
<script>
  const {_tj} = window
  console.log(_tj);
</script>
```
引入后，查看全局变量中的`window._tj`对象，里面包含了所有工具函数。

---

### 判断数据类型

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

### 浏览器缓存（cookie/localStorage/sessionStorage）

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

[**其他详情查看函数具体文档**](../functions/index.html)