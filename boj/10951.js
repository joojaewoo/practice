const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map((_) => +_));

const solution = (input) => input.forEach(([a, b]) => console.log(a + b));

solution(input);
