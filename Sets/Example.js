const MySet = require('./set');

const setA = new MySet();
const setB = new MySet();

setA.add("a")
setB.add("a")
setB.add("b")
setB.add("c")
setB.add("d")

console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())

console.log(setB.values())
console.log(setB.size())
setB.delete("d")
console.log(setB.size())
console.log(setB.values())
setB.add("c")
console.log(setB.values())
setA.add("z")
console.log(setA.union(setB).values())