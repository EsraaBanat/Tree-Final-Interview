'use strict';
const {
    BinaryTree,
    BinarySearchTree,
} = require('./BinaryTree');
const Node = require('./node');
const treeify = require('treeify');
const {isBst,breadthFirst,isInclude,treeSum, maxPathSum,deleteNode,fizzBuzz} =require('./problemsolving')

// BinaryTree
let tree = null;

let one = new Node(10);
let two = new Node(3);
let three = new Node(13);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);
let x = new Node(1);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;
// three.left = four;
// three.right = five;

        //      1
        //     / \
        //    2   3
        //   /\
        //  4  5

tree = new BinarySearchTree(one);

let preOrder = tree.preOrder();
console.log('pre order: ', preOrder);
//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

let inOrder = tree.inOrder();
console.log('in order: ', inOrder);
//pre order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5

// console.log('invertTree',tree.invertTree());
console.log('findMax',tree.findMax());
console.log('max',tree.max());
console.log('min',tree.min());
console.log('Sum',tree.sum());
console.log(tree.root);
console.log('deleteNode',deleteNode(tree.root,5));
console.log('breadthFirst',breadthFirst(tree));
console.log('isInclude',isInclude(tree,2));

console.log('fizzBuzz',fizzBuzz(tree));
console.log('treeSum',treeSum(tree.root));
console.log('isBst',isBst(tree));

console.log(treeify.asTree(tree,true));

// let postOrder = tree.postOrder();
// console.log('post order: ', postOrder);
//pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1


// BinaryTreeSearch


// let bstTree = new BinaryTreeSearch();

// bstTree.add(50);
// bstTree.add(60);
// bstTree.add(70);
// bstTree.add(40);
// bstTree.add(20);
// bstTree.add(10);

// console.log(treeify.asTree(bstTree, true));

// console.log('Contains ', bstTree.contains(10));
// console.log('Contains ', bstTree.contains(20));
// console.log('Contains ', bstTree.contains(30));
// console.log('Contains ', bstTree.contains(5));
// console.log('Contains ', bstTree.contains(40));
// console.log('Contains ', bstTree.contains(50));
// console.log('Contains ', bstTree.contains(60));
// console.log('Contains ', bstTree.contains(70));