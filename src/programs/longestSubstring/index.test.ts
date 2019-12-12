import { lengthOfLongestSubstring } from "./index";

describe("substring", () => {
  it("*empty*", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it("a", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });
  it("abc", () => {
    expect(lengthOfLongestSubstring("abc")).toBe(3);
  });

  it("bbbbb", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("pwwkew", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("abcabcd", () => {
    expect(lengthOfLongestSubstring("abcabcd")).toBe(4);
  });
});
