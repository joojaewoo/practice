const solution = (numbers) => {
  return numbers.map((item) => {
    if (item % 2 === 0) return item + 1;
    else {
      const arr = item.toString(2).split('');
      const idx = arr.lastIndexOf('0');
      if (idx === -1) arr.splice(1, 0, 0);
      else {
        arr[idx] = 1;
        arr[idx + 1] = 0;
      }
      return parseInt(arr.join(''), 2);
    }
  });
};

console.log(solution([9, 7]));
