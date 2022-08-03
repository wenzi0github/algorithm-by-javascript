/**
 * 获取两个数的最大公约数
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export const gcd = (a: number, b: number): number => {
  let c = 0;

  while (a % b != 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return c;
};
