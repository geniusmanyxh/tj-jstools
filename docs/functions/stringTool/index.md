---
title: string类工具
titleTemplate: stringTool
layout: doc
head:
  - - meta
    - name: description
      content: 前端业务工具库——字符串操作
  - - meta
    - name: keywords
      content: JSTOOLS stringTool
---

# TJ-JSTOOLS ---- 字符串工具函数

## 安装

```sh
  npm i tj-jstools
```
## 简单使用

```js 
  import { charInCounts } from "tj-jstools";
  console.log(charInCounts)
  console.log(charInCounts('ss,ss,ss',',')) // 2
```

## API-列表


| 序号 |    名称     | 参数            | 功能简介                    |
| ---- | :--------------: | --------------- | --------------------------- |
| 1    | [`charInCounts`](./charInCounts.html) | str:`string`,<br/> char:`string` | 计算字符串中指定字符出现的次数 |
| 2    | [`DTMobile`](./DTMobile.html)  | mobile:`string`,<br/> | 手机号脱敏处理  |
| 2    | [`createRandomVerifyCode`](./createRandomVerifyCode.html)  | num:`number`,<br/> type:`string | string[]` | 生成一个有长度的随机字符串验证码  |
::: tip
点击API名称，可以直接进入对应API详情页面！
:::
