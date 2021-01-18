const solution = (s) => {
  const arr = s.split(' ');
  return arr
    .map((item) => {
      if (isNaN(item.charAt(0))) {
        return item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
      }
      return item;
    })
    .join(' ');
};
