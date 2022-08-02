import { hasCycleLinkedList, reverseLinkedList } from '../src/libs/linked-list';

class ListNode<T> {
  val: T;
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

describe('test reverseLinkedList', () => {
  test('should get reverse list', () => {
    const head = new ListNode(0);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    head.next = node1;
    node1.next = node2;

    const reverseHead = reverseLinkedList(head);
    const result: number[] = [];

    let node = reverseHead;
    while (node) {
      result.push(node.val);
      node = node.next;
    }
    expect(result).toEqual([2, 1, 0]);
  });
});
