const isValidIPv4 = (address) => {
    const octets = address.split('.');
    if (octets.length !== 4) {
        return false;
    }
    return octets.every((o) => {
        const octet = parseInt(o);
        return o >= 0 && o <= 255;
    });
};

module.exports = isValidIPv4;
