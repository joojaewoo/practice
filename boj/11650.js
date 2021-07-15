const fs = require('fs');
const [_, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const solution = (input) =>
  input
    .map((item) => item.split(' '))
    .sort(([x1, y1], [x2, y2]) => (x1 === x2 ? y1 - y2 : x1 - x2))
    .map(([x, y]) => `${x} ${y}`)
    .join('\n');

console.log(solution(input));
