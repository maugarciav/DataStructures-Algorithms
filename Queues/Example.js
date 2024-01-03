const Queue = require("./queue");
const PriorityQueue = require("./PriorityQueue");


// ----------------- Queue ----------------- //
const q = new Queue();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

q.print()

q.dequeue()
console.log(q.front())

q.print()


// ----------- Priority Queue ------------ //

const pq = new PriorityQueue();

pq.enqueue(['Mau Garcia' , 5])
pq.enqueue(['Cee dee Lamb' , 88])
pq.enqueue(['Dak' , 4])

pq.printCollection()

pq.dequeue()
console.log(pq.front())

pq.printCollection()