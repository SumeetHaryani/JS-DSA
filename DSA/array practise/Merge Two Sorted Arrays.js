const arr1 = [2, 5, 7, 9, 15];
const arr2 = [1, 3, 7, 8, 15];

// sol1 nlogn
const mergeArr = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};
console.log(mergeArr(arr1, arr2));

// Solution #2: Creating a new array #
// The time complexity for this algorithm is O(n+m)O(n+m), where nn and mm are the lengths of arr1 and arr2, respectively. This is because both the arrays are iterated over once.
const mergeArrays = (arr1, arr2) => {
  let i = (j = 0);
  const temp = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      temp.push(arr1[i]);
      i++;
    } else {
      temp.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    temp.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    temp.push(arr2[j]);
    j++;
    }
    return temp
};
console.log(mergeArrays([4, 5, 6], [-2, -1, 0, 7]));
