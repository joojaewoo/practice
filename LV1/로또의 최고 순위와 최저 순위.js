const solution = (lottes, win_nums) => {
  const set = new Set();
  const zeroCnt = lottes.reduce((acc, cur) => acc + (cur === 0 ? 1 : 0), 0);
  lottes.forEach((item) => set.add(item));
  const lowCnt = win_nums.reduce((acc, item) => acc + (set.has(item) ? 1 : 0), 0);
  return [lowCnt + zeroCnt < 2 ? 6 : 7 - (lowCnt + zeroCnt), lowCnt < 2 ? 6 : 7 - lowCnt];
};
