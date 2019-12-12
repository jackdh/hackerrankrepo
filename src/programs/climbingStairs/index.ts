/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = function(n: number) {
  // return work(0, n);
  if (n == 1) {
    return 1;
  }
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const work = (total: number, stairs: number): number => {
  if (total > stairs) {
    return 0;
  }
  if (total === stairs) {
    return 1;
  }
  return work(total + 1, stairs) + work(total + 2, stairs);
};
