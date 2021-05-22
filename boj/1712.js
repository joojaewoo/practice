const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map((_) => +_));

const solution = (arr) => {
  const [A, B, C] = arr;
  if (B >= C) return -1;
  return Math.floor(A / (C - B)) + 1;
};

console.log(solution(input[0]));
