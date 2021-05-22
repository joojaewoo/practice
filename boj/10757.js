const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (arr) => {
  const [A, B] = arr.split(' ').map((item) => BigInt(item));
  return (A + B).toString();
};

console.log(solution(input[0]));
