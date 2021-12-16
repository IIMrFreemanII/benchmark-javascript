// Compared to a normal tree, BST has the following properties:
//
// every left child has a smaller value than its parent
// every right child has a larger value than its parent
// every node can contain from 0 to 2 children.

class TreeNode {
    value;
    left;
    right;

    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const node1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(1, null, null), null));

const inorder = (root) => {
    const nodes = [];
    if (root) {
        nodes.push(...inorder(root.left, nodes));
        nodes.push(root.value);
        nodes.push(...inorder(root.right, nodes));
    }
    return nodes;
}

console.log(inorder(node1));
// console.log(JSON.stringify(node1, null, 2));
// for our example tree, this returns [1,2,3,4,5,6]