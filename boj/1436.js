const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (N) => {
  let num = 666;
  let count = 1;
  while (count !== N) {
    num++;
    if (String(num).includes('666')) count++;
  }
  return num;
};

console.log(solution(+input[0]));
