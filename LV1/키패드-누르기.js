const solution = (numbers, hand) => {
  let ans = '';
  let left = { x: 3, y: 0 };
  let right = { x: 3, y: 2 };
  for (let n of numbers) {
    const num = n === 0 ? 11 : n;
    const nx = Math.floor((num - 1) / 3);
    const ny = Math.floor((num - 1) % 3);
    if (n === 1 || n === 4 || n === 7) {
      ans += 'L';
      left = { x: nx, y: ny };
    } else if (n === 3 || n === 6 || n === 9) {
      ans += 'R';
      right = { x: nx, y: ny };
    } else {
      const l = Math.abs(left.x - nx) + Math.abs(left.y - ny);
      const r = Math.abs(right.x - nx) + Math.abs(right.y - ny);
      if (hand === 'right') {
        if (l < r) {
          ans += 'L';
          left = { x: nx, y: ny };
        } else {
          ans += 'R';
          right = { x: nx, y: ny };
        }
      } else {
        if (l <= r) {
          ans += 'L';
          left = { x: nx, y: ny };
        } else {
          ans += 'R';
          right = { x: nx, y: ny };
        }
      }
    }
  }
  return ans;
};

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
