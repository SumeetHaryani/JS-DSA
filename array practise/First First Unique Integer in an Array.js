// Sample Input #
// [9,2,3,2,6,6]
// Sample Output #
// 9
const findFirstUnique = (arr) => {
  const map = new Map();
  for (const i of arr) {
    let val = map.get(i);
    if (val) {
      map.set(i, ++val);
    } else {
      map.set(i, 1);
    }
  }
    for (const [key, val] of map.entries()) {
      if (val == 1) return key;
    }
};
console.log(findFirstUnique([9, 2, 3, 6, 2, 6, 9, 1,0, 3]));
