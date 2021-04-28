const solution = (files) => {
  const arr = [];
  for (let idx in files) {
    const file = files[idx].toUpperCase();
    const [_, head, num, tail] = file.match(/([A-Za-z-\s.]+)([0-9]{1,5})([a-zA-Z0-9-.\s]+)?/);
    arr.push({ head, num, tail, idx });
  }
  arr.sort((a, b) => {
    if (a.head > b.head) return 1;
    else if (a.head < b.head) return -1;
    return +a.num - +b.num;
  });
  return arr.map(({ idx }) => files[idx]);
};

solution(['img12.png', 'img10.png', 'img02.png', 'img123456 ', 'IMG01.GIF', 'img2.JPG']);
