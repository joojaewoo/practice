const solution = (orders, course) => {
  const ans = [];
  const courses = {};
  const combination = (arr, n, k, visit, str, idx) => {
    if (k === n) {
      if (!courses[k][str]) courses[k][str] = 0;
      return courses[k][str]++;
    }
    for (let i = idx; i < visit.length; i++) {
      if (!visit[i]) {
        visit[i] = true;
        combination(arr, n, k + 1, visit, str + arr[i], i);
        visit[i] = false;
      }
    }
  };
  for (let num of course) {
    courses[num] = {};
    for (let menu of orders) {
      combination(menu.split('').sort(), num, 0, Array(menu.length).fill(false), '', 0);
    }
    const temp = Object.entries(courses[num]).sort((a, b) => b[1] - a[1]);
    if (temp.length === 0) continue;
    const max = temp[0][1];
    if (max === 1) continue;
    ans.push(...temp.filter((item) => item[1] === max).map((item) => item[0]));
  }
  return ans.sort();
};

console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
