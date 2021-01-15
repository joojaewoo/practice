const solution = (skill, skill_tree) => {
  let ans = 0;
  for (let i = 0; i < skill_tree.length; i++) {
    let flag = true;
    let idx = 0;
    for (let j = 0; j < skill_tree[i].length; j++) {
      if (skill.indexOf(skill_tree[i].charAt(j)) === -1) continue;
      if (skill.indexOf(skill_tree[i].charAt(j)) !== idx) {
        flag = false;
        break;
      } else idx++;
    }
    if (flag) ans++;
  }
  return ans;
};

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
