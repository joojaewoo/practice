const solution = (left, right) => {
  let ans = 0;
  for (let i = left; i <= right; i++) {
    ans += getNum(i) ? i : -i;
  }
  return ans;
};
const getNum = (num) => {
  let ans = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) ans++;
  }
  return ans % 2 === 0 ? true : false;
};

solution(13, 17);
