const solution = (n, a, b) => {
  let ans = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    ans++;
  }
  return ans;
};

console.log(solution(8, 4, 7));
