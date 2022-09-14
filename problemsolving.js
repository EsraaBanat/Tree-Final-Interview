'use strict';

function isBst(tree) {
    if (!tree.root) {
        return undefined;
    }
    let current = tree.root;
    while (current) {
        // console.log('111',current);
        // console.log('222',current.right);
        if (current.right) {
            if (current.value < current.right.value) {
                current = current.right;
                return true;
            } else {
                return false;
            }
        }
        if (current.left) {
            // console.log('333',current.right);
            if (current.value > current.left.value) {
                current = current.left;
                return true;
            } else {
                return false;
            }
        }
    }
}

function breadthFirst(tree) {

    if (!tree.root) return [];

    let queue = [tree.root];
    let result = [];

    while (queue.length) {
        const current = queue.shift();
        result.push(current.value);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return result;
}

function isInclude(tree, value) {

    if (!tree.root) return false;

    let queue = [tree.root];


    while (queue.length) {
        const current = queue.shift();
        if (current.value === value) return true;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return false;
}


function treeSum(root) {
    if (!root) return 0;
    return root.value + treeSum(root.left) + treeSum(root.right);
}

function maxPathSum(root) {
    if (!root) return -Infinity;
    if (!root.left && !root.right) return root.value;
    const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.value + maxChildPathSum;
}

function deleteNode(root, value) {

    if (!root) {
        return;
        // Empty tree return false;
    }
    if (value < root.value) {
        root.left = deleteNode(root.left, value);
        return root;
    } else if (value > root.value) {
        root.right = deleteNode(root.right, value);
        return root;
    } else {
        // No children
        //case 1 - a leaf node
        if (!root.left && !root.right) {
            root = null;
            return root;
        }
        // Single Child cases
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Both children, so need to find successor
        let currNode = root.right;
        while (currNode.left) {
            currNode = currNode.left;
        }
        root.value = currNode.value;
        // Delete the value from right subtree.
        root.right = deleteNode(root.right, currNode.value);
        return root;
    }
}

function fizzBuzz(tree) {
    if (!tree.root) return null;
    const fizzBuzz = (node) => {
        if (node.value % 3 === 0) {
            node.value = 'Fizz';
        }
        if (node.value % 5 === 0) {
            node.value = 'Buzz';
        }
        if (node.value % 3 === 0 && node.value % 5 === 0) {
            node.value = 'FizzBuzz';
        }
        if (node.value % 3 === 0) {
            node.value = node.value.toString();
        }
        if (node.left) fizzBuzz(node.left);
        if (node.right) fizzBuzz(node.right);
    }
    fizzBuzz(tree.root);
    return tree;
}

module.exports = {
    isBst,
    breadthFirst,
    isInclude,
    treeSum,
    maxPathSum,
    deleteNode,
    fizzBuzz
};