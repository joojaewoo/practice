const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (input) => {
  const arr = Array(8001).fill(0);
  input.sort((a, b) => a - b);
  const avg = Math.round(input.reduce((acc, cur) => acc + cur) / input.length);
  console.log(avg);
  const mid = input[(input.length - 1) / 2];
  console.log(mid);
  input.forEach((item) => {
    arr[item + 4000]++;
  });
  const max = Math.max(...arr);
  const maxValue = [];
  arr.forEach((item, index) => {
    if (item === max) maxValue.push(index - 4000);
  });
  console.log(maxValue.length > 1 ? maxValue[1] : maxValue[0]);
  const range = input[input.length - 1] - input[0];
  console.log(range);
};

solution(input.slice(1));
