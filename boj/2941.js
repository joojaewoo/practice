const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (str) => str.replace(/(c=|c-|dz=|d-|lj|nj|s=|z=)/g, 'a').length;

console.log(solution(input[0]));
