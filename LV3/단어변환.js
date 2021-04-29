const solution = (begin, target, words) => {
  let ans = Infinity;
  if (!words.includes(target)) return 0;
  const visit = Array(words.length).fill(false);
  for (let i in words) {
    if (!check(begin, words[i])) continue;
    ans = Math.min(ans, dfs(target, words[i], words, i, visit, 1));
    visit[i] = false;
  }
  console.log(ans);
  return ans;
};

const dfs = (target, word, words, idx, visit, k) => {
  let ans = Infinity;
  if (target === word) return k;
  visit[idx] = true;
  for (let i = 0; i < words.length; i++) {
    if (i !== +idx && !visit[i] && check(word, words[i])) {
      ans = Math.min(ans, dfs(target, words[i], words, i, visit, k + 1));
      visit[i] = false;
    }
  }
  return ans;
};

const check = (str1, str2) => {
  let k = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) k++;
    if (k > 1) return false;
  }
  return true;
};

solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
