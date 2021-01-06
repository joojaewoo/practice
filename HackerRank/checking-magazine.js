const checkMagazine = (magazine, note) => {
  const obj = {};

  for (let i = 0; i < note.length; i++) {
    if (obj[note[i]]) {
      obj[note[i]]++;
    } else obj[note[i]] = 1;
  }
  for (let i = 0; i < magazine.length; i++) {
    if (obj[magazine[i]]) obj[magazine[i]] -= 1;
  }
  for (let i in obj) {
    if (obj[i] !== 0) return console.log('No');
  }
  return console.log('Yes');
};

checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']);
