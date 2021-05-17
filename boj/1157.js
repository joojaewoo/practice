const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (str) => {
  const word = str.toUpperCase();
  const arr = Array(26).fill(0);
  const pivot = 'A'.charCodeAt();
  word.split('').forEach((item) => {
    arr[item.charCodeAt() - pivot]++;
  });
  const maxValue = Math.max.apply(null, arr);
  let idx = -1;
  for (let i = 0; i < arr.length; i++) {
    if (maxValue === arr[i]) {
      if (idx !== -1) return '?';
      idx = i;
    }
  }
  return String.fromCharCode(pivot + idx);
};

console.log(solution(input[0]));
