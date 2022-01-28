function insertString(basestr, string, position) {
    if (position > basestr.length)
        return;
    const newStr = [...basestr];
    newStr[position] = string;
    return newStr.join('');
}

console.log(insertString("This is a sample string", "Insert me", 3));