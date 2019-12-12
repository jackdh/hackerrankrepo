interface Block {
  island: number;
  val: number;
}
let islandMap: Map<number, number[][]>;

let isIsland: Set<string>;

let _A: number[][];
/**
 * @param {number[][]} A
 * @return {number}
 */
export var shortestBridge = function(A: number[][]): number {
  // newData = new Array(A.length);
  islandMap = new Map<number, number[][]>();

  _A = A;
  let islandNumber = 1;
  isIsland = new Set<string>();

  // Now we need to find the first island.
  // start scanning up down left right. if we find one add it as island one
  for (let row = 0; row < A.length; row++) {
    for (let col = 0; col < A[row].length; col++) {
      if (A[row][col] && !isIsland.has(`${row}.${col}`)) {
        tagNeighbours([row, col], islandNumber);
        islandNumber++;
      }
    }
  }

  let shortest = null;
  let one = islandMap.get(1)!;
  let two = islandMap.get(2)!;

  for (let [row, col] of two) {
    for (let [_row, _col] of one) {
      let dis = Math.abs(row - _row) + Math.abs(col - _col) - 1;
      if (dis === 1) {
        return 1;
      }
      if (!shortest || dis < shortest) {
        shortest = dis;
      }
    }
  }

  return shortest!;
};

/**
 * If any neighbours connected tag them then recursively call.
 */
const tagNeighbours = (position: number[], islandNumber: number) => {
  let [row, col] = position;
  let up = row - 1 >= 0 ? _A[row - 1][col] : 0;
  let down = row + 1 <= _A.length - 1 ? _A[row + 1][col] : 0;
  let left = col - 1 >= 0 ? _A[row][col - 1] : 0;
  let right = col + 1 <= _A.length - 1 ? _A[row][col + 1] : 0;
  update([row, col], islandNumber);
  if (down && !isIsland.has(`${row + 1}.${col}`)) {
    tagNeighbours([row + 1, col], islandNumber);
  }
  if (left && !isIsland.has(`${row}.${col - 1}`)) {
    tagNeighbours([row, col - 1], islandNumber);
  }
  if (up && !isIsland.has(`${row - 1}.${col}`)) {
    tagNeighbours([row - 1, col], islandNumber);
  }
  if (right && !isIsland.has(`${row}.${col + 1}`)) {
    tagNeighbours([row, col + 1], islandNumber);
  }
};

/**
 * Takes a block which needs to be updated.
 * it will
 * @param island
 * @param position the x & y of the found block.
 */
const update = (position: number[], island: number) => {
  const [row, col] = position;
  isIsland.add(`${row}.${col}`);
  if (!islandMap.has(island)) {
    islandMap.set(island, []);
  }
  let newmap = islandMap.get(island)!;
  newmap.push(position);
  islandMap.set(island, newmap);
};
