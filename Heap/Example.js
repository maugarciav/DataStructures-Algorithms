const { MinHeap, MaxHeap } = require('./heap');


const myMinHeap = new MinHeap()

myMinHeap.insert(1)
myMinHeap.insert(10)
myMinHeap.insert(12)
myMinHeap.insert(52)
myMinHeap.insert(0)
myMinHeap.insert(4)

myMinHeap.remove()
console.log(myMinHeap.sort())
