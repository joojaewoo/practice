const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (input) => {
  let idx = 0;
  for (let i = 2; i < input.length; i++) {
    if (input[idx] < input[i]) idx = i;
  }
  console.log(input[idx]);
  console.log(idx + 1);
};
solution(input);
