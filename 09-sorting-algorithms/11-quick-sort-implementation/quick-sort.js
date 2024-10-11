function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  const lessThanPivot = [];
  const greaterThanOrEqualPivot = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      lessThanPivot.push(arr[i]);
    } else {
      greaterThanOrEqualPivot.push(arr[i]);
    }
  }

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanOrEqualPivot)];
}

module.exports = quickSort;
