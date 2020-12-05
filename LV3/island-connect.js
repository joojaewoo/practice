const solution = (n, costs) => {
  let answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const map = new Array(n).fill(0).map((item, index) => index);
  while (!check(map)) {
    const cur = costs.shift();
    if (map[cur[0]] !== map[cur[1]]) {
      updateMap(map, map[cur[0]], map[cur[1]]);
      answer += cur[2];
    }
  }
  return answer;
};

const check = (map) => {
  for (let i = 1; i < map.length; i++) {
    if (map[i - 1] !== map[i]) return false;
  }
  return true;
};

const updateMap = (map, one, other) => {
  for (let i = 0; i < map.length; i++) {
    if (map[i] === other) map[i] = one;
  }
};

console.log(
  solution(5, [
    [0, 1, 1],
    [0, 4, 5],
    [2, 4, 1],
    [2, 3, 1],
    [3, 4, 1],
  ]),
);
