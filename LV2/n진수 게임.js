const solution = (n, t, m, p) => {
  let str = '';
  for (let i = 0; i < t * m; i++) {
    str += i.toString(n);
  }
  let ans = '';
  let idx = p - 1;
  while (ans.length < t) {
    ans += str.charAt(idx);
    idx += m;
  }
  return ans.toUpperCase();
};

solution(16, 16, 2, 2);
