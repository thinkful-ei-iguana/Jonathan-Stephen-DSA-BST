/* eslint-disable eqeqeq */
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






function findHeightTwo(tree) {
  if (tree === null) {
    return -1;
  }
  let parent = tree.parent;
  let left = findHeightTwo(tree.left);
  let right = findHeightTwo(tree.right);

  if (left > right) {
    return left + 1;
  } else {
    return right + 1;
  }
}



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

  if (tree !== null && tree.data <= tree) {
    return false;
  }
  console.log('Current Node : ', tree.data);
  lastNode = tree.data;

  if (!isItBinary(tree.right)) {
    return false;
  }
  return true;
}

//console.log('But is it binary?!?!?!0101 ' , isItBinary(BST),'!');

let newestBST = 'blah';

//console.log('But is it binary?!?!?!0101 ' , isItBinary(newestBST),'!');


//7
function thirdHighest(tree) {
  let current = tree;
  let largest = null;
  let count = 0;

  while (current != null) {
    if (current.right == null) {
      if (++count == 3) {
        largest = current;
      }
      current = current.left;
    } else {
      let successor = current.right;
      while (successor.left != null && successor.left != current) {
        successor = successor.left;
      }
      if (successor.left == null) {
        successor.left = current;
        current = current.right;
      } else {
        successor.left = null;
        if (++count == 3) {
          largest = current;
        }
        current = current.left;
      }
    }
  } return largest;
}
let checkingThird = new BinarySearchTree();
checkingThird.insert(2);
checkingThird.insert(1);
checkingThird.insert(3);
checkingThird.insert(7);
checkingThird.insert(4);
checkingThird.insert(8);
checkingThird.insert(0);
checkingThird.insert(-1);
checkingThird.insert(15);
checkingThird.insert(16);
//console.log('third highest ', thirdHighest(checkingThird).key);

// console.log(checkingThird);
// console.log('find height ' , checkingThird.findHeight(0, false));

//8 Balanced BST
function balancedBST(tree) {
  if (tree.findHeight() - tree.findHeight(0, false) > 1)  {
    return false;
  }else {
    return true;
  }
}

//console.log('blanced? ' , balancedBST(checkingThird));
// console.log(balancedBST(checkingThird));
// console.log(checkingThird);

function same(arr1, arr2){
  if (arr1.length != arr2.length || arr1[0] != arr2[0]) {
    return false;
  }
  for (let i = 1; i < arr1.length; i++){
    let rightSide1 = [];
    let leftSide1 = [];
    let rightSide2 = [];
    let leftSide2 = [];

    let arr1FirstIndex = arr1[0];
    let arr2FirstIndex = arr2[0];

    let nextIndexOfArr1 = arr1[i];
    let nextIndexOfArr2 = arr2[i];

    if (nextIndexOfArr1 > arr1FirstIndex) {
      rightSide1.push(nextIndexOfArr1);
    } else {
      leftSide1.push(nextIndexOfArr1);
    }
    if (nextIndexOfArr2 > arr2FirstIndex){
      rightSide2.push(nextIndexOfArr2);
    } else {
      leftSide2.push(nextIndexOfArr2);
    } 
    
    if (leftSide1 === leftSide2 && rightSide1 === rightSide2) {
      return true;
    }
  }
}
const array1 = [3, 5, 4, 6, 1, 0, 2];
const array2 = [3, 1, 5, 2, 4, 6, 0];


console.log('same? ' , same(array1, array2));
