const nums = new Array(100).fill().map((_, i) => i + 1);

const newArray = [];
for (const i of nums) {
  if (i % 2 == 1) {
    newArray.push(i);
  }
}
console.log(newArray);