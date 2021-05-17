const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (str) => {
  const word = str.toUpperCase();
  const obj = {};
  word.split('').forEach((item) => {
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
  });
  const arr = [];
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  arr.sort(([_, a], [__, b]) => b - a);
  return arr[0][1] === arr[1][1] ? '?' : arr[0][0];
};

console.log(solution(input[0]));
