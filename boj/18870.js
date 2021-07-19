const fs = require('fs');
const [_, input] = fs.readFileSync('./stdin').toString().trim().split('\n');

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

const solution = (input) => {
  const arr = input.split(' ');
  const sortedArr = [...new Set(arr)].sort((a, b) => a - b).map(Number);
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    const idx = binarySearch(sortedArr, arr[i]);
    ans.push(idx);
  }
  return ans.join(' ');
};

console.log(solution(input));
