const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim();

const solution = (N) => {
  const limit = N / 3;
  let num = Math.floor(N / 5);
  let cnt = 5 * num;
  while (cnt !== N) {
    cnt += 3;
    num++;
    if (cnt > N) {
      cnt -= 5;
      num--;
    }
    if (num > limit) return -1;
  }
  return num;
};

console.log(solution(+input));
