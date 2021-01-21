const solution = (arr1, arr2) => {
  const ans = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[i].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        ans[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return ans;
};

console.log(
  solution(
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 0],
    ],
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 0],
    ],
  ),
);
