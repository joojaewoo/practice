const solution = (gems) => {
  const set = new Set();
  let num = 0;
  for (let i of gems) {
    set.add(i);
  }
  const check = {};
  for (let i of set) {
    check[i] = 0;
    num++;
  }
  let left = 0;
  let right = 0;
  const answer = [];
  let curNum = 0;
  gems.map((gem) => {
    if (check[gem] === 0) {
      curNum += 1;
    }
    check[gem] += 1;
    while (curNum === num) {
      answer.push([left + 1, right + 1]);
      check[gems[left]]--;
      if (check[gems[left]] === 0) {
        curNum -= 1;
      }
      left++;
    }
    right++;
  });
  answer.sort((a, b) => {
    const distA = a[1] - a[0];
    const distB = b[1] - b[0];
    if (distA === distB) {
      return a[0] - b[0];
    }
    return distA - distB;
  });
  return answer[0];
};

console.log(solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']));
