const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (input) => {
  const arr = input.map((item) => item.split(' ').map(Number));
  const result = arr.map(([weight, height], idx) => {
    let cnt = 1;
    for (let i = 0; i < arr.length; i++) {
      if (i !== idx) {
        const [w, h] = arr[i];
        if (w > weight && h > height) cnt++;
      }
    }
    return cnt;
  });
  return result.join(' ');
};

console.log(solution(input.slice(1)));
