const solution = (triangle) => {
  const dp = [];
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = [];
  }
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    p[i][i] = triangle[i][i] + dp[i - 1][i - 1];
    dp[i][0] = triangle[i][0] + dp[i - 1][0];
    d;
  }
  for (let i = 2; i < triangle.length; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
  dp[dp.length - 1].sort((a, b) => b - a);
  return dp[dp.length - 1][0];
};

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
