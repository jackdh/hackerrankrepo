import { mergeSorted } from "./index";

describe("tests", function() {
  test("1", () => {
    expect(mergeSorted([], [])).toEqual([]);
  });
  test("2", () => {
    expect(mergeSorted([1], [])).toEqual([1]);
  });
  test("3", () => {
    expect(mergeSorted([2], [1])).toEqual([1, 2]);
  });
  test("4", () => {
    expect(mergeSorted([3], [1, 2])).toEqual([1, 2, 3]);
  });
  test("5", () => {
    expect(mergeSorted([3], [1, 2])).toEqual([1, 2, 3]);
  });
  test("6", () => {
    expect(mergeSorted([8, 8, 9], [1, 2])).toEqual([1, 2, 8, 8, 9]);
  });
});
