import { isPrime, countPrimeEqualOrLessNum, getAllPrimesEqualOrLessNum } from '../src/libs/number';

describe('test isPrime util', () => {
  test('should get true when num is prime', () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(11)).toBeTruthy();
    expect(isPrime(101)).toBeTruthy();
  });
  test('should get false when num is not prime', () => {
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(9)).toBeFalsy();
    expect(isPrime(102)).toBeFalsy();
  });
});

describe('test countPrimeEqualOrLessNum', () => {
  test('should get prime count not greater then num', () => {
    expect(countPrimeEqualOrLessNum(1)).toBe(0);
    expect(countPrimeEqualOrLessNum(2)).toBe(1);
    expect(countPrimeEqualOrLessNum(20)).toBe(8);
  });
});

describe('test getAllPrimesEqualOrLessNum', () => {
  test('should get all primes not greater then num', () => {
    expect(getAllPrimesEqualOrLessNum(1)).toEqual([]);
    expect(getAllPrimesEqualOrLessNum(2)).toEqual([2]);
    expect(getAllPrimesEqualOrLessNum(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
