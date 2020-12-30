const sockMerchant = (n, ar) => {
  ar.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (ar[i] === ar[i - 1]) {
      ans++;
      i++;
    }
  }
  return ans;
};

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
