

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