// Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
/**
 * You are given two non-empty linked lists representing two non-negative 
 * integers. The digits are stored in reverse order and each of their nodes 
 * contain a single digit. Add the two numbers and return it as a linked list. 
 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 两个非负数分别使用链表进行存储，链表中的数据是非负数翻转后存储的，每个节点只存储一个位置上的数据。要求对这两个非负数进行相加，最后依然用链表的形式返回。

 注意：所有给到的数据均没有前置0，除非这个数字本身就是0
 */

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
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    var l3 = new ListNode(0);
    var r = l3;
    var c = 0;

    while (l1 || l2 || c) {
        if (l1) {
            c += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            c += l2.val;
            l2 = l2.next;
        }

        let res = c % 10;
        c = Math.floor(c / 10);

        let node = new ListNode(res);
        r.next = node;
        r = node;
    }

    return l3.next;
};
