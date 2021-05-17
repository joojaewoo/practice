const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (input) => {
  const ans = [];
  let alphbat = 97;
  for (let i = 0; i < 26; i++) {
    ans.push(input.indexOf(String.fromCharCode(alphbat + i)));
  }
  return ans.join(' ');
};

console.log(solution(input[0]));
