const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number))[0];

const solution = ([N, M]) => {
  const visit = Array(N).fill(false);
  for (let i = 1; i <= N; i++) {
    visit[i - 1] = true;
    dfs(visit, M, [i]);
    visit[i - 1] = false;
  }
};

const dfs = (visit, M, arr) => {
  if (arr.length === M) {
    return console.log(arr.join(' '));
  }
  for (let i = 0; i < visit.length; i++) {
    if (!visit[i]) {
      visit[i] = true;
      arr.push(i + 1);
      dfs(visit, M, arr);
      arr.pop();
      visit[i] = false;
    }
  }
};

solution(input);
