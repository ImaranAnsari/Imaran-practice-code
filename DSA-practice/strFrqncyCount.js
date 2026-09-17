function strFrq(str) {

    let frq = {};
    for (let ch of str) {
        frq[ch] = (frq[ch] || 0) + 1;
    }
    return frq;
}


// const s = "banana";
const s = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 7, 5, 6, 5, 7, 7];


console.log(strFrq(s))