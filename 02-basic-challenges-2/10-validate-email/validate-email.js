function validateEmail(email) {
    if (!email.includes('@')) {
        return false;
    }
    const splitEmail = email.split('@');
    if (splitEmail[0].length === 0) {
        return false;
    }
    return splitEmail[1].includes('.');

}

module.exports = validateEmail;
