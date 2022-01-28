function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {

        let j = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}

console.log(shuffleArray([0, 1, 2, 3, 4, 5, 6, 7]));