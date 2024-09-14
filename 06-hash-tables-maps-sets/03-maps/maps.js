const nameMap = new Map([
  [1, 'John'],
  [2, 'Jack'],
  [3, 'Jill'],
]);

const myFunction = () => { }
myObj = {};


const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'my function'],
  [myObj, 'my object'],
]);

console.log(nameMap);
console.log(map2);

// get values
console.log(nameMap.get(1));
console.log(nameMap.values());
console.log(map2.keys());

nameMap.set(4, 'Jeff');
nameMap.set(5, 'Sarah');
console.log(nameMap);

// check values
console.log(nameMap.has(1));
console.log(nameMap.has(10));

// delete values
nameMap.delete(3);
console.log(nameMap);

// get size
console.log(nameMap.size);

// iterate
for (let [key, value] of nameMap) {
  console.log(key, value);
}

nameMap.forEach((value, key) => console.log(key, value));

console.log(nameMap.keys());

nameMap.clear();
console.log(nameMap.size);
