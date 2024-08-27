function generateHashtag(str) {

    if (str.trim() === '') {
        return false;
    }

    let words = str.trim().split(' ');
    words = words.map((w) => w.charAt(0).toUpperCase() + w.substring(1));
    const hashtag = words.reduce((ht, word) => ht + word, '#');
    if (hashtag.length > 140) {
        return false;
    }
    return hashtag;
}

module.exports = generateHashtag;
