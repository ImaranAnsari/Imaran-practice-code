function abc() {
    console.log('inside function', a);
    var a = 20;
}


abc();
var a = 10;


// answer   :   inside function undefined