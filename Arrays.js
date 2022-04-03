// In JavaScript, an array is an ordered sequence of heterogeneous elements. In other words, an array can hold elements with different data types.

// Note: Array is a special kind of object in javascript.

// Initializing an Array #

let nums = [1, 2, 3, 40];

// The push() function #
// Use this function to add a single element to the end of an array.
nums.push(55);
// The complexity of the push() operation will be O(1) since we only have to update the length of the array and add the new element.

// The pop() function #
// Returns and removes the element from the end of an array.
nums.pop();
// The complexity of the pop() operation will be O(1) since we only have to update the length of the array and remove the end index.
console.log(nums);
// Returns and removes the element from the beginning of the array. Try it out yourself!
nums.shift();
// The complexity of the shift() operation will be O(n) since we have to remove the element at index 0, shift all the elements to the left, and then update the length of an array.

// The unshift(value) function #
// Inserts the given element at the beginning of the array.
nums.unshift(99);
// The complexity of the unshift() operation will be O(n) since we have to update the length of an array, shift all the elements to the right, and then add the new element at index 0.

// The delete keyword #
// Elements can be deleted using delete in JavaScript. However, using delete leaves undefined holes in the array, so it is better to use the shift() or pop() method.
delete nums[2];
console.log(nums);
// The complexity of the delete() function will be O(n). To remove the first element from the beginning, we need to move all the following elements to the left.

// This function reverses an array. Use it like array.reverse(). inplace
nums.reverse();
// The complexity of the reverse() function will be O(n) since we have to traverse all the elements of an array.
console.log(nums);

// The splice() function #
// The splice() function can be used to add or remove elements.

// The first parameter is the index number, where the new elements should be spliced in.
// The second parameter is the number of elements that should be removed. If you don’t want to remove anything, just put 0 as the second parameter.
// The rest of the parameters are the new elements to be added.
nums.splice(1, 2, 25);
console.log(nums);
// The complexity of the splice() function is O(n). Since splice() add or remove elements in the original array. Therefore, in the worst-case, we have to shift n-1n−1 elements.

// The slice() function can be used to slice out a piece of an array into a new array.
// The first parameter is the index number, where the start of the slicing takes place.
// The second parameter is the index number up to which the array should be sliced out. The new array excludes the second parameter. If the second parameter is left empty, the new slice contains the elements from the first parameter to the rest of the array.
nums=[1,2,3,4]
nums.slice(2)
console.log(nums.slice(2, 3))
// The complexity of the slice() function is O(n). Since slice() returns a new array from the start to the end. Therefore, in the worst-case, we have to make a copy of all the elements present in the array.

// The concat() function #
// The concat() function concatenates arrays as the name implies, and creates a new array which does not affect the source arrays.

// You can concatenate any number of arrays you want by specifying all of them as parameters to the concat() function.
const nums1=[1,2,3]
const nums2=[3,4,5]
nums1.concat(nums2)
console.log(nums1.concat(nums2,[8,9])
)
// The complexity of the concat() function will be O(m+n), where m is the size of the first array, and n is the size of the second array. concat() makes a new array of size m+n and then copy elements of both arrays one by one in a new array.

// The for...of statement #
// The for…of statement creates a loop to iterate over iterable objects, such as Arrays and Array-like objects.
for (let i of nums) {
    console.log(i);
}
// O(n) where n is the number of items in an array.
