const BinarySearchTree = require('./BinarySearchTree');

let BST = new BinarySearchTree();
BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);

//console.log('here is BST ' , BST);

let newBST = new BinarySearchTree();
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
//console.log('this is the height ' , findHeight(BST));


//6 
function isItBinary(tree) {
  let lastNode = tree;
  // if (typeof tree === BinarySearchTree){
  //   return false;
  // }

  if (tree === null) {
    return true;
  }
  
  if (!isItBinary(tree.left)) {
    return false;
  }

  if (tree !== null && tree.data <= tree){
    return false;
  } 
  console.log('Current Node : ', tree.data);
  lastNode = tree.data;

  if (!isItBinary(tree.right)){
    return false;
  }
  return true;
}

//console.log('But is it binary?!?!?!0101 ' , isItBinary(BST),'!');

let newestBST = 'blah';

//console.log('But is it binary?!?!?!0101 ' , isItBinary(newestBST),'!');


//7
function thirdHighest(tree){
  let current = tree;
  let largest = null;
  let count = 0;

  while (current !== null) {
    if (current.right === null) {
      if (count++ === 3) {
        largest = current
      }
      current = current.left
    } else {
      let successor = current.right;
      while(successor.left !== null && successor.left !== current) {
        successor = successor.left
      }
      if (successor.left === null){
        successor.left = current;
        current = current.right;
      } else {
        successor.left === null;
        if (count++ === 3){
          largest === current;

        }
        current = current.left;
      }
    }
  } return largest;
}
    



//   if (tree.left === null && tree.right === null) {
//     return tree.parent;
//   } else if (tree.right) {
//     return thirdHighest(tree.right) 
//   }
// }

let checkingThird = new BinarySearchTree();
checkingThird.parent = 2;
checkingThird.left === 1;
checkingThird.right === 3;
checkingThird.insert(1);
checkingThird.insert(2);
checkingThird.insert(3);


//on the node all the way to the bottom-right, this.parent.left

//console.log(BST.right);
//console.log(checkingThird);
console.log(thirdHighest('checking third ' , checkingThird));