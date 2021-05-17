const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (input) => {
  input.forEach((arr) => {
    const [n, str] = arr.split(' ');
    console.log(
      str
        .split('')
        .map((item) => item.padEnd(n, item))
        .join(''),
    );
  });
};

solution(input.slice(1));
