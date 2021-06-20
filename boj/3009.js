const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (arr) => {
  const xSet = new Set();
  const ySet = new Set();
  arr.forEach((item) => {
    const [x, y] = item.split(' ').map((item) => +item);
    if (xSet.has(x)) {
      xSet.delete(x);
    } else xSet.add(x);
    if (ySet.has(y)) ySet.delete(y);
    else ySet.add(y);
  });
  const [ansX] = [...xSet.keys()];
  const [ansY] = [...ySet.keys()];
  return `${ansX} ${ansY}`;
};

console.log(solution(input));
