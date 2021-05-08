const solution = (n, k, cmd) => {
  let idx = k;
  let ans = '';
  const del = [];
  cmd.forEach((item) => {
    const [ins, cnt] = item.split(' ');
    switch (ins) {
      case 'D':
        idx += +cnt;
        break;
      case 'C':
        del.push(idx);
        idx = idx === n - del.length ? idx - 1 : idx;
        break;
      case 'U':
        idx -= +cnt;
        break;
      case 'Z':
        const index = del.pop();
        idx = index <= idx ? idx + 1 : idx;
        break;
    }
  });
  for (let i = 0; i < n - del.length; i++) ans += 'O';
  while (del.length > 0) {
    const idx = del.pop();
    ans = ans.substring(0, idx) + 'X' + ans.substring(idx);
  }

  return ans;
};

console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']));
