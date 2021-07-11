const solution = (n, k, cmd) => {
  let idx = k;
  let ans = '';
  let head = { idx: 0, next: null, prev: null };
  let cur = head;
  for (let i = 1; i < n; i++) {
    cur.next = {
      idx: i,
      next: null,
      prev: cur,
    };
    cur = cur.next;
  }
  const del = [];
  cur = head;

  for (let i = 0; i < k; i++) cur = cur.next;

  cmd.forEach((item) => {
    const [ins, cnt] = item.split(' ');
    switch (ins) {
      case 'D':
        for (let i = 0; i < cnt; i++) if (cur.next) cur = cur.next;
        break;
      case 'C':
        del.push(cur);
        if (cur.prev) cur.prev.next = cur.next;
        if (cur.next) cur.next.prev = cur.prev;
        if (cur.next) cur = cur.next;
        else cur = cur.prev;
        break;
      case 'U':
        for (let i = 0; i < cnt; i++) if (cur.prev) cur = cur.prev;
        break;
      case 'Z':
        const node = del.pop();
        if (node.prev) node.prev.next = node;
        if (node.next) node.next.prev = node;
    }
  });

  const delArr = del.map(({ idx }) => idx).sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (delArr.length > 0 && i === delArr[0]) {
      ans += 'X';
      delArr.shift();
    } else ans += 'O';
  }

  return ans;
};
