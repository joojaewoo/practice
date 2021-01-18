const solution = (brown, yellow) => {
  const mul = brown + yellow;
  const add = brown / 2 + 2;
  for (let i = 3; i < add; i++) {
    if (i * (add - i) === mul) return [Math.max(i, add - i), Math.min(i, add - i)];
  }
};
