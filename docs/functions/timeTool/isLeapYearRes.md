---
title: 时间操作
titleTemplate: isLeapYearRes
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 判断指定年份是否为闰年

## 1. 函数引入

```js
import { isLeapYearRes } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const isLeapYearRes: (year?: number) => boolean;
```

## 3. 使用示例

### 3.1 判断当前年份是否为闰年

```ts
const isLeap = isLeapYearRes();
console.log(isLeap); // 输出: true 或 false
```

### 3.2 判断指定年份是否为闰年

```ts
const isLeap = isLeapYearRes(2020);
console.log(isLeap); // 输出: true
```

### 3.3 处理跨世纪年份

```ts
const isLeap = isLeapYearRes(1900);
console.log(isLeap); // 输出: false
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| year | number | 否 | 要判断的年份，默认为当前年份 |

## 5. 返回值

返回一个`boolean`，表示指定年份是否为闰年：
- `true`: 是闰年
- `false`: 不是闰年

## 6. 注意事项

1. 输入的年份必须是有效的数字
2. 如果输入的年份格式不正确，将返回当前年份的判断结果
3. 支持跨世纪年份的判断
4. 闰年判断规则：
   - 能被4整除但不能被100整除的年份是闰年
   - 能被400整除的年份是闰年

::: tip
可以使用`dayjs`库获取当前年份后再传入该函数
:::
