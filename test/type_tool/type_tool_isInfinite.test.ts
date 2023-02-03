import { describe, it, expect } from "vitest";

import { isInfinite } from "../../static/esm";

describe("测试类型判断方法 ===> isInfinite", () => {
  it("测试字符串", () => {
    expect(isInfinite("")).toBeFalsy();
  });

  it("测试int", () => {
    expect(isInfinite(10)).toBeFalsy();
  });

  it("测试NaN", () => {
    // console.log(isInfinite(NaN));
    expect(isInfinite(NaN)).toBeFalsy();
  });

  it("测试null", () => {
    expect(isInfinite(null)).toBeFalsy();
  });

  it("测试undefined", () => {
    expect(isInfinite(undefined)).toBeFalsy();
  });

  it("测试bigint", () => {
    expect(isInfinite(10n)).toBeFalsy();
  });
  it("测试infinite", () => {
    expect(isInfinite(1 / 0)).toBeTruthy();
  });

  it("测试finite", () => {
    expect(isInfinite(0 / 1)).toBeFalsy();
  });
});
