const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();
list.append(100);
list.append(200);
list.append(300);
list.append(400);

// list.printAll();

list.prepend(50);

// list.printAll();

list.insertAt(2, 'new');

list.printAll();
