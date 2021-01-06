const twoStrings = (s1, s2) => {
  const set = new Set();
  const str1 = s1.split('');
  const str2 = s2.split('');
  str1.map((item) => {
    set.add(item);
  });
  for (let item of str2) {
    if (set.has(item)) {
      return 'YES';
    }
  }
  return 'NO';
};
