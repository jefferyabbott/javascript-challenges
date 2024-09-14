function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(/\W+/);
  const wordCount = new Map();
  for (const word of words) {
    if (word === '') {
      continue;
    }
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word) + 1);
    } else {
      wordCount.set(word, 1);
    }
  }

  return wordCount;
}

module.exports = wordFrequencyCounter;
