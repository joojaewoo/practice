const solution = (nodeinfo) => {
  const info = nodeinfo.map((node, index) => ({
    x: node[0],
    y: node[1],
    index: index + 1,
  }));
  info.sort((a, b) => {
    if (a.y === b.y) return a.x - b.x;
    return b.y - a.y;
  });
  const root = info[0];

  for (let i = 1; i < info.length; i++) {
    makeTree(root, info[i]);
  }

  const arrPre = [];
  const arrPost = [];

  preOrder(root, arrPre);
  postOrder(root, arrPost);

  return [arrPre, arrPost];
};

const makeTree = (root, node) => {
  if (root.x > node.x) {
    if (root.left) {
      makeTree(root.left, node);
    } else {
      root.left = node;
    }
  } else {
    if (root.right) {
      makeTree(root.right, node);
    } else {
      root.right = node;
    }
  }
};

const preOrder = (node, ans) => {
  if (node) {
    ans.push(node.index);
    preOrder(node.left, ans);
    preOrder(node.right, ans);
  }
};

const postOrder = (node, ans) => {
  if (node) {
    postOrder(node.left, ans);
    postOrder(node.right, ans);
    ans.push(node.index);
  }
};

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ]),
);
