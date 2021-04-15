const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, K] = input[0].split(' ');
const arr = input[1].split(' ');

const solution = (N, K, arr) => {
  const map = new Set();
  let ans = 0;
  for (let i = 0; i < K; i++) {
    if (!map.has(arr[i]) && map.size < N) {
      map.add(arr[i]);
    } else if (map.has(arr[i])) continue;
    else {
      let value = -1;
      let lastIdx = -1;
      for (let j of map) {
        const tempIdx = arr.slice(i).indexOf(j);
        if (tempIdx === -1) {
          value = j;
          break;
        }
        if (tempIdx > lastIdx) {
          lastIdx = tempIdx;
          value = j;
        }
      }
      map.delete(value);
      map.add(arr[i]);
      ans++;
    }
  }
  return ans;
};

console.log(solution(N, K, arr));
