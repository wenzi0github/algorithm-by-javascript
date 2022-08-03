import Stack from '../src/libs/stack';

describe('test Stack', () => {
  test('should size is zero when stack is empty', () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
    expect(stack.empty()).toBeTruthy();
  });
  test('should get top val when use top function', () => {
    const stack = new Stack();
    expect(stack.top()).toBeNull();
    stack.push(123);
    expect(stack.top()).toBe(123);
  });
  test('should remove top val when use pop function', () => {
    const stack = new Stack();
    stack.push(123);
    stack.push(456);
    expect(stack.top()).toBe(456);
    stack.pop();
    expect(stack.top()).toBe(123);
    stack.pop();
    expect(stack.top()).toBeNull();
  });
  test('should clear all data when use clear function', () => {
    const stack = new Stack();
    stack.push(123);
    stack.push(123);
    stack.push(123);
    stack.push(123);
    expect(stack.size()).toBe(4);
    stack.clear();
    expect(stack.size()).toBe(0);
  });
});
