const solution = (n) => {
  let ans = '';
  while (n > 0) {
    n -= 1;
    const temp = Math.floor(n % 3);
    if (temp === 0) ans = '1' + ans;
    else if (temp === 1) ans = '2' + ans;
    else ans = '4' + ans;
    n = Math.floor(n / 3);
  }
  return ans;
};

console.log(solution(10));
