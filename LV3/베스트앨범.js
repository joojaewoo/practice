const solution = (geners, plays) => {
  const obj = {};
  const arr = [];
  for (let i = 0; i < geners.length; i++) {
    if (!obj[geners[i]]) obj[geners[i]] = { total: 0, list: [] };
    obj[geners[i]].total += plays[i];
    obj[geners[i]].list.push({ value: plays[i], idx: i });
  }
  for (let gener in obj) {
    arr.push({ gener, total: obj[gener].total });
  }
  arr.sort((a, b) => b.total - a.total);

  return arr
    .map(({ gener }) => {
      obj[gener].list.sort((a, b) => {
        if (a.value === b.value) return a.idx - b.idx;
        return b.value - a.value;
      });
      return obj[gener].list.map(({ idx }) => idx).slice(0, 2);
    })
    .flatMap((x) => x);
};
