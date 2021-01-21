const solution = (n, words) => {
  let num = 2;
  const set = new Set();
  set.add(words[0]);
  for (let i = 1; i < words.length; i++) {
    if (
      set.has(words[i]) ||
      words[i].length < 1 ||
      words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)
    ) {
      return [((num - 1) % n) + 1, Math.ceil(num / n)];
    }
    set.add(words[i]);
    num++;
  }
  return [0, 0];
};

console.log(
  solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']),
);
