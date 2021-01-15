const solution = (participant, completion) => {
  let obj = {};
  for (let player of completion) {
    if (!obj[player]) {
      obj[player] = 0;
    }
    obj[player]++;
  }
  for (let player of participant) {
    if (!obj[player]) return player;
    if (obj[player] < 1) return player;
    obj[player]--;
  }
};
