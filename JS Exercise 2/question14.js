let users = [
    { "id": 1001, "name": "Arun", "age": 23 },

    { "id": 1002, "name": "Vikranth", "age": 60 },

    { "id": 1003, "name": "Aditya", "age": 39 },

    { "id": 1004, "name": "Achal", "age": 45 },

    { "id": 1005, "name": "Heerendra", "age": 63 },

    { "id": 1006, "name": "Prakhar", "age": 16 },

    { "id": 1007, "name": "Ankit", "age": 34 },

    { "id": 1008, "name": "Aniket", "age": 20 },

    { "id": 1009, "name": "Atul", "age": 52 },

    { "id": 1010, "name": "Himanshu", "age": 33 },
]

console.log(users.sort((a, b) => { return a.age - b.age; }));

let sortedUserName = users.sort((a, b) => {

    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return 1;
    }
    if (fa > fb) {
        return -1;
    }
    return 0;
});
console.log(sortedUserName);