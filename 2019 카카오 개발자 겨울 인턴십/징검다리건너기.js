const solution = (stones, k) => {
  let min = 1;
  let max = 200000000;
  let ans = 0;
  while (min <= max) {
    const mid = parseInt((min + max) / 2);
    let cnt = 0;
    for (const value of stones) {
      if (value < mid) cnt++;
      else cnt = 0;
      if (cnt >= k) break;
    }
    if (cnt >= k) max = mid - 1;
    else {
      min = mid + 1;
    }
  }
  return min - 1;
};
console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
