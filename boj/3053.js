const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (r) => {
  console.log((r * r * Math.PI).toFixed(6));
  console.log((r * r * 2).toFixed(6));
};

solution(+input[0]);
