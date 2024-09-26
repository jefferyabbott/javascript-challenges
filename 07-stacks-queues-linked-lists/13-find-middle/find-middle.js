function findMiddle(list) {
  let slowPointer = list.head;
  let fastPointer = list.head;
  let prev = null;

  while (fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    prev = slowPointer;
    slowPointer = slowPointer.next;
  }

  // if fastPointer ends with a value of null, the list had an even length
  if (fastPointer === null) {
    return prev.next;
  } else {
    return slowPointer;
  }
}

module.exports = findMiddle;
