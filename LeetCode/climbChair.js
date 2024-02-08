
var climbStairs = function (n) {
    // let ways = 1;

    // for (let i = 1; i <= n / 2; i++) {
    //     let sum = 1;

    //     for (let j = i; j < 2 * i; j++) {
    //         sum *= (n - j) / (j - i + 1);
    //     }

    //     ways += sum;
    // }

    // return ways;
    if (n == 1 || n == 2) return n;
    let a = 1, b = 2;
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};
climbStairs(3)