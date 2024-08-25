function sumOfEvenSquares(arr) {
    return arr.filter((n) => n % 2 === 0).map((n) => n * n).reduce((total, n) => total + n, 0);
}

module.exports = sumOfEvenSquares;
