// n = 5

let i = 0

while (i <= 5) {
    let j = 1
    while (j <= i) {
        process.stdout.write('*');
        // console.log('*');
        j++
    }
    process.stdout.write('\n');
    // console.log('&');
    i++
}
// console.log(i);
// console.log(j);
i=i-2
// console.log(i);
while (i >= 1) {
    // console.log(i);
    let j = 1
    while (j <= i) {
        process.stdout.write('*');
        // console.log('*');
        j++
    }
    process.stdout.write('\n');
    // console.log('&');
    i--
}