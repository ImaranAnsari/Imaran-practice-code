function recurson(num) {
    // console.log("a", num);
    if (num == 0) {
        return 0
    }
    console.log(num);
    num--
    recurson(num)
}

recurson(5)