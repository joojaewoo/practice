const jumpingOnClouds = (c) => {
  let count = 1;
  let ans = 0;
  for (let i = 1; i < c.length; i++) {
    if (c[i] === 0) {
      count++;
      ans++;
      if (count === 3) {
        ans--;
        count = 1;
      }
    } else count = 0;
  }
  return ans;
};

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
