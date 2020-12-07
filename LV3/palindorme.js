const solution = (s) => {
  const arr = s.split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let start = 0; start + i < arr.length; start++) {
      let left = start;
      let right = start + i;
      while (left <= right) {
        if (arr[left] === arr[right]) {
          left++;
          right--;
        } else {
          break;
        }
      }
      if (left > right) {
        return i + 1;
      }
    }
  }
  return 1;
};

console.log(solution('abcdcba'));
