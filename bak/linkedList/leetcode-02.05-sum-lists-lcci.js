// https://leetcode-cn.com/problems/sum-lists-lcci/
// 02.05. 链表求和

// 给定两个用链表表示的整数，每个节点包含一个数位。
// 这些数位是反向存放的，也就是个位排在链表首部。
// 编写函数对这两个整数求和，并用链表形式返回结果。

// 解法，就是模拟正常的竖式加法
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let root = null,
        p = null,
        c = 0;

    const create = (node1, node2) => {
        const c1 = node1 ? node1.val : 0;
        const c2 = node2 ? node2.val : 0;

        return new ListNode(c1 + c2);
    };
    root = new ListNode(0);
    p = root;
    while (l1 || l2) {
        const c1 = l1 ? l1.val : 0;
        const c2 = l2 ? l2.val : 0;
        const result = c1 + c2 + c;
        c = parseInt(result / 10);

        p.next = new ListNode(result % 10);
        p = p.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if (c === 1) {
        p.next = new ListNode(c);
    }
    return root.next;
};
