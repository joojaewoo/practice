const solution = (n, s) => {
  if (n > s) return [-1];
  let diff = s % n;
  const pivot = Math.floor(s / n);
  const arr = [pivot];
  for (let i = 0; i < n - 1; i++) {
    if (diff > 0) {
      arr.push(pivot + 1);
      diff--;
    } else arr.push(pivot);
  }
  return arr.sort((a, b) => a - b);
};
