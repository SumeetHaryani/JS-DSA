// Brute Force # o(n^2)
const findSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
};
// Sorting and Two-Pointers technique. o(Nlogn)
// Sorting and Binary search algorithm. o(Nlogn)

// using HashMap o(N) space  o(N)

const findSumHash = (arr, sum) => {
  const s = new Set();
  for (const i of arr) {
    if (s.has(sum - i)) {
      return [sum - i, i];
    }
    s.add(i);
  }
  return [];
};
console.log(findSumHash([1, 4, 45, 6, 10, 8], 16));
