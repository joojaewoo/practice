const fs = require('fs');
const input = fs
  .readFileSync('./stdin', 'utf8')
  .trim()
  .split('\n')
  .map((item) => +item);

const solution = (input) => {
  const set = new Set([]);
  input.forEach((item) => set.add(item % 42));
  console.log(set.size);
};
solution(input);
