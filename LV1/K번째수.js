const solution = (array, command) => {
  const ans = [];
  command.forEach(([start, end, k]) => {
    const arr = array.slice(start - 1, end).sort((a, b) => a - b);
    ans.push(arr[k - 1]);
  });
  return ans;
};
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);
