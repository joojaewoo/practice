const solution = (info, query) => {
  const ans = [];
  const map = {};
  info.forEach((item) => {
    dfs(item.split(' '), 0, map);
  });
  for (let info in map) {
    map[info].sort((a, b) => a - b);
  }
  query.forEach((item) => {
    const arr = item.replace(/(and\s)/gi, '').split(' ');
    const str = arr.slice(0, 4).join('');
    const num = binarySearch(map[str], +arr[4]);
    ans.push(num);
  });
  return ans;
};
const binarySearch = (arr, value) => {
  if (!arr || !arr.length) return 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return arr.length - start;
};
const dfs = (arr, idx, map) => {
  if (idx === 4) {
    const str = arr.slice(0, 4).join('');
    if (!map[str]) map[str] = [];
    map[str].push(+arr[4]);
  } else {
    const newArr = arr.filter((_, index) => index !== idx);
    dfs(arr, idx + 1, map);
    newArr.splice(idx, 0, '-');
    dfs(newArr, idx + 1, map);
  }
};

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ],
  ),
);
