const solution = (user_id, banned_id) => {
  let answer = [];
  banned_id.forEach((id) => {
    const regExp = new RegExp(id.replace(/\*/gi, '[0-9a-z]'));
    const arr = [];
    for (let i = 0; i < user_id.length; i++) {
      if (user_id[i].match(regExp) && id.length === user_id[i].length) {
        arr.push(user_id[i]);
      }
    }
    answer.push(arr);
  });
  const set = new Set();
  dfs(answer, 0, [], set, banned_id.length);
  return set.size;
};
const dfs = (ans, idx, arr, set, N) => {
  if (arr.length === N) {
    const tempArr = arr.slice();
    set.add(tempArr.sort().join(''));
    arr.pop();
  } else {
    for (let i = 0; i < ans[idx].length; i++) {
      if (arr.includes(ans[idx][i])) continue;
      arr.push(ans[idx][i]);
      dfs(ans, idx + 1, arr, set, N);
    }
    arr.pop();
  }
};
console.log(
  solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['fr*d*', '*rodo', '******', '******']),
);
