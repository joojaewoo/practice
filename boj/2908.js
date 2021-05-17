const fs = require('fs');
const input = fs.readFileSync('./stdin', 'utf8').trim().split('\n');

const solution = ([a, b]) => {
  const numA = a.split('');
  const numB = b.split('');
  for (let i = 0; i < numA.length / 2; i++) {
    const tmp = numA[i];
    numA[i] = numA[numA.length - i - 1];
    numA[numA.length - i - 1] = tmp;
  }
  for (let i = 0; i < numB.length / 2; i++) {
    const tmp = numB[i];
    numB[i] = numB[numB.length - i - 1];
    numB[numB.length - i - 1] = tmp;
  }
  const newNumA = +numA.join('');
  const newNumB = +numB.join('');
  return newNumA > newNumB ? newNumA : newNumB;
};

console.log(solution(input[0].split(' ')));
