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

    let currentNode = this.root;
    while(currentNode){
      if(currentNode.val === val) {
        return true;
      } else if(currentNode.val < val){
        currentNode = currentNode.right;
      } else if(currentNode.val > val){
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    if(!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if(!currentNode) return;
    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right)

  }


  postOrderTraversal(currentNode = this.root) {
    if(!currentNode) return;
    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    if(!this.root) return;

    const queue = [this.root]
    let currentNode;

    while(queue.length){
      currentNode = queue.shift();
      console.log(currentNode.val);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
      
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    if(!this.root) return;
    
    
    let stack = [this.root];
    let currentNode;

    while(stack.length){
      currentNode = stack.pop();
      console.log(currentNode.val);
      if(currentNode.left) stack.push(currentNode.left);
      if(currentNode.right) stack.push(currentNode.right);
    }
    return;
  }
}
module.exports = { BinarySearchTree, TreeNode };