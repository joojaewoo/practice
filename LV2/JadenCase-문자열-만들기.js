const solution = (s) =>
  s
    .split(' ')
    .map((item) => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase())
    .join(' ');
