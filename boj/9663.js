const fs = require('fs');
const [input] = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (N) => {
  const map = Array(N + 1).fill(0);
  return nQueens(0, N, map);
};

const nQueens = (level, N, map) => {
  let ans = 0;
  if (!isPromising(level, map)) return false;
  else if (level === N) {
    return 1;
  }
  for (let i = 1; i <= N; i++) {
    map[level + 1] = i;
    ans += nQueens(level + 1, N, map);
  }
  return ans;
};

const isPromising = (level, map) => {
  for (let i = 1; i < level; i++) {
    if (map[i] === map[level]) return false;
    if (level - i === Math.abs(map[level] - map[i])) return false;
  }
  return true;
};

console.log(solution(+input));
