const solution = (n) => {
  let ans = 0;
  for (let i = 1; i < n / 2; i++) {
    let sum = i;
    for (let j = i + 1; sum < n; j++) {
      sum += j;
    }
    if (sum === n) ans++;
  }
  return ans + 1;
};
