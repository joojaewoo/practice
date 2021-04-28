const solution = (m, musicinfos) => {
  m = convert(m);
  musicinfos.sort((a, b) => {
    const [start1, end1] = a.split(',');
    const [start2, end2] = b.split(',');
    const diff1 = getMinute(end1) - getMinute(start1);
    const diff2 = getMinute(end2) - getMinute(start2);
    return diff2 - diff1;
  });
  for (const info of musicinfos) {
    const [start, end, name, music] = info.split(',');
    const diff = getMinute(end) - getMinute(start);
    const totalMusic = ''.padEnd(diff, convert(music));
    const idx = totalMusic.indexOf(m);
    if (idx !== -1) return name;
  }
  return '(None)';
};

const getMinute = (str) => {
  const [hour, min] = str.split(':');
  return +hour * 60 + +min;
};

const convert = (str) =>
  str
    .replace(/C#/gi, 'c')
    .replace(/D#/gi, 'd')
    .replace(/F#/gi, 'f')
    .replace(/G#/gi, 'g')
    .replace(/A#/gi, 'a');

console.log(solution('ABC#', ['12:00,12:04,HELLO,ABC#DEFG', '13:00,13:05,WORLD,ABCDEF']));
