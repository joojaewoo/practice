const solution = () => {
  const set = new Set([]);
  for (let i = 1; i <= 10000; i++) {
    set.add(d(i));
  }
  for (let i = 1; i <= 10000; i++) {
    if (!set.has(i)) console.log(i);
  }
};
const d = (n) => {
  let sum = n;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

solution();
