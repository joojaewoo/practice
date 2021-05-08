const solution = (places) => {
  const ans = [];
  places.forEach((place) => {
    const map = place.map((item) => item.split(''));
    let flag = true;
    const arr = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (map[i][j] === 'P') {
          if (!dfs(i, j, map)) flag = false;
        }
      }
    }
    ans.push(flag ? 1 : 0);
  });
  return ans;
};

const dfs = (i, j, map) => {
  const visit = Array.from(Array(5), () => Array(5).fill(false));
  const st = [{ x: i, y: j }];
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (st.length > 0) {
    const { x, y } = st.pop();
    visit[x][y] = true;
    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];
      if (nx < 0 || nx > 4 || ny < 0 || ny > 4) continue;
      if (Math.abs(i - nx) + Math.abs(j - ny) > 2) continue;
      if (visit[nx][ny]) continue;
      if (map[nx][ny] === 'P') return false;
      else if (map[nx][ny] === 'O') st.push({ x: nx, y: ny });
    }
  }
  return true;
};

console.log(solution([['OOOOO', 'OOOOO', 'OOPOO', 'OOOOO', 'OOOOO']]));
