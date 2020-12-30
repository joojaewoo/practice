const pickingNumbers = (a) => {
  a.sort((a, b) => a - b);
  const queue = [];
  queue.push(a[0]);
  let maxLength = 0;
  for (let i = 1; i < a.length; i++) {
    if (a[i] <= queue[0] + 1) {
      queue.push(a[i]);
    } else {
      maxLength = Math.max(maxLength, queue.length);
      while (queue.length > 0) {
        if (a[i] - 1 > queue[0]) queue.shift();
        else break;
      }
      queue.push(a[i]);
    }
  }
  maxLength = Math.max(maxLength, queue.length);
  return maxLength;
};

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
