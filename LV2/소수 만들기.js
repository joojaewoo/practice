const solution = (nums) => {
  const dfs = (nums, visit, k, sum, idx) => {
    let ans = 0;
    if (k === 3) {
      let n = 2;
      while (n < sum) {
        if (sum % n === 0) break;
        n++;
      }
      if (n === sum) return 1;
      return 0;
    }
    for (let i = idx; i < visit.length; i++) {
      if (!visit[i]) {
        visit[i] = true;
        ans += dfs(nums, visit, k + 1, sum + nums[i], i + 1);
        visit[i] = false;
      }
    }
    return ans;
  };
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    const visit = new Array(nums.length).fill(null).map((_, idx) => (idx <= i ? true : false));
    ans += dfs(nums, visit, 1, nums[i], i + 1);
  }
  return ans;
};

console.log(solution([1, 2, 3, 4]));
