---
title: 时间操作
titleTemplate: getConstellation
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 根据出生日期获取星座

## 1. 函数引入

```js
import { getConstellation } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getConstellation: (date: string) => string;
```

## 3. 使用示例

### 3.1 基本使用

```ts
const constellation = getConstellation('1990-01-01');
console.log(constellation); // 输出: "摩羯座"
```

### 3.2 处理不同日期

```ts
const constellation = getConstellation('1990-07-23');
console.log(constellation); // 输出: "狮子座"
```

### 3.3 处理边界日期

```ts
const constellation = getConstellation('1990-03-21');
console.log(constellation); // 输出: "白羊座"
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| date | string | 是 | 出生日期，格式为`YYYY-MM-DD` |

## 5. 返回值

返回一个`string`，表示对应的星座名称，可能的值有：
- "白羊座"
- "金牛座"
- "双子座"
- "巨蟹座"
- "狮子座"
- "处女座"
- "天秤座"
- "天蝎座"
- "射手座"
- "摩羯座"
- "水瓶座"
- "双鱼座"

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 星座划分基于西方占星学标准
3. 如果输入的日期格式不正确，将返回空字符串
4. 支持闰年日期

::: tip
可以使用`dayjs`库对输入的日期进行格式化后再传入该函数
:::
