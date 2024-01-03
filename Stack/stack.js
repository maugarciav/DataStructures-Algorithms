// stack.js
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // Method to add a value to the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Method to remove and return the value at the end of the stack
  pop() {
    if (this.count === 0) return undefined;
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // Method to get the length of the stack
  size() {
    return this.count;
  }

  // Method to get the value at the end of the stack
  peek() {
    return this.storage[this.count - 1];
  }
}

module.exports = Stack;
