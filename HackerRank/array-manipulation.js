const arrayManipulation = (n, queries) => {
  const arr = new Array(n + 1).fill(0);
  for (let i = 0; i < queries.length; i++) {
    arr[queries[i][0]] += queries[i][2];
    arr[queries[i][1] + 1] += -queries[i][2];
  }
  let maxValue = 0;
  let curValue = 0;
  for (let i = 0; i < arr.length; i++) {
    curValue += arr[i];
    maxValue = Math.max(maxValue, curValue);
  }
  return maxValue;
};

console.log(
  arrayManipulation(10, [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ]),
);
