const Queue = require("./queue");

const q = new Queue();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

q.print()

q.dequeue()
console.log(q.front())

q.print()