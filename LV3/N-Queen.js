const solution = (n) => {
  const arr = new Array(n).fill(0);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    arr[0] = i;
    answer += dfs(arr, 0, n);
  }
  return answer;
};

const dfs = (arr, row, n) => {
  let answer = 0;
  if (row === n - 1) {
    return 1;
  }
  for (let i = 0; i < n; i++) {
    arr[row + 1] = i;
    if (possible(arr, row + 1)) {
      answer += dfs(arr, row + 1, n);
    }
  }
  arr[row] = 0;
  return answer;
};

const possible = (arr, row) => {
  for (let i = 0; i < row; i++) {
    if (arr[i] === arr[row]) {
      return false;
    }
    if (Math.abs(arr[i] - arr[row]) === Math.abs(i - row)) {
      return false;
    }
  }
  return true;
};

console.log(solution(2));
