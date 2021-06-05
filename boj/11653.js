const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (N) => {
  if (N === 1) return;
  let idx = 2;
  while (N > 1) {
    if (N % idx === 0) {
      console.log(idx);
      N /= idx;
    } else {
      idx++;
    }
  }
};

solution(+input[0]);
