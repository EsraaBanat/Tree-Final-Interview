'use strict';
const Node = require('./node');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // add(value) {
    //     let node = new Node(value);
    //     if (!this.root) {
    //         this.root = node;
    //     }
    //     let current = this.root;
    //     while (current) {

    //     }
    // }

    preOrder() {
        if (!this.root) return [];
        let result = []; // root >> left >> right
        const traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    inOrder() {
        if (!this.root) return [];
        let result = []; // left >> root >> right
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        if (!this.root) return [];
        let result = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    findMax() {
        if (!this.root) return 'tree is empty';
        let max = this.root.value;
        const traverse = (node) => {
            if (node.left) {
                if (max > node.left.value) traverse(node.left);
                else {
                    max = node.left.value;
                    traverse(node.left);
                }
            }

            if (node.right) {
                if (max > node.right.value) traverse(node.right);
                else {
                    max = node.right.value;
                    traverse(node.right);
                }
            }
        }
        traverse(this.root);
        return max;
    }

    invertTree() {
        if (!this.root) {
            return null;
        }
        var current = this.root;
        while (current) {
            if (current.right) {
                if (current.left) {
                    let right = current.right.value;
                    let left = current.left.value;
                    current.right.value = left;
                    current.left.value = right;
                } else {
                    current.left = current.right;
                    current.right = null;
                }
                current = current.right;
            }
            if (current.left) {
                if (current.right) {
                    let right = current.right.value;
                    let left = current.left.value;
                    current.right.value = left;
                    current.left.value = right;
                } else {
                    current.right = current.left;
                    current.left = null;
                }
                current = current.left;
            }
            return this;
        }
    }

    sum() {
        if (!this.root) return 0;
        let sum = 0; // root >> left >> right
        const traverse = (node) => {
            sum = sum + node.value;
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return sum;
    }

}

class BinarySearchTree extends BinaryTree {

    insert(value) {
        var newNode = new Node(value);
        var current = this.root;
        if (!this.root) {
            this.root = newNode;
        }
        while (current) {
            if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
        }
    }

    contains(value) {
        let current = this.root;
        while (current) {
            if (currrent.value === value) return true;
            else if (current.value < value) current = current.left;
            else current = current.right;
        }
        return false;
    }

    max() {
        if (!this.root) return 'tree is empty ';
        let max = this.root.value;
        const traverse = (node) => {
            if (node.right) {
                if (max > node.right.value) traverse(node.right);
                else {
                    max = node.right.value;
                    traverse(node.right);
                }
            }
        }
        traverse(this.root);
        return max;
    }
    min() {
        if (!this.root) return 'tree is empty ';
        let min = this.root.value;
        const traverse = (node) => {
            if (node.left) {
                if (min < node.left.value) traverse(node.left);
                else {
                    min = node.left.value;
                    traverse(node.left);
                }
            }
        }
        traverse(this.root);
        return min;
    }
}

module.exports = {
    BinaryTree,
    BinarySearchTree,
}