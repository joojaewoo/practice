const solution = (a) => {
  let ans = 2;
  const left = new Array(a.length).fill(0);
  const right = new Array(a.length).fill(0);
  left[0] = a[0];
  right[a.length - 1] = a[a.length - 1];
  for (let i = 1; i < a.length; i++) {
    if (left[i - 1] < a[i]) left[i] = left[i - 1];
    else left[i] = a[i];
  }
  for (let i = a.length - 2; i >= 0; i--) {
    if (right[i + 1] < a[i]) right[i] = right[i + 1];
    else right[i] = a[i];
  }
  for (let i = 1; i < a.length - 1; i++) {
    if (left[i] >= a[i] || right[i] >= a[i]) ans++;
  }
  return ans;
};

console.log(solution([9, -1, -5]));
