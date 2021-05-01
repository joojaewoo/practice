const solution = (inputStr) => {
  const arrStr = inputStr.split('');
  let arr = [];
  let ans = 0;
  if (arrStr[0] === ')' || arrStr[0] === '}' || arrStr[0] === ']' || arrStr[0] === '>') return ans;
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === '(' || arrStr[i] === '{' || arrStr[i] === '[' || arrStr[i] === '<') {
      arr.push(arrStr[i]);
    } else if (arrStr[i] === ')' || arrStr[i] === '}' || arrStr[i] === ']' || arrStr[i] === '>') {
      if (arr.length <= 0) return -i;
      if (arr[arr.length - 1] === '[' && arrStr[i] === ']') arr.pop();
      else if (arr[arr.length - 1] === '{' && arrStr[i] === '}') arr.pop();
      else if (arr[arr.length - 1] === '(' && arrStr[i] === ')') arr.pop();
      else if (arr[arr.length - 1] === '<' && arrStr[i] === '>') arr.pop();
      else return -i;
      ans++;
    }
  }
  return arr.length === 0 ? ans : -(inputStr.length - 1);
};
console.log(solution('line [({<plus>)}]'));
