import { Queue } from '../src';

test('should get end val by end()', () => {
  const queue = new Queue();
  expect(queue.end()).toBeNull();
  queue.push(123);
  expect(queue.end()).toBe(123);
  queue.push(456);
  expect(queue.end()).toBe(456);
});
test('should get front val by front()', () => {
  const queue = new Queue();
  expect(queue.front()).toBeNull();
  queue.push(123);
  expect(queue.front()).toBe(123);
  queue.push(456);
  expect(queue.front()).toBe(123);
});
test('should clear all data by clear()', () => {
  const queue = new Queue();
  queue.push(123);
  queue.push(456);
  expect(queue.size()).toBe(2);
  queue.clear();
  expect(queue.size()).toBe(0);
  queue.push(456);
  expect(queue.size()).toBe(1);
});
test('should get true when queue is empty', () => {
  const queue = new Queue();
  expect(queue.empty()).toBeTruthy();
  queue.push('abc');
  expect(queue.empty()).toBeFalsy();
});
test('should pop front val and size less one', () => {
  const queue = new Queue<number>();
  queue.push(123);
  queue.push(456);
  expect(queue.pop()).toBe(123);
  expect(queue.pop()).toBe(456);
  expect(queue.pop()).toBeNull();
});
test('should get all data by for-of', () => {
  const queue = new Queue<number>();
  queue.push(1);
  queue.push(2);
  queue.push(3);
  queue.push(4);
  queue.push(5);
  queue.push(6);

  const result: number[] = [];
  for (const val of queue) {
    result.push(val);
  }
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});
test('should has max cache when set size', () => {
  const queue = new Queue(2); // 最多存储2个，当超过限制时，无法继续存储
  expect(queue.push(1)).toBeTruthy();
  expect(queue.size()).toBe(1);
  expect(queue.push(2)).toBeTruthy();
  expect(queue.size()).toBe(2);
  expect(queue.push(3)).toBeFalsy();
  expect(queue.size()).toBe(2);
  queue.pop();
  expect(queue.size()).toBe(1);
});
