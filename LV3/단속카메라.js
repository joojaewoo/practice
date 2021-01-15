const solution = (routes) => {
  routes.sort((a, b) => a[0] - b[0]);
  let ans = 1;
  let tmp = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    if (tmp > routes[i][1]) tmp = routes[i][1];
    if (tmp < routes[i][0]) {
      ans++;
      tmp = routes[i][1];
    }
  }
  return ans;
};

console.log(
  solution([
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ]),
);
