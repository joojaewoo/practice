const solution = (str1, str2) => {
  if (str1.length > str2.length) {
    const temp = str1;
    str1 = str2;
    str2 = temp;
  }

  let count = 0;
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    const str = str1.substring(i, i + 2).replace(/[^a-zA-Z]/, '');
    str.length === 2 ? arr1.push(str.toLowerCase()) : '';
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const str = str2.substring(i, i + 2).replace(/[^a-zA-Z]/, '');
    str.length === 2 ? arr2.push(str.toLowerCase()) : '';
  }
  const sum = arr1.length + arr2.length;
  arr1.sort();
  arr2.sort();
  while (arr1.length > 0) {
    const str = arr1.shift();
    const idx = arr2.indexOf(str);
    if (idx !== -1) {
      count++;
      arr2.splice(idx, 1);
    }
  }
  return sum === 0 ? 65536 : Math.floor((count / (sum - count)) * 65536);
};
