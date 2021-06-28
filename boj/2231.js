const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (N) => {
  const sum = (num) =>
    num +
    num
      .toString()
      .split('')
      .reduce((acc, cur) => +acc + +cur, 0);
  if (N == 2) return 1;
  for (let i = 2; i < N; i++) {
    if (sum(i) === N) return i;
  }
  return 0;
};

console.log(solution(input[0]));
