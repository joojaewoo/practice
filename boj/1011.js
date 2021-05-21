const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = (locations) => {
  locations.forEach((item) => {
    const [x, y] = item.split(' ').map((num) => +num);
    let dist = y - x;
    let cnt = 1;
    while (dist > cnt * 2) {
      dist -= cnt * 2;
      cnt++;
    }
    if (cnt < dist) console.log(2 * (cnt - 1) + 2);
    else console.log(2 * (cnt - 1) + 1);
  });
};

solution(input.slice(1));
