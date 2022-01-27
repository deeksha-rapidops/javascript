let n = prompt("Enter row number");
// n = n - 2;
let string = "";

for (let i = 1; i < n / 2 + 1; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}

for (let i = (n / 2) + 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);