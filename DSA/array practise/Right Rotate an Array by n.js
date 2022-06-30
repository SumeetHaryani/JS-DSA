const rightRotate = (arr, k) => {
  arr = arr.reverse(arr, 0, arr.length);
  arr = arr.reverse(arr, 0, k - 1);
  arr = arr.reverse(arr, k, arr.length);
  return arr;
};
// rotate(arr[], d, n)
//   reverse(arr[], 0, n-1) ;
//   reverse(arr[], 0, d-1);
//   reverse(arr[], d, n-1);
// O(n)
function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
console.log(rightRotate([1, 2, 3, 4, 5], 3));
