const fs = require('fs');
const input = fs.readFileSync('./stdin').toString().split('\n');

const solution = (num) =>
  +num
    .toString()
    .split('')
    .map(Number)
    .sort((a, b) => b - a)
    .join('');

console.log(solution(input[0]));
