const obj = {
    name: "John",
    age: 25,
    address: {
        city: "Delhi",
        country: "India"
    },
    company: {
        name: "Google",
        location: {
            city: "Bangalore"
        }
    }
};
// result 
// {
//     name: 'John',
//         age: 25,
//         'address.city': 'Delhi',
//         'address.country': 'India',
//         'company.name': 'Google',
//         'company.location.city': 'Bangalore'
// }

function flattern(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            flattern(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key]
        }
    }
    return result
}
const answer = flattern(obj)

console.log(answer)