function num_string_range(value1, value2, interval) {
    var result = [];
    var str = 'abcdefghijklmnopqrstuvwxyz';

    str = str.split('')
    for (var i = 0; i < str.length; i += interval) {
        result.push(str[i]);
    }
    return result;
}
console.log(num_string_range("a", "z", 2));