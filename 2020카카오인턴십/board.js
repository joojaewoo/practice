const solution = (board) => {
  const dp = [];
  const N = board.length;
  for (let i in board) {
    dp[i] = new Array(N);
    for (let j in board) {
      dp[i][j] = new Array(4).fill(Infinity);
    }
  }
  const queue = [];
  dp[0][0][0] = 0;
  dp[0][0][1] = 0;
  dp[0][0][2] = 0;
  dp[0][0][3] = 0;
  queue.push({ x: 0, y: 0 });
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  while (queue.length !== 0) {
    const point = queue.shift();
    for (let i in dx) {
      const nx = point.x + dx[i];
      const ny = point.y + dy[i];
      const dir = point.dir || -1;
      if (nx >= 0 && ny >= 0 && nx < N && ny < N && board[nx][ny] === 0) {
        if (dir === -1 || dir === i) {
          if (dp[nx][ny][i] >= dp[point.x][point.y][i] + 100) {
            dp[nx][ny][i] = dp[point.x][point.y][i] + 100;
            queue.push({ x: nx, y: ny, dir: i });
          }
        } else {
          if (dp[nx][ny][i] >= dp[point.x][point.y][dir] + 600) {
            dp[nx][ny][i] = dp[point.x][point.y][dir] + 600;
            queue.push({ x: nx, y: ny, dir: i });
          }
        }
      }
    }
  }
  dp[N - 1][N - 1].sort((a, b) => a - b);
  return dp[N - 1][N - 1][0];
};

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ]),
);
