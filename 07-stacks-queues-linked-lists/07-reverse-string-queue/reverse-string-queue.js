const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const q = new Queue();
  for (let i = str.length - 1; i >= 0; i--) {
    q.enqueue(str[i]);
  }
  let reversedStr = '';
  while (!q.isEmpty()) {
    reversedStr += q.dequeue();
  }
  return reversedStr;
};

module.exports = reverseStringWithQueue;
