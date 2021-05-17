const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map((_) => +_));

const solution = (input) => {
  const [C] = input[0];
  const arr = input.slice(1);
  arr.forEach((item) => {
    const N = item[0];
    const score = item.slice(1);
    const avg = score.reduce((acc, cur) => acc + cur, 0) / N;
    const num = score.filter((item) => item > avg).length;
    console.log(`${((num / N) * 100).toFixed(3)}%`);
  });
};
solution(input);
