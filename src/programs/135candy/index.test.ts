import { candy } from "./index";

describe("candy", () => {
  it("[0,0,0]", () => {
    expect(candy([0, 0, 0])).toBe(3);
  });
  it("[1,0,2]", () => {
    expect(candy([1, 0, 2])).toBe(5);
  });
  it("[1,2,2]", () => {
    expect(candy([1, 2, 2])).toBe(4);
  });
  it("[1,2,3,4,5]", () => {
    expect(candy([1, 2, 3, 4, 5])).toBe(15);
  });
  it("[1,2,0,1]", () => {
    expect(candy([1, 2, 0, 1])).toBe(6);
  });
  it("[1,3,2,2,1]", () => {
    expect(candy([1, 3, 2, 2, 1])).toBe(7);
  });
  it("[1,2,87,87,87,2,1]", () => {
    expect(candy([1, 2, 87, 87, 87, 2, 1])).toBe(13);
  });
});

// 1+2+3+1+3+2+1

// even children don't get more.
