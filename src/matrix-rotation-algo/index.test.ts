import { rotateMatrix } from "./index";
import {
  matrixFour,
  matrixFourOneRot,
  matrixFourTwoRot,
  matrixOne,
  matrixOneSolved,
  matrixTwo,
  matrixTwoOneRot,
  matrixTwoThreeRot,
  matrixTwoTwoRot
} from "./data";

describe("matrix size", () => {
  describe("one", () => {
    test("one rotation", () => {
      expect(rotateMatrix(matrixOne, 1)).toBe(matrixOneSolved);
    });
  });

  describe("two", () => {
    test("one rotation", () => {
      const rotated = rotateMatrix(matrixTwo, 1);
      expect(rotated).toBe(matrixTwoOneRot);
    });
    test("one rotation", () => {
      expect(rotateMatrix(matrixTwo, 2)).toBe(matrixTwoTwoRot);
    });
    test("one rotation", () => {
      expect(rotateMatrix(matrixTwo, 3)).toBe(matrixTwoThreeRot);
    });
  });

  describe("four", () => {
    test("one rotation", () => {
      expect(rotateMatrix(matrixFour, 1)).toBe(matrixFourOneRot);
    });
    test("one rotation", () => {
      expect(rotateMatrix(matrixFour, 2)).toBe(matrixFourTwoRot);
    });
  });
});
