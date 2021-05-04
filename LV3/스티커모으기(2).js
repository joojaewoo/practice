const solution = (sticker) => {
  const N = sticker.length;
  if (N === 1) return sticker[0];
  const dp1 = Array(N).fill(0);
  const dp2 = Array(N).fill(0);
  dp1[0] = sticker[0];
  dp1[1] = dp1[0];
  dp2[0] = 0;
  dp2[1] = sticker[1];
  for (let i = 2; i < N - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
  }
  for (let i = 2; i < N; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }
  return Math.max(dp1[N - 2], dp2[N - 1]);
};
