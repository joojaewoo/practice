const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number))[0];

const solution = ([N, M]) => {
  const ans = [];
  for (let i = 1; i <= N; i++) {
    dfs(N, M, [i], ans);
  }
  console.log(ans.join('\n'));
};

const dfs = (N, M, arr, ans) => {
  if (arr.length === M) {
    return ans.push(arr.join(' '));
  }
  for (let i = 0; i < N; i++) {
    arr.push(i + 1);
    dfs(N, M, arr, ans);
    arr.pop();
  }
};

solution(input);
