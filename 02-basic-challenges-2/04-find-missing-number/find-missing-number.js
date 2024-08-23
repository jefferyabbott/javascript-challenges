function findMissingNumber(arr) {
    if (!arr) {
        return undefined;
    }
    if (arr.length === 0) {
        return 1;
    }
    arr.sort((a, b) => a - b);

    currentNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= currentNumber + 1) {
            currentNumber = arr[i];
        } else {
            return currentNumber + 1;
        }
    }
}

module.exports = findMissingNumber;
