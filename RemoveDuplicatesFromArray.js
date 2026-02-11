//     Remove duplicates from the given array
//     Current Array -> const arr = [1, 2, 3, 4, 5, 6, 3, 2, 2, 1, 3, 4]
//     Expected Array -> arr = [1, 2, 3, 4, 5, 6]
//     not use inbuilt function

function removeDuplicates(arr) {
    let removedArr = [];
    for (let i = 0; i < arr.length; i++) {

        let isDuplicate = false;

        for (j = 0; j < removedArr.length; j++) {

            if (arr[i] === removedArr[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            removedArr.push(arr[i])
        }
    }
    return removedArr;
}
const arr = [1, 2, 3, 4, 5, 6, 3, 2, 2, 1, 3, 4];

const removedArr = removeDuplicates(arr);
console.log('removedArr', removedArr);

//  O(n)×O(n) = O(n2)
// ✅ Time Complexity: O(n²)(Quadratic time)
// ✅ Space Complexity: O(n)(Linear space)






// 2nd way
// const arr = [1, 2, 3, 4, 5, 6, 3, 2, 2, 1, 3, 4];

let flag = {};
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    if (!flag[arr[i]]) {
        flag[arr[i]] = true;
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr);

// output  

// Complexity

// Time: O(n) — one pass over the array.
// Space: O(n) — for the seen object and unique array.



function removeDuplicate(arr) {

    let dup = {};
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!dup[arr[i]]) {
            dup[arr[i]] = true;
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr
}



let arr1 = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8];

let remArr = removeDuplicate(arr1);
console.log(remArr)




// flat this array 
// arr = [1, [2, 3], [4, [5, [6]]]]

// 1. Using flat(Infinity)(Easiest & Modern Way)
const arr11 = [1, [2, 3], [4, [5, [6]]]];
const flatArr = arr11.flat(Infinity);

console.log(flatArr); // [1, 2, 3, 4, 5, 6]

// 2. Using Recursion(Manual Method)

function flattenArray(array) {
    let result = [];
    for (let i of array) {
        if (Array.isArray(i)) {
            result = result.concat(flattenArray(i)); // recursively flatten
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log(flattenArray(arr11)); // [1, 2, 3, 4, 5, 6]


function flattenWithReduce(array) {
    return array.reduce((acc, val) => {
        // Check if the value is an array
        if (Array.isArray(val)) {
            // If yes, recursively call this function and concat the result
            return acc.concat(flattenWithReduce(val));
        } else {
            // If no, just concat the value
            return acc.concat(val);
        }
    }, []); // Start with an empty array as the accumulator (acc)
}

// You can also write this as a one-liner:
// const flattenWithReduce = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenWithReduce(val) : val), []);

const flattenedArr = flattenWithReduce(arr11);

console.log(flattenedArr);
// O/P Expected Array: [1, 2, 3, 4, 5, 6]