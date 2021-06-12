const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (arr) => {
  const map = Array(10001).fill(false);
  for (let i = 2; i <= Math.sqrt(10000); i++) {
    if (map[i]) continue;
    let cur = i * 2;
    while (cur <= 10000) {
      map[cur] = true;
      cur += i;
    }
  }
  arr.forEach((item) => {
    const mid = item / 2;
    let idx = 0;
    while (map[mid - idx] || map[mid + idx]) idx++;
    console.log(mid - idx, mid + idx);
  });
};

solution(input.slice(1));
