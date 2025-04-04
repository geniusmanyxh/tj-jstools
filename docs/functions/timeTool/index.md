---
title: string类工具
titleTemplate: timeTool
layout: doc
head:
  - - meta
    - name: description
      content: 前端业务工具库——时间相关操作
  - - meta
    - name: keywords
      content: JSTOOLS timeTool
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

## API 列表

| 序号 | 函数名称 | 参数 | 返回值 | 功能描述 |
|------|----------|------|--------|----------|
| 1 | [`getSeason`](./getSeason.html) | `date?: string` | `ISeasonProp` | 获取指定日期的季节信息 |
| 2 | [`calculateStartEndTime`](./calculateStartEndTime.html) | `baseDate: dayjs.Dayjs`, `dimension: TimeDimension` | `{ start: dayjs.Dayjs, end: dayjs.Dayjs }` | 计算指定时间维度的开始和结束时间 |
| 3 | [`getStartEndTime`](./getStartEndTime.html) | `dimension: TimeDimension`, `date?: string`, `format?: string` | `{ start: string, end: string }` | 获取指定维度的开始和结束时间字符串 |
| 4 | [`getStartEndTimeByPeriod`](./getStartEndTimeByPeriod.html) | `year: number`, `periodType: FilteredTimeDimension`, `periodNumber: number`, `format?: string` | `{ start: string, end: string }` | 根据年份、周期类型和周期数获取开始和结束时间 |
| 5 | [`getWeekday`](./getWeekday.html) | `date?: string` | `string` | 获取指定日期的星期（中文） |
| 6 | [`getAmPm`](./getAmPm.html) | `date?: string` | `string` | 判断指定时间是上午还是下午 |
| 7 | [`convertRelativeTime`](./convertRelativeTime.html) | `relativeTime: string` | `dayjs.Dayjs` | 转换相对时间（如：前两天、后天等） |
| 8 | [`isLeapYearRes`](./isLeapYearRes.html) | `year: number` | `boolean` | 判断指定年份是否为闰年 |
| 9 | [`getAllHolidays`](./getAllHolidays.html) | `year: number` | `Array<string>` | 获取指定年份的所有节假日 |
| 10 | [`getHolidayByDate`](./getHolidayByDate.html) | `date: string` | `string` | 根据日期获取对应的节假日 |
| 11 | [`getHolidaysInRange`](./getHolidaysInRange.html) | `startDate: string`, `endDate: string` | `Array<string>` | 获取指定日期范围内的所有节假日 |
| 12 | [`getNextHoliday`](./getNextHoliday.html) | 无 | `{ holiday: string, daysUntil: number }` | 获取下一个节假日信息 |
| 13 | [`getTimeDifference`](./getTimeDifference.html) | `date: string` | `{ days: number, weeks: number, months: number, years: number }` | 计算指定日期与当前日期的时间差 |
| 14 | [`calculateAge`](./calculateAge.html) | `birthDate: string` | `number` | 根据出生日期计算年龄 |
| 15 | [`addTime`](./addTime.html) | `date: string`, `amount: number`, `unit: dayjs.ManipulateType` | `dayjs.Dayjs` | 在指定日期上增加时间 |
| 16 | [`subtractTime`](./subtractTime.html) | `date: string`, `amount: number`, `unit: dayjs.ManipulateType` | `dayjs.Dayjs` | 在指定日期上减少时间 |
| 17 | [`getZodiac`](./getZodiac.html) | `date: string` | `string` | 根据日期获取生肖 |
| 18 | [`getConstellation`](./getConstellation.html) | `date: string` | `string` | 根据日期获取星座 |
::: tip
点击API名称，可以直接进入对应API详情页面！
:::
