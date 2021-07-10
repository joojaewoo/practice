const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (arr) => {
  for (let i = 1; i <= arr[0]; i++) {
    const [x1, y1, r1, x2, y2, r2] = arr[i].split(' ').map((num) => +num);
    const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const sum = +(r1 + r2);
    const diff = Math.abs(r1 - r2);
    if (dist == 0) {
      if (r1 == r2) console.log(-1);
      else console.log(0);
    } else {
      if (dist == sum || dist == diff) console.log(1);
      else if (dist < diff || dist > sum) console.log(0);
      else console.log(2);
    }
  }
};

solution(input);
