/**
 *@description 写一个关于时间转换的工具函数，结合dayjs 进行封装
 */

import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear"; // 引入季度插件
import isLeapYear from "dayjs/plugin/isLeapYear"; // ES 2015
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear"; // 引入 ISO 周数插件
import isoWeek from "dayjs/plugin/isoWeek"; // 引入 ISO 周插件

import { seasonProps } from "./const/timeProps";
import type { ISeasonProp } from "./const/timeProps";

dayjs.extend(isLeapYear);
dayjs.extend(quarterOfYear); // 扩展dayjs以支持季度
dayjs.extend(isoWeeksInYear); // 扩展 dayjs 以支持 ISO 周数
dayjs.extend(isoWeek); // 扩展 dayjs 以支持 ISO 周
// import 'dayjs/locale/zh-cn'; // 引入中文语言包

// dayjs.locale('zh-cn'); // 设置为中文

// 定义基础时间维度类型
type TimeDimension = "day" | "week" | "month" | "quarter" | "year";

// 继承并过滤出不需要的类型
type FilteredTimeDimension = Exclude<TimeDimension, "year">; // 过滤掉 "year"

/**
 * @description1 根据给定的日期字符串，计算对应的季节。
 * @description2 如果未提供日期字符串，则使用当前日期。
 * @param date 可选参数，日期字符串。默认为当前日期。
 * @returns {ISeasonProp} 返回包含对应的季节对象："冬", "春", "夏", "秋"之一。
 */
const getSeason = (date?: string): ISeasonProp => {
  // 解析日期字符串或当前日期，提取月份（0-11）
  const month = date ? dayjs(date).month() : dayjs().month();
  // 根据月份计算季节，每三个月为一个季节，使用取余运算确定季节索引
  let tempIndex = Math.ceil((month + 1) / 3) - 1;
  tempIndex = tempIndex > 3 ? 3 : tempIndex < 0 ? 0 : tempIndex;
  // console.log(tempIndex);
  return seasonProps.find((item) => item.index === tempIndex) as ISeasonProp;
  // return ["冬", "春", "夏", "秋"][Math.floor((month + 1) / 3) % 4]; // 简化季节计算
};

/**
 * @description 计算开始和结束时间
 * @param baseDate 基础日期
 * @param dimension 时间维度
 * @returns {Object} 包含开始和结束时间的对象
 */
const calculateStartEndTime = (
  baseDate: dayjs.Dayjs,
  dimension: TimeDimension
): { start: dayjs.Dayjs; end: dayjs.Dayjs } => {
  let start: dayjs.Dayjs;
  let end: dayjs.Dayjs;

  switch (dimension) {
    case "day":
      start = baseDate.startOf("day");
      end = baseDate.endOf("day");
      break;
    case "week":
      start = baseDate.startOf("week");
      end = baseDate.endOf("week");
      break;
    case "month":
      start = baseDate.startOf("month");
      end = baseDate.endOf("month");
      break;
    case "quarter":
      start = baseDate.startOf("quarter");
      end = baseDate.endOf("quarter");
      break;
    case "year":
      start = baseDate.startOf("year");
      end = baseDate.endOf("year");
      break;
    default:
      throw new Error("Invalid dimension: 无效的时间维度!");
  }

  return { start, end };
};

/**
 * @description 获取指定维度和日期的开始和结束时间
 * @param dimension 时间维度
 * @param date 可选参数，日期字符串。默认为当前日期。
 * @param format 可选参数，日期格式，默认为 "YYYY-MM-DD"
 * @returns {Object} 包含开始和结束时间的字符串对象
 */
const getStartEndTime = (
  dimension: TimeDimension,
  date?: string,
  format: string = "YYYY-MM-DD"
): { start: string; end: string } => {
  const baseDate = date ? dayjs(date) : dayjs();
  const { start, end } = calculateStartEndTime(baseDate, dimension); // 使用辅助函数

  return { start: start.format(format), end: end.format(format) };
};

/**
 * @description 根据年份、周期类型和周期数获取开始和结束时间
 * @param year 年份
 * @param periodType 过滤后的时间维度
 * @param periodNumber 周期数
 * @param format 可选参数，日期格式，默认为 "YYYY-MM-DD"
 * @returns {Object} 包含开始和结束时间的字符串对象
 */
