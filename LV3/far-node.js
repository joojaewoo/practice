const solution = (n, edge) => {
  const list = [];
  for (let i = 0; i <= n; i++) {
    list[i] = [];
  }
  edge.map((item) => {
    list[item[0]].push([item[1]]);
    list[item[1]].push([item[0]]);
  });
  const queue = [];
  const arr = new Array(n + 1).fill(0);
  queue.push(1);
  while (queue.length > 0) {
    const idx = queue.shift();
    for (let i in list[idx]) {
      const k = list[idx][i];
      if (k != 1 && (arr[k] === 0 || arr[k] > arr[idx] + 1)) {
        arr[k] = arr[idx] + 1;
        queue.push(k);
      }
    }
  }
  arr.shift();
  arr.sort((a, b) => b - a);
  const max = arr[0];
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < max) break;
    answer++;
  }
  return answer;
};

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ]),
);
