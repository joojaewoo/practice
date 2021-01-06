const repeatedString = (s, n) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === 'a') count += 1;
  }
  const quotient = Math.floor(n / s.length);
  const rest = n % s.length;
  let ans = count * quotient;
  for (let i = 0; i < rest; i++) {
    if (s.charAt(i) === 'a') ans++;
  }
  return ans;
};

console.log(repeatedString('aba', 10));
