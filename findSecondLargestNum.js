//array= [0,0,0,0,0,0,0]
// find  2nd largest num not use any inbuilt sorting method
// handle the tis case also (this is not a valid array)


function findSecondLargest(arr) {

    if (!Array.isArray(arr) || arr.length < 2) {
        return "Invalid array: Array must contain at least two numbers.";
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    if (second === -Infinity) {
        return "There is no second largest number.";
    }

    return second;
};

let arr = [0, 0, 0, 0, 0, 0, 0];
console.log(findSecondLargest(arr));