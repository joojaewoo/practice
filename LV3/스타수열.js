const solution = (a) => {
  let ans = 0;
  const obj = count(a);
  for (let cur of obj) {
    let curAns = 0;
    if (ans > cur.value * 2) continue;
    const pivot = cur.idx;
    let piv = false;
    let sub = false;
    for (let value of a) {
      if (value === pivot) {
        if (piv) continue;
        piv = true;
        if (piv && sub) {
          curAns += 2;
          piv = false;
          sub = false;
        }
      } else {
        if (sub) continue;
        sub = true;
        if (piv && sub) {
          curAns += 2;
          piv = false;
          sub = false;
        }
      }
    }
    ans = Math.max(ans, curAns);
  }
  return ans;
};
const count = (a) => {
  const obj = new Array(a.length).fill(0);
  for (let value of a) {
    if (obj[value] === 0) {
      obj[value] = { idx: value, value: 0 };
    }
    obj[value].value++;
  }
  return obj.filter((item) => item.value).sort((a, b) => b.value - a.value);
};

console.log(solution([5, 2, 3, 3, 5, 3]));
