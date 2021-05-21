const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (N) => {
  const arr = [];
  hanoi(N, '1', '2', '3', arr);
  console.log(arr.length);
  let str = '';
  const ans = arr.map((item) => item.join(' '));
  return ans.join('\n');
};

const hanoi = (N, a, b, c, arr) => {
  if (N === 1) return arr.push([a, c]);
  hanoi(N - 1, a, c, b, arr);
  arr.push([a, c]);
  hanoi(N - 1, b, a, c, arr);
};

console.log(solution(+input[0]));
