/**
 * [1,0,2] =5
 * @param {number[]} ratings
 * @return {number}
 */
export const candy = function(ratings: number[]) {
  let final: { rating: number; candies: number }[] = [];

  for (let i = 0; i < ratings.length; i++) {
    final.push({
      rating: ratings[i],
      candies: getRight(i, ratings)
    });
    final = updatePrevious(final);
  }

  const min = final.reduce((x, y) => x + y.candies, 0);

  return min;
};
const getRight = (i: number, ratings: number[]) => {
  return typeof ratings[i + 1] !== "undefined" && ratings[i] > ratings[i + 1]
    ? 2
    : 1;
};

const updatePrevious = (final: { rating: number; candies: number }[]) => {
  let i = final.length;
  while (--i) {
    if (
      final[i].rating > final[i - 1].rating && // If we're bigger than previous increase us.
      final[i].candies <= final[i - 1].candies
    ) {
      final[i].candies = final[i - 1].candies + 1; // Need to update the previous one if we are less.
    } else if (
      final[i].rating < final[i - 1].rating &&
      final[i - 1].candies <= final[i].candies
    ) {
      final[i - 1].candies = final[i].candies + 1;
    } else {
      return final;
    }
  }

  return final;
};

const recursive = (data: { prevCandies: number; array: number[] }) => {
  let { prevCandies, array } = data;
  if (!array.length) {
    return 0; // There is no right hand number so can't increase it.
  }

  let baseCandies = 1;

  let current = array.shift() as number;

  let rightCandies = recursive({ prevCandies, array }) as number;

  if (current > array[0]) {
    baseCandies = rightCandies + 1;
  }

  return baseCandies + prevCandies;
};
