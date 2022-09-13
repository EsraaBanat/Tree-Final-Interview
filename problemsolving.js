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

    let queue = [ tree.root ];
    let result = [];

    while (queue.length) {
        const current = queue.shift();
        result.push(current.value);
         
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return result;
}

module.exports = {
    isBst,
    breadthFirst
};