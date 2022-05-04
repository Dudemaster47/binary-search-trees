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
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };