const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (input) => {
  const [A, B, C] = input;
  const multStr = (A * B * C).toString();
  for (let i = 0; i < 10; i++) {
    let idx = multStr.indexOf(i);
    let cnt = 0;
    while (idx !== -1) {
      cnt++;
      idx = multStr.indexOf(i, idx + 1);
    }
    console.log(cnt);
  }
};
solution(input);
