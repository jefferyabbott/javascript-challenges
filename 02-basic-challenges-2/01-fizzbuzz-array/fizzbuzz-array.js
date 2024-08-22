function fizzBuzzArray(n) {
    arr = [];
    for (let i = 1; i <= n; i++) {
        text = '';
        if (i % 3 == 0) {
            text += 'Fizz'
        }
        if (i % 5 == 0) {
            text += 'Buzz'
        }
        arr.push(text === '' ? i : text);
    }
    return arr;
}

module.exports = fizzBuzzArray;
