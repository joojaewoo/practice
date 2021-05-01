const solution = (ads) => {
  const exposureTime = 5;
  let time = 0;
  let ans = 0;
  ads.sort(([a], [b]) => a - b);
  const arr = [];
  while (ads.length > 0 || arr.length > 0) {
    while (ads.length > 0) {
      if (ads[0][0] <= time) arr.push(ads.shift());
      else break;
    }
    if (arr.length <= 0) {
      time = ads[0][0];
      continue;
    }
    arr.sort(([_, a], [__, b]) => b - a);
    const [start, price] = arr.shift();
    ans += (time - start) * price;
    time += exposureTime;
  }
  return ans;
};
solution([
  [1, 3],
  [3, 2],
  [5, 4],
]);
