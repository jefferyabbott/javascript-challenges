const Stack = require('./stack');

function reverseStringStack(str) {
  const stack = new Stack();
  str.split('').forEach((char) => stack.push(char));
  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}

module.exports = reverseStringStack;
