const { LinkedList } = require('./linked-list');

const list = new LinkedList();
list.add(100);
list.add(200);
list.add(300);
list.add(400);

// list.printAll();
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(4));
// console.log(list.get(7));

list.insertAt(1, 'a');
// list.printAll();


list.insertAt(12, 'b');
// list.printAll();

console.log(list.removeFrom(1));
// list.printAll();

console.log(list.removeFrom(100));
list.printAll();
