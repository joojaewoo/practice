const solution = (n, s, a, b, fares) => {
  let answer = Infinity;
  const map = Array.from(Array(n), () => Array(n).fill(Infinity));
  fares.forEach(([src, dest, value]) => {
    map[src - 1][dest - 1] = value;
    map[dest - 1][src - 1] = value;
  });
  map.forEach((_, idx) => (map[idx][idx] = 0));
  floyd(map, n);
  for (let i = 0; i < n; i++) {
    answer = Math.min(answer, map[s - 1][i] + map[i][a - 1] + map[i][b - 1]);
  }
  return answer;
};

const floyd = (map, n) => {
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
      }
    }
  }
};

solution(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);
