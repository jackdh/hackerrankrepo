interface MatrixIndex {
  value: number;
  position: { col: number; row: number };
}

/**
 * Created in typescript:
 * Source code: https://github.com/jackdh/hackerrankrepo/tree/master/src/matrix-rotation-algo
 * @param matrix
 * @param r
 */
export const rotateMatrix = (matrix: number[][], r: number) => {
  const result = _rotateMatrix(matrix, r);
  let final = "";
  for (let i = 0; i < result.length; i++) {
    final += result[i].join(" ");
    final += "\n";
  }
  console.log(final); // Logging the string for hacker rank
  return result;
};

export const _rotateMatrix = (matrix: number[][], r: number) => {
  let _matrix = matrix;
  const iterations = r;
  // If matrix has an inner.
  if (matrix.length > 2 && matrix[0].length > 2) {
    const innner = JSON.parse(JSON.stringify(matrix));
    innner.pop();
    innner.shift();
    for (let i = 0; i < innner.length; i++) {
      innner[i].pop();
      innner[i].shift();
    }
    const innerShifted = _rotateMatrix(innner, iterations);

    for (let row = 0; row < innerShifted!.length; row++) {
      for (let col = 0; col < innerShifted![row].length; col++) {
        _matrix[row + 1][col + 1] = innerShifted![row][col];
      }
    }
  }
  const all = strip(_matrix);
  for (let i = 0; i < all.length; i++) {
    const point = all[i];
    const move = all[(i + iterations) % all.length];
    _matrix[move.position.row][move.position.col] = point.value;
  }
  return _matrix;
};

/**
 * Strips a layer from the matrix.
 * @param matrix
 */
const strip = (matrix: number[][]) => {
  const left: MatrixIndex[] = [];
  const right: MatrixIndex[] = [];
  const top: MatrixIndex[] = [];
  const bottom: MatrixIndex[] = [];

  const width = matrix[0].length;
  const height = matrix.length;

  // Strip left right.
  for (let i = 0; i < height; i++) {
    const leftValue = matrix[i][0];
    const rightValue = matrix[height - i - 1][width - 1];
    left.push({ value: leftValue!, position: { row: i, col: 0 } });
    right.push({
      value: rightValue!,
      position: { row: height - 1 - i, col: width - 1 }
    });
  }

  for (let i = 0; i < width; i++) {
    const topValue = matrix[0][width - i - 1];
    const bottomValue = matrix[height - 1][i];
    top.push({
      value: topValue!,
      position: { row: 0, col: width - 1 - i }
    });
    bottom.push({
      value: bottomValue!,
      position: { row: height - 1, col: i }
    });
  }
  bottom.shift();
  right.shift();
  top.shift();
  top.pop();
  const all = [...left, ...bottom, ...right, ...top];
  return all;
};
