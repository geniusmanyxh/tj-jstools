---
title: 数组操作
titleTemplate: findTreeData
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 根据字段匹配条件查找指定的树形节点数据。

## 1-函数引入

```js 
  import { findTreeData } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const findTreeData: (targetArr: any[], conditions: object, cb?: Function, childName?: string) => {} | undefined;
```

## 3-使用示例
**模拟数据**
::: details 模拟数据详情
```ts
const testArr = [
    {
        "id": "1",
        "pid": "0",
        "label": "省/直辖市",
        "value": "重庆",
        "children": [
            {
                "id": "4",
                "pid": "1",
                "label": "市/区",
                "value": "九龙坡",
                "children": [
                    {
                        "id": "6",
                        "pid": "4",
                        "label": "镇/街道",
                        "value": "九龙镇"
                    }
                ]
            },
            {
                "id": "5",
                "pid": "1",
                "label": "市/区",
                "value": "大渡口"
            }
        ]
    },
    {
        "id": "2",
        "pid": "0",
        "label": "省/直辖市",
        "value": "四川",
        "children": [
            {
                "id": "3",
                "pid": "2",
                "label": "市/区",
                "value": "成都"
            }
        ]
    }
]
```
:::


### 3.1- 简单使用
```ts
 const res:object | undefined = findTreeData(testArr,{value:'九龙坡'})

 // {"id":"4","pid":"1","label":"市/区","value":"九龙坡"}
```
筛选条件的参数是一个JSON格式的对象，但是你配置的条件字段必须是源数据里面存在的。
如果不传条件参数，则返回`undefined`,如以下代码：

```ts
 const res:object | undefined = findTreeData(testArr)

 // undefined
```
### 3.2- 可以通过回调函数查询结果与返回结果一致

```ts
findTreeData(testArr,{value:'九龙坡'},(val)=>{
  console.log(val) // {"id":"4","pid":"1","label":"市/区","value":"九龙坡"}
})
```

### 3.3- 配置childName

```ts
const childName:string = 'children'
const res:object | undefined = findTreeData(testArr,{value:'九龙坡'},undefined,childName)
// {"id":"4","pid":"1","label":"市/区","value":"九龙坡"}
```
- childName
默认值：`children`, 一般指树形结构的子数据字段名称，你可以自定义为其他名称，如：`childList`等

### 3.4- 如果条件字段有多个符合节点，只返回第一个节点
```ts
 const res:object | undefined = findTreeData(testArr,{pid:'1'})

 // {"id":"4","pid":"1","label":"市/区","value":"九龙坡"}
```
以上代码的条件应该符合两个节点
```json
{"id":"4","pid":"1","label":"市/区","value":"九龙坡"}
{"id":"5","pid":"1","label":"市/区","value":"大渡口"}
```
但是只会返回其中一个！