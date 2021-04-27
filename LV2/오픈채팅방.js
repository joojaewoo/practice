const solution = (record) => {
  const user = {};
  const ans = [];
  for (let str of record) {
    const [action, uid, nickname] = str.split(' ');
    if (!user[uid]) {
      user[uid] = nickname;
    }
    switch (action) {
      case 'Change':
        user[uid] = nickname;
        break;
      case 'Enter':
        user[uid] = nickname;
        ans.push({ id: uid, str: '님이 들어왔습니다.' });
        break;
      default:
        ans.push({ id: uid, str: '님이 나갔습니다.' });
    }
  }
  return ans.map(({ id, str }) => `${user[id]}${str}`);
};

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ]),
);
