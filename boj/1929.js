const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf-8').trim().split('\n');

const solution = (arr) => {
  const [start, end] = arr.split(' ').map((item) => +item);
  const map = Array(end + 1).fill(false);
  for (let i = 2; i <= Math.abs(end); i++) {
    let cur = i * 2;
    if (map[i]) continue;
    while (cur <= end) {
      map[cur] = true;
      cur += i;
    }
  }
  map[0] = true;
  map[1] = true;
  for (let i = start; i <= end; i++) {
    if (!map[i]) console.log(i);
  }
};

solution(input[0]);
