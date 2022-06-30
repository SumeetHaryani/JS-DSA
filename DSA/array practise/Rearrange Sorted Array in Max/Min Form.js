// Implement a function called maxMin(arr), which will rearrange the elements of a sorted array so that the first position will have the largest number, the second will have the smallest, and the third will have the second-largest
// Sample Input #
// arr = [1,2,3,4,5]
// Sample Output #
// arr = [5,1,4,2,3]
function maxMin(arr) {
  const result = [];
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    result.push(arr[arr.length - i - 1]);
    result.push(arr[i]);
  }
  // odd arr length middle elem wil come last
  if (arr.length % 2 ) {
    result.push(arr[Math.floor(arr.length / 2)]);
  }
  return result;
}

console.log(maxMin([1, 2, 3, 4, 5]));
