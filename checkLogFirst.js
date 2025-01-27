// console.log('A');

// setTimeout(() => console.log('B'));

// ['C', 'D'].forEach((x) => {
//     console.log(x);
// });

// console.log('E');


function f(x) {
    x = "x-" + x;
    return function (y) {
        y = "y-" + x;
        return function (z) {
            return "z-" + y;
        }
    }
}
let g = f("a")("b")('c');
console.log('fddf', g);
