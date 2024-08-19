function areAllCharactersUnique(str) {
    const chars = new Set();
    for (const char of str) {
        if (chars.has(char)) {
            return false;
        } else {
            chars.add(char);
        }
    }
    return true;
}

module.exports = areAllCharactersUnique;
