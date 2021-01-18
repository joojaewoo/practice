const solution = (progresses, speeds) => {
  const ans = [];
  let cur = 0;
  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    while (progresses.length > 0) {
      if (progresses[0] >= 100) {
        cur++;
        progresses.shift();
        speeds.shift();
      } else break;
    }
    if (cur > 0) {
      ans.push(cur);
      cur = 0;
    }
  }
  return ans;
};

console.log(solution([93, 30, 55], [1, 30, 5]));
