const solution = (s) => {
  let zero = 0;
  let count = 0;
  while (s.length > 1) {
    zero += s.match(/0/g) ? s.match(/0/g).length : 0;
    s = s.replace(/0/g, '').length.toString(2);
    count++;
  }
  return [count, zero];
};

console.log(solution('01110'));
