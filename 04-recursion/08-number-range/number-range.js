function numberRange(start, end) {
    if (start === end) {
        return [start];
    }

    const numberArr = numberRange(start, end - 1);
    numberArr.push(end);
    return numberArr;
}

module.exports = numberRange;
