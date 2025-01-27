const double = () => {
    let a;
    let n = 1;
    for (let i = 1; i <= 10; i++) {
        a = n;
        n = n * 2;
        console.log(a);
    };
};

double();