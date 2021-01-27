const solution = (new_id) => {
  let ans = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/[.]+/g, '.');
  if (ans.charAt(0) === '.') ans = ans.substring(1);
  if (ans.charAt(ans.length - 1) === '.') ans = ans.substring(0, ans.length - 1);
  if (ans === '') ans = 'a';
  ans = ans.charAt(14) === '.' ? ans.substring(0, 14) : ans.substring(0, 15);
  if (ans.length < 3) ans = ans.padEnd(3, ans.charAt(ans.length - 1));
  return ans;
};
