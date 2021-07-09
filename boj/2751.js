const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (input) => input.sort((a, b) => a - b).join('\n');

console.log(solution(input.slice(1)));
