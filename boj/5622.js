const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (str) => {
  const pivot = 'A'.charCodeAt();
  const arr = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9];
  return str.split('').reduce((acc, cur) => acc + arr[cur.charCodeAt() - pivot] + 1, 0);
};

console.log(solution(input[0]));
