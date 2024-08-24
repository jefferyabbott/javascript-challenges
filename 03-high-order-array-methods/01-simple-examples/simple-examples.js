const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
// double numbers
const doubled = numbers.map((n) => n * 2);
console.log(doubled);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
// even numbers
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers);


/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
// sum the numbers
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum);


/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
// print each
numbers.forEach((n) => console.log(n));


 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
// find 3
const n3 = numbers.find((n) => n === 3);
console.log(n3);

const indexOf3 = numbers.findIndex((n) => n === 3);
console.log(indexOf3);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
// has evens
const hasEvens = numbers.some((n) => n % 2 === 0);
console.log(hasEvens);
 

/**
 * every: Checks if all array elements satisfy a condition.
 */
// are all even?
const allEven = numbers.every((n) => n % 2 === 0);
console.log(allEven);


