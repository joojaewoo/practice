const solution = (n) => {
  let ans = 0;
  const k = n.toString(3);
  const arr = k.split('');
  let idx = 1;
  for (let i of arr) {
    ans += i * idx;
    idx *= 3;
  }
  return ans;
};
