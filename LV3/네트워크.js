const solution = (n, computer) => {
  const arr = Array(n).fill(-1);
  for (let i = 0; i < computer.length; i++) {
    let flag = n + 1;
    const child = new Set();
    computer[i].forEach((item, idx) => {
      if (item === 1) {
        if (arr[idx] === -1) arr[idx] = i;
        else {
          flag = Math.min(arr[idx], flag);
          child.add(arr[idx]);
        }
      }
    });
    if (flag !== n + 1) union(arr, flag, child);
  }
  const set = new Set(arr);
  return set.size;
};
const union = (arr, parent, child) => {
  for (let i = 0; i < arr.length; i++) {
    if (child.has(arr[i])) arr[i] = parent;
  }
};
