static_array = [{ name: "Jack", age: 23 }, { name: "Sam", age: 12 }, { name: "Max", age: 20 }];


let input = prompt('delete or insert');


if (input === 'delete') {

    let n = +prompt("enter the position to delete")
    console.log(deleted(n));

} else {
    let n = +prompt("enter the position to insert")

    console.log(insert(n));
}


function deleted(n) {
    static_array.splice(n, 1);
    return static_array;

}

function insert(n) {
    let obj = {
        name: prompt("enter name"),
        age: +prompt("enter age")
    }
    static_array.splice(n, 0, obj)
    return static_array;
}