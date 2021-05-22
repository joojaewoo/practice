const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (arr) => {
  arr.forEach((item) => {
    const [H, W, N] = item.split(' ').map((_) => +_);
    console.log(
      (N % H || H).toString() +
        Math.ceil(N / H)
          .toString()
          .padStart(2, '0'),
    );
  });
};

solution(input.slice(1));
