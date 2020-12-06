const mergeSort = (arr, start, end) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
};

const merge = (arr, start, mid, end) => {
  const sorted = new Array(end).fill(0);
  let left = start;
  let right = mid + 1;
  let k = start;
  while (left <= mid && right <= end) {
    if (arr[left] <= arr[right]) {
      sorted[k++] = arr[left++];
    } else {
      sorted[k++] = arr[right++];
    }
  }
  if (left > mid) {
    for (let i = right; i <= end; i++) {
      sorted[k++] = arr[i];
    }
  } else {
    for (let i = left; i <= mid; i++) {
      sorted[k++] = arr[i];
    }
  }
  for (let i = start; i <= end; i++) {
    arr[i] = sorted[i];
  }
};

const arr = new Array(10).fill(0).map((item, index) => +Math.random().toString(10).substring(2, 4));
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
