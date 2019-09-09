import {mergeSort} from "./index";

describe('1', () => {
    it('[14, 7, 3, 12, 9, 11, 6, 2]', () => {
        const x = [14, 7, 3, 12, 9, 11, 6, 2];
        mergeSort(x, 0, 7);
        expect(x).toEqual([2, 3, 6, 7, 9, 11, 12, 14])
    })
});
