# 树

树是一种抽象数据类型（ADT）或是实现这种抽象数据类型的数据结构，用来模拟具有树状结构性质的数据集合。它是由 n(n>0)n(n>0) 个有限节点组成一个具有层次关系的集合。

把它叫做「树」是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。

它具有以下的特点：

-   每个节点都只有有限个子节点或无子节点；
-   没有父节点的节点称为根节点；
-   每一个非根节点有且只有一个父节点；
-   除了根节点外，每个子节点可以分为多个不相交的子树；
-   树里面没有环路。

这里贴一个由数组转为二叉树的工具：

```javascript
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const array2binary = (arr) => {
    if (!arr || !arr.length) {
        return null;
    }
    let index = 0;
    let queue = [];
    const len = arr.length;
    const head = new TreeNode(arr[index]);
    queue.push(head);

    while (index < len) {
        index++;
        const parent = queue.shift();
        if (arr[index] !== null && arr[index] !== undefined) {
            const node = new TreeNode(arr[index]);
            parent.left = node;
            queue.push(node);
        }

        index++;
        if (arr[index] !== null && arr[index] !== undefined) {
            const node = new TreeNode(arr[index]);
            parent.right = node;
            queue.push(node);
        }
    }
    return head;
};

module.exports = array2binary;
```

使用方式：

```javascript
// https://leetcode-cn.com/problems/sum-of-left-leaves/
const array2binary = require('./array2binary.js');

var sumOfLeftLeaves = function (root) {
    let sum = 0;
    const find = (node, type) => {
        if (node) {
            if (node.left) {
                find(node.left, 'left');
            }
            if (node.right) {
                find(node.right, 'right');
            }
            if (node.left === null && node.right === null && type === 'left') {
                sum += node.val;
            }
        }
    };
    find(root, '');
    return sum;
};

function test(arr) {
    const tree = array2binary(arr);
    const result = sumOfLeftLeaves(tree);
    console.log(result);
}
test([3, 9, 20, null, null, 15, 7]);
test([]);
test([1, 2, 3]);
test([1, 2]);
```
