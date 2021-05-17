const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (str) => (str === '' ? 0 : str.split(' ').length);

console.log(solution(input[0]));
