const solution = (play_time, adv_time, logs) => {
  const makeTime = (time) => {
    const [hour, minute, second] = time.split(':');
    return +hour * 3600 + +minute * 60 + +second;
  };
  const makeString = (time) => {
    const arr = [];
    arr.unshift(Math.floor(time % 60));
    time = Math.floor(time / 60);
    arr.unshift(Math.floor(time % 60));
    time = Math.floor(time / 60);
    arr.unshift(time);
    return arr.map((item) => item.toString().padStart(2, 0)).join(':');
  };
  if (play_time <= adv_time) return '00:00:00';
  const playTime = makeTime(play_time);
  const map = Array(playTime + 1).fill(0);
  const advTime = makeTime(adv_time);
  const log = logs.map((item) => {
    const [start, end] = item.split('-').map((item) => makeTime(item));
    map[start]++;
    map[end]--;
    return [start, end];
  });
  for (let i = 1; i <= playTime; i++) map[i] += map[i - 1];
  for (let i = 1; i <= playTime; i++) map[i] += map[i - 1];
  let sum = map[advTime - 1];
  let idx = 0;
  for (let i = advTime - 1; i < playTime; i++) {
    if (sum < map[i] - map[i - advTime]) {
      sum = map[i] - map[i - advTime];
      idx = i - advTime + 1;
    }
  }
  return makeString(idx);
};
