import { describe, it, expect } from "vitest";

import { isInt } from "../../static/esm";

describe("测试类型判断方法 ===> isInt", () => {
  it("测试字符串", () => {
    expect(isInt("")).toBeFalsy();
  });

  it("测试int", () => {
    expect(isInt(10)).toBeTruthy();
  });

  it("测试float", () => {
    expect(isInt(10.9)).toBeFalsy();
  });

  it("测试infinite", () => {
    expect(isInt(1 / 0)).toBeFalsy();
  });

  it("测试finite", () => {
    expect(isInt(0 / 1)).toBeTruthy();
  });

  it("测试NaN", () => {
    expect(isInt(NaN)).toBeFalsy();
  });

  it("测试null", () => {
    expect(isInt(null)).toBeFalsy();
  });

  it("测试undefined", () => {
    expect(isInt(undefined)).toBeFalsy();
  });

  it("测试bigint", () => {
    expect(isInt(10n)).toBeFalsy();
  });
});
