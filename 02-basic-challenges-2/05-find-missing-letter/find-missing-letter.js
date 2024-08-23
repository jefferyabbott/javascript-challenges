function findMissingLetter(arr) {
    let currentCharCode = arr[0].charCodeAt(0);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) <= currentCharCode + 1) {
            currentCharCode = arr[i].charCodeAt(0);
        } else {
            return String.fromCharCode(currentCharCode + 1);
        }
    }
}

module.exports = findMissingLetter;

