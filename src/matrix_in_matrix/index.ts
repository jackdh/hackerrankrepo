import { random } from "lodash";
import { matrixOne } from "./data";

const generateMatrix = () => {
  const x = 10;

  const lower = -10;
  const upper = 10;

  const matrix = [];

  for (let i = 0; i < x; i++) {
    const row = [];
    for (let j = 0; j < x; j++) {
      row.push(random(lower, upper));
    }
    matrix.push(row);
  }
  return matrix;
};

export const matrixWork = (matrix:any) => {
  let max = null;

  let matrixLength = matrix.length;

  for (let count = 1; count <= matrixLength; count++) {
    for (
      let col = 0;
      col < matrixLength && !(col + count > matrixLength);
      col++
    ) {
      for (
        let row = 0;
        row < matrixLength && !(row + count > matrixLength);
        row++
      ) {
        const data = getSumSubMatrix(matrix, col, row, count);
        if (!max || data > max ) {
          max = data;
        }
      }
    }
  }
  return max;
};

export const getSumSubMatrix = (
  matrix: number[][],
  col: number,
  row: number,
  size: number
) => {
  let sum = 0;
  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};
