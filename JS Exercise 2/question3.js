a = [0, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9];
let max = 0;
let elem = 0;

for (let i = 0; i < a.length; i++) {
    let count = 0;

    for (let j = 1; j < a.length - 1; j++) {

        if (a[i] === a[j]) {
            count++;
        }
    }
    if (count > max) {
        max = count;
        elem = i;
    }
}

console.log(a[elem]);