const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (N) => {
  if (N === 1) return 1;
  let idx = 1;
  N--;
  while (N > 0) N -= 6 * idx++;
  return idx;
};

console.log(solution(+input[0]));
