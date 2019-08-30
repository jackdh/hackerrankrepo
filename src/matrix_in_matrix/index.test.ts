import { getSumSubMatrix, matrixWork } from "./index";
import {
  matrixFour,
  matrixOne,
  matrixTen,
  matrixThree,
  matrixTwo
} from "./data";

describe("Matrixs", () => {
  test("One", () => {
    expect(matrixWork(matrixOne)).toBe(-2);
  });

  test("Two", () => {
    expect(matrixWork(matrixTwo)).toBe(21);
  });

  test("Three", () => {
    expect(matrixWork(matrixThree)).toBe(25);
  });

  test("Four", () => {
    expect(matrixWork(matrixFour)).toBe(4);
  });
});

describe("sub matrix", () => {
  test("calc 1", () => {
    expect(getSumSubMatrix(matrixTen, 0, 0, 1)).toBe(-2);
  });

  test("calc 2", () => {
    expect(getSumSubMatrix(matrixTen, 0, 0, 2)).toBe(21);
  });

  test("calc 4", () => {
    expect(getSumSubMatrix(matrixTen, 0, 0, 4)).toBe(35);
  });

  test("calc 4 middle", () => {
    expect(getSumSubMatrix(matrixTen, 3, 3, 4)).toBe(15);
  });
});
