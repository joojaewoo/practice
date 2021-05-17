const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (N) => {
  if (N < 100) return N;
  let ans = 0;
  for (let i = 100; i <= N; i++) {
    const str = i.toString();
    const [a, b, c] = str.split('').map((item) => +item);
    if (a - b === b - c) ans++;
  }
  return ans + 99;
};

console.log(solution(+input[0]));
