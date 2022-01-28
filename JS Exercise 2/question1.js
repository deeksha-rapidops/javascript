arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function getElem(n) {
    console.log("first " + n + " element: " + arr.slice(0, n));
    console.log("last " + n + " elememt: " + arr.slice(-n));
}
getElem(3);