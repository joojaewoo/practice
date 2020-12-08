const solution = (n) => {
  const dp = [];
  dp[0] = 1;
  dp[2] = 3;
  for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * dp[2];
    for (let j = 0; j <= i; j += 2) {
      dp[i] += dp[j] * 2;
    }
  }
  return dp[n];
};
