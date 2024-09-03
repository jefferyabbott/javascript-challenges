function flattenArray(arr) {
    if (typeof(arr) !== Array) {
        let flatArray = [];

        for (const element of arr) {
            if (Array.isArray(element)) {
                flatArray = flatArray.concat(flattenArray(element));
            } else {
                flatArray.push(element);
            }
        }
        return flatArray;
    }

    
}

module.exports = flattenArray;