const getStartEndTimeByPeriod = (
  year: number,
  periodType: FilteredTimeDimension,
  periodNumber: number,
  format: string = "YYYY-MM-DD"
): { start: string; end: string } => {
  const baseDate = dayjs(`${year}-01-01`);

  let start: dayjs.Dayjs;
  let end: dayjs.Dayjs;

  switch (periodType) {
    case "day":
      const daysInYear = baseDate.isLeapYear() ? 366 : 365; // 计算一年中的天数
      if (periodNumber < 1 || periodNumber > daysInYear) {
        throw new Error("Invalid period number for day: 超出有效范围!");
      }
      start = baseDate.startOf("day").add(periodNumber - 1, "day"); // 计算开始时间
      end = start.endOf("day"); // 计算结束时间
      break;
    case "week":
      const weeksInYear = baseDate.isoWeeksInYear(); // 获取一年中的周数
      if (periodNumber < 1 || periodNumber > weeksInYear) {
        throw new Error("Invalid period number for week: 超出有效范围!");
      }
      start = baseDate.isoWeek(periodNumber).startOf("isoWeek"); // 使用 isoWeek
      end = baseDate.isoWeek(periodNumber).endOf("isoWeek"); // 使用 isoWeek
      break;
    case "month":
      start = baseDate.month(periodNumber - 1).startOf("month"); // month从0开始
      end = baseDate.month(periodNumber - 1).endOf("month");
      break;
    case "quarter":
      start = baseDate.quarter(periodNumber).startOf("quarter");
      end = baseDate.quarter(periodNumber).endOf("quarter");
      break;
    default:
      throw new Error("Invalid period type");
  }

  return { start: dayjs(start).format(format), end: dayjs(end).format(format) }; // 使用自定义格式
};

/**
 * @description 将日期转换为星期（返回中文星期）
 * @param date 可选参数，日期字符串。默认为当前日期。
 * @returns {string} 返回对应的星期（如：一、二、三、四、五、六、日）
 */
const getWeekday = (date?: string): string => {
  const day = date ? dayjs(date).day() : dayjs().day();
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
  return weekdays[day];
};

/**
 * @description 判断给定日期是上午还是下午
 * @param date 可选参数，日期字符串。默认为当前日期。
 * @returns {string} 返回 "上午" 或 "下午"
 */
const getAmPm = (date?: string): string => {
  const hour = date ? dayjs(date).hour() : dayjs().hour();
  return hour < 12 ? "上午" : "下午";
};

/**
 * @description 转换相对时间（如：前两天、后天等）
 * @param relativeTime 字符串，表示相对时间（如：前两天、后天）
 * @returns {dayjs.Dayjs} 返回计算后的日期
 */
const convertRelativeTime = (relativeTime: string): dayjs.Dayjs => {
  const now = dayjs();
  const match = relativeTime.match(/(前|后)(\d+)(天|小时)/);
  if (match) {
    const [, direction, amount, unit] = match;
    const num = parseInt(amount, 10);
    const manipulateUnit: dayjs.ManipulateType = unit === "天" ? "day" : "hour";
    return direction === "前"
      ? now.subtract(num, manipulateUnit)
      : now.add(num, manipulateUnit);
  }
  throw new Error("无效的相对时间格式");
};

/**
 * @description 判断给定年份是否为闰年
 * @param year 年份
 * @returns {boolean} 返回 true 如果是闰年，否则返回 false
 */
const isLeapYearRes = (year: number): boolean => {
  return dayjs(`${year}-01-01`).isLeapYear();
};

/**
 * @description 获取一年的所有节日
 * @param year 年份
 * @returns {Array<string>} 返回该年份的所有节日
 */
const getAllHolidays = (year: number): Array<string> => {
  // 示例节日，实际节日应根据具体情况调整
  const holidays = [
    `${year}-01-01`, // 元旦
    `${year}-05-01`, // 劳动节
    `${year}-10-01`, // 国庆节
    // 其他节日...
  ];
  return holidays;
};

/**
 * @description 获取某一天是什么节日
 * @param date 日期字符串
 * @returns {string} 返回对应的节日名称
 */
const getHolidayByDate = (date: string): string => {
  const holidays = getAllHolidays(dayjs(date).year());
  const holidayNames = {
    "01-01": "元旦",
    "05-01": "劳动节",
    "10-01": "国庆节",
    // 其他节日...
  };
  const monthDay = dayjs(date).format("MM-DD");
  return holidayNames[monthDay] || "无节日";
};

/**
 * @description 获取某一个时间段有哪些节日
 * @param startDate 开始日期
 * @param endDate 结束日期
 * @returns {Array<string>} 返回该时间段内的节日
 */
const getHolidaysInRange = (
  startDate: string,
  endDate: string
): Array<string> => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const holidays = getAllHolidays(start.year()).filter((holiday) => {
    const holidayDate = dayjs(holiday);
    return (
      (holidayDate.isAfter(start) && holidayDate.isBefore(end)) ||
      holidayDate.isSame(start) ||
      holidayDate.isSame(end)
    );
  });
  return holidays;
};
/**
 * @description 获取距离当前时间最近的节日，以及还有多少天
 * @returns {Object} 包含最近节日的日期和距离当前的天数
 */
