const solution = (n) => {
  const arr = Array.from(Array(n), () => new Array(n).fill(0));
  let num = 1;
  let x = -1;
  let y = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      switch (Math.floor(i % 3)) {
        case 0:
          x++;
          break;
        case 1:
          y++;
          break;
        default:
          x--;
          y--;
      }
      arr[x][y] = num++;
    }
  }
  return arr.flat().filter((item) => item !== 0);
};

console.log(solution(4));
