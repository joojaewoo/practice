const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (words) => {
  let cnt = 0;
  words.forEach((word) => {
    const set = new Set();
    const wordArr = word.split('');
    for (let i = 1; i < wordArr.length; i++) {
      if (wordArr[i - 1] !== wordArr[i]) {
        set.add(wordArr[i - 1]);
        if (set.has(wordArr[i])) {
          cnt--;
          break;
        }
      }
    }

    cnt++;
  });
  return cnt;
};

console.log(solution(input.slice(1)));
