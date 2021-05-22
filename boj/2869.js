const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split(' ')
  .map((item) => +item);

const solution = ([A, B, V]) => Math.ceil((V - B) / (A - B));
console.log(solution(input));
