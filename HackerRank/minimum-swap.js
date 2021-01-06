const minimumSwaps = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      const temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;
      i--;
      count++;
    }
  }
  return count;
};
console.log(minimumSwaps([2, 3, 4, 1, 5]));
