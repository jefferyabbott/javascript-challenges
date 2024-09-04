function permutations(str) {
    const possibleCombinations = [];

    if (str.length === 0) {
        possibleCombinations.push('');
        return possibleCombinations;
    }

    for (let i = 0; i < str.length; i++) {
        const start = str[i];
        const letters = str.slice(0, i) + str.slice(i + 1);
        const remainder = permutations(letters);

        remainder.forEach((r) => possibleCombinations.push(start + r));
    }

    return possibleCombinations;
}

module.exports = permutations;
