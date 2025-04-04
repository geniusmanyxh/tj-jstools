import { describe, it, expect } from "vitest";
import dayjs from "dayjs";
import {
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
} from "../../static/esm";

describe("时间工具函数测试", () => {
  it("测试 getSeason", () => {
    expect(getSeason("2023-01-15")).toEqual({
      index: 0,
      name: "春",
      prop: "spring",
      description: "春季",
    });
    expect(getSeason()).toBeDefined(); // 测试当前季节
  });

  it("测试 calculateStartEndTime", () => {
    const { start, end } = calculateStartEndTime(dayjs("2023-03-15"), "month");
    expect(start.format("YYYY-MM-DD")).toBe("2023-03-01");
    expect(end.format("YYYY-MM-DD")).toBe("2023-03-31");
  });

  it("测试 getStartEndTime", () => {
    const { start, end } = getStartEndTime("month", "2023-03-15");
    expect(start).toBeDefined();
    expect(end).toBeDefined();
  });

  it("测试 getStartEndTimeByPeriod", () => {
    const { start, end } = getStartEndTimeByPeriod(2023, "month", 3);
    expect(start).toBe("2023-03-01");
    expect(end).toBe("2023-03-31");
  });

  it("测试 getWeekday", () => {
    expect(getWeekday("2023-03-15")).toBe("三");
    expect(getWeekday()).toBeDefined(); // 测试当前星期
  });

  it("测试 getAmPm", () => {
    expect(getAmPm("2023-03-15T10:00:00")).toBe("上午");
    expect(getAmPm("2023-03-15T15:00:00")).toBe("下午");
  });

  it("测试 convertRelativeTime", () => {
    const result = convertRelativeTime("前2天");
    expect(result.isBefore(dayjs())).toBe(true);
  });

  it("测试 isLeapYearRes", () => {
    expect(isLeapYearRes(2020)).toBe(true);
    expect(isLeapYearRes(2021)).toBe(false);
  });

  it("测试 getAllHolidays", () => {
    const holidays = getAllHolidays(2023);
    expect(holidays).toContain("2023-01-01");
    expect(holidays).toContain("2023-05-01");
  });

  it("测试 getHolidayByDate", () => {
    expect(getHolidayByDate("2023-01-01")).toBe("元旦");
    expect(getHolidayByDate("2023-03-15")).toBe("无节日");
  });

  it("测试 getHolidaysInRange", () => {
    const holidays = getHolidaysInRange("2023-01-01", "2023-12-31");
    expect(holidays).toContain("2023-01-01");
    expect(holidays).toContain("2023-05-01");
  });

  it("测试 getNextHoliday", () => {
    const { holiday, daysUntil } = getNextHoliday();
    expect(holiday).toBeDefined();
    expect(daysUntil).toBeGreaterThanOrEqual(0);
  });

  it("测试 getTimeDifference", () => {
    const { days, weeks, months, years } = getTimeDifference("2020-01-01");
    expect(days).toBeGreaterThan(0);
    expect(weeks).toBeGreaterThan(0);
    expect(months).toBeGreaterThan(0);
    expect(years).toBeGreaterThan(0);
  });

  it("测试 calculateAge", () => {
    expect(calculateAge("2000-01-01")).toBeGreaterThan(0);
  });

  it("测试 addTime", () => {
    const result = addTime("2023-03-15", 5, "day");
    expect(result.format("YYYY-MM-DD")).toBe("2023-03-20");
  });

  it("测试 subtractTime", () => {
    const result = subtractTime("2023-03-15", 5, "day");
    expect(result.format("YYYY-MM-DD")).toBe("2023-03-10");
  });

  it("测试 getZodiac", () => {
    expect(getZodiac("2000-01-01")).toBe("龙");
  });

  it("测试 getConstellation", () => {
    expect(getConstellation("2023-03-15")).toBe("双鱼座");
  });
});
