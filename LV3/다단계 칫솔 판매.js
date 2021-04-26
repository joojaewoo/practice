const solution = (enroll, referral, seller, amount) => {
  const tree = {};
  tree.root = { value: 0 };
  for (let i = 0; i < enroll.length; i++) {
    const parent = referral[i] !== '-' ? referral[i] : 'root';
    tree[enroll[i]] = { value: 0, parent };
  }
  for (let i = 0; i < seller.length; i++) {
    let person = seller[i];
    let price = amount[i] * 100;
    while (person && price > 0) {
      if (person === 'root') {
        tree[person].value += price;
        break;
      }
      const tenPercent = Math.floor(price * 0.1);
      tree[person].value += price - tenPercent;
      person = tree[person].parent;
      price = tenPercent;
    }
  }
  return enroll.map((item) => tree[item].value);
};
