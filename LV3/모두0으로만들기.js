const solution = (a, edges) => {
  const sum = a.reduce((acc, cur) => acc + cur);
  if (sum !== 0) return -1;
  const tree = Array.from(Array(a.length), () => []);
  edges.forEach(([u, v]) => {
    tree[u].push(v);
    tree[v].push(u);
  });
  const visit = Array(a.length).fill(false);
  const st = [[0, -1]];
  let ans = 0;
  while (st.length) {
    const [start, parent] = st.pop();
    if (visit[start]) {
      if (parent !== -1) {
        a[parent] += a[start];
        ans += Math.abs(a[start]);
      }
      continue;
    }
    visit[start] = true;
    st.push([start, parent]);
    for (const idx of tree[start]) {
      if (!visit[idx]) st.push([+idx, start]);
    }
  }
  return ans;
};

solution(
  [-5, 0, 2, 1, 2],
  [
    [0, 1],
    [3, 4],
    [2, 3],
    [0, 3],
  ],
);
