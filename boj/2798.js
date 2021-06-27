const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (arr) => {
  const [N, M] = arr[0].split(' ').map((item) => +item);
  const card = arr[1].split(' ').map((item) => +item);
  let ans = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        const cnt = card[i] + card[j] + card[k];
        if (M >= cnt && M - cnt < M - ans) ans = cnt;
      }
    }
  }
  console.log(ans);
};

solution(input);
