const fs = require('fs');
const input = fs.readFileSync('./stdin').toString().split('\r\n');

const count = +input[0];
const map = [];
let k;
const list = [];
for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    if (i < count) {
      map.push(input[i].split(' ').map((item) => +item));
    } else if (i === count) k = +input[i];
    else {
      list.push(input[i].split(' ').map((item) => +item));
    }
  }
}

const solution = (n, map, k, list) => {
  let totalDepth = 0;
  let temp = 1;
  const tree = [];
  for (let i = 0; i <= n; i++) {
    tree[i] = [];
  }
  map.map((item) => {
    tree[item[0]].push(item[1]);
    tree[item[1]].push(item[0]);
  });
  while (temp <= n) {
    temp <<= 1;
    totalDepth++;
  }
  const depth = new Array(n + 1).fill(0);
  const dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(totalDepth).fill(0);
  }
  dfs(1, 1, depth, dp, tree);
  list.map((item) => lca(dp, depth, item[0], item[1], totalDepth));
};

const dfs = (node, d, depth, dp, tree) => {
  depth[node] = d;
  tree[node].forEach((item) => {
    if (depth[item] == 0) {
      dfs(item, d + 1, depth, dp, tree);
      dp[item][0] = node;
    }
  });
};

const makeTree = (dp, totalDepth, n) => {
  for (let i = 1; i < totalDepth; i++) {
    for (let j = 1; j <= n; j++) {
      dp[j][i] = dp[dp[j][i - 1]][i - 1];
    }
  }
};

const lca = (dp, depth, u, v, totalDepth) => {
  if (depth[u] > depth[v]) {
    const temp = u;
    u = v;
    v = temp;
  }
  for (let i = totalDepth - 1; i >= 0; i--) {
    if (Math.pow(2, i) <= depth[v] - depth[u]) {
      v = dp[v][i];
    }
  }
  if (u === v) {
    return console.log(u);
  }
  for (let i = totalDepth - 1; i >= 0; i--) {
    if (dp[u][i] != dp[v][i]) {
      u = dp[u][i];
      v = dp[v][i];
    }
  }
  return console.log(dp[u][0]);
};

solution(count, map, k, list);

//  solution(
//   15,
//   [
//     [1, 2],
//     [1, 3],
//     [2, 4],
//     [3, 7],
//     [6, 2],
//     [3, 8],
//     [4, 9],
//     [2, 5],
//     [5, 11],
//     [7, 13],
//     [10, 4],
//     [11, 15],
//     [12, 5],
//     [14, 7],
//   ],
//   6,
//   [
//     [6, 11],
//     [10, 9],
//     [2, 6],
//     [7, 6],
//     [8, 13],
//     [8, 15],
//   ],
// );
