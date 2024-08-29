function findMissingLetter(letters) {
    const missingLetter = letters.filter((letter, index) => {
        if (index === 0) {
            return false;
        }
        const lastLetter = letters[index - 1].charCodeAt(0);
        const currentLetter = letter.charCodeAt(0);
        return currentLetter - lastLetter > 1;
    })[0];

    return missingLetter ? String.fromCharCode(missingLetter.charCodeAt(0) - 1) : '';
}

module.exports = findMissingLetter;
