const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (input) => {
  const N = +input[0];
  for (let i = 1; i < input.length; i++) {
    let sum = 0;
    let cnt = 1;
    input[i].split('').forEach((item) => {
      if (item === 'O') {
        sum += cnt;
        cnt++;
      } else cnt = 1;
    });
    console.log(sum);
  }
};
solution(input);
