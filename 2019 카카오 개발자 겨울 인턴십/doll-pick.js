const solution = (board, moves) => {
  const stack = [];
  let ans = 0;
  for (let i = 0; i < moves.length; i++) {
    let idx = 0;
    while (idx < board.length && board[idx][moves[i] - 1] === 0) {
      idx++;
    }
    if (idx >= board.length) continue;
    if (stack.length === 0) {
      stack.push(board[idx][moves[i] - 1]);
    } else {
      if (stack[stack.length - 1] === board[idx][moves[i] - 1]) {
        stack.pop();
        ans += 2;
      } else {
        stack.push(board[idx][moves[i] - 1]);
      }
    }
    board[idx][moves[i] - 1] = 0;
  }
  return ans;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
);
