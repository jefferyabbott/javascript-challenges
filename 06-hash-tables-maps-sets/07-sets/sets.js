const nameSet = new Set(['John', 'Jane', 'Joe']);

nameSet.add('John');
nameSet.add('Jeff');

console.log(nameSet);


console.log(nameSet.has('Jeff'));
console.log(nameSet.has('Jen'));
console.log(nameSet.size);

console.log(nameSet.values());

for (const name of nameSet) {
  console.log(name);
}

const nameArray = [...nameSet];

console.log(nameArray);

nameSet.clear();
console.log(nameSet.size);
