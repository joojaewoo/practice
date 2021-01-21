const solution = (nums) => {
  const set = new Set(nums);
  return set.size > nums.length / 2 ? Math.floor(nums.length / 2) : set.size;
};
