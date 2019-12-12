const last = (x: number[]) => x[x.length - 1];
const first = (x: number[]) => x[0];

export const mergeSorted = (arr: number[], arr2: number[]): number[] => {
  //  if 1's last is smaller than 2's first. return first concat last.
  // and visa versa

  if (!arr || !arr.length) {
    return arr2 && arr2.length ? arr2 : [];
  } else if (!arr2 || !arr2.length) {
    return arr && arr.length ? arr : [];
  }

  const arr3 = [];

  let arrPointer = 0;
  let arr2Pointer = 0;

  while (arrPointer < arr.length && arr2Pointer < arr2.length) {
    if (arr[arrPointer] <= arr2[arr2Pointer]) {
      arr3.push(arr[arrPointer]);
      arrPointer++;
    } else if (arr2[arr2Pointer] < arr[arrPointer]) {
      arr3.push(arr2[arr2Pointer]);
      arr2Pointer++;
    }
  }

  while (arrPointer < arr.length) {
    arr3.push(arr[arrPointer]);
    arrPointer++;
  }

  while (arr2Pointer < arr2.length) {
    arr3.push(arr[arr2Pointer]);
    arr2Pointer++;
  }

  return arr3;
};
