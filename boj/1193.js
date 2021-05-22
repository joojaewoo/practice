const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (x) => {
  let i = 1;
  while (x > i) {
    x -= i++;
  }
  x--;
  let nx = i % 2 === 0 ? 1 + x : i - x;
  let ny = i % 2 !== 0 ? 1 + x : i - x;
  console.log(`${nx}/${ny}`);
};

solution(+input[0]);
