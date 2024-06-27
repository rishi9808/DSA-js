class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  //recursive fn to add new node
  insertNode(node, newNode) {
    //node -> root node
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }


  delete(key) {
    this.root = this.deleteNode(this.root, key)
  }

  deleteNode(node , key){
    if(!node){
      return null;
    }
    if (key < node.key){                                           //recursive traversal for key
      node.left = this.deleteNode(node.left,key)
    }
    else if(key > node.key){
      node.right = this.deleteNode(node.right , key)
    }
    else{
      if(node.left == null && node.right == null) {                // case 1 : leaf node deletion
        return null
      }
      else if(node.left == null){                                 // case 2 : has 1 child (right child)
        return node.right
      }
      else if(node.right == null){                                // case 2 : has 1 child (left child)
        return node.left
      }
      else{
        let tempNode = this.inorderSuccessor(node.right)          // case 3 : has 2 child
        node.key = tempNode.key
        node.right = this.deleteNode(node.right,tempNode.key)
      }
    }
    return node
  }

  inorderSuccessor(node){
    while(node.left !== null){
      node = node.left
    }
    return node
  }
}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(9);
bst.insert(19);
bst.insert(4);
bst.insert(12);
bst.insert(18);
bst.insert(30);
bst.delete(15)
function displayTree(root) {
  if (!root) {
    console.log('Tree is empty');
    return;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];

    while (levelSize > 0) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.key);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      levelSize--;
    }
    console.log(currentLevel.join(' '));
  }
}

displayTree(bst.root);
