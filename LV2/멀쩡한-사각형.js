const solution = (w, h) => {
  let ans = 0;
  const a = -h / w;
  for (let i = 1; i < w; i++) {
    ans += Math.floor(a * i + h);
  }
  return ans * 2;
};

console.log(solution(8, 12));
