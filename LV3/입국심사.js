const solution = (n, times) => {
  times.sort((a, b) => a - b);
  let ans = Infinity;
  let min = 0;
  let max = times[times.length - 1] * n;
  while (min <= max) {
    const cur = Math.floor((min + max) / 2);
    const curPeople = times.reduce((preValue, curValue) => {
      return preValue + Math.floor(cur / curValue);
    }, 0);
    if (curPeople < n) min = cur + 1;
    else {
      if (cur <= ans) ans = cur;
      max = cur - 1;
    }
  }
  return ans;
};

console.log(solution(6, [7, 10]));
