const solution = (A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    ans += A[i] * B[i];
  }
  return ans;
};

console.log(solution([1, 4, 2], [5, 4, 4]));
