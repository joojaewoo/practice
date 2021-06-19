const fs = require('fs');
const [input] = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = ([x, y, w, h]) => Math.min(x, w - x, y, h - y);

console.log(solution(input.split(' ').map((item) => item)));
