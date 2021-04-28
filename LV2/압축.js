const solution = (msg) => {
  let ans = [];
  let cnt = 1;
  const map = {};
  let pivot = 65;
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(pivot + i)] = cnt++;
  }
  let idx = 0;
  while (idx < msg.length) {
    let str = msg.charAt(idx);
    let i = 1;
    while (map[str] && msg.charAt(idx + i) !== '') {
      str += msg.charAt(idx + i++);
    }
    if (!map[str]) {
      map[str] = cnt++;
      ans.push(map[str.substring(0, str.length - 1)]);
    } else {
      ans.push(map[str]);
      break;
    }
    idx += i - 1;
  }
  return ans;
};
solution('TOBEORNOTTOBEORTOBEORNOT');
