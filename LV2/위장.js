const solution = (clothes) => {
  const obj = {};
  let ans = 1;
  for (let i = 0; i < clothes.length; i++) {
    if (!obj[clothes[i][1]]) obj[clothes[i][1]] = { num: 0 };
    obj[clothes[i][1]].num++;
  }
  for (let i in obj) {
    ans *= obj[i].num + 1;
  }
  return ans - 1;
};
