import { mergeSortedArray, removeDuplicates } from '../src/array';

describe('test mergeSortedArray util', () => {
  test('should get sorted array', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6, 8];
    expect(mergeSortedArray(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });
  test('should get sorted array', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6];
    expect(mergeSortedArray(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe('test removeDuplicates util', () => {
  test('should get max duplicate 2 arr by default', () => {
    expect(removeDuplicates([1, 1, 2, 2, 2, 2, 1, 1, 3])).toEqual([3]);
    expect(removeDuplicates([1, 1, 2, 2, 2, 2, 1, 1])).toEqual([]);
    expect(removeDuplicates([1, 2, 2, 1])).toEqual([]);
  });
  test('should get max duplicate 3 arr', () => {
    expect(removeDuplicates([1, 1, 2, 2, 2, 2, 1, 1, 3], 3)).toEqual([3]);
    expect(removeDuplicates([1, 1, 2, 2, 2, 2, 1, 1], 3)).toEqual([]);
    expect(removeDuplicates([1, 1], 3)).toEqual([1, 1]);
  });
});
