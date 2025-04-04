---
title: 时间操作
titleTemplate: getAmPm
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 判断指定时间是上午还是下午

## 1. 函数引入

```js
import { getAmPm } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getAmPm: (date?: string) => string;
```

## 3. 使用示例

### 3.1 基本使用

```ts
const timePeriod = getAmPm('2023-01-01 08:00');
console.log(timePeriod); // 输出: "上午"
```

### 3.2 处理下午时间

```ts
const timePeriod = getAmPm('2023-01-01 14:00');
console.log(timePeriod); // 输出: "下午"
```

### 3.3 使用当前时间

```ts
const timePeriod = getAmPm();
console.log(timePeriod); // 根据当前时间输出"上午"或"下午"
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| date | string | 否 | 要判断的时间，格式为`YYYY-MM-DD HH:mm`，默认为当前时间 |

## 5. 返回值

返回一个`string`，可能的值有：
- "上午"：当时间在00:00到11:59之间
- "下午"：当时间在12:00到23:59之间

## 6. 注意事项

1. 如果输入的日期字符串格式不正确，将返回当前时间的判断结果
2. 支持24小时制的时间格式
3. 如果未传入参数，默认使用当前时间进行判断

::: tip
可以使用`dayjs`库对输入的时间进行格式化后再传入该函数
:::
