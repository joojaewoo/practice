const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (arr) => {
  const dp = Array.from(Array(31), () => Array(31).fill(0));
  const ans = [];
  arr.forEach((item) => {
    const [N, M] = item.split(' ').map((_) => +_);
    ans.push(combi(M, N, dp));
  });
  console.log(ans.join('\n'));
};

const combi = (m, n, dp) => {
  if (dp[m][n] > 0) return dp[m][n];
  if (n == m || n == 0) return (dp[m][n] = 1);
  return (dp[m][n] = combi(m - 1, n - 1, dp) + combi(m - 1, n, dp));
};

solution(input.slice(1));
