// let arr = ["a", "b", "c", "d", "e"];

// for (ele of arr) {
//     console.log('', ele);
// }


let obj = {
    name: "imaran",
    age: 30,
    class: "MCA"
}

for (const key of Object.keys(obj)) {
    console.log(key, ' ', obj[key]);
}