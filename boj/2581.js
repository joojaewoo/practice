const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (arr) => {
  let sum = 0;
  let min = -1;
  const [start, end] = arr;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      sum += i;
      if (min === -1) min = i;
    }
  }
  if (sum !== 0) console.log(sum);
  console.log(min);
};

const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

solution(input);
