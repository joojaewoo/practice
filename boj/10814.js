const fs = require('fs');
const [_, ...input] = fs.readFileSync('./stdin').toString().trim().split('\n');

const solution = (input) =>
  input
    .map((item) => item.split(' '))
    .sort(([a], [b]) => +a - +b)
    .map((item) => item.join(' '))
    .join('\n');

console.log(solution(input));
