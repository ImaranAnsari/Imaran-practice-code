// QUE: 1
// WAP to Print this pattern
// 1
// 12
// 123
// 1234
// 12345

let n = 5;
let i = 1;
while (i <= n) {
    let j = 1

    while (j <= i) {
        process.stdout.write(`${j}`);
        j = j + 1;
    }
    if (i != n) {
        // process.stdout.write(',');
        console.log();
    }
    i = i + 1;
}

// --------------------------------------------------------------------------------------
// QUE: 2
// write a program to print this pattern
//     *
//    ***
//   *****
//  *******
// *********

// let n = 5;
// let i = 1;
while (i <= n) {
    let j = 1;
    while (j <= n - i) {
        process.stdout.write(` `);
        j = j + 1;
    }
    let k = 1;
    while (k <= 2 * i - 1) {
        process.stdout.write(`*`);
        k = k + 1
    }
    console.log();
    i = i + 1
}

// --------------------------------------------------------------------------------------
// QUE: 3
// write a program to print this pattern
//     *
//    **
//   ***
//  ****
// *****

// let n = 5;
// let i = 1;
while (i <= n) {
    let j = 1;
    while (j <= n - i) {
        process.stdout.write(` `);
        j = j + 1;
    }
    let k = 1;
    while (k <= i) {
        process.stdout.write(`*`);
        k = k + 1
    }
    console.log();
    i = i + 1
}