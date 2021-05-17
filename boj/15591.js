const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map((_) => +_));

const [N, Q] = input[0];
const usado = input.slice(1, N);
const list = input.slice(N);
const ans = [];
const map = Array.from(Array(N + 1), () => []);

usado.forEach((content) => {
  const [q, p, r] = content;
  map[q].push({ point: p, r });
  map[p].push({ point: q, r });
});

list.forEach((item) => {
  const [K, idx] = item;
  const visit = Array(N + 1).fill(false);
  visit[idx] = true;
  const queue = [];
  queue.push(idx);
  let count = 0;
  while (queue.length > 0) {
    const point = queue.shift();
    for (const next of map[point]) {
      if (!visit[next.point]) {
        if (next.r >= K) {
          count++;
          visit[next.point] = true;
          queue.push(next.point);
        }
      }
    }
  }
  ans.push(count);
});
console.log(ans.join('\n'));
