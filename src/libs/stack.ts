// 栈相关

class Stack<T> {
  private list: T[] = [];

  /**
   * 判断是否为空
   * @returns {boolean}
   */
  empty(): boolean {
    return this.size() === 0;
  }

  /**
   * 压入数据，并返回最新的长度
   * @param val 压入的数据
   * @returns {number}
   */
  push(val: T): number {
    this.list.push(val);
    return this.size();
  }

  /**
   * 获取栈顶的数据
   * @returns {T|null}
   */
  top(): T | null {
    const { length } = this.list;
    if (length >= 1) {
      return this.list[length - 1];
    }
    return null;
  }

  /**
   * 弹出栈顶的数据，并返回该数据
   * @returns {T | null}
   */
  pop(): T | null {
    return this.list.pop() ?? null;
  }

  /**
   * 获取该栈的长度
   * @returns {number}
   */
  size(): number {
    return this.list.length;
  }

  /**
   * 清空数据
   */
  clear() {
    this.list.length = 0;
  }
}
export default Stack;
