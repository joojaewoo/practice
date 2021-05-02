const solution = (n, build_frame) => {
  const ans = [];
  for (const frame of build_frame) {
    const [x, y, a, b] = frame;
    if (b === 1) {
      if (addCheck(x, y, a, ans)) {
        ans.push([x, y, a]);
      }
    } else {
      if (delCheck(x, y, a, ans)) {
        const idx = find(x, y, a, ans);
        if (idx === -1) continue;
        ans.splice(idx, 1);
      }
    }
  }
  return ans.sort(([x1, y1, a1], [x2, y2, a2]) => {
    if (x1 === x2) {
      if (y1 === y2) return a1 - a2;
      return y1 - y2;
    }
    return x1 - x2;
  });
};

const addCheck = (x, y, a, ans) => {
  if (a === 1) {
    if (ans.find(([i, j, k]) => i === x && j === y - 1 && k === 0)) return true;
    if (ans.find(([i, j, k]) => i === x + 1 && j === y - 1 && k === 0)) return true;
    if (
      ans.find(([i, j, k]) => i === x + 1 && j === y && k === 1) &&
      ans.find(([i, j, k]) => i === x - 1 && j === y && k === 1)
    )
      return true;
  } else {
    if (y === 0) return true;
    if (ans.find(([i, j, k]) => i === x && j === y - 1 && k === 0)) return true;
    if (ans.find(([i, j, k]) => i === x - 1 && j === y && k === 1)) return true;
    if (ans.find(([i, j, k]) => i === x && j === y && k === 1)) return true;
  }
  return false;
};
const delCheck = (x, y, a, ans) => {
  const temp = [...ans];
  const idx = find(x, y, a, temp);
  temp.splice(idx, 1);
  let flag = true;
  for (const frame of temp) {
    const [x1, y1, a1] = frame;
    if (!addCheck(x1, y1, a1, temp)) {
      return false;
    }
  }
  return true;
};
const find = (x, y, a, ans) => {
  for (let i in ans) {
    const [x1, y1, a1] = ans[i];
    if (x === x1 && y === y1 && a === a1) return i;
  }
  return -1;
};

console.log(
  solution(5, [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
  ]),
);
