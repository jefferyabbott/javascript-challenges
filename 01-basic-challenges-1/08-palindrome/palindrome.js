function isPalindrome(str) {
    const regex = /[^a-zA-Z0-9]/g
    str = str.replace(regex, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

module.exports = isPalindrome;
