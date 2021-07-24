const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number))[0];

const solution = ([N, M]) => {
  for (let i = 1; i <= N; i++) {
    dfs(N, M, [i], i - 1);
  }
};

const dfs = (N, M, arr, k) => {
  if (arr.length === M) {
    return console.log(arr.join(' '));
  }
  for (let i = k; i < N; i++) {
    arr.push(i + 1);
    dfs(N, M, arr, i);
    arr.pop();
  }
};

solution(input);
