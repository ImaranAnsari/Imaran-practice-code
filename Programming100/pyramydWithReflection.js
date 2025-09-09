// Ajit 
// function printHourGlass(n) {
//     if (!(n > 2 && n % 2 === 1)) {
//         console.log("Invalid input");
//         return;
//     }
//     let i = 0, j = n, k = 0;
//     let mid = (n + 1) / 2;
//     while (i < n) {
//         i++;
//         let temp = 0;
//         while (k > temp) {
//             process.stdout.write(' ');
//             temp++;
//         }
//         temp = 0;
//         while (j > temp) {
//             process.stdout.write('*');
//             temp++;
//         }
//         if (i < mid) {
//             j -= 2
//             k += 1
//         } else {
//             j += 2
//             k -= 1
//         }
//         if (i === n) {
//             continue;
//         } else {
//             console.log();
//         }
//     }
// }

// printHourGlass(5)


function pyramidWithReflection(n) {
    let i = 0;

    while (i < (n / 2)) {
        let j = 0;

        while (j < i) {
            process.stdout.write(" ");
            j++;
        }

        let k = 0;
        while (k < n - 2 * i) {
            process.stdout.write("*");
            k++;
        }

        console.log();
        i++;
    }

    i = ((n + 1) / 2) - 2;
    while (i >= 0) {
        let j = 0;

        while (j < i) {
            process.stdout.write(" ");
            j++;
        }
        let k = 0;
        while (k < n - 2 * i) {
            process.stdout.write("*");
            k++;
        }

        console.log();
        i--;
    }
}

pyramidWithReflection(5);
