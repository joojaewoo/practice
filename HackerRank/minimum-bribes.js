const minimumBribes = (q) => {
  const moveCount = new Array(q.length + 1).fill(0);
  for (let i = 0; i < q.length; i++) {
    if (q[i] > q[i + 1]) {
      moveCount[q[i]]++;
      const temp = q[i];
      q[i] = q[i + 1];
      q[i + 1] = temp;
      i -= 2;
    }
    if (moveCount[q[i]] > 2) return console.log('Too chaotic');
  }
  const count = moveCount.reduce((prev, cur) => prev + cur);
  console.log(count);
};
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
