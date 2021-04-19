const solution = (s) => {
  const arr = s.split('');
  let ans = 0;
  let count = 0;
  while (count < s.length) {
    ans += check(arr);
    const left = arr.shift();
    arr.push(left);
    count++;
  }
  console.log(ans);
  return ans;
};
const check = (arr) => {
  const st = [];
  for (let str of arr) {
    if (str === '[' || str === '{' || str === '(') st.push(str);
    else {
      if (st.length <= 0) return 0;
      else {
        if (st[st.length - 1] === '[' && str === ']') st.pop();
        else if (st[st.length - 1] === '{' && str === '}') st.pop();
        else if (st[st.length - 1] === '(' && str === ')') st.pop();
      }
    }
  }
  if (st.length > 0) return 0;
  return 1;
};
