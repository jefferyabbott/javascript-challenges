function highestScoringWord(stringOfWords) {
    let highestScore = 0;
    let highestScoringWord = '';
    const words = stringOfWords.split(' ');
    words.forEach((word) => {
        const letters = Array.from(word);
        const sum = letters.reduce((total, letter) => total + letter.charCodeAt(0) - 96, 0);
        if (sum > highestScore) {
            highestScore = sum;
            highestScoringWord = word;
        }
    });
    return highestScoringWord;
}

module.exports = highestScoringWord;
