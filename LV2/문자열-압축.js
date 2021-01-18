const solution = (s) => {
  let ans = s;
  for (let i = 1; i <= s.length / 2; i++) {
    let temp = '';
    let idx = i;
    let compare = s.substring(0, i);
    let count = 1;
    while (idx < s.length) {
      if (compare === s.substring(idx, idx + i)) count++;
      else {
        temp += count === 1 ? compare : count + compare;
        compare = s.substring(idx, idx + i);
        count = 1;
      }
      idx += i;
    }
    temp += count === 1 ? compare : count + compare;

    if (ans.length > temp.length) ans = temp;
  }
  return ans;
};

console.log(solution('ababcdcdababcdcd'));
