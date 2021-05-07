const solution = (n, weak, dist) => {
  let ans = Infinity;
  const copyWeak = [...weak];
  if (weak.length === 1) return 1;
  dist.sort((a, b) => b - a);
  weak.sort((a, b) => a - b);
  const permuationArr = permutation(dist, dist.length);
  for (let i = 0; i < weak.length; i++) {
    permuationArr.forEach((distArr) => {
      let idx = 0;
      for (let j = 0; j < distArr.length; j++) {
        const diff = weak[idx] + distArr[j];
        while (idx < weak.length) {
          if (diff < weak[idx]) break;
          idx++;
        }
        if (idx === weak.length) {
          ans = Math.min(ans, j + 1);
          break;
        }
      }
    });
    weak.push(weak.shift() + n);
  }
  return ans === Infinity ? -1 : ans;
};

const permutation = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
};

console.log(solution(200, [0, 10, 50, 80, 120, 160], [40, 30, 10, 5, 1]));