const getNextHoliday = (): { holiday: string; daysUntil: number } => {
  const today = dayjs();
  const holidays = getAllHolidays(today.year());
  const upcomingHolidays = holidays
    .map((holiday) => ({
      date: dayjs(holiday),
      daysUntil: dayjs(holiday).diff(today, "day"),
    }))
    .filter((holiday) => holiday.daysUntil >= 0)
    .sort((a, b) => a.daysUntil - b.daysUntil);

  if (upcomingHolidays.length > 0) {
    return {
      holiday: upcomingHolidays[0].date.format("YYYY-MM-DD"),
      daysUntil: upcomingHolidays[0].daysUntil,
    };
  }
  return { holiday: "无节日", daysUntil: -1 };
};

/**
 * @description 输入一个时间，返回距离当前时间的天数、周数、月数和年数
 * @param date 输入的日期字符串
 * @returns {Object} 包含天数、周数、月数和年数
 */
const getTimeDifference = (
  date: string
): { days: number; weeks: number; months: number; years: number } => {
  const inputDate = dayjs(date);
  const today = dayjs();
  return {
    days: today.diff(inputDate, "day"),
    weeks: today.diff(inputDate, "week"),
    months: today.diff(inputDate, "month"),
    years: today.diff(inputDate, "year"),
  };
};

/**
 * @description 根据出生日期计算年龄
 * @param birthDate 出生日期字符串
 * @returns {number} 返回年龄
 */
const calculateAge = (birthDate: string): number => {
  return dayjs().diff(dayjs(birthDate), "year");
};

/**
 * @description 时间加减，支持秒、分钟、小时、天、周、月、年
 * @param date 输入的日期字符串
 * @param amount 数量
 * @param unit 单位（如：'second', 'minute', 'hour', 'day', 'week', 'month', 'year'）
 * @returns {dayjs.Dayjs} 返回加减后的日期
 */
const addTime = (
  date: string,
  amount: number,
  unit: dayjs.ManipulateType
): dayjs.Dayjs => {
  return dayjs(date).add(amount, unit);
};

/**
 * @description 时间倒计时，支持秒、分钟、小时、天、周、月、年
 * @param date 输入的日期字符串
 * @param amount 数量
 * @param unit 单位（如：'second', 'minute', 'hour', 'day', 'week', 'month', 'year'）
 * @returns {dayjs.Dayjs} 返回倒计时后的日期
 */
const subtractTime = (
  date: string,
  amount: number,
  unit: dayjs.ManipulateType
): dayjs.Dayjs => {
  return dayjs(date).subtract(amount, unit);
};

/**
 * @description 根据日期判断生肖
 * @param date 日期字符串
 * @returns {string} 返回对应的生肖
 */
const getZodiac = (date: string): string => {
  const zodiacSigns = [
    "鼠",
    "牛",
    "虎",
    "兔",
    "龙",
    "蛇",
    "马",
    "羊",
    "猴",
    "鸡",
    "狗",
    "猪",
  ];
  const year = dayjs(date).year();
  return zodiacSigns[(year - 4) % 12];
};

/**
 * @description 根据日期判断星座
 * @param date 日期字符串
 * @returns {string} 返回对应的星座
 */
const getConstellation = (date: string): string => {
  const month = dayjs(date).month() + 1; // month从0开始
  const day = dayjs(date).date();
  const constellations = [
    { name: "摩羯座", start: [12, 22], end: [1, 19] },
    { name: "水瓶座", start: [1, 20], end: [2, 18] },
    { name: "双鱼座", start: [2, 19], end: [3, 20] },
    { name: "白羊座", start: [3, 21], end: [4, 19] },
    { name: "金牛座", start: [4, 20], end: [5, 20] },
    { name: "双子座", start: [5, 21], end: [6, 21] },
    { name: "巨蟹座", start: [6, 22], end: [7, 22] },
    { name: "狮子座", start: [7, 23], end: [8, 22] },
    { name: "处女座", start: [8, 23], end: [9, 22] },
    { name: "天秤座", start: [9, 23], end: [10, 23] },
    { name: "天蝎座", start: [10, 24], end: [11, 22] },
    { name: "射手座", start: [11, 23], end: [12, 21] },
  ];

  for (const constellation of constellations) {
    const [startMonth, startDay] = constellation.start;
    const [endMonth, endDay] = constellation.end;
    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay)
    ) {
      return constellation.name;
    }
  }
  return "无星座";
};

// 统一导出所有函数
export {
  getSeason,
  calculateStartEndTime,
  getStartEndTime,
  getStartEndTimeByPeriod,
  getWeekday,
  getAmPm,
  convertRelativeTime,
  isLeapYearRes,
  getAllHolidays,
  getHolidayByDate,
  getHolidaysInRange,
  getNextHoliday,
  getTimeDifference,
  calculateAge,
  addTime,
  subtractTime,
  getZodiac,
  getConstellation,
};
