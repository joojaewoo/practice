const solution = (s) => {
  const ans = [];
  s.forEach((str) => {
    let insertStr = '';
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
      const c = str.charAt(i);
      if (strArr.length >= 2) {
        const b = strArr.pop();
        const a = strArr.pop();
        if (a === '1' && b === '1' && c === '0') {
          insertStr += '110';
          continue;
        }
        strArr.push(a);
        strArr.push(b);
      }
      strArr.push(c);
    }
    if (insertStr === '') ans.push(str);
    else {
      const tempStr = strArr.join('');
      const idx = tempStr.lastIndexOf('0') + 1;
      ans.push(tempStr.substring(0, idx) + insertStr + tempStr.substring(idx));
    }
  });
  return ans;
};
console.log(solution(['1101100']));
