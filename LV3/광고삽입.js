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
    console.log(arr.map((item) => item.toString().padStart('0', 2)));
    return arr.map((item) => item.toString().padStart(2, 0)).join(':');
  };
  if (play_time <= adv_time) return '00:00:00';
  const map = new Array(360000).fill(0);
  const set = new Set();
  const advTime = makeTime(adv_time);
  const log = logs.flatMap((item) => {
    const [start, end] = item.split('-').map((item) => makeTime(item));
    for (let i = start; i < end; i++) {
      map[i] += 1;
    }
    return [start, end];
  });
  const arr = [];
  let idx = 0;
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < advTime; i++) {
    sum += map[i];
    arr.push(map[i]);
  }
  for (let i = advTime; i < makeTime(play_time); i++) {
    sum += map[i];
    arr.push(map[i]);
    sum -= arr.shift();
    if (sum > maxSum) {
      idx = i - advTime + 1;
      maxSum = sum;
    }
  }
  return makeString(idx);
};

console.log(
  solution('02:03:55', '00:14:15', [
    '01:20:15-01:45:14',
    '00:40:31-01:00:00',
    '00:25:50-00:48:29',
    '01:30:59-01:53:29',
    '01:37:44-02:02:30',
  ]),
);
