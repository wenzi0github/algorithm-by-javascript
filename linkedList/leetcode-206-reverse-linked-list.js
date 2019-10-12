/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归实现
var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    var new_head = reverseList(head.next);  // 反转后的头节点
    head.next.next = head;                  // 将反转后的链表的尾节点与当前节点相连
    head.next = null;
    return new_head;
};

// 循环
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    var nextNode = head.next;
    var temp;

    head.next = null;
    while (nextNode) {
        temp = nextNode.next;
        nextNode.next = head;
        head = nextNode;
        nextNode = temp;
    }
    return head;
};

// 数组存储，然后反转
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    const list = [];
    let p = head;
    while (p) {
        let temp = p.next;
        p.next = null;
        list.push(p);
        p = temp;
    }
    let i = list.length - 1;
    head = list[i];
    let q = head;
    while (i--) {
        p = list[i];
        q.next = p;
        q = p;
    }
    return head;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;
console.log(reverseList(a));