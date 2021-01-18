const solution = (numbers) => {
  numbers.sort((a, b) => {
    let strA = a.toString();
    let strB = b.toString();
    return strB + strA > strA + strB ? -1 : 1;
  });
  return numbers[0] === 0 ? '0' : numbers.join('');
};
