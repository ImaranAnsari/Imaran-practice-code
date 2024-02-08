
const toffyCount = () => {
    let toffy = 50;
    let rem = 0;
    let count = 50;

    while (toffy > 3) {
        if (toffy >= rem + toffy / 3) {
            toffy = toffy / 3;
            rem = toffy % 3;
            count = count + toffy;
            // console.log('toffy', count);
            // return count;
        }
        // return count
    }
    return Math.round(count);
}

console.log('toffyount', toffyCount());