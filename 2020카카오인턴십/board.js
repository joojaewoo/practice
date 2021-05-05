const solution = (board) => {
  const N = board.length;
  const direction = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];
  const queue = [[0, 0, null, 0]];
  while (queue.length !== 0) {
    const [x, y, dir, cost] = queue.shift();
    if (board[x][y] < cost && board[x][y] > 0) continue;
    board[x][y] = cost;
    direction.forEach(([i, j], ndir) => {
      if (dir !== null && Math.abs(ndir - dir) === 2) return;
      const [nx, ny] = [x + i, y + j];
      if (0 > nx || nx >= N || 0 > ny || ny >= N || board[nx][ny] === 1) return;
      queue.push([nx, ny, ndir, dir !== null && dir !== ndir ? cost + 600 : cost + 100]);
    });
  }
  return board[N - 1][N - 1];
};
