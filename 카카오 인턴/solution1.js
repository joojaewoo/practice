const solution = (s) => {
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let idx = 0;
  let str = '';
  const ans = [];
  while (idx < s.length) {
    if (!isNaN(s.charAt(idx))) {
      ans.push(s.charAt(idx));
    } else {
      str += s.charAt(idx);
      const index = arr.indexOf(str);
      if (index !== -1) {
        ans.push(index);
        str = '';
      }
    }
    idx++;
  }
  return +ans.join('');
};

console.log(solution('one4seveneight'));
