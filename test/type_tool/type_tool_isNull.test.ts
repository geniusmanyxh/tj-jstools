import { describe, it, expect } from "vitest";

import { isNull } from "../../static/esm";

describe("测试类型判断方法 ===> isNull", () => {
  it("测试字符串", () => {
    expect(isNull("")).toBeFalsy();
  });

  it("测试int", () => {
    expect(isNull(10)).toBeFalsy();
  });

  it("测试NaN", () => {
    expect(isNull(NaN)).toBeFalsy();
  });

  it("测试null", () => {
    expect(isNull(null)).toBeTruthy();
  });

  it("测试undefined", () => {
    expect(isNull(undefined)).toBeFalsy();
  });

  it("测试bigint", () => {
    expect(isNull(10n)).toBeFalsy();
  });
});
