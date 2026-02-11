
/*
 method @reverse for print this pattern
 *  12345
 *  1234
 *  123
 *  12
 *  1
*/

// first method
function reverse123(n) {
    let i = 1;
    while (i <= n) {
        // loop for executing till row
        let j = 1;
        while (j <= n - i + 1) {
            // loop for print number
            process.stdout.write(`${j}`);
            j++;
        }
        console.log();
        i++;
    }
}
// call function
reverse123(5);


// second method
function reverse(n) {
    let i = 1;
    let j = n
    while (i <= n) {
        // loop for executing till row
        let k = 1;
        while (k <= j) {
            // loop for print number
            process.stdout.write(`${k}`);
            k++;
        }
        console.log();
        j--;
        i++;
    }
}
// call function
reverse(5);


/*
*   method @reverseArray this function for print array in reverse order
*/

function reverseArray(arr) {
    let reverse = [];
    // this for running till array of length
    for (let i = 0; i < arr.length; i++) {
        // here assigning arr[] of last index value on first index of reverse[] 
        reverse[i] = arr[arr.length - 1 - i];
    }
    return reverse;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedArr = reverseArray(arr);
console.log('reversedArr', reversedArr);