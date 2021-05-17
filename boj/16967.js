const fs = require('fs');
const input = fs.readFileSync('./stdin').toString().split('\n');

const [H, W, X, Y] = input[0].split(' ').map((item) => +item);
const map = [];
for (let i = 1; i < input.length; i++) {
  map.push(input[i].split(' ').map((item) => +item));
}
const A = Array.from(Array(H), () => Array(W).fill(0));
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (i < X) A[i][j] = map[i][j];
    else {
      if (j < Y) A[i][j] = map[i][j];
      else A[i][j] = map[i][j] - A[i - X][j - Y];
    }
  }
}
A.forEach((item) => console.log(item.join(' ')));
