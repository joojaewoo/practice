const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const blackMap = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

const solution = (arr) => {
  const cnt = [];
  const map = arr.map((item) => item.replace('\r', '').split(''));
  for (let i = 0; i < map.length - 7; i++) {
    for (let j = 0; j < map[i].length - 7; j++) {
      let cntB = 0;
      let cntW = 0;
      for (let x = i; x < i + 8; x++) {
        for (let y = j; y < j + 8; y++) {
          if (map[x][y] !== blackMap[x - i][y - j]) cntB++;
          else cntW++;
        }
      }
      cnt.push(cntB);
      cnt.push(cntW);
    }
  }
  cnt.sort((a, b) => a - b);
  return cnt[0];
};

console.log(solution(input.slice(1)));
