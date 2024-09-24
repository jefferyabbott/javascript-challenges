class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  insertAt(index, data) {
    const node = new Node(data);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        if (current.next === null) {
          return false;
        }
        previous = current;
        current = current.next;
        i++;
      }

      node.next = current;
      previous.next = node;
      return true;
    }
  }

  removeFrom(index) {
    if (index === 0) {
      const value = this.head.data;
      this.head = this.head.next;
      return value;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        if (current.next === null) {
          return undefined;
        }
        previous = current;
        current = current.next;
        i++;
      }
      const value = current.data;
      previous.next = current.next;
      return value;
    }
  }

  get(index) {
    let current = this.head;
    let i = 0;
    while (i < index) {
      if (current.next === null) {
        return undefined;
      }
      current = current.next;
      i++;
    }
    return current.data;
  }

  printAll() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
