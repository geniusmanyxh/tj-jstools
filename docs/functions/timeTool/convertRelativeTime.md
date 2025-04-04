---
title: 时间操作
titleTemplate: convertRelativeTime
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 将相对时间字符串转换为具体的日期时间

## 1. 函数引入

```js
import { convertRelativeTime } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const convertRelativeTime: (relativeTime: string) => dayjs.Dayjs;
```

## 3. 使用示例

### 3.1 基本使用

```ts
const date = convertRelativeTime('两天后');
console.log(date.format('YYYY-MM-DD')); // 输出两天后的日期
```

### 3.2 处理过去时间

```ts
const date = convertRelativeTime('三天前');
console.log(date.format('YYYY-MM-DD')); // 输出三天前的日期
```

### 3.3 处理复杂表达式

```ts
const date = convertRelativeTime('下周一下午三点');
console.log(date.format('YYYY-MM-DD HH:mm')); // 输出下周一下午三点的时间
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| relativeTime | string | 是 | 相对时间表达式，支持中文和英文 |

## 5. 返回值

返回一个`dayjs.Dayjs`对象，表示转换后的具体日期时间。

## 6. 注意事项

1. 输入的相对时间表达式必须包含明确的时间量词（如：天、周、月、年等）
2. 支持的时间单位包括：秒、分钟、小时、天、周、月、年
3. 支持的时间方向包括：前、后、上、下、本
4. 返回的时间对象可以继续使用`dayjs`的方法进行格式化或其他操作

::: tip
建议使用`dayjs`的`format`方法将返回的`Dayjs`对象转换为需要的字符串格式
:::
