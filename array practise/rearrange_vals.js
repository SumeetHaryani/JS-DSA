// Output #
// A sorted array with negative elements at the left and positive elements at the right

// Sample Input #
// [10,-1,20,4,5,-9,-6]
// Sample Output #
// [-1,-9,-6,10,20,4,5]

const reArrange = (arr)=>{
    let partition = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) { 
            const temp=arr[i]
            arr[i] = arr[partition]
            arr[partition] = temp
            partition++;
        }
    }
    return arr
}
console.log(reArrange([10, -1, 20, 4, 5, -9, -6]));




