const quickSort = (arr, left, right) => {
  if (left >= right) return;
  const start = arr[left];
  let leftIdx = left + 1;
  let rightIdx = right;
  while (leftIdx <= rightIdx) {
    while (start >= arr[leftIdx] && leftIdx <= right) {
      leftIdx++;
    }
    while (start <= arr[rightIdx] && rightIdx > left) {
      rightIdx--;
    }
    if (leftIdx > rightIdx) {
      arr[left] = arr[rightIdx];
      arr[rightIdx] = start;
    } else {
      const temp = arr[leftIdx];
      arr[leftIdx] = arr[rightIdx];
      arr[rightIdx] = temp;
    }
  }
  quickSort(arr, left, rightIdx - 1);
  quickSort(arr, rightIdx + 1, right);
};

const arr = new Array(10).fill(0).map((item, index) => +Math.random().toString(10).substring(2, 4));
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
