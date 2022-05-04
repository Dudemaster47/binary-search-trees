// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    let newTreeNode = new TreeNode(val);
    if (!this.root) {
      this.root = newTreeNode;
      return this;
    } else {
      while (newTreeNode !== currentNode) {
        if (val < currentNode.val) {
          if (!currentNode.left) {
            currentNode.left = newTreeNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (val > currentNode.val) {
          if (!currentNode.right) {
            currentNode.right = newTreeNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }


  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    if(!this.root) return;
    console.log(currentNode.value);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if(!this.root) return
    inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    inOrderTraversal(currentNode.right)

  }


  postOrderTraversal(currentNode = this.root) {
    if(!this.root) return
    inOrderTraversal(currentNode.left)
    inOrderTraversal(currentNode.right)
    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [this.root]

    while(queue){
      const currentNode = queue.shift();
      console.log(currentNode.val);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
      
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root];
    while(stack){
      const currentNode = stack.shift();
      console.log(currentNode.val);
      if(currentNode.left) stack.push(currentNode.left);
      if(currentNode.right) stack.push(currentNode.right);
  }
}

module.exports = { BinarySearchTree, TreeNode };