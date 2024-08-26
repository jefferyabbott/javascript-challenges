function validAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const arr1 = Array.from(str1).sort();
    const arr2 = Array.from(str2).sort();
    let matched = true;
    arr1.forEach((item, index) => {
        if (item !== arr2[index]) {
            matched = false;
        } 
    });
    return matched;
}

module.exports = validAnagrams;

