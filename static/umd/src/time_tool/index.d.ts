/**
 *@description 写一个关于时间转换的工具函数，结合dayjs 进行封装
 */
import dayjs from "dayjs";
import type { ISeasonProp } from "./const/timeProps";
type TimeDimension = "day" | "week" | "month" | "quarter" | "year";
type FilteredTimeDimension = Exclude<TimeDimension, "year">;
/**
 * @description1 根据给定的日期字符串，计算对应的季节。
 * @description2 如果未提供日期字符串，则使用当前日期。
 * @param date 可选参数，日期字符串。默认为当前日期。
 * @returns {ISeasonProp} 返回包含对应的季节对象："冬", "春", "夏", "秋"之一。
 */
declare const getSeason: (date?: string) => ISeasonProp;
/**
 * @description 计算开始和结束时间
 * @param baseDate 基础日期
 * @param dimension 时间维度
 * @returns {Object} 包含开始和结束时间的对象
 */
declare const calculateStartEndTime: (baseDate: dayjs.Dayjs, dimension: TimeDimension) => {
    start: dayjs.Dayjs;
    end: dayjs.Dayjs;
};
/**
 * @description 获取指定维度和日期的开始和结束时间
 * @param dimension 时间维度
 * @param date 可选参数，日期字符串。默认为当前日期。
 * @param format 可选参数，日期格式，默认为 "YYYY-MM-DD"
 * @returns {Object} 包含开始和结束时间的字符串对象
 */
declare const getStartEndTime: (dimension: TimeDimension, date?: string, format?: string) => {
    start: string;
    end: string;
};
/**
 * @description 根据年份、周期类型和周期数获取开始和结束时间
 * @param year 年份
 * @param periodType 过滤后的时间维度
 * @param periodNumber 周期数
 * @param format 可选参数，日期格式，默认为 "YYYY-MM-DD"
 * @returns {Object} 包含开始和结束时间的字符串对象
 */
declare const getStartEndTimeByPeriod: (year: number, periodType: FilteredTimeDimension, periodNumber: number, format?: string) => {
    start: string;
    end: string;
};
/**
 * @description 将日期转换为星期（返回中文星期）
 * @param date 可选参数，日期字符串。默认为当前日期。
 * @returns {string} 返回对应的星期（如：一、二、三、四、五、六、日）
 */
declare const getWeekday: (date?: string) => string;
/**
 * @description 判断给定日期是上午还是下午
 * @param date 可选参数，日期字符串。默认为当前日期。
 * @returns {string} 返回 "上午" 或 "下午"
 */
declare const getAmPm: (date?: string) => string;
/**
 * @description 转换相对时间（如：前两天、后天等）
 * @param relativeTime 字符串，表示相对时间（如：前两天、后天）
 * @returns {dayjs.Dayjs} 返回计算后的日期
 */
declare const convertRelativeTime: (relativeTime: string) => dayjs.Dayjs;
/**
 * @description 判断给定年份是否为闰年
 * @param year 年份
 * @returns {boolean} 返回 true 如果是闰年，否则返回 false
 */
declare const isLeapYearRes: (year: number) => boolean;
/**
 * @description 获取一年的所有节日
 * @param year 年份
 * @returns {Array<string>} 返回该年份的所有节日
 */
declare const getAllHolidays: (year: number) => Array<string>;
/**
 * @description 获取某一天是什么节日
 * @param date 日期字符串
 * @returns {string} 返回对应的节日名称
 */
declare const getHolidayByDate: (date: string) => string;
/**
 * @description 获取某一个时间段有哪些节日
 * @param startDate 开始日期
 * @param endDate 结束日期
 * @returns {Array<string>} 返回该时间段内的节日
 */
declare const getHolidaysInRange: (startDate: string, endDate: string) => Array<string>;
/**
 * @description 获取距离当前时间最近的节日，以及还有多少天
 * @returns {Object} 包含最近节日的日期和距离当前的天数
 */
declare const getNextHoliday: () => {
    holiday: string;
    daysUntil: number;
};
/**
 * @description 输入一个时间，返回距离当前时间的天数、周数、月数和年数
 * @param date 输入的日期字符串
 * @returns {Object} 包含天数、周数、月数和年数
 */
declare const getTimeDifference: (date: string) => {
    days: number;
    weeks: number;
    months: number;
    years: number;
};
/**
 * @description 根据出生日期计算年龄
 * @param birthDate 出生日期字符串
 * @returns {number} 返回年龄
 */
declare const calculateAge: (birthDate: string) => number;
/**
 * @description 时间加减，支持秒、分钟、小时、天、周、月、年
 * @param date 输入的日期字符串
 * @param amount 数量
 * @param unit 单位（如：'second', 'minute', 'hour', 'day', 'week', 'month', 'year'）
 * @returns {dayjs.Dayjs} 返回加减后的日期
 */
declare const addTime: (date: string, amount: number, unit: dayjs.ManipulateType) => dayjs.Dayjs;
/**
 * @description 时间倒计时，支持秒、分钟、小时、天、周、月、年
 * @param date 输入的日期字符串
 * @param amount 数量
 * @param unit 单位（如：'second', 'minute', 'hour', 'day', 'week', 'month', 'year'）
 * @returns {dayjs.Dayjs} 返回倒计时后的日期
 */
declare const subtractTime: (date: string, amount: number, unit: dayjs.ManipulateType) => dayjs.Dayjs;
/**
 * @description 根据日期判断生肖
 * @param date 日期字符串
 * @returns {string} 返回对应的生肖
 */
declare const getZodiac: (date: string) => string;
/**
 * @description 根据日期判断星座
 * @param date 日期字符串
 * @returns {string} 返回对应的星座
 */
declare const getConstellation: (date: string) => string;
export { getSeason, calculateStartEndTime, getStartEndTime, getStartEndTimeByPeriod, getWeekday, getAmPm, convertRelativeTime, isLeapYearRes, getAllHolidays, getHolidayByDate, getHolidaysInRange, getNextHoliday, getTimeDifference, calculateAge, addTime, subtractTime, getZodiac, getConstellation, };
