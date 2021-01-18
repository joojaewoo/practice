const solution = (s) => {
  if (s.length < 4) return [];
  const ans = [];
  const arr = s.substring(2, s.length - 2).split('},{');
  const visited = new Array(arr.length + 1).fill(false);
  arr.sort((a, b) => a.length - b.length);
  arr.map((item) => {
    const temp = item.split(',');
    for (let i of temp) {
      if (!visited[i]) ans.push(+i);
      visited[i] = true;
    }
  });
  return ans;
};
