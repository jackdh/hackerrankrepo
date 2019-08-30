export const rotateMatrix = (matrix: number[][], iterations: number) => {
  // Peel of the lines

  // Shift the rows by the required amount

  // Apply the rows back.

  return peelMatrix(matrix, iterations);
};

interface MatrixIndex {
  value: number;
  position: { col: number; row: number };
}

const peelMatrix = (matrix: number[][], iterations: number) => {
  let _matrix = matrix;
  if (!_matrix.length) {
    return;
  }
  const left = takeLeftColumn(matrix);
  const bottom = takeBottom(matrix);
  const right = takeRight(matrix);
  const top = takeTop(matrix);

  const all = [...left, ...bottom, ...right, ...top];

  for (let i = 0; i < all.length; i++) {
    const point = all[i];
    const move = all[(i + iterations) % all.length];
    _matrix[move.position.row][move.position.col] = point.value;
  }
  return _matrix;
};

const takeLeftColumn = (matrix: number[][]) => {
  const row: MatrixIndex[] = [];
  const length = matrix[0].length;
  for (let i = 0; i < length; i++) {
    const value = matrix[i][0];
    row.push({ value: value!, position: { row: i, col: 0 } });
  }
  return row;
};

const takeRight = (matrix: number[][]) => {
  const row: MatrixIndex[] = [];
  const length = matrix[0].length - 1;
  for (let i = length; i >= 0; i--) {
    const value = matrix[i][length];
    row.push({ value: value!, position: { row: i, col: length } });
  }
  row.shift();
  return row;
};

const takeTop = (matrix: number[][]) => {
  const row: MatrixIndex[] = [];
  const length = matrix.length - 1;

  for (let i = length; i >= 0; i--) {
    const value = matrix[0][i];
    row.push({ value: value!, position: { row: i, col: length } });
  }
  row.pop();
  row.shift();
  return row;
};

const takeBottom = (matrix: number[][]) => {
  const row: MatrixIndex[] = [];
  for (let i = 0; i < matrix.length; i++) {
    const value = matrix[matrix.length - 1][i];
    row.push({ value: value!, position: { row: matrix.length - 1, col: i } });
  }
  row.shift();
  return row;
};
