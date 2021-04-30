const solution = (operations) => {
  const arr = [];
  for (const str of operations) {
    const [command, num] = str.split(' ');
    if (command === 'I') arr.push(+num);
    else {
      if (num === '1') arr.pop();
      else arr.shift();
    }
    arr.sort((a, b) => a - b);
  }
  return arr.length === 0 ? [0, 0] : [arr[arr.length - 1], arr[0]];
};
