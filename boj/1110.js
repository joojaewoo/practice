const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (input) => {
  const num = +input[0];
  let compare = num;
  let ans = 0;
  while (true) {
    if (compare < 10) {
      compare = compare * 11;
    } else {
      compare = (compare % 10) * 10 + sum(compare);
    }
    ans++;
    if (compare === num) break;
  }
  console.log(ans);
};

const sum = (compare) => {
  let ans = 0;
  while (compare > 0) {
    ans += compare % 10;
    compare = Math.floor(compare / 10);
  }
  return ans % 10;
};

solution(input);
