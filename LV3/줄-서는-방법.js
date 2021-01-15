const solution = (n, k) => {
  let answer = [];
  const arr = new Array(n).fill(0).map((item, idx) => idx + 1);
  const fac = makeFac(n);
  k -= 1;
  let idx = 1;
  while (k > 0) {
    const num = Math.floor(k / fac[n - idx]);
    const choice = arr[num];
    answer.push(choice);
    arr.splice(num, 1);
    k -= num * fac[n - idx];
    idx++;
  }
  answer = [...answer, ...arr];
  return answer;
};

const makeFac = (n) => {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] * i);
  }
  return arr;
};

console.log(solution(4, 6));
