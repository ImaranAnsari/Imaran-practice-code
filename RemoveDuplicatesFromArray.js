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