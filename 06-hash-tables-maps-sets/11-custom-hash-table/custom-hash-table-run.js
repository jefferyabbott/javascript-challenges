const HashTable = require('./custom-hash-table');
const myHashTable = new HashTable();

myHashTable.set('John', '555-555-2341');
myHashTable.set('James', '814-382-4534');
myHashTable.set('Jeff', '324-423-1234');

myHashTable.printTable();
