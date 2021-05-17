const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (str) => str.charCodeAt(0);

console.log(solution(input[0]));
