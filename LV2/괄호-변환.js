const solution = (p) => {
  if (p === '') return '';
  let pivot = 0;
  let count = 0;
  do {
    count += p[pivot++] === '(' ? 1 : -1;
  } while (count !== 0);
  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot));
  if (u[0] === '(' && u[u.length - 1] === ')') return u + v;
  else return '(' + v + ')' + reverse(u);
};

const reverse = (str) =>
  str
    .slice(1, str.length - 1)
    .split('')
    .map((c) => (c === '(' ? ')' : '('))
    .join('');
