const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (arr) => {
  let cnt = 0;
  const map = Array(1001).fill(false);
  for (let i = 2; i < Math.sqrt(1000); i++) {
    if (map[i]) continue;
    let cur = i * 2;
    while (cur <= 1000) {
      map[cur] = true;
      cur += i;
    }
  }
  map[0] = true;
  map[1] = true;
  arr.split(' ').forEach((item) => {
    if (!map[+item]) cnt++;
  });
  return cnt;
};

console.log(solution(input[1]));
