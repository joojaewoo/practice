const solution = (m, n, puddles) => {
  const map = [];
  for (let i = 0; i <= n + 1; i++) {
    map[i] = new Array(m + 1).fill(0);
  }
  for (let i = 0; i < puddles.length; i++) {
    map[puddles[i][1]][puddles[i][0]] = -1;
  }
  map[1][1] = 1;
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (map[i][j] != -1) {
        if (i > 1) map[i][j] += Math.max(0, map[i - 1][j]);
        if (j > 1) map[i][j] += Math.max(0, map[i][j - 1]);
        map[i][j] %= 1000000007;
      }
    }
  }
  return map[n][m];
};

console.log(solution(4, 3, [[2, 2]]));
