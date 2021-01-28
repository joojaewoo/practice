const solution = (citations) => {
  citations.sort((a, b) => a - b);
  const length = citations.length;
  let ans = 1;
  while (true) {
    let idx = 0;
    for (let i = 0; i < length; i++) {
      if (citations[i] < ans) idx++;
      else break;
    }
    if (idx > ans || length - idx < ans) break;
    ans++;
  }
  return ans - 1;
};

console.log(solution([3, 0, 6, 1, 5]));
