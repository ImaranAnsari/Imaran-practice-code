const arr = [1, 2, 2, 3, 3, 3, 'a', 'a', 4];

// 1. Using reduce (plain object)
const freq1 = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log(freq1);
// { '1': 1, '2': 2, '3': 3, '4': 1, a: 2 }

// 2. Using Map (preserves types and insertion order)
const freq2 = new Map();
for (const item of arr) {
    freq2.set(item, (freq2.get(item) || 0) + 1);
}
console.log(freq2);
// Map(5) { 1 => 1, 2 => 2, 3 => 3, 'a' => 2, 4 => 1 }

// 3. Using for...of with an object
const freq3 = {};
for (const item of arr) {
    freq3[item] = (freq3[item] ?? 0) + 1;
}
console.log(freq3);

// most frequent element
const mostFrequent = (arr) => {
    const map = new Map();
    for (const item of arr) map.set(item, (map.get(item) || 0) + 1);
    return [...map.entries()].reduce((a, b) => (b[1] > a[1] ? b : a))[0];
};

console.log(mostFrequent([1, 2, 2, 3, 3, 3])); // 3


// Using two arrays(handles mixed types correctly)
const values = [];
const counts = [];
let size = 0;

for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < size; j++) {
        if (values[j] === arr[i]) {
            counts[j] = counts[j] + 1;
            found = true;
            break;
        }
    }

    if (!found) {
        values[size] = arr[i];
        counts[size] = 1;
        size++;
    }
}

for (let i = 0; i < size; i++) {
    console.log(values[i] + " -> " + counts[i]);
}
// 1 -> 1
// 2 -> 2
// 3 -> 3
// a -> 2
// 4 -> 1


// Using a plain object(faster)
const freq = {};

for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (freq[key]) {
        freq[key]++;
    } else {
        freq[key] = 1;
    }
}

for (const key in freq) {
    console.log(key + " -> " + freq[key]);
}


// Specific number frequency
let count = 0;
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == 2) {
        count++;
    }
}
console.log("Specific", count)