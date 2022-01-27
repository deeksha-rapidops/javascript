let n = +prompt("enter number");
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (j === i || j === (n + 1 - i)) {

            string += 'o';
        } else {
            string += ' ';
        }
    }
    string += '\n';
}
console.log(string);