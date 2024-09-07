/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/

function sumArray(arr) {
  let sum = 0;
  arr.forEach((n) => sum += n);
  return sum;
}

const arr1 = [1, 2, 3, 4, 5];
console.time('Sum Array 1');
console.log(sumArray(arr1));
console.timeEnd('Sum Array 1');

const arr2 = Array.from({ length: 1000000 }, (_, index) => index + 1);

console.time('Sum Array 2');
console.log(sumArray(arr2));
console.timeEnd('Sum Array 2');
