---
title: 数组操作
titleTemplate: treeToFlat
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 将树形结构的数据扁平化为一维数组。

## 1-函数引入

```js 
  import { treeToFlat } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const treeToFlat: (targetArr: any[], childName?: string) => any[];
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
 const res:any[] = treeToFlat(testArr)
```
::: details 打印结果
```json
[
    {
        "id": "1",
        "pid": "0",
        "label": "省/直辖市",
        "value": "重庆"
    },
    {
        "id": "4",
        "pid": "1",
        "label": "市/区",
        "value": "九龙坡"
    },
    {
        "id": "6",
        "pid": "4",
        "label": "镇/街道",
        "value": "九龙镇"
    },
    {
        "id": "5",
        "pid": "1",
        "label": "市/区",
        "value": "大渡口"
    },
    {
        "id": "2",
        "pid": "0",
        "label": "省/直辖市",
        "value": "四川"
    },
    {
        "id": "3",
        "pid": "2",
        "label": "市/区",
        "value": "成都"
    }
]
```
:::

### 3.2- 配置childName

```ts
const childName:string = 'children'
const res:any[] = treeToFlat(testArr,childName)
```
- childName
默认值：`children`, 一般指树形结构的子数据字段名称，你可以自定义为其他名称，如：`childList`等
