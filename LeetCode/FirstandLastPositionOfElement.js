const firstLast = (nums, target) => {
    /* 
        const binarySearch = (nums, target, isSearchingLeft) => {
             let left = 0;
             let right = nums.length - 1;
             let idx = -1;
             while (left <= right) {
                 const mid = Math.floor((left + right) / 2);
                 if (nums[mid] > target) {
                     right = mid - 1;
                 } else if (nums[mid] < target) {
                     left = mid + 1;
                 } else {
                     idx = mid;
                     if (isSearchingLeft) {
                         right = mid - 1;
                     } else {
                         left = mid + 1;
                     }
                 }
             }
             return idx;
         };
         const left = binarySearch(nums, target, true);
         const right = binarySearch(nums, target, false);
         return [left, right];
     */

    let n = nums.length;
    let start = -1; // Initialize the start index as -1.
    let end = -1; // Initialize the end index as -1.

    // Step 1: Search for the first occurrence of the target element.
    for (let i = 0; i < n; i++) {
        if (nums[i] === target) {
            start = i; // Set the start index to the current index.
            break; // Break the loop as we've found the first occurrence.
        }
    }

    // Step 2: If the start index remains -1, the target element was not found.
    if (start === -1)
        return [-1, -1]; // Return [-1, -1] to indicate that the target is not in the array.

    // Step 3: Search for the last occurrence of the target element.
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] === target) {
            end = i; // Set the end index to the current index.
            break; // Break the loop as we've found the last occurrence.
        }
    }

    // Step 4: Return the start and end indices of the target element.
    return [start, end];

}


// let nums = [];
let nums = [5, 7, 7, 8, 8, 10];
let target = 8
console.log('posion of first and last', firstLast(nums, target));
// Output: [3,4]