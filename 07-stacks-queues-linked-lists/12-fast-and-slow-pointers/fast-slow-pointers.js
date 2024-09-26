// // variables are pass by value
// let a = 1;
// let b = a;
// a = 2;

// // no change
// console.log(b);


// // object are pass by reference
// let c = { name: 'John' };
// let d = c;
// c.name = 'Jeff';

// // this changes
// console.log(d.name);



function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
