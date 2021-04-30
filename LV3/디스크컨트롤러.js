const solution = (jobs) => {
  const N = jobs.length;
  let ans = 0;
  jobs.sort(([a], [b]) => a - b);
  const arr = [];
  let time = 0;
  while (jobs.length > 0 || arr.length > 0) {
    while (jobs.length > 0) {
      if (jobs[0][0] <= time) arr.push(jobs.shift());
      else break;
    }
    if (arr.length <= 0) {
      time = jobs[0][0];
      continue;
    }
    arr.sort(([_, a], [__, b]) => a - b);
    const [start, during] = arr.shift();
    ans += time - start + during;
    time += during;
  }
  return Math.floor(ans / N);
};
