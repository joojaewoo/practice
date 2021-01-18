const solution = (number, k) => {
  let ans = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    const item = number[i];
    if (ans.length === 0) {
      ans.push(item);
      continue;
    }
    while (ans.length > 0 && ans[ans.length - 1] < item) {
      ans.pop();
      count++;
      if (count === k) return ans.join('') + number.slice(i);
    }
    ans.push(item);
  }
  return ans.slice(0, number.length - k).join('');
};
