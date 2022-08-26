import Stack from './stack';

// 数组相关

/**
 * 合并两个有序的数组
 * @param arr1 有序数组1
 * @param arr2 有序数组2
 */
export const mergeSortedArray = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    // 数组1有剩余
    return result.concat(arr1.slice(i));
  }
  return result.concat(arr2.slice(j));
};

/**
 * 删除数组中的重复项
 * @param arr 要删除重复数据的数组
 * @param duplicatedNum 重复的个数
 */
export const removeDuplicates = <T = number>(arr: T[], duplicatedNum = 2): T[] => {
  const { length } = arr;

  // [item, count], 前一个item表示当前存储的是几，count表示该item的连续个数
  const stack = new Stack<[T, number]>();

  if (length < duplicatedNum) {
    return arr;
  }
  let i = 0;
  while (i < length) {
    const item = arr[i];

    if (stack.empty()) {
      stack.push([item, 1]);
      i++;
      continue;
    }

    const topItem = stack.top();
    if (topItem?.[0] === item) {
      // 当前元素与栈顶元素相同
      topItem[1]++;
      i++;
      continue;
    }
    if (topItem && topItem[1] >= duplicatedNum) {
      // 连续次数超过设定的次数
      stack.pop();
    } else {
      stack.push([item, 1]);
      i++;
    }
  }
  // 结尾时判断一下
  const topItem = stack.top();
  if (topItem && topItem[1] >= duplicatedNum) {
    stack.pop();
  }
  // 将栈中的数据拿出来，拼接成新的数组，栈里的数据结构比如为[[1,3], [2, 2]]
  // 即有3个1（[1,1,1]），2个2([2,2])，将每个单独的数组拼接成一个大的数组
  const result: T[] = [];
  const nums = [];
  while (!stack.empty()) {
    const item = stack.pop();
    nums.push(item);
  }

  // 栈中的数据是相反的，这里倒着生成
  for (let i = nums.length - 1; i >= 0; i--) {
    const [item, count] = nums[i] as [T, number];
    let j = count;
    while (j--) {
      result.push(item);
    }
  }
  return result;
};

/**
 * 二分查找，返回value在数组中的下标，若找不到则返回-1
 * @param arr 数组
 * @return {number} value在数组中的下标
 */
export const binarySearch = <T = number>(arr: T[], value: T): number => {
  // 调用方需自己保证数组的有序性
  const { length } = arr;
  let i = 0;
  let j = length - 1;

  while (i <= j) {
    const mid = i + Math.floor((j - i) / 2); // js中其实不用考虑整数的上限限制，不过这样写会规范一些
    if (arr[mid] === value) {
      return mid;
    }
    if (arr[mid] > value) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return -1;
};
