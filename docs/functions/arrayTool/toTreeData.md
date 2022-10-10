---
title: 数组操作
titleTemplate: toTreeData
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 将特定数组转为树形结构。

## 1-函数引入

```js 
  import { toTreeData } from 'tj-jstools'
```
## 2-函数声明
```ts
declare type treeOption = {
    pidName: string;
    idName: string;
    childName: string;
    initPid: string | number;
};
declare const toTreeData: (targetArr: any[], options?: treeOption) => any[];
```

## 3-使用示例
**模拟数据**
::: details 模拟数据详情
```ts
const testArr = [
  {
    id:'1',
    pid:'0',
    label:'省/直辖市',
    value:'重庆'
  },
  {
    id:'2',
    pid:'0',
    label:'省/直辖市',
    value:'四川'
  },
  {
    id:'3',
    pid:'2',
    label:'市/区',
    value:'成都'
  },
  {
    id:'4',
    pid:'1',
    label:'市/区',
    value:'九龙坡'
  },
  {
    id:'5',
    pid:'1',
    label:'市/区',
    value:'大渡口'
  },
  {
    id:'6',
    pid:'4',
    label:'镇/街道',
    value:'九龙镇'
  }
]
```
:::


### 3.1- 简单使用
```ts
 const res:any[] = toTreeData(testArr)
```
::: details 打印结果
```json
[
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

### 3.2- 开启配置使用

```ts
const options = {
    pidName: 'pid',
    idName: 'id',
    childName: 'children',
    initPid: '0'
}
const res:any[] = toTreeData(testArr,options)
```
据我了解通常设计数据库表时，主键字段一般都是`id`,父ID一般是`pid`,子数据字段一般是叫`children`。

但是通常开发时，都是安装项目或者公司约束制定字段名称的，所以这里提供配置供开发者自定义设置字段名称。

## 4-配置详解
- idName
默认值：`id`,一般指主键字段的名称，你可以自定义为`type_id`、`menu_id`等等

- pidName
默认值：`pid`,一般指父id字段的名称，你可以自定义为其他名称，如：`parent_id`等

- childName
默认值：`children`, 一般指树形结构的子数据字段名称，你可以自定义为其他名称，如：`childList`等

- initPid
默认值：`0`,一般指根节点的值。