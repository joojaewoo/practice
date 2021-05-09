const solution = (answer) => {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const ans = [];
  let sum = [0, 0, 0];
  answer.forEach((item, idx) => {
    if (one[idx % one.length] === item) sum[0]++;
    if (two[idx % two.length] === item) sum[1]++;
    if (three[idx % three.length] === item) sum[2]++;
  });
  const max = Math.max(sum[0], sum[1], sum[2]);
  if (max === sum[0]) ans.push(1);
  if (max === sum[1]) ans.push(2);
  if (max === sum[2]) ans.push(3);
  return ans;
};
