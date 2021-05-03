const solution = (n, money) => {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  money.forEach((el, idx) => {
    for (let i = el; i <= n; i++) {
      dp[i] += dp[i - el];
    }
  });
  return dp[n] % 1000000007;
};
console.log(solution(10, [1, 2, 3, 4, 5]));
