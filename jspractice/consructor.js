function cat(name) {
    this.name = name;
    this.sound = "meow";
}

let Cat = new cat("Tom");
let sound = Cat.sound;
console.log('sound', sound);

cat.prototype.speak = function () {
    console.log(this.sound);
}
Cat.speak();
// console.log('speak', cat.speak);

console.log(cat.constructor);
console.log(Cat instanceof cat);

