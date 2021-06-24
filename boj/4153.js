const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const [x, y, z] = arr[i]
      .split(' ')
      .map((item) => +item)
      .sort((a, b) => a - b);
    if (Math.pow(x, 2) + Math.pow(y, 2) === Math.pow(z, 2)) console.log('right');
    else console.log('wrong');
  }
};

solution(input);
