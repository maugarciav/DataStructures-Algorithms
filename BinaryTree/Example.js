const BST = require("./BST-traversal");

const bst = new BST();

bst.add(9)
bst.add(4)
bst.add(17)
bst.add(3)
bst.add(6)
bst.add(22)
bst.add(5)
bst.add(7)
bst.add(20)

console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(7));

// Traversal Methods
console.log("Traversal")
console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalance())

bst.add(10)

console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalance())

console.log('inOrder: ' + bst.inOrder())
console.log('preOrder: ' + bst.preOrder())
console.log('postOrder: ' + bst.postOrder())
console.log('levelOrder: ' + bst.levelOrder())


