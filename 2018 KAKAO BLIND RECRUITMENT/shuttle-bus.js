const solution = (n, t, m, timetable) => {
  const ans = {};
  let time = 900;
  const newTimetable = timetable.map((item) => +item.replace(/:/gi, ''));
  newTimetable.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    ans[time] = [];
    time += t;
    if (time % 100 >= 60) {
      time += 40;
    }
  }

  newTimetable.map((time) => {
    for (let i in ans) {
      if (time <= i && ans[i].length < m) {
        ans[i].push(time);
        break;
      }
    }
  });
  time = Object.keys(ans)[Object.keys(ans).length - 1];
  if (ans[time].length >= m) {
    time = ans[time][m - 1] - 1;
    if (time % 100 >= 60) time -= 40;
  }
  time = time.toString().padStart(4, '0');
  const prev = time.substring(0, 2);
  const next = time.substring(2);
  return prev + ':' + next;
};

console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03']));
