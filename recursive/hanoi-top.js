const hanoiTop = (n, from, temp, to) => {
  if (n === 1) return console.log(`${n}을 ${from}에서 ${to}로 옮겨요`);
  hanoiTop(n - 1, from, to, temp);
  console.log(`${n}을 ${from}에서 ${to}로 옮겨요`);
  hanoiTop(n - 1, temp, from, to);
};

hanoiTop(4, 'A', 'B', 'C');
