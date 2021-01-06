const countingValleys = (steps, path) => {
  let height = 0;
  let answer = 0;
  const pathArr = path.split('');
  for (let i = 0; i < steps; i++) {
    if (pathArr[i] === 'D') {
      height -= 1;
    } else {
      height += 1;
      if (height === 0) {
        answer += 1;
      }
    }
  }
  return answer;
};

console.log(countingValleys(12, 'DDUUDDUDUUUD'));
