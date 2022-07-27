/**
 * 判断数字是否为质数
 * @param num 要判断的数字
 */
export const isPrime = (num: number) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, half = Math.floor(Math.sqrt(num)); i <= half; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * 统计小于等于num中质数的个数
 * @param {number} num
 */
export const countPrimeEqualOrLessNum = (num: number) => {
  let count = 0;
  let i = 2;

  while (i <= num) {
    if (isPrime(i)) {
      count++;
    }
    i++;
  }
  return count;
};

/**
 * 获取小于等于num的所有质数
 * @param {number} num
 */
export const getAllPrimesEqualOrLessNum = (num: number) => {
  const result: number[] = [];
  let i = 2;

  while (i <= num) {
    if (isPrime(i)) {
      result.push(i);
    }
    i++;
  }
  return result;
};
