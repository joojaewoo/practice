const getGrade = (sum) => {
  if (sum >= 90) return 'A';
  else if (sum >= 80) return 'B';
  else if (sum >= 70) return 'C';
  else if (sum >= 50) return 'D';
  else return 'F';
};

const solution = (scores) => {
  const ans = [];
  const map = Array.from(Array(scores.length), () => Array(scores.length).fill(0));
  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
      map[i][j] = scores[j][i];
    }
  }

  map.forEach((item, i) => {
    const myScore = item[i];
    const len = item.length - 1;
    item.sort((a, b) => b - a);

    if (item[0] !== item[1] && item[0] === myScore) item.shift();
    if (item[len] !== item[len - 1] && item[len] === myScore) item.pop();
    const sum = item.reduce((acc, cur) => acc + +cur, 0) / item.length;
    ans.push(getGrade(sum));
  });
  return ans.join('');
};
