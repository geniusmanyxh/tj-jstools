---
title: 时间操作
titleTemplate: getAllHolidays
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 获取指定年份的所有节假日

## 1. 函数引入

```js
import { getAllHolidays } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getAllHolidays: (year: number) => Array<string>;
```

## 3. 使用示例

### 3.1 获取当前年份的节假日

```ts
const holidays = getAllHolidays(new Date().getFullYear());
console.log(holidays);
// 输出: ["2023-01-01", "2023-01-22", "2023-01-23", ...]
```

### 3.2 获取指定年份的节假日

```ts
const holidays = getAllHolidays(2024);
console.log(holidays);
// 输出: ["2024-01-01", "2024-02-10", "2024-02-11", ...]
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| year | number | 是 | 要查询的年份 |

## 5. 返回值

返回一个`Array<string>`，包含指定年份的所有节假日日期，格式为`YYYY-MM-DD`。

## 6. 注意事项

1. 返回的节假日包括法定节假日和调休日
2. 节假日数据基于中国的法定节假日安排
3. 如果输入的年份无效，将返回空数组
4. 返回的日期数组已按时间顺序排序

::: tip
可以使用`dayjs`库对返回的日期进行进一步处理或格式化
:::
