const fs = require('fs');
const [_, ...input] = fs.readFileSync('./stdin').toString().trim().split('\n');

const solution = (input) =>
  [...new Set([...input])]
    .sort()
    .sort((a, b) => a.length - b.length)
    .join('\n');

console.log(solution(input));
