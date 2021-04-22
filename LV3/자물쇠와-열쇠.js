const solution = (key, lock) => {
  const map = Array.from(Array(2 * (key.length - 1) + lock.length), () =>
    Array(2 * (key.length - 1) + lock.length).fill(0),
  );
  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock.length; j++) {
      map[i + key.length - 1][j + key.length - 1] = lock[i][j];
    }
  }
  const sum = lock.reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + !cur, 0), 0);
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < map.length - key.length + 1; x++) {
      for (let y = 0; y < map[x].length - key.length + 1; y++) {
        let cnt = 0;
        for (let p = 0; p < key.length; p++) {
          for (let q = 0; q < key.length; q++) {
            if (
              p + x < key.length - 1 ||
              p + x > map.length - key.length ||
              q + y < key.length - 1 ||
              q + y > map.length - key.length
            )
              continue;
            if (map[p + x][q + y] === 0 && key[p][q] === 1) cnt++;
            else if (map[p + x][q + y] === 1 && key[p][q] === 1) {
              cnt = -1;
              break;
            }
          }
        }
        if (cnt === sum) return true;
      }
    }
    key = rotate(key);
  }
  return false;
};

const rotate = (key) => {
  const arr = Array.from(Array(key.length), () => Array(key.length).fill(0));
  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      arr[j][key.length - 1 - i] = key[i][j];
    }
  }
  return arr;
};

console.log(
  solution(
    [
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
  ),
);
