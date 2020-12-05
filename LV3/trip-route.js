const solution = (tickets) => {
  const start = 'ICN';
  const visited = new Array(tickets.length).fill(false);
  const answer = [];
  for (let i in tickets) {
    if (tickets[i][0] === start) dfs(i, visited, tickets, ['ICN'], answer);
  }
  answer.sort((a, b) => {
    for (let i in a) {
      if (a[i] < b[i]) return -1;
      else if (a[i] > b[i]) return 1;
    }
  });
  return answer;
};

const dfs = (idx, visited, tickets, temp, answer) => {
  if (temp.length === tickets.length + 1) {
    answer.push([...temp]);
    return;
  }
  visited[idx] = true;
  for (let i in visited) {
    if (tickets[i][0] === tickets[idx][1] && !visited[i]) {
      temp.push(tickets[idx][1]);
      dfs(i, visited, tickets, temp, answer);
      temp.pop();
    }
  }
  if (temp.length === tickets.length) {
    temp.push(tickets[idx][1]);
    dfs(idx, visited, tickets, temp, answer);
    temp.pop();
  }
  visited[idx] = false;
};

console.log(
  solution([
    ['ICN', 'A'],
    ['A', 'ICN'],
    ['ICN', 'A'],
    ['A', 'B'],
  ]),
);
