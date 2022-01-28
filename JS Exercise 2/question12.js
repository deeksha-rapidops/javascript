function string_chop(str, chunkLen) {
    let i;
    let arr = [];
    if (!chunkLen) {
        arr.push(str);
        return arr;
    }
    for (i = 0; i < str.length; i = i + chunkLen) {
        arr.push(str.slice(i, i + chunkLen))
    }
    return arr;
}
console.log(string_chop("RapidOpsSolution", 2));