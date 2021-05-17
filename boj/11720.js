const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (input) => input[1].split('').reduce((acc, cur) => acc + +cur, 0);

console.log(solution(input));
