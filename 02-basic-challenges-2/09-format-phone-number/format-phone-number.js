function formatPhoneNumber(phoneNumber) {
    const areaCode = phoneNumber.slice(0,3).join('');
    const prefix = phoneNumber.slice(3,6).join('');
    const line = phoneNumber.slice(6).join('');

    return `(${areaCode}) ${prefix}-${line}`;
}

module.exports = formatPhoneNumber;
