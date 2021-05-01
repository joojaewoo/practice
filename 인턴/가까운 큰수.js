const solution = (array) => {
  const ans = Array(array.length).fill(-1);
  const st = [{ idx: 0, value: array[0] }];
  for (let i = 1; i < array.length; i++) {
    if (st[st.length - 1].value < array[i]) {
      while (st.length > 0 && st[st.length - 1].value < array[i]) {
        const { idx } = st.pop();
        if (ans[idx] === -1) ans[idx] = i;
        else {
          const dist = i - idx - idx + ans[idx];
          if (dist < 0) ans[idx] = i;
        }
      }
    }
    if (st.length > 0) {
      if (st[st.length - 1].value > array[i]) {
        ans[i] = st[st.length - 1].idx;
      }
      if (st[st.length - 1].value === array[i]) {
        ans[i] = ans[st[st.length - 1].idx];
      }
    }
    st.push({ value: array[i], idx: i });
  }
  while (st.length > 0) {
    const { value, idx } = st.pop();
    if (value > array[array.length - 1]) {
      ans[array.length - 1] = idx;
      break;
    }
  }
  console.log(ans);
  return ans;
};

const solution2 = (array) => {
  const ans = [];
  for (let i = 0; i < array.length; i++) {
    const pivot = array[i];
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 || right < array.length) {
      if (left >= 0 && array[left] > pivot) {
        ans.push(left);
        break;
      } else if (right < array.length && array[right] > pivot) {
        ans.push(right);
        break;
      }
      left--;
      right++;
      if (left < 0 && right >= array.length) {
        ans.push(-1);
        break;
      }
    }
  }
  console.log(ans);
  return ans;
};
solution([7, 7, 8, 7, 7, 9]);
solution2([7, 7, 8, 7, 7, 9]);
