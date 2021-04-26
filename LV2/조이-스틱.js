const solution = (name) => {
  const find = (visit, idx, names) => {
    if (!visit[idx] && names[idx] !== 'A') {
      visit[idx] = true;
      return [idx, 0];
    }
    let cnt = 1;
    let l = idx - 1 < 0 ? visit.length - 1 : idx - 1;
    let r = idx + 1 >= visit.length ? 0 : idx + 1;
    while (r !== l) {
      if (!visit[r] && names[r] !== 'A') {
        visit[r] = true;
        return [r, cnt];
      }
      if (!visit[l] && names[l] !== 'A') {
        visit[l] = true;
        return [l, cnt];
      }
      l = l - 1 < 0 ? visit.length - 1 : l - 1;
      r = r + 1 >= visit.length ? 0 : r + 1;
      cnt++;
    }
    visit[r] = true;
    return [r, cnt];
  };
  let ans = 0;
  let pivot = 'A';
  const names = name.split('');
  const visit = names.map((item) => (item === 'A' ? true : false));
  let num = visit.reduce((acc, cur) => acc + (cur ? 0 : 1), 0);
  let idx = 0;
  while (num > 0) {
    const [index, move] = find(visit, idx, names);
    const char = names[index];
    const diff = 'Z'.charCodeAt(0) - char.charCodeAt(0) + 1;
    if (diff <= Math.abs(pivot.charCodeAt(0) - char.charCodeAt(0))) ans += diff;
    else ans += Math.abs(pivot.charCodeAt(0) - char.charCodeAt(0));
    ans += move;
    idx = index;
    num--;
  }
  return ans;
};
console.log(solution('JEROEN'));
