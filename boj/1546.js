const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map((_) => +_));

const solution = (input) => {
  const [N] = input[0];
  const score = input[1];
  score.sort((a, b) => b - a);
  const pivot = score[0];
  let sum = 0;
  score.forEach((item) => (sum += (item / pivot) * 100));
  console.log(sum / N);
};
solution(input);
