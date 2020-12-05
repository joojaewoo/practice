const solution = (N, number) => {
  if (N === number) return 1;
  const MAX = 8;
  const dp = [];
  for (let i = 0; i < MAX; i++) {
    dp[i] = new Set();
    dp[i].add(getInitNum(N, +i));
  }
  for (let i = 1; i < MAX; i++) {
    for (let j = 0; j < i; j++) {
      for (let x of dp[j]) {
        for (let y of dp[i - j - 1]) {
          dp[i].add(x + y);
          dp[i].add(x - y);
          dp[i].add(x * y);
          if (y !== 0) {
            dp[i].add(Math.ceil(x / y));
          }
        }
      }
    }
    if (dp[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
};

const getInitNum = (N, index) => {
  let answer = 0;
  while (index >= 0) {
    answer += Math.pow(10, index--) * N;
  }
  return answer;
};

console.log(solution(5, 31168));
