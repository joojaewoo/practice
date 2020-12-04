const solution = (n, results) => {
  let ans = 0;
  const answer = {};
  for (let i = 1; i <= n; i++) {
    answer[i] = { win: [], lose: [] };
  }
  results.map((result) => {
    answer[result[0]].win.push(result[1]);
    answer[result[1]].lose.push(result[0]);
  });
  for (let i in answer) {
    if (answer[i].lose.length + answer[i].win.length !== n - 1) {
      dfsWin(i, answer, answer[i], Array(n).fill(false));
      dfsLose(i, answer, answer[i], Array(n).fill(false));
    }
  }
  for (let i in answer) {
    if (answer[i].lose.length + answer[i].win.length === n - 1) ans++;
  }
  return ans;
};

const dfsWin = (index, answer, ans, visited) => {
  if (visited[index]) return;
  visited[index] = true;
  answer[index].win.map((winner) => {
    if (!ans.win.includes(winner)) ans.win.push(winner);
    dfsWin(winner, answer, ans, visited);
  });
};

const dfsLose = (index, answer, ans, visited) => {
  if (visited[index]) return;
  visited[index] = true;
  answer[index].lose.map((loser) => {
    if (!ans.lose.includes(loser)) ans.lose.push(loser);
    dfsLose(loser, answer, ans, visited);
  });
};

console.log(
  solution(8, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
  ]),
);
