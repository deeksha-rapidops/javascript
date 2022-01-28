array_a = [0, 1, 2, 3], array_b = [3, 4, 5]

array_b.forEach((elem) => {
    if (array_a.includes(elem) !== true) {
        array_a.push(elem);
    }

})
console.log(array_a);
arr = [0, 1, 2, 3], arr2 = [3, 4, 5]

function difference(arr1, arr2) {

    let diff = arr1.filter((x) => !arr2.includes(x))
    console.log("arr - arr2 ", diff);
    let diff2 = arr2.filter((x) => !arr1.includes(x))
    console.log("arr2 - arr ", diff2);
    let intersection = arr2.filter((x) => arr1.includes(x))
    console.log("intersection ", intersection);
}

difference(arr, arr2);