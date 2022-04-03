// Array of Products of All Elements
// Sample Input #
// arr = [1,2,3,4]
// Sample Output #
// arr = [24,12,8,6]
// Solution #1: Using a nested loop #

const findProduct = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        continue;
      }
      prod *= arr[j];
    }
    result.push(prod);
  }
  return result;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  let productLeft = [];
  let product = 1;
  for (var i = 0; i < nums.length; i++) {
    product *= nums[i];
    productLeft.push(product);
  }
  product = 1;
  //realtime right running prod
  for (var i = nums.length - 1; i > 0; i--) {
    productLeft[i] = productLeft[i - 1] * product;
    product *= nums[i];
  }
  productLeft[0] = product;
  return productLeft;
};
console.log(findProduct([1, 2, 3, 4, 5]));
