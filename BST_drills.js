const BinarySearchTree = require('./BinarySearchTree');

let BST = new BinarySearchTree()
BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);

//console.log('here is BST ' , BST);

let newBST = new BinarySearchTree()
newBST.insert('E');
newBST.insert('A');
newBST.insert('S');
newBST.insert('Y');
newBST.insert('Q');
newBST.insert('U');
newBST.insert('E');
newBST.insert('S');
newBST.insert('T');
newBST.insert('I');
newBST.insert('O');
newBST.insert('N');

//console.log(newBST);

//4. This function returns the total value of the entire tree. runtime: O(n)

//5. 
function findHeight(tree) {
  if (tree === null) {
    return -1;
  }
  let left = findHeight(tree.left);
  let right = findHeight(tree.right);

  if (left > right) {
    return left + 1;
  } else {
    return right + 1;
  }
}
console.log('this is the height ' , findHeight(BST));
