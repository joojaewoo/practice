const solution = (s) => {
  const stack = [];
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
      continue;
    }
    if (stack[stack.length - 1] === arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
};
