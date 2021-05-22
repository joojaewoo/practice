const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (arr) => {
  const N = arr.shift();
  const map = Array.from(Array(15), () => Array(15).fill(0));
  for (let i = 1; i < 15; i++) map[0][i] = i;
  for (let i = 1; i < 15; i++) map[i][1] = 1;
  for (let i = 1; i < 15; i++) {
    for (let j = 1; j < 15; j++) {
      map[i][j] = map[i][j - 1] + map[i - 1][j];
    }
  }
  let idx = 0;
  while (idx < N) {
    console.log(map[arr.shift()][arr.shift()]);
    idx++;
  }
};

solution(input);
