const solution = (n) => {
  const length = n.toString(2).replace(/0/g, '').length;
  n++;
  while (true) {
    if (length === n.toString(2).replace(/0/g, '').length) {
      break;
    }
    n++;
  }
  return n;
};
