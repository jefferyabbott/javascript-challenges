function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    let lastSortedElementIndex = i - 1;
    while (lastSortedElementIndex >= 0 && arr[lastSortedElementIndex] > currentElement) {
      arr[lastSortedElementIndex + 1] = arr[lastSortedElementIndex];
      lastSortedElementIndex--;
    }
    arr[lastSortedElementIndex + 1] = currentElement;
  }
  return arr;
}

module.exports = insertionSort;
