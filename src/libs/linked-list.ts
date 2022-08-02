// 链表相关

// type class ListNode<T> {
//   val: T | null = null;
//   next: ListNode<T> | null = null;

//   constructor(val: T) {
//     this.val = val;
//     this.next = null;
//   }
// }
interface ListNode<T> {
  val: T;
  next: ListNode<T> | null;
}

/**
 * 判断链表是否有环
 * @param head 链表
 */
export const hasCycleLinkedList = <T>(head: ListNode<T> | null) => {
  let fast: ListNode<T> | null = head; // 快指针
  let slow: ListNode<T> | null = head; // 慢指针

  // not need check slow type in fact, but will show error in typescript
  while (slow && fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
};

/**
 * 获取链表里环的位置
 */
export const getCyclePosLinkedList = (head: any) => {};

/**
 * 获取链表里环的节点
 */
export const getCycleNodeLinkedList = (head: any) => {};

/**
 * 翻转链表
 * @param head 链表
 */
export const reverseLinkedList = <T>(head: ListNode<T> | null): ListNode<T> | null => {
  if (head === null || head.next === null) {
    return head;
  }

  // recursion
  // const newHead = reverseLinkedList(head.next); // 反转后的头节点
  // head.next.next = head; // 将反转后的链表的尾节点与当前节点相连
  // head.next = null;
  // return newHead;

  // loop
  // https://segmentfault.com/a/1190000037518253
  let prev: ListNode<T> | null = null;
  let curr: ListNode<T> | null = head;
  while (curr) {
    const next: ListNode<T> | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
