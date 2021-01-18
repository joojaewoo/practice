const solution = (board) => {
  let ans = 0;
  const dp = new Array(board.length + 1).fill(0);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(board.length + 1).fill(0);
  }
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board.length; j++) {
      dp[i][j] = board[i - 1][j - 1];
      if (dp[i][j] > 0) {
        dp[i][j] = Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j])) + 1;
      }
      ans = Math.max(ans, dp[i][j]);
    }
  }
  return ans * ans;
};
