const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n
readline.question(`Enter number  `, n => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i, 'Number is even');
        } else {
            console.log(i, 'Number is odd');
        }
    }
    readline.close();
});





// let n = 20
// for (let i = 0; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i, 'Number is even');
//     } else {
//         console.log(i, 'Number is odd');
//     }
// }