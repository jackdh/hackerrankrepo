import { climbStairs } from "./index";

describe("stairs", () => {
  it("stairs=0", () => {
    expect(climbStairs(0)).toBe(0);
  });

  it("stairs=1", () => {
    expect(climbStairs(1)).toBe(1);
  });

  it("stairs=2", () => {
    expect(climbStairs(2)).toBe(2);
  });
  it("stairs=3", () => {
    expect(climbStairs(3)).toBe(3);
  });
});
