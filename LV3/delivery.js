const solution = (N, road, K) => {
  const arr = [];
  for (let i = 1; i <= N; i++) {
    arr[i] = new Array(N + 1).fill(N * 10001);
    arr[i][i] = 0;
  }
  road.map((item) => {
    const [start, end, dist] = item;
    arr[start][end] = Math.min(arr[start][end], dist);
    arr[end][start] = Math.min(arr[end][start], dist);
  });
  const visited = new Array(N + 1).fill(false);
  visited[0] = true;
  visited[1] = true;
  let index = getMinIdx(arr[1], visited);
  while (index != -1) {
    visited[index] = true;
    for (let i = 1; i <= N; i++) {
      arr[1][i] = Math.min(arr[1][i], arr[index][i] + arr[1][index]);
    }
    index = getMinIdx(arr[1], visited);
  }
  arr[1].sort((a, b) => a - b);
  let answer = 0;
  for (let i of arr[1]) {
    if (i <= K) {
      answer++;
    } else {
      break;
    }
  }
  return answer;
};

const getMinIdx = (arr, visited) => {
  let min = Infinity;
  let index = -1;
  for (i in arr) {
    if (!visited[i] && min > arr[i]) {
      min = arr[i];
      index = i;
    }
  }
  return index;
};

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4,
  ),
);
