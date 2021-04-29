const solution = (relation) => {
  let num = 1;
  const length = relation[0].length;
  let ans = [];
  const visit = Array(length).fill(false);
  const size = Math.pow(2, length);
  while (num < size) {
    const key = num.toString(2).padStart(length, '0');
    const set = new Set();
    let flag = true;
    for (let i = 0; i < relation.length; i++) {
      let str = '';
      for (let j = 0; j < relation[i].length; j++) {
        if (key.charAt(j) === '1') str += relation[i][j];
      }
      if (set.has(str)) {
        flag = false;
        break;
      }
      set.add(str);
    }
    if (flag) ans.push(key);
    num++;
  }
  ans.sort((a, b) => {
    return (
      a.split('').reduce((acc, cur) => +acc + +cur, 0) -
      b.split('').reduce((acc, cur) => +acc + +cur, 0)
    );
  });
  let answer = 0;
  const obj = {};
  for (const key of ans) {
    let flag = true;
    for (let i in obj) {
      const cnt = i.split('').reduce((acc, cur) => +acc + +cur, 0);
      let tempCnt = 0;
      for (let j = 0; j < i.length; j++) {
        if (i.charAt(j) === '1' && key.charAt(j) === '1') {
          tempCnt++;
        }
      }
      if (cnt === tempCnt) {
        flag = false;
        break;
      }
    }
    if (flag) {
      obj[key] = 0;
      answer++;
    }
  }
  return answer;
};
console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ]),
);
