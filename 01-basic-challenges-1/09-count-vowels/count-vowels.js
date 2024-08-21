function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return Array.from(str).reduce((vowelCount, letter) => vowels.includes(letter.toLowerCase()) ? vowelCount + 1 : vowelCount, 0);
}

module.exports = countVowels;


