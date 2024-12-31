/**
 *@description 写一个关于时间转换的工具函数，结合dayjs 进行封装
 */

import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear'; // 引入季度插件
import isLeapYear from 'dayjs/plugin/isLeapYear'; // ES 2015
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'; // 引入 ISO 周数插件
import isoWeek from 'dayjs/plugin/isoWeek'; // 引入 ISO 周插件

dayjs.extend(isLeapYear);
dayjs.extend(quarterOfYear); // 扩展dayjs以支持季度
dayjs.extend(isoWeeksInYear); // 扩展 dayjs 以支持 ISO 周数
dayjs.extend(isoWeek); // 扩展 dayjs 以支持 ISO 周
// import 'dayjs/locale/zh-cn'; // 引入中文语言包

// dayjs.locale('zh-cn'); // 设置为中文

// 新增方法：根据日期获取季节
const getSeason = (date?: string): string => {
  const month = date ? dayjs(date).month() : dayjs().month();
  return ['冬', '春', '夏', '秋'][Math.floor((month + 1) / 3) % 4]; // 简化季节计算
};

// 示例：获取当前日期的季节
const season = getSeason('2023-10-01');
console.log(`当前季节是：${season}`);

// 辅助函数：计算开始和结束时间
const calculateStartEndTime = (baseDate: dayjs.Dayjs, dimension: string): { start: dayjs.Dayjs; end: dayjs.Dayjs } => {
  let start: dayjs.Dayjs;
  let end: dayjs.Dayjs;

  switch (dimension) {
    case 'day':
      start = baseDate.startOf('day');
      end = baseDate.endOf('day');
      break;
    case 'week':
      start = baseDate.startOf('week');
      end = baseDate.endOf('week');
      break;
    case 'month':
      start = baseDate.startOf('month');
      end = baseDate.endOf('month');
      break;
    case 'quarter':
      start = baseDate.startOf('quarter');
      end = baseDate.endOf('quarter');
      break;
    case 'year':
      start = baseDate.startOf('year');
      end = baseDate.endOf('year');
      break;
    default:
      throw new Error('Invalid dimension: 无效的时间维度!');
  }

  return { start, end };
};

// 更新 getStartEndTime 函数
const getStartEndTime = (
  dimension: 'day' | 'week' | 'month' | 'quarter' | 'year',
  date?: string,
  format: string = 'YYYY-MM-DD'
): { start: string; end: string } => {
  const baseDate = date ? dayjs(date) : dayjs();
  const { start, end } = calculateStartEndTime(baseDate, dimension); // 使用辅助函数

  return { start: start.format(format), end: end.format(format) };
};

// 更新 getStartEndTimeByPeriod 函数
const getStartEndTimeByPeriod = (
  year: number,
  periodType: 'day' | 'week' | 'month' | 'quarter',
  periodNumber: number,
  format: string = 'YYYY-MM-DD'
): { start: string; end: string } => {
  const baseDate = dayjs(`${year}-01-01`);

  let start: dayjs.Dayjs;
  let end: dayjs.Dayjs;

  switch (periodType) {
    case 'day':
      const daysInYear = baseDate.isLeapYear() ? 366 : 365; // 计算一年中的天数
      if (periodNumber < 1 || periodNumber > daysInYear) {
        throw new Error('Invalid period number for day: 超出有效范围!');
      }
      start = baseDate.startOf('day').add(periodNumber - 1, 'day'); // 计算开始时间
      end = start.endOf('day'); // 计算结束时间
      break;
    case 'week':
      const weeksInYear = baseDate.isoWeeksInYear(); // 获取一年中的周数
      if (periodNumber < 1 || periodNumber > weeksInYear) {
        throw new Error('Invalid period number for week: 超出有效范围!');
      }
      start = baseDate.isoWeek(periodNumber).startOf('isoWeek'); // 使用 isoWeek
      end = baseDate.isoWeek(periodNumber).endOf('isoWeek'); // 使用 isoWeek
      break;
    case 'month':
      start = baseDate.month(periodNumber - 1).startOf('month'); // month从0开始
      end = baseDate.month(periodNumber - 1).endOf('month');
      break;
    case 'quarter':
      start = baseDate.quarter(periodNumber).startOf('quarter');
      end = baseDate.quarter(periodNumber).endOf('quarter');
      break;
    default:
      throw new Error('Invalid period type');
  }

  return { start: start.format(format), end: end.format(format) }; // 使用自定义格式
};

// 统一导出所有函数
export { getSeason, calculateStartEndTime, getStartEndTime, getStartEndTimeByPeriod };
