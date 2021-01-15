const solution = (priorities, location) => {
  let ans = -1;
  const arr = priorities.map((value, index) => ({ value, index }));
  priorities.sort((a, b) => b - a);
  for (let i in priorities) {
    while (true) {
      const temp = arr.shift();
      if (temp.value === priorities[i]) {
        if (temp.index === location) ans = +i + 1;
        break;
      }
      arr.push(temp);
    }
    if (ans !== -1) break;
  }
  return ans;
};

console.log(solution([2, 1, 3, 2], 2));
