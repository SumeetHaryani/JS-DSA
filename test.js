var threeSum = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const s = new Set();

    for (let j = i + 2; j < nums.length; j++) {
      // if (j === i + 2) {
      //   continue;
      // }
      s.add(nums[j]);
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (s.has(-nums[i] - nums[j])) {
        res.push([nums[i], nums[j], -nums[i] - nums[j]]);
      }
    }
  }
  return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
