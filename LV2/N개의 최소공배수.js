const solution = (arr) => {
  arr.sort((a, b) => a - b);
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    let aIdx = 2;
    let bIdx = 2;
    let temp = ans;
    while (temp !== num) {
      if (temp > num) num = arr[i] * aIdx++;
      else temp = ans * bIdx++;
    }
    ans = temp;
  }
  return ans;
};

console.log(solution([1, 2, 3]));
