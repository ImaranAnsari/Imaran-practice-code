// let i=10,object;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n
readline.question(`Enter number  `, n => {
    for (let i = 0; i <= n; i++) {
        console.log(i, 'Imran');
    }
    readline.close();
});



// for (let i = 0; i <= 10; i++) {
//     console.log(i, 'Imran');

// }