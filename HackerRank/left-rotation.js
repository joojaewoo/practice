const rotLeft = (a, d) => {
  for (let i = 0; i < d; i++) {
    const temp = a.shift();
    a.push(temp);
  }
  return a;
};

console.log(rotLeft([1, 2, 3, 4, 5], 4));
