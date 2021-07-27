const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (map) => {
  const dp = Array(map[0] + 1).fill(0);
  dp[1] = map[1];
  dp[2] = map[2] + dp[1];
  for (let i = 3; i < map.length; i++)
    dp[i] = Math.max(dp[i - 3] + map[i - 1] + map[i], dp[i - 2] + map[i]);
  return dp[map[0]];
};

console.log(solution(input));
