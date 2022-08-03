class QueueNode<T> {
  val: T;
  next: QueueNode<T> | null = null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

class Queue<T> {
  private maxSize = -1; // 队列的最长容量，-1表示没有限制
  private curSize = 0;
  private head: QueueNode<T> | null = null; // 头指针
  private tail: QueueNode<T> | null = null; // 尾指针

  constructor(size?: number) {
    if (typeof size === 'number') {
      this.maxSize = size;
    }
  }

  /**
   * 插入数据，并返回是否插入成功
   * @param val 要插入的数据
   * @returns {boolean}
   */
  push(val: T): boolean {
    if (this.maxSize >= 0 && this.curSize >= this.maxSize) {
      // 有限制，并且已达到最大容量
      return false;
    }
    const node = new QueueNode(val);

    if (this.head === null) {
      // 这是插入的第1个节点
      this.head = node;
      this.tail = node;
    } else if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }
    this.curSize++;
    return true;
  }

  /**
   * 删除队列中的头部元素并返回
   * @returns {T | null}
   */
  pop(): T | null {
    if (this.head) {
      const node = this.head;
      this.head = this.head.next;
      this.curSize--;
      return node.val;
    }
    return null;
  }
  front(): T | null {
    if (this.head) {
      return this.head.val;
    }
    return null;
  }
  end(): T | null {
    if (this.tail) {
      return this.tail.val;
    }
    return null;
  }
  empty() {
    return this.head === null || this.tail === null;
  }
  clear() {
    this.curSize = 0;
    this.head = null;
    this.tail = null;
  }
  size() {
    return this.curSize;
  }

  // 迭代器，方便循环
  // https://es6.ruanyifeng.com/#docs/iterator
  [Symbol.iterator]() {
    const head = this.head;
    let node = this.head;

    return {
      next(): {
        value: T;
        done: boolean;
      } {
        if (node) {
          const curNode = node;
          node = node.next;

          return {
            value: curNode.val,
            done: false,
          };
        }
        return {
          value: null as unknown as T, // 这个value其实用不到，但为了数据格式的统一，强制为T类型
          done: true,
        };
      },
    };
  }
}
export default Queue;
