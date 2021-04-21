const solution = (n, works) => {
  const sum = works.reduce((acc, cur) => acc + cur, 0);
  if (sum <= n) return 0;
  const obj = {};
  const arr = works.filter((item) => {
    if (!obj[item]) {
      obj[item] = 1;
      return item;
    } else obj[item]++;
  });
  arr.sort((a, b) => b - a);
  while (n > 0) {
    const [idx] = arr;
    const value = obj[idx];
    if (value <= n) {
      delete obj[idx];
      if (arr[1] !== idx - 1) {
        arr[0] = idx - 1;
        obj[idx - 1] = 0;
      } else arr.shift();
      obj[arr[0]] += value;
    } else {
      obj[idx] -= n;
      if (!obj[idx - 1]) obj[idx - 1] = 0;
      obj[idx - 1] += n;
    }
    n -= value;
  }
  let ans = 0;
  for (let idx in obj) {
    ans += idx * idx * obj[idx];
  }
  return ans;
};
console.log(solution(3, [1, 1]));
