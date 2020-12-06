const heapSort = (arr) => {
  let cur = Math.floor((arr.length - 1) / 2);
  while (cur >= 0) {
    heapify(arr, cur, cur * 2 + 1);
    cur--;
  }
};

const heapify = (arr, parent, child) => {
  if (!arr[child]) return;
  if (!arr[child + 1]) {
    if (arr[child] > arr[parent]) {
      swap(arr, child, parent);
    }
    return;
  }
  const max = arr[child] - arr[child - 1] > 0 ? child : child + 1;
  if (arr[max] > arr[parent]) {
    swap(arr, max, parent);
    parent = max;
    heapify(arr, parent, parent * 2 + 1);
  }
};

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const arr = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
heapSort(arr);
console.log(arr);
