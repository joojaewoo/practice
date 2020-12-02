const solution = (A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let aIdx = 0;
  let bIdx = 0;
  let answer = 0;
  while (aIdx < A.length && bIdx < B.length) {
    if (A[aIdx] < B[bIdx]) {
      answer++;
      aIdx++;
      bIdx++;
    } else {
      bIdx++;
    }
  }
  return answer;
};
console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
