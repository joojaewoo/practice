const fs = require('fs');
const input = fs.readFileSync('dev/stdin', 'utf8').trim().split('\n');

const solution = (N) => {
  let i = 0;
  let cnt = 0;
  while (++i) {
    let temp = i;
    let flag = 0;
    while (temp) {
      if (temp % 1000 === 666) flag = 1;
      temp /= 10;
    }
    if (flag) {
      cnt++;
      if (cnt === N) break;
    }
  }
  return i;
};

console.log(solution(+input[0]));
