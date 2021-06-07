const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (arr) => {
  const map = Array(246913).fill(false);
  for (let i = 2; i <= Math.sqrt(246912); i++) {
    if (map[i]) continue;
    let cur = i * 2;
    while (cur <= 246913) {
      map[cur] = true;
      cur += i;
    }
  }
  map[0] = true;
  map[1] = true;
  for (let i = 0; i < arr.length - 1; i++) {
    let cnt = 0;
    for (let j = arr[i] + 1; j <= 2 * arr[i]; j++) {
      if (!map[j]) cnt++;
    }
    console.log(cnt);
  }
};
solution(input);
