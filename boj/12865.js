const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map((_) => +_));

const solution = (input) => {
  const [N, K] = input[0];
  const arr = input.slice(1);
  const dp = Array.from(Array(N + 1), () => Array(K + 1).fill(0));
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < K + 1; j++) {
      if (arr[i - 1][0] <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - arr[i - 1][0]] + arr[i - 1][1]);
      } else dp[i][j] = dp[i - 1][j];
    }
  }
  return dp[N][K];
};

console.log(solution(input));
