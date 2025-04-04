---
title: 时间操作
titleTemplate: getSeason
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 根据指定日期获取对应的季节

## 1. 函数引入

```js
import { getSeason } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getSeason: (date?: string) => string;
```

## 3. 使用示例

### 3.1 获取当前季节

```ts
const season = getSeason();
console.log(season);
// 输出: "春季" 或 "夏季" 或 "秋季" 或 "冬季"
```

### 3.2 获取指定日期的季节

```ts
const season = getSeason('2023-03-21');
console.log(season);
// 输出: "春季"
```

### 3.3 处理边界日期

```ts
const season = getSeason('2023-06-21');
console.log(season);
// 输出: "夏季"
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| date | string | 否 | 要查询的日期，格式为`YYYY-MM-DD`，默认为当前日期 |

## 5. 返回值

返回一个`string`，表示对应的季节，可能的值有：
- "春季"：3月1日 - 5月31日
- "夏季"：6月1日 - 8月31日
- "秋季"：9月1日 - 11月30日
- "冬季"：12月1日 - 2月28/29日

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 如果输入的日期格式不正确，将返回当前日期的季节
3. 支持闰年日期
4. 季节划分基于中国的气候特征

::: tip
可以使用`dayjs`库对输入的日期进行格式化后再传入该函数
:::
