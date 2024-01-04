const { BST } = require("./binaryTree");

BST.prototype.isBalance = function () {
  return (this.findMinHeight() >= this.findMaxHeight() - 1)
};

BST.prototype.findMinHeight = function (node = this.root) {
  if(node === null) return -1
  let left = this.findMinHeight(node.left)
  let right = this.findMinHeight(node.right)

  if(left < right) return left + 1
  else return right + 1
};

BST.prototype.findMaxHeight = function (node = this.root) {
  if(node === null) return -1
  let left = this.findMaxHeight(node.left)
  let right = this.findMaxHeight(node.right)
  
  if(left > right) return left + 1
  else return right + 1
};

BST.prototype.inOrder = function() {
  if(this.root === null) return null
  else{
    const result = new Array()
    function traverseInOrder(node){
      //This notation stand for : if node left exists -> execute
      node.left && traverseInOrder(node.left)
      result.push(node.data)
      node.right && traverseInOrder(node.right)
    }
    traverseInOrder(this.root)
    return result
  }
}

BST.prototype.preOrder = function() {
  if(this.root === null) return null
  else{
    const result = new Array()
    function traversePreOrder(node){
      result.push(node.data)
      node.left && traversePreOrder(node.left)
      node.right && traversePreOrder(node.right)
    }
    traversePreOrder(this.root)
    return result
  }
}

BST.prototype.postOrder = function() {
  if(this.root === null) return null
  else{
    const result = new Array()
    function traversePostOrder(node){
      node.left && traversePostOrder(node.left)
      node.right && traversePostOrder(node.right)
      result.push(node.data)
    }
    traversePostOrder(this.root)
    return result
  }
}

BST.prototype.levelOrder = function() {
  let result = []
  let Q = []
  if(this.root !== null){
    Q.push(this.root)
    while(Q.length > 0){
      let node = Q.shift()
      result.push(node.data)
      if(node.left != null) Q.push(node.left)
      if(node.right != null) Q.push(node.right)
    }
  return result
  } else return null
}

module.exports = BST;