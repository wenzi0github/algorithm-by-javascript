import { hasCycleLinkedList } from '../src/libs/linked-list';

class ListNode<T> {
  val: T | null = null;
  next: ListNode<T> | null = null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

describe('test hasCycleLinkedList', () => {
  test('should get false when linked list has no cycle', () => {
    const head = new ListNode(0);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    head.next = node1;
    node1.next = node2;
    // node2.next = head;

    expect(hasCycleLinkedList(head)).toBeFalsy();
  });
  test('should get true when linked list has cycle', () => {
    const head = new ListNode(0);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    head.next = node1;
    node1.next = node2;
    node2.next = head;

    expect(hasCycleLinkedList(head)).toBeTruthy();
  });
});
