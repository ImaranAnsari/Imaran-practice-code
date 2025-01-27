function unknownLength() {
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        console.log('element', element);
    }
}

unknownLength("imran", "ansari", 1, 5, 6, 7, "bushra");