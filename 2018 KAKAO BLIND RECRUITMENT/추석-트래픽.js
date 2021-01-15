const solution = (lines) => {
  let arr = [];
  let start = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split(' ');
    const time = line[1].split(':');
    const endTime = +time[0] * 3600 + +time[1] * 60 + +time[2];
    const diffTime = +line[2].replace(/[s]/g, '');
    arr.push({ start: endTime - diffTime + 0.001, end: endTime });
    start.push(endTime);
    start.push(endTime - diffTime + 0.001);
  }
  let ans = 1;
  for (let i = 0; i < start.length; i++) {
    let temp = 0;
    for (let j = 0; j < arr.length; j++) {
      if (start[i] > arr[j].end || start[i] + 1 <= arr[j].start) continue;
      temp++;
    }
    ans = Math.max(ans, temp);
  }
  return ans;
};

console.log(solution(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s']));
