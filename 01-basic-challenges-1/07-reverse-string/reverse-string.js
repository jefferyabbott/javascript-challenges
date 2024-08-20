function reverseString(str) {
    const strArr = str.split('');
    let reversedStr = '';
    while (strArr.length > 0) {
        reversedStr += strArr.pop();
    }
    return reversedStr;
}

module.exports = reverseString;
