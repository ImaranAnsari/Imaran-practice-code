
// whrite a program for bubble sorting

const bubbleSort = () => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swap = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true
            }
        }
        if (!swap) break;
    }
    console.log(arr);
};

const arr = [5, 2, 7, 3, 1, 4, 9, 6, 1, 2]

bubbleSort(arr);