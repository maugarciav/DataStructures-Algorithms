const BST = require("./binaryTree");


const bst = new BST();

bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)

bst.remove(4)

console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7)
console.log(bst.findMax());
console.log(bst.isPresent(7));
console.log(bst.isPresent(6));
