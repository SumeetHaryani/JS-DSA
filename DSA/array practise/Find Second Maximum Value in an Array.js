const findSecondMaximum = (nums) => {
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;
  for (const i of nums) {
    if (i > max) {
      secondMax = max;
      max = i;
    } else if (i > secondMax) {
      secondMax = i;
    }
  }
  return secondMax;
};
console.log(findSecondMaximum([9, 2, 3, 6]));
