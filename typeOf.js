// let x = "10", y = 1, z = "2n", w = +x + y;

// console.log('Answer = ', typeof w, w, typeof +z);


// answer: Answer =  number 11 number


let person = { name: 'Imaran', age: 30, imn: 'aline' };
const { age, ...rest } = person;

console.log('rest', rest);
