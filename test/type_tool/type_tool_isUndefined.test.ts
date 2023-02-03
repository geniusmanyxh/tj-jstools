import { describe, it, expect } from "vitest";

import { isUndefined } from "../../static/esm";

describe("测试类型判断方法 ===> isUndefined", () => {
  it("测试字符串", () => {
    expect(isUndefined("")).toBeFalsy();
  });

  it("测试int", () => {
    expect(isUndefined(10)).toBeFalsy();
  });

  it("测试NaN", () => {
    expect(isUndefined(NaN)).toBeFalsy();
  });

  it("测试null", () => {
    expect(isUndefined(null)).toBeFalsy();
  });

  it("测试undefined", () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });

  it("测试bigint", () => {
    expect(isUndefined(10n)).toBeFalsy();
  });
});
