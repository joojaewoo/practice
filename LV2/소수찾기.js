const solution = (k) => {
  let ans = 0;
  const arr = k.split('');
  const set = new Set();
  for (let i = 0; i < arr.length; i++) set.add(+arr[i]);

  for (let i = 2; i <= arr.length; i++) {
    const visited = new Array(arr.length).fill(false);
    permutations(arr, set, visited, i, '');
  }
  for (let i of set) {
    let idx = 2;
    while (idx < i) {
      if (i % idx === 0) {
        break;
      }
      idx++;
    }
    if (idx === i) ans++;
  }
  return ans;
};

const permutations = (arr, set, visited, num, k) => {
  if (k.length === num) set.add(+k);
  else {
    for (let i = 0; i < visited.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        k += arr[i];
        permutations(arr, set, visited, num, k);
        k = k.substring(0, k.length - 1);
        visited[i] = false;
      }
    }
  }
};
