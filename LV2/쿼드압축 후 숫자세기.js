const solution = (arr) => {
  let one = 0;
  for (let i = 0; i < arr.length; i++) {
    one += arr[i].reduce((acc, cur) => (cur === 1 ? acc + 1 : acc), 0);
  }
  const zero = arr.length * arr.length - one;
  const ans = [zero, one];
  const dfs = (ans, arr) => {
    const length = arr.length / 2;
    if (length === 1) return;
    const fourArr = Array.from(Array(4), () =>
      Array(length)
        .fill(null)
        .map((item) => []),
    );
    const cnt = new Array(4).fill(0);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (i < length) {
          if (j < length) {
            fourArr[0][i].push(arr[i][j]);
            cnt[0] += arr[i][j] === 1 ? 1 : 0;
          } else {
            fourArr[1][i].push(arr[i][j]);
            cnt[1] += arr[i][j] === 1 ? 1 : 0;
          }
        } else {
          if (j < length) {
            fourArr[2][i - length].push(arr[i][j]);
            cnt[2] += arr[i][j] === 1 ? 1 : 0;
          } else {
            fourArr[3][i - length].push(arr[i][j]);
            cnt[3] += arr[i][j] === 1 ? 1 : 0;
          }
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      if (cnt[i] === 0) ans[0] -= Math.pow(length, 2) - 1;
      else if (cnt[i] === Math.pow(length, 2)) ans[1] -= Math.pow(length, 2) - 1;
      else dfs(ans, fourArr[i]);
    }
  };
  dfs(ans, arr);
  return ans;
};

console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ]),
);
