// https://leetcode-cn.com/problems/linked-list-cycle/
// 查找链表中是否有环
// 可以设置两个指针p1, p2，p1走的慢，每次走一步；p2走的快，每次走两步；如果p2.next===null说明到链表的尾部了，确认没有环
// 否则这两个指针一定会相遇

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head; // 慢指针
    let p2 = head; // 快指针

    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if (p1===p2) {
            return true;
        }
    }
    return false;
};