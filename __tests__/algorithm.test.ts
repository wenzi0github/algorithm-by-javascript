import { gcd } from '../src/libs/algorithm';

describe('test gcd function', () => {
  test('should get greatest common divisor', () => {
    expect(gcd(6, 4)).toBe(2);
  });
});
