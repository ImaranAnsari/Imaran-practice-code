/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    // const map = new Map();
    // for (const index in nums) {
    //     const newTarget = target - nums[index];
    //     if (map.has(newTarget))
    //         return [index, map.get(newTarget)];
    //     map.set(nums[index], index);
    // }

    let temp = {};
    for (let i = 0; i < nums.length; i++) {
        if (typeof temp[nums[i]] === "undefined") {
            temp[target - nums[i]] = i
        } else {
            return [temp[nums[i]], i]
        }
    }

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; i++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
};

const ans = twoSum([3, 2, 3], 6);
console.log('ans', ans);
