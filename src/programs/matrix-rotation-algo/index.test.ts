import { rotateMatrix } from "./index";
import { cloneDeep } from "lodash";

import {
  matrixFour,
  matrixFourOneRot,
  matrixFourTwoRot,
  matrixOne,
  matrixOneSolved,
  matrixTwo,
  matrixTwoFiveRot,
  matrixTwoOneRot,
  matrixTwoThreeRot,
  matrixTwoTwoRot
} from "./data";

describe("matrix size", () => {
  describe("one", () => {
    test("one rotation", () => {
      expect(rotateMatrix(matrixOne, 1)).toEqual(matrixOneSolved);
    });
  });

  describe("two", () => {
    test("one rotation", () => {
      const rotated = rotateMatrix(cloneDeep(matrixTwo), 1);
      expect(rotated).toEqual(matrixTwoOneRot);
    });
    test("Two rotation", () => {
      const rotated = rotateMatrix(cloneDeep(matrixTwo), 2);
      expect(rotated).toEqual(matrixTwoTwoRot);
    });
    test("Three rotation", () => {
      const rotated = rotateMatrix(cloneDeep(matrixTwo), 3);
      expect(rotated).toEqual(matrixTwoThreeRot);
    });
    test("Five rotation", () => {
      const rotated = rotateMatrix(cloneDeep(matrixTwo), 5);
      expect(rotated).toEqual(matrixTwoFiveRot);
    });
  });

  describe("four", () => {
    test("one rotation", () => {
      expect(rotateMatrix(cloneDeep(matrixFour), 1)).toEqual(matrixFourOneRot);
    });
    test("two rotations", () => {
      expect(rotateMatrix(cloneDeep(matrixFour), 2)).toEqual(matrixFourTwoRot);
    });
  });

  describe("Tests", () => {
    test("one", () => {
      // @ts-ignore

      expect(
        rotateMatrix(
          [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]],
          1
        )
      ).toEqual([
        [2, 3, 4, 8],
        [1, 7, 11, 12],
        [5, 6, 10, 16],
        [9, 13, 14, 15]
      ]);
    });

    test("5x4", () => {
      expect(
        rotateMatrix(
          [
            [1, 2, 3, 4],
            [7, 8, 9, 10],
            [13, 14, 15, 16],
            [19, 20, 21, 22],
            [25, 26, 27, 28]
          ],
          1
        )
      ).toEqual([
        [2, 3, 4, 10],
        [1, 9, 15, 16],
        [7, 8, 21, 22],
        [13, 14, 20, 28],
        [19, 25, 26, 27]
      ]);
    });
  });
});
