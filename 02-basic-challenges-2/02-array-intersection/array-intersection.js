function arrayIntersection(arr1, arr2) {
    const intersection = [];
    arr1.forEach((item) => {
        if (arr2.includes(item)) {
            intersection.push(item);
        }
    });
    return intersection;
}

module.exports = arrayIntersection;
