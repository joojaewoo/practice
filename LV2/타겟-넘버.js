const solution = (numbers, target) => {
  const dfs = (numbers, k, target, sum) => {
    let ans = 0;
    if (numbers.length === k) return sum === target ? 1 : 0;
    ans += dfs(numbers, k + 1, target, sum + numbers[k]);
    ans += dfs(numbers, k + 1, target, sum - numbers[k]);
    return ans;
  };
  return dfs(numbers, 0, target, 0);
};

console.log(solution([1, 1, 1, 1, 1], 3));
