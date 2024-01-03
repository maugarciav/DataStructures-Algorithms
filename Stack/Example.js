const Stack = require("./stack");

const myStack = new Stack();

myStack.push(1);
myStack.push(2);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

myStack.push("mau");
console.log(myStack.peek());
console.log(myStack.size());

