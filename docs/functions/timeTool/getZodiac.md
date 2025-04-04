---
title: 时间操作
titleTemplate: getZodiac
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 根据指定日期获取对应的生肖

## 1. 函数引入

```js
import { getZodiac } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getZodiac: (date?: string) => string;
```

## 3. 使用示例

### 3.1 获取当前年份的生肖

```ts
const zodiac = getZodiac();
console.log(zodiac); // 输出: "鼠" 或 "牛" 等
```

### 3.2 获取指定年份的生肖

```ts
const zodiac = getZodiac('2023-10-01');
console.log(zodiac); // 输出: "兔"
```

### 3.3 处理跨年日期

```ts
const zodiac = getZodiac('2023-01-01');
console.log(zodiac); // 输出: "虎"
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| date | string | 否 | 要查询的日期，格式为`YYYY-MM-DD`，默认为当前日期 |

## 5. 返回值

返回一个`string`，表示指定日期对应的生肖，可能的值为：
- "鼠"
- "牛"
- "虎"
- "兔"
- "龙"
- "蛇"
- "马"
- "羊"
- "猴"
- "鸡"
- "狗"
- "猪"

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 如果输入的日期格式不正确，将返回当前年份的生肖
3. 支持跨年日期计算
4. 生肖的计算基于农历新年，即春节作为分界点

::: tip
可以使用`dayjs`库对输入的日期进行格式化后再传入该函数
:::
