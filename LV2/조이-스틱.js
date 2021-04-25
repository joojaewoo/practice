const solution = (name) => {
  // const find = (visit, idx, names) => {
  //   let r = idx+1;
  //   let l = idx -1;
  //   for(let i =0;i<names.length;i++){
  //     if(visit[r])
  //   }
  // }
  let ans = 0;
  let pivot = 'A';
  const names = name.split('');
  const visit = names.map((item) => (item === 'A' ? true : false));
  for (let char of names) {
    const diff = pivot.charCodeAt(0) - 'A'.charCodeAt(0) + 'Z'.charCodeAt(0) - char.charCodeAt(0);
    if (diff <= Math.abs(pivot.charCodeAt(0) - char.charCodeAt(0))) ans += diff + 1;
    else ans += Math.abs(pivot.charCodeAt(0) - char.charCodeAt(0)) + 1;
    ans++;
    pivot = char;
  }
  return ans - 1;
};
