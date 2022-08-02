// 链表相关

// type class ListNode<T> {
//   val: T | null = null;
//   next: ListNode<T> | null = null;

//   constructor(val: T) {
//     this.val = val;
//     this.next = null;
//   }
// }
interface ListNext {
  // val: T;
  next: ListNext | null;
}

/**
 * 判断链表是否有环
 * @param head 链表
 */
export const hasCycleLinkedList = <T extends ListNext>(head: T) => {
  let fast = head; // 快指针
  let slow = head; // 慢指针

  while (fast && fast.next) {
    slow = slow.next as T;
    fast = fast.next.next as T;

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
export const reverseLinkedList = <T extends ListNext>(head: T | null): T | null => {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseLinkedList(head.next); // 反转后的头节点
  head.next.next = head; // 将反转后的链表的尾节点与当前节点相连
  head.next = null;
  return newHead as T;
  // while (head && head.next) {
  //   const next = head.next;
  //   head.next.next = head;
  //   head = next;
  // }
  // return head.next as T;
};
