// Sample Input #
// arr = [9,2,3,6]
// Sample Output #
// 2
const findMinimum = (arr) => {
  let currentMin = arr[0];
  for (const i of arr) {
    if (i < currentMin) currentMin = i;
  }
  return currentMin;
};
console.log(findMinimum([9, 2, -3, 6]));
