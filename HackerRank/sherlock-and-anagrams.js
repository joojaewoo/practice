const sherlockAndAnagrams = (s) => {
  const set = {};
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      const temp = s.substring(j, j + i + 1);
      const str = temp.split('').sort().join();
      if (set[str]) {
        ans += set[str];
        set[str]++;
      } else set[str] = 1;
    }
  }
  return ans;
};

console.log(sherlockAndAnagrams('cdcd'));
