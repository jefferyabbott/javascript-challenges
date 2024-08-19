function countOccurrences(str, chr) {
    return Array.from(str).reduce((sum, letter) => letter === chr ? sum + 1 : sum, 0);
}

module.exports = countOccurrences;
